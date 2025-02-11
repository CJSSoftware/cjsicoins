const User = require('../models/User');
const Transaction = require('../models/Transaction');

// Get all users (Admin only)
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get a single user by ID
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Edit a user's balance (Admin only)
exports.updateUserBalance = async (req, res) => {
    const { userId, amount } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: 'User not found' });

        user.coins += amount;
        await user.save();

        res.json({ message: 'Balance updated successfully', coins: user.coins });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Get all transactions
exports.getAllTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find().populate('userId', 'email username');
        res.json(transactions);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Process refund (Admin only)
exports.processRefund = async (req, res) => {
    const { transactionId } = req.body;

    try {
        const transaction = await Transaction.findById(transactionId);
        if (!transaction) return res.status(404).json({ message: 'Transaction not found' });

        const user = await User.findById(transaction.userId);
        if (!user) return res.status(404).json({ message: 'User not found' });

        user.coins += transaction.amount;
        await user.save();

        await Transaction.findByIdAndDelete(transactionId);

        res.json({ message: 'Refund processed successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Delete a user (Admin only)
exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
