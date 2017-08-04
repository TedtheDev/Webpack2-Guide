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
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _big = __webpack_require__(3);

var _big2 = _interopRequireDefault(_big);

var _small = __webpack_require__(4);

var _small2 = _interopRequireDefault(_small);

__webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//small image
var image = document.createElement('img');
image.src = _small2.default;
document.body.appendChild(image);

//big image
var bigImage = document.createElement('img');
bigImage.src = _big2.default;
document.body.appendChild(bigImage);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var sum = function sum(a, b) {
  return a + b;
};

exports.default = sum;

/***/ },
/* 2 */
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bfdcebcfe2890c64db59453dae9eb582.jpg";

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _sum = __webpack_require__(1);

var _sum2 = _interopRequireDefault(_sum);

__webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var total = (0, _sum2.default)(10, 5);
console.log(total);

/***/ }
/******/ ]);