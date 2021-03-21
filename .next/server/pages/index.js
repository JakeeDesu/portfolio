module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/gim.js":
/*!***************************!*\
  !*** ./components/gim.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Gim; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/goinfre/hmhindat/portfolio/components/gim.js\";\n // const function getStyle = ( type ) => {\n//\n//   switch (type) {\n//     case \"main\":\n//       return {\n//\n//       }\n//       break;\n//     case \"prev\":\n//\n//       break;\n//     case \"next\":\n//\n//       break;\n//     case \"onhold\":\n//\n//       break;\n//     case \"hidden\":\n//\n//       break;\n//\n//     default:\n//\n//   }\n//\n//\n//   return\n// }\n\nfunction Gim({\n  height,\n  width,\n  color,\n  type\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n    className: `absolute ${height || \"h-4\"} ${width || \"w-4\"} rounded-full ${color || \"bg-pink-600\"}`,\n    initial: false,\n    animate: {\n      top: '50%',\n      left: '0%'\n    }\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2dpbS5qcz9kMTc2Il0sIm5hbWVzIjpbIkdpbSIsImhlaWdodCIsIndpZHRoIiwiY29sb3IiLCJ0eXBlIiwidG9wIiwibGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Q0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHZSxTQUFTQSxHQUFULENBQWM7QUFBRUMsUUFBRjtBQUFVQyxPQUFWO0FBQWlCQyxPQUFqQjtBQUF3QkM7QUFBeEIsQ0FBZCxFQUE2QztBQUcxRCxzQkFDRSxxRUFBQyxvREFBRCxDQUFRLEdBQVI7QUFBWSxhQUFTLEVBQUcsWUFBWUgsTUFBTSxJQUFJLEtBQU0sSUFBSUMsS0FBSyxJQUFJLEtBQU0saUJBQWlCQyxLQUFLLElBQUksYUFBYyxFQUEvRztBQUNFLFdBQU8sRUFBRSxLQURYO0FBRUUsV0FBTyxFQUFFO0FBQ1BFLFNBQUcsRUFBRyxLQURDO0FBRVBDLFVBQUksRUFBRztBQUZBO0FBRlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBVUQiLCJmaWxlIjoiLi9jb21wb25lbnRzL2dpbS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5cbi8vIGNvbnN0IGZ1bmN0aW9uIGdldFN0eWxlID0gKCB0eXBlICkgPT4ge1xuLy9cbi8vICAgc3dpdGNoICh0eXBlKSB7XG4vLyAgICAgY2FzZSBcIm1haW5cIjpcbi8vICAgICAgIHJldHVybiB7XG4vL1xuLy8gICAgICAgfVxuLy8gICAgICAgYnJlYWs7XG4vLyAgICAgY2FzZSBcInByZXZcIjpcbi8vXG4vLyAgICAgICBicmVhaztcbi8vICAgICBjYXNlIFwibmV4dFwiOlxuLy9cbi8vICAgICAgIGJyZWFrO1xuLy8gICAgIGNhc2UgXCJvbmhvbGRcIjpcbi8vXG4vLyAgICAgICBicmVhaztcbi8vICAgICBjYXNlIFwiaGlkZGVuXCI6XG4vL1xuLy8gICAgICAgYnJlYWs7XG4vL1xuLy8gICAgIGRlZmF1bHQ6XG4vL1xuLy8gICB9XG4vL1xuLy9cbi8vICAgcmV0dXJuXG4vLyB9XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2ltICh7IGhlaWdodCwgd2lkdGgsIGNvbG9yLCB0eXBlfSkge1xuXG5cbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9e2BhYnNvbHV0ZSAkeyBoZWlnaHQgfHwgXCJoLTRcIn0gJHsgd2lkdGggfHwgXCJ3LTRcIn0gcm91bmRlZC1mdWxsICR7IGNvbG9yIHx8IFwiYmctcGluay02MDBcIn1gfVxuICAgICAgaW5pdGlhbD17ZmFsc2V9XG4gICAgICBhbmltYXRlPXt7XG4gICAgICAgIHRvcCA6ICc1MCUnLFxuICAgICAgICBsZWZ0IDogJzAlJ1xuICAgICAgfX1cbiAgICA+XG4gICAgPC9tb3Rpb24uZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/gim.js\n");

/***/ }),

/***/ "./components/soguma.js":
/*!******************************!*\
  !*** ./components/soguma.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Soguma; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_gim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/gim */ \"./components/gim.js\");\n\nvar _jsxFileName = \"/goinfre/hmhindat/portfolio/components/soguma.js\";\n\n\nfunction Soguma({\n  height,\n  width\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n    className: `relative flex justify-center items-center ${height || \"h-1/2\"} ${width || \"w-1/2\"} bg-white border-gray-900 shadow-2xl bg-blue-100`,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_gim__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_gim__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_gim__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_gim__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_gim__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 3\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NvZ3VtYS5qcz84YTRlIl0sIm5hbWVzIjpbIlNvZ3VtYSIsImhlaWdodCIsIndpZHRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxDQUFpQjtBQUFFQyxRQUFGO0FBQVVDO0FBQVYsQ0FBakIsRUFBbUM7QUFFakQsc0JBQ0MscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQVksYUFBUyxFQUFHLDZDQUE0Q0QsTUFBTSxJQUFJLE9BQVEsSUFBR0MsS0FBSyxJQUFJLE9BQVEsa0RBQTFHO0FBQUEsNEJBQ0MscUVBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBRUMscUVBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZELGVBR0MscUVBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhELGVBSUMscUVBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpELGVBS0MscUVBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBVUEiLCJmaWxlIjoiLi9jb21wb25lbnRzL3NvZ3VtYS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQgR2ltIGZyb20gJy4uL2NvbXBvbmVudHMvZ2ltJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTb2d1bWEgKHsgaGVpZ2h0LCB3aWR0aH0pIHtcblxuXHRyZXR1cm4gKFxuXHRcdDxtb3Rpb24uZGl2IGNsYXNzTmFtZT17YHJlbGF0aXZlIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyICR7aGVpZ2h0IHx8IFwiaC0xLzJcIn0gJHt3aWR0aCB8fCBcInctMS8yXCJ9IGJnLXdoaXRlIGJvcmRlci1ncmF5LTkwMCBzaGFkb3ctMnhsIGJnLWJsdWUtMTAwYH0+XG5cdFx0XHQ8R2ltIC8+XG5cdFx0XHQ8R2ltIC8+XG5cdFx0XHQ8R2ltIC8+XG5cdFx0XHQ8R2ltIC8+XG5cdFx0XHQ8R2ltIC8+XG5cblx0XHQ8L21vdGlvbi5kaXY+XG5cdCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/soguma.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_soguma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/soguma */ \"./components/soguma.js\");\n\nvar _jsxFileName = \"/goinfre/hmhindat/portfolio/pages/index.js\";\n\n // import styles from '../styles/Home.module.css'\n\nfunction Home() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"flex justify-center items-center bg-blue-300 h-screen w-full\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Soguma\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_soguma__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBRWUsU0FBU0EsSUFBVCxHQUFnQjtBQUM3QixzQkFDRTtBQUFLLGFBQVMsRUFBQyw4REFBZjtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsNkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFLSSxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFTRCIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFNvZ3VtYSBmcm9tICcuLi9jb21wb25lbnRzL3NvZ3VtYSdcbi8vIGltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJnLWJsdWUtMzAwIGgtc2NyZWVuIHctZnVsbFwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Tb2d1bWE8L3RpdGxlPlxuICAgICAgICB7LyogPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPiAqL31cbiAgICAgIDwvSGVhZD5cbiAgICAgICAgPFNvZ3VtYS8+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"framer-motion\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmcmFtZXItbW90aW9uXCI/ZmY3ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJmcmFtZXItbW90aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnJhbWVyLW1vdGlvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///framer-motion\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });