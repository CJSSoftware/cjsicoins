const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String },
    discordId: { type: String, unique: true, sparse: true },
    username: { type: String },
    coins: { type: Number, default: 0 },
    role: { type: String, enum: ['user', 'admin'], default: 'user' }
});

module.exports = mongoose.model('User', UserSchema);
