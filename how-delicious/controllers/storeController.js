const mongoose = require('mongoose');
const Store = mongoose.model('Store');
const User = mongoose.model('User');
const multer = require('multer');
const jimp = require('jimp');
const uuid = require('uuid');

const multerOptions = {
  storage: multer.memoryStorage(),
  fileFilter: function(req, file, next) {
    // check if the file upload is actually an image
    const isPhoto = file.mimetype.startsWith('image/');
    if(isPhoto) {
      next(null, true);
    } else {
      next({ message: 'That filetype isn\'t allowed'}, false)
    }
  }
}

exports.homePage = (req, res) => {
  // render index pug template
  res.render('index');
};

exports.addStore = (req, res) => {
  // render editStore pug template and add the title "Add Store"
  res.render('editStore', { title: 'Add Store' });
};

// read the file upload into memory
exports.upload = multer(multerOptions).single('photo');

// resize uploaded images
exports.resize = async(req, res, next) => {
  // check if there new files to resize--skip if there aren't any new files
  if (!req.file) {
    next(); // skips to next middleware
    return;
  }
  const extension = req.file.mimetype.split('/')[1];
  req.body.photo = `${uuid.v4()}.${extension}`;
  // actual resizing & writing of the file to the database
  const photo = await jimp.read(req.file.buffer);
  await photo.resize(800, jimp.AUTO);
  await photo.write(`./public/uploads/${req.body.photo}`);
  next();
};

exports.createStore = async (req, res) => {
  // populated the author field based on the logged in user
  req.body.author = req.user._id;
  // await the creation of a new store and it's date to be saved, then
  const store = await (new Store(req.body)).save();
  // then created the success flash message and store it in locals
  req.flash('success', `${store.name} successfully created.`);
  // then display the flash message once the page redirects to the new store's page
  res.redirect(`/stores/${store.slug}`);
};

exports.getStores = async (req, res) => {
  const page = req.params.page || 1;
  const limit = 4;
  const skip = (page * limit) - limit;

  // query the database for a list of all stores
  const storesPromise = Store
    .find()
    .skip(skip)
    .limit(limit)
    .sort({ created: 'desc' });

  const countPromise = Store.count();

  const [stores, count] = await Promise.all([storesPromise, countPromise]);
  const pages = Math.ceil(count / limit);
  if (!stores.length && skip) {
    req.flash('info', `Hey! You asked for page ${page}. But that doesn't exist. So I put you on page ${pages}`);
    res.redirect(`/stores/page/${pages}`);
    return;
  }

  res.render('stores', { title: 'Stores', stores, page, pages, count });
};

const confirmOwner = (store, user) => {
  if (!store.author.equals(user._id)) {
    throw Error('You must own this store to edit it.');
  }
};

exports.editStore = async (req, res) => {
  // use the findOne method to find the store using its id 
  const store = await Store.findOne({ _id: req.params.id });
  // confirm user is the owner of the store
  confirmOwner(store, req.user);
  // render out the edit form 
  res.render('editStore', { title: `Edit ${store.name}`, store });
};

exports.updateStore = async (req, res) => {
  // set the location data to be a point
  req.body.location.type = 'Point';
  // find and update the store
  const store = await Store.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true, // return the new store instead of the old one
    runValidators: true
  }).exec();
  req.flash('success', `Successfully updated <strong>${store.name}</strong>. <a href="/store/${store.slug}">View Store →</a>`);
  res.redirect(`/stores/${store._id}/edit`);
  // Redirect them the store and tell them it worked
};

exports.getStoreBySlug = async (req, res, next) => {
  const store = (await Store.findOne({ slug: req.params.slug })).populate('author');
  // check if the store exists--skip if not
  if(!store) {
    next(); // skips to next middleware
    return;
  } 
  // render a store template and give the page the title of the store's name
  res.render('store', { store, title: store.name });
}

exports.getStoresByTag = async (req, res) => {
  const tag = req.params.tag;
  const tagQuery = tag || { $exists: true, $ne: [] };
  const tagsPromise = Store.getTagsList();
  const storesPromise = Store.find({ tags: tagQuery });
  const [tags, stores] = await Promise.all([tagsPromise, storesPromise]);
  
  res.render('tag', { tags, title: 'Tags', tag, stores });
}

exports.searchStores = async (req, res) => {
  const stores = await Store
  .find({
    // typical search query--adds the '?q=searchtermhere' to the end of http://localhost:777/api/search
    $text: {
      $search: req.query.q
    }
  }, {
    // mongodb calcs a "score" based on number of times the query term is mentioned
    score: { $meta: 'textScore' }
  }).sort({
    // sort "scores" from highest to lowest
    score: {$meta: 'textScore' }
  }).limit(5); // only shows up to the top 5 "scoring" results
  
  // displays the results of the find and sorts on page
  res.json(stores);
}

exports.mapStores = async (req, res) => {
  const coordinates = [req.query.lng, req.query.lat].map(parseFloat);
  const q = {
    location: {
      $near: {
        $geometry: {
          type: 'Point',
          coordinates
        },
        $maxDistance: 10000 // 10km
      }
    }
  };

  const stores = await Store.find(q).select('slug name description location photo').limit(10);
  res.json(stores);
};

exports.mapPage = (req, res) => {
  res.render('map', { title: 'Map' });
};
