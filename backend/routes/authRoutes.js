const express = require('express');
const passport = require('passport');
const { login, register } = require('../controllers/authController');

const router = express.Router();

router.post('https://hostengland.co.uk/login', login);
router.post('https://hostengland.co.uk/register', register);

router.get('https://hostengland.co.uk/discord', passport.authenticate('discord'));
router.get('https://hostengland.co.uk/discord/callback', passport.authenticate('discord', {
    successRedirect: 'https://hostengland.co.uk/dashboard',
    failureRedirect: 'https://hostengland.co.uk/login'
}));

module.exports = router;
