webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _goinfre_hmhindat_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/home */ \"./pages/home.js\");\n\n\nvar _jsxFileName = \"/goinfre/hmhindat/portfolio/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_goinfre_hmhindat_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nfunction MyApp(_ref) {\n  var Component = _ref.Component,\n      pageProps = _ref.pageProps;\n  console.log(\"page component ::::::::::: \", Component);\n  var variants = {\n    start: {\n      height: '100vh',\n      scale: 2,\n      y: Component === _pages_home__WEBPACK_IMPORTED_MODULE_4__[\"default\"] ? 2000 : 1000\n    },\n    opened: {\n      height: 'full',\n      scale: 1,\n      y: 0,\n      transition: {\n        // type: \"spring\",\n        ease: \"easeOut\",\n        duration: 2 // delay : 0.2\n\n      }\n    },\n    exitPage: {\n      y: -1000\n    }\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n    className: \"\".concat(Component == _pages_home__WEBPACK_IMPORTED_MODULE_4__[\"default\"] ? 'bg-gray-900' : ' bg-blue-400', \" h-screen w-full overflowHidden\"),\n    initial: \"start\",\n    animate: \"opened\",\n    exit: \"exitPage\",\n    variants: {\n      start: {\n        height: '100vh'\n      },\n      opened: {\n        height: 'full',\n        transition: {\n          // type: \"spring\",\n          // ease : \"easeOut\",\n          duration: 2,\n          delay: 1\n        }\n      },\n      exitPage: {\n        y: -1000\n      }\n    },\n    transition: {\n      duration: 3\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"AnimatePresence\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n        className: \"bg-gray-900\",\n        initial: \"start\",\n        animate: \"opened\",\n        exit: \"exitPage\",\n        variants: variants,\n        transition: {\n          duration: 3\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 11\n        }, this)\n      }, Component, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 5\n  }, this);\n}\n\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\n\nvar _c;\n\n$RefreshReg$(_c, \"MyApp\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcz9kNTMwIl0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY29uc29sZSIsImxvZyIsInZhcmlhbnRzIiwic3RhcnQiLCJoZWlnaHQiLCJzY2FsZSIsInkiLCJIb21lIiwib3BlbmVkIiwidHJhbnNpdGlvbiIsImVhc2UiLCJkdXJhdGlvbiIsImV4aXRQYWdlIiwiZGVsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU0EsS0FBVCxPQUF5QztBQUFBLE1BQXhCQyxTQUF3QixRQUF4QkEsU0FBd0I7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7QUFFdkNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLDZCQUFaLEVBQTJDSCxTQUEzQztBQUNBLE1BQU1JLFFBQVEsR0FBRztBQUNmQyxTQUFLLEVBQUc7QUFDTkMsWUFBTSxFQUFHLE9BREg7QUFFTkMsV0FBSyxFQUFFLENBRkQ7QUFHTkMsT0FBQyxFQUFJUixTQUFTLEtBQUtTLG1EQUFmLEdBQXdCLElBQXhCLEdBQStCO0FBSDdCLEtBRE87QUFNZkMsVUFBTSxFQUFHO0FBQ1BKLFlBQU0sRUFBRyxNQURGO0FBRVBDLFdBQUssRUFBRyxDQUZEO0FBR1BDLE9BQUMsRUFBRyxDQUhHO0FBSVBHLGdCQUFVLEVBQUU7QUFDVjtBQUNBQyxZQUFJLEVBQUcsU0FGRztBQUdWQyxnQkFBUSxFQUFHLENBSEQsQ0FJVjs7QUFKVTtBQUpMLEtBTk07QUFpQmZDLFlBQVEsRUFBRTtBQUNSTixPQUFDLEVBQUcsQ0FBQztBQURHO0FBakJLLEdBQWpCO0FBc0JBLHNCQUVFLHFFQUFDLG9EQUFELENBQVEsR0FBUjtBQUFZLGFBQVMsWUFBTVIsU0FBUyxJQUFJUyxtREFBYixHQUFvQixhQUFwQixHQUFvQyxjQUExQyxvQ0FBckI7QUFBK0csV0FBTyxFQUFDLE9BQXZIO0FBQStILFdBQU8sRUFBQyxRQUF2STtBQUFnSixRQUFJLEVBQUMsVUFBcko7QUFDRSxZQUFRLEVBQUU7QUFDUkosV0FBSyxFQUFHO0FBQ05DLGNBQU0sRUFBRztBQURILE9BREE7QUFJUkksWUFBTSxFQUFHO0FBQ1BKLGNBQU0sRUFBRyxNQURGO0FBRVBLLGtCQUFVLEVBQUU7QUFDVjtBQUNBO0FBQ0FFLGtCQUFRLEVBQUcsQ0FIRDtBQUlWRSxlQUFLLEVBQUc7QUFKRTtBQUZMLE9BSkQ7QUFhUkQsY0FBUSxFQUFFO0FBQ1JOLFNBQUMsRUFBRyxDQUFDO0FBREc7QUFiRixLQURaO0FBa0JFLGNBQVUsRUFBRTtBQUNWSyxjQUFRLEVBQUc7QUFERCxLQWxCZDtBQUFBLDJCQXFCRSxxRUFBQyw2REFBRDtBQUFBLDZCQUNFLHFFQUFDLG9EQUFELENBQVEsR0FBUjtBQUFZLGlCQUFTLEVBQUMsYUFBdEI7QUFBb0QsZUFBTyxFQUFDLE9BQTVEO0FBQW9FLGVBQU8sRUFBQyxRQUE1RTtBQUFxRixZQUFJLEVBQUMsVUFBMUY7QUFDRSxnQkFBUSxFQUFFVCxRQURaO0FBRUUsa0JBQVUsRUFBRTtBQUNWUyxrQkFBUSxFQUFHO0FBREQsU0FGZDtBQUFBLCtCQU1FLHFFQUFDLFNBQUQsb0JBQWVaLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GLFNBQXlDRCxTQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXJCRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRkY7QUFtQ0Q7O0tBNURRRCxLO0FBOERNQSxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCBIb21lIGZyb20gJy4uL3BhZ2VzL2hvbWUnXG5cblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG5cbiAgY29uc29sZS5sb2coXCJwYWdlIGNvbXBvbmVudCA6Ojo6Ojo6Ojo6OiBcIiwgQ29tcG9uZW50KVxuICBjb25zdCB2YXJpYW50cyA9IHtcbiAgICBzdGFydCA6IHtcbiAgICAgIGhlaWdodCA6ICcxMDB2aCcsXG4gICAgICBzY2FsZTogMixcbiAgICAgIHkgOiAoQ29tcG9uZW50ID09PSBIb21lKSA/ICAyMDAwIDogMTAwMCxcbiAgICB9LFxuICAgIG9wZW5lZCA6IHtcbiAgICAgIGhlaWdodCA6ICdmdWxsJyxcbiAgICAgIHNjYWxlIDogMSxcbiAgICAgIHkgOiAwLFxuICAgICAgdHJhbnNpdGlvbiA6e1xuICAgICAgICAvLyB0eXBlOiBcInNwcmluZ1wiLFxuICAgICAgICBlYXNlIDogXCJlYXNlT3V0XCIsXG4gICAgICAgIGR1cmF0aW9uIDogMixcbiAgICAgICAgLy8gZGVsYXkgOiAwLjJcbiAgICAgIH1cbiAgICB9LFxuICAgIGV4aXRQYWdlOiB7XG4gICAgICB5IDogLTEwMDBcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuXG4gICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPXtgJHsgQ29tcG9uZW50ID09IEhvbWUgPyAnYmctZ3JheS05MDAnIDogJyBiZy1ibHVlLTQwMCd9IGgtc2NyZWVuIHctZnVsbCBvdmVyZmxvd0hpZGRlbmB9aW5pdGlhbD1cInN0YXJ0XCIgYW5pbWF0ZT1cIm9wZW5lZFwiIGV4aXQ9XCJleGl0UGFnZVwiXG4gICAgICB2YXJpYW50cz17e1xuICAgICAgICBzdGFydCA6IHtcbiAgICAgICAgICBoZWlnaHQgOiAnMTAwdmgnLFxuICAgICAgICB9LFxuICAgICAgICBvcGVuZWQgOiB7XG4gICAgICAgICAgaGVpZ2h0IDogJ2Z1bGwnLFxuICAgICAgICAgIHRyYW5zaXRpb24gOntcbiAgICAgICAgICAgIC8vIHR5cGU6IFwic3ByaW5nXCIsXG4gICAgICAgICAgICAvLyBlYXNlIDogXCJlYXNlT3V0XCIsXG4gICAgICAgICAgICBkdXJhdGlvbiA6IDIsXG4gICAgICAgICAgICBkZWxheSA6IDFcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGV4aXRQYWdlOiB7XG4gICAgICAgICAgeSA6IC0xMDAwXG4gICAgICAgIH1cbiAgICAgIH19XG4gICAgICB0cmFuc2l0aW9uPXt7XG4gICAgICAgIGR1cmF0aW9uIDogM1xuICAgICAgfX0+XG4gICAgICA8QW5pbWF0ZVByZXNlbmNlID5cbiAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiYmctZ3JheS05MDBcIiBrZXk9e0NvbXBvbmVudH0gaW5pdGlhbD1cInN0YXJ0XCIgYW5pbWF0ZT1cIm9wZW5lZFwiIGV4aXQ9XCJleGl0UGFnZVwiXG4gICAgICAgICAgdmFyaWFudHM9e3ZhcmlhbnRzfVxuICAgICAgICAgIHRyYW5zaXRpb249e3tcbiAgICAgICAgICAgIGR1cmF0aW9uIDogM1xuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgIDwvbW90aW9uLmRpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

})