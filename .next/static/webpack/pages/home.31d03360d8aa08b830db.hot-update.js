webpackHotUpdate_N_E("pages/home",{

/***/ "./pages/scene.js":
/*!************************!*\
  !*** ./pages/scene.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Scene; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_darkSky__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/darkSky */ \"./components/darkSky.js\");\n/* harmony import */ var _components_sogumice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/sogumice */ \"./components/sogumice.js\");\n/* harmony import */ var _components_loloIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/loloIcon */ \"./components/loloIcon.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n\n\nvar _jsxFileName = \"/goinfre/hmhindat/portfolio/pages/scene.js\",\n    _s = $RefreshSig$();\n\n\n\n\n // import ImageDisplayer from '../components/imageDisplayer'\n// import DescriptionCard from '../components/descriptionCard'\n// import Image from 'next/Image'\n\nfunction Scene() {\n  _s();\n\n  var _useViewportScroll = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useViewportScroll\"])(),\n      scrollYProgress = _useViewportScroll.scrollYProgress;\n\n  var sogumiceScale = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"])(scrollYProgress, [0, 0.3, 1], [0, 1, 0.5]);\n  var sogumiceYoffset = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"])(scrollYProgress, [0, 0.3, 1], [-1000, 0, 0]);\n  var sogumiceOpacity = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"])(scrollYProgress, [0, 0.3], [0, 1]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"relative flex justify-center items-center h-screen w-full bg-gradient-to-t from-gray-900 to-blue-400 \",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"absolute top-0 left-0 h-full w-full\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_darkSky__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        height: \"lg:h-full h-1/2 md:h-2/3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n      className: \"absolute top-1/4\",\n      style: {\n        scale: sogumiceScale,\n        y: sogumiceYoffset,\n        opacity: sogumiceOpacity\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_sogumice__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        height: \"h-36\",\n        width: \"w-36\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"absolute flex justify-center items-center h-32 bottom-1/4 w-full\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: \"text-white text-9xl\",\n        children: \"TITLE\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 6\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"absolute flex flex-col justify-center items-center top-3/4 w-full h-1/4 rounded-full\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_loloIcon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        size: 9\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 3\n  }, this);\n}\n\n_s(Scene, \"A6Stxhts1pHj4jJy+vXlcsev7xo=\", false, function () {\n  return [framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useViewportScroll\"], framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"]];\n});\n\n_c = Scene;\n\nvar _c;\n\n$RefreshReg$(_c, \"Scene\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2NlbmUuanM/ZjkxMiJdLCJuYW1lcyI6WyJTY2VuZSIsInVzZVZpZXdwb3J0U2Nyb2xsIiwic2Nyb2xsWVByb2dyZXNzIiwic29ndW1pY2VTY2FsZSIsInVzZVRyYW5zZm9ybSIsInNvZ3VtaWNlWW9mZnNldCIsInNvZ3VtaWNlT3BhY2l0eSIsInNjYWxlIiwieSIsIm9wYWNpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FFQTtBQUNBO0FBQ0E7O0FBR2UsU0FBU0EsS0FBVCxHQUFrQjtBQUFBOztBQUFBLDJCQUNKQyx1RUFBaUIsRUFEYjtBQUFBLE1BQ3hCQyxlQUR3QixzQkFDeEJBLGVBRHdCOztBQUVoQyxNQUFNQyxhQUFhLEdBQUdDLGtFQUFZLENBQUNGLGVBQUQsRUFBa0IsQ0FBQyxDQUFELEVBQUksR0FBSixFQUFTLENBQVQsQ0FBbEIsRUFBK0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLEdBQVAsQ0FBL0IsQ0FBbEM7QUFDQSxNQUFNRyxlQUFlLEdBQUdELGtFQUFZLENBQUNGLGVBQUQsRUFBa0IsQ0FBQyxDQUFELEVBQUksR0FBSixFQUFTLENBQVQsQ0FBbEIsRUFBK0IsQ0FBQyxDQUFDLElBQUYsRUFBUSxDQUFSLEVBQVcsQ0FBWCxDQUEvQixDQUFwQztBQUNBLE1BQU1JLGVBQWUsR0FBR0Ysa0VBQVksQ0FBQ0YsZUFBRCxFQUFrQixDQUFDLENBQUQsRUFBSSxHQUFKLENBQWxCLEVBQTRCLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBNUIsQ0FBcEM7QUFFQSxzQkFDQztBQUFLLGFBQVMsRUFBQyx1R0FBZjtBQUFBLDRCQUNDO0FBQUssZUFBUyxFQUFDLHFDQUFmO0FBQUEsNkJBQ0MscUVBQUMsMkRBQUQ7QUFBUyxjQUFNLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxlQUlDLHFFQUFDLG9EQUFELENBQVEsR0FBUjtBQUFZLGVBQVMsRUFBQyxrQkFBdEI7QUFDQSxXQUFLLEVBQ0o7QUFDQ0ssYUFBSyxFQUFHSixhQURUO0FBRUNLLFNBQUMsRUFBR0gsZUFGTDtBQUdDSSxlQUFPLEVBQUdIO0FBSFgsT0FGRDtBQUFBLDZCQVNDLHFFQUFDLDREQUFEO0FBQVUsY0FBTSxFQUFDLE1BQWpCO0FBQXlCLGFBQUssRUFBQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpELGVBZUM7QUFBSyxlQUFTLEVBQUMsa0VBQWY7QUFBQSw2QkFDRTtBQUFJLGlCQUFTLEVBQUMscUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZkQsZUFrQkM7QUFBSyxlQUFTLEVBQUMsc0ZBQWY7QUFBQSw2QkFDQyxxRUFBQyw0REFBRDtBQUFVLFlBQUksRUFBRTtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQXdCQTs7R0E5QnVCTixLO1VBQ0tDLCtELEVBQ05HLDBELEVBQ0VBLDBELEVBQ0FBLDBEOzs7S0FKREosSyIsImZpbGUiOiIuL3BhZ2VzL3NjZW5lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERhcmtTa3kgZnJvbSAnLi4vY29tcG9uZW50cy9kYXJrU2t5J1xuaW1wb3J0IFNvZ3VtaWNlIGZyb20gJy4uL2NvbXBvbmVudHMvc29ndW1pY2UnXG5pbXBvcnQgTG9sb0ljb24gZnJvbSAnLi4vY29tcG9uZW50cy9sb2xvSWNvbidcbmltcG9ydCB7IG1vdGlvbiwgdXNlVHJhbnNmb3JtLCB1c2VWaWV3cG9ydFNjcm9sbCwgdXNlTW90aW9uVmFsdWUgIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbi8vIGltcG9ydCBJbWFnZURpc3BsYXllciBmcm9tICcuLi9jb21wb25lbnRzL2ltYWdlRGlzcGxheWVyJ1xuLy8gaW1wb3J0IERlc2NyaXB0aW9uQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL2Rlc2NyaXB0aW9uQ2FyZCdcbi8vIGltcG9ydCBJbWFnZSBmcm9tICduZXh0L0ltYWdlJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNjZW5lICgpIHtcblx0Y29uc3QgeyBzY3JvbGxZUHJvZ3Jlc3MgfSA9IHVzZVZpZXdwb3J0U2Nyb2xsKCk7XG5cdGNvbnN0IHNvZ3VtaWNlU2NhbGUgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMC4zLCAxXSwgWzAsIDEsIDAuNV0pO1xuXHRjb25zdCBzb2d1bWljZVlvZmZzZXQgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMC4zLCAxXSwgWy0xMDAwLCAwLCAwXSk7XG5cdGNvbnN0IHNvZ3VtaWNlT3BhY2l0eSA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAwLjNdLCBbMCwgMV0pO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLXNjcmVlbiB3LWZ1bGwgYmctZ3JhZGllbnQtdG8tdCBmcm9tLWdyYXktOTAwIHRvLWJsdWUtNDAwIFwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgaC1mdWxsIHctZnVsbFwiPlxuXHRcdFx0XHQ8RGFya1NreSBoZWlnaHQ9XCJsZzpoLWZ1bGwgaC0xLzIgbWQ6aC0yLzNcIi8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0xLzRcIlxuXHRcdFx0c3R5bGU9e1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c2NhbGUgOiBzb2d1bWljZVNjYWxlLFxuXHRcdFx0XHRcdHkgOiBzb2d1bWljZVlvZmZzZXQsXG5cdFx0XHRcdFx0b3BhY2l0eSA6IHNvZ3VtaWNlT3BhY2l0eVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQ+XG5cdFx0XHRcdDxTb2d1bWljZSBoZWlnaHQ9XCJoLTM2XCIgIHdpZHRoPVwidy0zNlwiLz5cblx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC0zMiBib3R0b20tMS80IHctZnVsbFwiPlxuXHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtOXhsXCIgPlRJVExFPC9oMT5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0b3AtMy80IHctZnVsbCBoLTEvNCByb3VuZGVkLWZ1bGxcIj5cblx0XHRcdFx0PExvbG9JY29uIHNpemU9ezl9Lz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/scene.js\n");

/***/ })

})