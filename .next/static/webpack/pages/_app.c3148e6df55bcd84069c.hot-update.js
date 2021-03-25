webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/darkSky.js":
/*!*******************************!*\
  !*** ./components/darkSky.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DarkSky; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n\n\nvar _jsxFileName = \"/home/hamza/Desktop/portfolio/components/darkSky.js\",\n    _s = $RefreshSig$();\n\n\nfunction DarkSky(_ref) {\n  _s();\n\n  var openSky = _ref.openSky,\n      height = _ref.height;\n\n  // const x1 = useMotionValue(0)\n  // const x2 = useMotionValue(0)\n  var _useViewportScroll = Object(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useViewportScroll\"])(),\n      scrollYProgress = _useViewportScroll.scrollYProgress;\n\n  var skyScale = Object(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useTransform\"])(scrollYProgress, [0, 0.5, 1], [2, 1, 1]);\n  var sky1offsetX = Object(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useTransform\"])(scrollYProgress, [0, 0.5, 1], [900, 0, -100]); // const y1= useTransform(scrollYProgress, [0, 1], [50, 0]);\n  // const y2 = useTransform(scrollYProgress, [0, 1], [50, 0]);\n  // const x1p = useTransform(sky1offsetX[0], (x) => `${x}%`);\n  // const x2p = useTransform(sky2offsetX[0], (x) => `${x}%`);\n\n  var sky2offsetX = Object(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useTransform\"])(scrollYProgress, [0, 0.5, 1], [-900, 0, 100]);\n  var variants = {\n    hidden1: {\n      x: '50%',\n      scale: 2\n    },\n    visible1: {\n      x: 0,\n      scale: 1 // transition: {\n      // \ttype: \"spring\",\n      // \tduration: 2.5,\n      // }\n\n    },\n    hidden2: {\n      x: '-50%',\n      scale: 2\n    },\n    visible2: {\n      x: 0,\n      scale: 1 // transition: {\n      // \ttype: \"spring\",\n      // \tduration: 2.5,\n      // }\n\n    }\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"relative flex flex-col \".concat(height, \" w-full overflow-hidden\"),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"h-1/4 w-full bg-gray-900\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"relative h-1/2 w-full\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n        className: \"absolute -top-full -left-1/4 h-2xfull w-3/4 rounded-fullp4   bg-gray-900\" // initial=\"hidden1\"\n        // animate={ openSky ? \"visible1\" :\"hidden1\"}\n        // variants={variants}\n        ,\n        style: {\n          x: sky1offsetX,\n          // y: y1,\n          scale: skyScale\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n        className: \"absolute -top-full -right-1/4 h-2xfull w-3/4 rounded-fullp4  bg-gray-900\",\n        style: {\n          x: sky2offsetX,\n          // y : y2,\n          scale: skyScale\n        } // initial=\"hidden2\"\n        // animate={ openSky ? \"visible2\" :\"hidden2\"}\n        // variants={variants}\n\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 3\n  }, this);\n}\n\n_s(DarkSky, \"YvhN7j/s7xhmdcOGdvz/njwv22U=\", false, function () {\n  return [framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useViewportScroll\"], framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useTransform\"]];\n});\n\n_c = DarkSky;\n\nvar _c;\n\n$RefreshReg$(_c, \"DarkSky\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXJrU2t5LmpzP2ZmZTciXSwibmFtZXMiOlsiRGFya1NreSIsIm9wZW5Ta3kiLCJoZWlnaHQiLCJ1c2VWaWV3cG9ydFNjcm9sbCIsInNjcm9sbFlQcm9ncmVzcyIsInNreVNjYWxlIiwidXNlVHJhbnNmb3JtIiwic2t5MW9mZnNldFgiLCJza3kyb2Zmc2V0WCIsInZhcmlhbnRzIiwiaGlkZGVuMSIsIngiLCJzY2FsZSIsInZpc2libGUxIiwiaGlkZGVuMiIsInZpc2libGUyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxPQUFULE9BQXNDO0FBQUE7O0FBQUEsTUFBbkJDLE9BQW1CLFFBQW5CQSxPQUFtQjtBQUFBLE1BQVZDLE1BQVUsUUFBVkEsTUFBVTs7QUFFcEQ7QUFDQTtBQUhvRCwyQkFLeEJDLHVFQUFpQixFQUxPO0FBQUEsTUFLNUNDLGVBTDRDLHNCQUs1Q0EsZUFMNEM7O0FBTXBELE1BQU1DLFFBQVEsR0FBR0Msa0VBQVksQ0FBQ0YsZUFBRCxFQUFrQixDQUFDLENBQUQsRUFBSSxHQUFKLEVBQVMsQ0FBVCxDQUFsQixFQUErQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUEvQixDQUE3QjtBQUNBLE1BQU1HLFdBQVcsR0FBR0Qsa0VBQVksQ0FBQ0YsZUFBRCxFQUFrQixDQUFDLENBQUQsRUFBSSxHQUFKLEVBQVMsQ0FBVCxDQUFsQixFQUErQixDQUFDLEdBQUQsRUFBTSxDQUFOLEVBQVMsQ0FBQyxHQUFWLENBQS9CLENBQWhDLENBUG9ELENBUXBEO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE1BQU1JLFdBQVcsR0FBR0Ysa0VBQVksQ0FBQ0YsZUFBRCxFQUFrQixDQUFDLENBQUQsRUFBSSxHQUFKLEVBQVMsQ0FBVCxDQUFsQixFQUErQixDQUFDLENBQUMsR0FBRixFQUFPLENBQVAsRUFBVSxHQUFWLENBQS9CLENBQWhDO0FBQ0EsTUFBTUssUUFBUSxHQUFHO0FBRWhCQyxXQUFPLEVBQUU7QUFDUkMsT0FBQyxFQUFFLEtBREs7QUFFUkMsV0FBSyxFQUFFO0FBRkMsS0FGTztBQU1oQkMsWUFBUSxFQUFFO0FBQ1RGLE9BQUMsRUFBRyxDQURLO0FBRVRDLFdBQUssRUFBRSxDQUZFLENBR1Q7QUFDQTtBQUNBO0FBQ0E7O0FBTlMsS0FOTTtBQWNoQkUsV0FBTyxFQUFFO0FBQ1JILE9BQUMsRUFBRSxNQURLO0FBRVJDLFdBQUssRUFBRTtBQUZDLEtBZE87QUFrQmhCRyxZQUFRLEVBQUU7QUFDVEosT0FBQyxFQUFHLENBREs7QUFFVEMsV0FBSyxFQUFFLENBRkUsQ0FHVDtBQUNBO0FBQ0E7QUFDQTs7QUFOUztBQWxCTSxHQUFqQjtBQTRCQSxzQkFDQztBQUFLLGFBQVMsbUNBQTRCVixNQUE1Qiw0QkFBZDtBQUFBLDRCQUNDO0FBQUssZUFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBRUM7QUFBSyxlQUFTLHlCQUFkO0FBQUEsOEJBQ0MscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0MsaUJBQVMsRUFBQywwRUFEWCxDQUVDO0FBQ0E7QUFDQTtBQUpEO0FBS0MsYUFBSyxFQUFFO0FBQ05TLFdBQUMsRUFBR0osV0FERTtBQUVOO0FBQ0FLLGVBQUssRUFBR1A7QUFIRjtBQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQVlDLHFFQUFDLG9EQUFELENBQVEsR0FBUjtBQUNBLGlCQUFTLEVBQUMsMEVBRFY7QUFFQSxhQUFLLEVBQUU7QUFDTk0sV0FBQyxFQUFHSCxXQURFO0FBRU47QUFDQUksZUFBSyxFQUFHUDtBQUhGLFNBRlAsQ0FRQztBQUNBO0FBQ0E7O0FBVkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBK0JBOztHQXhFdUJMLE87VUFLS0csK0QsRUFDWEcsMEQsRUFDR0EsMEQsRUFLQUEsMEQ7OztLQVpHTixPIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9kYXJrU2t5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uLCB1c2VUcmFuc2Zvcm0sIHVzZVZpZXdwb3J0U2Nyb2xsLCB1c2VNb3Rpb25WYWx1ZSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhcmtTa3koeyBvcGVuU2t5LCBoZWlnaHQgfSkge1xuXG5cdC8vIGNvbnN0IHgxID0gdXNlTW90aW9uVmFsdWUoMClcblx0Ly8gY29uc3QgeDIgPSB1c2VNb3Rpb25WYWx1ZSgwKVxuXG5cdGNvbnN0IHsgc2Nyb2xsWVByb2dyZXNzIH0gPSB1c2VWaWV3cG9ydFNjcm9sbCgpO1xuXHRjb25zdCBza3lTY2FsZSA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAwLjUsIDFdLCBbMiwgMSwgMV0pO1xuXHRjb25zdCBza3kxb2Zmc2V0WCA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAwLjUsIDFdLCBbOTAwLCAwLCAtMTAwXSk7XG5cdC8vIGNvbnN0IHkxPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMV0sIFs1MCwgMF0pO1xuXHQvLyBjb25zdCB5MiA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAxXSwgWzUwLCAwXSk7XG5cdC8vIGNvbnN0IHgxcCA9IHVzZVRyYW5zZm9ybShza3kxb2Zmc2V0WFswXSwgKHgpID0+IGAke3h9JWApO1xuXHQvLyBjb25zdCB4MnAgPSB1c2VUcmFuc2Zvcm0oc2t5Mm9mZnNldFhbMF0sICh4KSA9PiBgJHt4fSVgKTtcblx0Y29uc3Qgc2t5Mm9mZnNldFggPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMC41LCAxXSwgWy05MDAsIDAsIDEwMF0pO1xuXHRjb25zdCB2YXJpYW50cyA9IHtcblxuXHRcdGhpZGRlbjE6IHtcblx0XHRcdHg6ICc1MCUnLFxuXHRcdFx0c2NhbGU6IDJcblx0XHR9LFxuXHRcdHZpc2libGUxOiB7XG5cdFx0XHR4IDogMCxcblx0XHRcdHNjYWxlOiAxLFxuXHRcdFx0Ly8gdHJhbnNpdGlvbjoge1xuXHRcdFx0Ly8gXHR0eXBlOiBcInNwcmluZ1wiLFxuXHRcdFx0Ly8gXHRkdXJhdGlvbjogMi41LFxuXHRcdFx0Ly8gfVxuXHRcdH0sXG5cdFx0aGlkZGVuMjoge1xuXHRcdFx0eDogJy01MCUnLFxuXHRcdFx0c2NhbGU6IDJcblx0XHR9LFxuXHRcdHZpc2libGUyOiB7XG5cdFx0XHR4IDogMCxcblx0XHRcdHNjYWxlOiAxLFxuXHRcdFx0Ly8gdHJhbnNpdGlvbjoge1xuXHRcdFx0Ly8gXHR0eXBlOiBcInNwcmluZ1wiLFxuXHRcdFx0Ly8gXHRkdXJhdGlvbjogMi41LFxuXHRcdFx0Ly8gfVxuXHRcdH0sXG5cblx0fVxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtgcmVsYXRpdmUgZmxleCBmbGV4LWNvbCAke2hlaWdodH0gdy1mdWxsIG92ZXJmbG93LWhpZGRlbmB9ID5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaC0xLzQgdy1mdWxsIGJnLWdyYXktOTAwXCI+PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YHJlbGF0aXZlIGgtMS8yIHctZnVsbGB9PlxuXHRcdFx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImFic29sdXRlIC10b3AtZnVsbCAtbGVmdC0xLzQgaC0yeGZ1bGwgdy0zLzQgcm91bmRlZC1mdWxscDQgICBiZy1ncmF5LTkwMFwiXG5cdFx0XHRcdFx0Ly8gaW5pdGlhbD1cImhpZGRlbjFcIlxuXHRcdFx0XHRcdC8vIGFuaW1hdGU9eyBvcGVuU2t5ID8gXCJ2aXNpYmxlMVwiIDpcImhpZGRlbjFcIn1cblx0XHRcdFx0XHQvLyB2YXJpYW50cz17dmFyaWFudHN9XG5cdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdHggOiBza3kxb2Zmc2V0WCxcblx0XHRcdFx0XHRcdC8vIHk6IHkxLFxuXHRcdFx0XHRcdFx0c2NhbGUgOiBza3lTY2FsZVxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdD48L21vdGlvbi5kaXY+XG5cdFx0XHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRcdGNsYXNzTmFtZT1cImFic29sdXRlIC10b3AtZnVsbCAtcmlnaHQtMS80IGgtMnhmdWxsIHctMy80IHJvdW5kZWQtZnVsbHA0ICBiZy1ncmF5LTkwMFwiXG5cdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0eCA6IHNreTJvZmZzZXRYLFxuXHRcdFx0XHRcdC8vIHkgOiB5Mixcblx0XHRcdFx0XHRzY2FsZSA6IHNreVNjYWxlXG5cdFx0XHRcdH19XG5cblx0XHRcdFx0XHQvLyBpbml0aWFsPVwiaGlkZGVuMlwiXG5cdFx0XHRcdFx0Ly8gYW5pbWF0ZT17IG9wZW5Ta3kgPyBcInZpc2libGUyXCIgOlwiaGlkZGVuMlwifVxuXHRcdFx0XHRcdC8vIHZhcmlhbnRzPXt2YXJpYW50c31cblx0XHRcdFx0PjwvbW90aW9uLmRpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXG5cdCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/darkSky.js\n");

/***/ })

})