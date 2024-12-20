import express from 'express';
import Property from '../models/Properties.js';
const router = express.Router();

// Register User
router.post('/create', async (req, res) => {
  try {
    const property = new Property(req.body);
    await property.save();
    res.status(201).json({ message: 'Property registered successfully!' });
  } catch (err) {
    res.status(400).json({ error: 'Error registering property', details: err });
  }
});



export default router;
