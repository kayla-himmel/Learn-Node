const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
const { catchErrors } = require('../handlers/errorHandlers');

// Displays http://localhost:7777/stores if no additional page URL is present
router.get('/', catchErrors(storeController.getStores));

// Displays http://localhost:7777/stores
router.get('/stores', catchErrors(storeController.getStores));

// Displays http://localhost:7777/add (the add store page) if /add is present at the end of the URL 
router.get('/add', storeController.addStore);

// Still displays the add URL but submits the form data to create a store
router.post('/add', catchErrors(storeController.createStore));

// Still displays the add URL but submits the form data to edit a store without adding a duplicate store
router.post('/add/:id', catchErrors(storeController.updateStore));

// Redirect to http://localhost:7777/stores/[storeID]/edit
router.get('/stores/:id/edit', catchErrors(storeController.editStore));

module.exports = router;
