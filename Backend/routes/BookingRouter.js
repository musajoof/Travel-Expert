import express from "express";
import Booking from "../models/BookingModel.js";

const router = express.Router();

// Create a new booking
router.post("/create", async (req, res) => {
  const { userId, service, amount, paymentId } = req.body;

  try {
    const newBooking = new Booking({
      user: userId,
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

// Get bookings for a user
router.get("/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const bookings = await Booking.find({ user: userId });
    res.status(200).json({ bookings });
  } catch (error) {
    res.status(500).json({ message: "Error fetching bookings", error });
  }
});

export default router;
