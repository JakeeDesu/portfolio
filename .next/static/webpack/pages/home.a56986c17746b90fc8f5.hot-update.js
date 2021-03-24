webpackHotUpdate_N_E("pages/home",{

/***/ "./components/darkSkyOpen.js":
/*!***********************************!*\
  !*** ./components/darkSkyOpen.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DarkSkyOpen; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n\nvar _jsxFileName = \"/home/hamza/Desktop/portfolio/components/darkSkyOpen.js\";\n\nfunction DarkSkyOpen(_ref) {\n  var height = _ref.height;\n  var variants = {\n    hidden1: {\n      x: '50%',\n      scale: 2\n    },\n    visible1: {\n      x: 0,\n      scale: 1,\n      transition: {\n        type: \"spring\",\n        duration: 2.5\n      }\n    },\n    hidden2: {\n      x: '-50%',\n      scale: 2\n    },\n    visible2: {\n      x: 0,\n      scale: 1,\n      transition: {\n        type: \"spring\",\n        duration: 2.5\n      }\n    }\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"relative flex flex-col \".concat(height, \" w-full overflow-hidden bg-gray-900\"),\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"relative h-1/3 w-full overflow-hidden bg-blue-400\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n        className: \"absolute top-1/4 -left-1/4 h-xfull w-3/4 rounded-fullp4   bg-blue-400\",\n        initial: \"hidden1\",\n        animate: \"visible1\",\n        variants: variants\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n        className: \"absolute top-1/4 -right-1/4 h-2xfull w-3/4 rounded-fullp4  bg-blue-400\",\n        initial: \"hidden2\",\n        animate: \"visible2\",\n        variants: variants\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 4\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 3\n  }, this);\n}\n_c = DarkSkyOpen;\n\nvar _c;\n\n$RefreshReg$(_c, \"DarkSkyOpen\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXJrU2t5T3Blbi5qcz8wYjMzIl0sIm5hbWVzIjpbIkRhcmtTa3lPcGVuIiwiaGVpZ2h0IiwidmFyaWFudHMiLCJoaWRkZW4xIiwieCIsInNjYWxlIiwidmlzaWJsZTEiLCJ0cmFuc2l0aW9uIiwidHlwZSIsImR1cmF0aW9uIiwiaGlkZGVuMiIsInZpc2libGUyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxXQUFULE9BQWlDO0FBQUEsTUFBVkMsTUFBVSxRQUFWQSxNQUFVO0FBRS9DLE1BQU1DLFFBQVEsR0FBRztBQUVoQkMsV0FBTyxFQUFFO0FBQ1JDLE9BQUMsRUFBRSxLQURLO0FBRVJDLFdBQUssRUFBRTtBQUZDLEtBRk87QUFNaEJDLFlBQVEsRUFBRTtBQUNURixPQUFDLEVBQUcsQ0FESztBQUVUQyxXQUFLLEVBQUUsQ0FGRTtBQUdURSxnQkFBVSxFQUFFO0FBQ1hDLFlBQUksRUFBRSxRQURLO0FBRVhDLGdCQUFRLEVBQUU7QUFGQztBQUhILEtBTk07QUFjaEJDLFdBQU8sRUFBRTtBQUNSTixPQUFDLEVBQUUsTUFESztBQUVSQyxXQUFLLEVBQUU7QUFGQyxLQWRPO0FBa0JoQk0sWUFBUSxFQUFFO0FBQ1RQLE9BQUMsRUFBRyxDQURLO0FBRVRDLFdBQUssRUFBRSxDQUZFO0FBR1RFLGdCQUFVLEVBQUU7QUFDWEMsWUFBSSxFQUFFLFFBREs7QUFFWEMsZ0JBQVEsRUFBRTtBQUZDO0FBSEg7QUFsQk0sR0FBakI7QUE0QkEsc0JBQ0M7QUFBSyxhQUFTLG1DQUE0QlIsTUFBNUIsd0NBQWQ7QUFBQSwyQkFDQztBQUFLLGVBQVMscURBQWQ7QUFBQSw4QkFDQyxxRUFBQyxvREFBRCxDQUFRLEdBQVI7QUFDQyxpQkFBUyxFQUFDLHVFQURYO0FBRUMsZUFBTyxFQUFDLFNBRlQ7QUFHQyxlQUFPLEVBQUMsVUFIVDtBQUlDLGdCQUFRLEVBQUVDO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBT0MscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0MsaUJBQVMsRUFBQyx3RUFEWDtBQUVDLGVBQU8sRUFBQyxTQUZUO0FBR0MsZUFBTyxFQUFDLFVBSFQ7QUFJQyxnQkFBUSxFQUFFQTtBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUFtQkE7S0FqRHVCRixXIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9kYXJrU2t5T3Blbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhcmtTa3lPcGVuKHsgaGVpZ2h0IH0pIHtcblxuXHRjb25zdCB2YXJpYW50cyA9IHtcblxuXHRcdGhpZGRlbjE6IHtcblx0XHRcdHg6ICc1MCUnLFxuXHRcdFx0c2NhbGU6IDJcblx0XHR9LFxuXHRcdHZpc2libGUxOiB7XG5cdFx0XHR4IDogMCxcblx0XHRcdHNjYWxlOiAxLFxuXHRcdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0XHR0eXBlOiBcInNwcmluZ1wiLFxuXHRcdFx0XHRkdXJhdGlvbjogMi41LFxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0aGlkZGVuMjoge1xuXHRcdFx0eDogJy01MCUnLFxuXHRcdFx0c2NhbGU6IDJcblx0XHR9LFxuXHRcdHZpc2libGUyOiB7XG5cdFx0XHR4IDogMCxcblx0XHRcdHNjYWxlOiAxLFxuXHRcdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0XHR0eXBlOiBcInNwcmluZ1wiLFxuXHRcdFx0XHRkdXJhdGlvbjogMi41LFxuXHRcdFx0fVxuXHRcdH0sXG5cblx0fVxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtgcmVsYXRpdmUgZmxleCBmbGV4LWNvbCAke2hlaWdodH0gdy1mdWxsIG92ZXJmbG93LWhpZGRlbiBiZy1ncmF5LTkwMGB9ID5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgcmVsYXRpdmUgaC0xLzMgdy1mdWxsIG92ZXJmbG93LWhpZGRlbiBiZy1ibHVlLTQwMGB9PlxuXHRcdFx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0xLzQgLWxlZnQtMS80IGgteGZ1bGwgdy0zLzQgcm91bmRlZC1mdWxscDQgICBiZy1ibHVlLTQwMFwiXG5cdFx0XHRcdFx0aW5pdGlhbD1cImhpZGRlbjFcIlxuXHRcdFx0XHRcdGFuaW1hdGU9XCJ2aXNpYmxlMVwiXG5cdFx0XHRcdFx0dmFyaWFudHM9e3ZhcmlhbnRzfVxuXHRcdFx0XHQ+PC9tb3Rpb24uZGl2PlxuXHRcdFx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0xLzQgLXJpZ2h0LTEvNCBoLTJ4ZnVsbCB3LTMvNCByb3VuZGVkLWZ1bGxwNCAgYmctYmx1ZS00MDBcIlxuXHRcdFx0XHRcdGluaXRpYWw9XCJoaWRkZW4yXCJcblx0XHRcdFx0XHRhbmltYXRlPVwidmlzaWJsZTJcIlxuXHRcdFx0XHRcdHZhcmlhbnRzPXt2YXJpYW50c31cblx0XHRcdFx0PjwvbW90aW9uLmRpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXG5cdCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/darkSkyOpen.js\n");

/***/ })

})