const express = require('express');
const router = express.Router();

// Mock data for demonstration purposes
const walletData = {
  balance: 1000.00,
  transactions: [
    { type: 'deposit', amount: 500 },
    { type: 'withdrawal', amount: 200 },
  ],
};

// Endpoint to fetch wallet information
router.get('/', (req, res) => {
  res.json(walletData);
});

module.exports = router;
