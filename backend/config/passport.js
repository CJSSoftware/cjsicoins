const passport = require('passport');
const DiscordStrategy = require('passport-discord').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');

passport.use(new LocalStrategy(
    async (email, password, done) => {
        try {
            const user = await User.findOne({ email });
            if (!user || user.password !== password) {
                return done(null, false, { message: 'Invalid credentials' });
            }
            return done(null, user);
        } catch (err) {
            return done(err);
        }
    }
));

passport.use(new DiscordStrategy({
    clientID: process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_CLIENT_SECRET,
    callbackURL: process.env.DISCORD_REDIRECT_URI,
    scope: ['identify', 'email']
}, async (accessToken, refreshToken, profile, done) => {
    try {
        let user = await User.findOne({ discordId: profile.id });
        if (!user) {
            user = new User({
                discordId: profile.id,
                username: profile.username,
                email: profile.email
            });
            await user.save();
        }
        return done(null, user);
    } catch (err) {
        return done(err);
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (err) {
        done(err);
    }
});
