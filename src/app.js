const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors({
  origin: [
    "https://razorpay-frontend-axwz-hc5a1eug6-nivetha-vs-projects-9b5456c8.vercel.app",
    "https://razorpay-frontend-axwz-ratho6qj2-nivetha-vs-projects-9b5456c8.vercel.app"
  ],
  credentials: true
}));
app.use(express.json());

// Add this line BEFORE your routes
app.use('/api/payment/webhook', express.json({ type: '*/*' }));

app.use('/api/payment', require('./routes/paymentRoutes'));

const db = require('./models/db');

app.get('/api/test-db', (req, res) => {
  db.query('SELECT 1 AS test', (err, results) => {
    if (err) {
      return res.status(500).json({ success: false, error: err.message });
    }
    res.json({ success: true, results });
  });
});

app.get('/api/test-insert', (req, res) => {
  db.query(
    "INSERT INTO payments (payment_id, order_id, status, amount, event) VALUES (?, ?, ?, ?, ?)",
    ["test_id", "test_order", "test_status", 123, JSON.stringify({test: true})],
    (err, results) => {
      if (err) return res.status(500).json({ success: false, error: err.message });
      res.json({ success: true, results });
    }
  );
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});