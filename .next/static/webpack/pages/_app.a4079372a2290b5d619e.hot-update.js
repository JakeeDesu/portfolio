webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/scene.js":
/*!************************!*\
  !*** ./pages/scene.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Scene; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_darkSky__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/darkSky */ \"./components/darkSky.js\");\n/* harmony import */ var _components_sogumice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/sogumice */ \"./components/sogumice.js\");\n/* harmony import */ var _components_loloIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/loloIcon */ \"./components/loloIcon.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/home/hamza/Desktop/portfolio/pages/scene.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n // import ImageDisplayer from '../components/imageDisplayer'\n// import DescriptionCard from '../components/descriptionCard'\n// import Image from 'next/Image'\n\nfunction Scene() {\n  _s();\n\n  var _useViewportScroll = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useViewportScroll\"])(),\n      scrollYProgress = _useViewportScroll.scrollYProgress;\n\n  var sceneScale = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"])(scrollYProgress, [0, 0.5, 1], [1, 1.5, 1]);\n  var sogumiceScale = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"])(scrollYProgress, [0, 0.2, 0.5, 1], [0.1, 0.5, 2, 1]);\n  var sogumiceYoffset = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"])(scrollYProgress, [0, 0.2, 0.5, 1], [0, 10, 0, -50]);\n  var skyOpacity = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"])(scrollYProgress, [0, 0.3, 0.5, 1], [0, 1, 1, 1]);\n  var sogumiceOpacity = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"])(scrollYProgress, [0, 0.2, 0.5, 1], [0, 1, 1, 1]);\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {}, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n    className: \"relative flex justify-center items-center h-screen w-full bg-gradient-to-b from-gray-900 to-blue-400 overflow-hidden\" // style={\n    // {\n    // scale : sceneScale,\n    // }\n    // }\t\t\t\n    ,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n      className: \"relative flex justify-center items-center h-full w-full\",\n      style: {\n        scale: sceneScale\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n        className: \"absolute top-0 left-0 h-full w-full\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_darkSky__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n          height: \"lg:h-full h-1/2 md:h-2/3\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 5\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 4\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n        className: \"absolute top-1/4\",\n        style: {\n          scale: sogumiceScale,\n          y: sogumiceYoffset,\n          opacity: sogumiceOpacity\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          className: \"text-white text-lg\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 5\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_sogumice__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          height: \"h-36\",\n          width: \"w-36\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 5\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 4\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"absolute flex justify-center items-center h-32 bottom-1/4 w-full\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          className: \"text-white text-9xl\",\n          children: \"TITLE\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 6\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 4\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"absolute flex flex-col justify-center items-center top-3/4 w-full h-1/4 rounded-full\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_loloIcon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          size: 9\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 5\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 4\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 4\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 3\n  }, this);\n}\n\n_s(Scene, \"x6AVbRoIy/4ZxqgSwa1qMHr15Oc=\", false, function () {\n  return [framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useViewportScroll\"], framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"]];\n});\n\n_c = Scene;\n\nvar _c;\n\n$RefreshReg$(_c, \"Scene\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2NlbmUuanM/ZjkxMiJdLCJuYW1lcyI6WyJTY2VuZSIsInVzZVZpZXdwb3J0U2Nyb2xsIiwic2Nyb2xsWVByb2dyZXNzIiwic2NlbmVTY2FsZSIsInVzZVRyYW5zZm9ybSIsInNvZ3VtaWNlU2NhbGUiLCJzb2d1bWljZVlvZmZzZXQiLCJza3lPcGFjaXR5Iiwic29ndW1pY2VPcGFjaXR5IiwidXNlRWZmZWN0Iiwic2NhbGUiLCJ5Iiwib3BhY2l0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FFQTtBQUNBO0FBQ0E7O0FBR2UsU0FBU0EsS0FBVCxHQUFrQjtBQUFBOztBQUFBLDJCQUVKQyx1RUFBaUIsRUFGYjtBQUFBLE1BRXhCQyxlQUZ3QixzQkFFeEJBLGVBRndCOztBQUdoQyxNQUFNQyxVQUFVLEdBQUdDLGtFQUFZLENBQUNGLGVBQUQsRUFBa0IsQ0FBQyxDQUFELEVBQUcsR0FBSCxFQUFRLENBQVIsQ0FBbEIsRUFBOEIsQ0FBQyxDQUFELEVBQUksR0FBSixFQUFVLENBQVYsQ0FBOUIsQ0FBL0I7QUFDQSxNQUFNRyxhQUFhLEdBQUdELGtFQUFZLENBQUNGLGVBQUQsRUFBa0IsQ0FBQyxDQUFELEVBQUcsR0FBSCxFQUFRLEdBQVIsRUFBYSxDQUFiLENBQWxCLEVBQW1DLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxDQUFYLEVBQWMsQ0FBZCxDQUFuQyxDQUFsQztBQUNBLE1BQU1JLGVBQWUsR0FBR0Ysa0VBQVksQ0FBQ0YsZUFBRCxFQUFrQixDQUFDLENBQUQsRUFBRyxHQUFILEVBQVEsR0FBUixFQUFhLENBQWIsQ0FBbEIsRUFBbUMsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLENBQVIsRUFBVyxDQUFDLEVBQVosQ0FBbkMsQ0FBcEM7QUFDQSxNQUFNSyxVQUFVLEdBQUdILGtFQUFZLENBQUNGLGVBQUQsRUFBa0IsQ0FBQyxDQUFELEVBQUcsR0FBSCxFQUFRLEdBQVIsRUFBYSxDQUFiLENBQWxCLEVBQW1DLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixDQUFuQyxDQUEvQjtBQUNBLE1BQU1NLGVBQWUsR0FBR0osa0VBQVksQ0FBQ0YsZUFBRCxFQUFrQixDQUFDLENBQUQsRUFBRyxHQUFILEVBQVEsR0FBUixFQUFhLENBQWIsQ0FBbEIsRUFBbUMsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFNLENBQU4sRUFBUyxDQUFULENBQW5DLENBQXBDO0FBRUFPLHlEQUFTLENBQUMsWUFBTSxDQUVmLENBRlEsRUFFTixFQUZNLENBQVQ7QUFJQSxzQkFDQyxxRUFBQyxvREFBRCxDQUFRLEdBQVI7QUFBWSxhQUFTLEVBQUMsc0hBQXRCLENBQ0E7QUFDQztBQUNDO0FBQ0Q7QUFDRDtBQUxBO0FBQUEsMkJBT0MscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0MsZUFBUyxFQUFDLHlEQURYO0FBRUUsV0FBSyxFQUNKO0FBQ0NDLGFBQUssRUFBR1A7QUFEVCxPQUhIO0FBQUEsOEJBUUEscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQVksaUJBQVMsRUFBQyxxQ0FBdEI7QUFBQSwrQkFFQyxxRUFBQywyREFBRDtBQUFTLGdCQUFNLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSQSxlQVlBLHFFQUFDLG9EQUFELENBQVEsR0FBUjtBQUFZLGlCQUFTLEVBQUMsa0JBQXRCO0FBQ0EsYUFBSyxFQUNKO0FBQ0NPLGVBQUssRUFBR0wsYUFEVDtBQUVDTSxXQUFDLEVBQUdMLGVBRkw7QUFHQ00saUJBQU8sRUFBR0o7QUFIWCxTQUZEO0FBQUEsZ0NBU0M7QUFBSSxtQkFBUyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFURCxlQVVDLHFFQUFDLDREQUFEO0FBQVUsZ0JBQU0sRUFBQyxNQUFqQjtBQUF5QixlQUFLLEVBQUM7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFWRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaQSxlQXdCQTtBQUFLLGlCQUFTLEVBQUMsa0VBQWY7QUFBQSwrQkFDRTtBQUFJLG1CQUFTLEVBQUMscUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBeEJBLGVBMkJBO0FBQUssaUJBQVMsRUFBQyxzRkFBZjtBQUFBLCtCQUNDLHFFQUFDLDREQUFEO0FBQVUsY0FBSSxFQUFFO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBM0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQTBDQTs7R0F2RHVCUixLO1VBRUtDLCtELEVBQ1RHLDBELEVBQ0dBLDBELEVBQ0VBLDBELEVBQ0xBLDBELEVBQ0tBLDBEOzs7S0FQREosSyIsImZpbGUiOiIuL3BhZ2VzL3NjZW5lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERhcmtTa3kgZnJvbSAnLi4vY29tcG9uZW50cy9kYXJrU2t5J1xuaW1wb3J0IFNvZ3VtaWNlIGZyb20gJy4uL2NvbXBvbmVudHMvc29ndW1pY2UnXG5pbXBvcnQgTG9sb0ljb24gZnJvbSAnLi4vY29tcG9uZW50cy9sb2xvSWNvbidcbmltcG9ydCB7IG1vdGlvbiwgdXNlVHJhbnNmb3JtLCB1c2VWaWV3cG9ydFNjcm9sbCwgdXNlTW90aW9uVmFsdWUgIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCB7dXNlU3RhdGUgLCB1c2VFZmZlY3QsIHVzZVJlZn0gZnJvbSAncmVhY3QnXG4vLyBpbXBvcnQgSW1hZ2VEaXNwbGF5ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9pbWFnZURpc3BsYXllcidcbi8vIGltcG9ydCBEZXNjcmlwdGlvbkNhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9kZXNjcmlwdGlvbkNhcmQnXG4vLyBpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9JbWFnZSdcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY2VuZSAoKSB7XG5cblx0Y29uc3QgeyBzY3JvbGxZUHJvZ3Jlc3MgfSA9IHVzZVZpZXdwb3J0U2Nyb2xsKCk7XG5cdGNvbnN0IHNjZW5lU2NhbGUgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwwLjUsIDFdLCBbMSwgMS41ICwgMV0pO1xuXHRjb25zdCBzb2d1bWljZVNjYWxlID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsMC4yLCAwLjUsIDFdLCBbMC4xLCAwLjUgLDIsIDFdKTtcblx0Y29uc3Qgc29ndW1pY2VZb2Zmc2V0ID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsMC4yLCAwLjUsIDFdLCBbMCwgMTAsIDAsIC01MF0pO1xuXHRjb25zdCBza3lPcGFjaXR5ID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsMC4zLCAwLjUsIDFdLCBbMCwgMSwgMSwgMV0pO1xuXHRjb25zdCBzb2d1bWljZU9wYWNpdHkgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwwLjIsIDAuNSwgMV0sIFswLDEsIDEsIDFdKTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXG5cdH0sIFsgIF0pO1xuXHRcblx0cmV0dXJuIChcblx0XHQ8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLXNjcmVlbiB3LWZ1bGwgYmctZ3JhZGllbnQtdG8tYiBmcm9tLWdyYXktOTAwIHRvLWJsdWUtNDAwIG92ZXJmbG93LWhpZGRlblwiXG5cdFx0Ly8gc3R5bGU9e1xuXHRcdFx0Ly8ge1xuXHRcdFx0XHQvLyBzY2FsZSA6IHNjZW5lU2NhbGUsXG5cdFx0XHQvLyB9XG5cdFx0Ly8gfVx0XHRcdFxuXHRcdD5cblx0XHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRcdGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtZnVsbCB3LWZ1bGxcIlxuXHRcdFx0XHRcdHN0eWxlPXtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0c2NhbGUgOiBzY2VuZVNjYWxlLFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdD5cblx0XHRcdDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCBoLWZ1bGwgdy1mdWxsXCJcblx0XHRcdD5cblx0XHRcdFx0PERhcmtTa3kgaGVpZ2h0PVwibGc6aC1mdWxsIGgtMS8yIG1kOmgtMi8zXCIvPlxuXHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0PG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTEvNFwiXG5cdFx0XHRzdHlsZT17XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzY2FsZSA6IHNvZ3VtaWNlU2NhbGUsXG5cdFx0XHRcdFx0eSA6IHNvZ3VtaWNlWW9mZnNldCxcblx0XHRcdFx0XHRvcGFjaXR5IDogc29ndW1pY2VPcGFjaXR5XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdD5cblx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC1sZ1wiPjwvaDE+XG5cdFx0XHRcdDxTb2d1bWljZSBoZWlnaHQ9XCJoLTM2XCIgIHdpZHRoPVwidy0zNlwiLz5cblx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC0zMiBib3R0b20tMS80IHctZnVsbFwiPlxuXHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtOXhsXCIgPlRJVExFPC9oMT5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0b3AtMy80IHctZnVsbCBoLTEvNCByb3VuZGVkLWZ1bGxcIj5cblx0XHRcdFx0PExvbG9JY29uIHNpemU9ezl9Lz5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0PC9tb3Rpb24uZGl2PlxuXHQpXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/scene.js\n");

/***/ })

})