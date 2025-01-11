import express from "express";
import paypal from "paypal-rest-sdk";

const router = express.Router();

paypal.configure({
  mode: "sandbox", // or "live"
  client_id: "AZTDtLKtp_fNQcQ3OxFXrTV4bt5FX3-7roSFAmAVOw60eXt6wcJY-PuKzWi2D_2arw87L8mPIbpsqOK5", // Replace with your Client ID
  client_secret: "EJwXRZDaBmVQ2oaM33BfvpXoPVKEOIaDUN2EjQXVIG_LsFvYJE6nDM7m_ICvknxvAkAAcar8AJtbl26o", // Replace with your Secret
});

// Verify Payment
router.post("/verify", async (req, res) => {
  const { paymentId, payerId } = req.body;

  const executePaymentJson = {
    payer_id: payerId,
  };

  try {
    paypal.payment.execute(paymentId, executePaymentJson, (error, payment) => {
      if (error) {
        console.error(error);
        res.status(500).json({ message: "Payment verification failed" });
      } else {
        res.status(200).json({ message: "Payment verified successfully", payment });
      }
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
});

export default router;
