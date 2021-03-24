webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/home */ \"./pages/home.js\");\n\n\nvar _jsxFileName = \"/home/hamza/Desktop/portfolio/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nfunction MyApp(_ref) {\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n  console.log(\"page component ::::::::::: \", Component);\n  var variants = {\n    start: {\n      y: Component == _pages_home__WEBPACK_IMPORTED_MODULE_4__[\"default\"] ? 1000 : -1000\n    },\n    opened: {\n      y: 0,\n      transition: {\n        type: \"spring\",\n        duration: 3\n      }\n    },\n    exitPage: {\n      y: -1000\n    }\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: \"bg-gray-900\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"AnimatePresence\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n        className: \"bg-gray-900\",\n        initial: \"start\",\n        animate: \"opened\",\n        exit: \"exitPage\",\n        variants: variants,\n        transition: {\n          duration: 3\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }, this)\n      }, Component, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 5\n  }, this);\n}\n\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\n\nvar _c;\n\n$RefreshReg$(_c, \"MyApp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY29uc29sZSIsImxvZyIsInZhcmlhbnRzIiwic3RhcnQiLCJ5IiwiSG9tZSIsIm9wZW5lZCIsInRyYW5zaXRpb24iLCJ0eXBlIiwiZHVyYXRpb24iLCJleGl0UGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxLQUFULE9BQXlDO0FBQUEsTUFBeEJDLFNBQXdCLFFBQXhCQSxTQUF3QjtBQUFBLE1BQWJDLFNBQWEsUUFBYkEsU0FBYTtBQUV2Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVksNkJBQVosRUFBMkNILFNBQTNDO0FBQ0EsTUFBTUksUUFBUSxHQUFHO0FBQ2ZDLFNBQUssRUFBRztBQUNOQyxPQUFDLEVBQUdOLFNBQVMsSUFBSU8sbURBQWIsR0FBcUIsSUFBckIsR0FBNEIsQ0FBQztBQUQzQixLQURPO0FBSWZDLFVBQU0sRUFBRztBQUNQRixPQUFDLEVBQUcsQ0FERztBQUVQRyxnQkFBVSxFQUFFO0FBQ1ZDLFlBQUksRUFBRSxRQURJO0FBRVZDLGdCQUFRLEVBQUc7QUFGRDtBQUZMLEtBSk07QUFXZkMsWUFBUSxFQUFFO0FBQ1JOLE9BQUMsRUFBRyxDQUFDO0FBREc7QUFYSyxHQUFqQjtBQWdCQSxzQkFFRTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUEsMkJBQ0UscUVBQUMsNkRBQUQ7QUFBQSw2QkFDRSxxRUFBQyxvREFBRCxDQUFRLEdBQVI7QUFBWSxpQkFBUyxFQUFDLGFBQXRCO0FBQW9ELGVBQU8sRUFBQyxPQUE1RDtBQUFvRSxlQUFPLEVBQUMsUUFBNUU7QUFBcUYsWUFBSSxFQUFDLFVBQTFGO0FBQ0UsZ0JBQVEsRUFBRUYsUUFEWjtBQUVFLGtCQUFVLEVBQUU7QUFDVk8sa0JBQVEsRUFBRztBQURELFNBRmQ7QUFBQSwrQkFNRSxxRUFBQyxTQUFELG9CQUFlVixTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORixTQUF5Q0QsU0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRkY7QUFlRDs7S0FsQ1FELEs7QUFvQ01BLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJ1xuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IEhvbWUgZnJvbSAnLi4vcGFnZXMvaG9tZSdcblxuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcblxuICBjb25zb2xlLmxvZyhcInBhZ2UgY29tcG9uZW50IDo6Ojo6Ojo6Ojo6IFwiLCBDb21wb25lbnQpXG4gIGNvbnN0IHZhcmlhbnRzID0ge1xuICAgIHN0YXJ0IDoge1xuICAgICAgeSA6IENvbXBvbmVudCA9PSBIb21lID8gIDEwMDAgOiAtMTAwMCxcbiAgICB9LFxuICAgIG9wZW5lZCA6IHtcbiAgICAgIHkgOiAwLFxuICAgICAgdHJhbnNpdGlvbiA6e1xuICAgICAgICB0eXBlOiBcInNwcmluZ1wiLFxuICAgICAgICBkdXJhdGlvbiA6IDNcbiAgICAgIH1cbiAgICB9LFxuICAgIGV4aXRQYWdlOiB7XG4gICAgICB5IDogLTEwMDBcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTkwMFwiPlxuICAgICAgPEFuaW1hdGVQcmVzZW5jZSA+XG4gICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktOTAwXCIga2V5PXtDb21wb25lbnR9IGluaXRpYWw9XCJzdGFydFwiIGFuaW1hdGU9XCJvcGVuZWRcIiBleGl0PVwiZXhpdFBhZ2VcIlxuICAgICAgICAgIHZhcmlhbnRzPXt2YXJpYW50c31cbiAgICAgICAgICB0cmFuc2l0aW9uPXt7XG4gICAgICAgICAgICBkdXJhdGlvbiA6IDNcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

})