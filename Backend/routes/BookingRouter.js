import express from "express";
import Booking from "../models/BookingModel.js";

import mongoose from "mongoose"; 
const router = express.Router();

router.post("/create", async (req, res) => {
  const { userId, service, amount, paymentId } = req.body;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ message: "Invalid user ID format" });
  }

  try {
    const newBooking = new Booking({
      user: new mongoose.Types.ObjectId(userId),
      service,
      amount,
      paymentId,
      status: "Confirmed",
    });

    await newBooking.save();
    res.status(201).json({ message: "Booking created successfully", booking: newBooking });
  } catch (error) {
    res.status(500).json({ message: "Error creating booking", error });
  }
});


router.get("/:userId", async (req, res) => {
  const { userId } = req.params;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ message: "Invalid user ID format" });
  }

  try {
    const bookings = await Booking.find({ user: new mongoose.Types.ObjectId(userId) });
    res.status(200).json({ bookings });
  } catch (error) {
    res.status(500).json({ message: "Error fetching bookings", error });
  }
});


export default router;
