import express from 'express';
// import Stripe from 'stripe';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
// const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/Travel-Expert", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// // import userRoutes from './routes/userRoutes';
import userRoutes from './routes/userRoutes.js';
import propertyRoutes from './routes/propertyRoutes.js';
import helpRoutes from "./routes/helpRoutes.js"; 
import BookingRouter from "./routes/BookingRouter.js";   

app.use('/api/users', userRoutes);
app.use('/api/properties', propertyRoutes);
app.use("/api/help", helpRoutes);
app.use("/api/bookings", BookingRouter);
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));




// Handle 404 errors
app.use((req, res, next) => {
  res.status(404).send('Route not found');
});

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});