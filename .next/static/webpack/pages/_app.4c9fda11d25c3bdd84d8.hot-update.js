webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/scene.js":
/*!************************!*\
  !*** ./pages/scene.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Scene; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_darkSky__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/darkSky */ \"./components/darkSky.js\");\n/* harmony import */ var _components_sogumice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/sogumice */ \"./components/sogumice.js\");\n/* harmony import */ var _components_loloIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/loloIcon */ \"./components/loloIcon.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/home/hamza/Desktop/portfolio/pages/scene.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n // import ImageDisplayer from '../components/imageDisplayer'\n// import DescriptionCard from '../components/descriptionCard'\n// import Image from 'next/Image'\n\nfunction Scene() {\n  _s();\n\n  var _useViewportScroll = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useViewportScroll\"])(),\n      scrollYProgress = _useViewportScroll.scrollYProgress;\n\n  var sogumiceScale = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"])(scrollYProgress, [0, 0.2, 0.5, 1], [0.1, 0.5, 2, 1]);\n  var sogumiceYoffset = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"])(scrollYProgress, [0, 0.2, 0.5, 1], [-500, 10, 0, -50]);\n  var skyOpacity = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"])(scrollYProgress, [0, 0.3, 0.5, 1], [0, 1, 1, 1]);\n  var sogumiceOpacity = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"])(scrollYProgress, [0, 0.2, 0.5, 1], [0, 1, 1, 1]);\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {}, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n    className: \"relative flex justify-center items-center h-screen w-full bg-gradient-to-b from-blue-400 to-gray-900 \",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n      className: \"absolute top-0 left-0 h-full w-full\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_darkSky__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        height: \"lg:h-full h-1/2 md:h-2/3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n      className: \"absolute top-1/4\",\n      style: {\n        scale: sogumiceScale,\n        y: sogumiceYoffset,\n        opacity: sogumiceOpacity\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: \"text-white text-lg\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_sogumice__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        height: \"h-36\",\n        width: \"w-36\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"absolute flex justify-center items-center h-32 bottom-1/4 w-full\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: \"text-white text-9xl\",\n        children: \"TITLE\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 6\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"absolute flex flex-col justify-center items-center top-3/4 w-full h-1/4 rounded-full\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_loloIcon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        size: 9\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 3\n  }, this);\n}\n\n_s(Scene, \"UW4P8TriTF7vAn7Be0Px7HfjIjE=\", false, function () {\n  return [framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useViewportScroll\"], framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"]];\n});\n\n_c = Scene;\n\nvar _c;\n\n$RefreshReg$(_c, \"Scene\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2NlbmUuanM/ZjkxMiJdLCJuYW1lcyI6WyJTY2VuZSIsInVzZVZpZXdwb3J0U2Nyb2xsIiwic2Nyb2xsWVByb2dyZXNzIiwic29ndW1pY2VTY2FsZSIsInVzZVRyYW5zZm9ybSIsInNvZ3VtaWNlWW9mZnNldCIsInNreU9wYWNpdHkiLCJzb2d1bWljZU9wYWNpdHkiLCJ1c2VFZmZlY3QiLCJzY2FsZSIsInkiLCJvcGFjaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtDQUVBO0FBQ0E7QUFDQTs7QUFHZSxTQUFTQSxLQUFULEdBQWtCO0FBQUE7O0FBQUEsMkJBRUpDLHVFQUFpQixFQUZiO0FBQUEsTUFFeEJDLGVBRndCLHNCQUV4QkEsZUFGd0I7O0FBR2hDLE1BQU1DLGFBQWEsR0FBR0Msa0VBQVksQ0FBQ0YsZUFBRCxFQUFrQixDQUFDLENBQUQsRUFBRyxHQUFILEVBQVEsR0FBUixFQUFhLENBQWIsQ0FBbEIsRUFBbUMsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLENBQVgsRUFBYyxDQUFkLENBQW5DLENBQWxDO0FBQ0EsTUFBTUcsZUFBZSxHQUFHRCxrRUFBWSxDQUFDRixlQUFELEVBQWtCLENBQUMsQ0FBRCxFQUFHLEdBQUgsRUFBUSxHQUFSLEVBQWEsQ0FBYixDQUFsQixFQUFtQyxDQUFDLENBQUMsR0FBRixFQUFPLEVBQVAsRUFBVyxDQUFYLEVBQWMsQ0FBQyxFQUFmLENBQW5DLENBQXBDO0FBQ0EsTUFBTUksVUFBVSxHQUFHRixrRUFBWSxDQUFDRixlQUFELEVBQWtCLENBQUMsQ0FBRCxFQUFHLEdBQUgsRUFBUSxHQUFSLEVBQWEsQ0FBYixDQUFsQixFQUFtQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsQ0FBbkMsQ0FBL0I7QUFDQSxNQUFNSyxlQUFlLEdBQUdILGtFQUFZLENBQUNGLGVBQUQsRUFBa0IsQ0FBQyxDQUFELEVBQUcsR0FBSCxFQUFRLEdBQVIsRUFBYSxDQUFiLENBQWxCLEVBQW1DLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBTSxDQUFOLEVBQVMsQ0FBVCxDQUFuQyxDQUFwQztBQUVBTSx5REFBUyxDQUFDLFlBQU0sQ0FFZixDQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUEsc0JBQ0MscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQVksYUFBUyxFQUFDLHVHQUF0QjtBQUFBLDRCQUNDLHFFQUFDLG9EQUFELENBQVEsR0FBUjtBQUFZLGVBQVMsRUFBQyxxQ0FBdEI7QUFBQSw2QkFFQyxxRUFBQywyREFBRDtBQUFTLGNBQU0sRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBS0MscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQVksZUFBUyxFQUFDLGtCQUF0QjtBQUNBLFdBQUssRUFDSjtBQUNDQyxhQUFLLEVBQUdOLGFBRFQ7QUFFQ08sU0FBQyxFQUFHTCxlQUZMO0FBR0NNLGVBQU8sRUFBR0o7QUFIWCxPQUZEO0FBQUEsOEJBU0M7QUFBSSxpQkFBUyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRELGVBVUMscUVBQUMsNERBQUQ7QUFBVSxjQUFNLEVBQUMsTUFBakI7QUFBeUIsYUFBSyxFQUFDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRCxlQWlCQztBQUFLLGVBQVMsRUFBQyxrRUFBZjtBQUFBLDZCQUNFO0FBQUksaUJBQVMsRUFBQyxxQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqQkQsZUFvQkM7QUFBSyxlQUFTLEVBQUMsc0ZBQWY7QUFBQSw2QkFDQyxxRUFBQyw0REFBRDtBQUFVLFlBQUksRUFBRTtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQTBCQTs7R0F0Q3VCUCxLO1VBRUtDLCtELEVBQ05HLDBELEVBQ0VBLDBELEVBQ0xBLDBELEVBQ0tBLDBEOzs7S0FOREosSyIsImZpbGUiOiIuL3BhZ2VzL3NjZW5lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERhcmtTa3kgZnJvbSAnLi4vY29tcG9uZW50cy9kYXJrU2t5J1xuaW1wb3J0IFNvZ3VtaWNlIGZyb20gJy4uL2NvbXBvbmVudHMvc29ndW1pY2UnXG5pbXBvcnQgTG9sb0ljb24gZnJvbSAnLi4vY29tcG9uZW50cy9sb2xvSWNvbidcbmltcG9ydCB7IG1vdGlvbiwgdXNlVHJhbnNmb3JtLCB1c2VWaWV3cG9ydFNjcm9sbCwgdXNlTW90aW9uVmFsdWUgIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCB7dXNlU3RhdGUgLCB1c2VFZmZlY3QsIHVzZVJlZn0gZnJvbSAncmVhY3QnXG4vLyBpbXBvcnQgSW1hZ2VEaXNwbGF5ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9pbWFnZURpc3BsYXllcidcbi8vIGltcG9ydCBEZXNjcmlwdGlvbkNhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9kZXNjcmlwdGlvbkNhcmQnXG4vLyBpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9JbWFnZSdcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY2VuZSAoKSB7XG5cblx0Y29uc3QgeyBzY3JvbGxZUHJvZ3Jlc3MgfSA9IHVzZVZpZXdwb3J0U2Nyb2xsKCk7XG5cdGNvbnN0IHNvZ3VtaWNlU2NhbGUgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwwLjIsIDAuNSwgMV0sIFswLjEsIDAuNSAsMiwgMV0pO1xuXHRjb25zdCBzb2d1bWljZVlvZmZzZXQgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwwLjIsIDAuNSwgMV0sIFstNTAwLCAxMCwgMCwgLTUwXSk7XG5cdGNvbnN0IHNreU9wYWNpdHkgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwwLjMsIDAuNSwgMV0sIFswLCAxLCAxLCAxXSk7XG5cdGNvbnN0IHNvZ3VtaWNlT3BhY2l0eSA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLDAuMiwgMC41LCAxXSwgWzAsMSwgMSwgMV0pO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cblx0fSwgWyAgXSk7XG5cdFxuXHRyZXR1cm4gKFxuXHRcdDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtc2NyZWVuIHctZnVsbCBiZy1ncmFkaWVudC10by1iIGZyb20tYmx1ZS00MDAgdG8tZ3JheS05MDAgXCI+XG5cdFx0XHQ8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgaC1mdWxsIHctZnVsbFwiXG5cdFx0XHQ+XG5cdFx0XHRcdDxEYXJrU2t5IGhlaWdodD1cImxnOmgtZnVsbCBoLTEvMiBtZDpoLTIvM1wiLz5cblx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0xLzRcIlxuXHRcdFx0c3R5bGU9e1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c2NhbGUgOiBzb2d1bWljZVNjYWxlLFxuXHRcdFx0XHRcdHkgOiBzb2d1bWljZVlvZmZzZXQsXG5cdFx0XHRcdFx0b3BhY2l0eSA6IHNvZ3VtaWNlT3BhY2l0eVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQ+XG5cdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtbGdcIj48L2gxPlxuXHRcdFx0XHQ8U29ndW1pY2UgaGVpZ2h0PVwiaC0zNlwiICB3aWR0aD1cInctMzZcIi8+XG5cdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtMzIgYm90dG9tLTEvNCB3LWZ1bGxcIj5cblx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LTl4bFwiID5USVRMRTwvaDE+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdG9wLTMvNCB3LWZ1bGwgaC0xLzQgcm91bmRlZC1mdWxsXCI+XG5cdFx0XHRcdDxMb2xvSWNvbiBzaXplPXs5fS8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L21vdGlvbi5kaXY+XG5cdClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/scene.js\n");

/***/ })

})