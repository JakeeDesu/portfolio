webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/home */ \"./pages/home.js\");\n\n\nvar _jsxFileName = \"/home/hamza/Desktop/portfolio/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nfunction MyApp(_ref) {\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n  console.log(\"page component ::::::::::: \", Component);\n  var variants = {\n    start: {\n      scale: 2,\n      y: Component === _pages_home__WEBPACK_IMPORTED_MODULE_4__[\"default\"] ? 2000 : 1000\n    },\n    opened: {\n      scale: 1,\n      y: 0,\n      transition: {\n        // type: \"spring\",\n        ease: \"easeOut\",\n        duration: 2 // delay : 0.2\n\n      }\n    },\n    exitPage: {\n      y: -1000\n    }\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: \"\".concat(Component == _pages_home__WEBPACK_IMPORTED_MODULE_4__[\"default\"] ? 'bg-gray-900' : ' bg-blue-400', \" h-screen w-full overflow-hidden\"),\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"AnimatePresence\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n        className: \"bg-gray-900\",\n        initial: \"start\",\n        animate: \"opened\",\n        exit: \"exitPage\",\n        variants: variants,\n        transition: {\n          duration: 3\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, this)\n      }, Component, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 5\n  }, this);\n}\n\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\n\nvar _c;\n\n$RefreshReg$(_c, \"MyApp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY29uc29sZSIsImxvZyIsInZhcmlhbnRzIiwic3RhcnQiLCJzY2FsZSIsInkiLCJIb21lIiwib3BlbmVkIiwidHJhbnNpdGlvbiIsImVhc2UiLCJkdXJhdGlvbiIsImV4aXRQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLFNBQVNBLEtBQVQsT0FBeUM7QUFBQSxNQUF4QkMsU0FBd0IsUUFBeEJBLFNBQXdCO0FBQUEsTUFBYkMsU0FBYSxRQUFiQSxTQUFhO0FBRXZDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSw2QkFBWixFQUEyQ0gsU0FBM0M7QUFDQSxNQUFNSSxRQUFRLEdBQUc7QUFDZkMsU0FBSyxFQUFHO0FBQ05DLFdBQUssRUFBRSxDQUREO0FBRU5DLE9BQUMsRUFBSVAsU0FBUyxLQUFLUSxtREFBZixHQUF3QixJQUF4QixHQUErQjtBQUY3QixLQURPO0FBS2ZDLFVBQU0sRUFBRztBQUNQSCxXQUFLLEVBQUcsQ0FERDtBQUVQQyxPQUFDLEVBQUcsQ0FGRztBQUdQRyxnQkFBVSxFQUFFO0FBQ1Y7QUFDQUMsWUFBSSxFQUFHLFNBRkc7QUFHVkMsZ0JBQVEsRUFBRyxDQUhELENBSVY7O0FBSlU7QUFITCxLQUxNO0FBZWZDLFlBQVEsRUFBRTtBQUNSTixPQUFDLEVBQUcsQ0FBQztBQURHO0FBZkssR0FBakI7QUFvQkEsc0JBRUU7QUFBSyxhQUFTLFlBQU1QLFNBQVMsSUFBSVEsbURBQWIsR0FBb0IsYUFBcEIsR0FBb0MsY0FBMUMscUNBQWQ7QUFBQSwyQkFDRSxxRUFBQyw2REFBRDtBQUFBLDZCQUNFLHFFQUFDLG9EQUFELENBQVEsR0FBUjtBQUFZLGlCQUFTLEVBQUMsYUFBdEI7QUFBb0QsZUFBTyxFQUFDLE9BQTVEO0FBQW9FLGVBQU8sRUFBQyxRQUE1RTtBQUFxRixZQUFJLEVBQUMsVUFBMUY7QUFDRSxnQkFBUSxFQUFFSixRQURaO0FBRUUsa0JBQVUsRUFBRTtBQUNWUSxrQkFBUSxFQUFHO0FBREQsU0FGZDtBQUFBLCtCQU1FLHFFQUFDLFNBQUQsb0JBQWVYLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GLFNBQXlDRCxTQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGRjtBQWVEOztLQXRDUUQsSztBQXdDTUEsb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQgSG9tZSBmcm9tICcuLi9wYWdlcy9ob21lJ1xuXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuXG4gIGNvbnNvbGUubG9nKFwicGFnZSBjb21wb25lbnQgOjo6Ojo6Ojo6OjogXCIsIENvbXBvbmVudClcbiAgY29uc3QgdmFyaWFudHMgPSB7XG4gICAgc3RhcnQgOiB7XG4gICAgICBzY2FsZTogMixcbiAgICAgIHkgOiAoQ29tcG9uZW50ID09PSBIb21lKSA/ICAyMDAwIDogMTAwMCxcbiAgICB9LFxuICAgIG9wZW5lZCA6IHtcbiAgICAgIHNjYWxlIDogMSxcbiAgICAgIHkgOiAwLFxuICAgICAgdHJhbnNpdGlvbiA6e1xuICAgICAgICAvLyB0eXBlOiBcInNwcmluZ1wiLFxuICAgICAgICBlYXNlIDogXCJlYXNlT3V0XCIsXG4gICAgICAgIGR1cmF0aW9uIDogMixcbiAgICAgICAgLy8gZGVsYXkgOiAwLjJcbiAgICAgIH1cbiAgICB9LFxuICAgIGV4aXRQYWdlOiB7XG4gICAgICB5IDogLTEwMDBcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuXG4gICAgPGRpdiBjbGFzc05hbWU9e2AkeyBDb21wb25lbnQgPT0gSG9tZSA/ICdiZy1ncmF5LTkwMCcgOiAnIGJnLWJsdWUtNDAwJ30gaC1zY3JlZW4gdy1mdWxsIG92ZXJmbG93LWhpZGRlbmB9PlxuICAgICAgPEFuaW1hdGVQcmVzZW5jZSA+XG4gICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktOTAwXCIga2V5PXtDb21wb25lbnR9IGluaXRpYWw9XCJzdGFydFwiIGFuaW1hdGU9XCJvcGVuZWRcIiBleGl0PVwiZXhpdFBhZ2VcIlxuICAgICAgICAgIHZhcmlhbnRzPXt2YXJpYW50c31cbiAgICAgICAgICB0cmFuc2l0aW9uPXt7XG4gICAgICAgICAgICBkdXJhdGlvbiA6IDNcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

})