const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Transaction = require('../models/Transaction'); // Assuming you have a Transaction model
const { authenticateAdmin } = require('../middleware/authMiddleware'); // Admin middleware for protecting routes

// Get all users
router.get('/users', authenticateAdmin, async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all transactions
router.get('/transactions', authenticateAdmin, async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Adjust user balance
router.put('/user/:id/balance', authenticateAdmin, async (req, res) => {
  const { balance } = req.body;
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.balance = balance;
    await user.save();

    res.status(200).json({ message: 'Balance updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
