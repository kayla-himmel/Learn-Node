const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const { catchErrors } = require('../handlers/errorHandlers');

// Displays http://localhost:7777/stores if no additional page URL is present
router.get('/', catchErrors(storeController.getStores));

// Displays http://localhost:7777/stores
router.get('/stores', catchErrors(storeController.getStores));

// IN FINISHED PROJECT -- HAVEN'T ADDED IT IN THROUGH THE TUTORIAL AS OF VIDEO 33
// router.get('/stores/page/:page', catchErrors(storeController.getStores));

// Displays http://localhost:7777/add (the add store page) if /add is present at the end of the URL 
router.get('/add', 
  authController.isLoggedIn, 
  storeController.addStore
);

// Still displays the add URL but uploads the file, resizes it, then submits the form data to create a store
router.post('/add',
  storeController.upload,
  catchErrors(storeController.resize),
  catchErrors(storeController.createStore)
);

// Still displays the add URL but uploads the file/resizes it then submits the form data to edit a store without adding a duplicate store
router.post('/add/:id',
  storeController.upload,
  catchErrors(storeController.resize),
  catchErrors(storeController.updateStore));

// Redirect to http://localhost:7777/stores/[storeID]/edit
router.get('/stores/:id/edit', catchErrors(storeController.editStore));

// Redirect to the store's detail page
router.get('/store/:slug', catchErrors(storeController.getStoreBySlug));

// Displays http://localhost:7777/tags if /tags is present at the end of the URL 
router.get('/tags', catchErrors(storeController.getStoresByTag));
// Displays http://localhost:7777/tags if /tags/[specific tag name (ex: 'vegan')] is present at the end of the URL 
router.get('/tags/:tag', catchErrors(storeController.getStoresByTag));

// Displays http://localhost:7777/login page with a login form
router.get('/login', userController.loginForm);
// Sends user-provided login info to check against the DB (passport handles all this in passport.js and authController.js)
router.post('/login', authController.login);

// Displays http://localhost:7777/register page with a sign-up form
router.get('/register', userController.registerForm);

// Validate registration data, register the user, and log them in
router.post('/register', 
  userController.validateRegister,
  userController.register,
  authController.login
);

// Logs user out and displays homepage with a message that the user has logged out
router.get('/logout', authController.logout);

// Displays http://localhost:7777/account with the account info
router.get('/account', 
  authController.isLoggedIn, 
  userController.account
);

// Lets the user update their name or email address on the account page and saves any changes to the DB
router.post('/account', catchErrors(userController.updateAccount));
// Send the user a password reset token if their email exists in the DB
router.post('/account/forgot', catchErrors(authController.forgot));
// Handles the checking showing the password reset form if the reset token matches and is not yet expired
router.get('/account/reset/:token', catchErrors(authController.reset));
// Handles resetting a user's password in the DB
router.post('/account/reset/:token', 
  authController.confirmedPasswords,
  catchErrors(authController.update)
);

// Displays http://localhost:7777/map with a map of all the stores
router.get('/map', storeController.mapPage);

// API endpoints
router.get('/api/search', catchErrors(storeController.searchStores));
router.get('/api/stores/near', catchErrors(storeController.mapStores));

module.exports = router;
