const express = require('express');
const Stripe = require('stripe');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const stripe = Stripe('4242 4242 4242 4242');

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.post('/api/payment', async (req, res) => {
  const { name, email, amount } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Stripe expects the amount in cents
      currency: 'usd',
      payment_method_types: ['card'],
      description: `Payment by ${name} (${email})`,
    });

    res.status(200).json({ success: true, clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Payment Error:', error);
    res.status(500).json({ success: false, message: 'Payment failed' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));

const userRoutes = require('./routes/userRoutes');

app.use('/api/users', userRoutes);

