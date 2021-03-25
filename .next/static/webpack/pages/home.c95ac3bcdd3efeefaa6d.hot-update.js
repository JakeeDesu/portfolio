webpackHotUpdate_N_E("pages/home",{

/***/ "./pages/scene.js":
/*!************************!*\
  !*** ./pages/scene.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Scene; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_darkSky__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/darkSky */ \"./components/darkSky.js\");\n/* harmony import */ var _components_sogumice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/sogumice */ \"./components/sogumice.js\");\n/* harmony import */ var _components_loloIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/loloIcon */ \"./components/loloIcon.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/home/hamza/Desktop/portfolio/pages/scene.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n // import ImageDisplayer from '../components/imageDisplayer'\n// import DescriptionCard from '../components/descriptionCard'\n// import Image from 'next/Image'\n\nfunction Scene() {\n  _s();\n\n  var _useViewportScroll = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useViewportScroll\"])(),\n      scrollYProgress = _useViewportScroll.scrollYProgress;\n\n  var sceneScale = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"])(scrollYProgress, [0, 0.5, 1], [2, 1, 1]);\n  var sogumiceScale = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"])(scrollYProgress, [0, 0.2, 0.5, 1], [0.1, 0.2, 1, 0.1]);\n  var sogumiceYoffset = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"])(scrollYProgress, [0, 0.2, 0.5, 1], [-100, -50, 0, -50]);\n  var skyOpacity = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"])(scrollYProgress, [0, 0.3, 0.5, 1], [0, 1, 1, 1]);\n  var sogumiceOpacity = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"])(scrollYProgress, [0, 0.2, 0.5, 1], [0, 1, 1, 1]);\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {}, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n    className: \"relative flex justify-center items-center h-screen w-full bg-gradient-to-b from-gray-900 to-blue-400 overflow-hidden\" // style={\n    // {\n    // scale : sceneScale,\n    // }\n    // }\t\t\t\n    ,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n      className: \"relative flex justify-center items-center\",\n      style: {\n        scale: sceneScale\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n        className: \"absolute top-0 left-0 h-full w-full\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_darkSky__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n          height: \"lg:h-full h-1/2 md:h-2/3\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 5\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 4\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n        className: \"absolute top-1/4\",\n        style: {\n          scale: sogumiceScale,\n          y: sogumiceYoffset,\n          opacity: sogumiceOpacity\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          className: \"text-white text-lg\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 5\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_sogumice__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          height: \"h-36\",\n          width: \"w-36\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 5\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 4\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"absolute flex justify-center items-center h-32 bottom-1/4 w-full\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          className: \"text-white text-9xl\",\n          children: \"TITLE\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 6\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 4\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"absolute flex flex-col justify-center items-center top-3/4 w-full h-1/4 rounded-full\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_loloIcon__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          size: 9\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 5\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 4\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 4\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 3\n  }, this);\n}\n\n_s(Scene, \"x6AVbRoIy/4ZxqgSwa1qMHr15Oc=\", false, function () {\n  return [framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useViewportScroll\"], framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"]];\n});\n\n_c = Scene;\n\nvar _c;\n\n$RefreshReg$(_c, \"Scene\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2NlbmUuanM/ZjkxMiJdLCJuYW1lcyI6WyJTY2VuZSIsInVzZVZpZXdwb3J0U2Nyb2xsIiwic2Nyb2xsWVByb2dyZXNzIiwic2NlbmVTY2FsZSIsInVzZVRyYW5zZm9ybSIsInNvZ3VtaWNlU2NhbGUiLCJzb2d1bWljZVlvZmZzZXQiLCJza3lPcGFjaXR5Iiwic29ndW1pY2VPcGFjaXR5IiwidXNlRWZmZWN0Iiwic2NhbGUiLCJ5Iiwib3BhY2l0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FFQTtBQUNBO0FBQ0E7O0FBR2UsU0FBU0EsS0FBVCxHQUFrQjtBQUFBOztBQUFBLDJCQUVKQyx1RUFBaUIsRUFGYjtBQUFBLE1BRXhCQyxlQUZ3QixzQkFFeEJBLGVBRndCOztBQUdoQyxNQUFNQyxVQUFVLEdBQUdDLGtFQUFZLENBQUNGLGVBQUQsRUFBa0IsQ0FBQyxDQUFELEVBQUcsR0FBSCxFQUFRLENBQVIsQ0FBbEIsRUFBOEIsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFRLENBQVIsQ0FBOUIsQ0FBL0I7QUFDQSxNQUFNRyxhQUFhLEdBQUdELGtFQUFZLENBQUNGLGVBQUQsRUFBa0IsQ0FBQyxDQUFELEVBQUcsR0FBSCxFQUFRLEdBQVIsRUFBYSxDQUFiLENBQWxCLEVBQW1DLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxDQUFYLEVBQWMsR0FBZCxDQUFuQyxDQUFsQztBQUNBLE1BQU1JLGVBQWUsR0FBR0Ysa0VBQVksQ0FBQ0YsZUFBRCxFQUFrQixDQUFDLENBQUQsRUFBRyxHQUFILEVBQVEsR0FBUixFQUFhLENBQWIsQ0FBbEIsRUFBbUMsQ0FBQyxDQUFDLEdBQUYsRUFBTyxDQUFDLEVBQVIsRUFBWSxDQUFaLEVBQWUsQ0FBQyxFQUFoQixDQUFuQyxDQUFwQztBQUNBLE1BQU1LLFVBQVUsR0FBR0gsa0VBQVksQ0FBQ0YsZUFBRCxFQUFrQixDQUFDLENBQUQsRUFBRyxHQUFILEVBQVEsR0FBUixFQUFhLENBQWIsQ0FBbEIsRUFBbUMsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLENBQW5DLENBQS9CO0FBQ0EsTUFBTU0sZUFBZSxHQUFHSixrRUFBWSxDQUFDRixlQUFELEVBQWtCLENBQUMsQ0FBRCxFQUFHLEdBQUgsRUFBUSxHQUFSLEVBQWEsQ0FBYixDQUFsQixFQUFtQyxDQUFDLENBQUQsRUFBRyxDQUFILEVBQU0sQ0FBTixFQUFTLENBQVQsQ0FBbkMsQ0FBcEM7QUFFQU8seURBQVMsQ0FBQyxZQUFNLENBRWYsQ0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBLHNCQUNDLHFFQUFDLG9EQUFELENBQVEsR0FBUjtBQUFZLGFBQVMsRUFBQyxzSEFBdEIsQ0FDQTtBQUNDO0FBQ0M7QUFDRDtBQUNEO0FBTEE7QUFBQSwyQkFPQyxxRUFBQyxvREFBRCxDQUFRLEdBQVI7QUFDQyxlQUFTLEVBQUMsMkNBRFg7QUFFRSxXQUFLLEVBQ0o7QUFDQ0MsYUFBSyxFQUFHUDtBQURULE9BSEg7QUFBQSw4QkFRQSxxRUFBQyxvREFBRCxDQUFRLEdBQVI7QUFBWSxpQkFBUyxFQUFDLHFDQUF0QjtBQUFBLCtCQUVDLHFFQUFDLDJEQUFEO0FBQVMsZ0JBQU0sRUFBQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJBLGVBWUEscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQVksaUJBQVMsRUFBQyxrQkFBdEI7QUFDQSxhQUFLLEVBQ0o7QUFDQ08sZUFBSyxFQUFHTCxhQURUO0FBRUNNLFdBQUMsRUFBR0wsZUFGTDtBQUdDTSxpQkFBTyxFQUFHSjtBQUhYLFNBRkQ7QUFBQSxnQ0FTQztBQUFJLG1CQUFTLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRELGVBVUMscUVBQUMsNERBQUQ7QUFBVSxnQkFBTSxFQUFDLE1BQWpCO0FBQXlCLGVBQUssRUFBQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpBLGVBd0JBO0FBQUssaUJBQVMsRUFBQyxrRUFBZjtBQUFBLCtCQUNFO0FBQUksbUJBQVMsRUFBQyxxQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F4QkEsZUEyQkE7QUFBSyxpQkFBUyxFQUFDLHNGQUFmO0FBQUEsK0JBQ0MscUVBQUMsNERBQUQ7QUFBVSxjQUFJLEVBQUU7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EzQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBMENBOztHQXZEdUJSLEs7VUFFS0MsK0QsRUFDVEcsMEQsRUFDR0EsMEQsRUFDRUEsMEQsRUFDTEEsMEQsRUFDS0EsMEQ7OztLQVBESixLIiwiZmlsZSI6Ii4vcGFnZXMvc2NlbmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGFya1NreSBmcm9tICcuLi9jb21wb25lbnRzL2RhcmtTa3knXG5pbXBvcnQgU29ndW1pY2UgZnJvbSAnLi4vY29tcG9uZW50cy9zb2d1bWljZSdcbmltcG9ydCBMb2xvSWNvbiBmcm9tICcuLi9jb21wb25lbnRzL2xvbG9JY29uJ1xuaW1wb3J0IHsgbW90aW9uLCB1c2VUcmFuc2Zvcm0sIHVzZVZpZXdwb3J0U2Nyb2xsLCB1c2VNb3Rpb25WYWx1ZSAgfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IHt1c2VTdGF0ZSAsIHVzZUVmZmVjdCwgdXNlUmVmfSBmcm9tICdyZWFjdCdcbi8vIGltcG9ydCBJbWFnZURpc3BsYXllciBmcm9tICcuLi9jb21wb25lbnRzL2ltYWdlRGlzcGxheWVyJ1xuLy8gaW1wb3J0IERlc2NyaXB0aW9uQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL2Rlc2NyaXB0aW9uQ2FyZCdcbi8vIGltcG9ydCBJbWFnZSBmcm9tICduZXh0L0ltYWdlJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNjZW5lICgpIHtcblxuXHRjb25zdCB7IHNjcm9sbFlQcm9ncmVzcyB9ID0gdXNlVmlld3BvcnRTY3JvbGwoKTtcblx0Y29uc3Qgc2NlbmVTY2FsZSA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLDAuNSwgMV0sIFsyLCAxICwgMV0pO1xuXHRjb25zdCBzb2d1bWljZVNjYWxlID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsMC4yLCAwLjUsIDFdLCBbMC4xLCAwLjIgLDEsIDAuMV0pO1xuXHRjb25zdCBzb2d1bWljZVlvZmZzZXQgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwwLjIsIDAuNSwgMV0sIFstMTAwLCAtNTAsIDAsIC01MF0pO1xuXHRjb25zdCBza3lPcGFjaXR5ID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsMC4zLCAwLjUsIDFdLCBbMCwgMSwgMSwgMV0pO1xuXHRjb25zdCBzb2d1bWljZU9wYWNpdHkgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwwLjIsIDAuNSwgMV0sIFswLDEsIDEsIDFdKTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXG5cdH0sIFsgIF0pO1xuXHRcblx0cmV0dXJuIChcblx0XHQ8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLXNjcmVlbiB3LWZ1bGwgYmctZ3JhZGllbnQtdG8tYiBmcm9tLWdyYXktOTAwIHRvLWJsdWUtNDAwIG92ZXJmbG93LWhpZGRlblwiXG5cdFx0Ly8gc3R5bGU9e1xuXHRcdFx0Ly8ge1xuXHRcdFx0XHQvLyBzY2FsZSA6IHNjZW5lU2NhbGUsXG5cdFx0XHQvLyB9XG5cdFx0Ly8gfVx0XHRcdFxuXHRcdD5cblx0XHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRcdGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCJcblx0XHRcdFx0XHRzdHlsZT17XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHNjYWxlIDogc2NlbmVTY2FsZSxcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHQ+XG5cdFx0XHQ8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgaC1mdWxsIHctZnVsbFwiXG5cdFx0XHQ+XG5cdFx0XHRcdDxEYXJrU2t5IGhlaWdodD1cImxnOmgtZnVsbCBoLTEvMiBtZDpoLTIvM1wiLz5cblx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0xLzRcIlxuXHRcdFx0c3R5bGU9e1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c2NhbGUgOiBzb2d1bWljZVNjYWxlLFxuXHRcdFx0XHRcdHkgOiBzb2d1bWljZVlvZmZzZXQsXG5cdFx0XHRcdFx0b3BhY2l0eSA6IHNvZ3VtaWNlT3BhY2l0eVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQ+XG5cdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtbGdcIj48L2gxPlxuXHRcdFx0XHQ8U29ndW1pY2UgaGVpZ2h0PVwiaC0zNlwiICB3aWR0aD1cInctMzZcIi8+XG5cdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtMzIgYm90dG9tLTEvNCB3LWZ1bGxcIj5cblx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LTl4bFwiID5USVRMRTwvaDE+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdG9wLTMvNCB3LWZ1bGwgaC0xLzQgcm91bmRlZC1mdWxsXCI+XG5cdFx0XHRcdDxMb2xvSWNvbiBzaXplPXs5fS8+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdDwvbW90aW9uLmRpdj5cblx0KVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/scene.js\n");

/***/ })

})