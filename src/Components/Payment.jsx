import React, { useState } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Payment = () => {
  const [paid, setPaid] = useState(false);
  const [error, setError] = useState(null);

  const handleApprove = (orderId) => {
    setPaid(true);
    console.log("Order ID: ", orderId);
  };

  if (paid) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
        <h1 className="text-2xl font-bold">Payment Successful! 🎉</h1>
        <p>Thank you for your purchase.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
        <h1 className="text-2xl font-bold">Error in processing payment.</h1>
        <p>Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-800 dark:text-white text-gray-800 border-2 rounded-md">
      <header className=" dark:bg-gray-900 p-4 shadow">
        <h1 className="text-center text-2xl font-bold">Complete Your Payment</h1>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center px-4 ">
        <div className="w-full max-w-md bg-white dark:bg-gray-900 dark:text-slate-900 rounded-lg shadow-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Payment Summary</h2>
          <p className="mb-2">Item: Premium Travel Package</p>
          <p className="mb-4">Price: $200</p>

          <PayPalScriptProvider
            options={{
              "client-id": "AZTDtLKtp_fNQcQ3OxFXrTV4bt5FX3-7roSFAmAVOw60eXt6wcJY-PuKzWi2D_2arw87L8mPIbpsqOK5", // Replace with your PayPal Client ID
              currency: "USD",
            }}
          >
            <PayPalButtons
              style={{ layout: "vertical", color: "blue" }}
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: "200.00 ", // Replace with dynamic price
                      },
                    },
                  ],
                });
              }}
              onApprove={(data, actions) => {
                return actions.order.capture().then((details) => {
                  handleApprove(data.orderID);
                });
              }}
              onError={(err) => {
                setError(err);
                console.error("PayPal Checkout Error: ", err);
              }}
            />
          </PayPalScriptProvider>
        </div>
      </main>
    </div>
  );
};

export default Payment;
