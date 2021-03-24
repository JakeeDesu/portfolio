webpackHotUpdate_N_E("pages/scene",{

/***/ "./components/darkSky.js":
/*!*******************************!*\
  !*** ./components/darkSky.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DarkSky; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n\n\nvar _jsxFileName = \"/goinfre/hmhindat/portfolio/components/darkSky.js\",\n    _s = $RefreshSig$();\n\n\nfunction DarkSky(_ref) {\n  _s();\n\n  var height = _ref.height;\n\n  var _useViewportScroll = Object(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useViewportScroll\"])(),\n      scrollYProgress = _useViewportScroll.scrollYProgress;\n\n  var skyScale = Object(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useTransform\"])(scrollYProgress, [0, 0.9], [2, 1]);\n  var sky1offsetX = Object(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useTransform\"])(scrollYProgress, [0, 0.9], [500, 0]);\n  var sky2offsetX = Object(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useTransform\"])(scrollYProgress, [0, 0.9], [-500, 0]);\n  var variants = {\n    hidden1: {\n      x: '50%',\n      scale: 2\n    },\n    visible1: {\n      x: 0,\n      scale: 1,\n      transition: {\n        type: \"spring\",\n        duration: 2.5\n      }\n    },\n    hidden2: {\n      x: '-50%',\n      scale: 2\n    },\n    visible2: {\n      x: 0,\n      scale: 1,\n      transition: {\n        type: \"spring\",\n        duration: 2.5\n      }\n    }\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"relative flex flex-col \".concat(height, \" w-full overflow-hidden\"),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"h-1/4 w-full bg-gray-900\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"relative h-1/2 w-full\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n        className: \"absolute -top-full -left-1/4 h-2xfull w-3/4 rounded-fullp4   bg-gray-900\" // initial=\"hidden1\"\n        // animate={ openSky ? \"visible1\" :\"hidden1\"}\n        // variants={variants}\n        ,\n        style: {\n          x: sky1offsetX,\n          scale: skyScale\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n        style: {\n          x: sky2offsetX,\n          scale: skyScale\n        },\n        className: \"absolute -top-full -right-1/4 h-2xfull w-3/4 rounded-fullp4  bg-gray-900\",\n        initial: \"hidden2\",\n        animate: openSky ? \"visible2\" : \"hidden2\",\n        variants: variants\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 3\n  }, this);\n}\n\n_s(DarkSky, \"YvhN7j/s7xhmdcOGdvz/njwv22U=\", false, function () {\n  return [framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useViewportScroll\"], framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useTransform\"]];\n});\n\n_c = DarkSky;\n\nvar _c;\n\n$RefreshReg$(_c, \"DarkSky\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXJrU2t5LmpzP2ZmZTciXSwibmFtZXMiOlsiRGFya1NreSIsImhlaWdodCIsInVzZVZpZXdwb3J0U2Nyb2xsIiwic2Nyb2xsWVByb2dyZXNzIiwic2t5U2NhbGUiLCJ1c2VUcmFuc2Zvcm0iLCJza3kxb2Zmc2V0WCIsInNreTJvZmZzZXRYIiwidmFyaWFudHMiLCJoaWRkZW4xIiwieCIsInNjYWxlIiwidmlzaWJsZTEiLCJ0cmFuc2l0aW9uIiwidHlwZSIsImR1cmF0aW9uIiwiaGlkZGVuMiIsInZpc2libGUyIiwib3BlblNreSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsT0FBVCxPQUE2QjtBQUFBOztBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTs7QUFBQSwyQkFDZkMsdUVBQWlCLEVBREY7QUFBQSxNQUNuQ0MsZUFEbUMsc0JBQ25DQSxlQURtQzs7QUFFM0MsTUFBTUMsUUFBUSxHQUFHQyxrRUFBWSxDQUFDRixlQUFELEVBQWtCLENBQUMsQ0FBRCxFQUFJLEdBQUosQ0FBbEIsRUFBNEIsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUE1QixDQUE3QjtBQUNBLE1BQU1HLFdBQVcsR0FBR0Qsa0VBQVksQ0FBQ0YsZUFBRCxFQUFrQixDQUFDLENBQUQsRUFBSSxHQUFKLENBQWxCLEVBQTRCLENBQUMsR0FBRCxFQUFNLENBQU4sQ0FBNUIsQ0FBaEM7QUFDQSxNQUFNSSxXQUFXLEdBQUdGLGtFQUFZLENBQUNGLGVBQUQsRUFBa0IsQ0FBQyxDQUFELEVBQUksR0FBSixDQUFsQixFQUE0QixDQUFDLENBQUMsR0FBRixFQUFPLENBQVAsQ0FBNUIsQ0FBaEM7QUFDQSxNQUFNSyxRQUFRLEdBQUc7QUFFaEJDLFdBQU8sRUFBRTtBQUNSQyxPQUFDLEVBQUUsS0FESztBQUVSQyxXQUFLLEVBQUU7QUFGQyxLQUZPO0FBTWhCQyxZQUFRLEVBQUU7QUFDVEYsT0FBQyxFQUFHLENBREs7QUFFVEMsV0FBSyxFQUFFLENBRkU7QUFHVEUsZ0JBQVUsRUFBRTtBQUNYQyxZQUFJLEVBQUUsUUFESztBQUVYQyxnQkFBUSxFQUFFO0FBRkM7QUFISCxLQU5NO0FBY2hCQyxXQUFPLEVBQUU7QUFDUk4sT0FBQyxFQUFFLE1BREs7QUFFUkMsV0FBSyxFQUFFO0FBRkMsS0FkTztBQWtCaEJNLFlBQVEsRUFBRTtBQUNUUCxPQUFDLEVBQUcsQ0FESztBQUVUQyxXQUFLLEVBQUUsQ0FGRTtBQUdURSxnQkFBVSxFQUFFO0FBQ1hDLFlBQUksRUFBRSxRQURLO0FBRVhDLGdCQUFRLEVBQUU7QUFGQztBQUhIO0FBbEJNLEdBQWpCO0FBNEJBLHNCQUNDO0FBQUssYUFBUyxtQ0FBNEJkLE1BQTVCLDRCQUFkO0FBQUEsNEJBQ0M7QUFBSyxlQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFFQztBQUFLLGVBQVMseUJBQWQ7QUFBQSw4QkFDQyxxRUFBQyxvREFBRCxDQUFRLEdBQVI7QUFDQyxpQkFBUyxFQUFDLDBFQURYLENBRUM7QUFDQTtBQUNBO0FBSkQ7QUFLQyxhQUFLLEVBQUU7QUFDTlMsV0FBQyxFQUFHSixXQURFO0FBRU5LLGVBQUssRUFBR1A7QUFGRjtBQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQVdDLHFFQUFDLG9EQUFELENBQVEsR0FBUjtBQUNBLGFBQUssRUFBRTtBQUNOTSxXQUFDLEVBQUdILFdBREU7QUFFTkksZUFBSyxFQUFHUDtBQUZGLFNBRFA7QUFLQyxpQkFBUyxFQUFDLDBFQUxYO0FBTUMsZUFBTyxFQUFDLFNBTlQ7QUFPQyxlQUFPLEVBQUdjLE9BQU8sR0FBRyxVQUFILEdBQWUsU0FQakM7QUFRQyxnQkFBUSxFQUFFVjtBQVJYO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQTRCQTs7R0E3RHVCUixPO1VBQ0tFLCtELEVBQ1hHLDBELEVBQ0dBLDBELEVBQ0FBLDBEOzs7S0FKR0wsTyIsImZpbGUiOiIuL2NvbXBvbmVudHMvZGFya1NreS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdGlvbiwgdXNlVHJhbnNmb3JtLCB1c2VWaWV3cG9ydFNjcm9sbCB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhcmtTa3koeyBoZWlnaHQgfSkge1xuXHRjb25zdCB7IHNjcm9sbFlQcm9ncmVzcyB9ID0gdXNlVmlld3BvcnRTY3JvbGwoKTtcblx0Y29uc3Qgc2t5U2NhbGUgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMC45XSwgWzIsIDFdKTtcblx0Y29uc3Qgc2t5MW9mZnNldFggPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMC45XSwgWzUwMCwgMF0pO1xuXHRjb25zdCBza3kyb2Zmc2V0WCA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAwLjldLCBbLTUwMCwgMF0pO1xuXHRjb25zdCB2YXJpYW50cyA9IHtcblxuXHRcdGhpZGRlbjE6IHtcblx0XHRcdHg6ICc1MCUnLFxuXHRcdFx0c2NhbGU6IDJcblx0XHR9LFxuXHRcdHZpc2libGUxOiB7XG5cdFx0XHR4IDogMCxcblx0XHRcdHNjYWxlOiAxLFxuXHRcdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0XHR0eXBlOiBcInNwcmluZ1wiLFxuXHRcdFx0XHRkdXJhdGlvbjogMi41LFxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0aGlkZGVuMjoge1xuXHRcdFx0eDogJy01MCUnLFxuXHRcdFx0c2NhbGU6IDJcblx0XHR9LFxuXHRcdHZpc2libGUyOiB7XG5cdFx0XHR4IDogMCxcblx0XHRcdHNjYWxlOiAxLFxuXHRcdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0XHR0eXBlOiBcInNwcmluZ1wiLFxuXHRcdFx0XHRkdXJhdGlvbjogMi41LFxuXHRcdFx0fVxuXHRcdH0sXG5cblx0fVxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtgcmVsYXRpdmUgZmxleCBmbGV4LWNvbCAke2hlaWdodH0gdy1mdWxsIG92ZXJmbG93LWhpZGRlbmB9ID5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaC0xLzQgdy1mdWxsIGJnLWdyYXktOTAwXCI+PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YHJlbGF0aXZlIGgtMS8yIHctZnVsbGB9PlxuXHRcdFx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImFic29sdXRlIC10b3AtZnVsbCAtbGVmdC0xLzQgaC0yeGZ1bGwgdy0zLzQgcm91bmRlZC1mdWxscDQgICBiZy1ncmF5LTkwMFwiXG5cdFx0XHRcdFx0Ly8gaW5pdGlhbD1cImhpZGRlbjFcIlxuXHRcdFx0XHRcdC8vIGFuaW1hdGU9eyBvcGVuU2t5ID8gXCJ2aXNpYmxlMVwiIDpcImhpZGRlbjFcIn1cblx0XHRcdFx0XHQvLyB2YXJpYW50cz17dmFyaWFudHN9XG5cdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdHggOiBza3kxb2Zmc2V0WCxcblx0XHRcdFx0XHRcdHNjYWxlIDogc2t5U2NhbGVcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQ+PC9tb3Rpb24uZGl2PlxuXHRcdFx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdHggOiBza3kyb2Zmc2V0WCxcblx0XHRcdFx0XHRzY2FsZSA6IHNreVNjYWxlXG5cdFx0XHRcdH19XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYWJzb2x1dGUgLXRvcC1mdWxsIC1yaWdodC0xLzQgaC0yeGZ1bGwgdy0zLzQgcm91bmRlZC1mdWxscDQgIGJnLWdyYXktOTAwXCJcblx0XHRcdFx0XHRpbml0aWFsPVwiaGlkZGVuMlwiXG5cdFx0XHRcdFx0YW5pbWF0ZT17IG9wZW5Ta3kgPyBcInZpc2libGUyXCIgOlwiaGlkZGVuMlwifVxuXHRcdFx0XHRcdHZhcmlhbnRzPXt2YXJpYW50c31cblx0XHRcdFx0PjwvbW90aW9uLmRpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXG5cdCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/darkSky.js\n");

/***/ })

})