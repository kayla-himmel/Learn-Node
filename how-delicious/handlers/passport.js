const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');

// configure passport to use for session
passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
