/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// based on https://gist.github.com/paulirish/12fb951a8b893a454b32

var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

Node.prototype.on = window.on = function (name, fn) {
  this.addEventListener(name, fn);
};

NodeList.prototype.__proto__ = Array.prototype; // eslint-disable-line

NodeList.prototype.on = NodeList.prototype.addEventListener = function (name, fn) {
  this.forEach(function (elem) {
    elem.on(name, fn);
  });
};

exports.$ = $;
exports.$$ = $$;

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: Missing binding /Users/kaylahimmelberger/Library/Mobile Documents/com~apple~CloudDocs/Projects/_Practice/Learn-Node/how-delicious/node_modules/node-sass/vendor/darwin-x64-83/binding.node\nNode Sass could not find a binding for your current environment: OS X 64-bit with Node.js 14.x\n\nFound bindings for the following environments:\n  - OS X 64-bit with Node.js 10.x\n\nThis usually happens because your environment has changed since running `npm install`.\nRun `npm rebuild node-sass` to download the binding for your current environment.\n    at module.exports (/Users/kaylahimmelberger/Library/Mobile Documents/com~apple~CloudDocs/Projects/_Practice/Learn-Node/how-delicious/node_modules/node-sass/lib/binding.js:15:13)\n    at Object.<anonymous> (/Users/kaylahimmelberger/Library/Mobile Documents/com~apple~CloudDocs/Projects/_Practice/Learn-Node/how-delicious/node_modules/node-sass/lib/index.js:14:35)\n    at Module._compile (internal/modules/cjs/loader.js:1075:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1096:10)\n    at Module.load (internal/modules/cjs/loader.js:940:32)\n    at Function.Module._load (internal/modules/cjs/loader.js:781:14)\n    at Module.require (internal/modules/cjs/loader.js:964:19)\n    at require (internal/modules/cjs/helpers.js:88:18)\n    at Object.<anonymous> (/Users/kaylahimmelberger/Library/Mobile Documents/com~apple~CloudDocs/Projects/_Practice/Learn-Node/how-delicious/node_modules/sass-loader/lib/loader.js:3:14)\n    at Module._compile (internal/modules/cjs/loader.js:1075:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1096:10)\n    at Module.load (internal/modules/cjs/loader.js:940:32)\n    at Function.Module._load (internal/modules/cjs/loader.js:781:14)\n    at Module.require (internal/modules/cjs/loader.js:964:19)\n    at require (internal/modules/cjs/helpers.js:88:18)\n    at loadLoader (/Users/kaylahimmelberger/Library/Mobile Documents/com~apple~CloudDocs/Projects/_Practice/Learn-Node/how-delicious/node_modules/loader-runner/lib/loadLoader.js:18:17)\n    at iteratePitchingLoaders (/Users/kaylahimmelberger/Library/Mobile Documents/com~apple~CloudDocs/Projects/_Practice/Learn-Node/how-delicious/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/Users/kaylahimmelberger/Library/Mobile Documents/com~apple~CloudDocs/Projects/_Practice/Learn-Node/how-delicious/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /Users/kaylahimmelberger/Library/Mobile Documents/com~apple~CloudDocs/Projects/_Practice/Learn-Node/how-delicious/node_modules/loader-runner/lib/LoaderRunner.js:176:18\n    at loadLoader (/Users/kaylahimmelberger/Library/Mobile Documents/com~apple~CloudDocs/Projects/_Practice/Learn-Node/how-delicious/node_modules/loader-runner/lib/loadLoader.js:47:3)\n    at iteratePitchingLoaders (/Users/kaylahimmelberger/Library/Mobile Documents/com~apple~CloudDocs/Projects/_Practice/Learn-Node/how-delicious/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/Users/kaylahimmelberger/Library/Mobile Documents/com~apple~CloudDocs/Projects/_Practice/Learn-Node/how-delicious/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /Users/kaylahimmelberger/Library/Mobile Documents/com~apple~CloudDocs/Projects/_Practice/Learn-Node/how-delicious/node_modules/loader-runner/lib/LoaderRunner.js:176:18\n    at loadLoader (/Users/kaylahimmelberger/Library/Mobile Documents/com~apple~CloudDocs/Projects/_Practice/Learn-Node/how-delicious/node_modules/loader-runner/lib/loadLoader.js:47:3)\n    at iteratePitchingLoaders (/Users/kaylahimmelberger/Library/Mobile Documents/com~apple~CloudDocs/Projects/_Practice/Learn-Node/how-delicious/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at runLoaders (/Users/kaylahimmelberger/Library/Mobile Documents/com~apple~CloudDocs/Projects/_Practice/Learn-Node/how-delicious/node_modules/loader-runner/lib/LoaderRunner.js:365:2)\n    at NormalModule.doBuild (/Users/kaylahimmelberger/Library/Mobile Documents/com~apple~CloudDocs/Projects/_Practice/Learn-Node/how-delicious/node_modules/webpack/lib/NormalModule.js:129:2)\n    at NormalModule.build (/Users/kaylahimmelberger/Library/Mobile Documents/com~apple~CloudDocs/Projects/_Practice/Learn-Node/how-delicious/node_modules/webpack/lib/NormalModule.js:180:15)\n    at Compilation.buildModule (/Users/kaylahimmelberger/Library/Mobile Documents/com~apple~CloudDocs/Projects/_Practice/Learn-Node/how-delicious/node_modules/webpack/lib/Compilation.js:142:10)\n    at /Users/kaylahimmelberger/Library/Mobile Documents/com~apple~CloudDocs/Projects/_Practice/Learn-Node/how-delicious/node_modules/webpack/lib/Compilation.js:424:9\n    at /Users/kaylahimmelberger/Library/Mobile Documents/com~apple~CloudDocs/Projects/_Practice/Learn-Node/how-delicious/node_modules/webpack/lib/NormalModule.js:141:35\n    at /Users/kaylahimmelberger/Library/Mobile Documents/com~apple~CloudDocs/Projects/_Practice/Learn-Node/how-delicious/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /Users/kaylahimmelberger/Library/Mobile Documents/com~apple~CloudDocs/Projects/_Practice/Learn-Node/how-delicious/node_modules/loader-runner/lib/LoaderRunner.js:172:11\n    at loadLoader (/Users/kaylahimmelberger/Library/Mobile Documents/com~apple~CloudDocs/Projects/_Practice/Learn-Node/how-delicious/node_modules/loader-runner/lib/loadLoader.js:32:11)\n    at iteratePitchingLoaders (/Users/kaylahimmelberger/Library/Mobile Documents/com~apple~CloudDocs/Projects/_Practice/Learn-Node/how-delicious/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/Users/kaylahimmelberger/Library/Mobile Documents/com~apple~CloudDocs/Projects/_Practice/Learn-Node/how-delicious/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /Users/kaylahimmelberger/Library/Mobile Documents/com~apple~CloudDocs/Projects/_Practice/Learn-Node/how-delicious/node_modules/loader-runner/lib/LoaderRunner.js:176:18\n    at loadLoader (/Users/kaylahimmelberger/Library/Mobile Documents/com~apple~CloudDocs/Projects/_Practice/Learn-Node/how-delicious/node_modules/loader-runner/lib/loadLoader.js:47:3)\n    at iteratePitchingLoaders (/Users/kaylahimmelberger/Library/Mobile Documents/com~apple~CloudDocs/Projects/_Practice/Learn-Node/how-delicious/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/Users/kaylahimmelberger/Library/Mobile Documents/com~apple~CloudDocs/Projects/_Practice/Learn-Node/how-delicious/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /Users/kaylahimmelberger/Library/Mobile Documents/com~apple~CloudDocs/Projects/_Practice/Learn-Node/how-delicious/node_modules/loader-runner/lib/LoaderRunner.js:176:18\n    at loadLoader (/Users/kaylahimmelberger/Library/Mobile Documents/com~apple~CloudDocs/Projects/_Practice/Learn-Node/how-delicious/node_modules/loader-runner/lib/loadLoader.js:47:3)\n    at iteratePitchingLoaders (/Users/kaylahimmelberger/Library/Mobile Documents/com~apple~CloudDocs/Projects/_Practice/Learn-Node/how-delicious/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at runLoaders (/Users/kaylahimmelberger/Library/Mobile Documents/com~apple~CloudDocs/Projects/_Practice/Learn-Node/how-delicious/node_modules/loader-runner/lib/LoaderRunner.js:365:2)\n    at NormalModule.doBuild (/Users/kaylahimmelberger/Library/Mobile Documents/com~apple~CloudDocs/Projects/_Practice/Learn-Node/how-delicious/node_modules/webpack/lib/NormalModule.js:129:2)\n    at NormalModule.build (/Users/kaylahimmelberger/Library/Mobile Documents/com~apple~CloudDocs/Projects/_Practice/Learn-Node/how-delicious/node_modules/webpack/lib/NormalModule.js:180:15)\n    at Compilation.buildModule (/Users/kaylahimmelberger/Library/Mobile Documents/com~apple~CloudDocs/Projects/_Practice/Learn-Node/how-delicious/node_modules/webpack/lib/Compilation.js:142:10)\n    at /Users/kaylahimmelberger/Library/Mobile Documents/com~apple~CloudDocs/Projects/_Practice/Learn-Node/how-delicious/node_modules/webpack/lib/Compilation.js:424:9\n    at /Users/kaylahimmelberger/Library/Mobile Documents/com~apple~CloudDocs/Projects/_Practice/Learn-Node/how-delicious/node_modules/webpack/lib/NormalModuleFactory.js:242:4\n    at /Users/kaylahimmelberger/Library/Mobile Documents/com~apple~CloudDocs/Projects/_Practice/Learn-Node/how-delicious/node_modules/webpack/lib/NormalModuleFactory.js:93:13\n    at /Users/kaylahimmelberger/Library/Mobile Documents/com~apple~CloudDocs/Projects/_Practice/Learn-Node/how-delicious/node_modules/tapable/lib/Tapable.js:268:11\n    at NormalModuleFactory.<anonymous> (/Users/kaylahimmelberger/Library/Mobile Documents/com~apple~CloudDocs/Projects/_Practice/Learn-Node/how-delicious/node_modules/webpack/lib/CompatibilityPlugin.js:52:5)\n    at NormalModuleFactory.applyPluginsAsyncWaterfall (/Users/kaylahimmelberger/Library/Mobile Documents/com~apple~CloudDocs/Projects/_Practice/Learn-Node/how-delicious/node_modules/tapable/lib/Tapable.js:272:13)\n    at onDoneResolving (/Users/kaylahimmelberger/Library/Mobile Documents/com~apple~CloudDocs/Projects/_Practice/Learn-Node/how-delicious/node_modules/webpack/lib/NormalModuleFactory.js:68:11)\n    at onDoneResolving (/Users/kaylahimmelberger/Library/Mobile Documents/com~apple~CloudDocs/Projects/_Practice/Learn-Node/how-delicious/node_modules/webpack/lib/NormalModuleFactory.js:189:6)\n    at processTicksAndRejections (internal/process/task_queues.js:75:11)");

/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function autocomplete(input, latInput, lngInput) {
  if (!input) return; // skip this fn from running if there is not input on the page
  var dropdown = new google.maps.places.Autocomplete(input);

  dropdown.addListener('place_changed', function () {
    var place = dropdown.getPlace();
    // sets the lat value in the lat input of the Add Store form
    latInput.value = place.geometry.location.lat();
    // sets the lng value in the lng input of the Add Store form 
    lngInput.value = place.geometry.location.lng();
  });
  // if someone hits enter (keycode 13) on the address field, don't submit the form
  input.on('keydown', function (e) {
    if (e.keyCode === 13) e.preventDefault();
  });
}

exports.default = autocomplete;

// FAILED ATTEMPT TO GET GEOSEARCH TO WORK AS AUTOCOMPLETE IN LEAFLET
// // import L from 'leaflet';
// import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';

// const myProvider = new OpenStreetMapProvider();
// const map = L.map('#mapstores').setView([51.505, -0.09], 13);

// // renders the search button on the map
// const searchControl = new GeoSearchControl({
//   provider: myProvider, // required
//   style: 'bar', // optional: bar|button - default button
// }).addTo(map);

// // configures the autocomplete for the search button
// const autocompleteSearch = new GeoSearchControl({
//   provider: myProvider, // required
//   autoComplete: true, // optional: true|false - default true
//   autoCompleteDelay: 250, // optional: number - default 250
// }).addTo(map);

// // show the autocomplete search results
// const showMarker = new GeoSearchControl({
//   provider: myProvider, // required
//   showMarker: true, // optional: true|false - default true
//   showPopup: false, // optional: true|false - default false
//   marker: {
//     // optional: L.Marker - default L.Icon.Default
//     icon: new L.Icon.Default(),
//     draggable: false,
//   },
//   popupFormat: ({ query, result }) => result.label, // optional: function - default returns result label
//   maxMarkers: 1, // optional: number - default 1
//   retainZoomLevel: false, // optional: true|false - default false
//   animateZoom: true, // optional: true|false - default true
//   autoClose: false, // optional: true|false - default false
//   searchLabel: 'Enter address', // optional: string - default 'Enter address'
//   keepResult: false, // optional: true|false - default false
//   updateMap: true, // optional: true|false - default true
// });

// // show marker on map when a location is chosen from the autocomplete search
// map.on('geosearch/showlocation', yourEventHandler);


// function autocomplete(map) {
//   if(!input) return;

//   const search = new GeoSearch.GeoSearchControl({
//     provider: new GeoSearch.OpenStreetMapProvider(),
//   });

//   storesMap.addControl(search);

//   // TUTORIAL CODE FOR GOOGLE MAPS
//   // if(!input) return; // skip this fn from running if there is not input on the page
//   // // const dropdown = new google.maps.places.Autocomplete(input);
//   // const provider = new GeoSearch.OpenStreetMapProvider();

//   // dropdown.addListener('place_changed', () => {
//   //   const place = dropdown.getPlace();
//   //   latInput.value = place.geometry.location.lat();
//   //   lngInput.value = place.geometry.location.lng();
//   // });
//   // // if someone hits enter on the address field, don't submit the form
//   // input.on('keydown', (e) => {
//   //   if (e.keyCode === 13) e.preventDefault();
//   // });
// }

// export default autocomplete;

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(14);

var _bling = __webpack_require__(1);

var _autocomplete = __webpack_require__(33);

var _autocomplete2 = _interopRequireDefault(_autocomplete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import typeAhead from './modules/typeAhead';
// import createMap from './modules/map';

(0, _autocomplete2.default)((0, _bling.$)('#address'), (0, _bling.$)('#lat'), (0, _bling.$)('#lng'));

// typeAhead( $('.search' ) );

// createMap( $('#mapid') );

/***/ })

/******/ });
//# sourceMappingURL=App.bundle.js.map