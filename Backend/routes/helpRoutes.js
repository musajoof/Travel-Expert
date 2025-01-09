import express from 'express';
import mongoose from 'mongoose';
import HelpRequest from '../models/HelpRequest.js';

const router = express.Router();

// POST route to submit a help request
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newRequest = new HelpRequest({ name, email, message });
    await newRequest.save();

    res.status(201).json({ message: 'Help request submitted successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to submit help request', error });
  }
});

// GET route to retrieve all help requests (optional for admin view)
router.get('/', async (req, res) => {
  try {
    const requests = await HelpRequest.find();
    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch help requests', error });
  }
});

export default router;
