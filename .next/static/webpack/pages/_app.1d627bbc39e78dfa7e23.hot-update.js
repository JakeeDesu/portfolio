webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/darkSky.js":
/*!*******************************!*\
  !*** ./components/darkSky.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DarkSky; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n\n\nvar _jsxFileName = \"/goinfre/hmhindat/portfolio/components/darkSky.js\",\n    _s = $RefreshSig$();\n\n\nfunction DarkSky(_ref) {\n  _s();\n\n  var openSky = _ref.openSky,\n      height = _ref.height;\n\n  // const x1 = useMotionValue(0)\n  // const x2 = useMotionValue(0)\n  var _useViewportScroll = Object(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useViewportScroll\"])(),\n      scrollYProgress = _useViewportScroll.scrollYProgress;\n\n  var skyScale = Object(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useTransform\"])(scrollYProgress, [0, 1], [2, 1]);\n  var sky1offsetX = Object(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useTransform\"])(scrollYProgress, [0, 0.3, 1], [500, 10, 0]); // const x1p = useTransform(sky1offsetX[0], (x) => `${x}%`);\n  // const x2p = useTransform(sky2offsetX[0], (x) => `${x}%`);\n\n  var sky2offsetX = Object(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useTransform\"])(scrollYProgress, [0, 0.3, 1], [-500, 10, 0]);\n  var variants = {\n    hidden1: {\n      x: '50%',\n      scale: 2\n    },\n    visible1: {\n      x: 0,\n      scale: 1,\n      transition: {\n        type: \"spring\",\n        duration: 2.5\n      }\n    },\n    hidden2: {\n      x: '-50%',\n      scale: 2\n    },\n    visible2: {\n      x: 0,\n      scale: 1,\n      transition: {\n        type: \"spring\",\n        duration: 2.5\n      }\n    }\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"relative flex flex-col \".concat(height, \" w-full overflow-hidden bg-red-100\"),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"h-1/4 w-full bg-gray-900\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"relative h-1/2 w-full\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n        className: \"absolute -top-full -left-1/4 h-2xfull w-3/4 rounded-fullp4   bg-gray-900\" // initial=\"hidden1\"\n        // animate={ openSky ? \"visible1\" :\"hidden1\"}\n        // variants={variants}\n        ,\n        style: {\n          x: sky1offsetX,\n          scale: skyScale\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n        className: \"absolute -top-full -right-1/4 h-2xfull w-3/4 rounded-fullp4  bg-gray-900\",\n        style: {\n          x: sky2offsetX,\n          scale: skyScale\n        } // initial=\"hidden2\"\n        // animate={ openSky ? \"visible2\" :\"hidden2\"}\n        // variants={variants}\n\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 3\n  }, this);\n}\n\n_s(DarkSky, \"YvhN7j/s7xhmdcOGdvz/njwv22U=\", false, function () {\n  return [framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useViewportScroll\"], framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useTransform\"]];\n});\n\n_c = DarkSky;\n\nvar _c;\n\n$RefreshReg$(_c, \"DarkSky\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXJrU2t5LmpzP2ZmZTciXSwibmFtZXMiOlsiRGFya1NreSIsIm9wZW5Ta3kiLCJoZWlnaHQiLCJ1c2VWaWV3cG9ydFNjcm9sbCIsInNjcm9sbFlQcm9ncmVzcyIsInNreVNjYWxlIiwidXNlVHJhbnNmb3JtIiwic2t5MW9mZnNldFgiLCJza3kyb2Zmc2V0WCIsInZhcmlhbnRzIiwiaGlkZGVuMSIsIngiLCJzY2FsZSIsInZpc2libGUxIiwidHJhbnNpdGlvbiIsInR5cGUiLCJkdXJhdGlvbiIsImhpZGRlbjIiLCJ2aXNpYmxlMiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsT0FBVCxPQUFzQztBQUFBOztBQUFBLE1BQW5CQyxPQUFtQixRQUFuQkEsT0FBbUI7QUFBQSxNQUFWQyxNQUFVLFFBQVZBLE1BQVU7O0FBRXBEO0FBQ0E7QUFIb0QsMkJBS3hCQyx1RUFBaUIsRUFMTztBQUFBLE1BSzVDQyxlQUw0QyxzQkFLNUNBLGVBTDRDOztBQU1wRCxNQUFNQyxRQUFRLEdBQUdDLGtFQUFZLENBQUNGLGVBQUQsRUFBa0IsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFsQixFQUEwQixDQUFDLENBQUQsRUFBSSxDQUFKLENBQTFCLENBQTdCO0FBQ0EsTUFBTUcsV0FBVyxHQUFHRCxrRUFBWSxDQUFDRixlQUFELEVBQWtCLENBQUMsQ0FBRCxFQUFJLEdBQUosRUFBUyxDQUFULENBQWxCLEVBQStCLENBQUMsR0FBRCxFQUFNLEVBQU4sRUFBVSxDQUFWLENBQS9CLENBQWhDLENBUG9ELENBUXBEO0FBQ0E7O0FBQ0EsTUFBTUksV0FBVyxHQUFHRixrRUFBWSxDQUFDRixlQUFELEVBQWtCLENBQUMsQ0FBRCxFQUFJLEdBQUosRUFBUyxDQUFULENBQWxCLEVBQStCLENBQUMsQ0FBQyxHQUFGLEVBQU8sRUFBUCxFQUFXLENBQVgsQ0FBL0IsQ0FBaEM7QUFDQSxNQUFNSyxRQUFRLEdBQUc7QUFFaEJDLFdBQU8sRUFBRTtBQUNSQyxPQUFDLEVBQUUsS0FESztBQUVSQyxXQUFLLEVBQUU7QUFGQyxLQUZPO0FBTWhCQyxZQUFRLEVBQUU7QUFDVEYsT0FBQyxFQUFHLENBREs7QUFFVEMsV0FBSyxFQUFFLENBRkU7QUFHVEUsZ0JBQVUsRUFBRTtBQUNYQyxZQUFJLEVBQUUsUUFESztBQUVYQyxnQkFBUSxFQUFFO0FBRkM7QUFISCxLQU5NO0FBY2hCQyxXQUFPLEVBQUU7QUFDUk4sT0FBQyxFQUFFLE1BREs7QUFFUkMsV0FBSyxFQUFFO0FBRkMsS0FkTztBQWtCaEJNLFlBQVEsRUFBRTtBQUNUUCxPQUFDLEVBQUcsQ0FESztBQUVUQyxXQUFLLEVBQUUsQ0FGRTtBQUdURSxnQkFBVSxFQUFFO0FBQ1hDLFlBQUksRUFBRSxRQURLO0FBRVhDLGdCQUFRLEVBQUU7QUFGQztBQUhIO0FBbEJNLEdBQWpCO0FBNEJBLHNCQUNDO0FBQUssYUFBUyxtQ0FBNEJkLE1BQTVCLHVDQUFkO0FBQUEsNEJBQ0M7QUFBSyxlQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFFQztBQUFLLGVBQVMseUJBQWQ7QUFBQSw4QkFDQyxxRUFBQyxvREFBRCxDQUFRLEdBQVI7QUFDQyxpQkFBUyxFQUFDLDBFQURYLENBRUM7QUFDQTtBQUNBO0FBSkQ7QUFLQyxhQUFLLEVBQUU7QUFDTlMsV0FBQyxFQUFHSixXQURFO0FBRU5LLGVBQUssRUFBR1A7QUFGRjtBQUxSO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQVdDLHFFQUFDLG9EQUFELENBQVEsR0FBUjtBQUNBLGlCQUFTLEVBQUMsMEVBRFY7QUFFQSxhQUFLLEVBQUU7QUFDTk0sV0FBQyxFQUFHSCxXQURFO0FBRU5JLGVBQUssRUFBR1A7QUFGRixTQUZQLENBT0M7QUFDQTtBQUNBOztBQVREO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQTZCQTs7R0FwRXVCTCxPO1VBS0tHLCtELEVBQ1hHLDBELEVBQ0dBLDBELEVBR0FBLDBEOzs7S0FWR04sTyIsImZpbGUiOiIuL2NvbXBvbmVudHMvZGFya1NreS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdGlvbiwgdXNlVHJhbnNmb3JtLCB1c2VWaWV3cG9ydFNjcm9sbCwgdXNlTW90aW9uVmFsdWUgfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXJrU2t5KHsgb3BlblNreSwgaGVpZ2h0IH0pIHtcblxuXHQvLyBjb25zdCB4MSA9IHVzZU1vdGlvblZhbHVlKDApXG5cdC8vIGNvbnN0IHgyID0gdXNlTW90aW9uVmFsdWUoMClcblxuXHRjb25zdCB7IHNjcm9sbFlQcm9ncmVzcyB9ID0gdXNlVmlld3BvcnRTY3JvbGwoKTtcblx0Y29uc3Qgc2t5U2NhbGUgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMV0sIFsyLCAxXSk7XG5cdGNvbnN0IHNreTFvZmZzZXRYID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDAuMywgMV0sIFs1MDAsIDEwLCAwXSk7XG5cdC8vIGNvbnN0IHgxcCA9IHVzZVRyYW5zZm9ybShza3kxb2Zmc2V0WFswXSwgKHgpID0+IGAke3h9JWApO1xuXHQvLyBjb25zdCB4MnAgPSB1c2VUcmFuc2Zvcm0oc2t5Mm9mZnNldFhbMF0sICh4KSA9PiBgJHt4fSVgKTtcblx0Y29uc3Qgc2t5Mm9mZnNldFggPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMC4zLCAxXSwgWy01MDAsIDEwLCAwXSk7XG5cdGNvbnN0IHZhcmlhbnRzID0ge1xuXG5cdFx0aGlkZGVuMToge1xuXHRcdFx0eDogJzUwJScsXG5cdFx0XHRzY2FsZTogMlxuXHRcdH0sXG5cdFx0dmlzaWJsZTE6IHtcblx0XHRcdHggOiAwLFxuXHRcdFx0c2NhbGU6IDEsXG5cdFx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHRcdHR5cGU6IFwic3ByaW5nXCIsXG5cdFx0XHRcdGR1cmF0aW9uOiAyLjUsXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRoaWRkZW4yOiB7XG5cdFx0XHR4OiAnLTUwJScsXG5cdFx0XHRzY2FsZTogMlxuXHRcdH0sXG5cdFx0dmlzaWJsZTI6IHtcblx0XHRcdHggOiAwLFxuXHRcdFx0c2NhbGU6IDEsXG5cdFx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHRcdHR5cGU6IFwic3ByaW5nXCIsXG5cdFx0XHRcdGR1cmF0aW9uOiAyLjUsXG5cdFx0XHR9XG5cdFx0fSxcblxuXHR9XG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e2ByZWxhdGl2ZSBmbGV4IGZsZXgtY29sICR7aGVpZ2h0fSB3LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuIGJnLXJlZC0xMDBgfSA+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImgtMS80IHctZnVsbCBiZy1ncmF5LTkwMFwiPjwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2ByZWxhdGl2ZSBoLTEvMiB3LWZ1bGxgfT5cblx0XHRcdFx0PG1vdGlvbi5kaXZcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJhYnNvbHV0ZSAtdG9wLWZ1bGwgLWxlZnQtMS80IGgtMnhmdWxsIHctMy80IHJvdW5kZWQtZnVsbHA0ICAgYmctZ3JheS05MDBcIlxuXHRcdFx0XHRcdC8vIGluaXRpYWw9XCJoaWRkZW4xXCJcblx0XHRcdFx0XHQvLyBhbmltYXRlPXsgb3BlblNreSA/IFwidmlzaWJsZTFcIiA6XCJoaWRkZW4xXCJ9XG5cdFx0XHRcdFx0Ly8gdmFyaWFudHM9e3ZhcmlhbnRzfVxuXHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHR4IDogc2t5MW9mZnNldFgsXG5cdFx0XHRcdFx0XHRzY2FsZSA6IHNreVNjYWxlXG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0PjwvbW90aW9uLmRpdj5cblx0XHRcdFx0PG1vdGlvbi5kaXZcblx0XHRcdFx0Y2xhc3NOYW1lPVwiYWJzb2x1dGUgLXRvcC1mdWxsIC1yaWdodC0xLzQgaC0yeGZ1bGwgdy0zLzQgcm91bmRlZC1mdWxscDQgIGJnLWdyYXktOTAwXCJcblx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHR4IDogc2t5Mm9mZnNldFgsXG5cdFx0XHRcdFx0c2NhbGUgOiBza3lTY2FsZVxuXHRcdFx0XHR9fVxuXG5cdFx0XHRcdFx0Ly8gaW5pdGlhbD1cImhpZGRlbjJcIlxuXHRcdFx0XHRcdC8vIGFuaW1hdGU9eyBvcGVuU2t5ID8gXCJ2aXNpYmxlMlwiIDpcImhpZGRlbjJcIn1cblx0XHRcdFx0XHQvLyB2YXJpYW50cz17dmFyaWFudHN9XG5cdFx0XHRcdD48L21vdGlvbi5kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblxuXHQpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/darkSky.js\n");

/***/ })

})