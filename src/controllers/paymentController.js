const db = require('../models/db');
const Razorpay = require('razorpay');
const razorpay = new Razorpay({
  key_id: 'rzp_test_RIyjeTmNCvUynj',
  key_secret: 'oFOR '
});

exports.createOrder = async (req, res) => {
  const { totalAmount } = req.body;
  const options = {
    amount: totalAmount * 100,
    currency: "INR",
    receipt: "receipt_order_" + Date.now()
  };
  try {
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.verifyPayment = (req, res) => {
  const { paymentId, orderId, signature } = req.body;
  res.json({
    message: 'Payment verified (stub)',
    paymentId,
    orderId,
    signature
  });
};

exports.handleWebhook = (req, res) => {
  console.log('Webhook received:', req.body);
  // ...insert logic...
};