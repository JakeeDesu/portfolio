webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/scene.js":
/*!************************!*\
  !*** ./pages/scene.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Scene; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_darkSky__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/darkSky */ \"./components/darkSky.js\");\n/* harmony import */ var _components_sogumice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/sogumice */ \"./components/sogumice.js\");\n/* harmony import */ var _components_loloIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/loloIcon */ \"./components/loloIcon.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/home/hamza/Desktop/portfolio/pages/scene.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n // import ImageDisplayer from '../components/imageDisplayer'\n// import DescriptionCard from '../components/descriptionCard'\n// import Image from 'next/Image'\n\nfunction Scene() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(0),\n      offset = _useState[0],\n      setOffset = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(false),\n      openSky = _useState2[0],\n      setOpenSky = _useState2[1];\n\n  var bref = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useRef\"])(null);\n\n  var _useViewportScroll = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useViewportScroll\"])(),\n      scrollYProgress = _useViewportScroll.scrollYProgress;\n\n  var sogumiceScale = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"])(scrollYProgress, [0, 1], [0, 2]);\n  var sogumiceYoffset = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"])(scrollYProgress, [0, 1], [0, 0]);\n  var skyOpacity = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"])(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);\n  var sogumiceOpacity = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"])(scrollYProgress, [0, 0.3], [0, 1]);\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    setOffset(bref.current.attributes[\"class\"].ownerElement.offsetTop);\n    bref.current.attributes[\"class\"].ownerElement.offsetTop;\n  }, [bref.current && bref.current.attributes[\"class\"].ownerElement.offsetTop]);\n  if (bref.current) getOffset(bref.current.attributes[\"class\"].ownerElement.offsetTop);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n    className: \"relative flex justify-center items-center h-screen w-full bg-gradient-to-t from-gray-900 to-blue-400 \",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n      className: \"absolute top-0 left-0 h-full w-full\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_darkSky__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        height: \"lg:h-full h-1/2 md:h-2/3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n      ref: bref,\n      className: \"absolute top-1/4\",\n      style: {\n        scale: sogumiceScale,\n        y: sogumiceYoffset,\n        opacity: sogumiceOpacity\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: \"text-white text-lg\",\n        children: offset\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_sogumice__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        height: \"h-36\",\n        width: \"w-36\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"absolute flex justify-center items-center h-32 bottom-1/4 w-full\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: \"text-white text-9xl\",\n        children: \"TITLE\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 6\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"absolute flex flex-col justify-center items-center top-3/4 w-full h-1/4 rounded-full\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_loloIcon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        size: 9\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 3\n  }, this);\n}\n\n_s(Scene, \"uiA+jbCAGuJToStNBALYHvrOSNs=\", false, function () {\n  return [framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useViewportScroll\"], framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"]];\n});\n\n_c = Scene;\n\nvar _c;\n\n$RefreshReg$(_c, \"Scene\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2NlbmUuanM/ZjkxMiJdLCJuYW1lcyI6WyJTY2VuZSIsInVzZVN0YXRlIiwib2Zmc2V0Iiwic2V0T2Zmc2V0Iiwib3BlblNreSIsInNldE9wZW5Ta3kiLCJicmVmIiwidXNlUmVmIiwidXNlVmlld3BvcnRTY3JvbGwiLCJzY3JvbGxZUHJvZ3Jlc3MiLCJzb2d1bWljZVNjYWxlIiwidXNlVHJhbnNmb3JtIiwic29ndW1pY2VZb2Zmc2V0Iiwic2t5T3BhY2l0eSIsInNvZ3VtaWNlT3BhY2l0eSIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJhdHRyaWJ1dGVzIiwib3duZXJFbGVtZW50Iiwib2Zmc2V0VG9wIiwiZ2V0T2Zmc2V0Iiwic2NhbGUiLCJ5Iiwib3BhY2l0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FFQTtBQUNBO0FBQ0E7O0FBR2UsU0FBU0EsS0FBVCxHQUFrQjtBQUFBOztBQUFBLGtCQUNIQyxzREFBUSxDQUFDLENBQUQsQ0FETDtBQUFBLE1BQ3pCQyxNQUR5QjtBQUFBLE1BQ2pCQyxTQURpQjs7QUFBQSxtQkFFREYsc0RBQVEsQ0FBQyxLQUFELENBRlA7QUFBQSxNQUV6QkcsT0FGeUI7QUFBQSxNQUVoQkMsVUFGZ0I7O0FBR2hDLE1BQU1DLElBQUksR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQW5COztBQUhnQywyQkFJSkMsdUVBQWlCLEVBSmI7QUFBQSxNQUl4QkMsZUFKd0Isc0JBSXhCQSxlQUp3Qjs7QUFLaEMsTUFBTUMsYUFBYSxHQUFHQyxrRUFBWSxDQUFDRixlQUFELEVBQWtCLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBbEIsRUFBMEIsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUExQixDQUFsQztBQUNBLE1BQU1HLGVBQWUsR0FBR0Qsa0VBQVksQ0FBQ0YsZUFBRCxFQUFrQixDQUFDLENBQUQsRUFBSSxDQUFKLENBQWxCLEVBQTBCLENBQUUsQ0FBRixFQUFLLENBQUwsQ0FBMUIsQ0FBcEM7QUFDQSxNQUFNSSxVQUFVLEdBQUdGLGtFQUFZLENBQUNGLGVBQUQsRUFBa0IsQ0FBQyxDQUFELEVBQUksR0FBSixFQUFTLENBQVQsQ0FBbEIsRUFBK0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FBL0IsQ0FBL0I7QUFDQSxNQUFNSyxlQUFlLEdBQUdILGtFQUFZLENBQUNGLGVBQUQsRUFBa0IsQ0FBQyxDQUFELEVBQUksR0FBSixDQUFsQixFQUE0QixDQUFDLENBQUQsRUFBSSxDQUFKLENBQTVCLENBQXBDO0FBRUFNLHlEQUFTLENBQUMsWUFBTTtBQUNmWixhQUFTLENBQUVHLElBQUksQ0FBQ1UsT0FBTCxDQUFhQyxVQUFiLFVBQThCQyxZQUE5QixDQUEyQ0MsU0FBN0MsQ0FBVDtBQUNBYixRQUFJLENBQUNVLE9BQUwsQ0FBYUMsVUFBYixVQUE4QkMsWUFBOUIsQ0FBMkNDLFNBQTNDO0FBQ0EsR0FIUSxFQUdOLENBQUViLElBQUksQ0FBQ1UsT0FBTCxJQUFnQlYsSUFBSSxDQUFDVSxPQUFMLENBQWFDLFVBQWIsVUFBOEJDLFlBQTlCLENBQTJDQyxTQUE3RCxDQUhNLENBQVQ7QUFLQSxNQUFJYixJQUFJLENBQUNVLE9BQVQsRUFDQ0ksU0FBUyxDQUFFZCxJQUFJLENBQUNVLE9BQUwsQ0FBYUMsVUFBYixVQUE4QkMsWUFBOUIsQ0FBMkNDLFNBQTdDLENBQVQ7QUFFRCxzQkFDQyxxRUFBQyxvREFBRCxDQUFRLEdBQVI7QUFBWSxhQUFTLEVBQUMsdUdBQXRCO0FBQUEsNEJBQ0MscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQVksZUFBUyxFQUFDLHFDQUF0QjtBQUFBLDZCQUVDLHFFQUFDLDJEQUFEO0FBQVMsY0FBTSxFQUFDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsZUFLQyxxRUFBQyxvREFBRCxDQUFRLEdBQVI7QUFBWSxTQUFHLEVBQUViLElBQWpCO0FBQXVCLGVBQVMsRUFBQyxrQkFBakM7QUFDQSxXQUFLLEVBQ0o7QUFDQ2UsYUFBSyxFQUFHWCxhQURUO0FBRUNZLFNBQUMsRUFBR1YsZUFGTDtBQUdDVyxlQUFPLEVBQUdUO0FBSFgsT0FGRDtBQUFBLDhCQVNDO0FBQUksaUJBQVMsRUFBQyxvQkFBZDtBQUFBLGtCQUFvQ1o7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRELGVBVUMscUVBQUMsNERBQUQ7QUFBVSxjQUFNLEVBQUMsTUFBakI7QUFBeUIsYUFBSyxFQUFDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMRCxlQWlCQztBQUFLLGVBQVMsRUFBQyxrRUFBZjtBQUFBLDZCQUNFO0FBQUksaUJBQVMsRUFBQyxxQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFqQkQsZUFvQkM7QUFBSyxlQUFTLEVBQUMsc0ZBQWY7QUFBQSw2QkFDQyxxRUFBQyw0REFBRDtBQUFVLFlBQUksRUFBRTtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQTBCQTs7R0E1Q3VCRixLO1VBSUtRLCtELEVBQ05HLDBELEVBQ0VBLDBELEVBQ0xBLDBELEVBQ0tBLDBEOzs7S0FSRFgsSyIsImZpbGUiOiIuL3BhZ2VzL3NjZW5lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERhcmtTa3kgZnJvbSAnLi4vY29tcG9uZW50cy9kYXJrU2t5J1xuaW1wb3J0IFNvZ3VtaWNlIGZyb20gJy4uL2NvbXBvbmVudHMvc29ndW1pY2UnXG5pbXBvcnQgTG9sb0ljb24gZnJvbSAnLi4vY29tcG9uZW50cy9sb2xvSWNvbidcbmltcG9ydCB7IG1vdGlvbiwgdXNlVHJhbnNmb3JtLCB1c2VWaWV3cG9ydFNjcm9sbCwgdXNlTW90aW9uVmFsdWUgIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCB7dXNlU3RhdGUgLCB1c2VFZmZlY3QsIHVzZVJlZn0gZnJvbSAncmVhY3QnXG4vLyBpbXBvcnQgSW1hZ2VEaXNwbGF5ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9pbWFnZURpc3BsYXllcidcbi8vIGltcG9ydCBEZXNjcmlwdGlvbkNhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9kZXNjcmlwdGlvbkNhcmQnXG4vLyBpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9JbWFnZSdcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY2VuZSAoKSB7XG5cdGNvbnN0IFtvZmZzZXQsIHNldE9mZnNldCBdID0gdXNlU3RhdGUoMClcblx0Y29uc3QgW29wZW5Ta3ksIHNldE9wZW5Ta3kgXSA9IHVzZVN0YXRlKGZhbHNlKVxuXHRjb25zdCBicmVmID0gdXNlUmVmKG51bGwpO1xuXHRjb25zdCB7IHNjcm9sbFlQcm9ncmVzcyB9ID0gdXNlVmlld3BvcnRTY3JvbGwoKTtcblx0Y29uc3Qgc29ndW1pY2VTY2FsZSA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAxXSwgWzAsIDJdKTtcblx0Y29uc3Qgc29ndW1pY2VZb2Zmc2V0ID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDFdLCBbIDAsIDBdKTtcblx0Y29uc3Qgc2t5T3BhY2l0eSA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAwLjIsIDFdLCBbMCwgMSwgMV0pO1xuXHRjb25zdCBzb2d1bWljZU9wYWNpdHkgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMC4zXSwgWzAsIDFdKTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHNldE9mZnNldCggYnJlZi5jdXJyZW50LmF0dHJpYnV0ZXMuY2xhc3Mub3duZXJFbGVtZW50Lm9mZnNldFRvcCk7XG5cdFx0YnJlZi5jdXJyZW50LmF0dHJpYnV0ZXMuY2xhc3Mub3duZXJFbGVtZW50Lm9mZnNldFRvcFxuXHR9LCBbIGJyZWYuY3VycmVudCAmJiBicmVmLmN1cnJlbnQuYXR0cmlidXRlcy5jbGFzcy5vd25lckVsZW1lbnQub2Zmc2V0VG9wIF0pO1xuXHRcblx0aWYgKGJyZWYuY3VycmVudClcblx0IGdldE9mZnNldCggYnJlZi5jdXJyZW50LmF0dHJpYnV0ZXMuY2xhc3Mub3duZXJFbGVtZW50Lm9mZnNldFRvcCk7XG5cblx0cmV0dXJuIChcblx0XHQ8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLXNjcmVlbiB3LWZ1bGwgYmctZ3JhZGllbnQtdG8tdCBmcm9tLWdyYXktOTAwIHRvLWJsdWUtNDAwIFwiPlxuXHRcdFx0PG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIGgtZnVsbCB3LWZ1bGxcIlxuXHRcdFx0PlxuXHRcdFx0XHQ8RGFya1NreSBoZWlnaHQ9XCJsZzpoLWZ1bGwgaC0xLzIgbWQ6aC0yLzNcIi8+XG5cdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHQ8bW90aW9uLmRpdiByZWY9e2JyZWZ9IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0xLzRcIlxuXHRcdFx0c3R5bGU9e1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c2NhbGUgOiBzb2d1bWljZVNjYWxlLFxuXHRcdFx0XHRcdHkgOiBzb2d1bWljZVlvZmZzZXQsXG5cdFx0XHRcdFx0b3BhY2l0eSA6IHNvZ3VtaWNlT3BhY2l0eVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQ+XG5cdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtbGdcIj57b2Zmc2V0fTwvaDE+XG5cdFx0XHRcdDxTb2d1bWljZSBoZWlnaHQ9XCJoLTM2XCIgIHdpZHRoPVwidy0zNlwiLz5cblx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC0zMiBib3R0b20tMS80IHctZnVsbFwiPlxuXHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtOXhsXCIgPlRJVExFPC9oMT5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0b3AtMy80IHctZnVsbCBoLTEvNCByb3VuZGVkLWZ1bGxcIj5cblx0XHRcdFx0PExvbG9JY29uIHNpemU9ezl9Lz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvbW90aW9uLmRpdj5cblx0KVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/scene.js\n");

/***/ })

})