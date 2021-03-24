webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _goinfre_hmhindat_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/home */ \"./pages/home.js\");\n\n\nvar _jsxFileName = \"/goinfre/hmhindat/portfolio/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_goinfre_hmhindat_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nfunction MyApp(_ref) {\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n  console.log(\"page component ::::::::::: \", Component);\n  var variants = {\n    start: {\n      height: '100vh',\n      scale: 2,\n      y: Component === _pages_home__WEBPACK_IMPORTED_MODULE_4__[\"default\"] ? 2000 : 1000\n    },\n    opened: {\n      height: 'full',\n      scale: 1,\n      y: 0,\n      transition: {\n        // type: \"spring\",\n        ease: \"easeOut\",\n        duration: 2 // delay : 0.2\n\n      }\n    },\n    exitPage: {\n      y: -1000\n    }\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: \"\".concat(Component == _pages_home__WEBPACK_IMPORTED_MODULE_4__[\"default\"] ? 'bg-gray-900' : ' bg-blue-400', \" h-screen w-full overflowHidden\"),\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"AnimatePresence\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n        className: \"bg-gray-900\",\n        initial: \"start\",\n        animate: \"opened\",\n        exit: \"exitPage\",\n        variants: variants,\n        transition: {\n          duration: 3\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }, this)\n      }, Component, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 5\n  }, this);\n}\n\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\n\nvar _c;\n\n$RefreshReg$(_c, \"MyApp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY29uc29sZSIsImxvZyIsInZhcmlhbnRzIiwic3RhcnQiLCJoZWlnaHQiLCJzY2FsZSIsInkiLCJIb21lIiwib3BlbmVkIiwidHJhbnNpdGlvbiIsImVhc2UiLCJkdXJhdGlvbiIsImV4aXRQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUdBLFNBQVNBLEtBQVQsT0FBeUM7QUFBQSxNQUF4QkMsU0FBd0IsUUFBeEJBLFNBQXdCO0FBQUEsTUFBYkMsU0FBYSxRQUFiQSxTQUFhO0FBRXZDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSw2QkFBWixFQUEyQ0gsU0FBM0M7QUFDQSxNQUFNSSxRQUFRLEdBQUc7QUFDZkMsU0FBSyxFQUFHO0FBQ05DLFlBQU0sRUFBRyxPQURIO0FBRU5DLFdBQUssRUFBRSxDQUZEO0FBR05DLE9BQUMsRUFBSVIsU0FBUyxLQUFLUyxtREFBZixHQUF3QixJQUF4QixHQUErQjtBQUg3QixLQURPO0FBTWZDLFVBQU0sRUFBRztBQUNQSixZQUFNLEVBQUcsTUFERjtBQUVQQyxXQUFLLEVBQUcsQ0FGRDtBQUdQQyxPQUFDLEVBQUcsQ0FIRztBQUlQRyxnQkFBVSxFQUFFO0FBQ1Y7QUFDQUMsWUFBSSxFQUFHLFNBRkc7QUFHVkMsZ0JBQVEsRUFBRyxDQUhELENBSVY7O0FBSlU7QUFKTCxLQU5NO0FBaUJmQyxZQUFRLEVBQUU7QUFDUk4sT0FBQyxFQUFHLENBQUM7QUFERztBQWpCSyxHQUFqQjtBQXNCQSxzQkFFRTtBQUFLLGFBQVMsWUFBTVIsU0FBUyxJQUFJUyxtREFBYixHQUFvQixhQUFwQixHQUFvQyxjQUExQyxvQ0FBZDtBQUFBLDJCQUNFLHFFQUFDLDZEQUFEO0FBQUEsNkJBQ0UscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQVksaUJBQVMsRUFBQyxhQUF0QjtBQUFvRCxlQUFPLEVBQUMsT0FBNUQ7QUFBb0UsZUFBTyxFQUFDLFFBQTVFO0FBQXFGLFlBQUksRUFBQyxVQUExRjtBQUNFLGdCQUFRLEVBQUVMLFFBRFo7QUFFRSxrQkFBVSxFQUFFO0FBQ1ZTLGtCQUFRLEVBQUc7QUFERCxTQUZkO0FBQUEsK0JBTUUscUVBQUMsU0FBRCxvQkFBZVosU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkYsU0FBeUNELFNBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZGO0FBZUQ7O0tBeENRRCxLO0FBMENNQSxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCBIb21lIGZyb20gJy4uL3BhZ2VzL2hvbWUnXG5cblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG5cbiAgY29uc29sZS5sb2coXCJwYWdlIGNvbXBvbmVudCA6Ojo6Ojo6Ojo6OiBcIiwgQ29tcG9uZW50KVxuICBjb25zdCB2YXJpYW50cyA9IHtcbiAgICBzdGFydCA6IHtcbiAgICAgIGhlaWdodCA6ICcxMDB2aCcsXG4gICAgICBzY2FsZTogMixcbiAgICAgIHkgOiAoQ29tcG9uZW50ID09PSBIb21lKSA/ICAyMDAwIDogMTAwMCxcbiAgICB9LFxuICAgIG9wZW5lZCA6IHtcbiAgICAgIGhlaWdodCA6ICdmdWxsJyxcbiAgICAgIHNjYWxlIDogMSxcbiAgICAgIHkgOiAwLFxuICAgICAgdHJhbnNpdGlvbiA6e1xuICAgICAgICAvLyB0eXBlOiBcInNwcmluZ1wiLFxuICAgICAgICBlYXNlIDogXCJlYXNlT3V0XCIsXG4gICAgICAgIGR1cmF0aW9uIDogMixcbiAgICAgICAgLy8gZGVsYXkgOiAwLjJcbiAgICAgIH1cbiAgICB9LFxuICAgIGV4aXRQYWdlOiB7XG4gICAgICB5IDogLTEwMDBcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuXG4gICAgPGRpdiBjbGFzc05hbWU9e2AkeyBDb21wb25lbnQgPT0gSG9tZSA/ICdiZy1ncmF5LTkwMCcgOiAnIGJnLWJsdWUtNDAwJ30gaC1zY3JlZW4gdy1mdWxsIG92ZXJmbG93SGlkZGVuYH0+XG4gICAgICA8QW5pbWF0ZVByZXNlbmNlID5cbiAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiYmctZ3JheS05MDBcIiBrZXk9e0NvbXBvbmVudH0gaW5pdGlhbD1cInN0YXJ0XCIgYW5pbWF0ZT1cIm9wZW5lZFwiIGV4aXQ9XCJleGl0UGFnZVwiXG4gICAgICAgICAgdmFyaWFudHM9e3ZhcmlhbnRzfVxuICAgICAgICAgIHRyYW5zaXRpb249e3tcbiAgICAgICAgICAgIGR1cmF0aW9uIDogM1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

})