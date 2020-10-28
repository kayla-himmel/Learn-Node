const mongoose = require('mongoose');
const Store = mongoose.model('Store');

exports.homePage = (req, res) => {
  // render index pug template
  res.render('index');
};

exports.addStore = (req, res) => {
  // render editStore pug template and add the title "Add Store"
  res.render('editStore', { title: 'Add Store' });
};

exports.createStore = async (req, res) => {
  // await the creation of a new store and it's date to be saved, then
  const store = await (new Store(req.body)).save();
  // then created the success flash message and store it in locals
  req.flash('success', `${store.name} successfully created.`);
  // then display the flash message once the page redirects to the new store's page
  res.redirect(`/stores/${store.slug}`);
};

exports.getStores = async (req, res) => {
  // query the database for a list of all stores
  const stores = await Store.find();
  console.log(stores);
  // render stores pug template and add the title "Available Stores:"
  res.render('stores', { title: 'Available Stores:', stores })
  // also render the list of stores

};

exports.editStore = async (req, res) => {
  // use the findOne method to find the store using its id 
  const store = await Store.findOne({ _id: req.params.id });
  // confirm user is the owner of the store -- TO-DO once sessions are in place

  // render out the edit form 
  res.render('editStore', { title: `Edit ${store.name}`, store });
};

exports.updateStore = async (req, res) => {
  // find and update the store
  const store = await Store.findOneAndUpdate({ _id: req.params.id}, req.body, { 
    new: true, // returns the new data instead of old one
    runValidators: true // runs the validators in Store.js like required, trim, etc.
  }).exec(); // exec() forces the validators to run when they might not otherwise
  // redirect to the store and display a success message
  req.flash('success', `Successfully updated <strong>${store.name}</strong>. <a href="/stores/${store.slug}">View Store</a>`);
  res.redirect(`/stores/${store._id}/edit`);
};
