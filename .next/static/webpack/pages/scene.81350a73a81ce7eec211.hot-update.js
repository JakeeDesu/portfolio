webpackHotUpdate_N_E("pages/scene",{

/***/ "./pages/scene.js":
/*!************************!*\
  !*** ./pages/scene.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Scene; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_darkSky__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/darkSky */ \"./components/darkSky.js\");\n/* harmony import */ var _components_sogumice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/sogumice */ \"./components/sogumice.js\");\n/* harmony import */ var _components_loloIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/loloIcon */ \"./components/loloIcon.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n\n\nvar _jsxFileName = \"/goinfre/hmhindat/portfolio/pages/scene.js\",\n    _s = $RefreshSig$();\n\n\n\n\n // import ImageDisplayer from '../components/imageDisplayer'\n// import DescriptionCard from '../components/descriptionCard'\n// import Image from 'next/Image'\n\nfunction Scene() {\n  _s();\n\n  var _useViewportScroll = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useViewportScroll\"])(),\n      scrollYProgress = _useViewportScroll.scrollYProgress;\n\n  var sogumiceScale = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"])(scrollYProgress, [0, 0.3, 1], [0, 1, 0.5]);\n  var sogumiceYoffset = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"])(scrollYProgress, [0, 0.3, 1], [-900, 0, 0]);\n  var skyOpacity = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"])(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);\n  var sogumiceOpacity = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"])(scrollYProgress, [0, 0.3], [0, 1]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"relative flex justify-center items-center h-screen w-full bg-gradient-to-t from-gray-900 to-blue-400 \",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n      className: \"absolute top-0 left-0 h-full w-full\",\n      style: {\n        opacity: skyOpacity\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_darkSky__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        height: \"lg:h-full h-1/2 md:h-2/3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n      className: \"absolute top-1/4\",\n      style: {\n        scale: sogumiceScale,\n        y: sogumiceYoffset,\n        opacity: sogumiceOpacity\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_sogumice__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        height: \"h-36\",\n        width: \"w-36\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"absolute flex justify-center items-center h-32 bottom-1/4 w-full\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: \"text-white text-9xl\",\n        children: \"TITLE\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 6\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"absolute flex flex-col justify-center items-center top-3/4 w-full h-1/4 rounded-full\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_loloIcon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        size: 9\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 3\n  }, this);\n}\n\n_s(Scene, \"p63oBtoxB32bM+HoD/7aN4dy1y4=\", false, function () {\n  return [framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useViewportScroll\"], framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"]];\n});\n\n_c = Scene;\n\nvar _c;\n\n$RefreshReg$(_c, \"Scene\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2NlbmUuanM/ZjkxMiJdLCJuYW1lcyI6WyJTY2VuZSIsInVzZVZpZXdwb3J0U2Nyb2xsIiwic2Nyb2xsWVByb2dyZXNzIiwic29ndW1pY2VTY2FsZSIsInVzZVRyYW5zZm9ybSIsInNvZ3VtaWNlWW9mZnNldCIsInNreU9wYWNpdHkiLCJzb2d1bWljZU9wYWNpdHkiLCJvcGFjaXR5Iiwic2NhbGUiLCJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBRUE7QUFDQTtBQUNBOztBQUdlLFNBQVNBLEtBQVQsR0FBa0I7QUFBQTs7QUFBQSwyQkFDSkMsdUVBQWlCLEVBRGI7QUFBQSxNQUN4QkMsZUFEd0Isc0JBQ3hCQSxlQUR3Qjs7QUFFaEMsTUFBTUMsYUFBYSxHQUFHQyxrRUFBWSxDQUFDRixlQUFELEVBQWtCLENBQUMsQ0FBRCxFQUFJLEdBQUosRUFBUyxDQUFULENBQWxCLEVBQStCLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxHQUFQLENBQS9CLENBQWxDO0FBQ0EsTUFBTUcsZUFBZSxHQUFHRCxrRUFBWSxDQUFDRixlQUFELEVBQWtCLENBQUMsQ0FBRCxFQUFJLEdBQUosRUFBUyxDQUFULENBQWxCLEVBQStCLENBQUMsQ0FBQyxHQUFGLEVBQU8sQ0FBUCxFQUFVLENBQVYsQ0FBL0IsQ0FBcEM7QUFDQSxNQUFNSSxVQUFVLEdBQUdGLGtFQUFZLENBQUNGLGVBQUQsRUFBa0IsQ0FBQyxDQUFELEVBQUksR0FBSixFQUFTLENBQVQsQ0FBbEIsRUFBK0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBL0IsQ0FBL0I7QUFDQSxNQUFNSyxlQUFlLEdBQUdILGtFQUFZLENBQUNGLGVBQUQsRUFBa0IsQ0FBQyxDQUFELEVBQUksR0FBSixDQUFsQixFQUE0QixDQUFDLENBQUQsRUFBSSxDQUFKLENBQTVCLENBQXBDO0FBRUEsc0JBQ0M7QUFBSyxhQUFTLEVBQUMsdUdBQWY7QUFBQSw0QkFDQyxxRUFBQyxvREFBRCxDQUFRLEdBQVI7QUFBWSxlQUFTLEVBQUMscUNBQXRCO0FBQ0EsV0FBSyxFQUNKO0FBQ0NNLGVBQU8sRUFBR0Y7QUFEWCxPQUZEO0FBQUEsNkJBT0MscUVBQUMsMkRBQUQ7QUFBUyxjQUFNLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQVVDLHFFQUFDLG9EQUFELENBQVEsR0FBUjtBQUFZLGVBQVMsRUFBQyxrQkFBdEI7QUFDQSxXQUFLLEVBQ0o7QUFDQ0csYUFBSyxFQUFHTixhQURUO0FBRUNPLFNBQUMsRUFBR0wsZUFGTDtBQUdDRyxlQUFPLEVBQUdEO0FBSFgsT0FGRDtBQUFBLDZCQVNDLHFFQUFDLDREQUFEO0FBQVUsY0FBTSxFQUFDLE1BQWpCO0FBQXlCLGFBQUssRUFBQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZELGVBcUJDO0FBQUssZUFBUyxFQUFDLGtFQUFmO0FBQUEsNkJBQ0U7QUFBSSxpQkFBUyxFQUFDLHFCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXJCRCxlQXdCQztBQUFLLGVBQVMsRUFBQyxzRkFBZjtBQUFBLDZCQUNDLHFFQUFDLDREQUFEO0FBQVUsWUFBSSxFQUFFO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBeEJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBOEJBOztHQXJDdUJQLEs7VUFDS0MsK0QsRUFDTkcsMEQsRUFDRUEsMEQsRUFDTEEsMEQsRUFDS0EsMEQ7OztLQUxESixLIiwiZmlsZSI6Ii4vcGFnZXMvc2NlbmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGFya1NreSBmcm9tICcuLi9jb21wb25lbnRzL2RhcmtTa3knXG5pbXBvcnQgU29ndW1pY2UgZnJvbSAnLi4vY29tcG9uZW50cy9zb2d1bWljZSdcbmltcG9ydCBMb2xvSWNvbiBmcm9tICcuLi9jb21wb25lbnRzL2xvbG9JY29uJ1xuaW1wb3J0IHsgbW90aW9uLCB1c2VUcmFuc2Zvcm0sIHVzZVZpZXdwb3J0U2Nyb2xsLCB1c2VNb3Rpb25WYWx1ZSAgfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuLy8gaW1wb3J0IEltYWdlRGlzcGxheWVyIGZyb20gJy4uL2NvbXBvbmVudHMvaW1hZ2VEaXNwbGF5ZXInXG4vLyBpbXBvcnQgRGVzY3JpcHRpb25DYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvZGVzY3JpcHRpb25DYXJkJ1xuLy8gaW1wb3J0IEltYWdlIGZyb20gJ25leHQvSW1hZ2UnXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2NlbmUgKCkge1xuXHRjb25zdCB7IHNjcm9sbFlQcm9ncmVzcyB9ID0gdXNlVmlld3BvcnRTY3JvbGwoKTtcblx0Y29uc3Qgc29ndW1pY2VTY2FsZSA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAwLjMsIDFdLCBbMCwgMSwgMC41XSk7XG5cdGNvbnN0IHNvZ3VtaWNlWW9mZnNldCA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAwLjMsIDFdLCBbLTkwMCwgMCwgMF0pO1xuXHRjb25zdCBza3lPcGFjaXR5ID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDAuMywgMV0sIFswLCAxLCAxXSk7XG5cdGNvbnN0IHNvZ3VtaWNlT3BhY2l0eSA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAwLjNdLCBbMCwgMV0pO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLXNjcmVlbiB3LWZ1bGwgYmctZ3JhZGllbnQtdG8tdCBmcm9tLWdyYXktOTAwIHRvLWJsdWUtNDAwIFwiPlxuXHRcdFx0PG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIGgtZnVsbCB3LWZ1bGxcIlxuXHRcdFx0c3R5bGU9e1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0b3BhY2l0eSA6IHNreU9wYWNpdHlcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0PlxuXHRcdFx0XHQ8RGFya1NreSBoZWlnaHQ9XCJsZzpoLWZ1bGwgaC0xLzIgbWQ6aC0yLzNcIi8+XG5cdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHQ8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMS80XCJcblx0XHRcdHN0eWxlPXtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHNjYWxlIDogc29ndW1pY2VTY2FsZSxcblx0XHRcdFx0XHR5IDogc29ndW1pY2VZb2Zmc2V0LFxuXHRcdFx0XHRcdG9wYWNpdHkgOiBzb2d1bWljZU9wYWNpdHlcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0PlxuXHRcdFx0XHQ8U29ndW1pY2UgaGVpZ2h0PVwiaC0zNlwiICB3aWR0aD1cInctMzZcIi8+XG5cdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtMzIgYm90dG9tLTEvNCB3LWZ1bGxcIj5cblx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LTl4bFwiID5USVRMRTwvaDE+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdG9wLTMvNCB3LWZ1bGwgaC0xLzQgcm91bmRlZC1mdWxsXCI+XG5cdFx0XHRcdDxMb2xvSWNvbiBzaXplPXs5fS8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/scene.js\n");

/***/ })

})