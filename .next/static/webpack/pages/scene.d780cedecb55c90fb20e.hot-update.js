webpackHotUpdate_N_E("pages/scene",{

/***/ "./components/darkSky.js":
/*!*******************************!*\
  !*** ./components/darkSky.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DarkSky; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n\nvar _jsxFileName = \"/goinfre/hmhindat/portfolio/components/darkSky.js\";\n\nfunction DarkSky(_ref) {\n  var height = _ref.height;\n  var variants = {\n    hidden1: {\n      x: '50%',\n      scale: 2\n    },\n    visible1: {\n      x: 0,\n      scale: 1,\n      transition: {\n        type: \"spring\",\n        duration: 2.5\n      }\n    },\n    hidden2: {\n      x: '-50%',\n      scale: 2\n    },\n    visible2: {\n      x: 0,\n      scale: 1,\n      transition: {\n        type: \"spring\",\n        duration: 2.5\n      }\n    }\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"relative flex flex-col \".concat(height, \" w-full overflow-hidden\"),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"h-1/4 w-full bg-blue-400\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"relative h-1/2 w-full\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n        className: \"absolute -top-full -left-1/4 h-2xfull w-3/4 rounded-fullp4   bg-blue-400\",\n        initial: \"hidden1\",\n        animate: \"visible1\",\n        variants: variants\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n        className: \"absolute -top-full -right-1/4 h-2xfull w-3/4 rounded-fullp4  bg-blue-400\",\n        initial: \"hidden2\",\n        animate: \"visible2\",\n        variants: variants\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 3\n  }, this);\n}\n_c = DarkSky;\n\nvar _c;\n\n$RefreshReg$(_c, \"DarkSky\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXJrU2t5LmpzP2ZmZTciXSwibmFtZXMiOlsiRGFya1NreSIsImhlaWdodCIsInZhcmlhbnRzIiwiaGlkZGVuMSIsIngiLCJzY2FsZSIsInZpc2libGUxIiwidHJhbnNpdGlvbiIsInR5cGUiLCJkdXJhdGlvbiIsImhpZGRlbjIiLCJ2aXNpYmxlMiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsT0FBVCxPQUE2QjtBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTtBQUUzQyxNQUFNQyxRQUFRLEdBQUc7QUFFaEJDLFdBQU8sRUFBRTtBQUNSQyxPQUFDLEVBQUUsS0FESztBQUVSQyxXQUFLLEVBQUU7QUFGQyxLQUZPO0FBTWhCQyxZQUFRLEVBQUU7QUFDVEYsT0FBQyxFQUFHLENBREs7QUFFVEMsV0FBSyxFQUFFLENBRkU7QUFHVEUsZ0JBQVUsRUFBRTtBQUNYQyxZQUFJLEVBQUUsUUFESztBQUVYQyxnQkFBUSxFQUFFO0FBRkM7QUFISCxLQU5NO0FBY2hCQyxXQUFPLEVBQUU7QUFDUk4sT0FBQyxFQUFFLE1BREs7QUFFUkMsV0FBSyxFQUFFO0FBRkMsS0FkTztBQWtCaEJNLFlBQVEsRUFBRTtBQUNUUCxPQUFDLEVBQUcsQ0FESztBQUVUQyxXQUFLLEVBQUUsQ0FGRTtBQUdURSxnQkFBVSxFQUFFO0FBQ1hDLFlBQUksRUFBRSxRQURLO0FBRVhDLGdCQUFRLEVBQUU7QUFGQztBQUhIO0FBbEJNLEdBQWpCO0FBNEJBLHNCQUNDO0FBQUssYUFBUyxtQ0FBNEJSLE1BQTVCLDRCQUFkO0FBQUEsNEJBQ0M7QUFBSyxlQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFFQztBQUFLLGVBQVMseUJBQWQ7QUFBQSw4QkFDQyxxRUFBQyxvREFBRCxDQUFRLEdBQVI7QUFDQyxpQkFBUyxFQUFDLDBFQURYO0FBRUMsZUFBTyxFQUFDLFNBRlQ7QUFHQyxlQUFPLEVBQUMsVUFIVDtBQUlDLGdCQUFRLEVBQUVDO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBT0MscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0MsaUJBQVMsRUFBQywwRUFEWDtBQUVDLGVBQU8sRUFBQyxTQUZUO0FBR0MsZUFBTyxFQUFDLFVBSFQ7QUFJQyxnQkFBUSxFQUFFQTtBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQW9CQTtLQWxEdUJGLE8iLCJmaWxlIjoiLi9jb21wb25lbnRzL2RhcmtTa3kuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXJrU2t5KHsgaGVpZ2h0IH0pIHtcblxuXHRjb25zdCB2YXJpYW50cyA9IHtcblxuXHRcdGhpZGRlbjE6IHtcblx0XHRcdHg6ICc1MCUnLFxuXHRcdFx0c2NhbGU6IDJcblx0XHR9LFxuXHRcdHZpc2libGUxOiB7XG5cdFx0XHR4IDogMCxcblx0XHRcdHNjYWxlOiAxLFxuXHRcdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0XHR0eXBlOiBcInNwcmluZ1wiLFxuXHRcdFx0XHRkdXJhdGlvbjogMi41LFxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0aGlkZGVuMjoge1xuXHRcdFx0eDogJy01MCUnLFxuXHRcdFx0c2NhbGU6IDJcblx0XHR9LFxuXHRcdHZpc2libGUyOiB7XG5cdFx0XHR4IDogMCxcblx0XHRcdHNjYWxlOiAxLFxuXHRcdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0XHR0eXBlOiBcInNwcmluZ1wiLFxuXHRcdFx0XHRkdXJhdGlvbjogMi41LFxuXHRcdFx0fVxuXHRcdH0sXG5cblx0fVxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtgcmVsYXRpdmUgZmxleCBmbGV4LWNvbCAke2hlaWdodH0gdy1mdWxsIG92ZXJmbG93LWhpZGRlbmB9ID5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaC0xLzQgdy1mdWxsIGJnLWJsdWUtNDAwXCI+PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YHJlbGF0aXZlIGgtMS8yIHctZnVsbGB9PlxuXHRcdFx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImFic29sdXRlIC10b3AtZnVsbCAtbGVmdC0xLzQgaC0yeGZ1bGwgdy0zLzQgcm91bmRlZC1mdWxscDQgICBiZy1ibHVlLTQwMFwiXG5cdFx0XHRcdFx0aW5pdGlhbD1cImhpZGRlbjFcIlxuXHRcdFx0XHRcdGFuaW1hdGU9XCJ2aXNpYmxlMVwiXG5cdFx0XHRcdFx0dmFyaWFudHM9e3ZhcmlhbnRzfVxuXHRcdFx0XHQ+PC9tb3Rpb24uZGl2PlxuXHRcdFx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImFic29sdXRlIC10b3AtZnVsbCAtcmlnaHQtMS80IGgtMnhmdWxsIHctMy80IHJvdW5kZWQtZnVsbHA0ICBiZy1ibHVlLTQwMFwiXG5cdFx0XHRcdFx0aW5pdGlhbD1cImhpZGRlbjJcIlxuXHRcdFx0XHRcdGFuaW1hdGU9XCJ2aXNpYmxlMlwiXG5cdFx0XHRcdFx0dmFyaWFudHM9e3ZhcmlhbnRzfVxuXHRcdFx0XHQ+PC9tb3Rpb24uZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cblx0KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/darkSky.js\n");

/***/ })

})