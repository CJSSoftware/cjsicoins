const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

// User Routes
router.post('https://hostengland.co.uk/register', userController.registerUser);
router.post('https://hostengland.co.uk/login', userController.loginUser);
router.get('https://hostengland.co.uk/profile', authMiddleware, userController.getUserProfile);
router.put('https://hostengland.co.uk/profile', authMiddleware, userController.updateUserProfile);
router.get('https://hostengland.co.uk/transactions', authMiddleware, userController.getUserTransactions);
router.delete('https://hostengland.co.uk/account', authMiddleware, userController.deleteUserAccount);

module.exports = router;
