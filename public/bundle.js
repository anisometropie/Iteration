/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/d3-array/src/array.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/array.js ***!
  \********************************************/
/*! exports provided: slice, map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"slice\", function() { return slice; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"map\", function() { return map; });\nvar array = Array.prototype;\n\nvar slice = array.slice;\nvar map = array.map;\n\n\n//# sourceURL=webpack:///./node_modules/d3-array/src/array.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/ascending.js":
/*!************************************************!*\
  !*** ./node_modules/d3-array/src/ascending.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(a, b) {\n  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-array/src/ascending.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/bin.js":
/*!******************************************!*\
  !*** ./node_modules/d3-array/src/bin.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array.js */ \"./node_modules/d3-array/src/array.js\");\n/* harmony import */ var _bisect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bisect.js */ \"./node_modules/d3-array/src/bisect.js\");\n/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant.js */ \"./node_modules/d3-array/src/constant.js\");\n/* harmony import */ var _extent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extent.js */ \"./node_modules/d3-array/src/extent.js\");\n/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./identity.js */ \"./node_modules/d3-array/src/identity.js\");\n/* harmony import */ var _range_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./range.js */ \"./node_modules/d3-array/src/range.js\");\n/* harmony import */ var _ticks_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ticks.js */ \"./node_modules/d3-array/src/ticks.js\");\n/* harmony import */ var _threshold_sturges_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./threshold/sturges.js */ \"./node_modules/d3-array/src/threshold/sturges.js\");\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\n  var value = _identity_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n      domain = _extent_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n      threshold = _threshold_sturges_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"];\n\n  function histogram(data) {\n    if (!Array.isArray(data)) data = Array.from(data);\n\n    var i,\n        n = data.length,\n        x,\n        values = new Array(n);\n\n    for (i = 0; i < n; ++i) {\n      values[i] = value(data[i], i, data);\n    }\n\n    var xz = domain(values),\n        x0 = xz[0],\n        x1 = xz[1],\n        tz = threshold(values, x0, x1);\n\n    // Convert number of thresholds into uniform thresholds.\n    if (!Array.isArray(tz)) {\n      tz = Object(_ticks_js__WEBPACK_IMPORTED_MODULE_6__[\"tickStep\"])(x0, x1, tz);\n      tz = Object(_range_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Math.ceil(x0 / tz) * tz, x1, tz); // exclusive\n    }\n\n    // Remove any thresholds outside the domain.\n    var m = tz.length;\n    while (tz[0] <= x0) tz.shift(), --m;\n    while (tz[m - 1] > x1) tz.pop(), --m;\n\n    var bins = new Array(m + 1),\n        bin;\n\n    // Initialize bins.\n    for (i = 0; i <= m; ++i) {\n      bin = bins[i] = [];\n      bin.x0 = i > 0 ? tz[i - 1] : x0;\n      bin.x1 = i < m ? tz[i] : x1;\n    }\n\n    // Assign data to bins by value, ignoring any outside the domain.\n    for (i = 0; i < n; ++i) {\n      x = values[i];\n      if (x0 <= x && x <= x1) {\n        bins[Object(_bisect_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(tz, x, 0, m)].push(data[i]);\n      }\n    }\n\n    return bins;\n  }\n\n  histogram.value = function(_) {\n    return arguments.length ? (value = typeof _ === \"function\" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_), histogram) : value;\n  };\n\n  histogram.domain = function(_) {\n    return arguments.length ? (domain = typeof _ === \"function\" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])([_[0], _[1]]), histogram) : domain;\n  };\n\n  histogram.thresholds = function(_) {\n    return arguments.length ? (threshold = typeof _ === \"function\" ? _ : Array.isArray(_) ? Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_array_js__WEBPACK_IMPORTED_MODULE_0__[\"slice\"].call(_)) : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_), histogram) : threshold;\n  };\n\n  return histogram;\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-array/src/bin.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/bisect.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/bisect.js ***!
  \*********************************************/
/*! exports provided: bisectRight, bisectLeft, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bisectRight\", function() { return bisectRight; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bisectLeft\", function() { return bisectLeft; });\n/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ \"./node_modules/d3-array/src/ascending.js\");\n/* harmony import */ var _bisector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bisector.js */ \"./node_modules/d3-array/src/bisector.js\");\n\n\n\nvar ascendingBisect = Object(_bisector_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ascending_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nvar bisectRight = ascendingBisect.right;\nvar bisectLeft = ascendingBisect.left;\n/* harmony default export */ __webpack_exports__[\"default\"] = (bisectRight);\n\n\n//# sourceURL=webpack:///./node_modules/d3-array/src/bisect.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/bisector.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/bisector.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ \"./node_modules/d3-array/src/ascending.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(compare) {\n  if (compare.length === 1) compare = ascendingComparator(compare);\n  return {\n    left: function(a, x, lo, hi) {\n      if (lo == null) lo = 0;\n      if (hi == null) hi = a.length;\n      while (lo < hi) {\n        var mid = lo + hi >>> 1;\n        if (compare(a[mid], x) < 0) lo = mid + 1;\n        else hi = mid;\n      }\n      return lo;\n    },\n    right: function(a, x, lo, hi) {\n      if (lo == null) lo = 0;\n      if (hi == null) hi = a.length;\n      while (lo < hi) {\n        var mid = lo + hi >>> 1;\n        if (compare(a[mid], x) > 0) hi = mid;\n        else lo = mid + 1;\n      }\n      return lo;\n    }\n  };\n});\n\nfunction ascendingComparator(f) {\n  return function(d, x) {\n    return Object(_ascending_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(f(d), x);\n  };\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-array/src/bisector.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/constant.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/constant.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(x) {\n  return function() {\n    return x;\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-array/src/constant.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/count.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/count.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return count; });\nfunction count(values, valueof) {\n  let count = 0;\n  if (valueof === undefined) {\n    for (let value of values) {\n      if (value != null && (value = +value) >= value) {\n        ++count;\n      }\n    }\n  } else {\n    let index = -1;\n    for (let value of values) {\n      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {\n        ++count;\n      }\n    }\n  }\n  return count;\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-array/src/count.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/cross.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/cross.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return cross; });\nfunction length(array) {\n  return array.length | 0;\n}\n\nfunction empty(length) {\n  return !(length > 0);\n}\n\nfunction arrayify(values) {\n  return typeof values !== \"object\" || \"length\" in values ? values : Array.from(values);\n}\n\nfunction reducer(reduce) {\n  return values => reduce(...values);\n}\n\nfunction cross(...values) {\n  const reduce = typeof values[values.length - 1] === \"function\" && reducer(values.pop());\n  values = values.map(arrayify);\n  const lengths = values.map(length);\n  const j = values.length - 1;\n  const index = new Array(j + 1).fill(0);\n  const product = [];\n  if (j < 0 || lengths.some(empty)) return product;\n  while (true) {\n    product.push(index.map((j, i) => values[i][j]));\n    let i = j;\n    while (++index[i] === lengths[i]) {\n      if (i === 0) return reduce ? product.map(reduce) : product;\n      index[i--] = 0;\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-array/src/cross.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/cumsum.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/cumsum.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return cumsum; });\nfunction cumsum(values, valueof) {\n  var sum = 0, index = 0;\n  return Float64Array.from(values, valueof === undefined\n    ? v => (sum += +v || 0)\n    : v => (sum += +valueof(v, index++, values) || 0));\n}\n\n//# sourceURL=webpack:///./node_modules/d3-array/src/cumsum.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/descending.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-array/src/descending.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(a, b) {\n  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-array/src/descending.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/deviation.js":
/*!************************************************!*\
  !*** ./node_modules/d3-array/src/deviation.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return deviation; });\n/* harmony import */ var _variance_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variance.js */ \"./node_modules/d3-array/src/variance.js\");\n\n\nfunction deviation(values, valueof) {\n  const v = Object(_variance_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(values, valueof);\n  return v ? Math.sqrt(v) : v;\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-array/src/deviation.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/extent.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/extent.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(values, valueof) {\n  let min;\n  let max;\n  if (valueof === undefined) {\n    for (const value of values) {\n      if (value != null) {\n        if (min === undefined) {\n          if (value >= value) min = max = value;\n        } else {\n          if (min > value) min = value;\n          if (max < value) max = value;\n        }\n      }\n    }\n  } else {\n    let index = -1;\n    for (let value of values) {\n      if ((value = valueof(value, ++index, values)) != null) {\n        if (min === undefined) {\n          if (value >= value) min = max = value;\n        } else {\n          if (min > value) min = value;\n          if (max < value) max = value;\n        }\n      }\n    }\n  }\n  return [min, max];\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-array/src/extent.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/greatest.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/greatest.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return greatest; });\n/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ \"./node_modules/d3-array/src/ascending.js\");\n\n\nfunction greatest(values, compare = _ascending_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n  let max;\n  let defined = false;\n  if (compare.length === 1) {\n    let maxValue;\n    for (const element of values) {\n      const value = compare(element);\n      if (defined\n          ? Object(_ascending_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(value, maxValue) > 0\n          : Object(_ascending_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(value, value) === 0) {\n        max = element;\n        maxValue = value;\n        defined = true;\n      }\n    }\n  } else {\n    for (const value of values) {\n      if (defined\n          ? compare(value, max) > 0\n          : compare(value, value) === 0) {\n        max = value;\n        defined = true;\n      }\n    }\n  }\n  return max;\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-array/src/greatest.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/greatestIndex.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-array/src/greatestIndex.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return greatestIndex; });\n/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ \"./node_modules/d3-array/src/ascending.js\");\n/* harmony import */ var _maxIndex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maxIndex.js */ \"./node_modules/d3-array/src/maxIndex.js\");\n\n\n\nfunction greatestIndex(values, compare = _ascending_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n  if (compare.length === 1) return Object(_maxIndex_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(values, compare);\n  let maxValue;\n  let max = -1;\n  let index = -1;\n  for (const value of values) {\n    ++index;\n    if (max < 0\n        ? compare(value, value) === 0\n        : compare(value, maxValue) > 0) {\n      maxValue = value;\n      max = index;\n    }\n  }\n  return max;\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-array/src/greatestIndex.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/group.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/group.js ***!
  \********************************************/
/*! exports provided: default, groups, rollup, rollups */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return group; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"groups\", function() { return groups; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rollup\", function() { return rollup; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rollups\", function() { return rollups; });\n/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity.js */ \"./node_modules/d3-array/src/identity.js\");\n\n\nfunction group(values, ...keys) {\n  return nest(values, _identity_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _identity_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], keys);\n}\n\nfunction groups(values, ...keys) {\n  return nest(values, Array.from, _identity_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], keys);\n}\n\nfunction rollup(values, reduce, ...keys) {\n  return nest(values, _identity_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], reduce, keys);\n}\n\nfunction rollups(values, reduce, ...keys) {\n  return nest(values, Array.from, reduce, keys);\n}\n\nfunction nest(values, map, reduce, keys) {\n  return (function regroup(values, i) {\n    if (i >= keys.length) return reduce(values);\n    const groups = new Map();\n    const keyof = keys[i++];\n    let index = -1;\n    for (const value of values) {\n      const key = keyof(value, ++index, values);\n      const group = groups.get(key);\n      if (group) group.push(value);\n      else groups.set(key, [value]);\n    }\n    for (const [key, values] of groups) {\n      groups.set(key, regroup(values, i));\n    }\n    return map(groups);\n  })(values, 0);\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-array/src/group.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/identity.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/identity.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(x) {\n  return x;\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-array/src/identity.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/index.js ***!
  \********************************************/
/*! exports provided: bisect, bisectRight, bisectLeft, ascending, bisector, count, cross, cumsum, descending, deviation, extent, group, groups, rollup, rollups, bin, histogram, thresholdFreedmanDiaconis, thresholdScott, thresholdSturges, max, maxIndex, mean, median, merge, min, minIndex, pairs, permute, quantile, quantileSorted, quickselect, range, least, leastIndex, greatest, greatestIndex, scan, shuffle, sum, ticks, tickIncrement, tickStep, transpose, variance, zip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _bisect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bisect.js */ \"./node_modules/d3-array/src/bisect.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"bisect\", function() { return _bisect_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"bisectRight\", function() { return _bisect_js__WEBPACK_IMPORTED_MODULE_0__[\"bisectRight\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"bisectLeft\", function() { return _bisect_js__WEBPACK_IMPORTED_MODULE_0__[\"bisectLeft\"]; });\n\n/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ascending.js */ \"./node_modules/d3-array/src/ascending.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ascending\", function() { return _ascending_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _bisector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bisector.js */ \"./node_modules/d3-array/src/bisector.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"bisector\", function() { return _bisector_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _count_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./count.js */ \"./node_modules/d3-array/src/count.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"count\", function() { return _count_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _cross_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cross.js */ \"./node_modules/d3-array/src/cross.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"cross\", function() { return _cross_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _cumsum_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cumsum.js */ \"./node_modules/d3-array/src/cumsum.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"cumsum\", function() { return _cumsum_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n/* harmony import */ var _descending_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./descending.js */ \"./node_modules/d3-array/src/descending.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"descending\", function() { return _descending_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; });\n\n/* harmony import */ var _deviation_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./deviation.js */ \"./node_modules/d3-array/src/deviation.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"deviation\", function() { return _deviation_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]; });\n\n/* harmony import */ var _extent_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./extent.js */ \"./node_modules/d3-array/src/extent.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"extent\", function() { return _extent_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]; });\n\n/* harmony import */ var _group_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./group.js */ \"./node_modules/d3-array/src/group.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"group\", function() { return _group_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"groups\", function() { return _group_js__WEBPACK_IMPORTED_MODULE_9__[\"groups\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"rollup\", function() { return _group_js__WEBPACK_IMPORTED_MODULE_9__[\"rollup\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"rollups\", function() { return _group_js__WEBPACK_IMPORTED_MODULE_9__[\"rollups\"]; });\n\n/* harmony import */ var _bin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bin.js */ \"./node_modules/d3-array/src/bin.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"bin\", function() { return _bin_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"histogram\", function() { return _bin_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"]; });\n\n/* harmony import */ var _threshold_freedmanDiaconis_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./threshold/freedmanDiaconis.js */ \"./node_modules/d3-array/src/threshold/freedmanDiaconis.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"thresholdFreedmanDiaconis\", function() { return _threshold_freedmanDiaconis_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"]; });\n\n/* harmony import */ var _threshold_scott_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./threshold/scott.js */ \"./node_modules/d3-array/src/threshold/scott.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"thresholdScott\", function() { return _threshold_scott_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"]; });\n\n/* harmony import */ var _threshold_sturges_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./threshold/sturges.js */ \"./node_modules/d3-array/src/threshold/sturges.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"thresholdSturges\", function() { return _threshold_sturges_js__WEBPACK_IMPORTED_MODULE_13__[\"default\"]; });\n\n/* harmony import */ var _max_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./max.js */ \"./node_modules/d3-array/src/max.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"max\", function() { return _max_js__WEBPACK_IMPORTED_MODULE_14__[\"default\"]; });\n\n/* harmony import */ var _maxIndex_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./maxIndex.js */ \"./node_modules/d3-array/src/maxIndex.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"maxIndex\", function() { return _maxIndex_js__WEBPACK_IMPORTED_MODULE_15__[\"default\"]; });\n\n/* harmony import */ var _mean_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./mean.js */ \"./node_modules/d3-array/src/mean.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"mean\", function() { return _mean_js__WEBPACK_IMPORTED_MODULE_16__[\"default\"]; });\n\n/* harmony import */ var _median_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./median.js */ \"./node_modules/d3-array/src/median.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"median\", function() { return _median_js__WEBPACK_IMPORTED_MODULE_17__[\"default\"]; });\n\n/* harmony import */ var _merge_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./merge.js */ \"./node_modules/d3-array/src/merge.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"merge\", function() { return _merge_js__WEBPACK_IMPORTED_MODULE_18__[\"default\"]; });\n\n/* harmony import */ var _min_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./min.js */ \"./node_modules/d3-array/src/min.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"min\", function() { return _min_js__WEBPACK_IMPORTED_MODULE_19__[\"default\"]; });\n\n/* harmony import */ var _minIndex_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./minIndex.js */ \"./node_modules/d3-array/src/minIndex.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"minIndex\", function() { return _minIndex_js__WEBPACK_IMPORTED_MODULE_20__[\"default\"]; });\n\n/* harmony import */ var _pairs_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pairs.js */ \"./node_modules/d3-array/src/pairs.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"pairs\", function() { return _pairs_js__WEBPACK_IMPORTED_MODULE_21__[\"default\"]; });\n\n/* harmony import */ var _permute_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./permute.js */ \"./node_modules/d3-array/src/permute.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"permute\", function() { return _permute_js__WEBPACK_IMPORTED_MODULE_22__[\"default\"]; });\n\n/* harmony import */ var _quantile_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./quantile.js */ \"./node_modules/d3-array/src/quantile.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"quantile\", function() { return _quantile_js__WEBPACK_IMPORTED_MODULE_23__[\"default\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"quantileSorted\", function() { return _quantile_js__WEBPACK_IMPORTED_MODULE_23__[\"quantileSorted\"]; });\n\n/* harmony import */ var _quickselect_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./quickselect.js */ \"./node_modules/d3-array/src/quickselect.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"quickselect\", function() { return _quickselect_js__WEBPACK_IMPORTED_MODULE_24__[\"default\"]; });\n\n/* harmony import */ var _range_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./range.js */ \"./node_modules/d3-array/src/range.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"range\", function() { return _range_js__WEBPACK_IMPORTED_MODULE_25__[\"default\"]; });\n\n/* harmony import */ var _least_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./least.js */ \"./node_modules/d3-array/src/least.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"least\", function() { return _least_js__WEBPACK_IMPORTED_MODULE_26__[\"default\"]; });\n\n/* harmony import */ var _leastIndex_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./leastIndex.js */ \"./node_modules/d3-array/src/leastIndex.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"leastIndex\", function() { return _leastIndex_js__WEBPACK_IMPORTED_MODULE_27__[\"default\"]; });\n\n/* harmony import */ var _greatest_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./greatest.js */ \"./node_modules/d3-array/src/greatest.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"greatest\", function() { return _greatest_js__WEBPACK_IMPORTED_MODULE_28__[\"default\"]; });\n\n/* harmony import */ var _greatestIndex_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./greatestIndex.js */ \"./node_modules/d3-array/src/greatestIndex.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"greatestIndex\", function() { return _greatestIndex_js__WEBPACK_IMPORTED_MODULE_29__[\"default\"]; });\n\n/* harmony import */ var _scan_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./scan.js */ \"./node_modules/d3-array/src/scan.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"scan\", function() { return _scan_js__WEBPACK_IMPORTED_MODULE_30__[\"default\"]; });\n\n/* harmony import */ var _shuffle_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./shuffle.js */ \"./node_modules/d3-array/src/shuffle.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"shuffle\", function() { return _shuffle_js__WEBPACK_IMPORTED_MODULE_31__[\"default\"]; });\n\n/* harmony import */ var _sum_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./sum.js */ \"./node_modules/d3-array/src/sum.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"sum\", function() { return _sum_js__WEBPACK_IMPORTED_MODULE_32__[\"default\"]; });\n\n/* harmony import */ var _ticks_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./ticks.js */ \"./node_modules/d3-array/src/ticks.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ticks\", function() { return _ticks_js__WEBPACK_IMPORTED_MODULE_33__[\"default\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"tickIncrement\", function() { return _ticks_js__WEBPACK_IMPORTED_MODULE_33__[\"tickIncrement\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"tickStep\", function() { return _ticks_js__WEBPACK_IMPORTED_MODULE_33__[\"tickStep\"]; });\n\n/* harmony import */ var _transpose_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./transpose.js */ \"./node_modules/d3-array/src/transpose.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"transpose\", function() { return _transpose_js__WEBPACK_IMPORTED_MODULE_34__[\"default\"]; });\n\n/* harmony import */ var _variance_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./variance.js */ \"./node_modules/d3-array/src/variance.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"variance\", function() { return _variance_js__WEBPACK_IMPORTED_MODULE_35__[\"default\"]; });\n\n/* harmony import */ var _zip_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./zip.js */ \"./node_modules/d3-array/src/zip.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"zip\", function() { return _zip_js__WEBPACK_IMPORTED_MODULE_36__[\"default\"]; });\n\n\n\n\n\n\n\n\n\n\n\n // Deprecated; use bin.\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n // Deprecated; use leastIndex.\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./node_modules/d3-array/src/index.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/least.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/least.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return least; });\n/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ \"./node_modules/d3-array/src/ascending.js\");\n\n\nfunction least(values, compare = _ascending_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n  let min;\n  let defined = false;\n  if (compare.length === 1) {\n    let minValue;\n    for (const element of values) {\n      const value = compare(element);\n      if (defined\n          ? Object(_ascending_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(value, minValue) < 0\n          : Object(_ascending_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(value, value) === 0) {\n        min = element;\n        minValue = value;\n        defined = true;\n      }\n    }\n  } else {\n    for (const value of values) {\n      if (defined\n          ? compare(value, min) < 0\n          : compare(value, value) === 0) {\n        min = value;\n        defined = true;\n      }\n    }\n  }\n  return min;\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-array/src/least.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/leastIndex.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-array/src/leastIndex.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return leastIndex; });\n/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ \"./node_modules/d3-array/src/ascending.js\");\n/* harmony import */ var _minIndex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./minIndex.js */ \"./node_modules/d3-array/src/minIndex.js\");\n\n\n\nfunction leastIndex(values, compare = _ascending_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n  if (compare.length === 1) return Object(_minIndex_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(values, compare);\n  let minValue;\n  let min = -1;\n  let index = -1;\n  for (const value of values) {\n    ++index;\n    if (min < 0\n        ? compare(value, value) === 0\n        : compare(value, minValue) < 0) {\n      minValue = value;\n      min = index;\n    }\n  }\n  return min;\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-array/src/leastIndex.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/max.js":
/*!******************************************!*\
  !*** ./node_modules/d3-array/src/max.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return max; });\nfunction max(values, valueof) {\n  let max;\n  if (valueof === undefined) {\n    for (const value of values) {\n      if (value != null\n          && (max < value || (max === undefined && value >= value))) {\n        max = value;\n      }\n    }\n  } else {\n    let index = -1;\n    for (let value of values) {\n      if ((value = valueof(value, ++index, values)) != null\n          && (max < value || (max === undefined && value >= value))) {\n        max = value;\n      }\n    }\n  }\n  return max;\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-array/src/max.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/maxIndex.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/maxIndex.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return maxIndex; });\nfunction maxIndex(values, valueof) {\n  let max;\n  let maxIndex = -1;\n  let index = -1;\n  if (valueof === undefined) {\n    for (const value of values) {\n      ++index;\n      if (value != null\n          && (max < value || (max === undefined && value >= value))) {\n        max = value, maxIndex = index;\n      }\n    }\n  } else {\n    for (let value of values) {\n      if ((value = valueof(value, ++index, values)) != null\n          && (max < value || (max === undefined && value >= value))) {\n        max = value, maxIndex = index;\n      }\n    }\n  }\n  return maxIndex;\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-array/src/maxIndex.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/mean.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-array/src/mean.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return mean; });\nfunction mean(values, valueof) {\n  let count = 0;\n  let sum = 0;\n  if (valueof === undefined) {\n    for (let value of values) {\n      if (value != null && (value = +value) >= value) {\n        ++count, sum += value;\n      }\n    }\n  } else {\n    let index = -1;\n    for (let value of values) {\n      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {\n        ++count, sum += value;\n      }\n    }\n  }\n  if (count) return sum / count;\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-array/src/mean.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/median.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/median.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _quantile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quantile.js */ \"./node_modules/d3-array/src/quantile.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(values, valueof) {\n  return Object(_quantile_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(values, 0.5, valueof);\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-array/src/median.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/merge.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/merge.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return merge; });\nfunction* flatten(arrays) {\n  for (const array of arrays) {\n    yield* array;\n  }\n}\n\nfunction merge(arrays) {\n  return Array.from(flatten(arrays));\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-array/src/merge.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/min.js":
/*!******************************************!*\
  !*** ./node_modules/d3-array/src/min.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return min; });\nfunction min(values, valueof) {\n  let min;\n  if (valueof === undefined) {\n    for (const value of values) {\n      if (value != null\n          && (min > value || (min === undefined && value >= value))) {\n        min = value;\n      }\n    }\n  } else {\n    let index = -1;\n    for (let value of values) {\n      if ((value = valueof(value, ++index, values)) != null\n          && (min > value || (min === undefined && value >= value))) {\n        min = value;\n      }\n    }\n  }\n  return min;\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-array/src/min.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/minIndex.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/minIndex.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return minIndex; });\nfunction minIndex(values, valueof) {\n  let min;\n  let minIndex = -1;\n  let index = -1;\n  if (valueof === undefined) {\n    for (const value of values) {\n      ++index;\n      if (value != null\n          && (min > value || (min === undefined && value >= value))) {\n        min = value, minIndex = index;\n      }\n    }\n  } else {\n    for (let value of values) {\n      if ((value = valueof(value, ++index, values)) != null\n          && (min > value || (min === undefined && value >= value))) {\n        min = value, minIndex = index;\n      }\n    }\n  }\n  return minIndex;\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-array/src/minIndex.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/number.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/number.js ***!
  \*********************************************/
/*! exports provided: default, numbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"numbers\", function() { return numbers; });\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(x) {\n  return x === null ? NaN : +x;\n});\n\nfunction* numbers(values, valueof) {\n  if (valueof === undefined) {\n    for (let value of values) {\n      if (value != null && (value = +value) >= value) {\n        yield value;\n      }\n    }\n  } else {\n    let index = -1;\n    for (let value of values) {\n      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {\n        yield value;\n      }\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-array/src/number.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/pairs.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/pairs.js ***!
  \********************************************/
/*! exports provided: default, pair */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return pairs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pair\", function() { return pair; });\nfunction pairs(values, pairof = pair) {\n  const pairs = [];\n  let previous;\n  let first = false;\n  for (const value of values) {\n    if (first) pairs.push(pairof(previous, value));\n    previous = value;\n    first = true;\n  }\n  return pairs;\n}\n\nfunction pair(a, b) {\n  return [a, b];\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-array/src/pairs.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/permute.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-array/src/permute.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(source, keys) {\n  return Array.from(keys, key => source[key]);\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-array/src/permute.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/quantile.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/quantile.js ***!
  \***********************************************/
/*! exports provided: default, quantileSorted */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return quantile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"quantileSorted\", function() { return quantileSorted; });\n/* harmony import */ var _max_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./max.js */ \"./node_modules/d3-array/src/max.js\");\n/* harmony import */ var _min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./min.js */ \"./node_modules/d3-array/src/min.js\");\n/* harmony import */ var _quickselect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quickselect.js */ \"./node_modules/d3-array/src/quickselect.js\");\n/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./number.js */ \"./node_modules/d3-array/src/number.js\");\n\n\n\n\n\nfunction quantile(values, p, valueof) {\n  values = Float64Array.from(Object(_number_js__WEBPACK_IMPORTED_MODULE_3__[\"numbers\"])(values, valueof));\n  if (!(n = values.length)) return;\n  if ((p = +p) <= 0 || n < 2) return Object(_min_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(values);\n  if (p >= 1) return Object(_max_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(values);\n  var n,\n      i = (n - 1) * p,\n      i0 = Math.floor(i),\n      value0 = Object(_max_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Object(_quickselect_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(values, i0).subarray(0, i0 + 1)),\n      value1 = Object(_min_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(values.subarray(i0 + 1));\n  return value0 + (value1 - value0) * (i - i0);\n}\n\nfunction quantileSorted(values, p, valueof = _number_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]) {\n  if (!(n = values.length)) return;\n  if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);\n  if (p >= 1) return +valueof(values[n - 1], n - 1, values);\n  var n,\n      i = (n - 1) * p,\n      i0 = Math.floor(i),\n      value0 = +valueof(values[i0], i0, values),\n      value1 = +valueof(values[i0 + 1], i0 + 1, values);\n  return value0 + (value1 - value0) * (i - i0);\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-array/src/quantile.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/quickselect.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-array/src/quickselect.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return quickselect; });\n/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ \"./node_modules/d3-array/src/ascending.js\");\n\n\n// Based on https://github.com/mourner/quickselect\n// ISC license, Copyright 2018 Vladimir Agafonkin.\nfunction quickselect(array, k, left = 0, right = array.length - 1, compare = _ascending_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\n  while (right > left) {\n    if (right - left > 600) {\n      const n = right - left + 1;\n      const m = k - left + 1;\n      const z = Math.log(n);\n      const s = 0.5 * Math.exp(2 * z / 3);\n      const sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);\n      const newLeft = Math.max(left, Math.floor(k - m * s / n + sd));\n      const newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));\n      quickselect(array, k, newLeft, newRight, compare);\n    }\n\n    const t = array[k];\n    let i = left;\n    let j = right;\n\n    swap(array, left, k);\n    if (compare(array[right], t) > 0) swap(array, left, right);\n\n    while (i < j) {\n      swap(array, i, j), ++i, --j;\n      while (compare(array[i], t) < 0) ++i;\n      while (compare(array[j], t) > 0) --j;\n    }\n\n    if (compare(array[left], t) === 0) swap(array, left, j);\n    else ++j, swap(array, j, right);\n\n    if (j <= k) left = j + 1;\n    if (k <= j) right = j - 1;\n  }\n  return array;\n}\n\nfunction swap(array, i, j) {\n  const t = array[i];\n  array[i] = array[j];\n  array[j] = t;\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-array/src/quickselect.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/range.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/range.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(start, stop, step) {\n  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;\n\n  var i = -1,\n      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,\n      range = new Array(n);\n\n  while (++i < n) {\n    range[i] = start + i * step;\n  }\n\n  return range;\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-array/src/range.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/scan.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-array/src/scan.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return scan; });\n/* harmony import */ var _leastIndex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leastIndex.js */ \"./node_modules/d3-array/src/leastIndex.js\");\n\n\nfunction scan(values, compare) {\n  const index = Object(_leastIndex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(values, compare);\n  return index < 0 ? undefined : index;\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-array/src/scan.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/shuffle.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-array/src/shuffle.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return shuffle; });\nfunction shuffle(array, i0 = 0, i1 = array.length) {\n  var m = i1 - (i0 = +i0),\n      t,\n      i;\n\n  while (m) {\n    i = Math.random() * m-- | 0;\n    t = array[m + i0];\n    array[m + i0] = array[i + i0];\n    array[i + i0] = t;\n  }\n\n  return array;\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-array/src/shuffle.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/sum.js":
/*!******************************************!*\
  !*** ./node_modules/d3-array/src/sum.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return sum; });\nfunction sum(values, valueof) {\n  let sum = 0;\n  if (valueof === undefined) {\n    for (let value of values) {\n      if (value = +value) {\n        sum += value;\n      }\n    }\n  } else {\n    let index = -1;\n    for (let value of values) {\n      if (value = +valueof(value, ++index, values)) {\n        sum += value;\n      }\n    }\n  }\n  return sum;\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-array/src/sum.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/threshold/freedmanDiaconis.js":
/*!*****************************************************************!*\
  !*** ./node_modules/d3-array/src/threshold/freedmanDiaconis.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _count_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../count.js */ \"./node_modules/d3-array/src/count.js\");\n/* harmony import */ var _quantile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../quantile.js */ \"./node_modules/d3-array/src/quantile.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(values, min, max) {\n  return Math.ceil((max - min) / (2 * (Object(_quantile_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(values, 0.75) - Object(_quantile_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(values, 0.25)) * Math.pow(Object(_count_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(values), -1 / 3)));\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-array/src/threshold/freedmanDiaconis.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/threshold/scott.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-array/src/threshold/scott.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _count_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../count.js */ \"./node_modules/d3-array/src/count.js\");\n/* harmony import */ var _deviation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../deviation.js */ \"./node_modules/d3-array/src/deviation.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(values, min, max) {\n  return Math.ceil((max - min) / (3.5 * Object(_deviation_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(values) * Math.pow(Object(_count_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(values), -1 / 3)));\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-array/src/threshold/scott.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/threshold/sturges.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-array/src/threshold/sturges.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _count_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../count.js */ \"./node_modules/d3-array/src/count.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(values) {\n  return Math.ceil(Math.log(Object(_count_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(values)) / Math.LN2) + 1;\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-array/src/threshold/sturges.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/ticks.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/ticks.js ***!
  \********************************************/
/*! exports provided: default, tickIncrement, tickStep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tickIncrement\", function() { return tickIncrement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tickStep\", function() { return tickStep; });\nvar e10 = Math.sqrt(50),\n    e5 = Math.sqrt(10),\n    e2 = Math.sqrt(2);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(start, stop, count) {\n  var reverse,\n      i = -1,\n      n,\n      ticks,\n      step;\n\n  stop = +stop, start = +start, count = +count;\n  if (start === stop && count > 0) return [start];\n  if (reverse = stop < start) n = start, start = stop, stop = n;\n  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];\n\n  if (step > 0) {\n    start = Math.ceil(start / step);\n    stop = Math.floor(stop / step);\n    ticks = new Array(n = Math.ceil(stop - start + 1));\n    while (++i < n) ticks[i] = (start + i) * step;\n  } else {\n    start = Math.floor(start * step);\n    stop = Math.ceil(stop * step);\n    ticks = new Array(n = Math.ceil(start - stop + 1));\n    while (++i < n) ticks[i] = (start - i) / step;\n  }\n\n  if (reverse) ticks.reverse();\n\n  return ticks;\n});\n\nfunction tickIncrement(start, stop, count) {\n  var step = (stop - start) / Math.max(0, count),\n      power = Math.floor(Math.log(step) / Math.LN10),\n      error = step / Math.pow(10, power);\n  return power >= 0\n      ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)\n      : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);\n}\n\nfunction tickStep(start, stop, count) {\n  var step0 = Math.abs(stop - start) / Math.max(0, count),\n      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),\n      error = step0 / step1;\n  if (error >= e10) step1 *= 10;\n  else if (error >= e5) step1 *= 5;\n  else if (error >= e2) step1 *= 2;\n  return stop < start ? -step1 : step1;\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-array/src/ticks.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/transpose.js":
/*!************************************************!*\
  !*** ./node_modules/d3-array/src/transpose.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./min.js */ \"./node_modules/d3-array/src/min.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(matrix) {\n  if (!(n = matrix.length)) return [];\n  for (var i = -1, m = Object(_min_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(matrix, length), transpose = new Array(m); ++i < m;) {\n    for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n;) {\n      row[j] = matrix[j][i];\n    }\n  }\n  return transpose;\n});\n\nfunction length(d) {\n  return d.length;\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-array/src/transpose.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/variance.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/variance.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return variance; });\nfunction variance(values, valueof) {\n  let count = 0;\n  let delta;\n  let mean = 0;\n  let sum = 0;\n  if (valueof === undefined) {\n    for (let value of values) {\n      if (value != null && (value = +value) >= value) {\n        delta = value - mean;\n        mean += delta / ++count;\n        sum += delta * (value - mean);\n      }\n    }\n  } else {\n    let index = -1;\n    for (let value of values) {\n      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {\n        delta = value - mean;\n        mean += delta / ++count;\n        sum += delta * (value - mean);\n      }\n    }\n  }\n  if (count > 1) return sum / (count - 1);\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-array/src/variance.js?");

/***/ }),

/***/ "./node_modules/d3-array/src/zip.js":
/*!******************************************!*\
  !*** ./node_modules/d3-array/src/zip.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _transpose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transpose.js */ \"./node_modules/d3-array/src/transpose.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\n  return Object(_transpose_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arguments);\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-array/src/zip.js?");

/***/ }),

/***/ "./node_modules/d3-color/src/color.js":
/*!********************************************!*\
  !*** ./node_modules/d3-color/src/color.js ***!
  \********************************************/
/*! exports provided: Color, darker, brighter, default, rgbConvert, rgb, Rgb, hslConvert, hsl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Color\", function() { return Color; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"darker\", function() { return darker; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"brighter\", function() { return brighter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return color; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rgbConvert\", function() { return rgbConvert; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rgb\", function() { return rgb; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Rgb\", function() { return Rgb; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hslConvert\", function() { return hslConvert; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hsl\", function() { return hsl; });\n/* harmony import */ var _define_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./define.js */ \"./node_modules/d3-color/src/define.js\");\n\n\nfunction Color() {}\n\nvar darker = 0.7;\nvar brighter = 1 / darker;\n\nvar reI = \"\\\\s*([+-]?\\\\d+)\\\\s*\",\n    reN = \"\\\\s*([+-]?\\\\d*\\\\.?\\\\d+(?:[eE][+-]?\\\\d+)?)\\\\s*\",\n    reP = \"\\\\s*([+-]?\\\\d*\\\\.?\\\\d+(?:[eE][+-]?\\\\d+)?)%\\\\s*\",\n    reHex = /^#([0-9a-f]{3,8})$/,\n    reRgbInteger = new RegExp(\"^rgb\\\\(\" + [reI, reI, reI] + \"\\\\)$\"),\n    reRgbPercent = new RegExp(\"^rgb\\\\(\" + [reP, reP, reP] + \"\\\\)$\"),\n    reRgbaInteger = new RegExp(\"^rgba\\\\(\" + [reI, reI, reI, reN] + \"\\\\)$\"),\n    reRgbaPercent = new RegExp(\"^rgba\\\\(\" + [reP, reP, reP, reN] + \"\\\\)$\"),\n    reHslPercent = new RegExp(\"^hsl\\\\(\" + [reN, reP, reP] + \"\\\\)$\"),\n    reHslaPercent = new RegExp(\"^hsla\\\\(\" + [reN, reP, reP, reN] + \"\\\\)$\");\n\nvar named = {\n  aliceblue: 0xf0f8ff,\n  antiquewhite: 0xfaebd7,\n  aqua: 0x00ffff,\n  aquamarine: 0x7fffd4,\n  azure: 0xf0ffff,\n  beige: 0xf5f5dc,\n  bisque: 0xffe4c4,\n  black: 0x000000,\n  blanchedalmond: 0xffebcd,\n  blue: 0x0000ff,\n  blueviolet: 0x8a2be2,\n  brown: 0xa52a2a,\n  burlywood: 0xdeb887,\n  cadetblue: 0x5f9ea0,\n  chartreuse: 0x7fff00,\n  chocolate: 0xd2691e,\n  coral: 0xff7f50,\n  cornflowerblue: 0x6495ed,\n  cornsilk: 0xfff8dc,\n  crimson: 0xdc143c,\n  cyan: 0x00ffff,\n  darkblue: 0x00008b,\n  darkcyan: 0x008b8b,\n  darkgoldenrod: 0xb8860b,\n  darkgray: 0xa9a9a9,\n  darkgreen: 0x006400,\n  darkgrey: 0xa9a9a9,\n  darkkhaki: 0xbdb76b,\n  darkmagenta: 0x8b008b,\n  darkolivegreen: 0x556b2f,\n  darkorange: 0xff8c00,\n  darkorchid: 0x9932cc,\n  darkred: 0x8b0000,\n  darksalmon: 0xe9967a,\n  darkseagreen: 0x8fbc8f,\n  darkslateblue: 0x483d8b,\n  darkslategray: 0x2f4f4f,\n  darkslategrey: 0x2f4f4f,\n  darkturquoise: 0x00ced1,\n  darkviolet: 0x9400d3,\n  deeppink: 0xff1493,\n  deepskyblue: 0x00bfff,\n  dimgray: 0x696969,\n  dimgrey: 0x696969,\n  dodgerblue: 0x1e90ff,\n  firebrick: 0xb22222,\n  floralwhite: 0xfffaf0,\n  forestgreen: 0x228b22,\n  fuchsia: 0xff00ff,\n  gainsboro: 0xdcdcdc,\n  ghostwhite: 0xf8f8ff,\n  gold: 0xffd700,\n  goldenrod: 0xdaa520,\n  gray: 0x808080,\n  green: 0x008000,\n  greenyellow: 0xadff2f,\n  grey: 0x808080,\n  honeydew: 0xf0fff0,\n  hotpink: 0xff69b4,\n  indianred: 0xcd5c5c,\n  indigo: 0x4b0082,\n  ivory: 0xfffff0,\n  khaki: 0xf0e68c,\n  lavender: 0xe6e6fa,\n  lavenderblush: 0xfff0f5,\n  lawngreen: 0x7cfc00,\n  lemonchiffon: 0xfffacd,\n  lightblue: 0xadd8e6,\n  lightcoral: 0xf08080,\n  lightcyan: 0xe0ffff,\n  lightgoldenrodyellow: 0xfafad2,\n  lightgray: 0xd3d3d3,\n  lightgreen: 0x90ee90,\n  lightgrey: 0xd3d3d3,\n  lightpink: 0xffb6c1,\n  lightsalmon: 0xffa07a,\n  lightseagreen: 0x20b2aa,\n  lightskyblue: 0x87cefa,\n  lightslategray: 0x778899,\n  lightslategrey: 0x778899,\n  lightsteelblue: 0xb0c4de,\n  lightyellow: 0xffffe0,\n  lime: 0x00ff00,\n  limegreen: 0x32cd32,\n  linen: 0xfaf0e6,\n  magenta: 0xff00ff,\n  maroon: 0x800000,\n  mediumaquamarine: 0x66cdaa,\n  mediumblue: 0x0000cd,\n  mediumorchid: 0xba55d3,\n  mediumpurple: 0x9370db,\n  mediumseagreen: 0x3cb371,\n  mediumslateblue: 0x7b68ee,\n  mediumspringgreen: 0x00fa9a,\n  mediumturquoise: 0x48d1cc,\n  mediumvioletred: 0xc71585,\n  midnightblue: 0x191970,\n  mintcream: 0xf5fffa,\n  mistyrose: 0xffe4e1,\n  moccasin: 0xffe4b5,\n  navajowhite: 0xffdead,\n  navy: 0x000080,\n  oldlace: 0xfdf5e6,\n  olive: 0x808000,\n  olivedrab: 0x6b8e23,\n  orange: 0xffa500,\n  orangered: 0xff4500,\n  orchid: 0xda70d6,\n  palegoldenrod: 0xeee8aa,\n  palegreen: 0x98fb98,\n  paleturquoise: 0xafeeee,\n  palevioletred: 0xdb7093,\n  papayawhip: 0xffefd5,\n  peachpuff: 0xffdab9,\n  peru: 0xcd853f,\n  pink: 0xffc0cb,\n  plum: 0xdda0dd,\n  powderblue: 0xb0e0e6,\n  purple: 0x800080,\n  rebeccapurple: 0x663399,\n  red: 0xff0000,\n  rosybrown: 0xbc8f8f,\n  royalblue: 0x4169e1,\n  saddlebrown: 0x8b4513,\n  salmon: 0xfa8072,\n  sandybrown: 0xf4a460,\n  seagreen: 0x2e8b57,\n  seashell: 0xfff5ee,\n  sienna: 0xa0522d,\n  silver: 0xc0c0c0,\n  skyblue: 0x87ceeb,\n  slateblue: 0x6a5acd,\n  slategray: 0x708090,\n  slategrey: 0x708090,\n  snow: 0xfffafa,\n  springgreen: 0x00ff7f,\n  steelblue: 0x4682b4,\n  tan: 0xd2b48c,\n  teal: 0x008080,\n  thistle: 0xd8bfd8,\n  tomato: 0xff6347,\n  turquoise: 0x40e0d0,\n  violet: 0xee82ee,\n  wheat: 0xf5deb3,\n  white: 0xffffff,\n  whitesmoke: 0xf5f5f5,\n  yellow: 0xffff00,\n  yellowgreen: 0x9acd32\n};\n\nObject(_define_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Color, color, {\n  copy: function(channels) {\n    return Object.assign(new this.constructor, this, channels);\n  },\n  displayable: function() {\n    return this.rgb().displayable();\n  },\n  hex: color_formatHex, // Deprecated! Use color.formatHex.\n  formatHex: color_formatHex,\n  formatHsl: color_formatHsl,\n  formatRgb: color_formatRgb,\n  toString: color_formatRgb\n});\n\nfunction color_formatHex() {\n  return this.rgb().formatHex();\n}\n\nfunction color_formatHsl() {\n  return hslConvert(this).formatHsl();\n}\n\nfunction color_formatRgb() {\n  return this.rgb().formatRgb();\n}\n\nfunction color(format) {\n  var m, l;\n  format = (format + \"\").trim().toLowerCase();\n  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000\n      : l === 3 ? new Rgb((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1) // #f00\n      : l === 8 ? new Rgb(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000\n      : l === 4 ? new Rgb((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff) // #f000\n      : null) // invalid hex\n      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)\n      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)\n      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)\n      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)\n      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)\n      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)\n      : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins\n      : format === \"transparent\" ? new Rgb(NaN, NaN, NaN, 0)\n      : null;\n}\n\nfunction rgbn(n) {\n  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);\n}\n\nfunction rgba(r, g, b, a) {\n  if (a <= 0) r = g = b = NaN;\n  return new Rgb(r, g, b, a);\n}\n\nfunction rgbConvert(o) {\n  if (!(o instanceof Color)) o = color(o);\n  if (!o) return new Rgb;\n  o = o.rgb();\n  return new Rgb(o.r, o.g, o.b, o.opacity);\n}\n\nfunction rgb(r, g, b, opacity) {\n  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);\n}\n\nfunction Rgb(r, g, b, opacity) {\n  this.r = +r;\n  this.g = +g;\n  this.b = +b;\n  this.opacity = +opacity;\n}\n\nObject(_define_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Rgb, rgb, Object(_define_js__WEBPACK_IMPORTED_MODULE_0__[\"extend\"])(Color, {\n  brighter: function(k) {\n    k = k == null ? brighter : Math.pow(brighter, k);\n    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);\n  },\n  darker: function(k) {\n    k = k == null ? darker : Math.pow(darker, k);\n    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);\n  },\n  rgb: function() {\n    return this;\n  },\n  displayable: function() {\n    return (-0.5 <= this.r && this.r < 255.5)\n        && (-0.5 <= this.g && this.g < 255.5)\n        && (-0.5 <= this.b && this.b < 255.5)\n        && (0 <= this.opacity && this.opacity <= 1);\n  },\n  hex: rgb_formatHex, // Deprecated! Use color.formatHex.\n  formatHex: rgb_formatHex,\n  formatRgb: rgb_formatRgb,\n  toString: rgb_formatRgb\n}));\n\nfunction rgb_formatHex() {\n  return \"#\" + hex(this.r) + hex(this.g) + hex(this.b);\n}\n\nfunction rgb_formatRgb() {\n  var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));\n  return (a === 1 ? \"rgb(\" : \"rgba(\")\n      + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + \", \"\n      + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + \", \"\n      + Math.max(0, Math.min(255, Math.round(this.b) || 0))\n      + (a === 1 ? \")\" : \", \" + a + \")\");\n}\n\nfunction hex(value) {\n  value = Math.max(0, Math.min(255, Math.round(value) || 0));\n  return (value < 16 ? \"0\" : \"\") + value.toString(16);\n}\n\nfunction hsla(h, s, l, a) {\n  if (a <= 0) h = s = l = NaN;\n  else if (l <= 0 || l >= 1) h = s = NaN;\n  else if (s <= 0) h = NaN;\n  return new Hsl(h, s, l, a);\n}\n\nfunction hslConvert(o) {\n  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);\n  if (!(o instanceof Color)) o = color(o);\n  if (!o) return new Hsl;\n  if (o instanceof Hsl) return o;\n  o = o.rgb();\n  var r = o.r / 255,\n      g = o.g / 255,\n      b = o.b / 255,\n      min = Math.min(r, g, b),\n      max = Math.max(r, g, b),\n      h = NaN,\n      s = max - min,\n      l = (max + min) / 2;\n  if (s) {\n    if (r === max) h = (g - b) / s + (g < b) * 6;\n    else if (g === max) h = (b - r) / s + 2;\n    else h = (r - g) / s + 4;\n    s /= l < 0.5 ? max + min : 2 - max - min;\n    h *= 60;\n  } else {\n    s = l > 0 && l < 1 ? 0 : h;\n  }\n  return new Hsl(h, s, l, o.opacity);\n}\n\nfunction hsl(h, s, l, opacity) {\n  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);\n}\n\nfunction Hsl(h, s, l, opacity) {\n  this.h = +h;\n  this.s = +s;\n  this.l = +l;\n  this.opacity = +opacity;\n}\n\nObject(_define_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Hsl, hsl, Object(_define_js__WEBPACK_IMPORTED_MODULE_0__[\"extend\"])(Color, {\n  brighter: function(k) {\n    k = k == null ? brighter : Math.pow(brighter, k);\n    return new Hsl(this.h, this.s, this.l * k, this.opacity);\n  },\n  darker: function(k) {\n    k = k == null ? darker : Math.pow(darker, k);\n    return new Hsl(this.h, this.s, this.l * k, this.opacity);\n  },\n  rgb: function() {\n    var h = this.h % 360 + (this.h < 0) * 360,\n        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,\n        l = this.l,\n        m2 = l + (l < 0.5 ? l : 1 - l) * s,\n        m1 = 2 * l - m2;\n    return new Rgb(\n      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),\n      hsl2rgb(h, m1, m2),\n      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),\n      this.opacity\n    );\n  },\n  displayable: function() {\n    return (0 <= this.s && this.s <= 1 || isNaN(this.s))\n        && (0 <= this.l && this.l <= 1)\n        && (0 <= this.opacity && this.opacity <= 1);\n  },\n  formatHsl: function() {\n    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));\n    return (a === 1 ? \"hsl(\" : \"hsla(\")\n        + (this.h || 0) + \", \"\n        + (this.s || 0) * 100 + \"%, \"\n        + (this.l || 0) * 100 + \"%\"\n        + (a === 1 ? \")\" : \", \" + a + \")\");\n  }\n}));\n\n/* From FvD 13.37, CSS Color Module Level 3 */\nfunction hsl2rgb(h, m1, m2) {\n  return (h < 60 ? m1 + (m2 - m1) * h / 60\n      : h < 180 ? m2\n      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60\n      : m1) * 255;\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-color/src/color.js?");

/***/ }),

/***/ "./node_modules/d3-color/src/cubehelix.js":
/*!************************************************!*\
  !*** ./node_modules/d3-color/src/cubehelix.js ***!
  \************************************************/
/*! exports provided: default, Cubehelix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return cubehelix; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Cubehelix\", function() { return Cubehelix; });\n/* harmony import */ var _define_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./define.js */ \"./node_modules/d3-color/src/define.js\");\n/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color.js */ \"./node_modules/d3-color/src/color.js\");\n/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math.js */ \"./node_modules/d3-color/src/math.js\");\n\n\n\n\nvar A = -0.14861,\n    B = +1.78277,\n    C = -0.29227,\n    D = -0.90649,\n    E = +1.97294,\n    ED = E * D,\n    EB = E * B,\n    BC_DA = B * C - D * A;\n\nfunction cubehelixConvert(o) {\n  if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);\n  if (!(o instanceof _color_js__WEBPACK_IMPORTED_MODULE_1__[\"Rgb\"])) o = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__[\"rgbConvert\"])(o);\n  var r = o.r / 255,\n      g = o.g / 255,\n      b = o.b / 255,\n      l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),\n      bl = b - l,\n      k = (E * (g - l) - C * bl) / D,\n      s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), // NaN if l=0 or l=1\n      h = s ? Math.atan2(k, bl) * _math_js__WEBPACK_IMPORTED_MODULE_2__[\"rad2deg\"] - 120 : NaN;\n  return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);\n}\n\nfunction cubehelix(h, s, l, opacity) {\n  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);\n}\n\nfunction Cubehelix(h, s, l, opacity) {\n  this.h = +h;\n  this.s = +s;\n  this.l = +l;\n  this.opacity = +opacity;\n}\n\nObject(_define_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Cubehelix, cubehelix, Object(_define_js__WEBPACK_IMPORTED_MODULE_0__[\"extend\"])(_color_js__WEBPACK_IMPORTED_MODULE_1__[\"Color\"], {\n  brighter: function(k) {\n    k = k == null ? _color_js__WEBPACK_IMPORTED_MODULE_1__[\"brighter\"] : Math.pow(_color_js__WEBPACK_IMPORTED_MODULE_1__[\"brighter\"], k);\n    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);\n  },\n  darker: function(k) {\n    k = k == null ? _color_js__WEBPACK_IMPORTED_MODULE_1__[\"darker\"] : Math.pow(_color_js__WEBPACK_IMPORTED_MODULE_1__[\"darker\"], k);\n    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);\n  },\n  rgb: function() {\n    var h = isNaN(this.h) ? 0 : (this.h + 120) * _math_js__WEBPACK_IMPORTED_MODULE_2__[\"deg2rad\"],\n        l = +this.l,\n        a = isNaN(this.s) ? 0 : this.s * l * (1 - l),\n        cosh = Math.cos(h),\n        sinh = Math.sin(h);\n    return new _color_js__WEBPACK_IMPORTED_MODULE_1__[\"Rgb\"](\n      255 * (l + a * (A * cosh + B * sinh)),\n      255 * (l + a * (C * cosh + D * sinh)),\n      255 * (l + a * (E * cosh)),\n      this.opacity\n    );\n  }\n}));\n\n\n//# sourceURL=webpack:///./node_modules/d3-color/src/cubehelix.js?");

/***/ }),

/***/ "./node_modules/d3-color/src/define.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-color/src/define.js ***!
  \*********************************************/
/*! exports provided: default, extend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"extend\", function() { return extend; });\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(constructor, factory, prototype) {\n  constructor.prototype = factory.prototype = prototype;\n  prototype.constructor = constructor;\n});\n\nfunction extend(parent, definition) {\n  var prototype = Object.create(parent.prototype);\n  for (var key in definition) prototype[key] = definition[key];\n  return prototype;\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-color/src/define.js?");

/***/ }),

/***/ "./node_modules/d3-color/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/d3-color/src/index.js ***!
  \********************************************/
/*! exports provided: color, rgb, hsl, lab, hcl, lch, gray, cubehelix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color.js */ \"./node_modules/d3-color/src/color.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"color\", function() { return _color_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"rgb\", function() { return _color_js__WEBPACK_IMPORTED_MODULE_0__[\"rgb\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"hsl\", function() { return _color_js__WEBPACK_IMPORTED_MODULE_0__[\"hsl\"]; });\n\n/* harmony import */ var _lab_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lab.js */ \"./node_modules/d3-color/src/lab.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"lab\", function() { return _lab_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"hcl\", function() { return _lab_js__WEBPACK_IMPORTED_MODULE_1__[\"hcl\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"lch\", function() { return _lab_js__WEBPACK_IMPORTED_MODULE_1__[\"lch\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"gray\", function() { return _lab_js__WEBPACK_IMPORTED_MODULE_1__[\"gray\"]; });\n\n/* harmony import */ var _cubehelix_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cubehelix.js */ \"./node_modules/d3-color/src/cubehelix.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"cubehelix\", function() { return _cubehelix_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n\n\n\n\n\n//# sourceURL=webpack:///./node_modules/d3-color/src/index.js?");

/***/ }),

/***/ "./node_modules/d3-color/src/lab.js":
/*!******************************************!*\
  !*** ./node_modules/d3-color/src/lab.js ***!
  \******************************************/
/*! exports provided: gray, default, Lab, lch, hcl, Hcl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gray\", function() { return gray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return lab; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Lab\", function() { return Lab; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lch\", function() { return lch; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hcl\", function() { return hcl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Hcl\", function() { return Hcl; });\n/* harmony import */ var _define_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./define.js */ \"./node_modules/d3-color/src/define.js\");\n/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color.js */ \"./node_modules/d3-color/src/color.js\");\n/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math.js */ \"./node_modules/d3-color/src/math.js\");\n\n\n\n\n// https://observablehq.com/@mbostock/lab-and-rgb\nvar K = 18,\n    Xn = 0.96422,\n    Yn = 1,\n    Zn = 0.82521,\n    t0 = 4 / 29,\n    t1 = 6 / 29,\n    t2 = 3 * t1 * t1,\n    t3 = t1 * t1 * t1;\n\nfunction labConvert(o) {\n  if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);\n  if (o instanceof Hcl) return hcl2lab(o);\n  if (!(o instanceof _color_js__WEBPACK_IMPORTED_MODULE_1__[\"Rgb\"])) o = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__[\"rgbConvert\"])(o);\n  var r = rgb2lrgb(o.r),\n      g = rgb2lrgb(o.g),\n      b = rgb2lrgb(o.b),\n      y = xyz2lab((0.2225045 * r + 0.7168786 * g + 0.0606169 * b) / Yn), x, z;\n  if (r === g && g === b) x = z = y; else {\n    x = xyz2lab((0.4360747 * r + 0.3850649 * g + 0.1430804 * b) / Xn);\n    z = xyz2lab((0.0139322 * r + 0.0971045 * g + 0.7141733 * b) / Zn);\n  }\n  return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);\n}\n\nfunction gray(l, opacity) {\n  return new Lab(l, 0, 0, opacity == null ? 1 : opacity);\n}\n\nfunction lab(l, a, b, opacity) {\n  return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);\n}\n\nfunction Lab(l, a, b, opacity) {\n  this.l = +l;\n  this.a = +a;\n  this.b = +b;\n  this.opacity = +opacity;\n}\n\nObject(_define_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Lab, lab, Object(_define_js__WEBPACK_IMPORTED_MODULE_0__[\"extend\"])(_color_js__WEBPACK_IMPORTED_MODULE_1__[\"Color\"], {\n  brighter: function(k) {\n    return new Lab(this.l + K * (k == null ? 1 : k), this.a, this.b, this.opacity);\n  },\n  darker: function(k) {\n    return new Lab(this.l - K * (k == null ? 1 : k), this.a, this.b, this.opacity);\n  },\n  rgb: function() {\n    var y = (this.l + 16) / 116,\n        x = isNaN(this.a) ? y : y + this.a / 500,\n        z = isNaN(this.b) ? y : y - this.b / 200;\n    x = Xn * lab2xyz(x);\n    y = Yn * lab2xyz(y);\n    z = Zn * lab2xyz(z);\n    return new _color_js__WEBPACK_IMPORTED_MODULE_1__[\"Rgb\"](\n      lrgb2rgb( 3.1338561 * x - 1.6168667 * y - 0.4906146 * z),\n      lrgb2rgb(-0.9787684 * x + 1.9161415 * y + 0.0334540 * z),\n      lrgb2rgb( 0.0719453 * x - 0.2289914 * y + 1.4052427 * z),\n      this.opacity\n    );\n  }\n}));\n\nfunction xyz2lab(t) {\n  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;\n}\n\nfunction lab2xyz(t) {\n  return t > t1 ? t * t * t : t2 * (t - t0);\n}\n\nfunction lrgb2rgb(x) {\n  return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);\n}\n\nfunction rgb2lrgb(x) {\n  return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);\n}\n\nfunction hclConvert(o) {\n  if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);\n  if (!(o instanceof Lab)) o = labConvert(o);\n  if (o.a === 0 && o.b === 0) return new Hcl(NaN, 0 < o.l && o.l < 100 ? 0 : NaN, o.l, o.opacity);\n  var h = Math.atan2(o.b, o.a) * _math_js__WEBPACK_IMPORTED_MODULE_2__[\"rad2deg\"];\n  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);\n}\n\nfunction lch(l, c, h, opacity) {\n  return arguments.length === 1 ? hclConvert(l) : new Hcl(h, c, l, opacity == null ? 1 : opacity);\n}\n\nfunction hcl(h, c, l, opacity) {\n  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);\n}\n\nfunction Hcl(h, c, l, opacity) {\n  this.h = +h;\n  this.c = +c;\n  this.l = +l;\n  this.opacity = +opacity;\n}\n\nfunction hcl2lab(o) {\n  if (isNaN(o.h)) return new Lab(o.l, 0, 0, o.opacity);\n  var h = o.h * _math_js__WEBPACK_IMPORTED_MODULE_2__[\"deg2rad\"];\n  return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);\n}\n\nObject(_define_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Hcl, hcl, Object(_define_js__WEBPACK_IMPORTED_MODULE_0__[\"extend\"])(_color_js__WEBPACK_IMPORTED_MODULE_1__[\"Color\"], {\n  brighter: function(k) {\n    return new Hcl(this.h, this.c, this.l + K * (k == null ? 1 : k), this.opacity);\n  },\n  darker: function(k) {\n    return new Hcl(this.h, this.c, this.l - K * (k == null ? 1 : k), this.opacity);\n  },\n  rgb: function() {\n    return hcl2lab(this).rgb();\n  }\n}));\n\n\n//# sourceURL=webpack:///./node_modules/d3-color/src/lab.js?");

/***/ }),

/***/ "./node_modules/d3-color/src/math.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-color/src/math.js ***!
  \*******************************************/
/*! exports provided: deg2rad, rad2deg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deg2rad\", function() { return deg2rad; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rad2deg\", function() { return rad2deg; });\nvar deg2rad = Math.PI / 180;\nvar rad2deg = 180 / Math.PI;\n\n\n//# sourceURL=webpack:///./node_modules/d3-color/src/math.js?");

/***/ }),

/***/ "./node_modules/d3-format/src/defaultLocale.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-format/src/defaultLocale.js ***!
  \*****************************************************/
/*! exports provided: format, formatPrefix, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"format\", function() { return format; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formatPrefix\", function() { return formatPrefix; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return defaultLocale; });\n/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locale.js */ \"./node_modules/d3-format/src/locale.js\");\n\n\nvar locale;\nvar format;\nvar formatPrefix;\n\ndefaultLocale({\n  decimal: \".\",\n  thousands: \",\",\n  grouping: [3],\n  currency: [\"$\", \"\"],\n  minus: \"-\"\n});\n\nfunction defaultLocale(definition) {\n  locale = Object(_locale_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(definition);\n  format = locale.format;\n  formatPrefix = locale.formatPrefix;\n  return locale;\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-format/src/defaultLocale.js?");

/***/ }),

/***/ "./node_modules/d3-format/src/exponent.js":
/*!************************************************!*\
  !*** ./node_modules/d3-format/src/exponent.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatDecimal.js */ \"./node_modules/d3-format/src/formatDecimal.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(x) {\n  return x = Object(_formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Math.abs(x)), x ? x[1] : NaN;\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-format/src/exponent.js?");

/***/ }),

/***/ "./node_modules/d3-format/src/formatDecimal.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-format/src/formatDecimal.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Computes the decimal coefficient and exponent of the specified number x with\n// significant digits p, where x is positive and p is in [1, 21] or undefined.\n// For example, formatDecimal(1.23) returns [\"123\", 0].\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(x, p) {\n  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf(\"e\")) < 0) return null; // NaN, ±Infinity\n  var i, coefficient = x.slice(0, i);\n\n  // The string returned by toExponential either has the form \\d\\.\\d+e[-+]\\d+\n  // (e.g., 1.2e+3) or the form \\de[-+]\\d+ (e.g., 1e+3).\n  return [\n    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,\n    +x.slice(i + 1)\n  ];\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-format/src/formatDecimal.js?");

/***/ }),

/***/ "./node_modules/d3-format/src/formatGroup.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-format/src/formatGroup.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(grouping, thousands) {\n  return function(value, width) {\n    var i = value.length,\n        t = [],\n        j = 0,\n        g = grouping[0],\n        length = 0;\n\n    while (i > 0 && g > 0) {\n      if (length + g + 1 > width) g = Math.max(1, width - length);\n      t.push(value.substring(i -= g, i + g));\n      if ((length += g + 1) > width) break;\n      g = grouping[j = (j + 1) % grouping.length];\n    }\n\n    return t.reverse().join(thousands);\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-format/src/formatGroup.js?");

/***/ }),

/***/ "./node_modules/d3-format/src/formatNumerals.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-format/src/formatNumerals.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(numerals) {\n  return function(value) {\n    return value.replace(/[0-9]/g, function(i) {\n      return numerals[+i];\n    });\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-format/src/formatNumerals.js?");

/***/ }),

/***/ "./node_modules/d3-format/src/formatPrefixAuto.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-format/src/formatPrefixAuto.js ***!
  \********************************************************/
/*! exports provided: prefixExponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"prefixExponent\", function() { return prefixExponent; });\n/* harmony import */ var _formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatDecimal.js */ \"./node_modules/d3-format/src/formatDecimal.js\");\n\n\nvar prefixExponent;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(x, p) {\n  var d = Object(_formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(x, p);\n  if (!d) return x + \"\";\n  var coefficient = d[0],\n      exponent = d[1],\n      i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,\n      n = coefficient.length;\n  return i === n ? coefficient\n      : i > n ? coefficient + new Array(i - n + 1).join(\"0\")\n      : i > 0 ? coefficient.slice(0, i) + \".\" + coefficient.slice(i)\n      : \"0.\" + new Array(1 - i).join(\"0\") + Object(_formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(x, Math.max(0, p + i - 1))[0]; // less than 1y!\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-format/src/formatPrefixAuto.js?");

/***/ }),

/***/ "./node_modules/d3-format/src/formatRounded.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-format/src/formatRounded.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatDecimal.js */ \"./node_modules/d3-format/src/formatDecimal.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(x, p) {\n  var d = Object(_formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(x, p);\n  if (!d) return x + \"\";\n  var coefficient = d[0],\n      exponent = d[1];\n  return exponent < 0 ? \"0.\" + new Array(-exponent).join(\"0\") + coefficient\n      : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + \".\" + coefficient.slice(exponent + 1)\n      : coefficient + new Array(exponent - coefficient.length + 2).join(\"0\");\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-format/src/formatRounded.js?");

/***/ }),

/***/ "./node_modules/d3-format/src/formatSpecifier.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-format/src/formatSpecifier.js ***!
  \*******************************************************/
/*! exports provided: default, FormatSpecifier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return formatSpecifier; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FormatSpecifier\", function() { return FormatSpecifier; });\n// [[fill]align][sign][symbol][0][width][,][.precision][~][type]\nvar re = /^(?:(.)?([<>=^]))?([+\\-( ])?([$#])?(0)?(\\d+)?(,)?(\\.\\d+)?(~)?([a-z%])?$/i;\n\nfunction formatSpecifier(specifier) {\n  if (!(match = re.exec(specifier))) throw new Error(\"invalid format: \" + specifier);\n  var match;\n  return new FormatSpecifier({\n    fill: match[1],\n    align: match[2],\n    sign: match[3],\n    symbol: match[4],\n    zero: match[5],\n    width: match[6],\n    comma: match[7],\n    precision: match[8] && match[8].slice(1),\n    trim: match[9],\n    type: match[10]\n  });\n}\n\nformatSpecifier.prototype = FormatSpecifier.prototype; // instanceof\n\nfunction FormatSpecifier(specifier) {\n  this.fill = specifier.fill === undefined ? \" \" : specifier.fill + \"\";\n  this.align = specifier.align === undefined ? \">\" : specifier.align + \"\";\n  this.sign = specifier.sign === undefined ? \"-\" : specifier.sign + \"\";\n  this.symbol = specifier.symbol === undefined ? \"\" : specifier.symbol + \"\";\n  this.zero = !!specifier.zero;\n  this.width = specifier.width === undefined ? undefined : +specifier.width;\n  this.comma = !!specifier.comma;\n  this.precision = specifier.precision === undefined ? undefined : +specifier.precision;\n  this.trim = !!specifier.trim;\n  this.type = specifier.type === undefined ? \"\" : specifier.type + \"\";\n}\n\nFormatSpecifier.prototype.toString = function() {\n  return this.fill\n      + this.align\n      + this.sign\n      + this.symbol\n      + (this.zero ? \"0\" : \"\")\n      + (this.width === undefined ? \"\" : Math.max(1, this.width | 0))\n      + (this.comma ? \",\" : \"\")\n      + (this.precision === undefined ? \"\" : \".\" + Math.max(0, this.precision | 0))\n      + (this.trim ? \"~\" : \"\")\n      + this.type;\n};\n\n\n//# sourceURL=webpack:///./node_modules/d3-format/src/formatSpecifier.js?");

/***/ }),

/***/ "./node_modules/d3-format/src/formatTrim.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-format/src/formatTrim.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(s) {\n  out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {\n    switch (s[i]) {\n      case \".\": i0 = i1 = i; break;\n      case \"0\": if (i0 === 0) i0 = i; i1 = i; break;\n      default: if (i0 > 0) { if (!+s[i]) break out; i0 = 0; } break;\n    }\n  }\n  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-format/src/formatTrim.js?");

/***/ }),

/***/ "./node_modules/d3-format/src/formatTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-format/src/formatTypes.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _formatPrefixAuto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatPrefixAuto.js */ \"./node_modules/d3-format/src/formatPrefixAuto.js\");\n/* harmony import */ var _formatRounded_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatRounded.js */ \"./node_modules/d3-format/src/formatRounded.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  \"%\": function(x, p) { return (x * 100).toFixed(p); },\n  \"b\": function(x) { return Math.round(x).toString(2); },\n  \"c\": function(x) { return x + \"\"; },\n  \"d\": function(x) { return Math.round(x).toString(10); },\n  \"e\": function(x, p) { return x.toExponential(p); },\n  \"f\": function(x, p) { return x.toFixed(p); },\n  \"g\": function(x, p) { return x.toPrecision(p); },\n  \"o\": function(x) { return Math.round(x).toString(8); },\n  \"p\": function(x, p) { return Object(_formatRounded_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(x * 100, p); },\n  \"r\": _formatRounded_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  \"s\": _formatPrefixAuto_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  \"X\": function(x) { return Math.round(x).toString(16).toUpperCase(); },\n  \"x\": function(x) { return Math.round(x).toString(16); }\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-format/src/formatTypes.js?");

/***/ }),

/***/ "./node_modules/d3-format/src/identity.js":
/*!************************************************!*\
  !*** ./node_modules/d3-format/src/identity.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(x) {\n  return x;\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-format/src/identity.js?");

/***/ }),

/***/ "./node_modules/d3-format/src/index.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-format/src/index.js ***!
  \*********************************************/
/*! exports provided: formatDefaultLocale, format, formatPrefix, formatLocale, formatSpecifier, FormatSpecifier, precisionFixed, precisionPrefix, precisionRound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultLocale.js */ \"./node_modules/d3-format/src/defaultLocale.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"formatDefaultLocale\", function() { return _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"format\", function() { return _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__[\"format\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"formatPrefix\", function() { return _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__[\"formatPrefix\"]; });\n\n/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale.js */ \"./node_modules/d3-format/src/locale.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"formatLocale\", function() { return _locale_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _formatSpecifier_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formatSpecifier.js */ \"./node_modules/d3-format/src/formatSpecifier.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"formatSpecifier\", function() { return _formatSpecifier_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"FormatSpecifier\", function() { return _formatSpecifier_js__WEBPACK_IMPORTED_MODULE_2__[\"FormatSpecifier\"]; });\n\n/* harmony import */ var _precisionFixed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./precisionFixed.js */ \"./node_modules/d3-format/src/precisionFixed.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"precisionFixed\", function() { return _precisionFixed_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _precisionPrefix_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./precisionPrefix.js */ \"./node_modules/d3-format/src/precisionPrefix.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"precisionPrefix\", function() { return _precisionPrefix_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _precisionRound_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./precisionRound.js */ \"./node_modules/d3-format/src/precisionRound.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"precisionRound\", function() { return _precisionRound_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./node_modules/d3-format/src/index.js?");

/***/ }),

/***/ "./node_modules/d3-format/src/locale.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-format/src/locale.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exponent.js */ \"./node_modules/d3-format/src/exponent.js\");\n/* harmony import */ var _formatGroup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatGroup.js */ \"./node_modules/d3-format/src/formatGroup.js\");\n/* harmony import */ var _formatNumerals_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formatNumerals.js */ \"./node_modules/d3-format/src/formatNumerals.js\");\n/* harmony import */ var _formatSpecifier_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formatSpecifier.js */ \"./node_modules/d3-format/src/formatSpecifier.js\");\n/* harmony import */ var _formatTrim_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formatTrim.js */ \"./node_modules/d3-format/src/formatTrim.js\");\n/* harmony import */ var _formatTypes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formatTypes.js */ \"./node_modules/d3-format/src/formatTypes.js\");\n/* harmony import */ var _formatPrefixAuto_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formatPrefixAuto.js */ \"./node_modules/d3-format/src/formatPrefixAuto.js\");\n/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./identity.js */ \"./node_modules/d3-format/src/identity.js\");\n\n\n\n\n\n\n\n\n\nvar map = Array.prototype.map,\n    prefixes = [\"y\",\"z\",\"a\",\"f\",\"p\",\"n\",\"µ\",\"m\",\"\",\"k\",\"M\",\"G\",\"T\",\"P\",\"E\",\"Z\",\"Y\"];\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(locale) {\n  var group = locale.grouping === undefined || locale.thousands === undefined ? _identity_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"] : Object(_formatGroup_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(map.call(locale.grouping, Number), locale.thousands + \"\"),\n      currencyPrefix = locale.currency === undefined ? \"\" : locale.currency[0] + \"\",\n      currencySuffix = locale.currency === undefined ? \"\" : locale.currency[1] + \"\",\n      decimal = locale.decimal === undefined ? \".\" : locale.decimal + \"\",\n      numerals = locale.numerals === undefined ? _identity_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"] : Object(_formatNumerals_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(map.call(locale.numerals, String)),\n      percent = locale.percent === undefined ? \"%\" : locale.percent + \"\",\n      minus = locale.minus === undefined ? \"-\" : locale.minus + \"\",\n      nan = locale.nan === undefined ? \"NaN\" : locale.nan + \"\";\n\n  function newFormat(specifier) {\n    specifier = Object(_formatSpecifier_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(specifier);\n\n    var fill = specifier.fill,\n        align = specifier.align,\n        sign = specifier.sign,\n        symbol = specifier.symbol,\n        zero = specifier.zero,\n        width = specifier.width,\n        comma = specifier.comma,\n        precision = specifier.precision,\n        trim = specifier.trim,\n        type = specifier.type;\n\n    // The \"n\" type is an alias for \",g\".\n    if (type === \"n\") comma = true, type = \"g\";\n\n    // The \"\" type, and any invalid type, is an alias for \".12~g\".\n    else if (!_formatTypes_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"][type]) precision === undefined && (precision = 12), trim = true, type = \"g\";\n\n    // If zero fill is specified, padding goes after sign and before digits.\n    if (zero || (fill === \"0\" && align === \"=\")) zero = true, fill = \"0\", align = \"=\";\n\n    // Compute the prefix and suffix.\n    // For SI-prefix, the suffix is lazily computed.\n    var prefix = symbol === \"$\" ? currencyPrefix : symbol === \"#\" && /[boxX]/.test(type) ? \"0\" + type.toLowerCase() : \"\",\n        suffix = symbol === \"$\" ? currencySuffix : /[%p]/.test(type) ? percent : \"\";\n\n    // What format function should we use?\n    // Is this an integer type?\n    // Can this type generate exponential notation?\n    var formatType = _formatTypes_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"][type],\n        maybeSuffix = /[defgprs%]/.test(type);\n\n    // Set the default precision if not specified,\n    // or clamp the specified precision to the supported range.\n    // For significant precision, it must be in [1, 21].\n    // For fixed precision, it must be in [0, 20].\n    precision = precision === undefined ? 6\n        : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))\n        : Math.max(0, Math.min(20, precision));\n\n    function format(value) {\n      var valuePrefix = prefix,\n          valueSuffix = suffix,\n          i, n, c;\n\n      if (type === \"c\") {\n        valueSuffix = formatType(value) + valueSuffix;\n        value = \"\";\n      } else {\n        value = +value;\n\n        // Perform the initial formatting.\n        var valueNegative = value < 0;\n        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);\n\n        // Trim insignificant zeros.\n        if (trim) value = Object(_formatTrim_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(value);\n\n        // If a negative value rounds to zero during formatting, treat as positive.\n        if (valueNegative && +value === 0) valueNegative = false;\n\n        // Compute the prefix and suffix.\n        valuePrefix = (valueNegative ? (sign === \"(\" ? sign : minus) : sign === \"-\" || sign === \"(\" ? \"\" : sign) + valuePrefix;\n\n        valueSuffix = (type === \"s\" ? prefixes[8 + _formatPrefixAuto_js__WEBPACK_IMPORTED_MODULE_6__[\"prefixExponent\"] / 3] : \"\") + valueSuffix + (valueNegative && sign === \"(\" ? \")\" : \"\");\n\n        // Break the formatted value into the integer “value” part that can be\n        // grouped, and fractional or exponential “suffix” part that is not.\n        if (maybeSuffix) {\n          i = -1, n = value.length;\n          while (++i < n) {\n            if (c = value.charCodeAt(i), 48 > c || c > 57) {\n              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;\n              value = value.slice(0, i);\n              break;\n            }\n          }\n        }\n      }\n\n      // If the fill character is not \"0\", grouping is applied before padding.\n      if (comma && !zero) value = group(value, Infinity);\n\n      // Compute the padding.\n      var length = valuePrefix.length + value.length + valueSuffix.length,\n          padding = length < width ? new Array(width - length + 1).join(fill) : \"\";\n\n      // If the fill character is \"0\", grouping is applied after padding.\n      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = \"\";\n\n      // Reconstruct the final output based on the desired alignment.\n      switch (align) {\n        case \"<\": value = valuePrefix + value + valueSuffix + padding; break;\n        case \"=\": value = valuePrefix + padding + value + valueSuffix; break;\n        case \"^\": value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length); break;\n        default: value = padding + valuePrefix + value + valueSuffix; break;\n      }\n\n      return numerals(value);\n    }\n\n    format.toString = function() {\n      return specifier + \"\";\n    };\n\n    return format;\n  }\n\n  function formatPrefix(specifier, value) {\n    var f = newFormat((specifier = Object(_formatSpecifier_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(specifier), specifier.type = \"f\", specifier)),\n        e = Math.max(-8, Math.min(8, Math.floor(Object(_exponent_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(value) / 3))) * 3,\n        k = Math.pow(10, -e),\n        prefix = prefixes[8 + e / 3];\n    return function(value) {\n      return f(k * value) + prefix;\n    };\n  }\n\n  return {\n    format: newFormat,\n    formatPrefix: formatPrefix\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-format/src/locale.js?");

/***/ }),

/***/ "./node_modules/d3-format/src/precisionFixed.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-format/src/precisionFixed.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exponent.js */ \"./node_modules/d3-format/src/exponent.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(step) {\n  return Math.max(0, -Object(_exponent_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Math.abs(step)));\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-format/src/precisionFixed.js?");

/***/ }),

/***/ "./node_modules/d3-format/src/precisionPrefix.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-format/src/precisionPrefix.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exponent.js */ \"./node_modules/d3-format/src/exponent.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(step, value) {\n  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Object(_exponent_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(value) / 3))) * 3 - Object(_exponent_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Math.abs(step)));\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-format/src/precisionPrefix.js?");

/***/ }),

/***/ "./node_modules/d3-format/src/precisionRound.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-format/src/precisionRound.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _exponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exponent.js */ \"./node_modules/d3-format/src/exponent.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(step, max) {\n  step = Math.abs(step), max = Math.abs(max) - step;\n  return Math.max(0, Object(_exponent_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(max) - Object(_exponent_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(step)) + 1;\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-format/src/precisionRound.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/array.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/array.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./value.js */ \"./node_modules/d3-interpolate/src/value.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(a, b) {\n  var nb = b ? b.length : 0,\n      na = a ? Math.min(nb, a.length) : 0,\n      x = new Array(na),\n      c = new Array(nb),\n      i;\n\n  for (i = 0; i < na; ++i) x[i] = Object(_value_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(a[i], b[i]);\n  for (; i < nb; ++i) c[i] = b[i];\n\n  return function(t) {\n    for (i = 0; i < na; ++i) c[i] = x[i](t);\n    return c;\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-interpolate/src/array.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/basis.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/basis.js ***!
  \**************************************************/
/*! exports provided: basis, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"basis\", function() { return basis; });\nfunction basis(t1, v0, v1, v2, v3) {\n  var t2 = t1 * t1, t3 = t2 * t1;\n  return ((1 - 3 * t1 + 3 * t2 - t3) * v0\n      + (4 - 6 * t2 + 3 * t3) * v1\n      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2\n      + t3 * v3) / 6;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(values) {\n  var n = values.length - 1;\n  return function(t) {\n    var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),\n        v1 = values[i],\n        v2 = values[i + 1],\n        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,\n        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;\n    return basis((t - i / n) * n, v0, v1, v2, v3);\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-interpolate/src/basis.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/basisClosed.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-interpolate/src/basisClosed.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basis.js */ \"./node_modules/d3-interpolate/src/basis.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(values) {\n  var n = values.length;\n  return function(t) {\n    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),\n        v0 = values[(i + n - 1) % n],\n        v1 = values[i % n],\n        v2 = values[(i + 1) % n],\n        v3 = values[(i + 2) % n];\n    return Object(_basis_js__WEBPACK_IMPORTED_MODULE_0__[\"basis\"])((t - i / n) * n, v0, v1, v2, v3);\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-interpolate/src/basisClosed.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/color.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/color.js ***!
  \**************************************************/
/*! exports provided: hue, gamma, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hue\", function() { return hue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gamma\", function() { return gamma; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return nogamma; });\n/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ \"./node_modules/d3-interpolate/src/constant.js\");\n\n\nfunction linear(a, d) {\n  return function(t) {\n    return a + t * d;\n  };\n}\n\nfunction exponential(a, b, y) {\n  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {\n    return Math.pow(a + t * b, y);\n  };\n}\n\nfunction hue(a, b) {\n  var d = b - a;\n  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(isNaN(a) ? b : a);\n}\n\nfunction gamma(y) {\n  return (y = +y) === 1 ? nogamma : function(a, b) {\n    return b - a ? exponential(a, b, y) : Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(isNaN(a) ? b : a);\n  };\n}\n\nfunction nogamma(a, b) {\n  var d = b - a;\n  return d ? linear(a, d) : Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(isNaN(a) ? b : a);\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-interpolate/src/color.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/constant.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-interpolate/src/constant.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(x) {\n  return function() {\n    return x;\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-interpolate/src/constant.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/cubehelix.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-interpolate/src/cubehelix.js ***!
  \******************************************************/
/*! exports provided: default, cubehelixLong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cubehelixLong\", function() { return cubehelixLong; });\n/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ \"./node_modules/d3-color/src/index.js\");\n/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color.js */ \"./node_modules/d3-interpolate/src/color.js\");\n\n\n\nfunction cubehelix(hue) {\n  return (function cubehelixGamma(y) {\n    y = +y;\n\n    function cubehelix(start, end) {\n      var h = hue((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__[\"cubehelix\"])(start)).h, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__[\"cubehelix\"])(end)).h),\n          s = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(start.s, end.s),\n          l = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(start.l, end.l),\n          opacity = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(start.opacity, end.opacity);\n      return function(t) {\n        start.h = h(t);\n        start.s = s(t);\n        start.l = l(Math.pow(t, y));\n        start.opacity = opacity(t);\n        return start + \"\";\n      };\n    }\n\n    cubehelix.gamma = cubehelixGamma;\n\n    return cubehelix;\n  })(1);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (cubehelix(_color_js__WEBPACK_IMPORTED_MODULE_1__[\"hue\"]));\nvar cubehelixLong = cubehelix(_color_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n\n//# sourceURL=webpack:///./node_modules/d3-interpolate/src/cubehelix.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/date.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-interpolate/src/date.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(a, b) {\n  var d = new Date;\n  return a = +a, b -= a, function(t) {\n    return d.setTime(a + b * t), d;\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-interpolate/src/date.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/discrete.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-interpolate/src/discrete.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(range) {\n  var n = range.length;\n  return function(t) {\n    return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-interpolate/src/discrete.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/hcl.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/hcl.js ***!
  \************************************************/
/*! exports provided: default, hclLong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hclLong\", function() { return hclLong; });\n/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ \"./node_modules/d3-color/src/index.js\");\n/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color.js */ \"./node_modules/d3-interpolate/src/color.js\");\n\n\n\nfunction hcl(hue) {\n  return function(start, end) {\n    var h = hue((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__[\"hcl\"])(start)).h, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__[\"hcl\"])(end)).h),\n        c = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(start.c, end.c),\n        l = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(start.l, end.l),\n        opacity = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(start.opacity, end.opacity);\n    return function(t) {\n      start.h = h(t);\n      start.c = c(t);\n      start.l = l(t);\n      start.opacity = opacity(t);\n      return start + \"\";\n    };\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (hcl(_color_js__WEBPACK_IMPORTED_MODULE_1__[\"hue\"]));\nvar hclLong = hcl(_color_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n\n//# sourceURL=webpack:///./node_modules/d3-interpolate/src/hcl.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/hsl.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/hsl.js ***!
  \************************************************/
/*! exports provided: default, hslLong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hslLong\", function() { return hslLong; });\n/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ \"./node_modules/d3-color/src/index.js\");\n/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color.js */ \"./node_modules/d3-interpolate/src/color.js\");\n\n\n\nfunction hsl(hue) {\n  return function(start, end) {\n    var h = hue((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__[\"hsl\"])(start)).h, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__[\"hsl\"])(end)).h),\n        s = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(start.s, end.s),\n        l = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(start.l, end.l),\n        opacity = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(start.opacity, end.opacity);\n    return function(t) {\n      start.h = h(t);\n      start.s = s(t);\n      start.l = l(t);\n      start.opacity = opacity(t);\n      return start + \"\";\n    };\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (hsl(_color_js__WEBPACK_IMPORTED_MODULE_1__[\"hue\"]));\nvar hslLong = hsl(_color_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n\n//# sourceURL=webpack:///./node_modules/d3-interpolate/src/hsl.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/hue.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/hue.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color.js */ \"./node_modules/d3-interpolate/src/color.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(a, b) {\n  var i = Object(_color_js__WEBPACK_IMPORTED_MODULE_0__[\"hue\"])(+a, +b);\n  return function(t) {\n    var x = i(t);\n    return x - 360 * Math.floor(x / 360);\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-interpolate/src/hue.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/index.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/index.js ***!
  \**************************************************/
/*! exports provided: interpolate, interpolateArray, interpolateBasis, interpolateBasisClosed, interpolateDate, interpolateDiscrete, interpolateHue, interpolateNumber, interpolateObject, interpolateRound, interpolateString, interpolateTransformCss, interpolateTransformSvg, interpolateZoom, interpolateRgb, interpolateRgbBasis, interpolateRgbBasisClosed, interpolateHsl, interpolateHslLong, interpolateLab, interpolateHcl, interpolateHclLong, interpolateCubehelix, interpolateCubehelixLong, piecewise, quantize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./value.js */ \"./node_modules/d3-interpolate/src/value.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"interpolate\", function() { return _value_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array.js */ \"./node_modules/d3-interpolate/src/array.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"interpolateArray\", function() { return _array_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basis.js */ \"./node_modules/d3-interpolate/src/basis.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"interpolateBasis\", function() { return _basis_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _basisClosed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basisClosed.js */ \"./node_modules/d3-interpolate/src/basisClosed.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"interpolateBasisClosed\", function() { return _basisClosed_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./date.js */ \"./node_modules/d3-interpolate/src/date.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"interpolateDate\", function() { return _date_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _discrete_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./discrete.js */ \"./node_modules/d3-interpolate/src/discrete.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"interpolateDiscrete\", function() { return _discrete_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n/* harmony import */ var _hue_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hue.js */ \"./node_modules/d3-interpolate/src/hue.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"interpolateHue\", function() { return _hue_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; });\n\n/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./number.js */ \"./node_modules/d3-interpolate/src/number.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"interpolateNumber\", function() { return _number_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]; });\n\n/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./object.js */ \"./node_modules/d3-interpolate/src/object.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"interpolateObject\", function() { return _object_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]; });\n\n/* harmony import */ var _round_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./round.js */ \"./node_modules/d3-interpolate/src/round.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"interpolateRound\", function() { return _round_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"]; });\n\n/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./string.js */ \"./node_modules/d3-interpolate/src/string.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"interpolateString\", function() { return _string_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"]; });\n\n/* harmony import */ var _transform_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./transform/index.js */ \"./node_modules/d3-interpolate/src/transform/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"interpolateTransformCss\", function() { return _transform_index_js__WEBPACK_IMPORTED_MODULE_11__[\"interpolateTransformCss\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"interpolateTransformSvg\", function() { return _transform_index_js__WEBPACK_IMPORTED_MODULE_11__[\"interpolateTransformSvg\"]; });\n\n/* harmony import */ var _zoom_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./zoom.js */ \"./node_modules/d3-interpolate/src/zoom.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"interpolateZoom\", function() { return _zoom_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"]; });\n\n/* harmony import */ var _rgb_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./rgb.js */ \"./node_modules/d3-interpolate/src/rgb.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"interpolateRgb\", function() { return _rgb_js__WEBPACK_IMPORTED_MODULE_13__[\"default\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"interpolateRgbBasis\", function() { return _rgb_js__WEBPACK_IMPORTED_MODULE_13__[\"rgbBasis\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"interpolateRgbBasisClosed\", function() { return _rgb_js__WEBPACK_IMPORTED_MODULE_13__[\"rgbBasisClosed\"]; });\n\n/* harmony import */ var _hsl_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./hsl.js */ \"./node_modules/d3-interpolate/src/hsl.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"interpolateHsl\", function() { return _hsl_js__WEBPACK_IMPORTED_MODULE_14__[\"default\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"interpolateHslLong\", function() { return _hsl_js__WEBPACK_IMPORTED_MODULE_14__[\"hslLong\"]; });\n\n/* harmony import */ var _lab_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lab.js */ \"./node_modules/d3-interpolate/src/lab.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"interpolateLab\", function() { return _lab_js__WEBPACK_IMPORTED_MODULE_15__[\"default\"]; });\n\n/* harmony import */ var _hcl_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./hcl.js */ \"./node_modules/d3-interpolate/src/hcl.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"interpolateHcl\", function() { return _hcl_js__WEBPACK_IMPORTED_MODULE_16__[\"default\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"interpolateHclLong\", function() { return _hcl_js__WEBPACK_IMPORTED_MODULE_16__[\"hclLong\"]; });\n\n/* harmony import */ var _cubehelix_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cubehelix.js */ \"./node_modules/d3-interpolate/src/cubehelix.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"interpolateCubehelix\", function() { return _cubehelix_js__WEBPACK_IMPORTED_MODULE_17__[\"default\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"interpolateCubehelixLong\", function() { return _cubehelix_js__WEBPACK_IMPORTED_MODULE_17__[\"cubehelixLong\"]; });\n\n/* harmony import */ var _piecewise_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./piecewise.js */ \"./node_modules/d3-interpolate/src/piecewise.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"piecewise\", function() { return _piecewise_js__WEBPACK_IMPORTED_MODULE_18__[\"default\"]; });\n\n/* harmony import */ var _quantize_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./quantize.js */ \"./node_modules/d3-interpolate/src/quantize.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"quantize\", function() { return _quantize_js__WEBPACK_IMPORTED_MODULE_19__[\"default\"]; });\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./node_modules/d3-interpolate/src/index.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/lab.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/lab.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return lab; });\n/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ \"./node_modules/d3-color/src/index.js\");\n/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color.js */ \"./node_modules/d3-interpolate/src/color.js\");\n\n\n\nfunction lab(start, end) {\n  var l = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__[\"lab\"])(start)).l, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__[\"lab\"])(end)).l),\n      a = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(start.a, end.a),\n      b = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(start.b, end.b),\n      opacity = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(start.opacity, end.opacity);\n  return function(t) {\n    start.l = l(t);\n    start.a = a(t);\n    start.b = b(t);\n    start.opacity = opacity(t);\n    return start + \"\";\n  };\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-interpolate/src/lab.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/number.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-interpolate/src/number.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(a, b) {\n  return a = +a, b -= a, function(t) {\n    return a + b * t;\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-interpolate/src/number.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/object.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-interpolate/src/object.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./value.js */ \"./node_modules/d3-interpolate/src/value.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(a, b) {\n  var i = {},\n      c = {},\n      k;\n\n  if (a === null || typeof a !== \"object\") a = {};\n  if (b === null || typeof b !== \"object\") b = {};\n\n  for (k in b) {\n    if (k in a) {\n      i[k] = Object(_value_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(a[k], b[k]);\n    } else {\n      c[k] = b[k];\n    }\n  }\n\n  return function(t) {\n    for (k in i) c[k] = i[k](t);\n    return c;\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-interpolate/src/object.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/piecewise.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-interpolate/src/piecewise.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return piecewise; });\nfunction piecewise(interpolate, values) {\n  var i = 0, n = values.length - 1, v = values[0], I = new Array(n < 0 ? 0 : n);\n  while (i < n) I[i] = interpolate(v, v = values[++i]);\n  return function(t) {\n    var i = Math.max(0, Math.min(n - 1, Math.floor(t *= n)));\n    return I[i](t - i);\n  };\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-interpolate/src/piecewise.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/quantize.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-interpolate/src/quantize.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(interpolator, n) {\n  var samples = new Array(n);\n  for (var i = 0; i < n; ++i) samples[i] = interpolator(i / (n - 1));\n  return samples;\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-interpolate/src/quantize.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/rgb.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/rgb.js ***!
  \************************************************/
/*! exports provided: default, rgbBasis, rgbBasisClosed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rgbBasis\", function() { return rgbBasis; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rgbBasisClosed\", function() { return rgbBasisClosed; });\n/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ \"./node_modules/d3-color/src/index.js\");\n/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basis.js */ \"./node_modules/d3-interpolate/src/basis.js\");\n/* harmony import */ var _basisClosed_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basisClosed.js */ \"./node_modules/d3-interpolate/src/basisClosed.js\");\n/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./color.js */ \"./node_modules/d3-interpolate/src/color.js\");\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((function rgbGamma(y) {\n  var color = Object(_color_js__WEBPACK_IMPORTED_MODULE_3__[\"gamma\"])(y);\n\n  function rgb(start, end) {\n    var r = color((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__[\"rgb\"])(start)).r, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__[\"rgb\"])(end)).r),\n        g = color(start.g, end.g),\n        b = color(start.b, end.b),\n        opacity = Object(_color_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(start.opacity, end.opacity);\n    return function(t) {\n      start.r = r(t);\n      start.g = g(t);\n      start.b = b(t);\n      start.opacity = opacity(t);\n      return start + \"\";\n    };\n  }\n\n  rgb.gamma = rgbGamma;\n\n  return rgb;\n})(1));\n\nfunction rgbSpline(spline) {\n  return function(colors) {\n    var n = colors.length,\n        r = new Array(n),\n        g = new Array(n),\n        b = new Array(n),\n        i, color;\n    for (i = 0; i < n; ++i) {\n      color = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__[\"rgb\"])(colors[i]);\n      r[i] = color.r || 0;\n      g[i] = color.g || 0;\n      b[i] = color.b || 0;\n    }\n    r = spline(r);\n    g = spline(g);\n    b = spline(b);\n    color.opacity = 1;\n    return function(t) {\n      color.r = r(t);\n      color.g = g(t);\n      color.b = b(t);\n      return color + \"\";\n    };\n  };\n}\n\nvar rgbBasis = rgbSpline(_basis_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nvar rgbBasisClosed = rgbSpline(_basisClosed_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n\n//# sourceURL=webpack:///./node_modules/d3-interpolate/src/rgb.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/round.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/round.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(a, b) {\n  return a = +a, b -= a, function(t) {\n    return Math.round(a + b * t);\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-interpolate/src/round.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/string.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-interpolate/src/string.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number.js */ \"./node_modules/d3-interpolate/src/number.js\");\n\n\nvar reA = /[-+]?(?:\\d+\\.?\\d*|\\.?\\d+)(?:[eE][-+]?\\d+)?/g,\n    reB = new RegExp(reA.source, \"g\");\n\nfunction zero(b) {\n  return function() {\n    return b;\n  };\n}\n\nfunction one(b) {\n  return function(t) {\n    return b(t) + \"\";\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(a, b) {\n  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b\n      am, // current match in a\n      bm, // current match in b\n      bs, // string preceding current number in b, if any\n      i = -1, // index in s\n      s = [], // string constants and placeholders\n      q = []; // number interpolators\n\n  // Coerce inputs to strings.\n  a = a + \"\", b = b + \"\";\n\n  // Interpolate pairs of numbers in a & b.\n  while ((am = reA.exec(a))\n      && (bm = reB.exec(b))) {\n    if ((bs = bm.index) > bi) { // a string precedes the next number in b\n      bs = b.slice(bi, bs);\n      if (s[i]) s[i] += bs; // coalesce with previous string\n      else s[++i] = bs;\n    }\n    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match\n      if (s[i]) s[i] += bm; // coalesce with previous string\n      else s[++i] = bm;\n    } else { // interpolate non-matching numbers\n      s[++i] = null;\n      q.push({i: i, x: Object(_number_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(am, bm)});\n    }\n    bi = reB.lastIndex;\n  }\n\n  // Add remains of b.\n  if (bi < b.length) {\n    bs = b.slice(bi);\n    if (s[i]) s[i] += bs; // coalesce with previous string\n    else s[++i] = bs;\n  }\n\n  // Special optimization for only a single match.\n  // Otherwise, interpolate each of the numbers and rejoin the string.\n  return s.length < 2 ? (q[0]\n      ? one(q[0].x)\n      : zero(b))\n      : (b = q.length, function(t) {\n          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);\n          return s.join(\"\");\n        });\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-interpolate/src/string.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/transform/decompose.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-interpolate/src/transform/decompose.js ***!
  \****************************************************************/
/*! exports provided: identity, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"identity\", function() { return identity; });\nvar degrees = 180 / Math.PI;\n\nvar identity = {\n  translateX: 0,\n  translateY: 0,\n  rotate: 0,\n  skewX: 0,\n  scaleX: 1,\n  scaleY: 1\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(a, b, c, d, e, f) {\n  var scaleX, scaleY, skewX;\n  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;\n  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;\n  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;\n  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;\n  return {\n    translateX: e,\n    translateY: f,\n    rotate: Math.atan2(b, a) * degrees,\n    skewX: Math.atan(skewX) * degrees,\n    scaleX: scaleX,\n    scaleY: scaleY\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-interpolate/src/transform/decompose.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/transform/index.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-interpolate/src/transform/index.js ***!
  \************************************************************/
/*! exports provided: interpolateTransformCss, interpolateTransformSvg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"interpolateTransformCss\", function() { return interpolateTransformCss; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"interpolateTransformSvg\", function() { return interpolateTransformSvg; });\n/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../number.js */ \"./node_modules/d3-interpolate/src/number.js\");\n/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse.js */ \"./node_modules/d3-interpolate/src/transform/parse.js\");\n\n\n\nfunction interpolateTransform(parse, pxComma, pxParen, degParen) {\n\n  function pop(s) {\n    return s.length ? s.pop() + \" \" : \"\";\n  }\n\n  function translate(xa, ya, xb, yb, s, q) {\n    if (xa !== xb || ya !== yb) {\n      var i = s.push(\"translate(\", null, pxComma, null, pxParen);\n      q.push({i: i - 4, x: Object(_number_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(xa, xb)}, {i: i - 2, x: Object(_number_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(ya, yb)});\n    } else if (xb || yb) {\n      s.push(\"translate(\" + xb + pxComma + yb + pxParen);\n    }\n  }\n\n  function rotate(a, b, s, q) {\n    if (a !== b) {\n      if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path\n      q.push({i: s.push(pop(s) + \"rotate(\", null, degParen) - 2, x: Object(_number_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(a, b)});\n    } else if (b) {\n      s.push(pop(s) + \"rotate(\" + b + degParen);\n    }\n  }\n\n  function skewX(a, b, s, q) {\n    if (a !== b) {\n      q.push({i: s.push(pop(s) + \"skewX(\", null, degParen) - 2, x: Object(_number_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(a, b)});\n    } else if (b) {\n      s.push(pop(s) + \"skewX(\" + b + degParen);\n    }\n  }\n\n  function scale(xa, ya, xb, yb, s, q) {\n    if (xa !== xb || ya !== yb) {\n      var i = s.push(pop(s) + \"scale(\", null, \",\", null, \")\");\n      q.push({i: i - 4, x: Object(_number_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(xa, xb)}, {i: i - 2, x: Object(_number_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(ya, yb)});\n    } else if (xb !== 1 || yb !== 1) {\n      s.push(pop(s) + \"scale(\" + xb + \",\" + yb + \")\");\n    }\n  }\n\n  return function(a, b) {\n    var s = [], // string constants and placeholders\n        q = []; // number interpolators\n    a = parse(a), b = parse(b);\n    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);\n    rotate(a.rotate, b.rotate, s, q);\n    skewX(a.skewX, b.skewX, s, q);\n    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);\n    a = b = null; // gc\n    return function(t) {\n      var i = -1, n = q.length, o;\n      while (++i < n) s[(o = q[i]).i] = o.x(t);\n      return s.join(\"\");\n    };\n  };\n}\n\nvar interpolateTransformCss = interpolateTransform(_parse_js__WEBPACK_IMPORTED_MODULE_1__[\"parseCss\"], \"px, \", \"px)\", \"deg)\");\nvar interpolateTransformSvg = interpolateTransform(_parse_js__WEBPACK_IMPORTED_MODULE_1__[\"parseSvg\"], \", \", \")\", \")\");\n\n\n//# sourceURL=webpack:///./node_modules/d3-interpolate/src/transform/index.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/transform/parse.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-interpolate/src/transform/parse.js ***!
  \************************************************************/
/*! exports provided: parseCss, parseSvg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseCss\", function() { return parseCss; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseSvg\", function() { return parseSvg; });\n/* harmony import */ var _decompose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decompose.js */ \"./node_modules/d3-interpolate/src/transform/decompose.js\");\n\n\nvar cssNode,\n    cssRoot,\n    cssView,\n    svgNode;\n\nfunction parseCss(value) {\n  if (value === \"none\") return _decompose_js__WEBPACK_IMPORTED_MODULE_0__[\"identity\"];\n  if (!cssNode) cssNode = document.createElement(\"DIV\"), cssRoot = document.documentElement, cssView = document.defaultView;\n  cssNode.style.transform = value;\n  value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue(\"transform\");\n  cssRoot.removeChild(cssNode);\n  value = value.slice(7, -1).split(\",\");\n  return Object(_decompose_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);\n}\n\nfunction parseSvg(value) {\n  if (value == null) return _decompose_js__WEBPACK_IMPORTED_MODULE_0__[\"identity\"];\n  if (!svgNode) svgNode = document.createElementNS(\"http://www.w3.org/2000/svg\", \"g\");\n  svgNode.setAttribute(\"transform\", value);\n  if (!(value = svgNode.transform.baseVal.consolidate())) return _decompose_js__WEBPACK_IMPORTED_MODULE_0__[\"identity\"];\n  value = value.matrix;\n  return Object(_decompose_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(value.a, value.b, value.c, value.d, value.e, value.f);\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-interpolate/src/transform/parse.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/value.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/value.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ \"./node_modules/d3-color/src/index.js\");\n/* harmony import */ var _rgb_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rgb.js */ \"./node_modules/d3-interpolate/src/rgb.js\");\n/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./array.js */ \"./node_modules/d3-interpolate/src/array.js\");\n/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date.js */ \"./node_modules/d3-interpolate/src/date.js\");\n/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./number.js */ \"./node_modules/d3-interpolate/src/number.js\");\n/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./object.js */ \"./node_modules/d3-interpolate/src/object.js\");\n/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./string.js */ \"./node_modules/d3-interpolate/src/string.js\");\n/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constant.js */ \"./node_modules/d3-interpolate/src/constant.js\");\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(a, b) {\n  var t = typeof b, c;\n  return b == null || t === \"boolean\" ? Object(_constant_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(b)\n      : (t === \"number\" ? _number_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n      : t === \"string\" ? ((c = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__[\"color\"])(b)) ? (b = c, _rgb_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) : _string_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])\n      : b instanceof d3_color__WEBPACK_IMPORTED_MODULE_0__[\"color\"] ? _rgb_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n      : b instanceof Date ? _date_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n      : Array.isArray(b) ? _array_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n      : typeof b.valueOf !== \"function\" && typeof b.toString !== \"function\" || isNaN(b) ? _object_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n      : _number_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(a, b);\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-interpolate/src/value.js?");

/***/ }),

/***/ "./node_modules/d3-interpolate/src/zoom.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-interpolate/src/zoom.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar rho = Math.SQRT2,\n    rho2 = 2,\n    rho4 = 4,\n    epsilon2 = 1e-12;\n\nfunction cosh(x) {\n  return ((x = Math.exp(x)) + 1 / x) / 2;\n}\n\nfunction sinh(x) {\n  return ((x = Math.exp(x)) - 1 / x) / 2;\n}\n\nfunction tanh(x) {\n  return ((x = Math.exp(2 * x)) - 1) / (x + 1);\n}\n\n// p0 = [ux0, uy0, w0]\n// p1 = [ux1, uy1, w1]\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(p0, p1) {\n  var ux0 = p0[0], uy0 = p0[1], w0 = p0[2],\n      ux1 = p1[0], uy1 = p1[1], w1 = p1[2],\n      dx = ux1 - ux0,\n      dy = uy1 - uy0,\n      d2 = dx * dx + dy * dy,\n      i,\n      S;\n\n  // Special case for u0 ≅ u1.\n  if (d2 < epsilon2) {\n    S = Math.log(w1 / w0) / rho;\n    i = function(t) {\n      return [\n        ux0 + t * dx,\n        uy0 + t * dy,\n        w0 * Math.exp(rho * t * S)\n      ];\n    }\n  }\n\n  // General case.\n  else {\n    var d1 = Math.sqrt(d2),\n        b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),\n        b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),\n        r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),\n        r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);\n    S = (r1 - r0) / rho;\n    i = function(t) {\n      var s = t * S,\n          coshr0 = cosh(r0),\n          u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));\n      return [\n        ux0 + u * dx,\n        uy0 + u * dy,\n        w0 * coshr0 / cosh(rho * s + r0)\n      ];\n    }\n  }\n\n  i.duration = S * 1000;\n\n  return i;\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-interpolate/src/zoom.js?");

/***/ }),

/***/ "./node_modules/d3-scale/src/band.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-scale/src/band.js ***!
  \*******************************************/
/*! exports provided: default, point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return band; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"point\", function() { return point; });\n/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ \"./node_modules/d3-array/src/index.js\");\n/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init.js */ \"./node_modules/d3-scale/src/init.js\");\n/* harmony import */ var _ordinal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ordinal.js */ \"./node_modules/d3-scale/src/ordinal.js\");\n\n\n\n\nfunction band() {\n  var scale = Object(_ordinal_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])().unknown(undefined),\n      domain = scale.domain,\n      ordinalRange = scale.range,\n      r0 = 0,\n      r1 = 1,\n      step,\n      bandwidth,\n      round = false,\n      paddingInner = 0,\n      paddingOuter = 0,\n      align = 0.5;\n\n  delete scale.unknown;\n\n  function rescale() {\n    var n = domain().length,\n        reverse = r1 < r0,\n        start = reverse ? r1 : r0,\n        stop = reverse ? r0 : r1;\n    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);\n    if (round) step = Math.floor(step);\n    start += (stop - start - step * (n - paddingInner)) * align;\n    bandwidth = step * (1 - paddingInner);\n    if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);\n    var values = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__[\"range\"])(n).map(function(i) { return start + step * i; });\n    return ordinalRange(reverse ? values.reverse() : values);\n  }\n\n  scale.domain = function(_) {\n    return arguments.length ? (domain(_), rescale()) : domain();\n  };\n\n  scale.range = function(_) {\n    return arguments.length ? ([r0, r1] = _, r0 = +r0, r1 = +r1, rescale()) : [r0, r1];\n  };\n\n  scale.rangeRound = function(_) {\n    return [r0, r1] = _, r0 = +r0, r1 = +r1, round = true, rescale();\n  };\n\n  scale.bandwidth = function() {\n    return bandwidth;\n  };\n\n  scale.step = function() {\n    return step;\n  };\n\n  scale.round = function(_) {\n    return arguments.length ? (round = !!_, rescale()) : round;\n  };\n\n  scale.padding = function(_) {\n    return arguments.length ? (paddingInner = Math.min(1, paddingOuter = +_), rescale()) : paddingInner;\n  };\n\n  scale.paddingInner = function(_) {\n    return arguments.length ? (paddingInner = Math.min(1, _), rescale()) : paddingInner;\n  };\n\n  scale.paddingOuter = function(_) {\n    return arguments.length ? (paddingOuter = +_, rescale()) : paddingOuter;\n  };\n\n  scale.align = function(_) {\n    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;\n  };\n\n  scale.copy = function() {\n    return band(domain(), [r0, r1])\n        .round(round)\n        .paddingInner(paddingInner)\n        .paddingOuter(paddingOuter)\n        .align(align);\n  };\n\n  return _init_js__WEBPACK_IMPORTED_MODULE_1__[\"initRange\"].apply(rescale(), arguments);\n}\n\nfunction pointish(scale) {\n  var copy = scale.copy;\n\n  scale.padding = scale.paddingOuter;\n  delete scale.paddingInner;\n  delete scale.paddingOuter;\n\n  scale.copy = function() {\n    return pointish(copy());\n  };\n\n  return scale;\n}\n\nfunction point() {\n  return pointish(band.apply(null, arguments).paddingInner(1));\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-scale/src/band.js?");

/***/ }),

/***/ "./node_modules/d3-scale/src/constant.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-scale/src/constant.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(x) {\n  return function() {\n    return x;\n  };\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-scale/src/constant.js?");

/***/ }),

/***/ "./node_modules/d3-scale/src/continuous.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-scale/src/continuous.js ***!
  \*************************************************/
/*! exports provided: identity, copy, transformer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"identity\", function() { return identity; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"copy\", function() { return copy; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"transformer\", function() { return transformer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return continuous; });\n/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ \"./node_modules/d3-array/src/index.js\");\n/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-interpolate */ \"./node_modules/d3-interpolate/src/index.js\");\n/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant.js */ \"./node_modules/d3-scale/src/constant.js\");\n/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./number.js */ \"./node_modules/d3-scale/src/number.js\");\n\n\n\n\n\nvar unit = [0, 1];\n\nfunction identity(x) {\n  return x;\n}\n\nfunction normalize(a, b) {\n  return (b -= (a = +a))\n      ? function(x) { return (x - a) / b; }\n      : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(isNaN(b) ? NaN : 0.5);\n}\n\nfunction clamper(a, b) {\n  var t;\n  if (a > b) t = a, a = b, b = t;\n  return function(x) { return Math.max(a, Math.min(b, x)); };\n}\n\n// normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].\n// interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].\nfunction bimap(domain, range, interpolate) {\n  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];\n  if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate(r1, r0);\n  else d0 = normalize(d0, d1), r0 = interpolate(r0, r1);\n  return function(x) { return r0(d0(x)); };\n}\n\nfunction polymap(domain, range, interpolate) {\n  var j = Math.min(domain.length, range.length) - 1,\n      d = new Array(j),\n      r = new Array(j),\n      i = -1;\n\n  // Reverse descending domains.\n  if (domain[j] < domain[0]) {\n    domain = domain.slice().reverse();\n    range = range.slice().reverse();\n  }\n\n  while (++i < j) {\n    d[i] = normalize(domain[i], domain[i + 1]);\n    r[i] = interpolate(range[i], range[i + 1]);\n  }\n\n  return function(x) {\n    var i = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__[\"bisect\"])(domain, x, 1, j) - 1;\n    return r[i](d[i](x));\n  };\n}\n\nfunction copy(source, target) {\n  return target\n      .domain(source.domain())\n      .range(source.range())\n      .interpolate(source.interpolate())\n      .clamp(source.clamp())\n      .unknown(source.unknown());\n}\n\nfunction transformer() {\n  var domain = unit,\n      range = unit,\n      interpolate = d3_interpolate__WEBPACK_IMPORTED_MODULE_1__[\"interpolate\"],\n      transform,\n      untransform,\n      unknown,\n      clamp = identity,\n      piecewise,\n      output,\n      input;\n\n  function rescale() {\n    var n = Math.min(domain.length, range.length);\n    if (clamp !== identity) clamp = clamper(domain[0], domain[n - 1]);\n    piecewise = n > 2 ? polymap : bimap;\n    output = input = null;\n    return scale;\n  }\n\n  function scale(x) {\n    return isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate)))(transform(clamp(x)));\n  }\n\n  scale.invert = function(y) {\n    return clamp(untransform((input || (input = piecewise(range, domain.map(transform), d3_interpolate__WEBPACK_IMPORTED_MODULE_1__[\"interpolateNumber\"])))(y)));\n  };\n\n  scale.domain = function(_) {\n    return arguments.length ? (domain = Array.from(_, _number_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]), rescale()) : domain.slice();\n  };\n\n  scale.range = function(_) {\n    return arguments.length ? (range = Array.from(_), rescale()) : range.slice();\n  };\n\n  scale.rangeRound = function(_) {\n    return range = Array.from(_), interpolate = d3_interpolate__WEBPACK_IMPORTED_MODULE_1__[\"interpolateRound\"], rescale();\n  };\n\n  scale.clamp = function(_) {\n    return arguments.length ? (clamp = _ ? true : identity, rescale()) : clamp !== identity;\n  };\n\n  scale.interpolate = function(_) {\n    return arguments.length ? (interpolate = _, rescale()) : interpolate;\n  };\n\n  scale.unknown = function(_) {\n    return arguments.length ? (unknown = _, scale) : unknown;\n  };\n\n  return function(t, u) {\n    transform = t, untransform = u;\n    return rescale();\n  };\n}\n\nfunction continuous() {\n  return transformer()(identity, identity);\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-scale/src/continuous.js?");

/***/ }),

/***/ "./node_modules/d3-scale/src/diverging.js":
/*!************************************************!*\
  !*** ./node_modules/d3-scale/src/diverging.js ***!
  \************************************************/
/*! exports provided: default, divergingLog, divergingSymlog, divergingPow, divergingSqrt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return diverging; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"divergingLog\", function() { return divergingLog; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"divergingSymlog\", function() { return divergingSymlog; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"divergingPow\", function() { return divergingPow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"divergingSqrt\", function() { return divergingSqrt; });\n/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-interpolate */ \"./node_modules/d3-interpolate/src/index.js\");\n/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./continuous.js */ \"./node_modules/d3-scale/src/continuous.js\");\n/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init.js */ \"./node_modules/d3-scale/src/init.js\");\n/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./linear.js */ \"./node_modules/d3-scale/src/linear.js\");\n/* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./log.js */ \"./node_modules/d3-scale/src/log.js\");\n/* harmony import */ var _sequential_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sequential.js */ \"./node_modules/d3-scale/src/sequential.js\");\n/* harmony import */ var _symlog_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./symlog.js */ \"./node_modules/d3-scale/src/symlog.js\");\n/* harmony import */ var _pow_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pow.js */ \"./node_modules/d3-scale/src/pow.js\");\n\n\n\n\n\n\n\n\n\nfunction transformer() {\n  var x0 = 0,\n      x1 = 0.5,\n      x2 = 1,\n      s = 1,\n      t0,\n      t1,\n      t2,\n      k10,\n      k21,\n      interpolator = _continuous_js__WEBPACK_IMPORTED_MODULE_1__[\"identity\"],\n      transform,\n      clamp = false,\n      unknown;\n\n  function scale(x) {\n    return isNaN(x = +x) ? unknown : (x = 0.5 + ((x = +transform(x)) - t1) * (s * x < s * t1 ? k10 : k21), interpolator(clamp ? Math.max(0, Math.min(1, x)) : x));\n  }\n\n  scale.domain = function(_) {\n    return arguments.length ? ([x0, x1, x2] = _, t0 = transform(x0 = +x0), t1 = transform(x1 = +x1), t2 = transform(x2 = +x2), k10 = t0 === t1 ? 0 : 0.5 / (t1 - t0), k21 = t1 === t2 ? 0 : 0.5 / (t2 - t1), s = t1 < t0 ? -1 : 1, scale) : [x0, x1, x2];\n  };\n\n  scale.clamp = function(_) {\n    return arguments.length ? (clamp = !!_, scale) : clamp;\n  };\n\n  scale.interpolator = function(_) {\n    return arguments.length ? (interpolator = _, scale) : interpolator;\n  };\n\n  function range(interpolate) {\n    return function(_) {\n      var r0, r1, r2;\n      return arguments.length ? ([r0, r1, r2] = _, interpolator = Object(d3_interpolate__WEBPACK_IMPORTED_MODULE_0__[\"piecewise\"])(interpolate, [r0, r1, r2]), scale) : [interpolator(0), interpolator(0.5), interpolator(1)];\n    };\n  }\n\n  scale.range = range(d3_interpolate__WEBPACK_IMPORTED_MODULE_0__[\"interpolate\"]);\n\n  scale.rangeRound = range(d3_interpolate__WEBPACK_IMPORTED_MODULE_0__[\"interpolateRound\"]);\n\n  scale.unknown = function(_) {\n    return arguments.length ? (unknown = _, scale) : unknown;\n  };\n\n  return function(t) {\n    transform = t, t0 = t(x0), t1 = t(x1), t2 = t(x2), k10 = t0 === t1 ? 0 : 0.5 / (t1 - t0), k21 = t1 === t2 ? 0 : 0.5 / (t2 - t1), s = t1 < t0 ? -1 : 1;\n    return scale;\n  };\n}\n\nfunction diverging() {\n  var scale = Object(_linear_js__WEBPACK_IMPORTED_MODULE_3__[\"linearish\"])(transformer()(_continuous_js__WEBPACK_IMPORTED_MODULE_1__[\"identity\"]));\n\n  scale.copy = function() {\n    return Object(_sequential_js__WEBPACK_IMPORTED_MODULE_5__[\"copy\"])(scale, diverging());\n  };\n\n  return _init_js__WEBPACK_IMPORTED_MODULE_2__[\"initInterpolator\"].apply(scale, arguments);\n}\n\nfunction divergingLog() {\n  var scale = Object(_log_js__WEBPACK_IMPORTED_MODULE_4__[\"loggish\"])(transformer()).domain([0.1, 1, 10]);\n\n  scale.copy = function() {\n    return Object(_sequential_js__WEBPACK_IMPORTED_MODULE_5__[\"copy\"])(scale, divergingLog()).base(scale.base());\n  };\n\n  return _init_js__WEBPACK_IMPORTED_MODULE_2__[\"initInterpolator\"].apply(scale, arguments);\n}\n\nfunction divergingSymlog() {\n  var scale = Object(_symlog_js__WEBPACK_IMPORTED_MODULE_6__[\"symlogish\"])(transformer());\n\n  scale.copy = function() {\n    return Object(_sequential_js__WEBPACK_IMPORTED_MODULE_5__[\"copy\"])(scale, divergingSymlog()).constant(scale.constant());\n  };\n\n  return _init_js__WEBPACK_IMPORTED_MODULE_2__[\"initInterpolator\"].apply(scale, arguments);\n}\n\nfunction divergingPow() {\n  var scale = Object(_pow_js__WEBPACK_IMPORTED_MODULE_7__[\"powish\"])(transformer());\n\n  scale.copy = function() {\n    return Object(_sequential_js__WEBPACK_IMPORTED_MODULE_5__[\"copy\"])(scale, divergingPow()).exponent(scale.exponent());\n  };\n\n  return _init_js__WEBPACK_IMPORTED_MODULE_2__[\"initInterpolator\"].apply(scale, arguments);\n}\n\nfunction divergingSqrt() {\n  return divergingPow.apply(null, arguments).exponent(0.5);\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-scale/src/diverging.js?");

/***/ }),

/***/ "./node_modules/d3-scale/src/identity.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-scale/src/identity.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return identity; });\n/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linear.js */ \"./node_modules/d3-scale/src/linear.js\");\n/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./number.js */ \"./node_modules/d3-scale/src/number.js\");\n\n\n\nfunction identity(domain) {\n  var unknown;\n\n  function scale(x) {\n    return isNaN(x = +x) ? unknown : x;\n  }\n\n  scale.invert = scale;\n\n  scale.domain = scale.range = function(_) {\n    return arguments.length ? (domain = Array.from(_, _number_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]), scale) : domain.slice();\n  };\n\n  scale.unknown = function(_) {\n    return arguments.length ? (unknown = _, scale) : unknown;\n  };\n\n  scale.copy = function() {\n    return identity(domain).unknown(unknown);\n  };\n\n  domain = arguments.length ? Array.from(domain, _number_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) : [0, 1];\n\n  return Object(_linear_js__WEBPACK_IMPORTED_MODULE_0__[\"linearish\"])(scale);\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-scale/src/identity.js?");

/***/ }),

/***/ "./node_modules/d3-scale/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/d3-scale/src/index.js ***!
  \********************************************/
/*! exports provided: scaleBand, scalePoint, scaleIdentity, scaleLinear, scaleLog, scaleSymlog, scaleOrdinal, scaleImplicit, scalePow, scaleSqrt, scaleRadial, scaleQuantile, scaleQuantize, scaleThreshold, scaleTime, scaleUtc, scaleSequential, scaleSequentialLog, scaleSequentialPow, scaleSequentialSqrt, scaleSequentialSymlog, scaleSequentialQuantile, scaleDiverging, scaleDivergingLog, scaleDivergingPow, scaleDivergingSqrt, scaleDivergingSymlog, tickFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _band_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./band.js */ \"./node_modules/d3-scale/src/band.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"scaleBand\", function() { return _band_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"scalePoint\", function() { return _band_js__WEBPACK_IMPORTED_MODULE_0__[\"point\"]; });\n\n/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./identity.js */ \"./node_modules/d3-scale/src/identity.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"scaleIdentity\", function() { return _identity_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linear.js */ \"./node_modules/d3-scale/src/linear.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"scaleLinear\", function() { return _linear_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log.js */ \"./node_modules/d3-scale/src/log.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"scaleLog\", function() { return _log_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _symlog_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./symlog.js */ \"./node_modules/d3-scale/src/symlog.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"scaleSymlog\", function() { return _symlog_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _ordinal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ordinal.js */ \"./node_modules/d3-scale/src/ordinal.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"scaleOrdinal\", function() { return _ordinal_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"scaleImplicit\", function() { return _ordinal_js__WEBPACK_IMPORTED_MODULE_5__[\"implicit\"]; });\n\n/* harmony import */ var _pow_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pow.js */ \"./node_modules/d3-scale/src/pow.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"scalePow\", function() { return _pow_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"scaleSqrt\", function() { return _pow_js__WEBPACK_IMPORTED_MODULE_6__[\"sqrt\"]; });\n\n/* harmony import */ var _radial_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./radial.js */ \"./node_modules/d3-scale/src/radial.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"scaleRadial\", function() { return _radial_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]; });\n\n/* harmony import */ var _quantile_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quantile.js */ \"./node_modules/d3-scale/src/quantile.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"scaleQuantile\", function() { return _quantile_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]; });\n\n/* harmony import */ var _quantize_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./quantize.js */ \"./node_modules/d3-scale/src/quantize.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"scaleQuantize\", function() { return _quantize_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"]; });\n\n/* harmony import */ var _threshold_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./threshold.js */ \"./node_modules/d3-scale/src/threshold.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"scaleThreshold\", function() { return _threshold_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"]; });\n\n/* harmony import */ var _time_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./time.js */ \"./node_modules/d3-scale/src/time.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"scaleTime\", function() { return _time_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"]; });\n\n/* harmony import */ var _utcTime_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utcTime.js */ \"./node_modules/d3-scale/src/utcTime.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"scaleUtc\", function() { return _utcTime_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"]; });\n\n/* harmony import */ var _sequential_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sequential.js */ \"./node_modules/d3-scale/src/sequential.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"scaleSequential\", function() { return _sequential_js__WEBPACK_IMPORTED_MODULE_13__[\"default\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"scaleSequentialLog\", function() { return _sequential_js__WEBPACK_IMPORTED_MODULE_13__[\"sequentialLog\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"scaleSequentialPow\", function() { return _sequential_js__WEBPACK_IMPORTED_MODULE_13__[\"sequentialPow\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"scaleSequentialSqrt\", function() { return _sequential_js__WEBPACK_IMPORTED_MODULE_13__[\"sequentialSqrt\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"scaleSequentialSymlog\", function() { return _sequential_js__WEBPACK_IMPORTED_MODULE_13__[\"sequentialSymlog\"]; });\n\n/* harmony import */ var _sequentialQuantile_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sequentialQuantile.js */ \"./node_modules/d3-scale/src/sequentialQuantile.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"scaleSequentialQuantile\", function() { return _sequentialQuantile_js__WEBPACK_IMPORTED_MODULE_14__[\"default\"]; });\n\n/* harmony import */ var _diverging_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./diverging.js */ \"./node_modules/d3-scale/src/diverging.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"scaleDiverging\", function() { return _diverging_js__WEBPACK_IMPORTED_MODULE_15__[\"default\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"scaleDivergingLog\", function() { return _diverging_js__WEBPACK_IMPORTED_MODULE_15__[\"divergingLog\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"scaleDivergingPow\", function() { return _diverging_js__WEBPACK_IMPORTED_MODULE_15__[\"divergingPow\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"scaleDivergingSqrt\", function() { return _diverging_js__WEBPACK_IMPORTED_MODULE_15__[\"divergingSqrt\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"scaleDivergingSymlog\", function() { return _diverging_js__WEBPACK_IMPORTED_MODULE_15__[\"divergingSymlog\"]; });\n\n/* harmony import */ var _tickFormat_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tickFormat.js */ \"./node_modules/d3-scale/src/tickFormat.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"tickFormat\", function() { return _tickFormat_js__WEBPACK_IMPORTED_MODULE_16__[\"default\"]; });\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./node_modules/d3-scale/src/index.js?");

/***/ }),

/***/ "./node_modules/d3-scale/src/init.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-scale/src/init.js ***!
  \*******************************************/
/*! exports provided: initRange, initInterpolator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initRange\", function() { return initRange; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initInterpolator\", function() { return initInterpolator; });\nfunction initRange(domain, range) {\n  switch (arguments.length) {\n    case 0: break;\n    case 1: this.range(domain); break;\n    default: this.range(range).domain(domain); break;\n  }\n  return this;\n}\n\nfunction initInterpolator(domain, interpolator) {\n  switch (arguments.length) {\n    case 0: break;\n    case 1: {\n      if (typeof domain === \"function\") this.interpolator(domain);\n      else this.range(domain);\n      break;\n    }\n    default: {\n      this.domain(domain);\n      if (typeof interpolator === \"function\") this.interpolator(interpolator);\n      else this.range(interpolator);\n      break;\n    }\n  }\n  return this;\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-scale/src/init.js?");

/***/ }),

/***/ "./node_modules/d3-scale/src/linear.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-scale/src/linear.js ***!
  \*********************************************/
/*! exports provided: linearish, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"linearish\", function() { return linearish; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return linear; });\n/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ \"./node_modules/d3-array/src/index.js\");\n/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./continuous.js */ \"./node_modules/d3-scale/src/continuous.js\");\n/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init.js */ \"./node_modules/d3-scale/src/init.js\");\n/* harmony import */ var _tickFormat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tickFormat.js */ \"./node_modules/d3-scale/src/tickFormat.js\");\n\n\n\n\n\nfunction linearish(scale) {\n  var domain = scale.domain;\n\n  scale.ticks = function(count) {\n    var d = domain();\n    return Object(d3_array__WEBPACK_IMPORTED_MODULE_0__[\"ticks\"])(d[0], d[d.length - 1], count == null ? 10 : count);\n  };\n\n  scale.tickFormat = function(count, specifier) {\n    var d = domain();\n    return Object(_tickFormat_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(d[0], d[d.length - 1], count == null ? 10 : count, specifier);\n  };\n\n  scale.nice = function(count) {\n    if (count == null) count = 10;\n\n    var d = domain(),\n        i0 = 0,\n        i1 = d.length - 1,\n        start = d[i0],\n        stop = d[i1],\n        step;\n\n    if (stop < start) {\n      step = start, start = stop, stop = step;\n      step = i0, i0 = i1, i1 = step;\n    }\n\n    step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__[\"tickIncrement\"])(start, stop, count);\n\n    if (step > 0) {\n      start = Math.floor(start / step) * step;\n      stop = Math.ceil(stop / step) * step;\n      step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__[\"tickIncrement\"])(start, stop, count);\n    } else if (step < 0) {\n      start = Math.ceil(start * step) / step;\n      stop = Math.floor(stop * step) / step;\n      step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__[\"tickIncrement\"])(start, stop, count);\n    }\n\n    if (step > 0) {\n      d[i0] = Math.floor(start / step) * step;\n      d[i1] = Math.ceil(stop / step) * step;\n      domain(d);\n    } else if (step < 0) {\n      d[i0] = Math.ceil(start * step) / step;\n      d[i1] = Math.floor(stop * step) / step;\n      domain(d);\n    }\n\n    return scale;\n  };\n\n  return scale;\n}\n\nfunction linear() {\n  var scale = Object(_continuous_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n  scale.copy = function() {\n    return Object(_continuous_js__WEBPACK_IMPORTED_MODULE_1__[\"copy\"])(scale, linear());\n  };\n\n  _init_js__WEBPACK_IMPORTED_MODULE_2__[\"initRange\"].apply(scale, arguments);\n\n  return linearish(scale);\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-scale/src/linear.js?");

/***/ }),

/***/ "./node_modules/d3-scale/src/log.js":
/*!******************************************!*\
  !*** ./node_modules/d3-scale/src/log.js ***!
  \******************************************/
/*! exports provided: loggish, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loggish\", function() { return loggish; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return log; });\n/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ \"./node_modules/d3-array/src/index.js\");\n/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-format */ \"./node_modules/d3-format/src/index.js\");\n/* harmony import */ var _nice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nice.js */ \"./node_modules/d3-scale/src/nice.js\");\n/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./continuous.js */ \"./node_modules/d3-scale/src/continuous.js\");\n/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./init.js */ \"./node_modules/d3-scale/src/init.js\");\n\n\n\n\n\n\nfunction transformLog(x) {\n  return Math.log(x);\n}\n\nfunction transformExp(x) {\n  return Math.exp(x);\n}\n\nfunction transformLogn(x) {\n  return -Math.log(-x);\n}\n\nfunction transformExpn(x) {\n  return -Math.exp(-x);\n}\n\nfunction pow10(x) {\n  return isFinite(x) ? +(\"1e\" + x) : x < 0 ? 0 : x;\n}\n\nfunction powp(base) {\n  return base === 10 ? pow10\n      : base === Math.E ? Math.exp\n      : function(x) { return Math.pow(base, x); };\n}\n\nfunction logp(base) {\n  return base === Math.E ? Math.log\n      : base === 10 && Math.log10\n      || base === 2 && Math.log2\n      || (base = Math.log(base), function(x) { return Math.log(x) / base; });\n}\n\nfunction reflect(f) {\n  return function(x) {\n    return -f(-x);\n  };\n}\n\nfunction loggish(transform) {\n  var scale = transform(transformLog, transformExp),\n      domain = scale.domain,\n      base = 10,\n      logs,\n      pows;\n\n  function rescale() {\n    logs = logp(base), pows = powp(base);\n    if (domain()[0] < 0) {\n      logs = reflect(logs), pows = reflect(pows);\n      transform(transformLogn, transformExpn);\n    } else {\n      transform(transformLog, transformExp);\n    }\n    return scale;\n  }\n\n  scale.base = function(_) {\n    return arguments.length ? (base = +_, rescale()) : base;\n  };\n\n  scale.domain = function(_) {\n    return arguments.length ? (domain(_), rescale()) : domain();\n  };\n\n  scale.ticks = function(count) {\n    var d = domain(),\n        u = d[0],\n        v = d[d.length - 1],\n        r;\n\n    if (r = v < u) i = u, u = v, v = i;\n\n    var i = logs(u),\n        j = logs(v),\n        p,\n        k,\n        t,\n        n = count == null ? 10 : +count,\n        z = [];\n\n    if (!(base % 1) && j - i < n) {\n      i = Math.floor(i), j = Math.ceil(j);\n      if (u > 0) for (; i <= j; ++i) {\n        for (k = 1, p = pows(i); k < base; ++k) {\n          t = p * k;\n          if (t < u) continue;\n          if (t > v) break;\n          z.push(t);\n        }\n      } else for (; i <= j; ++i) {\n        for (k = base - 1, p = pows(i); k >= 1; --k) {\n          t = p * k;\n          if (t < u) continue;\n          if (t > v) break;\n          z.push(t);\n        }\n      }\n      if (!z.length) z = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__[\"ticks\"])(u, v, n);\n    } else {\n      z = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__[\"ticks\"])(i, j, Math.min(j - i, n)).map(pows);\n    }\n\n    return r ? z.reverse() : z;\n  };\n\n  scale.tickFormat = function(count, specifier) {\n    if (specifier == null) specifier = base === 10 ? \".0e\" : \",\";\n    if (typeof specifier !== \"function\") specifier = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__[\"format\"])(specifier);\n    if (count === Infinity) return specifier;\n    if (count == null) count = 10;\n    var k = Math.max(1, base * count / scale.ticks().length); // TODO fast estimate?\n    return function(d) {\n      var i = d / pows(Math.round(logs(d)));\n      if (i * base < base - 0.5) i *= base;\n      return i <= k ? specifier(d) : \"\";\n    };\n  };\n\n  scale.nice = function() {\n    return domain(Object(_nice_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(domain(), {\n      floor: function(x) { return pows(Math.floor(logs(x))); },\n      ceil: function(x) { return pows(Math.ceil(logs(x))); }\n    }));\n  };\n\n  return scale;\n}\n\nfunction log() {\n  var scale = loggish(Object(_continuous_js__WEBPACK_IMPORTED_MODULE_3__[\"transformer\"])()).domain([1, 10]);\n\n  scale.copy = function() {\n    return Object(_continuous_js__WEBPACK_IMPORTED_MODULE_3__[\"copy\"])(scale, log()).base(scale.base());\n  };\n\n  _init_js__WEBPACK_IMPORTED_MODULE_4__[\"initRange\"].apply(scale, arguments);\n\n  return scale;\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-scale/src/log.js?");

/***/ }),

/***/ "./node_modules/d3-scale/src/nice.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-scale/src/nice.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(domain, interval) {\n  domain = domain.slice();\n\n  var i0 = 0,\n      i1 = domain.length - 1,\n      x0 = domain[i0],\n      x1 = domain[i1],\n      t;\n\n  if (x1 < x0) {\n    t = i0, i0 = i1, i1 = t;\n    t = x0, x0 = x1, x1 = t;\n  }\n\n  domain[i0] = interval.floor(x0);\n  domain[i1] = interval.ceil(x1);\n  return domain;\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-scale/src/nice.js?");

/***/ }),

/***/ "./node_modules/d3-scale/src/number.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-scale/src/number.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(x) {\n  return +x;\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-scale/src/number.js?");

/***/ }),

/***/ "./node_modules/d3-scale/src/ordinal.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-scale/src/ordinal.js ***!
  \**********************************************/
/*! exports provided: implicit, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"implicit\", function() { return implicit; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ordinal; });\n/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init.js */ \"./node_modules/d3-scale/src/init.js\");\n\n\nconst implicit = Symbol(\"implicit\");\n\nfunction ordinal() {\n  var index = new Map(),\n      domain = [],\n      range = [],\n      unknown = implicit;\n\n  function scale(d) {\n    var key = d + \"\", i = index.get(key);\n    if (!i) {\n      if (unknown !== implicit) return unknown;\n      index.set(key, i = domain.push(d));\n    }\n    return range[(i - 1) % range.length];\n  }\n\n  scale.domain = function(_) {\n    if (!arguments.length) return domain.slice();\n    domain = [], index = new Map();\n    for (const value of _) {\n      const key = value + \"\";\n      if (index.has(key)) continue;\n      index.set(key, domain.push(value));\n    }\n    return scale;\n  };\n\n  scale.range = function(_) {\n    return arguments.length ? (range = Array.from(_), scale) : range.slice();\n  };\n\n  scale.unknown = function(_) {\n    return arguments.length ? (unknown = _, scale) : unknown;\n  };\n\n  scale.copy = function() {\n    return ordinal(domain, range).unknown(unknown);\n  };\n\n  _init_js__WEBPACK_IMPORTED_MODULE_0__[\"initRange\"].apply(scale, arguments);\n\n  return scale;\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-scale/src/ordinal.js?");

/***/ }),

/***/ "./node_modules/d3-scale/src/pow.js":
/*!******************************************!*\
  !*** ./node_modules/d3-scale/src/pow.js ***!
  \******************************************/
/*! exports provided: powish, default, sqrt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"powish\", function() { return powish; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return pow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sqrt\", function() { return sqrt; });\n/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linear.js */ \"./node_modules/d3-scale/src/linear.js\");\n/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./continuous.js */ \"./node_modules/d3-scale/src/continuous.js\");\n/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init.js */ \"./node_modules/d3-scale/src/init.js\");\n\n\n\n\nfunction transformPow(exponent) {\n  return function(x) {\n    return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);\n  };\n}\n\nfunction transformSqrt(x) {\n  return x < 0 ? -Math.sqrt(-x) : Math.sqrt(x);\n}\n\nfunction transformSquare(x) {\n  return x < 0 ? -x * x : x * x;\n}\n\nfunction powish(transform) {\n  var scale = transform(_continuous_js__WEBPACK_IMPORTED_MODULE_1__[\"identity\"], _continuous_js__WEBPACK_IMPORTED_MODULE_1__[\"identity\"]),\n      exponent = 1;\n\n  function rescale() {\n    return exponent === 1 ? transform(_continuous_js__WEBPACK_IMPORTED_MODULE_1__[\"identity\"], _continuous_js__WEBPACK_IMPORTED_MODULE_1__[\"identity\"])\n        : exponent === 0.5 ? transform(transformSqrt, transformSquare)\n        : transform(transformPow(exponent), transformPow(1 / exponent));\n  }\n\n  scale.exponent = function(_) {\n    return arguments.length ? (exponent = +_, rescale()) : exponent;\n  };\n\n  return Object(_linear_js__WEBPACK_IMPORTED_MODULE_0__[\"linearish\"])(scale);\n}\n\nfunction pow() {\n  var scale = powish(Object(_continuous_js__WEBPACK_IMPORTED_MODULE_1__[\"transformer\"])());\n\n  scale.copy = function() {\n    return Object(_continuous_js__WEBPACK_IMPORTED_MODULE_1__[\"copy\"])(scale, pow()).exponent(scale.exponent());\n  };\n\n  _init_js__WEBPACK_IMPORTED_MODULE_2__[\"initRange\"].apply(scale, arguments);\n\n  return scale;\n}\n\nfunction sqrt() {\n  return pow.apply(null, arguments).exponent(0.5);\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-scale/src/pow.js?");

/***/ }),

/***/ "./node_modules/d3-scale/src/quantile.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-scale/src/quantile.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return quantile; });\n/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ \"./node_modules/d3-array/src/index.js\");\n/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init.js */ \"./node_modules/d3-scale/src/init.js\");\n\n\n\nfunction quantile() {\n  var domain = [],\n      range = [],\n      thresholds = [],\n      unknown;\n\n  function rescale() {\n    var i = 0, n = Math.max(1, range.length);\n    thresholds = new Array(n - 1);\n    while (++i < n) thresholds[i - 1] = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__[\"quantile\"])(domain, i / n);\n    return scale;\n  }\n\n  function scale(x) {\n    return isNaN(x = +x) ? unknown : range[Object(d3_array__WEBPACK_IMPORTED_MODULE_0__[\"bisect\"])(thresholds, x)];\n  }\n\n  scale.invertExtent = function(y) {\n    var i = range.indexOf(y);\n    return i < 0 ? [NaN, NaN] : [\n      i > 0 ? thresholds[i - 1] : domain[0],\n      i < thresholds.length ? thresholds[i] : domain[domain.length - 1]\n    ];\n  };\n\n  scale.domain = function(_) {\n    if (!arguments.length) return domain.slice();\n    domain = [];\n    for (let d of _) if (d != null && !isNaN(d = +d)) domain.push(d);\n    domain.sort(d3_array__WEBPACK_IMPORTED_MODULE_0__[\"ascending\"]);\n    return rescale();\n  };\n\n  scale.range = function(_) {\n    return arguments.length ? (range = Array.from(_), rescale()) : range.slice();\n  };\n\n  scale.unknown = function(_) {\n    return arguments.length ? (unknown = _, scale) : unknown;\n  };\n\n  scale.quantiles = function() {\n    return thresholds.slice();\n  };\n\n  scale.copy = function() {\n    return quantile()\n        .domain(domain)\n        .range(range)\n        .unknown(unknown);\n  };\n\n  return _init_js__WEBPACK_IMPORTED_MODULE_1__[\"initRange\"].apply(scale, arguments);\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-scale/src/quantile.js?");

/***/ }),

/***/ "./node_modules/d3-scale/src/quantize.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-scale/src/quantize.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return quantize; });\n/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ \"./node_modules/d3-array/src/index.js\");\n/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./linear.js */ \"./node_modules/d3-scale/src/linear.js\");\n/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init.js */ \"./node_modules/d3-scale/src/init.js\");\n\n\n\n\nfunction quantize() {\n  var x0 = 0,\n      x1 = 1,\n      n = 1,\n      domain = [0.5],\n      range = [0, 1],\n      unknown;\n\n  function scale(x) {\n    return x <= x ? range[Object(d3_array__WEBPACK_IMPORTED_MODULE_0__[\"bisect\"])(domain, x, 0, n)] : unknown;\n  }\n\n  function rescale() {\n    var i = -1;\n    domain = new Array(n);\n    while (++i < n) domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);\n    return scale;\n  }\n\n  scale.domain = function(_) {\n    return arguments.length ? ([x0, x1] = _, x0 = +x0, x1 = +x1, rescale()) : [x0, x1];\n  };\n\n  scale.range = function(_) {\n    return arguments.length ? (n = (range = Array.from(_)).length - 1, rescale()) : range.slice();\n  };\n\n  scale.invertExtent = function(y) {\n    var i = range.indexOf(y);\n    return i < 0 ? [NaN, NaN]\n        : i < 1 ? [x0, domain[0]]\n        : i >= n ? [domain[n - 1], x1]\n        : [domain[i - 1], domain[i]];\n  };\n\n  scale.unknown = function(_) {\n    return arguments.length ? (unknown = _, scale) : scale;\n  };\n\n  scale.thresholds = function() {\n    return domain.slice();\n  };\n\n  scale.copy = function() {\n    return quantize()\n        .domain([x0, x1])\n        .range(range)\n        .unknown(unknown);\n  };\n\n  return _init_js__WEBPACK_IMPORTED_MODULE_2__[\"initRange\"].apply(Object(_linear_js__WEBPACK_IMPORTED_MODULE_1__[\"linearish\"])(scale), arguments);\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-scale/src/quantize.js?");

/***/ }),

/***/ "./node_modules/d3-scale/src/radial.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-scale/src/radial.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return radial; });\n/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./continuous.js */ \"./node_modules/d3-scale/src/continuous.js\");\n/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init.js */ \"./node_modules/d3-scale/src/init.js\");\n/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linear.js */ \"./node_modules/d3-scale/src/linear.js\");\n/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./number.js */ \"./node_modules/d3-scale/src/number.js\");\n\n\n\n\n\nfunction square(x) {\n  return Math.sign(x) * x * x;\n}\n\nfunction unsquare(x) {\n  return Math.sign(x) * Math.sqrt(Math.abs(x));\n}\n\nfunction radial() {\n  var squared = Object(_continuous_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(),\n      range = [0, 1],\n      round = false,\n      unknown;\n\n  function scale(x) {\n    var y = unsquare(squared(x));\n    return isNaN(y) ? unknown : round ? Math.round(y) : y;\n  }\n\n  scale.invert = function(y) {\n    return squared.invert(square(y));\n  };\n\n  scale.domain = function(_) {\n    return arguments.length ? (squared.domain(_), scale) : squared.domain();\n  };\n\n  scale.range = function(_) {\n    return arguments.length ? (squared.range((range = Array.from(_, _number_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])).map(square)), scale) : range.slice();\n  };\n\n  scale.rangeRound = function(_) {\n    return scale.range(_).round(true);\n  };\n\n  scale.round = function(_) {\n    return arguments.length ? (round = !!_, scale) : round;\n  };\n\n  scale.clamp = function(_) {\n    return arguments.length ? (squared.clamp(_), scale) : squared.clamp();\n  };\n\n  scale.unknown = function(_) {\n    return arguments.length ? (unknown = _, scale) : unknown;\n  };\n\n  scale.copy = function() {\n    return radial(squared.domain(), range)\n        .round(round)\n        .clamp(squared.clamp())\n        .unknown(unknown);\n  };\n\n  _init_js__WEBPACK_IMPORTED_MODULE_1__[\"initRange\"].apply(scale, arguments);\n\n  return Object(_linear_js__WEBPACK_IMPORTED_MODULE_2__[\"linearish\"])(scale);\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-scale/src/radial.js?");

/***/ }),

/***/ "./node_modules/d3-scale/src/sequential.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-scale/src/sequential.js ***!
  \*************************************************/
/*! exports provided: copy, default, sequentialLog, sequentialSymlog, sequentialPow, sequentialSqrt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"copy\", function() { return copy; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return sequential; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sequentialLog\", function() { return sequentialLog; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sequentialSymlog\", function() { return sequentialSymlog; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sequentialPow\", function() { return sequentialPow; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sequentialSqrt\", function() { return sequentialSqrt; });\n/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-interpolate */ \"./node_modules/d3-interpolate/src/index.js\");\n/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./continuous.js */ \"./node_modules/d3-scale/src/continuous.js\");\n/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init.js */ \"./node_modules/d3-scale/src/init.js\");\n/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./linear.js */ \"./node_modules/d3-scale/src/linear.js\");\n/* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./log.js */ \"./node_modules/d3-scale/src/log.js\");\n/* harmony import */ var _symlog_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./symlog.js */ \"./node_modules/d3-scale/src/symlog.js\");\n/* harmony import */ var _pow_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pow.js */ \"./node_modules/d3-scale/src/pow.js\");\n\n\n\n\n\n\n\n\nfunction transformer() {\n  var x0 = 0,\n      x1 = 1,\n      t0,\n      t1,\n      k10,\n      transform,\n      interpolator = _continuous_js__WEBPACK_IMPORTED_MODULE_1__[\"identity\"],\n      clamp = false,\n      unknown;\n\n  function scale(x) {\n    return isNaN(x = +x) ? unknown : interpolator(k10 === 0 ? 0.5 : (x = (transform(x) - t0) * k10, clamp ? Math.max(0, Math.min(1, x)) : x));\n  }\n\n  scale.domain = function(_) {\n    return arguments.length ? ([x0, x1] = _, t0 = transform(x0 = +x0), t1 = transform(x1 = +x1), k10 = t0 === t1 ? 0 : 1 / (t1 - t0), scale) : [x0, x1];\n  };\n\n  scale.clamp = function(_) {\n    return arguments.length ? (clamp = !!_, scale) : clamp;\n  };\n\n  scale.interpolator = function(_) {\n    return arguments.length ? (interpolator = _, scale) : interpolator;\n  };\n\n  function range(interpolate) {\n    return function(_) {\n      var r0, r1;\n      return arguments.length ? ([r0, r1] = _, interpolator = interpolate(r0, r1), scale) : [interpolator(0), interpolator(1)];\n    };\n  }\n\n  scale.range = range(d3_interpolate__WEBPACK_IMPORTED_MODULE_0__[\"interpolate\"]);\n\n  scale.rangeRound = range(d3_interpolate__WEBPACK_IMPORTED_MODULE_0__[\"interpolateRound\"]);\n\n  scale.unknown = function(_) {\n    return arguments.length ? (unknown = _, scale) : unknown;\n  };\n\n  return function(t) {\n    transform = t, t0 = t(x0), t1 = t(x1), k10 = t0 === t1 ? 0 : 1 / (t1 - t0);\n    return scale;\n  };\n}\n\nfunction copy(source, target) {\n  return target\n      .domain(source.domain())\n      .interpolator(source.interpolator())\n      .clamp(source.clamp())\n      .unknown(source.unknown());\n}\n\nfunction sequential() {\n  var scale = Object(_linear_js__WEBPACK_IMPORTED_MODULE_3__[\"linearish\"])(transformer()(_continuous_js__WEBPACK_IMPORTED_MODULE_1__[\"identity\"]));\n\n  scale.copy = function() {\n    return copy(scale, sequential());\n  };\n\n  return _init_js__WEBPACK_IMPORTED_MODULE_2__[\"initInterpolator\"].apply(scale, arguments);\n}\n\nfunction sequentialLog() {\n  var scale = Object(_log_js__WEBPACK_IMPORTED_MODULE_4__[\"loggish\"])(transformer()).domain([1, 10]);\n\n  scale.copy = function() {\n    return copy(scale, sequentialLog()).base(scale.base());\n  };\n\n  return _init_js__WEBPACK_IMPORTED_MODULE_2__[\"initInterpolator\"].apply(scale, arguments);\n}\n\nfunction sequentialSymlog() {\n  var scale = Object(_symlog_js__WEBPACK_IMPORTED_MODULE_5__[\"symlogish\"])(transformer());\n\n  scale.copy = function() {\n    return copy(scale, sequentialSymlog()).constant(scale.constant());\n  };\n\n  return _init_js__WEBPACK_IMPORTED_MODULE_2__[\"initInterpolator\"].apply(scale, arguments);\n}\n\nfunction sequentialPow() {\n  var scale = Object(_pow_js__WEBPACK_IMPORTED_MODULE_6__[\"powish\"])(transformer());\n\n  scale.copy = function() {\n    return copy(scale, sequentialPow()).exponent(scale.exponent());\n  };\n\n  return _init_js__WEBPACK_IMPORTED_MODULE_2__[\"initInterpolator\"].apply(scale, arguments);\n}\n\nfunction sequentialSqrt() {\n  return sequentialPow.apply(null, arguments).exponent(0.5);\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-scale/src/sequential.js?");

/***/ }),

/***/ "./node_modules/d3-scale/src/sequentialQuantile.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-scale/src/sequentialQuantile.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return sequentialQuantile; });\n/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ \"./node_modules/d3-array/src/index.js\");\n/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./continuous.js */ \"./node_modules/d3-scale/src/continuous.js\");\n/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init.js */ \"./node_modules/d3-scale/src/init.js\");\n\n\n\n\nfunction sequentialQuantile() {\n  var domain = [],\n      interpolator = _continuous_js__WEBPACK_IMPORTED_MODULE_1__[\"identity\"];\n\n  function scale(x) {\n    if (!isNaN(x = +x)) return interpolator((Object(d3_array__WEBPACK_IMPORTED_MODULE_0__[\"bisect\"])(domain, x, 1) - 1) / (domain.length - 1));\n  }\n\n  scale.domain = function(_) {\n    if (!arguments.length) return domain.slice();\n    domain = [];\n    for (let d of _) if (d != null && !isNaN(d = +d)) domain.push(d);\n    domain.sort(d3_array__WEBPACK_IMPORTED_MODULE_0__[\"ascending\"]);\n    return scale;\n  };\n\n  scale.interpolator = function(_) {\n    return arguments.length ? (interpolator = _, scale) : interpolator;\n  };\n\n  scale.range = function() {\n    return domain.map((d, i) => interpolator(i / (domain.length - 1)));\n  };\n\n  scale.quantiles = function(n) {\n    return Array.from({length: n + 1}, (_, i) => Object(d3_array__WEBPACK_IMPORTED_MODULE_0__[\"quantile\"])(domain, i / n));\n  };\n\n  scale.copy = function() {\n    return sequentialQuantile(interpolator).domain(domain);\n  };\n\n  return _init_js__WEBPACK_IMPORTED_MODULE_2__[\"initInterpolator\"].apply(scale, arguments);\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-scale/src/sequentialQuantile.js?");

/***/ }),

/***/ "./node_modules/d3-scale/src/symlog.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-scale/src/symlog.js ***!
  \*********************************************/
/*! exports provided: symlogish, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"symlogish\", function() { return symlogish; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return symlog; });\n/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linear.js */ \"./node_modules/d3-scale/src/linear.js\");\n/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./continuous.js */ \"./node_modules/d3-scale/src/continuous.js\");\n/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init.js */ \"./node_modules/d3-scale/src/init.js\");\n\n\n\n\nfunction transformSymlog(c) {\n  return function(x) {\n    return Math.sign(x) * Math.log1p(Math.abs(x / c));\n  };\n}\n\nfunction transformSymexp(c) {\n  return function(x) {\n    return Math.sign(x) * Math.expm1(Math.abs(x)) * c;\n  };\n}\n\nfunction symlogish(transform) {\n  var c = 1, scale = transform(transformSymlog(c), transformSymexp(c));\n\n  scale.constant = function(_) {\n    return arguments.length ? transform(transformSymlog(c = +_), transformSymexp(c)) : c;\n  };\n\n  return Object(_linear_js__WEBPACK_IMPORTED_MODULE_0__[\"linearish\"])(scale);\n}\n\nfunction symlog() {\n  var scale = symlogish(Object(_continuous_js__WEBPACK_IMPORTED_MODULE_1__[\"transformer\"])());\n\n  scale.copy = function() {\n    return Object(_continuous_js__WEBPACK_IMPORTED_MODULE_1__[\"copy\"])(scale, symlog()).constant(scale.constant());\n  };\n\n  return _init_js__WEBPACK_IMPORTED_MODULE_2__[\"initRange\"].apply(scale, arguments);\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-scale/src/symlog.js?");

/***/ }),

/***/ "./node_modules/d3-scale/src/threshold.js":
/*!************************************************!*\
  !*** ./node_modules/d3-scale/src/threshold.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return threshold; });\n/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ \"./node_modules/d3-array/src/index.js\");\n/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init.js */ \"./node_modules/d3-scale/src/init.js\");\n\n\n\nfunction threshold() {\n  var domain = [0.5],\n      range = [0, 1],\n      unknown,\n      n = 1;\n\n  function scale(x) {\n    return x <= x ? range[Object(d3_array__WEBPACK_IMPORTED_MODULE_0__[\"bisect\"])(domain, x, 0, n)] : unknown;\n  }\n\n  scale.domain = function(_) {\n    return arguments.length ? (domain = Array.from(_), n = Math.min(domain.length, range.length - 1), scale) : domain.slice();\n  };\n\n  scale.range = function(_) {\n    return arguments.length ? (range = Array.from(_), n = Math.min(domain.length, range.length - 1), scale) : range.slice();\n  };\n\n  scale.invertExtent = function(y) {\n    var i = range.indexOf(y);\n    return [domain[i - 1], domain[i]];\n  };\n\n  scale.unknown = function(_) {\n    return arguments.length ? (unknown = _, scale) : unknown;\n  };\n\n  scale.copy = function() {\n    return threshold()\n        .domain(domain)\n        .range(range)\n        .unknown(unknown);\n  };\n\n  return _init_js__WEBPACK_IMPORTED_MODULE_1__[\"initRange\"].apply(scale, arguments);\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-scale/src/threshold.js?");

/***/ }),

/***/ "./node_modules/d3-scale/src/tickFormat.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-scale/src/tickFormat.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ \"./node_modules/d3-array/src/index.js\");\n/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-format */ \"./node_modules/d3-format/src/index.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(start, stop, count, specifier) {\n  var step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__[\"tickStep\"])(start, stop, count),\n      precision;\n  specifier = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__[\"formatSpecifier\"])(specifier == null ? \",f\" : specifier);\n  switch (specifier.type) {\n    case \"s\": {\n      var value = Math.max(Math.abs(start), Math.abs(stop));\n      if (specifier.precision == null && !isNaN(precision = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__[\"precisionPrefix\"])(step, value))) specifier.precision = precision;\n      return Object(d3_format__WEBPACK_IMPORTED_MODULE_1__[\"formatPrefix\"])(specifier, value);\n    }\n    case \"\":\n    case \"e\":\n    case \"g\":\n    case \"p\":\n    case \"r\": {\n      if (specifier.precision == null && !isNaN(precision = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__[\"precisionRound\"])(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === \"e\");\n      break;\n    }\n    case \"f\":\n    case \"%\": {\n      if (specifier.precision == null && !isNaN(precision = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__[\"precisionFixed\"])(step))) specifier.precision = precision - (specifier.type === \"%\") * 2;\n      break;\n    }\n  }\n  return Object(d3_format__WEBPACK_IMPORTED_MODULE_1__[\"format\"])(specifier);\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-scale/src/tickFormat.js?");

/***/ }),

/***/ "./node_modules/d3-scale/src/time.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-scale/src/time.js ***!
  \*******************************************/
/*! exports provided: calendar, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"calendar\", function() { return calendar; });\n/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ \"./node_modules/d3-array/src/index.js\");\n/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-time */ \"./node_modules/d3-time/src/index.js\");\n/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-time-format */ \"./node_modules/d3-time-format/src/index.js\");\n/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./continuous.js */ \"./node_modules/d3-scale/src/continuous.js\");\n/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./init.js */ \"./node_modules/d3-scale/src/init.js\");\n/* harmony import */ var _nice_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nice.js */ \"./node_modules/d3-scale/src/nice.js\");\n\n\n\n\n\n\n\nvar durationSecond = 1000,\n    durationMinute = durationSecond * 60,\n    durationHour = durationMinute * 60,\n    durationDay = durationHour * 24,\n    durationWeek = durationDay * 7,\n    durationMonth = durationDay * 30,\n    durationYear = durationDay * 365;\n\nfunction date(t) {\n  return new Date(t);\n}\n\nfunction number(t) {\n  return t instanceof Date ? +t : +new Date(+t);\n}\n\nfunction calendar(year, month, week, day, hour, minute, second, millisecond, format) {\n  var scale = Object(_continuous_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(),\n      invert = scale.invert,\n      domain = scale.domain;\n\n  var formatMillisecond = format(\".%L\"),\n      formatSecond = format(\":%S\"),\n      formatMinute = format(\"%I:%M\"),\n      formatHour = format(\"%I %p\"),\n      formatDay = format(\"%a %d\"),\n      formatWeek = format(\"%b %d\"),\n      formatMonth = format(\"%B\"),\n      formatYear = format(\"%Y\");\n\n  var tickIntervals = [\n    [second,  1,      durationSecond],\n    [second,  5,  5 * durationSecond],\n    [second, 15, 15 * durationSecond],\n    [second, 30, 30 * durationSecond],\n    [minute,  1,      durationMinute],\n    [minute,  5,  5 * durationMinute],\n    [minute, 15, 15 * durationMinute],\n    [minute, 30, 30 * durationMinute],\n    [  hour,  1,      durationHour  ],\n    [  hour,  3,  3 * durationHour  ],\n    [  hour,  6,  6 * durationHour  ],\n    [  hour, 12, 12 * durationHour  ],\n    [   day,  1,      durationDay   ],\n    [   day,  2,  2 * durationDay   ],\n    [  week,  1,      durationWeek  ],\n    [ month,  1,      durationMonth ],\n    [ month,  3,  3 * durationMonth ],\n    [  year,  1,      durationYear  ]\n  ];\n\n  function tickFormat(date) {\n    return (second(date) < date ? formatMillisecond\n        : minute(date) < date ? formatSecond\n        : hour(date) < date ? formatMinute\n        : day(date) < date ? formatHour\n        : month(date) < date ? (week(date) < date ? formatDay : formatWeek)\n        : year(date) < date ? formatMonth\n        : formatYear)(date);\n  }\n\n  function tickInterval(interval, start, stop) {\n    if (interval == null) interval = 10;\n\n    // If a desired tick count is specified, pick a reasonable tick interval\n    // based on the extent of the domain and a rough estimate of tick size.\n    // Otherwise, assume interval is already a time interval and use it.\n    if (typeof interval === \"number\") {\n      var target = Math.abs(stop - start) / interval,\n          i = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__[\"bisector\"])(function(i) { return i[2]; }).right(tickIntervals, target),\n          step;\n      if (i === tickIntervals.length) {\n        step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__[\"tickStep\"])(start / durationYear, stop / durationYear, interval);\n        interval = year;\n      } else if (i) {\n        i = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];\n        step = i[1];\n        interval = i[0];\n      } else {\n        step = Math.max(Object(d3_array__WEBPACK_IMPORTED_MODULE_0__[\"tickStep\"])(start, stop, interval), 1);\n        interval = millisecond;\n      }\n      return interval.every(step);\n    }\n\n    return interval;\n  }\n\n  scale.invert = function(y) {\n    return new Date(invert(y));\n  };\n\n  scale.domain = function(_) {\n    return arguments.length ? domain(Array.from(_, number)) : domain().map(date);\n  };\n\n  scale.ticks = function(interval) {\n    var d = domain(),\n        t0 = d[0],\n        t1 = d[d.length - 1],\n        r = t1 < t0,\n        t;\n    if (r) t = t0, t0 = t1, t1 = t;\n    t = tickInterval(interval, t0, t1);\n    t = t ? t.range(t0, t1 + 1) : []; // inclusive stop\n    return r ? t.reverse() : t;\n  };\n\n  scale.tickFormat = function(count, specifier) {\n    return specifier == null ? tickFormat : format(specifier);\n  };\n\n  scale.nice = function(interval) {\n    var d = domain();\n    return (interval = tickInterval(interval, d[0], d[d.length - 1]))\n        ? domain(Object(_nice_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(d, interval))\n        : scale;\n  };\n\n  scale.copy = function() {\n    return Object(_continuous_js__WEBPACK_IMPORTED_MODULE_3__[\"copy\"])(scale, calendar(year, month, week, day, hour, minute, second, millisecond, format));\n  };\n\n  return scale;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\n  return _init_js__WEBPACK_IMPORTED_MODULE_4__[\"initRange\"].apply(calendar(d3_time__WEBPACK_IMPORTED_MODULE_1__[\"timeYear\"], d3_time__WEBPACK_IMPORTED_MODULE_1__[\"timeMonth\"], d3_time__WEBPACK_IMPORTED_MODULE_1__[\"timeWeek\"], d3_time__WEBPACK_IMPORTED_MODULE_1__[\"timeDay\"], d3_time__WEBPACK_IMPORTED_MODULE_1__[\"timeHour\"], d3_time__WEBPACK_IMPORTED_MODULE_1__[\"timeMinute\"], d3_time__WEBPACK_IMPORTED_MODULE_1__[\"timeSecond\"], d3_time__WEBPACK_IMPORTED_MODULE_1__[\"timeMillisecond\"], d3_time_format__WEBPACK_IMPORTED_MODULE_2__[\"timeFormat\"]).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]), arguments);\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-scale/src/time.js?");

/***/ }),

/***/ "./node_modules/d3-scale/src/utcTime.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-scale/src/utcTime.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _time_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./time.js */ \"./node_modules/d3-scale/src/time.js\");\n/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-time-format */ \"./node_modules/d3-time-format/src/index.js\");\n/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-time */ \"./node_modules/d3-time/src/index.js\");\n/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./init.js */ \"./node_modules/d3-scale/src/init.js\");\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function() {\n  return _init_js__WEBPACK_IMPORTED_MODULE_3__[\"initRange\"].apply(Object(_time_js__WEBPACK_IMPORTED_MODULE_0__[\"calendar\"])(d3_time__WEBPACK_IMPORTED_MODULE_2__[\"utcYear\"], d3_time__WEBPACK_IMPORTED_MODULE_2__[\"utcMonth\"], d3_time__WEBPACK_IMPORTED_MODULE_2__[\"utcWeek\"], d3_time__WEBPACK_IMPORTED_MODULE_2__[\"utcDay\"], d3_time__WEBPACK_IMPORTED_MODULE_2__[\"utcHour\"], d3_time__WEBPACK_IMPORTED_MODULE_2__[\"utcMinute\"], d3_time__WEBPACK_IMPORTED_MODULE_2__[\"utcSecond\"], d3_time__WEBPACK_IMPORTED_MODULE_2__[\"utcMillisecond\"], d3_time_format__WEBPACK_IMPORTED_MODULE_1__[\"utcFormat\"]).domain([Date.UTC(2000, 0, 1), Date.UTC(2000, 0, 2)]), arguments);\n});\n\n\n//# sourceURL=webpack:///./node_modules/d3-scale/src/utcTime.js?");

/***/ }),

/***/ "./node_modules/d3-time-format/src/defaultLocale.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-time-format/src/defaultLocale.js ***!
  \**********************************************************/
/*! exports provided: timeFormat, timeParse, utcFormat, utcParse, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"timeFormat\", function() { return timeFormat; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"timeParse\", function() { return timeParse; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"utcFormat\", function() { return utcFormat; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"utcParse\", function() { return utcParse; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return defaultLocale; });\n/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locale.js */ \"./node_modules/d3-time-format/src/locale.js\");\n\n\nvar locale;\nvar timeFormat;\nvar timeParse;\nvar utcFormat;\nvar utcParse;\n\ndefaultLocale({\n  dateTime: \"%x, %X\",\n  date: \"%-m/%-d/%Y\",\n  time: \"%-I:%M:%S %p\",\n  periods: [\"AM\", \"PM\"],\n  days: [\"Sunday\", \"Monday\", \"Tuesday\", \"Wednesday\", \"Thursday\", \"Friday\", \"Saturday\"],\n  shortDays: [\"Sun\", \"Mon\", \"Tue\", \"Wed\", \"Thu\", \"Fri\", \"Sat\"],\n  months: [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\", \"August\", \"September\", \"October\", \"November\", \"December\"],\n  shortMonths: [\"Jan\", \"Feb\", \"Mar\", \"Apr\", \"May\", \"Jun\", \"Jul\", \"Aug\", \"Sep\", \"Oct\", \"Nov\", \"Dec\"]\n});\n\nfunction defaultLocale(definition) {\n  locale = Object(_locale_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(definition);\n  timeFormat = locale.format;\n  timeParse = locale.parse;\n  utcFormat = locale.utcFormat;\n  utcParse = locale.utcParse;\n  return locale;\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-time-format/src/defaultLocale.js?");

/***/ }),

/***/ "./node_modules/d3-time-format/src/index.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-time-format/src/index.js ***!
  \**************************************************/
/*! exports provided: timeFormatDefaultLocale, timeFormat, timeParse, utcFormat, utcParse, timeFormatLocale, isoFormat, isoParse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultLocale.js */ \"./node_modules/d3-time-format/src/defaultLocale.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"timeFormatDefaultLocale\", function() { return _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"timeFormat\", function() { return _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__[\"timeFormat\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"timeParse\", function() { return _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__[\"timeParse\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"utcFormat\", function() { return _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__[\"utcFormat\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"utcParse\", function() { return _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__[\"utcParse\"]; });\n\n/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale.js */ \"./node_modules/d3-time-format/src/locale.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"timeFormatLocale\", function() { return _locale_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _isoFormat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isoFormat.js */ \"./node_modules/d3-time-format/src/isoFormat.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isoFormat\", function() { return _isoFormat_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _isoParse_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isoParse.js */ \"./node_modules/d3-time-format/src/isoParse.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isoParse\", function() { return _isoParse_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./node_modules/d3-time-format/src/index.js?");

/***/ }),

/***/ "./node_modules/d3-time-format/src/isoFormat.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-time-format/src/isoFormat.js ***!
  \******************************************************/
/*! exports provided: isoSpecifier, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isoSpecifier\", function() { return isoSpecifier; });\n/* harmony import */ var _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultLocale.js */ \"./node_modules/d3-time-format/src/defaultLocale.js\");\n\n\nvar isoSpecifier = \"%Y-%m-%dT%H:%M:%S.%LZ\";\n\nfunction formatIsoNative(date) {\n  return date.toISOString();\n}\n\nvar formatIso = Date.prototype.toISOString\n    ? formatIsoNative\n    : Object(_defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__[\"utcFormat\"])(isoSpecifier);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (formatIso);\n\n\n//# sourceURL=webpack:///./node_modules/d3-time-format/src/isoFormat.js?");

/***/ }),

/***/ "./node_modules/d3-time-format/src/isoParse.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-time-format/src/isoParse.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _isoFormat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isoFormat.js */ \"./node_modules/d3-time-format/src/isoFormat.js\");\n/* harmony import */ var _defaultLocale_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultLocale.js */ \"./node_modules/d3-time-format/src/defaultLocale.js\");\n\n\n\nfunction parseIsoNative(string) {\n  var date = new Date(string);\n  return isNaN(date) ? null : date;\n}\n\nvar parseIso = +new Date(\"2000-01-01T00:00:00.000Z\")\n    ? parseIsoNative\n    : Object(_defaultLocale_js__WEBPACK_IMPORTED_MODULE_1__[\"utcParse\"])(_isoFormat_js__WEBPACK_IMPORTED_MODULE_0__[\"isoSpecifier\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (parseIso);\n\n\n//# sourceURL=webpack:///./node_modules/d3-time-format/src/isoParse.js?");

/***/ }),

/***/ "./node_modules/d3-time-format/src/locale.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-time-format/src/locale.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return formatLocale; });\n/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-time */ \"./node_modules/d3-time/src/index.js\");\n\n\nfunction localDate(d) {\n  if (0 <= d.y && d.y < 100) {\n    var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);\n    date.setFullYear(d.y);\n    return date;\n  }\n  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);\n}\n\nfunction utcDate(d) {\n  if (0 <= d.y && d.y < 100) {\n    var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));\n    date.setUTCFullYear(d.y);\n    return date;\n  }\n  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));\n}\n\nfunction newDate(y, m, d) {\n  return {y: y, m: m, d: d, H: 0, M: 0, S: 0, L: 0};\n}\n\nfunction formatLocale(locale) {\n  var locale_dateTime = locale.dateTime,\n      locale_date = locale.date,\n      locale_time = locale.time,\n      locale_periods = locale.periods,\n      locale_weekdays = locale.days,\n      locale_shortWeekdays = locale.shortDays,\n      locale_months = locale.months,\n      locale_shortMonths = locale.shortMonths;\n\n  var periodRe = formatRe(locale_periods),\n      periodLookup = formatLookup(locale_periods),\n      weekdayRe = formatRe(locale_weekdays),\n      weekdayLookup = formatLookup(locale_weekdays),\n      shortWeekdayRe = formatRe(locale_shortWeekdays),\n      shortWeekdayLookup = formatLookup(locale_shortWeekdays),\n      monthRe = formatRe(locale_months),\n      monthLookup = formatLookup(locale_months),\n      shortMonthRe = formatRe(locale_shortMonths),\n      shortMonthLookup = formatLookup(locale_shortMonths);\n\n  var formats = {\n    \"a\": formatShortWeekday,\n    \"A\": formatWeekday,\n    \"b\": formatShortMonth,\n    \"B\": formatMonth,\n    \"c\": null,\n    \"d\": formatDayOfMonth,\n    \"e\": formatDayOfMonth,\n    \"f\": formatMicroseconds,\n    \"H\": formatHour24,\n    \"I\": formatHour12,\n    \"j\": formatDayOfYear,\n    \"L\": formatMilliseconds,\n    \"m\": formatMonthNumber,\n    \"M\": formatMinutes,\n    \"p\": formatPeriod,\n    \"q\": formatQuarter,\n    \"Q\": formatUnixTimestamp,\n    \"s\": formatUnixTimestampSeconds,\n    \"S\": formatSeconds,\n    \"u\": formatWeekdayNumberMonday,\n    \"U\": formatWeekNumberSunday,\n    \"V\": formatWeekNumberISO,\n    \"w\": formatWeekdayNumberSunday,\n    \"W\": formatWeekNumberMonday,\n    \"x\": null,\n    \"X\": null,\n    \"y\": formatYear,\n    \"Y\": formatFullYear,\n    \"Z\": formatZone,\n    \"%\": formatLiteralPercent\n  };\n\n  var utcFormats = {\n    \"a\": formatUTCShortWeekday,\n    \"A\": formatUTCWeekday,\n    \"b\": formatUTCShortMonth,\n    \"B\": formatUTCMonth,\n    \"c\": null,\n    \"d\": formatUTCDayOfMonth,\n    \"e\": formatUTCDayOfMonth,\n    \"f\": formatUTCMicroseconds,\n    \"H\": formatUTCHour24,\n    \"I\": formatUTCHour12,\n    \"j\": formatUTCDayOfYear,\n    \"L\": formatUTCMilliseconds,\n    \"m\": formatUTCMonthNumber,\n    \"M\": formatUTCMinutes,\n    \"p\": formatUTCPeriod,\n    \"q\": formatUTCQuarter,\n    \"Q\": formatUnixTimestamp,\n    \"s\": formatUnixTimestampSeconds,\n    \"S\": formatUTCSeconds,\n    \"u\": formatUTCWeekdayNumberMonday,\n    \"U\": formatUTCWeekNumberSunday,\n    \"V\": formatUTCWeekNumberISO,\n    \"w\": formatUTCWeekdayNumberSunday,\n    \"W\": formatUTCWeekNumberMonday,\n    \"x\": null,\n    \"X\": null,\n    \"y\": formatUTCYear,\n    \"Y\": formatUTCFullYear,\n    \"Z\": formatUTCZone,\n    \"%\": formatLiteralPercent\n  };\n\n  var parses = {\n    \"a\": parseShortWeekday,\n    \"A\": parseWeekday,\n    \"b\": parseShortMonth,\n    \"B\": parseMonth,\n    \"c\": parseLocaleDateTime,\n    \"d\": parseDayOfMonth,\n    \"e\": parseDayOfMonth,\n    \"f\": parseMicroseconds,\n    \"H\": parseHour24,\n    \"I\": parseHour24,\n    \"j\": parseDayOfYear,\n    \"L\": parseMilliseconds,\n    \"m\": parseMonthNumber,\n    \"M\": parseMinutes,\n    \"p\": parsePeriod,\n    \"q\": parseQuarter,\n    \"Q\": parseUnixTimestamp,\n    \"s\": parseUnixTimestampSeconds,\n    \"S\": parseSeconds,\n    \"u\": parseWeekdayNumberMonday,\n    \"U\": parseWeekNumberSunday,\n    \"V\": parseWeekNumberISO,\n    \"w\": parseWeekdayNumberSunday,\n    \"W\": parseWeekNumberMonday,\n    \"x\": parseLocaleDate,\n    \"X\": parseLocaleTime,\n    \"y\": parseYear,\n    \"Y\": parseFullYear,\n    \"Z\": parseZone,\n    \"%\": parseLiteralPercent\n  };\n\n  // These recursive directive definitions must be deferred.\n  formats.x = newFormat(locale_date, formats);\n  formats.X = newFormat(locale_time, formats);\n  formats.c = newFormat(locale_dateTime, formats);\n  utcFormats.x = newFormat(locale_date, utcFormats);\n  utcFormats.X = newFormat(locale_time, utcFormats);\n  utcFormats.c = newFormat(locale_dateTime, utcFormats);\n\n  function newFormat(specifier, formats) {\n    return function(date) {\n      var string = [],\n          i = -1,\n          j = 0,\n          n = specifier.length,\n          c,\n          pad,\n          format;\n\n      if (!(date instanceof Date)) date = new Date(+date);\n\n      while (++i < n) {\n        if (specifier.charCodeAt(i) === 37) {\n          string.push(specifier.slice(j, i));\n          if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);\n          else pad = c === \"e\" ? \" \" : \"0\";\n          if (format = formats[c]) c = format(date, pad);\n          string.push(c);\n          j = i + 1;\n        }\n      }\n\n      string.push(specifier.slice(j, i));\n      return string.join(\"\");\n    };\n  }\n\n  function newParse(specifier, Z) {\n    return function(string) {\n      var d = newDate(1900, undefined, 1),\n          i = parseSpecifier(d, specifier, string += \"\", 0),\n          week, day;\n      if (i != string.length) return null;\n\n      // If a UNIX timestamp is specified, return it.\n      if (\"Q\" in d) return new Date(d.Q);\n      if (\"s\" in d) return new Date(d.s * 1000 + (\"L\" in d ? d.L : 0));\n\n      // If this is utcParse, never use the local timezone.\n      if (Z && !(\"Z\" in d)) d.Z = 0;\n\n      // The am-pm flag is 0 for AM, and 1 for PM.\n      if (\"p\" in d) d.H = d.H % 12 + d.p * 12;\n\n      // If the month was not specified, inherit from the quarter.\n      if (d.m === undefined) d.m = \"q\" in d ? d.q : 0;\n\n      // Convert day-of-week and week-of-year to day-of-year.\n      if (\"V\" in d) {\n        if (d.V < 1 || d.V > 53) return null;\n        if (!(\"w\" in d)) d.w = 1;\n        if (\"Z\" in d) {\n          week = utcDate(newDate(d.y, 0, 1)), day = week.getUTCDay();\n          week = day > 4 || day === 0 ? d3_time__WEBPACK_IMPORTED_MODULE_0__[\"utcMonday\"].ceil(week) : Object(d3_time__WEBPACK_IMPORTED_MODULE_0__[\"utcMonday\"])(week);\n          week = d3_time__WEBPACK_IMPORTED_MODULE_0__[\"utcDay\"].offset(week, (d.V - 1) * 7);\n          d.y = week.getUTCFullYear();\n          d.m = week.getUTCMonth();\n          d.d = week.getUTCDate() + (d.w + 6) % 7;\n        } else {\n          week = localDate(newDate(d.y, 0, 1)), day = week.getDay();\n          week = day > 4 || day === 0 ? d3_time__WEBPACK_IMPORTED_MODULE_0__[\"timeMonday\"].ceil(week) : Object(d3_time__WEBPACK_IMPORTED_MODULE_0__[\"timeMonday\"])(week);\n          week = d3_time__WEBPACK_IMPORTED_MODULE_0__[\"timeDay\"].offset(week, (d.V - 1) * 7);\n          d.y = week.getFullYear();\n          d.m = week.getMonth();\n          d.d = week.getDate() + (d.w + 6) % 7;\n        }\n      } else if (\"W\" in d || \"U\" in d) {\n        if (!(\"w\" in d)) d.w = \"u\" in d ? d.u % 7 : \"W\" in d ? 1 : 0;\n        day = \"Z\" in d ? utcDate(newDate(d.y, 0, 1)).getUTCDay() : localDate(newDate(d.y, 0, 1)).getDay();\n        d.m = 0;\n        d.d = \"W\" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;\n      }\n\n      // If a time zone is specified, all fields are interpreted as UTC and then\n      // offset according to the specified time zone.\n      if (\"Z\" in d) {\n        d.H += d.Z / 100 | 0;\n        d.M += d.Z % 100;\n        return utcDate(d);\n      }\n\n      // Otherwise, all fields are in local time.\n      return localDate(d);\n    };\n  }\n\n  function parseSpecifier(d, specifier, string, j) {\n    var i = 0,\n        n = specifier.length,\n        m = string.length,\n        c,\n        parse;\n\n    while (i < n) {\n      if (j >= m) return -1;\n      c = specifier.charCodeAt(i++);\n      if (c === 37) {\n        c = specifier.charAt(i++);\n        parse = parses[c in pads ? specifier.charAt(i++) : c];\n        if (!parse || ((j = parse(d, string, j)) < 0)) return -1;\n      } else if (c != string.charCodeAt(j++)) {\n        return -1;\n      }\n    }\n\n    return j;\n  }\n\n  function parsePeriod(d, string, i) {\n    var n = periodRe.exec(string.slice(i));\n    return n ? (d.p = periodLookup[n[0].toLowerCase()], i + n[0].length) : -1;\n  }\n\n  function parseShortWeekday(d, string, i) {\n    var n = shortWeekdayRe.exec(string.slice(i));\n    return n ? (d.w = shortWeekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;\n  }\n\n  function parseWeekday(d, string, i) {\n    var n = weekdayRe.exec(string.slice(i));\n    return n ? (d.w = weekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;\n  }\n\n  function parseShortMonth(d, string, i) {\n    var n = shortMonthRe.exec(string.slice(i));\n    return n ? (d.m = shortMonthLookup[n[0].toLowerCase()], i + n[0].length) : -1;\n  }\n\n  function parseMonth(d, string, i) {\n    var n = monthRe.exec(string.slice(i));\n    return n ? (d.m = monthLookup[n[0].toLowerCase()], i + n[0].length) : -1;\n  }\n\n  function parseLocaleDateTime(d, string, i) {\n    return parseSpecifier(d, locale_dateTime, string, i);\n  }\n\n  function parseLocaleDate(d, string, i) {\n    return parseSpecifier(d, locale_date, string, i);\n  }\n\n  function parseLocaleTime(d, string, i) {\n    return parseSpecifier(d, locale_time, string, i);\n  }\n\n  function formatShortWeekday(d) {\n    return locale_shortWeekdays[d.getDay()];\n  }\n\n  function formatWeekday(d) {\n    return locale_weekdays[d.getDay()];\n  }\n\n  function formatShortMonth(d) {\n    return locale_shortMonths[d.getMonth()];\n  }\n\n  function formatMonth(d) {\n    return locale_months[d.getMonth()];\n  }\n\n  function formatPeriod(d) {\n    return locale_periods[+(d.getHours() >= 12)];\n  }\n\n  function formatQuarter(d) {\n    return 1 + ~~(d.getMonth() / 3);\n  }\n\n  function formatUTCShortWeekday(d) {\n    return locale_shortWeekdays[d.getUTCDay()];\n  }\n\n  function formatUTCWeekday(d) {\n    return locale_weekdays[d.getUTCDay()];\n  }\n\n  function formatUTCShortMonth(d) {\n    return locale_shortMonths[d.getUTCMonth()];\n  }\n\n  function formatUTCMonth(d) {\n    return locale_months[d.getUTCMonth()];\n  }\n\n  function formatUTCPeriod(d) {\n    return locale_periods[+(d.getUTCHours() >= 12)];\n  }\n\n  function formatUTCQuarter(d) {\n    return 1 + ~~(d.getUTCMonth() / 3);\n  }\n\n  return {\n    format: function(specifier) {\n      var f = newFormat(specifier += \"\", formats);\n      f.toString = function() { return specifier; };\n      return f;\n    },\n    parse: function(specifier) {\n      var p = newParse(specifier += \"\", false);\n      p.toString = function() { return specifier; };\n      return p;\n    },\n    utcFormat: function(specifier) {\n      var f = newFormat(specifier += \"\", utcFormats);\n      f.toString = function() { return specifier; };\n      return f;\n    },\n    utcParse: function(specifier) {\n      var p = newParse(specifier += \"\", true);\n      p.toString = function() { return specifier; };\n      return p;\n    }\n  };\n}\n\nvar pads = {\"-\": \"\", \"_\": \" \", \"0\": \"0\"},\n    numberRe = /^\\s*\\d+/, // note: ignores next directive\n    percentRe = /^%/,\n    requoteRe = /[\\\\^$*+?|[\\]().{}]/g;\n\nfunction pad(value, fill, width) {\n  var sign = value < 0 ? \"-\" : \"\",\n      string = (sign ? -value : value) + \"\",\n      length = string.length;\n  return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);\n}\n\nfunction requote(s) {\n  return s.replace(requoteRe, \"\\\\$&\");\n}\n\nfunction formatRe(names) {\n  return new RegExp(\"^(?:\" + names.map(requote).join(\"|\") + \")\", \"i\");\n}\n\nfunction formatLookup(names) {\n  var map = {}, i = -1, n = names.length;\n  while (++i < n) map[names[i].toLowerCase()] = i;\n  return map;\n}\n\nfunction parseWeekdayNumberSunday(d, string, i) {\n  var n = numberRe.exec(string.slice(i, i + 1));\n  return n ? (d.w = +n[0], i + n[0].length) : -1;\n}\n\nfunction parseWeekdayNumberMonday(d, string, i) {\n  var n = numberRe.exec(string.slice(i, i + 1));\n  return n ? (d.u = +n[0], i + n[0].length) : -1;\n}\n\nfunction parseWeekNumberSunday(d, string, i) {\n  var n = numberRe.exec(string.slice(i, i + 2));\n  return n ? (d.U = +n[0], i + n[0].length) : -1;\n}\n\nfunction parseWeekNumberISO(d, string, i) {\n  var n = numberRe.exec(string.slice(i, i + 2));\n  return n ? (d.V = +n[0], i + n[0].length) : -1;\n}\n\nfunction parseWeekNumberMonday(d, string, i) {\n  var n = numberRe.exec(string.slice(i, i + 2));\n  return n ? (d.W = +n[0], i + n[0].length) : -1;\n}\n\nfunction parseFullYear(d, string, i) {\n  var n = numberRe.exec(string.slice(i, i + 4));\n  return n ? (d.y = +n[0], i + n[0].length) : -1;\n}\n\nfunction parseYear(d, string, i) {\n  var n = numberRe.exec(string.slice(i, i + 2));\n  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;\n}\n\nfunction parseZone(d, string, i) {\n  var n = /^(Z)|([+-]\\d\\d)(?::?(\\d\\d))?/.exec(string.slice(i, i + 6));\n  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || \"00\")), i + n[0].length) : -1;\n}\n\nfunction parseQuarter(d, string, i) {\n  var n = numberRe.exec(string.slice(i, i + 1));\n  return n ? (d.q = n[0] * 3 - 3, i + n[0].length) : -1;\n}\n\nfunction parseMonthNumber(d, string, i) {\n  var n = numberRe.exec(string.slice(i, i + 2));\n  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;\n}\n\nfunction parseDayOfMonth(d, string, i) {\n  var n = numberRe.exec(string.slice(i, i + 2));\n  return n ? (d.d = +n[0], i + n[0].length) : -1;\n}\n\nfunction parseDayOfYear(d, string, i) {\n  var n = numberRe.exec(string.slice(i, i + 3));\n  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;\n}\n\nfunction parseHour24(d, string, i) {\n  var n = numberRe.exec(string.slice(i, i + 2));\n  return n ? (d.H = +n[0], i + n[0].length) : -1;\n}\n\nfunction parseMinutes(d, string, i) {\n  var n = numberRe.exec(string.slice(i, i + 2));\n  return n ? (d.M = +n[0], i + n[0].length) : -1;\n}\n\nfunction parseSeconds(d, string, i) {\n  var n = numberRe.exec(string.slice(i, i + 2));\n  return n ? (d.S = +n[0], i + n[0].length) : -1;\n}\n\nfunction parseMilliseconds(d, string, i) {\n  var n = numberRe.exec(string.slice(i, i + 3));\n  return n ? (d.L = +n[0], i + n[0].length) : -1;\n}\n\nfunction parseMicroseconds(d, string, i) {\n  var n = numberRe.exec(string.slice(i, i + 6));\n  return n ? (d.L = Math.floor(n[0] / 1000), i + n[0].length) : -1;\n}\n\nfunction parseLiteralPercent(d, string, i) {\n  var n = percentRe.exec(string.slice(i, i + 1));\n  return n ? i + n[0].length : -1;\n}\n\nfunction parseUnixTimestamp(d, string, i) {\n  var n = numberRe.exec(string.slice(i));\n  return n ? (d.Q = +n[0], i + n[0].length) : -1;\n}\n\nfunction parseUnixTimestampSeconds(d, string, i) {\n  var n = numberRe.exec(string.slice(i));\n  return n ? (d.s = +n[0], i + n[0].length) : -1;\n}\n\nfunction formatDayOfMonth(d, p) {\n  return pad(d.getDate(), p, 2);\n}\n\nfunction formatHour24(d, p) {\n  return pad(d.getHours(), p, 2);\n}\n\nfunction formatHour12(d, p) {\n  return pad(d.getHours() % 12 || 12, p, 2);\n}\n\nfunction formatDayOfYear(d, p) {\n  return pad(1 + d3_time__WEBPACK_IMPORTED_MODULE_0__[\"timeDay\"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__[\"timeYear\"])(d), d), p, 3);\n}\n\nfunction formatMilliseconds(d, p) {\n  return pad(d.getMilliseconds(), p, 3);\n}\n\nfunction formatMicroseconds(d, p) {\n  return formatMilliseconds(d, p) + \"000\";\n}\n\nfunction formatMonthNumber(d, p) {\n  return pad(d.getMonth() + 1, p, 2);\n}\n\nfunction formatMinutes(d, p) {\n  return pad(d.getMinutes(), p, 2);\n}\n\nfunction formatSeconds(d, p) {\n  return pad(d.getSeconds(), p, 2);\n}\n\nfunction formatWeekdayNumberMonday(d) {\n  var day = d.getDay();\n  return day === 0 ? 7 : day;\n}\n\nfunction formatWeekNumberSunday(d, p) {\n  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__[\"timeSunday\"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__[\"timeYear\"])(d) - 1, d), p, 2);\n}\n\nfunction formatWeekNumberISO(d, p) {\n  var day = d.getDay();\n  d = (day >= 4 || day === 0) ? Object(d3_time__WEBPACK_IMPORTED_MODULE_0__[\"timeThursday\"])(d) : d3_time__WEBPACK_IMPORTED_MODULE_0__[\"timeThursday\"].ceil(d);\n  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__[\"timeThursday\"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__[\"timeYear\"])(d), d) + (Object(d3_time__WEBPACK_IMPORTED_MODULE_0__[\"timeYear\"])(d).getDay() === 4), p, 2);\n}\n\nfunction formatWeekdayNumberSunday(d) {\n  return d.getDay();\n}\n\nfunction formatWeekNumberMonday(d, p) {\n  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__[\"timeMonday\"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__[\"timeYear\"])(d) - 1, d), p, 2);\n}\n\nfunction formatYear(d, p) {\n  return pad(d.getFullYear() % 100, p, 2);\n}\n\nfunction formatFullYear(d, p) {\n  return pad(d.getFullYear() % 10000, p, 4);\n}\n\nfunction formatZone(d) {\n  var z = d.getTimezoneOffset();\n  return (z > 0 ? \"-\" : (z *= -1, \"+\"))\n      + pad(z / 60 | 0, \"0\", 2)\n      + pad(z % 60, \"0\", 2);\n}\n\nfunction formatUTCDayOfMonth(d, p) {\n  return pad(d.getUTCDate(), p, 2);\n}\n\nfunction formatUTCHour24(d, p) {\n  return pad(d.getUTCHours(), p, 2);\n}\n\nfunction formatUTCHour12(d, p) {\n  return pad(d.getUTCHours() % 12 || 12, p, 2);\n}\n\nfunction formatUTCDayOfYear(d, p) {\n  return pad(1 + d3_time__WEBPACK_IMPORTED_MODULE_0__[\"utcDay\"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__[\"utcYear\"])(d), d), p, 3);\n}\n\nfunction formatUTCMilliseconds(d, p) {\n  return pad(d.getUTCMilliseconds(), p, 3);\n}\n\nfunction formatUTCMicroseconds(d, p) {\n  return formatUTCMilliseconds(d, p) + \"000\";\n}\n\nfunction formatUTCMonthNumber(d, p) {\n  return pad(d.getUTCMonth() + 1, p, 2);\n}\n\nfunction formatUTCMinutes(d, p) {\n  return pad(d.getUTCMinutes(), p, 2);\n}\n\nfunction formatUTCSeconds(d, p) {\n  return pad(d.getUTCSeconds(), p, 2);\n}\n\nfunction formatUTCWeekdayNumberMonday(d) {\n  var dow = d.getUTCDay();\n  return dow === 0 ? 7 : dow;\n}\n\nfunction formatUTCWeekNumberSunday(d, p) {\n  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__[\"utcSunday\"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__[\"utcYear\"])(d) - 1, d), p, 2);\n}\n\nfunction formatUTCWeekNumberISO(d, p) {\n  var day = d.getUTCDay();\n  d = (day >= 4 || day === 0) ? Object(d3_time__WEBPACK_IMPORTED_MODULE_0__[\"utcThursday\"])(d) : d3_time__WEBPACK_IMPORTED_MODULE_0__[\"utcThursday\"].ceil(d);\n  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__[\"utcThursday\"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__[\"utcYear\"])(d), d) + (Object(d3_time__WEBPACK_IMPORTED_MODULE_0__[\"utcYear\"])(d).getUTCDay() === 4), p, 2);\n}\n\nfunction formatUTCWeekdayNumberSunday(d) {\n  return d.getUTCDay();\n}\n\nfunction formatUTCWeekNumberMonday(d, p) {\n  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__[\"utcMonday\"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__[\"utcYear\"])(d) - 1, d), p, 2);\n}\n\nfunction formatUTCYear(d, p) {\n  return pad(d.getUTCFullYear() % 100, p, 2);\n}\n\nfunction formatUTCFullYear(d, p) {\n  return pad(d.getUTCFullYear() % 10000, p, 4);\n}\n\nfunction formatUTCZone() {\n  return \"+0000\";\n}\n\nfunction formatLiteralPercent() {\n  return \"%\";\n}\n\nfunction formatUnixTimestamp(d) {\n  return +d;\n}\n\nfunction formatUnixTimestampSeconds(d) {\n  return Math.floor(+d / 1000);\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-time-format/src/locale.js?");

/***/ }),

/***/ "./node_modules/d3-time/src/day.js":
/*!*****************************************!*\
  !*** ./node_modules/d3-time/src/day.js ***!
  \*****************************************/
/*! exports provided: default, days */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"days\", function() { return days; });\n/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ \"./node_modules/d3-time/src/interval.js\");\n/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ \"./node_modules/d3-time/src/duration.js\");\n\n\n\nvar day = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function(date) {\n  date.setHours(0, 0, 0, 0);\n}, function(date, step) {\n  date.setDate(date.getDate() + step);\n}, function(start, end) {\n  return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * _duration_js__WEBPACK_IMPORTED_MODULE_1__[\"durationMinute\"]) / _duration_js__WEBPACK_IMPORTED_MODULE_1__[\"durationDay\"];\n}, function(date) {\n  return date.getDate() - 1;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (day);\nvar days = day.range;\n\n\n//# sourceURL=webpack:///./node_modules/d3-time/src/day.js?");

/***/ }),

/***/ "./node_modules/d3-time/src/duration.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-time/src/duration.js ***!
  \**********************************************/
/*! exports provided: durationSecond, durationMinute, durationHour, durationDay, durationWeek */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"durationSecond\", function() { return durationSecond; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"durationMinute\", function() { return durationMinute; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"durationHour\", function() { return durationHour; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"durationDay\", function() { return durationDay; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"durationWeek\", function() { return durationWeek; });\nvar durationSecond = 1e3;\nvar durationMinute = 6e4;\nvar durationHour = 36e5;\nvar durationDay = 864e5;\nvar durationWeek = 6048e5;\n\n\n//# sourceURL=webpack:///./node_modules/d3-time/src/duration.js?");

/***/ }),

/***/ "./node_modules/d3-time/src/hour.js":
/*!******************************************!*\
  !*** ./node_modules/d3-time/src/hour.js ***!
  \******************************************/
/*! exports provided: default, hours */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hours\", function() { return hours; });\n/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ \"./node_modules/d3-time/src/interval.js\");\n/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ \"./node_modules/d3-time/src/duration.js\");\n\n\n\nvar hour = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function(date) {\n  date.setTime(date - date.getMilliseconds() - date.getSeconds() * _duration_js__WEBPACK_IMPORTED_MODULE_1__[\"durationSecond\"] - date.getMinutes() * _duration_js__WEBPACK_IMPORTED_MODULE_1__[\"durationMinute\"]);\n}, function(date, step) {\n  date.setTime(+date + step * _duration_js__WEBPACK_IMPORTED_MODULE_1__[\"durationHour\"]);\n}, function(start, end) {\n  return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__[\"durationHour\"];\n}, function(date) {\n  return date.getHours();\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (hour);\nvar hours = hour.range;\n\n\n//# sourceURL=webpack:///./node_modules/d3-time/src/hour.js?");

/***/ }),

/***/ "./node_modules/d3-time/src/index.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-time/src/index.js ***!
  \*******************************************/
/*! exports provided: timeInterval, timeMillisecond, timeMilliseconds, utcMillisecond, utcMilliseconds, timeSecond, timeSeconds, utcSecond, utcSeconds, timeMinute, timeMinutes, timeHour, timeHours, timeDay, timeDays, timeWeek, timeWeeks, timeSunday, timeSundays, timeMonday, timeMondays, timeTuesday, timeTuesdays, timeWednesday, timeWednesdays, timeThursday, timeThursdays, timeFriday, timeFridays, timeSaturday, timeSaturdays, timeMonth, timeMonths, timeYear, timeYears, utcMinute, utcMinutes, utcHour, utcHours, utcDay, utcDays, utcWeek, utcWeeks, utcSunday, utcSundays, utcMonday, utcMondays, utcTuesday, utcTuesdays, utcWednesday, utcWednesdays, utcThursday, utcThursdays, utcFriday, utcFridays, utcSaturday, utcSaturdays, utcMonth, utcMonths, utcYear, utcYears */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ \"./node_modules/d3-time/src/interval.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"timeInterval\", function() { return _interval_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _millisecond_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./millisecond.js */ \"./node_modules/d3-time/src/millisecond.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"timeMillisecond\", function() { return _millisecond_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"timeMilliseconds\", function() { return _millisecond_js__WEBPACK_IMPORTED_MODULE_1__[\"milliseconds\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"utcMillisecond\", function() { return _millisecond_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"utcMilliseconds\", function() { return _millisecond_js__WEBPACK_IMPORTED_MODULE_1__[\"milliseconds\"]; });\n\n/* harmony import */ var _second_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./second.js */ \"./node_modules/d3-time/src/second.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"timeSecond\", function() { return _second_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"timeSeconds\", function() { return _second_js__WEBPACK_IMPORTED_MODULE_2__[\"seconds\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"utcSecond\", function() { return _second_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"utcSeconds\", function() { return _second_js__WEBPACK_IMPORTED_MODULE_2__[\"seconds\"]; });\n\n/* harmony import */ var _minute_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./minute.js */ \"./node_modules/d3-time/src/minute.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"timeMinute\", function() { return _minute_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"timeMinutes\", function() { return _minute_js__WEBPACK_IMPORTED_MODULE_3__[\"minutes\"]; });\n\n/* harmony import */ var _hour_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hour.js */ \"./node_modules/d3-time/src/hour.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"timeHour\", function() { return _hour_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"timeHours\", function() { return _hour_js__WEBPACK_IMPORTED_MODULE_4__[\"hours\"]; });\n\n/* harmony import */ var _day_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./day.js */ \"./node_modules/d3-time/src/day.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"timeDay\", function() { return _day_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"timeDays\", function() { return _day_js__WEBPACK_IMPORTED_MODULE_5__[\"days\"]; });\n\n/* harmony import */ var _week_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./week.js */ \"./node_modules/d3-time/src/week.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"timeWeek\", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__[\"sunday\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"timeWeeks\", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__[\"sundays\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"timeSunday\", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__[\"sunday\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"timeSundays\", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__[\"sundays\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"timeMonday\", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__[\"monday\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"timeMondays\", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__[\"mondays\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"timeTuesday\", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__[\"tuesday\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"timeTuesdays\", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__[\"tuesdays\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"timeWednesday\", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__[\"wednesday\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"timeWednesdays\", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__[\"wednesdays\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"timeThursday\", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__[\"thursday\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"timeThursdays\", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__[\"thursdays\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"timeFriday\", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__[\"friday\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"timeFridays\", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__[\"fridays\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"timeSaturday\", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__[\"saturday\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"timeSaturdays\", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__[\"saturdays\"]; });\n\n/* harmony import */ var _month_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./month.js */ \"./node_modules/d3-time/src/month.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"timeMonth\", function() { return _month_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"timeMonths\", function() { return _month_js__WEBPACK_IMPORTED_MODULE_7__[\"months\"]; });\n\n/* harmony import */ var _year_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./year.js */ \"./node_modules/d3-time/src/year.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"timeYear\", function() { return _year_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"timeYears\", function() { return _year_js__WEBPACK_IMPORTED_MODULE_8__[\"years\"]; });\n\n/* harmony import */ var _utcMinute_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utcMinute.js */ \"./node_modules/d3-time/src/utcMinute.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"utcMinute\", function() { return _utcMinute_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"utcMinutes\", function() { return _utcMinute_js__WEBPACK_IMPORTED_MODULE_9__[\"utcMinutes\"]; });\n\n/* harmony import */ var _utcHour_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utcHour.js */ \"./node_modules/d3-time/src/utcHour.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"utcHour\", function() { return _utcHour_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"utcHours\", function() { return _utcHour_js__WEBPACK_IMPORTED_MODULE_10__[\"utcHours\"]; });\n\n/* harmony import */ var _utcDay_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utcDay.js */ \"./node_modules/d3-time/src/utcDay.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"utcDay\", function() { return _utcDay_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"utcDays\", function() { return _utcDay_js__WEBPACK_IMPORTED_MODULE_11__[\"utcDays\"]; });\n\n/* harmony import */ var _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utcWeek.js */ \"./node_modules/d3-time/src/utcWeek.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"utcWeek\", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__[\"utcSunday\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"utcWeeks\", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__[\"utcSundays\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"utcSunday\", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__[\"utcSunday\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"utcSundays\", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__[\"utcSundays\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"utcMonday\", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__[\"utcMonday\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"utcMondays\", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__[\"utcMondays\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"utcTuesday\", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__[\"utcTuesday\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"utcTuesdays\", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__[\"utcTuesdays\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"utcWednesday\", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__[\"utcWednesday\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"utcWednesdays\", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__[\"utcWednesdays\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"utcThursday\", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__[\"utcThursday\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"utcThursdays\", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__[\"utcThursdays\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"utcFriday\", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__[\"utcFriday\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"utcFridays\", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__[\"utcFridays\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"utcSaturday\", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__[\"utcSaturday\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"utcSaturdays\", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__[\"utcSaturdays\"]; });\n\n/* harmony import */ var _utcMonth_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utcMonth.js */ \"./node_modules/d3-time/src/utcMonth.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"utcMonth\", function() { return _utcMonth_js__WEBPACK_IMPORTED_MODULE_13__[\"default\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"utcMonths\", function() { return _utcMonth_js__WEBPACK_IMPORTED_MODULE_13__[\"utcMonths\"]; });\n\n/* harmony import */ var _utcYear_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utcYear.js */ \"./node_modules/d3-time/src/utcYear.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"utcYear\", function() { return _utcYear_js__WEBPACK_IMPORTED_MODULE_14__[\"default\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"utcYears\", function() { return _utcYear_js__WEBPACK_IMPORTED_MODULE_14__[\"utcYears\"]; });\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./node_modules/d3-time/src/index.js?");

/***/ }),

/***/ "./node_modules/d3-time/src/interval.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-time/src/interval.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return newInterval; });\nvar t0 = new Date,\n    t1 = new Date;\n\nfunction newInterval(floori, offseti, count, field) {\n\n  function interval(date) {\n    return floori(date = arguments.length === 0 ? new Date : new Date(+date)), date;\n  }\n\n  interval.floor = function(date) {\n    return floori(date = new Date(+date)), date;\n  };\n\n  interval.ceil = function(date) {\n    return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;\n  };\n\n  interval.round = function(date) {\n    var d0 = interval(date),\n        d1 = interval.ceil(date);\n    return date - d0 < d1 - date ? d0 : d1;\n  };\n\n  interval.offset = function(date, step) {\n    return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;\n  };\n\n  interval.range = function(start, stop, step) {\n    var range = [], previous;\n    start = interval.ceil(start);\n    step = step == null ? 1 : Math.floor(step);\n    if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date\n    do range.push(previous = new Date(+start)), offseti(start, step), floori(start);\n    while (previous < start && start < stop);\n    return range;\n  };\n\n  interval.filter = function(test) {\n    return newInterval(function(date) {\n      if (date >= date) while (floori(date), !test(date)) date.setTime(date - 1);\n    }, function(date, step) {\n      if (date >= date) {\n        if (step < 0) while (++step <= 0) {\n          while (offseti(date, -1), !test(date)) {} // eslint-disable-line no-empty\n        } else while (--step >= 0) {\n          while (offseti(date, +1), !test(date)) {} // eslint-disable-line no-empty\n        }\n      }\n    });\n  };\n\n  if (count) {\n    interval.count = function(start, end) {\n      t0.setTime(+start), t1.setTime(+end);\n      floori(t0), floori(t1);\n      return Math.floor(count(t0, t1));\n    };\n\n    interval.every = function(step) {\n      step = Math.floor(step);\n      return !isFinite(step) || !(step > 0) ? null\n          : !(step > 1) ? interval\n          : interval.filter(field\n              ? function(d) { return field(d) % step === 0; }\n              : function(d) { return interval.count(0, d) % step === 0; });\n    };\n  }\n\n  return interval;\n}\n\n\n//# sourceURL=webpack:///./node_modules/d3-time/src/interval.js?");

/***/ }),

/***/ "./node_modules/d3-time/src/millisecond.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-time/src/millisecond.js ***!
  \*************************************************/
/*! exports provided: default, milliseconds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"milliseconds\", function() { return milliseconds; });\n/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ \"./node_modules/d3-time/src/interval.js\");\n\n\nvar millisecond = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function() {\n  // noop\n}, function(date, step) {\n  date.setTime(+date + step);\n}, function(start, end) {\n  return end - start;\n});\n\n// An optimized implementation for this simple case.\nmillisecond.every = function(k) {\n  k = Math.floor(k);\n  if (!isFinite(k) || !(k > 0)) return null;\n  if (!(k > 1)) return millisecond;\n  return Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function(date) {\n    date.setTime(Math.floor(date / k) * k);\n  }, function(date, step) {\n    date.setTime(+date + step * k);\n  }, function(start, end) {\n    return (end - start) / k;\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (millisecond);\nvar milliseconds = millisecond.range;\n\n\n//# sourceURL=webpack:///./node_modules/d3-time/src/millisecond.js?");

/***/ }),

/***/ "./node_modules/d3-time/src/minute.js":
/*!********************************************!*\
  !*** ./node_modules/d3-time/src/minute.js ***!
  \********************************************/
/*! exports provided: default, minutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"minutes\", function() { return minutes; });\n/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ \"./node_modules/d3-time/src/interval.js\");\n/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ \"./node_modules/d3-time/src/duration.js\");\n\n\n\nvar minute = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function(date) {\n  date.setTime(date - date.getMilliseconds() - date.getSeconds() * _duration_js__WEBPACK_IMPORTED_MODULE_1__[\"durationSecond\"]);\n}, function(date, step) {\n  date.setTime(+date + step * _duration_js__WEBPACK_IMPORTED_MODULE_1__[\"durationMinute\"]);\n}, function(start, end) {\n  return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__[\"durationMinute\"];\n}, function(date) {\n  return date.getMinutes();\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (minute);\nvar minutes = minute.range;\n\n\n//# sourceURL=webpack:///./node_modules/d3-time/src/minute.js?");

/***/ }),

/***/ "./node_modules/d3-time/src/month.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-time/src/month.js ***!
  \*******************************************/
/*! exports provided: default, months */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"months\", function() { return months; });\n/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ \"./node_modules/d3-time/src/interval.js\");\n\n\nvar month = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function(date) {\n  date.setDate(1);\n  date.setHours(0, 0, 0, 0);\n}, function(date, step) {\n  date.setMonth(date.getMonth() + step);\n}, function(start, end) {\n  return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;\n}, function(date) {\n  return date.getMonth();\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (month);\nvar months = month.range;\n\n\n//# sourceURL=webpack:///./node_modules/d3-time/src/month.js?");

/***/ }),

/***/ "./node_modules/d3-time/src/second.js":
/*!********************************************!*\
  !*** ./node_modules/d3-time/src/second.js ***!
  \********************************************/
/*! exports provided: default, seconds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"seconds\", function() { return seconds; });\n/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ \"./node_modules/d3-time/src/interval.js\");\n/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ \"./node_modules/d3-time/src/duration.js\");\n\n\n\nvar second = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function(date) {\n  date.setTime(date - date.getMilliseconds());\n}, function(date, step) {\n  date.setTime(+date + step * _duration_js__WEBPACK_IMPORTED_MODULE_1__[\"durationSecond\"]);\n}, function(start, end) {\n  return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__[\"durationSecond\"];\n}, function(date) {\n  return date.getUTCSeconds();\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (second);\nvar seconds = second.range;\n\n\n//# sourceURL=webpack:///./node_modules/d3-time/src/second.js?");

/***/ }),

/***/ "./node_modules/d3-time/src/utcDay.js":
/*!********************************************!*\
  !*** ./node_modules/d3-time/src/utcDay.js ***!
  \********************************************/
/*! exports provided: default, utcDays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"utcDays\", function() { return utcDays; });\n/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ \"./node_modules/d3-time/src/interval.js\");\n/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ \"./node_modules/d3-time/src/duration.js\");\n\n\n\nvar utcDay = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function(date) {\n  date.setUTCHours(0, 0, 0, 0);\n}, function(date, step) {\n  date.setUTCDate(date.getUTCDate() + step);\n}, function(start, end) {\n  return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__[\"durationDay\"];\n}, function(date) {\n  return date.getUTCDate() - 1;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (utcDay);\nvar utcDays = utcDay.range;\n\n\n//# sourceURL=webpack:///./node_modules/d3-time/src/utcDay.js?");

/***/ }),

/***/ "./node_modules/d3-time/src/utcHour.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-time/src/utcHour.js ***!
  \*********************************************/
/*! exports provided: default, utcHours */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"utcHours\", function() { return utcHours; });\n/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ \"./node_modules/d3-time/src/interval.js\");\n/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ \"./node_modules/d3-time/src/duration.js\");\n\n\n\nvar utcHour = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function(date) {\n  date.setUTCMinutes(0, 0, 0);\n}, function(date, step) {\n  date.setTime(+date + step * _duration_js__WEBPACK_IMPORTED_MODULE_1__[\"durationHour\"]);\n}, function(start, end) {\n  return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__[\"durationHour\"];\n}, function(date) {\n  return date.getUTCHours();\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (utcHour);\nvar utcHours = utcHour.range;\n\n\n//# sourceURL=webpack:///./node_modules/d3-time/src/utcHour.js?");

/***/ }),

/***/ "./node_modules/d3-time/src/utcMinute.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-time/src/utcMinute.js ***!
  \***********************************************/
/*! exports provided: default, utcMinutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"utcMinutes\", function() { return utcMinutes; });\n/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ \"./node_modules/d3-time/src/interval.js\");\n/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ \"./node_modules/d3-time/src/duration.js\");\n\n\n\nvar utcMinute = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function(date) {\n  date.setUTCSeconds(0, 0);\n}, function(date, step) {\n  date.setTime(+date + step * _duration_js__WEBPACK_IMPORTED_MODULE_1__[\"durationMinute\"]);\n}, function(start, end) {\n  return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__[\"durationMinute\"];\n}, function(date) {\n  return date.getUTCMinutes();\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (utcMinute);\nvar utcMinutes = utcMinute.range;\n\n\n//# sourceURL=webpack:///./node_modules/d3-time/src/utcMinute.js?");

/***/ }),

/***/ "./node_modules/d3-time/src/utcMonth.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-time/src/utcMonth.js ***!
  \**********************************************/
/*! exports provided: default, utcMonths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"utcMonths\", function() { return utcMonths; });\n/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ \"./node_modules/d3-time/src/interval.js\");\n\n\nvar utcMonth = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function(date) {\n  date.setUTCDate(1);\n  date.setUTCHours(0, 0, 0, 0);\n}, function(date, step) {\n  date.setUTCMonth(date.getUTCMonth() + step);\n}, function(start, end) {\n  return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;\n}, function(date) {\n  return date.getUTCMonth();\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (utcMonth);\nvar utcMonths = utcMonth.range;\n\n\n//# sourceURL=webpack:///./node_modules/d3-time/src/utcMonth.js?");

/***/ }),

/***/ "./node_modules/d3-time/src/utcWeek.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-time/src/utcWeek.js ***!
  \*********************************************/
/*! exports provided: utcSunday, utcMonday, utcTuesday, utcWednesday, utcThursday, utcFriday, utcSaturday, utcSundays, utcMondays, utcTuesdays, utcWednesdays, utcThursdays, utcFridays, utcSaturdays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"utcSunday\", function() { return utcSunday; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"utcMonday\", function() { return utcMonday; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"utcTuesday\", function() { return utcTuesday; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"utcWednesday\", function() { return utcWednesday; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"utcThursday\", function() { return utcThursday; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"utcFriday\", function() { return utcFriday; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"utcSaturday\", function() { return utcSaturday; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"utcSundays\", function() { return utcSundays; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"utcMondays\", function() { return utcMondays; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"utcTuesdays\", function() { return utcTuesdays; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"utcWednesdays\", function() { return utcWednesdays; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"utcThursdays\", function() { return utcThursdays; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"utcFridays\", function() { return utcFridays; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"utcSaturdays\", function() { return utcSaturdays; });\n/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ \"./node_modules/d3-time/src/interval.js\");\n/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ \"./node_modules/d3-time/src/duration.js\");\n\n\n\nfunction utcWeekday(i) {\n  return Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function(date) {\n    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);\n    date.setUTCHours(0, 0, 0, 0);\n  }, function(date, step) {\n    date.setUTCDate(date.getUTCDate() + step * 7);\n  }, function(start, end) {\n    return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__[\"durationWeek\"];\n  });\n}\n\nvar utcSunday = utcWeekday(0);\nvar utcMonday = utcWeekday(1);\nvar utcTuesday = utcWeekday(2);\nvar utcWednesday = utcWeekday(3);\nvar utcThursday = utcWeekday(4);\nvar utcFriday = utcWeekday(5);\nvar utcSaturday = utcWeekday(6);\n\nvar utcSundays = utcSunday.range;\nvar utcMondays = utcMonday.range;\nvar utcTuesdays = utcTuesday.range;\nvar utcWednesdays = utcWednesday.range;\nvar utcThursdays = utcThursday.range;\nvar utcFridays = utcFriday.range;\nvar utcSaturdays = utcSaturday.range;\n\n\n//# sourceURL=webpack:///./node_modules/d3-time/src/utcWeek.js?");

/***/ }),

/***/ "./node_modules/d3-time/src/utcYear.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-time/src/utcYear.js ***!
  \*********************************************/
/*! exports provided: default, utcYears */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"utcYears\", function() { return utcYears; });\n/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ \"./node_modules/d3-time/src/interval.js\");\n\n\nvar utcYear = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function(date) {\n  date.setUTCMonth(0, 1);\n  date.setUTCHours(0, 0, 0, 0);\n}, function(date, step) {\n  date.setUTCFullYear(date.getUTCFullYear() + step);\n}, function(start, end) {\n  return end.getUTCFullYear() - start.getUTCFullYear();\n}, function(date) {\n  return date.getUTCFullYear();\n});\n\n// An optimized implementation for this simple case.\nutcYear.every = function(k) {\n  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function(date) {\n    date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);\n    date.setUTCMonth(0, 1);\n    date.setUTCHours(0, 0, 0, 0);\n  }, function(date, step) {\n    date.setUTCFullYear(date.getUTCFullYear() + step * k);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (utcYear);\nvar utcYears = utcYear.range;\n\n\n//# sourceURL=webpack:///./node_modules/d3-time/src/utcYear.js?");

/***/ }),

/***/ "./node_modules/d3-time/src/week.js":
/*!******************************************!*\
  !*** ./node_modules/d3-time/src/week.js ***!
  \******************************************/
/*! exports provided: sunday, monday, tuesday, wednesday, thursday, friday, saturday, sundays, mondays, tuesdays, wednesdays, thursdays, fridays, saturdays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sunday\", function() { return sunday; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"monday\", function() { return monday; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tuesday\", function() { return tuesday; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wednesday\", function() { return wednesday; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"thursday\", function() { return thursday; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"friday\", function() { return friday; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saturday\", function() { return saturday; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sundays\", function() { return sundays; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mondays\", function() { return mondays; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tuesdays\", function() { return tuesdays; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"wednesdays\", function() { return wednesdays; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"thursdays\", function() { return thursdays; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fridays\", function() { return fridays; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saturdays\", function() { return saturdays; });\n/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ \"./node_modules/d3-time/src/interval.js\");\n/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ \"./node_modules/d3-time/src/duration.js\");\n\n\n\nfunction weekday(i) {\n  return Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function(date) {\n    date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);\n    date.setHours(0, 0, 0, 0);\n  }, function(date, step) {\n    date.setDate(date.getDate() + step * 7);\n  }, function(start, end) {\n    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * _duration_js__WEBPACK_IMPORTED_MODULE_1__[\"durationMinute\"]) / _duration_js__WEBPACK_IMPORTED_MODULE_1__[\"durationWeek\"];\n  });\n}\n\nvar sunday = weekday(0);\nvar monday = weekday(1);\nvar tuesday = weekday(2);\nvar wednesday = weekday(3);\nvar thursday = weekday(4);\nvar friday = weekday(5);\nvar saturday = weekday(6);\n\nvar sundays = sunday.range;\nvar mondays = monday.range;\nvar tuesdays = tuesday.range;\nvar wednesdays = wednesday.range;\nvar thursdays = thursday.range;\nvar fridays = friday.range;\nvar saturdays = saturday.range;\n\n\n//# sourceURL=webpack:///./node_modules/d3-time/src/week.js?");

/***/ }),

/***/ "./node_modules/d3-time/src/year.js":
/*!******************************************!*\
  !*** ./node_modules/d3-time/src/year.js ***!
  \******************************************/
/*! exports provided: default, years */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"years\", function() { return years; });\n/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ \"./node_modules/d3-time/src/interval.js\");\n\n\nvar year = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function(date) {\n  date.setMonth(0, 1);\n  date.setHours(0, 0, 0, 0);\n}, function(date, step) {\n  date.setFullYear(date.getFullYear() + step);\n}, function(start, end) {\n  return end.getFullYear() - start.getFullYear();\n}, function(date) {\n  return date.getFullYear();\n});\n\n// An optimized implementation for this simple case.\nyear.every = function(k) {\n  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function(date) {\n    date.setFullYear(Math.floor(date.getFullYear() / k) * k);\n    date.setMonth(0, 1);\n    date.setHours(0, 0, 0, 0);\n  }, function(date, step) {\n    date.setFullYear(date.getFullYear() + step * k);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (year);\nvar years = year.range;\n\n\n//# sourceURL=webpack:///./node_modules/d3-time/src/year.js?");

/***/ }),

/***/ "./node_modules/simple-complex/src/Complex.js":
/*!****************************************************!*\
  !*** ./node_modules/simple-complex/src/Complex.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { roundNdecimals } = __webpack_require__(/*! ./helpers */ \"./node_modules/simple-complex/src/helpers.js\")\n\nclass Complex {\n  constructor(a = 0, b = 0) {\n    if (a instanceof Complex) {\n      this.real = a.real\n      this.imaginary = a.imaginary\n    } else {\n      this.real = a\n      this.imaginary = b\n    }\n  }\n\n  static fromAngle(modulus, argument) {\n    return new Complex(\n      modulus * Math.cos(argument),\n      modulus * Math.sin(argument)\n    )\n  }\n\n  clone() {\n    const clone = new Complex(this.real, this.imaginary)\n    return clone\n  }\n\n  set(a, b) {\n    this.real = a\n    this.imaginary = b\n  }\n\n  static sum(a, b) {\n    const α = new Complex(a)\n    const β = new Complex(b)\n    return new Complex(α.real + β.real, α.imaginary + β.imaginary)\n  }\n\n  add(z) {\n    const result = Complex.sum(this, z)\n    this.set(result.real, result.imaginary)\n  }\n\n  static multiply(z1, z2) {\n    const ζ1 = new Complex(z1)\n    const ζ2 = new Complex(z2)\n    const real = ζ1.real * ζ2.real - ζ1.imaginary * ζ2.imaginary\n    const imaginary = ζ1.real * ζ2.imaginary + ζ1.imaginary * ζ2.real\n    return new Complex(real, imaginary)\n  }\n\n  multiplyBy(z) {\n    const result = Complex.multiply(this, z)\n    this.set(result.real, result.imaginary)\n  }\n\n  rotate(angle) {\n    const a = Math.cos(angle)\n    const b = Math.sin(angle)\n    const z = new Complex(a, b)\n    this.multiplyBy(z)\n  }\n\n  get modulus() {\n    return Math.sqrt(this.real ** 2 + this.imaginary ** 2)\n  }\n\n  get argument() {\n    return Math.atan2(this.imaginary, this.real)\n  }\n\n  set modulus(ρ) {\n    if (ρ < 0) {\n      this.rotate(Math.PI)\n      this.set(-ρ * Math.cos(this.argument), -ρ * Math.sin(this.argument))\n    } else {\n      this.set(ρ * Math.cos(this.argument), ρ * Math.sin(this.argument))\n    }\n  }\n\n  set argument(θ) {\n    this.set(this.modulus * Math.cos(θ), this.modulus * Math.sin(θ))\n  }\n\n  static exp(z) {\n    const real = Math.exp(z.real) * Math.cos(z.imaginary)\n    const imaginary = Math.exp(z.real) * Math.sin(z.imaginary)\n    return new Complex(real, imaginary)\n  }\n\n  static square(z) {\n    const real = z.real ** 2 - z.imaginary ** 2\n    const imaginary = 2 * z.real * z.imaginary\n    return new Complex(real, imaginary)\n  }\n\n  toString() {\n    const round2 = roundNdecimals(2)\n    const real = this.real === 0 ? '' : round2(this.real)\n    const imaginary = this.imaginary === 0 ? '' : round2(this.imaginary)\n    const plusSign = real === '' || imaginary === '' ? '' : ' + '\n    return this.imaginary === 0\n      ? String(real)\n      : `${real}${plusSign}${imaginary}i`\n  }\n}\n\nmodule.exports = Complex\n\n\n//# sourceURL=webpack:///./node_modules/simple-complex/src/Complex.js?");

/***/ }),

/***/ "./node_modules/simple-complex/src/helpers.js":
/*!****************************************************!*\
  !*** ./node_modules/simple-complex/src/helpers.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const roundNdecimals = dec => num => {\n  const pow = 10 ** dec\n  return Math.round(num * pow) / pow\n}\n\nmodule.exports = { roundNdecimals }\n\n\n//# sourceURL=webpack:///./node_modules/simple-complex/src/helpers.js?");

/***/ }),

/***/ "./src/Graph.js":
/*!**********************!*\
  !*** ./src/Graph.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-scale */ \"./node_modules/d3-scale/src/index.js\");\n/* harmony import */ var simple_complex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! simple-complex */ \"./node_modules/simple-complex/src/Complex.js\");\n/* harmony import */ var simple_complex__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(simple_complex__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _engine_pointerLock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./engine/pointerLock */ \"./src/engine/pointerLock.js\");\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nclass Graph {\n  constructor(xMin, xMax, yMin, yMax, canvas) {\n    _defineProperty(this, \"updateMousePosition\", event => {\n      const {\n        width,\n        height\n      } = this.canvas.getBoundingClientRect();\n      const xRatio = this.mouseSensitivity * (this.xMax - this.xMin) / width;\n      const yRatio = this.mouseSensitivity * (this.yMin - this.yMax) / height;\n      const x = event.movementX / this.pixelRatio * xRatio;\n      const y = event.movementY / this.pixelRatio * yRatio;\n      this.mouse.add(new simple_complex__WEBPACK_IMPORTED_MODULE_1___default.a(x, y));\n    });\n\n    this.xMin = xMin;\n    this.xMax = xMax;\n    this.yMin = yMin;\n    this.yMax = yMax;\n    this.canvas = canvas;\n    this.ctx = canvas.getContext('2d');\n    this.pixelRatio = window.devicePixelRatio ? window.devicePixelRatio : 1;\n    this.mouse = new simple_complex__WEBPACK_IMPORTED_MODULE_1___default.a();\n    this.mouseSensitivity = 1;\n    this.setupCanvas();\n    this.defineScales();\n  }\n\n  setupCanvas() {\n    const {\n      width,\n      height\n    } = this.canvas.getBoundingClientRect();\n    this.canvas.width = width * this.pixelRatio;\n    this.canvas.height = height * this.pixelRatio;\n    this.canvas.style.width = `${width}px`;\n    this.canvas.style.height = `${height}px`;\n    Object(_engine_pointerLock__WEBPACK_IMPORTED_MODULE_2__[\"setPointerLock\"])(this.canvas, this.updateMousePosition);\n    this.ctx.font = `${10 * this.pixelRatio}px sans-serif`;\n  }\n\n  setRanges(xMin, xMax, yMin, yMax) {\n    this.xMin = xMin;\n    this.xMax = xMax;\n    this.yMin = yMin;\n    this.yMax = yMax;\n    this.defineScales();\n  }\n\n  defineScales() {\n    const {\n      width,\n      height\n    } = this.canvas.getBoundingClientRect();\n    this.numberToPixelScaleX = Object(d3_scale__WEBPACK_IMPORTED_MODULE_0__[\"scaleLinear\"])().domain([this.xMin, this.xMax]).range([0, width * this.pixelRatio]);\n    this.numberToPixelScaleY = Object(d3_scale__WEBPACK_IMPORTED_MODULE_0__[\"scaleLinear\"])().domain([this.yMin, this.yMax]).range([height * this.pixelRatio, 0]);\n    this.pixelToNumberScaleX = Object(d3_scale__WEBPACK_IMPORTED_MODULE_0__[\"scaleLinear\"])().domain([0, width * this.pixelRatio]).range([this.xMin, this.xMax]);\n    this.pixelToNumberScaleY = Object(d3_scale__WEBPACK_IMPORTED_MODULE_0__[\"scaleLinear\"])().domain([0, height * this.pixelRatio]).range([this.yMax, this.yMin]);\n  }\n\n  getPointPixelCoords(complex) {\n    const x = this.numberToPixelScaleX(complex.real);\n    const y = this.numberToPixelScaleY(complex.imaginary);\n    return {\n      x,\n      y\n    };\n  }\n\n  getComplexFromPixelCoords(x, y) {\n    const real = this.pixelToNumberScaleX(x);\n    const imaginary = this.pixelToNumberScaleY(y);\n    return new simple_complex__WEBPACK_IMPORTED_MODULE_1___default.a(real, imaginary);\n  }\n\n  movePointToPixelCoords(complex, x, y) {\n    complex.set(this.pixelToNumberScaleX(x), this.pixelToNumberScaleY(y));\n  }\n\n  drawPoint(complex) {\n    const {\n      x,\n      y\n    } = this.getPointPixelCoords(complex);\n    this.ctx.beginPath();\n    this.ctx.arc(x, y, 2 * this.pixelRatio, 0, 2 * Math.PI);\n    this.ctx.stroke();\n  }\n\n  drawLine(z1, z2) {\n    const {\n      x: x1,\n      y: y1\n    } = this.getPointPixelCoords(z1);\n    const {\n      x: x2,\n      y: y2\n    } = this.getPointPixelCoords(z2);\n    this.ctx.beginPath();\n    this.ctx.moveTo(x1, y1);\n    this.ctx.lineTo(x2, y2);\n    this.ctx.stroke();\n    this.ctx.closePath();\n  }\n\n  drawAxes() {\n    this.drawLine(new simple_complex__WEBPACK_IMPORTED_MODULE_1___default.a(this.xMin, 0), new simple_complex__WEBPACK_IMPORTED_MODULE_1___default.a(this.xMax, 0));\n    this.drawLine(new simple_complex__WEBPACK_IMPORTED_MODULE_1___default.a(0, this.yMin), new simple_complex__WEBPACK_IMPORTED_MODULE_1___default.a(0, this.yMax));\n  }\n\n  displayText(text, line = 0) {\n    const {\n      width\n    } = this.canvas.getBoundingClientRect();\n    const x = (width - text.length * 6) * this.pixelRatio;\n    const y = (15 + 15 * line) * this.pixelRatio;\n    this.ctx.fillText(text, x, y);\n  }\n\n  clear() {\n    const {\n      width,\n      height\n    } = this.canvas.getBoundingClientRect();\n    this.ctx.clearRect(0, 0, width * this.pixelRatio, height * this.pixelRatio);\n  }\n\n  getImageData() {\n    return this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);\n  }\n\n  createImageData() {\n    return this.ctx.createImageData(this.canvas.width, this.canvas.height);\n  }\n\n  putImageData(imageData) {\n    return this.ctx.putImageData(imageData, 0, 0);\n  }\n\n  drawImage(image) {\n    this.ctx.drawImage(image, 0, 0);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Graph);\n\n//# sourceURL=webpack:///./src/Graph.js?");

/***/ }),

/***/ "./src/assets/close.png":
/*!******************************!*\
  !*** ./src/assets/close.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"/close.png\");\n\n//# sourceURL=webpack:///./src/assets/close.png?");

/***/ }),

/***/ "./src/assets/far.png":
/*!****************************!*\
  !*** ./src/assets/far.png ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"/far.png\");\n\n//# sourceURL=webpack:///./src/assets/far.png?");

/***/ }),

/***/ "./src/engine/pointerLock.js":
/*!***********************************!*\
  !*** ./src/engine/pointerLock.js ***!
  \***********************************/
/*! exports provided: setPointerLock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setPointerLock\", function() { return setPointerLock; });\nfunction setPointerLock(canvas, mouseMoved) {\n  canvas.requestPointerLock = canvas.requestPointerLock || canvas.mozRequestPointerLock;\n  document.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock;\n  canvas.onclick = canvas.requestPointerLock;\n  document.addEventListener('pointerlockchange', lockChangeAlert, false);\n  document.addEventListener('mozpointerlockchange', lockChangeAlert, false);\n\n  function lockChangeAlert() {\n    if (document.pointerLockElement === canvas || document.mozPointerLockElement === canvas) {\n      document.addEventListener('mousemove', mouseMoved, false);\n    } else {\n      document.removeEventListener('mousemove', mouseMoved, false);\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/engine/pointerLock.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: ITERATIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ITERATIONS\", function() { return ITERATIONS; });\n/* harmony import */ var simple_complex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simple-complex */ \"./node_modules/simple-complex/src/Complex.js\");\n/* harmony import */ var simple_complex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(simple_complex__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Graph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Graph */ \"./src/Graph.js\");\n/* harmony import */ var _maths__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./maths */ \"./src/maths.js\");\n/* harmony import */ var _assets_close_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/close.png */ \"./src/assets/close.png\");\n/* harmony import */ var _assets_far_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/far.png */ \"./src/assets/far.png\");\n\n\n\n\n\nconst close = new Image();\nclose.src = _assets_close_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\nconst far = new Image();\nfar.src = _assets_far_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\nconst canvas = document.getElementById('canvas');\nconst checkbox = document.getElementById('checkbox');\nconst zoomCheckbox = document.getElementById('zoom-checkbox');\nconst ITERATIONS = 1000;\nconst graph = new _Graph__WEBPACK_IMPORTED_MODULE_1__[\"default\"](-2.25, 1.125, -1.125, 1.125, canvas);\nconst values = [new simple_complex__WEBPACK_IMPORTED_MODULE_0___default.a(0, 0), ...Array(ITERATIONS).keys()].map(n => new simple_complex__WEBPACK_IMPORTED_MODULE_0___default.a());\n\ndocument.body.onkeypress = event => {\n  if (event.code === 'Space') {\n    checkbox.checked = !checkbox.checked;\n    handleDisplayFractalChange({\n      target: checkbox\n    });\n  }\n};\n\ndocument.body.onwheel = event => {\n  const {\n    deltaY\n  } = event;\n\n  if (deltaY < 0 && graph.mouseSensitivity < 1) {\n    graph.mouseSensitivity *= 2;\n  } else if (deltaY > 0) {\n    graph.mouseSensitivity /= 2;\n  }\n};\n\nconst handleDisplayFractalChange = event => {\n  const {\n    checked\n  } = event.target;\n\n  if (checked) {\n    drawMandelbrot();\n    graph.ctx.fillStyle = 'white';\n    graph.ctx.strokeStyle = 'white';\n  } else {\n    graph.ctx.fillStyle = 'black';\n    graph.ctx.strokeStyle = 'black';\n  }\n};\n\ncheckbox.onclick = handleDisplayFractalChange;\n\nzoomCheckbox.onclick = event => {\n  const {\n    checked\n  } = event.target;\n\n  if (checked) {\n    currentZoom = 'close';\n    graph.setRanges(-2.25, 1.125, -1.125, 1.125);\n  } else {\n    currentZoom = 'far';\n    graph.setRanges(-3, 3, -2, 2);\n  }\n\n  if (checkbox.checked) {\n    drawMandelbrot();\n  }\n};\n\nconst fractal = {\n  close,\n  far\n};\nlet currentZoom = 'close';\n\nfunction draw() {\n  window.requestAnimationFrame(draw);\n  graph.clear();\n\n  if (checkbox.checked) {\n    graph.drawImage(fractal[currentZoom]);\n  }\n\n  graph.drawAxes();\n  graph.drawPoint(graph.mouse);\n  Object(_maths__WEBPACK_IMPORTED_MODULE_2__[\"generateValues\"])(values, graph.mouse);\n  values.forEach((v, i) => {\n    if (i < ITERATIONS) {\n      graph.drawLine(v, values[i + 1]);\n    }\n\n    graph.drawPoint(v);\n  });\n  const sensitivityValue = `${graph.mouseSensitivity !== 1 ? '1/' : ''}${1 / graph.mouseSensitivity}`;\n  graph.displayText(`Mouse sensitivity: ${sensitivityValue}`);\n  graph.displayText(graph.mouse.toString(), 1);\n}\n\ndraw();\nconst maxIteration = 50;\n\nfunction drawMandelbrot() {\n  if (!fractal[currentZoom]) {\n    fractal[currentZoom] = graph.createImageData();\n\n    for (let i = 0; i < graph.canvas.width; i++) {\n      for (let j = 0; j < graph.canvas.height; j++) {\n        const c = graph.getComplexFromPixelCoords(i, j);\n        let z = new simple_complex__WEBPACK_IMPORTED_MODULE_0___default.a(0, 0);\n        let n = 0;\n\n        while (n < maxIteration) {\n          const zNext = Object(_maths__WEBPACK_IMPORTED_MODULE_2__[\"iterate\"])(z, c);\n\n          if (zNext.modulus > 2) {\n            break;\n          }\n\n          n++;\n          z = zNext;\n        }\n\n        const pixelIndex = (i + j * graph.canvas.width) * 4;\n\n        if (n === maxIteration) {\n          fractal[currentZoom].data[pixelIndex] = 0;\n          fractal[currentZoom].data[pixelIndex + 1] = 0;\n          fractal[currentZoom].data[pixelIndex + 2] = 0;\n          fractal[currentZoom].data[pixelIndex + 3] = 255;\n        } else {\n          fractal[currentZoom].data[pixelIndex] = n * 16 % 255;\n          fractal[currentZoom].data[pixelIndex + 1] = n * 16 % 255;\n          fractal[currentZoom].data[pixelIndex + 2] = n * 16 % 255;\n          fractal[currentZoom].data[pixelIndex + 3] = 255;\n        }\n      }\n    }\n  }\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/maths.js":
/*!**********************!*\
  !*** ./src/maths.js ***!
  \**********************/
/*! exports provided: generateValues, iterate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateValues\", function() { return generateValues; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"iterate\", function() { return iterate; });\n/* harmony import */ var simple_complex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simple-complex */ \"./node_modules/simple-complex/src/Complex.js\");\n/* harmony import */ var simple_complex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(simple_complex__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\nconst generateValues = (values = [], c) => {\n  for (let i = 0; i < _index__WEBPACK_IMPORTED_MODULE_1__[\"ITERATIONS\"]; i++) {\n    const {\n      real,\n      imaginary\n    } = iterate(values[i], c);\n    values[i + 1].set(real, imaginary);\n  }\n};\nconst iterate = (z, c) => simple_complex__WEBPACK_IMPORTED_MODULE_0___default.a.sum(simple_complex__WEBPACK_IMPORTED_MODULE_0___default.a.square(z), c);\n\n//# sourceURL=webpack:///./src/maths.js?");

/***/ })

/******/ });