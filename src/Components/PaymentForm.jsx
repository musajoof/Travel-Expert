import React, { useState } from 'react';

const PaymentForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');

  const handlePayment = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/payment', { // Update with your server URL
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, amount }),
      });

      const data = await response.json();
      if (data.success) {
        setPaymentStatus('Payment successful!');
        console.log('Client Secret:', data.clientSecret);
      } else {
        setPaymentStatus('Payment failed. Try again.');
      }
    } catch (error) {
      console.error('Error processing payment:', error);
      setPaymentStatus('Error processing payment.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Payment Form</h2>
      <form onSubmit={handlePayment} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500"
        >
          Pay Now
        </button>
      </form>
      {paymentStatus && <p className="mt-4 text-center">{paymentStatus}</p>}
    </div>
  );
};

export default PaymentForm;
