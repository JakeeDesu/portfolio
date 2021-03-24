webpackHotUpdate_N_E("pages/scene",{

/***/ "./components/darkSky.js":
/*!*******************************!*\
  !*** ./components/darkSky.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DarkSky; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n\n\nvar _jsxFileName = \"/goinfre/hmhindat/portfolio/components/darkSky.js\",\n    _s = $RefreshSig$();\n\n\nfunction DarkSky(_ref) {\n  _s();\n\n  var height = _ref.height;\n\n  var _useViewportScroll = Object(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useViewportScroll\"])(),\n      scrollYProgress = _useViewportScroll.scrollYProgress;\n\n  var skyScale = Object(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useTransform\"])(scrollYProgress, [0, 0.9], [2, 1]);\n  var sky1offsetX = Object(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useTransform\"])(scrollYProgress, [0, 0.9], [500, 0]);\n  var sky2offsetX = Object(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useTransform\"])(scrollYProgress, [0, 0.9], [-500, 0]);\n  var variants = {\n    hidden1: {\n      x: '50%',\n      scale: 2\n    },\n    visible1: {\n      x: 0,\n      scale: 1,\n      transition: {\n        type: \"spring\",\n        duration: 2.5\n      }\n    },\n    hidden2: {\n      x: '-50%',\n      scale: 2\n    },\n    visible2: {\n      x: 0,\n      scale: 1,\n      transition: {\n        type: \"spring\",\n        duration: 2.5\n      }\n    }\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"relative flex flex-col \".concat(height, \" w-full overflow-hidden\"),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"h-1/4 w-full bg-gray-900\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"relative h-1/2 w-full\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n        className: \"absolute -top-full -left-1/4 h-2xfull w-3/4 rounded-fullp4   bg-gray-900\" // initial=\"hidden1\"\n        // animate={ openSky ? \"visible1\" :\"hidden1\"}\n        // variants={variants}\n        ,\n        style: {\n          x: sky1offsetX,\n          scale: skyScale\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n        style: {\n          x: sky2offsetX,\n          scale: skyScale\n        },\n        className: \"absolute -top-full -right-1/4 h-2xfull w-3/4 rounded-fullp4  bg-gray-900\" // initial=\"hidden2\"\n        // animate={ openSky ? \"visible2\" :\"hidden2\"}\n        // variants={variants}\n\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 3\n  }, this);\n}\n\n_s(DarkSky, \"YvhN7j/s7xhmdcOGdvz/njwv22U=\", false, function () {\n  return [framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useViewportScroll\"], framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useTransform\"]];\n});\n\n_c = DarkSky;\n\nvar _c;\n\n$RefreshReg$(_c, \"DarkSky\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXJrU2t5LmpzP2ZmZTciXSwibmFtZXMiOlsiRGFya1NreSIsImhlaWdodCIsInVzZVZpZXdwb3J0U2Nyb2xsIiwic2Nyb2xsWVByb2dyZXNzIiwic2t5U2NhbGUiLCJ1c2VUcmFuc2Zvcm0iLCJza3kxb2Zmc2V0WCIsInNreTJvZmZzZXRYIiwidmFyaWFudHMiLCJoaWRkZW4xIiwieCIsInNjYWxlIiwidmlzaWJsZTEiLCJ0cmFuc2l0aW9uIiwidHlwZSIsImR1cmF0aW9uIiwiaGlkZGVuMiIsInZpc2libGUyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxPQUFULE9BQTZCO0FBQUE7O0FBQUEsTUFBVkMsTUFBVSxRQUFWQSxNQUFVOztBQUFBLDJCQUNmQyx1RUFBaUIsRUFERjtBQUFBLE1BQ25DQyxlQURtQyxzQkFDbkNBLGVBRG1DOztBQUUzQyxNQUFNQyxRQUFRLEdBQUdDLGtFQUFZLENBQUNGLGVBQUQsRUFBa0IsQ0FBQyxDQUFELEVBQUksR0FBSixDQUFsQixFQUE0QixDQUFDLENBQUQsRUFBSSxDQUFKLENBQTVCLENBQTdCO0FBQ0EsTUFBTUcsV0FBVyxHQUFHRCxrRUFBWSxDQUFDRixlQUFELEVBQWtCLENBQUMsQ0FBRCxFQUFJLEdBQUosQ0FBbEIsRUFBNEIsQ0FBQyxHQUFELEVBQU0sQ0FBTixDQUE1QixDQUFoQztBQUNBLE1BQU1JLFdBQVcsR0FBR0Ysa0VBQVksQ0FBQ0YsZUFBRCxFQUFrQixDQUFDLENBQUQsRUFBSSxHQUFKLENBQWxCLEVBQTRCLENBQUMsQ0FBQyxHQUFGLEVBQU8sQ0FBUCxDQUE1QixDQUFoQztBQUNBLE1BQU1LLFFBQVEsR0FBRztBQUVoQkMsV0FBTyxFQUFFO0FBQ1JDLE9BQUMsRUFBRSxLQURLO0FBRVJDLFdBQUssRUFBRTtBQUZDLEtBRk87QUFNaEJDLFlBQVEsRUFBRTtBQUNURixPQUFDLEVBQUcsQ0FESztBQUVUQyxXQUFLLEVBQUUsQ0FGRTtBQUdURSxnQkFBVSxFQUFFO0FBQ1hDLFlBQUksRUFBRSxRQURLO0FBRVhDLGdCQUFRLEVBQUU7QUFGQztBQUhILEtBTk07QUFjaEJDLFdBQU8sRUFBRTtBQUNSTixPQUFDLEVBQUUsTUFESztBQUVSQyxXQUFLLEVBQUU7QUFGQyxLQWRPO0FBa0JoQk0sWUFBUSxFQUFFO0FBQ1RQLE9BQUMsRUFBRyxDQURLO0FBRVRDLFdBQUssRUFBRSxDQUZFO0FBR1RFLGdCQUFVLEVBQUU7QUFDWEMsWUFBSSxFQUFFLFFBREs7QUFFWEMsZ0JBQVEsRUFBRTtBQUZDO0FBSEg7QUFsQk0sR0FBakI7QUE0QkEsc0JBQ0M7QUFBSyxhQUFTLG1DQUE0QmQsTUFBNUIsNEJBQWQ7QUFBQSw0QkFDQztBQUFLLGVBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQUVDO0FBQUssZUFBUyx5QkFBZDtBQUFBLDhCQUNDLHFFQUFDLG9EQUFELENBQVEsR0FBUjtBQUNDLGlCQUFTLEVBQUMsMEVBRFgsQ0FFQztBQUNBO0FBQ0E7QUFKRDtBQUtDLGFBQUssRUFBRTtBQUNOUyxXQUFDLEVBQUdKLFdBREU7QUFFTkssZUFBSyxFQUFHUDtBQUZGO0FBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBV0MscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0EsYUFBSyxFQUFFO0FBQ05NLFdBQUMsRUFBR0gsV0FERTtBQUVOSSxlQUFLLEVBQUdQO0FBRkYsU0FEUDtBQUtDLGlCQUFTLEVBQUMsMEVBTFgsQ0FNQztBQUNBO0FBQ0E7O0FBUkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBNEJBOztHQTdEdUJKLE87VUFDS0UsK0QsRUFDWEcsMEQsRUFDR0EsMEQsRUFDQUEsMEQ7OztLQUpHTCxPIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9kYXJrU2t5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uLCB1c2VUcmFuc2Zvcm0sIHVzZVZpZXdwb3J0U2Nyb2xsIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFya1NreSh7IGhlaWdodCB9KSB7XG5cdGNvbnN0IHsgc2Nyb2xsWVByb2dyZXNzIH0gPSB1c2VWaWV3cG9ydFNjcm9sbCgpO1xuXHRjb25zdCBza3lTY2FsZSA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAwLjldLCBbMiwgMV0pO1xuXHRjb25zdCBza3kxb2Zmc2V0WCA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAwLjldLCBbNTAwLCAwXSk7XG5cdGNvbnN0IHNreTJvZmZzZXRYID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDAuOV0sIFstNTAwLCAwXSk7XG5cdGNvbnN0IHZhcmlhbnRzID0ge1xuXG5cdFx0aGlkZGVuMToge1xuXHRcdFx0eDogJzUwJScsXG5cdFx0XHRzY2FsZTogMlxuXHRcdH0sXG5cdFx0dmlzaWJsZTE6IHtcblx0XHRcdHggOiAwLFxuXHRcdFx0c2NhbGU6IDEsXG5cdFx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHRcdHR5cGU6IFwic3ByaW5nXCIsXG5cdFx0XHRcdGR1cmF0aW9uOiAyLjUsXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRoaWRkZW4yOiB7XG5cdFx0XHR4OiAnLTUwJScsXG5cdFx0XHRzY2FsZTogMlxuXHRcdH0sXG5cdFx0dmlzaWJsZTI6IHtcblx0XHRcdHggOiAwLFxuXHRcdFx0c2NhbGU6IDEsXG5cdFx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHRcdHR5cGU6IFwic3ByaW5nXCIsXG5cdFx0XHRcdGR1cmF0aW9uOiAyLjUsXG5cdFx0XHR9XG5cdFx0fSxcblxuXHR9XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e2ByZWxhdGl2ZSBmbGV4IGZsZXgtY29sICR7aGVpZ2h0fSB3LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuYH0gPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoLTEvNCB3LWZ1bGwgYmctZ3JheS05MDBcIj48L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgcmVsYXRpdmUgaC0xLzIgdy1mdWxsYH0+XG5cdFx0XHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYWJzb2x1dGUgLXRvcC1mdWxsIC1sZWZ0LTEvNCBoLTJ4ZnVsbCB3LTMvNCByb3VuZGVkLWZ1bGxwNCAgIGJnLWdyYXktOTAwXCJcblx0XHRcdFx0XHQvLyBpbml0aWFsPVwiaGlkZGVuMVwiXG5cdFx0XHRcdFx0Ly8gYW5pbWF0ZT17IG9wZW5Ta3kgPyBcInZpc2libGUxXCIgOlwiaGlkZGVuMVwifVxuXHRcdFx0XHRcdC8vIHZhcmlhbnRzPXt2YXJpYW50c31cblx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0eCA6IHNreTFvZmZzZXRYLFxuXHRcdFx0XHRcdFx0c2NhbGUgOiBza3lTY2FsZVxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdD48L21vdGlvbi5kaXY+XG5cdFx0XHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0eCA6IHNreTJvZmZzZXRYLFxuXHRcdFx0XHRcdHNjYWxlIDogc2t5U2NhbGVcblx0XHRcdFx0fX1cblx0XHRcdFx0XHRjbGFzc05hbWU9XCJhYnNvbHV0ZSAtdG9wLWZ1bGwgLXJpZ2h0LTEvNCBoLTJ4ZnVsbCB3LTMvNCByb3VuZGVkLWZ1bGxwNCAgYmctZ3JheS05MDBcIlxuXHRcdFx0XHRcdC8vIGluaXRpYWw9XCJoaWRkZW4yXCJcblx0XHRcdFx0XHQvLyBhbmltYXRlPXsgb3BlblNreSA/IFwidmlzaWJsZTJcIiA6XCJoaWRkZW4yXCJ9XG5cdFx0XHRcdFx0Ly8gdmFyaWFudHM9e3ZhcmlhbnRzfVxuXHRcdFx0XHQ+PC9tb3Rpb24uZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cblx0KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/darkSky.js\n");

/***/ })

})