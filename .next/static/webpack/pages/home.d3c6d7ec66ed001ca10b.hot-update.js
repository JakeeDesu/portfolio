webpackHotUpdate_N_E("pages/home",{

/***/ "./components/darkSky.js":
/*!*******************************!*\
  !*** ./components/darkSky.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DarkSky; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n\n\nvar _jsxFileName = \"/goinfre/hmhindat/portfolio/components/darkSky.js\",\n    _s = $RefreshSig$();\n\n\nfunction DarkSky(_ref) {\n  _s();\n\n  var openSky = _ref.openSky,\n      height = _ref.height;\n\n  // const x1 = useMotionValue(0)\n  // const x2 = useMotionValue(0)\n  var _useViewportScroll = Object(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useViewportScroll\"])(),\n      scrollYProgress = _useViewportScroll.scrollYProgress;\n\n  var skyScale = Object(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useTransform\"])(scrollYProgress, [-1, 1], [2, 1]);\n  var sky1offsetX = Object(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useTransform\"])(scrollYProgress, [-1, 1], [500, 0]);\n  var y1 = Object(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useTransform\"])(scrollYProgress, [-1, 1], [50, 0]);\n  var y2 = Object(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useTransform\"])(scrollYProgress, [-1, 1], [50, 0]); // const x1p = useTransform(sky1offsetX[0], (x) => `${x}%`);\n  // const x2p = useTransform(sky2offsetX[0], (x) => `${x}%`);\n\n  var sky2offsetX = Object(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useTransform\"])(scrollYProgress, [-1, 1], [-500, 0]);\n  var variants = {\n    hidden1: {\n      x: '50%',\n      scale: 2\n    },\n    visible1: {\n      x: 0,\n      scale: 1 // transition: {\n      // \ttype: \"spring\",\n      // \tduration: 2.5,\n      // }\n\n    },\n    hidden2: {\n      x: '-50%',\n      scale: 2\n    },\n    visible2: {\n      x: 0,\n      scale: 1 // transition: {\n      // \ttype: \"spring\",\n      // \tduration: 2.5,\n      // }\n\n    }\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"relative flex flex-col \".concat(height, \" w-full overflow-hidden bg-red-100\"),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"h-1/4 w-full bg-gray-900\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"relative h-1/2 w-full\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n        className: \"absolute -top-full -left-1/4 h-2xfull w-3/4 rounded-fullp4   bg-gray-900\" // initial=\"hidden1\"\n        // animate={ openSky ? \"visible1\" :\"hidden1\"}\n        // variants={variants}\n        ,\n        style: {\n          x: sky1offsetX,\n          y: y1,\n          scale: skyScale\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n        className: \"absolute -top-full -right-1/4 h-2xfull w-3/4 rounded-fullp4  bg-gray-900\",\n        style: {\n          x: sky2offsetX,\n          y: y2,\n          scale: skyScale\n        } // initial=\"hidden2\"\n        // animate={ openSky ? \"visible2\" :\"hidden2\"}\n        // variants={variants}\n\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 3\n  }, this);\n}\n\n_s(DarkSky, \"DqfCuPA7JLWZofVAF7WoZYs4gXY=\", false, function () {\n  return [framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useViewportScroll\"], framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useTransform\"]];\n});\n\n_c = DarkSky;\n\nvar _c;\n\n$RefreshReg$(_c, \"DarkSky\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXJrU2t5LmpzP2ZmZTciXSwibmFtZXMiOlsiRGFya1NreSIsIm9wZW5Ta3kiLCJoZWlnaHQiLCJ1c2VWaWV3cG9ydFNjcm9sbCIsInNjcm9sbFlQcm9ncmVzcyIsInNreVNjYWxlIiwidXNlVHJhbnNmb3JtIiwic2t5MW9mZnNldFgiLCJ5MSIsInkyIiwic2t5Mm9mZnNldFgiLCJ2YXJpYW50cyIsImhpZGRlbjEiLCJ4Iiwic2NhbGUiLCJ2aXNpYmxlMSIsImhpZGRlbjIiLCJ2aXNpYmxlMiIsInkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLE9BQVQsT0FBc0M7QUFBQTs7QUFBQSxNQUFuQkMsT0FBbUIsUUFBbkJBLE9BQW1CO0FBQUEsTUFBVkMsTUFBVSxRQUFWQSxNQUFVOztBQUVwRDtBQUNBO0FBSG9ELDJCQUt4QkMsdUVBQWlCLEVBTE87QUFBQSxNQUs1Q0MsZUFMNEMsc0JBSzVDQSxlQUw0Qzs7QUFNcEQsTUFBTUMsUUFBUSxHQUFHQyxrRUFBWSxDQUFDRixlQUFELEVBQWtCLENBQUMsQ0FBQyxDQUFGLEVBQUssQ0FBTCxDQUFsQixFQUEyQixDQUFDLENBQUQsRUFBSSxDQUFKLENBQTNCLENBQTdCO0FBQ0EsTUFBTUcsV0FBVyxHQUFHRCxrRUFBWSxDQUFDRixlQUFELEVBQWtCLENBQUMsQ0FBQyxDQUFGLEVBQUssQ0FBTCxDQUFsQixFQUEyQixDQUFDLEdBQUQsRUFBTSxDQUFOLENBQTNCLENBQWhDO0FBQ0EsTUFBTUksRUFBRSxHQUFFRixrRUFBWSxDQUFDRixlQUFELEVBQWtCLENBQUMsQ0FBQyxDQUFGLEVBQUssQ0FBTCxDQUFsQixFQUEyQixDQUFDLEVBQUQsRUFBSyxDQUFMLENBQTNCLENBQXRCO0FBQ0EsTUFBTUssRUFBRSxHQUFHSCxrRUFBWSxDQUFDRixlQUFELEVBQWtCLENBQUMsQ0FBQyxDQUFGLEVBQUssQ0FBTCxDQUFsQixFQUEyQixDQUFDLEVBQUQsRUFBSyxDQUFMLENBQTNCLENBQXZCLENBVG9ELENBVXBEO0FBQ0E7O0FBQ0EsTUFBTU0sV0FBVyxHQUFHSixrRUFBWSxDQUFDRixlQUFELEVBQWtCLENBQUMsQ0FBQyxDQUFGLEVBQUssQ0FBTCxDQUFsQixFQUEyQixDQUFDLENBQUMsR0FBRixFQUFPLENBQVAsQ0FBM0IsQ0FBaEM7QUFDQSxNQUFNTyxRQUFRLEdBQUc7QUFFaEJDLFdBQU8sRUFBRTtBQUNSQyxPQUFDLEVBQUUsS0FESztBQUVSQyxXQUFLLEVBQUU7QUFGQyxLQUZPO0FBTWhCQyxZQUFRLEVBQUU7QUFDVEYsT0FBQyxFQUFHLENBREs7QUFFVEMsV0FBSyxFQUFFLENBRkUsQ0FHVDtBQUNBO0FBQ0E7QUFDQTs7QUFOUyxLQU5NO0FBY2hCRSxXQUFPLEVBQUU7QUFDUkgsT0FBQyxFQUFFLE1BREs7QUFFUkMsV0FBSyxFQUFFO0FBRkMsS0FkTztBQWtCaEJHLFlBQVEsRUFBRTtBQUNUSixPQUFDLEVBQUcsQ0FESztBQUVUQyxXQUFLLEVBQUUsQ0FGRSxDQUdUO0FBQ0E7QUFDQTtBQUNBOztBQU5TO0FBbEJNLEdBQWpCO0FBNEJBLHNCQUNDO0FBQUssYUFBUyxtQ0FBNEJaLE1BQTVCLHVDQUFkO0FBQUEsNEJBQ0M7QUFBSyxlQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFFQztBQUFLLGVBQVMseUJBQWQ7QUFBQSw4QkFDQyxxRUFBQyxvREFBRCxDQUFRLEdBQVI7QUFDQyxpQkFBUyxFQUFDLDBFQURYLENBRUM7QUFDQTtBQUNBO0FBSkQ7QUFLQyxhQUFLLEVBQUU7QUFDTlcsV0FBQyxFQUFHTixXQURFO0FBRU5XLFdBQUMsRUFBRVYsRUFGRztBQUdOTSxlQUFLLEVBQUdUO0FBSEY7QUFMUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREQsZUFZQyxxRUFBQyxvREFBRCxDQUFRLEdBQVI7QUFDQSxpQkFBUyxFQUFDLDBFQURWO0FBRUEsYUFBSyxFQUFFO0FBQ05RLFdBQUMsRUFBR0gsV0FERTtBQUVOUSxXQUFDLEVBQUdULEVBRkU7QUFHTkssZUFBSyxFQUFHVDtBQUhGLFNBRlAsQ0FRQztBQUNBO0FBQ0E7O0FBVkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBK0JBOztHQXhFdUJMLE87VUFLS0csK0QsRUFDWEcsMEQsRUFDR0EsMEQsRUFDVkEsMEQsRUFDQ0EsMEQsRUFHU0EsMEQ7OztLQVpHTixPIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9kYXJrU2t5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uLCB1c2VUcmFuc2Zvcm0sIHVzZVZpZXdwb3J0U2Nyb2xsLCB1c2VNb3Rpb25WYWx1ZSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhcmtTa3koeyBvcGVuU2t5LCBoZWlnaHQgfSkge1xuXG5cdC8vIGNvbnN0IHgxID0gdXNlTW90aW9uVmFsdWUoMClcblx0Ly8gY29uc3QgeDIgPSB1c2VNb3Rpb25WYWx1ZSgwKVxuXG5cdGNvbnN0IHsgc2Nyb2xsWVByb2dyZXNzIH0gPSB1c2VWaWV3cG9ydFNjcm9sbCgpO1xuXHRjb25zdCBza3lTY2FsZSA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFstMSwgMV0sIFsyLCAxXSk7XG5cdGNvbnN0IHNreTFvZmZzZXRYID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWy0xLCAxXSwgWzUwMCwgMF0pO1xuXHRjb25zdCB5MT0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWy0xLCAxXSwgWzUwLCAwXSk7XG5cdGNvbnN0IHkyID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWy0xLCAxXSwgWzUwLCAwXSk7XG5cdC8vIGNvbnN0IHgxcCA9IHVzZVRyYW5zZm9ybShza3kxb2Zmc2V0WFswXSwgKHgpID0+IGAke3h9JWApO1xuXHQvLyBjb25zdCB4MnAgPSB1c2VUcmFuc2Zvcm0oc2t5Mm9mZnNldFhbMF0sICh4KSA9PiBgJHt4fSVgKTtcblx0Y29uc3Qgc2t5Mm9mZnNldFggPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbLTEsIDFdLCBbLTUwMCwgMF0pO1xuXHRjb25zdCB2YXJpYW50cyA9IHtcblxuXHRcdGhpZGRlbjE6IHtcblx0XHRcdHg6ICc1MCUnLFxuXHRcdFx0c2NhbGU6IDJcblx0XHR9LFxuXHRcdHZpc2libGUxOiB7XG5cdFx0XHR4IDogMCxcblx0XHRcdHNjYWxlOiAxLFxuXHRcdFx0Ly8gdHJhbnNpdGlvbjoge1xuXHRcdFx0Ly8gXHR0eXBlOiBcInNwcmluZ1wiLFxuXHRcdFx0Ly8gXHRkdXJhdGlvbjogMi41LFxuXHRcdFx0Ly8gfVxuXHRcdH0sXG5cdFx0aGlkZGVuMjoge1xuXHRcdFx0eDogJy01MCUnLFxuXHRcdFx0c2NhbGU6IDJcblx0XHR9LFxuXHRcdHZpc2libGUyOiB7XG5cdFx0XHR4IDogMCxcblx0XHRcdHNjYWxlOiAxLFxuXHRcdFx0Ly8gdHJhbnNpdGlvbjoge1xuXHRcdFx0Ly8gXHR0eXBlOiBcInNwcmluZ1wiLFxuXHRcdFx0Ly8gXHRkdXJhdGlvbjogMi41LFxuXHRcdFx0Ly8gfVxuXHRcdH0sXG5cblx0fVxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtgcmVsYXRpdmUgZmxleCBmbGV4LWNvbCAke2hlaWdodH0gdy1mdWxsIG92ZXJmbG93LWhpZGRlbiBiZy1yZWQtMTAwYH0gPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoLTEvNCB3LWZ1bGwgYmctZ3JheS05MDBcIj48L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgcmVsYXRpdmUgaC0xLzIgdy1mdWxsYH0+XG5cdFx0XHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYWJzb2x1dGUgLXRvcC1mdWxsIC1sZWZ0LTEvNCBoLTJ4ZnVsbCB3LTMvNCByb3VuZGVkLWZ1bGxwNCAgIGJnLWdyYXktOTAwXCJcblx0XHRcdFx0XHQvLyBpbml0aWFsPVwiaGlkZGVuMVwiXG5cdFx0XHRcdFx0Ly8gYW5pbWF0ZT17IG9wZW5Ta3kgPyBcInZpc2libGUxXCIgOlwiaGlkZGVuMVwifVxuXHRcdFx0XHRcdC8vIHZhcmlhbnRzPXt2YXJpYW50c31cblx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0eCA6IHNreTFvZmZzZXRYLFxuXHRcdFx0XHRcdFx0eTogeTEsXG5cdFx0XHRcdFx0XHRzY2FsZSA6IHNreVNjYWxlXG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0PjwvbW90aW9uLmRpdj5cblx0XHRcdFx0PG1vdGlvbi5kaXZcblx0XHRcdFx0Y2xhc3NOYW1lPVwiYWJzb2x1dGUgLXRvcC1mdWxsIC1yaWdodC0xLzQgaC0yeGZ1bGwgdy0zLzQgcm91bmRlZC1mdWxscDQgIGJnLWdyYXktOTAwXCJcblx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHR4IDogc2t5Mm9mZnNldFgsXG5cdFx0XHRcdFx0eSA6IHkyLFxuXHRcdFx0XHRcdHNjYWxlIDogc2t5U2NhbGVcblx0XHRcdFx0fX1cblxuXHRcdFx0XHRcdC8vIGluaXRpYWw9XCJoaWRkZW4yXCJcblx0XHRcdFx0XHQvLyBhbmltYXRlPXsgb3BlblNreSA/IFwidmlzaWJsZTJcIiA6XCJoaWRkZW4yXCJ9XG5cdFx0XHRcdFx0Ly8gdmFyaWFudHM9e3ZhcmlhbnRzfVxuXHRcdFx0XHQ+PC9tb3Rpb24uZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cblx0KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/darkSky.js\n");

/***/ })

})