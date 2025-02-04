import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    userId: "67a13b9a1ef853b574cd6ec4",
    service: "",
    amount: "",
    paymentId: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/bookings/create", { 
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});

      const data = await response.json();
      if (response.ok) {
        alert("Booking successful!");
        navigate("/payment"); // Redirect to payment page
      } else {
        alert(data.message || "Error creating booking.");
      }
    } catch (error) {
      console.error("Error submitting booking:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800">
      <form
        className="w-full max-w-lg bg-white dark:bg-gray-900 p-6 rounded shadow-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-bold mb-4">Book Your Service</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium">User ID</label>
          <input
            type="text"
            name="userId"
            value={formData.userId}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Service</label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select Service</option>
            <option value="Hotel">Hotel</option>
            <option value="Cruise">Cruise</option>
            <option value="Tour">Tour</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Amount</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Payment ID</label>
          <input
            type="text"
            name="paymentId"
            value={formData.paymentId}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
