webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _components_darkSkyOpen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/darkSkyOpen */ \"./components/darkSkyOpen.js\");\n/* harmony import */ var _components_sogumaVx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/sogumaVx */ \"./components/sogumaVx.tsx\");\n/* harmony import */ var _components_sogumaVxPhone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/sogumaVxPhone */ \"./components/sogumaVxPhone.tsx\");\n/* harmony import */ var _components_darkSky__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/darkSky */ \"./components/darkSky.js\");\n/* harmony import */ var _components_eyeSwitch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/eyeSwitch */ \"./components/eyeSwitch.js\");\n/* harmony import */ var _components_mainboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/mainboard */ \"./components/mainboard.js\");\n/* harmony import */ var _components_boardPhone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/boardPhone */ \"./components/boardPhone.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_scene__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/scene */ \"./components/scene.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _components_theme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/theme */ \"./components/theme.js\");\n\n\n\nvar _jsxFileName = \"/home/hamza/Desktop/portfolio/pages/index.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Home(_ref) {\n  _s();\n\n  var about = _ref.about,\n      repos = _ref.repos,\n      dataLoading = _ref.dataLoading,\n      darkTheme = _ref.darkTheme,\n      changeTheme = _ref.changeTheme;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_11__[\"useState\"])({\n    displayState: true,\n    displayOff: false,\n    itemId: -1,\n    type: -1\n  }),\n      onDisplay = _useState[0],\n      setOnDisplay = _useState[1];\n\n  var _useViewportScroll = Object(framer_motion__WEBPACK_IMPORTED_MODULE_12__[\"useViewportScroll\"])(),\n      scrollYProgress = _useViewportScroll.scrollYProgress;\n\n  var sogumaScale = Object(framer_motion__WEBPACK_IMPORTED_MODULE_12__[\"useTransform\"])(scrollYProgress, [0, 0.1, 0.4, 1], [1, 0.9, 0.8, 0.1]);\n  var sogumaYoffset = Object(framer_motion__WEBPACK_IMPORTED_MODULE_12__[\"useTransform\"])(scrollYProgress, [0, 0.1, 0.5, 1], [0, -10, -100, -500]);\n  Object(react__WEBPACK_IMPORTED_MODULE_11__[\"useEffect\"])(function () {\n    var timer;\n\n    if (!onDisplay.displayState && onDisplay.displayOff) {\n      timer = setTimeout(function () {\n        setOnDisplay(_objectSpread(_objectSpread({}, onDisplay), {}, {\n          displayOff: false\n        }));\n      }, 300);\n    }\n\n    return function () {\n      return clearTimeout(timer);\n    };\n  }, [onDisplay]); // set a gim on display mode\n\n  var displayGim = function displayGim(displayState, itemId, type) {\n    var newdisplayOff = onDisplay.displayState && !displayState ? true : false;\n    setOnDisplay(_objectSpread(_objectSpread({}, onDisplay), {}, {\n      displayState: displayState,\n      displayOff: newdisplayOff,\n      itemId: itemId,\n      type: type\n    }));\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_12__[\"motion\"].div, {\n    className: \"relative flex flex-col w-full h-auto overflow-hidden\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"absolute z-50 text-white flex flex-col justify-center top-100 left-1/4\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: [\"onDisplay : \", onDisplay.displayState ? \"true\" : \"false\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: [\"displayOff : \", onDisplay.displayOff ? \"true\" : \"false\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: [\"itemId : \", onDisplay.itemId]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: [\"type : \", onDisplay.type]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {\n        href: \"/home\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          children: \"none existing url\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 25\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_12__[\"motion\"].div, {\n      className: \"relative flex flex-col justify-start lg:h-screen \".concat(onDisplay.displayState && onDisplay.type !== -1 ? \"h-auto\" : \"h-screen\", \" m-0 p-0  w-full \").concat(_components_theme__WEBPACK_IMPORTED_MODULE_13__[\"theme\"].dark.backgroundColor),\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_12__[\"motion\"].div, {\n        className: \"relative flex justify-center items-center lg:h-full md:h-screen h-80 w-full\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"absolute top-0 left-0 lg:h-full md:h-full h-full w-full \",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_darkSkyOpen__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            height: \"lg:h-full h-full md:h-1/2 w-full\",\n            darkTheme: darkTheme\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 7\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 6\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_12__[\"motion\"].div, {\n          className: \"absolute z-20 flex justify-center items-start md:h-100 lg:h-100 md:top-1/4 top-1/4 h-full lg:top-1/3 w-full\",\n          style: onDisplay.displayState ? {\n            scale: sogumaScale,\n            y: sogumaYoffset\n          } : {\n            scale: 1,\n            y: 0\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_sogumaVx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            repos: repos,\n            dataLoading: true,\n            setOnDisplay: displayGim,\n            onDisplay: onDisplay,\n            darkTheme: darkTheme\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 69,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_sogumaVxPhone__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            repos: repos,\n            dataLoading: true,\n            setOnDisplay: displayGim,\n            onDisplay: onDisplay,\n            darkTheme: darkTheme\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 70,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_mainboard__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        onDisplay: onDisplay,\n        about: about,\n        repos: repos\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_boardPhone__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        onDisplay: onDisplay,\n        about: about,\n        repos: repos\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 3\n  }, this);\n}\n\n_s(Home, \"WETFgi1QOSOn1exqfOzhPSfqkiU=\", false, function () {\n  return [framer_motion__WEBPACK_IMPORTED_MODULE_12__[\"useViewportScroll\"], framer_motion__WEBPACK_IMPORTED_MODULE_12__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_12__[\"useTransform\"]];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwiYWJvdXQiLCJyZXBvcyIsImRhdGFMb2FkaW5nIiwiZGFya1RoZW1lIiwiY2hhbmdlVGhlbWUiLCJ1c2VTdGF0ZSIsImRpc3BsYXlTdGF0ZSIsImRpc3BsYXlPZmYiLCJpdGVtSWQiLCJ0eXBlIiwib25EaXNwbGF5Iiwic2V0T25EaXNwbGF5IiwidXNlVmlld3BvcnRTY3JvbGwiLCJzY3JvbGxZUHJvZ3Jlc3MiLCJzb2d1bWFTY2FsZSIsInVzZVRyYW5zZm9ybSIsInNvZ3VtYVlvZmZzZXQiLCJ1c2VFZmZlY3QiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJkaXNwbGF5R2ltIiwibmV3ZGlzcGxheU9mZiIsInRoZW1lIiwiZGFyayIsImJhY2tncm91bmRDb2xvciIsInNjYWxlIiwieSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUdlLFNBQVNBLElBQVQsT0FBb0U7QUFBQTs7QUFBQSxNQUFwREMsS0FBb0QsUUFBcERBLEtBQW9EO0FBQUEsTUFBN0NDLEtBQTZDLFFBQTdDQSxLQUE2QztBQUFBLE1BQXRDQyxXQUFzQyxRQUF0Q0EsV0FBc0M7QUFBQSxNQUF6QkMsU0FBeUIsUUFBekJBLFNBQXlCO0FBQUEsTUFBZEMsV0FBYyxRQUFkQSxXQUFjOztBQUFBLGtCQUNoREMsdURBQVEsQ0FBQztBQUFFQyxnQkFBWSxFQUFFLElBQWhCO0FBQXNCQyxjQUFVLEVBQUcsS0FBbkM7QUFBMENDLFVBQU0sRUFBRSxDQUFDLENBQW5EO0FBQXNEQyxRQUFJLEVBQUUsQ0FBQztBQUE3RCxHQUFELENBRHdDO0FBQUEsTUFDM0VDLFNBRDJFO0FBQUEsTUFDaEVDLFlBRGdFOztBQUFBLDJCQUV0REMsd0VBQWlC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QUFBLFlBWkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUF3Q0E7O0dBL0R1QkYsSTtVQUVLYSxnRSxFQUNSRywyRCxFQUNFQSwyRDs7O0tBSkNoQixJIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGFya1NreU9wZW4gZnJvbSAnLi4vY29tcG9uZW50cy9kYXJrU2t5T3BlbidcbmltcG9ydCBTb2d1bWFWeCBmcm9tICcuLi9jb21wb25lbnRzL3NvZ3VtYVZ4J1xuaW1wb3J0IFNvZ3VtYVZ4UGhvbmUgZnJvbSAnLi4vY29tcG9uZW50cy9zb2d1bWFWeFBob25lJ1xuaW1wb3J0IERhcmtTa3kgZnJvbSAnLi4vY29tcG9uZW50cy9kYXJrU2t5J1xuaW1wb3J0IEV5ZVN3aXRjaCBmcm9tICcuLi9jb21wb25lbnRzL2V5ZVN3aXRjaCdcbmltcG9ydCBNYWluQm9hcmQgZnJvbSAnLi4vY29tcG9uZW50cy9tYWluYm9hcmQnXG5pbXBvcnQgQm9hcmRQaG9uZSBmcm9tICcuLi9jb21wb25lbnRzL2JvYXJkUGhvbmUnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmltcG9ydCBTY2VuZSBmcm9tICcuLi9jb21wb25lbnRzL3NjZW5lJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbW90aW9uLCB1c2VUcmFuc2Zvcm0sIHVzZVZpZXdwb3J0U2Nyb2xsLCB1c2VNb3Rpb25WYWx1ZSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvdGhlbWUnXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGFib3V0LCByZXBvcywgZGF0YUxvYWRpbmcsIGRhcmtUaGVtZSwgY2hhbmdlVGhlbWV9KSB7XG5cdGNvbnN0IFtvbkRpc3BsYXksIHNldE9uRGlzcGxheV0gPSB1c2VTdGF0ZSh7IGRpc3BsYXlTdGF0ZTogdHJ1ZSwgZGlzcGxheU9mZiA6IGZhbHNlLCBpdGVtSWQ6IC0xLCB0eXBlOiAtMSB9KVxuXHRjb25zdCB7IHNjcm9sbFlQcm9ncmVzcyB9ID0gdXNlVmlld3BvcnRTY3JvbGwoKTtcblx0Y29uc3Qgc29ndW1hU2NhbGUgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMC4xLCAwLjQsIDFdLCBbMSwgMC45LCAwLjgsIDAuMV0pO1xuXHRjb25zdCBzb2d1bWFZb2Zmc2V0ID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDAuMSwgMC41LCAxXSwgWzAsIC0xMCwgLTEwMCwgLTUwMF0pO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0bGV0IHRpbWVyO1xuXHRcdGlmICghb25EaXNwbGF5LmRpc3BsYXlTdGF0ZSAmJiBvbkRpc3BsYXkuZGlzcGxheU9mZilcblx0XHR7XG5cdFx0XHR0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRzZXRPbkRpc3BsYXkoeyAuLi5vbkRpc3BsYXksIGRpc3BsYXlPZmYgOiBmYWxzZSB9KTtcblx0XHRcdH0sIDMwMCkgXG5cdFx0fVxuXHRcdHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXIpO1xuXHR9LCBbb25EaXNwbGF5XSk7XG5cblx0Ly8gc2V0IGEgZ2ltIG9uIGRpc3BsYXkgbW9kZVxuXHRjb25zdCBkaXNwbGF5R2ltID0gKGRpc3BsYXlTdGF0ZSwgaXRlbUlkLCB0eXBlKSA9PiB7XG5cdFx0Y29uc3QgbmV3ZGlzcGxheU9mZiA9IG9uRGlzcGxheS5kaXNwbGF5U3RhdGUgJiYgIWRpc3BsYXlTdGF0ZSA/IHRydWUgOiBmYWxzZTtcblx0XHRzZXRPbkRpc3BsYXkoeyAuLi5vbkRpc3BsYXksIGRpc3BsYXlTdGF0ZSwgZGlzcGxheU9mZiA6IG5ld2Rpc3BsYXlPZmYsIGl0ZW1JZCwgdHlwZSB9KTtcblx0fVxuXHRcblx0cmV0dXJuIChcblx0XHQ8bW90aW9uLmRpdiBjbGFzc05hbWU9e2ByZWxhdGl2ZSBmbGV4IGZsZXgtY29sIHctZnVsbCBoLWF1dG8gb3ZlcmZsb3ctaGlkZGVuYH0+XG57Lyoge1x0XHRjb25zb2xlLmxvZyhkYXRhTG9hZGluZyA/IFwibm90IGZldGNoZWQgeWV0XCIgOiBcImFib3V0IDpcIiAsIGFib3V0LCBcInJlcG9zIDogXCIsIHJlcG9zICl9ICovfVxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB6LTUwIHRleHQtd2hpdGUgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciB0b3AtMTAwIGxlZnQtMS80XCIgPlxuXHRcdFx0XHQ8aDE+b25EaXNwbGF5IDoge29uRGlzcGxheS5kaXNwbGF5U3RhdGUgPyBcInRydWVcIiA6IFwiZmFsc2VcIn08L2gxPlxuXHRcdFx0XHQ8aDE+ZGlzcGxheU9mZiA6IHtvbkRpc3BsYXkuZGlzcGxheU9mZiA/IFwidHJ1ZVwiIDogXCJmYWxzZVwifTwvaDE+XG5cdFx0XHRcdDxoMT5pdGVtSWQgOiB7b25EaXNwbGF5Lml0ZW1JZH08L2gxPlxuXHRcdFx0XHQ8aDE+dHlwZSA6IHtvbkRpc3BsYXkudHlwZX08L2gxPlxuXHRcdFx0XHQ8TGluayBocmVmPVwiL2hvbWVcIiA+PGE+bm9uZSBleGlzdGluZyB1cmw8L2E+PC9MaW5rPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHR7LyogPG5hdiBjbGFzc05hbWU9XCJmaXhlZCB6LTUwIHRvcC0yMCByaWdodC04IGxnOmgtNDAgbGc6dy0yNCBtZDpoLTMyIG1kOnctMjAgaC0yMCB3LTE2XCI+XG5cdFx0XHRcdDxFeWVTd2l0Y2ggZGFya1RoZW1lPXtkYXJrVGhlbWV9IGNoYW5nZVRoZW1lPXtjaGFuZ2VUaGVtZX0gY29sb3IyPVwiYmctZ3JlZW4tNTAwXCIgY29sb3IxPVwiYmctYmx1ZS05MDBcIiAvPlxuXHRcdFx0PC9uYXY+ICovfVxuXHRcdFx0PG1vdGlvbi5kaXYgY2xhc3NOYW1lPXtgcmVsYXRpdmUgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGxnOmgtc2NyZWVuICR7b25EaXNwbGF5LmRpc3BsYXlTdGF0ZSAmJiBvbkRpc3BsYXkudHlwZSAhPT0gLTEgPyBcImgtYXV0b1wiIDogXCJoLXNjcmVlblwiIH0gbS0wIHAtMCAgdy1mdWxsICR7dGhlbWUuZGFyay5iYWNrZ3JvdW5kQ29sb3J9YH1cblx0XHRcdD5cblx0XHRcdFx0PG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbGc6aC1mdWxsIG1kOmgtc2NyZWVuIGgtODAgdy1mdWxsXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgbGc6aC1mdWxsIG1kOmgtZnVsbCBoLWZ1bGwgdy1mdWxsIFwiPlxuXHRcdFx0XHRcdFx0PERhcmtTa3lPcGVuIGhlaWdodD1cImxnOmgtZnVsbCBoLWZ1bGwgbWQ6aC0xLzIgdy1mdWxsXCIgZGFya1RoZW1lPXtkYXJrVGhlbWV9IC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgei0yMCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLXN0YXJ0IG1kOmgtMTAwIGxnOmgtMTAwIG1kOnRvcC0xLzQgdG9wLTEvNCBoLWZ1bGwgbGc6dG9wLTEvMyB3LWZ1bGxcIlxuXHRcdFx0XHRcdFx0c3R5bGU9eyBvbkRpc3BsYXkuZGlzcGxheVN0YXRlID8gXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRzY2FsZTogc29ndW1hU2NhbGUsXG5cdFx0XHRcdFx0XHRcdFx0eTogc29ndW1hWW9mZnNldFxuXHRcdFx0XHRcdFx0XHR9IDoge1xuXHRcdFx0XHRcdFx0XHRcdHNjYWxlIDogMSxcblx0XHRcdFx0XHRcdFx0XHR5IDogMFxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PFNvZ3VtYVZ4IHJlcG9zPXtyZXBvc30gZGF0YUxvYWRpbmcgc2V0T25EaXNwbGF5PXtkaXNwbGF5R2ltfSBvbkRpc3BsYXk9e29uRGlzcGxheX0gZGFya1RoZW1lPXtkYXJrVGhlbWV9IC8+XG5cdFx0XHRcdFx0XHQ8U29ndW1hVnhQaG9uZSByZXBvcz17cmVwb3N9IGRhdGFMb2FkaW5nIHNldE9uRGlzcGxheT17ZGlzcGxheUdpbX0gb25EaXNwbGF5PXtvbkRpc3BsYXl9IGRhcmtUaGVtZT17ZGFya1RoZW1lfSAvPlxuXHRcdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0XHQ8TWFpbkJvYXJkIG9uRGlzcGxheT17b25EaXNwbGF5fSBhYm91dD17YWJvdXR9IHJlcG9zPXtyZXBvc30gLz5cblx0XHRcdFx0PEJvYXJkUGhvbmUgb25EaXNwbGF5PXtvbkRpc3BsYXl9IGFib3V0PXthYm91dH0gcmVwb3M9e3JlcG9zfSAvPlxuXHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0IHsvKiB7b25EaXNwbGF5LmRpc3BsYXlTdGF0ZSAmJiA8Q2FyZCBvbkRpc3BsYXk9e29uRGlzcGxheX0gZGFya1RoZW1lPXtkYXJrVGhlbWV9IGRpc3BsYXlHaW09e2Rpc3BsYXlHaW19IC8+fSAqL31cblx0XHQ8L21vdGlvbi5kaXY+XG5cdClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuXG5cdGNvbnN0IHJlczEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9KYWtlZURlc3UnKTtcblx0Y29uc3QgcmVzMiA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL0pha2VlRGVzdS9yZXBvcycpO1xuXHRcblx0Y29uc3QgYWJvdXQgPSBhd2FpdCByZXMxLmpzb24oKTtcblx0Y29uc3QgcmVwb3MgPSBhd2FpdCByZXMyLmpzb24oKTtcblx0Ly8gY29uc29sZS5sb2coIGJydXREYXRhIClcblx0Ly8gY29uc3QgbG9hZGluZyA9IGJydXREYXRhID8gdHJ1ZSA6IGZhbHNlO1xuXHQvLyBpZiAoZmV0Y2hlZERhdGEpXG5cdC8vIHtcblxuXHQvLyB9XG5cdGNvbnN0IGRhdGFMb2FkaW5nID0gKGFib3V0ICYmIHJlcG9zKSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGZhbHNlOyBcblx0XG5cdHJldHVybiB7XG5cdFx0cHJvcHMgOiB7IGFib3V0LCByZXBvcywgZGF0YUxvYWRpbmcgIH1cblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})