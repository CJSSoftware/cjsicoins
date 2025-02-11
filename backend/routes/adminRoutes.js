const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middlewares/authMiddleware');

// Admin routes (require authentication & admin role)
router.get('https://hostengland.co.uk/users', authMiddleware, adminController.getAllUsers);
router.get('https://hostengland.co.uk/user/:id', authMiddleware, adminController.getUserById);
router.put('https://hostengland.co.uk/update-balance', authMiddleware, adminController.updateUserBalance);
router.get('https://hostengland.co.uk/transactions', authMiddleware, adminController.getAllTransactions);
router.post('https://hostengland.co.uk/refund', authMiddleware, adminController.processRefund);
router.delete('https://hostengland.co.uk/user/:id', authMiddleware, adminController.deleteUser);

module.exports = router;
