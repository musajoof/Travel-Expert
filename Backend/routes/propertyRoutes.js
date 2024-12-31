import express from 'express';
import Property from '../models/Properties.js';
import multer from 'multer';
import path from 'path';
const router = express.Router();

// Register User
router.get('/', async (req, res) => {
  try {
   const properties = await Property.find({});
     res.status(200).json(properties);
  } catch (err) {
    res.status(400).json({ error: 'Error registering property', details: err });
  }
});


router.get('/edit/:id', async (req, res) => {
  try {
    const {id} = req.params 
    const property = await Property.findById(id)
    res.status(200).json(property);
  } catch (err) {
    res.status(400).json({ error: 'Error registering property', details: err });
  }
});


const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, 'images/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '.'+ file.mimetype.split('/')[1]);
  }
});
const upload = multer({ storage });
router.post('/update/:id', upload.single('image'), async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = { ...req.body };

    if (req.file) {
      const filePath = path.join('images', req.file.filename);
      updateData.image = filePath;
    }

    const property = await Property.findByIdAndUpdate(id, updateData);
    res.status(200).json(property);
  } catch (err) {
    res.status(400).json({ error: 'Error updating property', details: err });
  }
});

// Route to handle image upload and save file path to database
router.post('/create', upload.single('image'), async (req, res) => {
  try {
    const filePath = path.join('images', req.file.filename);
    const property = new Property({ ...req.body, image: filePath });
    await property.save();
    res.status(201).json({ message: 'Property and image uploaded successfully!', property });
  } catch (err) {
    res.status(400).json({ error: 'Error uploading image and saving property', details: err });
  }
});



export default router;
