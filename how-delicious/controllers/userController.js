const mongoose = require('mongoose');
const User = mongoose.model('User');
const promisify = require('es6-promisify');

// renders the login form on the /login page
exports.loginForm = (req, res) => {
  res.render('login', { title: 'Login' });
};

// renders the registration form on the /register page
exports.registerForm = (req, res) => {
  res.render('register', { title: 'Register' });
}

// middleware to check form field validation
exports.validateRegister = (req, res, next) => {
  req.sanitizeBody('name');
  req.checkBody('name', 'You must supply a name!').notEmpty();
  req.checkBody('email', 'That Email is not valid!').isEmail();
  req.sanitizeBody('email').normalizeEmail({
    gmail_remove_dots: false,
    remove_extension: false,
    gmail_remove_subaddress: false
  });
  req.checkBody('password', 'Password Cannot be Blank!').notEmpty();
  req.checkBody('password-confirm', 'Confirmed Password cannot be blank!').notEmpty();
  req.checkBody('password-confirm', 'Oops! Your passwords do not match').equals(req.body.password);

  const errors = req.validationErrors();
  if (errors) {
    req.flash('error', errors.map(err => err.msg));
    res.render('register', { title: 'Register', body: req.body, flashes: req.flash() });
    return; // stop the fn from running
  }
  next(); // there were no errors!
};

exports.register = async (req, res, next) => {
  const user = new User({ email: req.body.email, name: req.body.name });
  const register = promisify(User.register, User);
  await register(user, req.body.password);
  next(); // pass to authControlloer.login
};

exports.account = (req, res) => {
  res.render('account', { title: 'Edit Your Account' });
};

exports.updateAccount = async (req, res) => {
  // store any change locally first
  const updates = {
    name: req.body.name,
    email: req.body.email
  };

  const user = await User.findOneAndUpdate(
    // query the DB for the user's ID
    { _id: req.user._id },
    // update 
    { $set: updates },
    // options - allows the new updates to overwrite the old data if they pass the validators
    { new: true, runValidators: true, context: 'query' }
  );
  req.flash('success', 'Your account has been updated')
  res.redirect('back');
};