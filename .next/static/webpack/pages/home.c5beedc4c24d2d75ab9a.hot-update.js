webpackHotUpdate_N_E("pages/home",{

/***/ "./pages/scene.js":
/*!************************!*\
  !*** ./pages/scene.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Scene; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_darkSky__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/darkSky */ \"./components/darkSky.js\");\n/* harmony import */ var _components_sogumice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/sogumice */ \"./components/sogumice.js\");\n/* harmony import */ var _components_loloIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/loloIcon */ \"./components/loloIcon.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/home/hamza/Desktop/portfolio/pages/scene.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n // import ImageDisplayer from '../components/imageDisplayer'\n// import DescriptionCard from '../components/descriptionCard'\n// import Image from 'next/Image'\n\nfunction Scene() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(false),\n      openSky = _useState[0],\n      setOpenSky = _useState[1];\n\n  var bref = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useRef\"])(null);\n\n  var _useViewportScroll = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useViewportScroll\"])(),\n      scrollYProgress = _useViewportScroll.scrollYProgress;\n\n  var sogumiceScale = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"])(scrollYProgress, [0, 1], [0, 2]);\n  var sogumiceYoffset = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"])(scrollYProgress, [0, 1], [0, 0]);\n  var skyOpacity = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"])(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);\n  var sogumiceOpacity = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"])(scrollYProgress, [0, 0.3], [0, 1]); // useEffect(() => {\n  // \t\t\tskyOpacity.onChange(v => setOpenSky( v >= 1 ));\n  // }, [skyOpacity]);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n    className: \"relative flex justify-center items-center h-screen w-full bg-gradient-to-t from-gray-900 to-blue-400 \",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n      className: \"absolute top-0 left-0 h-full w-full\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_darkSky__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        height: \"lg:h-full h-1/2 md:h-2/3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n      ref: bref,\n      className: \"absolute top-1/4\",\n      style: {\n        scale: sogumiceScale,\n        y: sogumiceYoffset,\n        opacity: sogumiceOpacity\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: \"text-white text-lg\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_sogumice__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        height: \"h-36\",\n        width: \"w-36\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"absolute flex justify-center items-center h-32 bottom-1/4 w-full\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: \"text-white text-9xl\",\n        children: \"TITLE\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 6\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"absolute flex flex-col justify-center items-center top-3/4 w-full h-1/4 rounded-full\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_loloIcon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        size: 9\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 3\n  }, this);\n}\n\n_s(Scene, \"BpXyn0z4AiAZ1YvksfqzRdmo9Mk=\", false, function () {\n  return [framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useViewportScroll\"], framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"]];\n});\n\n_c = Scene;\n\nvar _c;\n\n$RefreshReg$(_c, \"Scene\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2NlbmUuanM/ZjkxMiJdLCJuYW1lcyI6WyJTY2VuZSIsInVzZVN0YXRlIiwib3BlblNreSIsInNldE9wZW5Ta3kiLCJicmVmIiwidXNlUmVmIiwidXNlVmlld3BvcnRTY3JvbGwiLCJzY3JvbGxZUHJvZ3Jlc3MiLCJzb2d1bWljZVNjYWxlIiwidXNlVHJhbnNmb3JtIiwic29ndW1pY2VZb2Zmc2V0Iiwic2t5T3BhY2l0eSIsInNvZ3VtaWNlT3BhY2l0eSIsInNjYWxlIiwieSIsIm9wYWNpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7QUFDQTtBQUNBOztBQUdlLFNBQVNBLEtBQVQsR0FBa0I7QUFBQTs7QUFBQSxrQkFDREMsc0RBQVEsQ0FBQyxLQUFELENBRFA7QUFBQSxNQUN6QkMsT0FEeUI7QUFBQSxNQUNoQkMsVUFEZ0I7O0FBRWhDLE1BQU1DLElBQUksR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQW5COztBQUZnQywyQkFHSkMsdUVBQWlCLEVBSGI7QUFBQSxNQUd4QkMsZUFId0Isc0JBR3hCQSxlQUh3Qjs7QUFJaEMsTUFBTUMsYUFBYSxHQUFHQyxrRUFBWSxDQUFDRixlQUFELEVBQWtCLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBbEIsRUFBMEIsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUExQixDQUFsQztBQUNBLE1BQU1HLGVBQWUsR0FBR0Qsa0VBQVksQ0FBQ0YsZUFBRCxFQUFrQixDQUFDLENBQUQsRUFBSSxDQUFKLENBQWxCLEVBQTBCLENBQUUsQ0FBRixFQUFLLENBQUwsQ0FBMUIsQ0FBcEM7QUFDQSxNQUFNSSxVQUFVLEdBQUdGLGtFQUFZLENBQUNGLGVBQUQsRUFBa0IsQ0FBQyxDQUFELEVBQUksR0FBSixFQUFTLENBQVQsQ0FBbEIsRUFBK0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBL0IsQ0FBL0I7QUFDQSxNQUFNSyxlQUFlLEdBQUdILGtFQUFZLENBQUNGLGVBQUQsRUFBa0IsQ0FBQyxDQUFELEVBQUksR0FBSixDQUFsQixFQUE0QixDQUFDLENBQUQsRUFBSSxDQUFKLENBQTVCLENBQXBDLENBUGdDLENBU2hDO0FBQ0E7QUFDQTs7QUFFQSxzQkFDQyxxRUFBQyxvREFBRCxDQUFRLEdBQVI7QUFBWSxhQUFTLEVBQUMsdUdBQXRCO0FBQUEsNEJBQ0MscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQVksZUFBUyxFQUFDLHFDQUF0QjtBQUFBLDZCQUVDLHFFQUFDLDJEQUFEO0FBQVMsY0FBTSxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFLQyxxRUFBQyxvREFBRCxDQUFRLEdBQVI7QUFBWSxTQUFHLEVBQUVILElBQWpCO0FBQXVCLGVBQVMsRUFBQyxrQkFBakM7QUFDQSxXQUFLLEVBQ0o7QUFDQ1MsYUFBSyxFQUFHTCxhQURUO0FBRUNNLFNBQUMsRUFBR0osZUFGTDtBQUdDSyxlQUFPLEVBQUdIO0FBSFgsT0FGRDtBQUFBLDhCQVNDO0FBQUksaUJBQVMsRUFBQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FURCxlQVVDLHFFQUFDLDREQUFEO0FBQVUsY0FBTSxFQUFDLE1BQWpCO0FBQXlCLGFBQUssRUFBQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEQsZUFpQkM7QUFBSyxlQUFTLEVBQUMsa0VBQWY7QUFBQSw2QkFDRTtBQUFJLGlCQUFTLEVBQUMscUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBakJELGVBb0JDO0FBQUssZUFBUyxFQUFDLHNGQUFmO0FBQUEsNkJBQ0MscUVBQUMsNERBQUQ7QUFBVSxZQUFJLEVBQUU7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFwQkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUEwQkE7O0dBdkN1QlosSztVQUdLTSwrRCxFQUNORywwRCxFQUNFQSwwRCxFQUNMQSwwRCxFQUNLQSwwRDs7O0tBUERULEsiLCJmaWxlIjoiLi9wYWdlcy9zY2VuZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEYXJrU2t5IGZyb20gJy4uL2NvbXBvbmVudHMvZGFya1NreSdcbmltcG9ydCBTb2d1bWljZSBmcm9tICcuLi9jb21wb25lbnRzL3NvZ3VtaWNlJ1xuaW1wb3J0IExvbG9JY29uIGZyb20gJy4uL2NvbXBvbmVudHMvbG9sb0ljb24nXG5pbXBvcnQgeyBtb3Rpb24sIHVzZVRyYW5zZm9ybSwgdXNlVmlld3BvcnRTY3JvbGwsIHVzZU1vdGlvblZhbHVlICB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQge3VzZVN0YXRlICwgdXNlRWZmZWN0LCB1c2VSZWZ9IGZyb20gJ3JlYWN0J1xuLy8gaW1wb3J0IEltYWdlRGlzcGxheWVyIGZyb20gJy4uL2NvbXBvbmVudHMvaW1hZ2VEaXNwbGF5ZXInXG4vLyBpbXBvcnQgRGVzY3JpcHRpb25DYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvZGVzY3JpcHRpb25DYXJkJ1xuLy8gaW1wb3J0IEltYWdlIGZyb20gJ25leHQvSW1hZ2UnXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2NlbmUgKCkge1xuXHRjb25zdCBbb3BlblNreSwgc2V0T3BlblNreSBdID0gdXNlU3RhdGUoZmFsc2UpXG5cdGNvbnN0IGJyZWYgPSB1c2VSZWYobnVsbCk7XG5cdGNvbnN0IHsgc2Nyb2xsWVByb2dyZXNzIH0gPSB1c2VWaWV3cG9ydFNjcm9sbCgpO1xuXHRjb25zdCBzb2d1bWljZVNjYWxlID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDFdLCBbMCwgMl0pO1xuXHRjb25zdCBzb2d1bWljZVlvZmZzZXQgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMV0sIFsgMCwgMF0pO1xuXHRjb25zdCBza3lPcGFjaXR5ID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDAuMiwgMV0sIFswLCAxLCAxXSk7XG5cdGNvbnN0IHNvZ3VtaWNlT3BhY2l0eSA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAwLjNdLCBbMCwgMV0pO1xuXG5cdC8vIHVzZUVmZmVjdCgoKSA9PiB7XG5cdC8vIFx0XHRcdHNreU9wYWNpdHkub25DaGFuZ2UodiA9PiBzZXRPcGVuU2t5KCB2ID49IDEgKSk7XG5cdC8vIH0sIFtza3lPcGFjaXR5XSk7XG5cblx0cmV0dXJuIChcblx0XHQ8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLXNjcmVlbiB3LWZ1bGwgYmctZ3JhZGllbnQtdG8tdCBmcm9tLWdyYXktOTAwIHRvLWJsdWUtNDAwIFwiPlxuXHRcdFx0PG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIGgtZnVsbCB3LWZ1bGxcIlxuXHRcdFx0PlxuXHRcdFx0XHQ8RGFya1NreSBoZWlnaHQ9XCJsZzpoLWZ1bGwgaC0xLzIgbWQ6aC0yLzNcIi8+XG5cdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHQ8bW90aW9uLmRpdiByZWY9e2JyZWZ9IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0xLzRcIlxuXHRcdFx0c3R5bGU9e1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c2NhbGUgOiBzb2d1bWljZVNjYWxlLFxuXHRcdFx0XHRcdHkgOiBzb2d1bWljZVlvZmZzZXQsXG5cdFx0XHRcdFx0b3BhY2l0eSA6IHNvZ3VtaWNlT3BhY2l0eVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQ+XG5cdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtbGdcIj48L2gxPlxuXHRcdFx0XHQ8U29ndW1pY2UgaGVpZ2h0PVwiaC0zNlwiICB3aWR0aD1cInctMzZcIi8+XG5cdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtMzIgYm90dG9tLTEvNCB3LWZ1bGxcIj5cblx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LTl4bFwiID5USVRMRTwvaDE+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdG9wLTMvNCB3LWZ1bGwgaC0xLzQgcm91bmRlZC1mdWxsXCI+XG5cdFx0XHRcdDxMb2xvSWNvbiBzaXplPXs5fS8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L21vdGlvbi5kaXY+XG5cdClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/scene.js\n");

/***/ })

})