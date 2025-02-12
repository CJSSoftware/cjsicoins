const express = require('express');
const passport = require('passport');
const { login, register } = require('../controllers/authController');

const router = express.Router();

router.post('http://localhost:3000/login', login);
router.post('http://localhost:3000/register', register);

router.get('http://hostengland.co.uk/discord', passport.authenticate('discord'));
router.get('http://hostengland.co.uk/discord/callback', passport.authenticate('discord', {
    successRedirect: 'http://localhost:3000/dashboard',
    failureRedirect: 'https//localhost:3000/login'
}));

module.exports = router;
