webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _components_darkSkyOpen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/darkSkyOpen */ \"./components/darkSkyOpen.js\");\n/* harmony import */ var _components_sogumaVx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/sogumaVx */ \"./components/sogumaVx.tsx\");\n/* harmony import */ var _components_sogumaVxPhone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/sogumaVxPhone */ \"./components/sogumaVxPhone.tsx\");\n/* harmony import */ var _components_darkSky__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/darkSky */ \"./components/darkSky.js\");\n/* harmony import */ var _components_eyeSwitch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/eyeSwitch */ \"./components/eyeSwitch.js\");\n/* harmony import */ var _components_mainboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/mainboard */ \"./components/mainboard.js\");\n/* harmony import */ var _components_boardPhone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/boardPhone */ \"./components/boardPhone.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_utilities_getLocalProjectData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/utilities/getLocalProjectData */ \"./components/utilities/getLocalProjectData.js\");\n/* harmony import */ var _components_scene__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/scene */ \"./components/scene.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _components_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/theme */ \"./components/theme.js\");\n\n\n\nvar _jsxFileName = \"/home/hamza/Desktop/portfolio/pages/index.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Home(_ref) {\n  _s();\n\n  var about = _ref.about,\n      repos = _ref.repos,\n      dataLoading = _ref.dataLoading,\n      darkTheme = _ref.darkTheme,\n      changeTheme = _ref.changeTheme;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_12__[\"useState\"])({\n    displayState: true,\n    displayOff: false,\n    itemId: -1,\n    type: -1\n  }),\n      onDisplay = _useState[0],\n      setOnDisplay = _useState[1];\n\n  var _useViewportScroll = Object(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useViewportScroll\"])(),\n      scrollYProgress = _useViewportScroll.scrollYProgress;\n\n  var sogumaScale = Object(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useTransform\"])(scrollYProgress, [0, 0.1, 0.4, 1], [1, 0.9, 0.8, 0.1]);\n  var sogumaYoffset = Object(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useTransform\"])(scrollYProgress, [0, 0.1, 0.5, 1], [0, -10, -100, -500]); // getLocalProjectData(\"Fractol\");\n  // const [[soguma, board], setElements] = useState([null,null])\n\n  Object(react__WEBPACK_IMPORTED_MODULE_12__[\"useEffect\"])(function () {\n    // setElements([document.getElementById('soguma'), document.getElementById('board')])\n    var timer;\n\n    if (!onDisplay.displayState && onDisplay.displayOff) {\n      timer = setTimeout(function () {\n        setOnDisplay(_objectSpread(_objectSpread({}, onDisplay), {}, {\n          displayOff: false\n        }));\n      }, 300);\n    }\n\n    return function () {\n      return clearTimeout(timer);\n    };\n  }, [onDisplay]); // set a gim on display mode\n\n  var displayGim = function displayGim(displayState, itemId, type) {\n    // setTimeout(() => {\n    // \tlet board = document.getElementById('board');\n    // \tif (board && (onDisplay.displayState && onDisplay.type === 2))\n    // \t{\n    // \t\tboard.scrollIntoView(false);\n    // \t\tconsole.log(\"func fired \")\n    // \t}\n    // \telse\n    // \t\tconsole.log(\"scroooooooooooooooooolll: NULLLLL type : \" + type + \" state : \"+ displayState)\n    // }, 100)\n    console.log(\" |||  DISPLAY : \", displayState ? \"true\" : \"false\", \" ||| type : \" + type);\n    var newdisplayOff = onDisplay.displayState && !displayState ? true : false;\n    setOnDisplay(_objectSpread(_objectSpread({}, onDisplay), {}, {\n      displayState: displayState,\n      displayOff: newdisplayOff,\n      itemId: itemId,\n      type: type\n    }));\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].div, {\n    className: \"relative flex flex-col w-full h-auto overflow-hidden\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].div, {\n      className: \"relative flex flex-col justify-start l:h-screen \".concat(onDisplay.displayState && onDisplay.type !== -1 ? \"h-auto\" : \"h-screen\", \" m-0 p-0  w-full \").concat(_components_theme__WEBPACK_IMPORTED_MODULE_14__[\"theme\"].dark.backgroundColor),\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].div, {\n        id: \"soguma\",\n        className: \"relative flex justify-center items-center l:h-full md:h-screen h-80 w-full\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"absolute top-0 left-0 lg:h-full md:h-full h-full w-full \",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_darkSkyOpen__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            height: \"lg:h-full h-full md:h-1/2 w-full\",\n            darkTheme: darkTheme\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 7\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 6\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"absolute w-full h-full top-0 left-0\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \" flex flex-col justify-center items-center h-full w-1/2  bg-yellow-800\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"relative w-full pt-full bg-yellow-300 border-black rounded-full\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n                className: \"absolute top-0 left-0 bottom-0 right-0  object-fill border-4\",\n                src: \"/me/0.png\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 78,\n                columnNumber: 10\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 77,\n              columnNumber: 9\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"hr\", {\n              className: \"absolute -left-full border-2 border-black w-100\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 80,\n              columnNumber: 9\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 7\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 6\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].div, {\n          className: \"absolute flex justify-center items-start md:h-100 lg:h-100 md:top-1/4 top-1/4 h-full lg:top-1/3 w-full z-20\",\n          style: onDisplay.displayState ? {\n            scale: sogumaScale,\n            y: sogumaYoffset\n          } : {\n            scale: 1,\n            y: 0\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_sogumaVx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            repos: repos,\n            dataLoading: true,\n            setOnDisplay: displayGim,\n            onDisplay: onDisplay,\n            darkTheme: darkTheme\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_sogumaVxPhone__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            repos: repos,\n            dataLoading: true,\n            setOnDisplay: displayGim,\n            onDisplay: onDisplay,\n            darkTheme: darkTheme\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 96,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_mainboard__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        id: \"board\",\n        onDisplay: onDisplay,\n        about: about,\n        repos: repos\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 4\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 56,\n    columnNumber: 3\n  }, this);\n}\n\n_s(Home, \"WETFgi1QOSOn1exqfOzhPSfqkiU=\", false, function () {\n  return [framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useViewportScroll\"], framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useTransform\"]];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwiYWJvdXQiLCJyZXBvcyIsImRhdGFMb2FkaW5nIiwiZGFya1RoZW1lIiwiY2hhbmdlVGhlbWUiLCJ1c2VTdGF0ZSIsImRpc3BsYXlTdGF0ZSIsImRpc3BsYXlPZmYiLCJpdGVtSWQiLCJ0eXBlIiwib25EaXNwbGF5Iiwic2V0T25EaXNwbGF5IiwidXNlVmlld3BvcnRTY3JvbGwiLCJzY3JvbGxZUHJvZ3Jlc3MiLCJzb2d1bWFTY2FsZSIsInVzZVRyYW5zZm9ybSIsInNvZ3VtYVlvZmZzZXQiLCJ1c2VFZmZlY3QiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJkaXNwbGF5R2ltIiwiY29uc29sZSIsImxvZyIsIm5ld2Rpc3BsYXlPZmYiLCJ0aGVtZSIsImRhcmsiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzY2FsZSIsInkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFHZSxTQUFTQSxJQUFULE9BQW9FO0FBQUE7O0FBQUEsTUFBcERDLEtBQW9ELFFBQXBEQSxLQUFvRDtBQUFBLE1BQTdDQyxLQUE2QyxRQUE3Q0EsS0FBNkM7QUFBQSxNQUF0Q0MsV0FBc0MsUUFBdENBLFdBQXNDO0FBQUEsTUFBekJDLFNBQXlCLFFBQXpCQSxTQUF5QjtBQUFBLE1BQWRDLFdBQWMsUUFBZEEsV0FBYzs7QUFBQSxrQkFDaERDLHVEQUFRLENBQUM7QUFBRUMsZ0JBQVksRUFBRSxJQUFoQjtBQUFzQkMsY0FBVSxFQUFHLEtBQW5DO0FBQTBDQyxVQUFNLEVBQUUsQ0FBQyxDQUFuRDtBQUFzREMsUUFBSSxFQUFFLENBQUM7QUFBN0QsR0FBRCxDQUR3QztBQUFBLE1BQzNFQyxTQUQyRTtBQUFBLE1BQ2hFQyxZQURn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RUthLGdFLEVBQ1JHLDJELEVBQ0VBLDJEOzs7S0FKQ2hCLEkiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEYXJrU2t5T3BlbiBmcm9tICcuLi9jb21wb25lbnRzL2RhcmtTa3lPcGVuJ1xuaW1wb3J0IFNvZ3VtYVZ4IGZyb20gJy4uL2NvbXBvbmVudHMvc29ndW1hVngnXG5pbXBvcnQgU29ndW1hVnhQaG9uZSBmcm9tICcuLi9jb21wb25lbnRzL3NvZ3VtYVZ4UGhvbmUnXG5pbXBvcnQgRGFya1NreSBmcm9tICcuLi9jb21wb25lbnRzL2RhcmtTa3knXG5pbXBvcnQgRXllU3dpdGNoIGZyb20gJy4uL2NvbXBvbmVudHMvZXllU3dpdGNoJ1xuaW1wb3J0IE1haW5Cb2FyZCBmcm9tICcuLi9jb21wb25lbnRzL21haW5ib2FyZCdcbmltcG9ydCBCb2FyZFBob25lIGZyb20gJy4uL2NvbXBvbmVudHMvYm9hcmRQaG9uZSdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBnZXRMb2NhbFByb2plY3REYXRhIGZyb20gJy4uL2NvbXBvbmVudHMvdXRpbGl0aWVzL2dldExvY2FsUHJvamVjdERhdGEnXG5cbmltcG9ydCBTY2VuZSBmcm9tICcuLi9jb21wb25lbnRzL3NjZW5lJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbW90aW9uLCB1c2VUcmFuc2Zvcm0sIHVzZVZpZXdwb3J0U2Nyb2xsLCB1c2VNb3Rpb25WYWx1ZSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvdGhlbWUnXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGFib3V0LCByZXBvcywgZGF0YUxvYWRpbmcsIGRhcmtUaGVtZSwgY2hhbmdlVGhlbWV9KSB7XG5cdGNvbnN0IFtvbkRpc3BsYXksIHNldE9uRGlzcGxheV0gPSB1c2VTdGF0ZSh7IGRpc3BsYXlTdGF0ZTogdHJ1ZSwgZGlzcGxheU9mZiA6IGZhbHNlLCBpdGVtSWQ6IC0xLCB0eXBlOiAtMSB9KVxuXHRjb25zdCB7IHNjcm9sbFlQcm9ncmVzcyB9ID0gdXNlVmlld3BvcnRTY3JvbGwoKTtcblx0Y29uc3Qgc29ndW1hU2NhbGUgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMC4xLCAwLjQsIDFdLCBbMSwgMC45LCAwLjgsIDAuMV0pO1xuXHRjb25zdCBzb2d1bWFZb2Zmc2V0ID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDAuMSwgMC41LCAxXSwgWzAsIC0xMCwgLTEwMCwgLTUwMF0pO1xuXG5cdC8vIGdldExvY2FsUHJvamVjdERhdGEoXCJGcmFjdG9sXCIpO1xuXHQvLyBjb25zdCBbW3NvZ3VtYSwgYm9hcmRdLCBzZXRFbGVtZW50c10gPSB1c2VTdGF0ZShbbnVsbCxudWxsXSlcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHQvLyBzZXRFbGVtZW50cyhbZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NvZ3VtYScpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hcmQnKV0pXG5cdFx0bGV0IHRpbWVyO1xuXHRcdGlmICghb25EaXNwbGF5LmRpc3BsYXlTdGF0ZSAmJiBvbkRpc3BsYXkuZGlzcGxheU9mZilcblx0XHR7XG5cdFx0XHR0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRzZXRPbkRpc3BsYXkoeyAuLi5vbkRpc3BsYXksIGRpc3BsYXlPZmYgOiBmYWxzZSB9KTtcblx0XHRcdH0sIDMwMCkgXG5cdFx0fVxuXHRcdHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXIpO1xuXHR9LCBbb25EaXNwbGF5XSk7XG5cblx0Ly8gc2V0IGEgZ2ltIG9uIGRpc3BsYXkgbW9kZVxuXHRjb25zdCBkaXNwbGF5R2ltID0gKGRpc3BsYXlTdGF0ZSwgaXRlbUlkLCB0eXBlKSA9PiB7XG5cdFx0Ly8gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0Ly8gXHRsZXQgYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hcmQnKTtcblx0XHQvLyBcdGlmIChib2FyZCAmJiAob25EaXNwbGF5LmRpc3BsYXlTdGF0ZSAmJiBvbkRpc3BsYXkudHlwZSA9PT0gMikpXG5cdFx0Ly8gXHR7XG5cdFx0Ly8gXHRcdGJvYXJkLnNjcm9sbEludG9WaWV3KGZhbHNlKTtcblx0XHQvLyBcdFx0Y29uc29sZS5sb2coXCJmdW5jIGZpcmVkIFwiKVxuXHRcdC8vIFx0fVxuXHRcdC8vIFx0ZWxzZVxuXHRcdC8vIFx0XHRjb25zb2xlLmxvZyhcInNjcm9vb29vb29vb29vb29vb29vb2xsbDogTlVMTExMTCB0eXBlIDogXCIgKyB0eXBlICsgXCIgc3RhdGUgOiBcIisgZGlzcGxheVN0YXRlKVxuXG5cdFx0Ly8gfSwgMTAwKVxuXHRcdGNvbnNvbGUubG9nKFwiIHx8fCAgRElTUExBWSA6IFwiLCBkaXNwbGF5U3RhdGUgPyBcInRydWVcIiA6IFwiZmFsc2VcIiAsIFwiIHx8fCB0eXBlIDogXCIgKyB0eXBlIClcblx0XHRjb25zdCBuZXdkaXNwbGF5T2ZmID0gb25EaXNwbGF5LmRpc3BsYXlTdGF0ZSAmJiAhZGlzcGxheVN0YXRlID8gdHJ1ZSA6IGZhbHNlO1xuXHRcdHNldE9uRGlzcGxheSh7IC4uLm9uRGlzcGxheSwgZGlzcGxheVN0YXRlLCBkaXNwbGF5T2ZmIDogbmV3ZGlzcGxheU9mZiwgaXRlbUlkLCB0eXBlIH0pO1xuXHR9XG5cdFxuXHRyZXR1cm4gKFxuXHRcdDxtb3Rpb24uZGl2IGNsYXNzTmFtZT17YHJlbGF0aXZlIGZsZXggZmxleC1jb2wgdy1mdWxsIGgtYXV0byBvdmVyZmxvdy1oaWRkZW5gfT5cbnsvKiB7XHRcdGNvbnNvbGUubG9nKGRhdGFMb2FkaW5nID8gXCJub3QgZmV0Y2hlZCB5ZXRcIiA6IFwiYWJvdXQgOlwiICwgYWJvdXQsIFwicmVwb3MgOiBcIiwgcmVwb3MgKX0gKi99XG5cdFx0XHR7LyogPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB6LTUwIHRleHQtd2hpdGUgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciB0b3AtMTAwIGxlZnQtMS80XCIgPlxuXHRcdFx0XHQ8aDE+b25EaXNwbGF5IDoge29uRGlzcGxheS5kaXNwbGF5U3RhdGUgPyBcInRydWVcIiA6IFwiZmFsc2VcIn08L2gxPlxuXHRcdFx0XHQ8aDE+ZGlzcGxheU9mZiA6IHtvbkRpc3BsYXkuZGlzcGxheU9mZiA/IFwidHJ1ZVwiIDogXCJmYWxzZVwifTwvaDE+XG5cdFx0XHRcdDxoMT5pdGVtSWQgOiB7b25EaXNwbGF5Lml0ZW1JZH08L2gxPlxuXHRcdFx0XHQ8aDE+dHlwZSA6IHtvbkRpc3BsYXkudHlwZX08L2gxPlxuXHRcdFx0XHQ8TGluayBocmVmPVwiL2hvbWVcIiA+PGE+bm9uZSBleGlzdGluZyB1cmw8L2E+PC9MaW5rPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8bmF2IGNsYXNzTmFtZT1cImZpeGVkIHotNTAgdG9wLTIwIHJpZ2h0LTggbGc6aC00MCBsZzp3LTI0IG1kOmgtMzIgbWQ6dy0yMCBoLTIwIHctMTZcIj5cblx0XHRcdFx0PEV5ZVN3aXRjaCBkYXJrVGhlbWU9e2RhcmtUaGVtZX0gY2hhbmdlVGhlbWU9e2NoYW5nZVRoZW1lfSBjb2xvcjI9XCJiZy1ncmVlbi01MDBcIiBjb2xvcjE9XCJiZy1ibHVlLTkwMFwiIC8+XG5cdFx0XHQ8L25hdj4gKi99XG5cdFx0XHQ8bW90aW9uLmRpdiBjbGFzc05hbWU9e2ByZWxhdGl2ZSBmbGV4IGZsZXgtY29sIGp1c3RpZnktc3RhcnQgbDpoLXNjcmVlbiAke29uRGlzcGxheS5kaXNwbGF5U3RhdGUgJiYgb25EaXNwbGF5LnR5cGUgIT09IC0xID8gXCJoLWF1dG9cIiA6IFwiaC1zY3JlZW5cIiB9IG0tMCBwLTAgIHctZnVsbCAke3RoZW1lLmRhcmsuYmFja2dyb3VuZENvbG9yfWB9XG5cdFx0XHQ+XG5cdFx0XHRcdDxtb3Rpb24uZGl2IGlkPVwic29ndW1hXCIgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbDpoLWZ1bGwgbWQ6aC1zY3JlZW4gaC04MCB3LWZ1bGxcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCBsZzpoLWZ1bGwgbWQ6aC1mdWxsIGgtZnVsbCB3LWZ1bGwgXCI+XG5cdFx0XHRcdFx0XHQ8RGFya1NreU9wZW4gaGVpZ2h0PVwibGc6aC1mdWxsIGgtZnVsbCBtZDpoLTEvMiB3LWZ1bGxcIiBkYXJrVGhlbWU9e2RhcmtUaGVtZX0gLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHctZnVsbCBoLWZ1bGwgdG9wLTAgbGVmdC0wXCIgPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCIgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1mdWxsIHctMS8yICBiZy15ZWxsb3ctODAwXCI+XG5cdFx0XHRcdFx0XHRcdHsvKiA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtZnVsbCB3LTUvNiBiZy1yZWQtNjAwXCI+ICovfVxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIHB0LWZ1bGwgYmcteWVsbG93LTMwMCBib3JkZXItYmxhY2sgcm91bmRlZC1mdWxsXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCBib3R0b20tMCByaWdodC0wICBvYmplY3QtZmlsbCBib3JkZXItNFwiIHNyYz1cIi9tZS8wLnBuZ1wiLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8aHIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgLWxlZnQtZnVsbCBib3JkZXItMiBib3JkZXItYmxhY2sgdy0xMDBcIj48L2hyPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdHsvKiA8L2Rpdj4gKi99XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1zdGFydCBtZDpoLTEwMCBsZzpoLTEwMCBtZDp0b3AtMS80IHRvcC0xLzQgaC1mdWxsIGxnOnRvcC0xLzMgdy1mdWxsIHotMjBcIlxuXHRcdFx0XHRcdFx0c3R5bGU9eyBvbkRpc3BsYXkuZGlzcGxheVN0YXRlID8gXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRzY2FsZTogc29ndW1hU2NhbGUsXG5cdFx0XHRcdFx0XHRcdFx0eTogc29ndW1hWW9mZnNldFxuXHRcdFx0XHRcdFx0XHR9IDoge1xuXHRcdFx0XHRcdFx0XHRcdHNjYWxlIDogMSxcblx0XHRcdFx0XHRcdFx0XHR5IDogMFxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PFNvZ3VtYVZ4IHJlcG9zPXtyZXBvc30gZGF0YUxvYWRpbmcgc2V0T25EaXNwbGF5PXtkaXNwbGF5R2ltfSBvbkRpc3BsYXk9e29uRGlzcGxheX0gZGFya1RoZW1lPXtkYXJrVGhlbWV9IC8+XG5cdFx0XHRcdFx0XHQ8U29ndW1hVnhQaG9uZSByZXBvcz17cmVwb3N9IGRhdGFMb2FkaW5nIHNldE9uRGlzcGxheT17ZGlzcGxheUdpbX0gb25EaXNwbGF5PXtvbkRpc3BsYXl9IGRhcmtUaGVtZT17ZGFya1RoZW1lfSAvPlxuXHRcdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0XHQ8TWFpbkJvYXJkIGlkPVwiYm9hcmRcIiBvbkRpc3BsYXk9e29uRGlzcGxheX0gYWJvdXQ9e2Fib3V0fSByZXBvcz17cmVwb3N9IC8+XG5cdFx0XHRcdHsvKiA8Qm9hcmRQaG9uZSBvbkRpc3BsYXk9e29uRGlzcGxheX0gYWJvdXQ9e2Fib3V0fSByZXBvcz17cmVwb3N9IC8+ICovfVxuXHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0IHsvKiB7b25EaXNwbGF5LmRpc3BsYXlTdGF0ZSAmJiA8Q2FyZCBvbkRpc3BsYXk9e29uRGlzcGxheX0gZGFya1RoZW1lPXtkYXJrVGhlbWV9IGRpc3BsYXlHaW09e2Rpc3BsYXlHaW19IC8+fSAqL31cblx0XHQ8L21vdGlvbi5kaXY+XG5cdClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuXG5cdGNvbnN0IHJlczEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9KYWtlZURlc3UnKTtcblx0Y29uc3QgcmVzMiA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL0pha2VlRGVzdS9yZXBvcycpO1xuXHRcblx0Y29uc3QgYWJvdXQgPSBhd2FpdCByZXMxLmpzb24oKTtcblx0Y29uc3QgcmVwb3MgPSBhd2FpdCByZXMyLmpzb24oKTtcblx0Ly8gY29uc29sZS5sb2coIGJydXREYXRhIClcblx0Ly8gY29uc3QgbG9hZGluZyA9IGJydXREYXRhID8gdHJ1ZSA6IGZhbHNlO1xuXHQvLyBpZiAoZmV0Y2hlZERhdGEpXG5cdC8vIHtcblxuXHQvLyB9XG5cdGNvbnN0IGRhdGFMb2FkaW5nID0gKGFib3V0ICYmIHJlcG9zKSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGZhbHNlOyBcblx0XG5cdHJldHVybiB7XG5cdFx0cHJvcHMgOiB7IGFib3V0LCByZXBvcywgZGF0YUxvYWRpbmcgIH1cblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})