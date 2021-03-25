webpackHotUpdate_N_E("pages/home",{

/***/ "./components/sogumice.js":
/*!********************************!*\
  !*** ./components/sogumice.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Sogumice; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n\n\nvar _jsxFileName = \"/home/hamza/Desktop/portfolio/components/sogumice.js\",\n    _s = $RefreshSig$();\n\n\nfunction Sogumice(_ref) {\n  _s();\n\n  var height = _ref.height,\n      width = _ref.width;\n\n  var _useViewportScroll = Object(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useViewportScroll\"])(),\n      scrollYProgress = _useViewportScroll.scrollYProgress;\n\n  var sogumiceScale = Object(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useTransform\"])(scrollYProgress, [0, 0.3, 1], [0, 0.2, 1]);\n  var sogumiceYoffset = Object(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useTransform\"])(scrollYProgress, [0, 0.3, 1], [-100, 0, 0]);\n  var sogumiceVariants = {\n    hidden: {\n      y: \"50vh\",\n      scale: 0.1\n    },\n    visible: {\n      y: -25,\n      scale: 1,\n      transition: {\n        // staggerChildren: 0.5,\n        // when: \"beforeChildren\",\n        type: \"spring\",\n        duration: 2.5 // delay : 0.5,\n\n      }\n    }\n  };\n  var circleVariants = {\n    hidden: {\n      scale: 1\n    },\n    visible: {\n      scale: 1.3,\n      transition: {\n        // yoyo : 2,\n        // staggerChildren: 2,\n        // staggerDirection: -1,\n        when: \"beforeChildren\",\n        type: \"spring\",\n        duration: 1.2,\n        delay: 0.6\n      }\n    }\n  };\n  var gimVariants = {\n    hidden: {\n      opacity: 0,\n      y: \"-100vh\",\n      scale: 20,\n      boxShadow: \"0 0px 0px 0px rgba(255, 255, 255, 0.2)\"\n    },\n    visible: {\n      opacity: 1,\n      y: 0,\n      scale: 1,\n      boxShadow: \"0 0px 20px 8px rgba(255, 255, 255, 0.5)\",\n      transition: {\n        bounce: 0.1,\n        type: \"spring\",\n        duration: 2.5,\n        delay: 1,\n        ease: \"circOut\"\n      }\n    }\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n    className: \"flex justify-center items-center \".concat(height || \"h-1/2\", \" \").concat(width || \"w-1/2\", \" bg-white border-gray-900 rounded-full shadow-2xl\") // initial=\"hidden\"\n    // animate=\"visible\"\n    // variants={sogumiceVariants}\n    ,\n    style: {\n      scale: sogumiceScale,\n      top: sogumiceYoffset // opacity : sogumiceOpacity\n\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n      className: \"flex justify-center items-center bg-blue-300  border-gray-900 border-4 h-24 w-24 rounded-full \",\n      variants: circleVariants\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 4\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 66,\n    columnNumber: 3\n  }, this);\n}\n\n_s(Sogumice, \"vBjLtZhJvlzKnqYxCH5695Fsvhs=\", false, function () {\n  return [framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useViewportScroll\"], framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useTransform\"]];\n});\n\n_c = Sogumice;\n\nvar _c;\n\n$RefreshReg$(_c, \"Sogumice\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zb2d1bWljZS5qcz82MDU0Il0sIm5hbWVzIjpbIlNvZ3VtaWNlIiwiaGVpZ2h0Iiwid2lkdGgiLCJ1c2VWaWV3cG9ydFNjcm9sbCIsInNjcm9sbFlQcm9ncmVzcyIsInNvZ3VtaWNlU2NhbGUiLCJ1c2VUcmFuc2Zvcm0iLCJzb2d1bWljZVlvZmZzZXQiLCJzb2d1bWljZVZhcmlhbnRzIiwiaGlkZGVuIiwieSIsInNjYWxlIiwidmlzaWJsZSIsInRyYW5zaXRpb24iLCJ0eXBlIiwiZHVyYXRpb24iLCJjaXJjbGVWYXJpYW50cyIsIndoZW4iLCJkZWxheSIsImdpbVZhcmlhbnRzIiwib3BhY2l0eSIsImJveFNoYWRvdyIsImJvdW5jZSIsImVhc2UiLCJ0b3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLFFBQVQsT0FBc0M7QUFBQTs7QUFBQSxNQUFqQkMsTUFBaUIsUUFBakJBLE1BQWlCO0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTOztBQUFBLDJCQUV4QkMsdUVBQWlCLEVBRk87QUFBQSxNQUU1Q0MsZUFGNEMsc0JBRTVDQSxlQUY0Qzs7QUFHcEQsTUFBTUMsYUFBYSxHQUFHQyxrRUFBWSxDQUFDRixlQUFELEVBQWtCLENBQUMsQ0FBRCxFQUFJLEdBQUosRUFBUyxDQUFULENBQWxCLEVBQStCLENBQUMsQ0FBRCxFQUFJLEdBQUosRUFBUyxDQUFULENBQS9CLENBQWxDO0FBQ0EsTUFBTUcsZUFBZSxHQUFHRCxrRUFBWSxDQUFDRixlQUFELEVBQWtCLENBQUMsQ0FBRCxFQUFJLEdBQUosRUFBUyxDQUFULENBQWxCLEVBQStCLENBQUMsQ0FBQyxHQUFGLEVBQU8sQ0FBUCxFQUFVLENBQVYsQ0FBL0IsQ0FBcEM7QUFFQSxNQUFNSSxnQkFBZ0IsR0FBRztBQUN4QkMsVUFBTSxFQUFFO0FBQ1BDLE9BQUMsRUFBRSxNQURJO0FBRVBDLFdBQUssRUFBRTtBQUZBLEtBRGdCO0FBS3hCQyxXQUFPLEVBQUU7QUFDUkYsT0FBQyxFQUFHLENBQUMsRUFERztBQUVSQyxXQUFLLEVBQUUsQ0FGQztBQUdSRSxnQkFBVSxFQUFFO0FBQ1g7QUFDQTtBQUNBQyxZQUFJLEVBQUcsUUFISTtBQUlYQyxnQkFBUSxFQUFFLEdBSkMsQ0FLWDs7QUFMVztBQUhKO0FBTGUsR0FBekI7QUFpQkEsTUFBTUMsY0FBYyxHQUFHO0FBQ3RCUCxVQUFNLEVBQUU7QUFDUEUsV0FBSyxFQUFFO0FBREEsS0FEYztBQUl0QkMsV0FBTyxFQUFFO0FBQ1JELFdBQUssRUFBRSxHQURDO0FBRVJFLGdCQUFVLEVBQUU7QUFDWDtBQUNBO0FBQ0E7QUFDQUksWUFBSSxFQUFFLGdCQUpLO0FBS1hILFlBQUksRUFBRyxRQUxJO0FBTVhDLGdCQUFRLEVBQUUsR0FOQztBQU9YRyxhQUFLLEVBQUc7QUFQRztBQUZKO0FBSmEsR0FBdkI7QUFrQkEsTUFBTUMsV0FBVyxHQUFHO0FBQ25CVixVQUFNLEVBQUU7QUFDUFcsYUFBTyxFQUFHLENBREg7QUFFUFYsT0FBQyxFQUFHLFFBRkc7QUFHUEMsV0FBSyxFQUFFLEVBSEE7QUFJUFUsZUFBUyxFQUFFO0FBSkosS0FEVztBQU9uQlQsV0FBTyxFQUFFO0FBQ1JRLGFBQU8sRUFBQyxDQURBO0FBRVJWLE9BQUMsRUFBRyxDQUZJO0FBR1JDLFdBQUssRUFBRSxDQUhDO0FBSVJVLGVBQVMsRUFBRSx5Q0FKSDtBQUtSUixnQkFBVSxFQUFFO0FBQ1hTLGNBQU0sRUFBRyxHQURFO0FBRVhSLFlBQUksRUFBRyxRQUZJO0FBR1hDLGdCQUFRLEVBQUUsR0FIQztBQUlYRyxhQUFLLEVBQUcsQ0FKRztBQUtYSyxZQUFJLEVBQUU7QUFMSztBQUxKO0FBUFUsR0FBcEI7QUFxQkEsc0JBQ0MscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQVksYUFBUyw2Q0FBc0N0QixNQUFNLElBQUksT0FBaEQsY0FBMkRDLEtBQUssSUFBSSxPQUFwRSxzREFBckIsQ0FDQztBQUNBO0FBQ0E7QUFIRDtBQUlDLFNBQUssRUFDSjtBQUNDUyxXQUFLLEVBQUdOLGFBRFQ7QUFFQ21CLFNBQUcsRUFBR2pCLGVBRlAsQ0FHQzs7QUFIRCxLQUxGO0FBQUEsMkJBYUMscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQVksZUFBUyxFQUFDLGdHQUF0QjtBQUVBLGNBQVEsRUFBRVM7QUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBNkJBOztHQTNGdUJoQixRO1VBRUtHLCtELEVBQ05HLDBELEVBQ0VBLDBEOzs7S0FKRE4sUSIsImZpbGUiOiIuL2NvbXBvbmVudHMvc29ndW1pY2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3Rpb24sIHVzZVRyYW5zZm9ybSwgdXNlVmlld3BvcnRTY3JvbGwsIHVzZU1vdGlvblZhbHVlICB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNvZ3VtaWNlICh7IGhlaWdodCwgd2lkdGggfSkge1xuXG5cdGNvbnN0IHsgc2Nyb2xsWVByb2dyZXNzIH0gPSB1c2VWaWV3cG9ydFNjcm9sbCgpO1xuXHRjb25zdCBzb2d1bWljZVNjYWxlID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDAuMywgMV0sIFswLCAwLjIsIDFdKTtcblx0Y29uc3Qgc29ndW1pY2VZb2Zmc2V0ID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDAuMywgMV0sIFstMTAwLCAwLCAwXSk7XG5cblx0Y29uc3Qgc29ndW1pY2VWYXJpYW50cyA9IHtcblx0XHRoaWRkZW46IHtcblx0XHRcdHk6IFwiNTB2aFwiLFxuXHRcdFx0c2NhbGU6IDAuMVxuXHRcdH0sXG5cdFx0dmlzaWJsZToge1xuXHRcdFx0eSA6IC0yNSxcblx0XHRcdHNjYWxlOiAxLFxuXHRcdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0XHQvLyBzdGFnZ2VyQ2hpbGRyZW46IDAuNSxcblx0XHRcdFx0Ly8gd2hlbjogXCJiZWZvcmVDaGlsZHJlblwiLFxuXHRcdFx0XHR0eXBlIDogXCJzcHJpbmdcIixcblx0XHRcdFx0ZHVyYXRpb246IDIuNSxcblx0XHRcdFx0Ly8gZGVsYXkgOiAwLjUsXG5cdFx0XHR9XG5cdFx0fSxcblx0fVxuXHRjb25zdCBjaXJjbGVWYXJpYW50cyA9IHtcblx0XHRoaWRkZW46IHtcblx0XHRcdHNjYWxlOiAxXG5cdFx0fSxcblx0XHR2aXNpYmxlOiB7XG5cdFx0XHRzY2FsZTogMS4zLFxuXHRcdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0XHQvLyB5b3lvIDogMixcblx0XHRcdFx0Ly8gc3RhZ2dlckNoaWxkcmVuOiAyLFxuXHRcdFx0XHQvLyBzdGFnZ2VyRGlyZWN0aW9uOiAtMSxcblx0XHRcdFx0d2hlbjogXCJiZWZvcmVDaGlsZHJlblwiLFxuXHRcdFx0XHR0eXBlIDogXCJzcHJpbmdcIixcblx0XHRcdFx0ZHVyYXRpb246IDEuMixcblx0XHRcdFx0ZGVsYXkgOiAwLjYsXG5cdFx0XHR9XG5cdFx0fSxcblx0fVxuXG5cdGNvbnN0IGdpbVZhcmlhbnRzID0ge1xuXHRcdGhpZGRlbjoge1xuXHRcdFx0b3BhY2l0eSA6IDAsXG5cdFx0XHR5IDogXCItMTAwdmhcIixcblx0XHRcdHNjYWxlOiAyMCxcblx0XHRcdGJveFNoYWRvdzogXCIwIDBweCAwcHggMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKVwiLFxuXHRcdH0sXG5cdFx0dmlzaWJsZToge1xuXHRcdFx0b3BhY2l0eToxLFxuXHRcdFx0eSA6IDAsXG5cdFx0XHRzY2FsZTogMSxcblx0XHRcdGJveFNoYWRvdzogXCIwIDBweCAyMHB4IDhweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSlcIixcblx0XHRcdHRyYW5zaXRpb246IHtcblx0XHRcdFx0Ym91bmNlIDogMC4xLFxuXHRcdFx0XHR0eXBlIDogXCJzcHJpbmdcIixcblx0XHRcdFx0ZHVyYXRpb246IDIuNSxcblx0XHRcdFx0ZGVsYXkgOiAxLFxuXHRcdFx0XHRlYXNlOiBcImNpcmNPdXRcIlxuXHRcdFx0fVxuXHRcdH0sXG5cdH1cblx0cmV0dXJuIChcblx0XHQ8bW90aW9uLmRpdiBjbGFzc05hbWU9e2BmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciAke2hlaWdodCB8fCBcImgtMS8yXCJ9ICR7d2lkdGggfHwgXCJ3LTEvMlwifSBiZy13aGl0ZSBib3JkZXItZ3JheS05MDAgcm91bmRlZC1mdWxsIHNoYWRvdy0yeGxgfVxuXHRcdFx0Ly8gaW5pdGlhbD1cImhpZGRlblwiXG5cdFx0XHQvLyBhbmltYXRlPVwidmlzaWJsZVwiXG5cdFx0XHQvLyB2YXJpYW50cz17c29ndW1pY2VWYXJpYW50c31cblx0XHRcdHN0eWxlPXtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHNjYWxlIDogc29ndW1pY2VTY2FsZSxcblx0XHRcdFx0XHR0b3AgOiBzb2d1bWljZVlvZmZzZXQsXG5cdFx0XHRcdFx0Ly8gb3BhY2l0eSA6IHNvZ3VtaWNlT3BhY2l0eVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHQ+XG5cdFx0XHQ8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBiZy1ibHVlLTMwMCAgYm9yZGVyLWdyYXktOTAwIGJvcmRlci00IGgtMjQgdy0yNCByb3VuZGVkLWZ1bGwgXCJcblxuXHRcdFx0dmFyaWFudHM9e2NpcmNsZVZhcmlhbnRzfVxuXG5cdFx0XHQ+XG5cdFx0XHRcdHsvKjxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cIi10b3AtZnVsbCBiZy1yZWQtNDAwIGgtMTQgdy0xNCByb3VuZGVkLWZ1bGwgc2hhZG93LWdsb3dcIlxuXHRcdFx0aW5pdGlhbD1cImhpZGRlblwiXG5cdFx0XHRhbmltYXRlPVwidmlzaWJsZVwiXG5cdFx0XHR2YXJpYW50cz17Z2ltVmFyaWFudHN9XG5cdFx0XHRcdD5cblx0XHRcdFx0PC9tb3Rpb24uZGl2PiovfVxuXHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0ey8qIDxoMT5Tb2d1bWljZTwvaDE+ICovfVxuXHRcdDwvbW90aW9uLmRpdj5cblx0KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/sogumice.js\n");

/***/ })

})