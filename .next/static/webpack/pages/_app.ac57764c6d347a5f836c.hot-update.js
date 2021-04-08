webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _components_darkSkyOpen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/darkSkyOpen */ \"./components/darkSkyOpen.js\");\n/* harmony import */ var _components_sogumaVx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/sogumaVx */ \"./components/sogumaVx.tsx\");\n/* harmony import */ var _components_sogumaVxPhone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/sogumaVxPhone */ \"./components/sogumaVxPhone.tsx\");\n/* harmony import */ var _components_darkSky__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/darkSky */ \"./components/darkSky.js\");\n/* harmony import */ var _components_eyeSwitch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/eyeSwitch */ \"./components/eyeSwitch.js\");\n/* harmony import */ var _components_mainboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/mainboard */ \"./components/mainboard.js\");\n/* harmony import */ var _components_boardPhone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/boardPhone */ \"./components/boardPhone.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_scene__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/scene */ \"./components/scene.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _components_theme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/theme */ \"./components/theme.js\");\n\n\n\nvar _jsxFileName = \"/home/hamza/Desktop/portfolio/pages/index.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Home(_ref) {\n  _s();\n\n  var about = _ref.about,\n      repos = _ref.repos,\n      dataLoading = _ref.dataLoading,\n      darkTheme = _ref.darkTheme,\n      changeTheme = _ref.changeTheme;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_11__[\"useState\"])({\n    displayState: true,\n    displayOff: false,\n    itemId: -1,\n    type: -1\n  }),\n      onDisplay = _useState[0],\n      setOnDisplay = _useState[1];\n\n  var _useViewportScroll = Object(framer_motion__WEBPACK_IMPORTED_MODULE_12__[\"useViewportScroll\"])(),\n      scrollYProgress = _useViewportScroll.scrollYProgress;\n\n  var sogumaScale = Object(framer_motion__WEBPACK_IMPORTED_MODULE_12__[\"useTransform\"])(scrollYProgress, [0, 0.1, 0.4, 1], [1, 0.9, 0.8, 0.1]);\n  var sogumaYoffset = Object(framer_motion__WEBPACK_IMPORTED_MODULE_12__[\"useTransform\"])(scrollYProgress, [0, 0.1, 0.5, 1], [0, -10, -100, -500]);\n  Object(react__WEBPACK_IMPORTED_MODULE_11__[\"useEffect\"])(function () {\n    var timer;\n\n    if (!onDisplay.displayState && onDisplay.displayOff) {\n      timer = setTimeout(function () {\n        setOnDisplay(_objectSpread(_objectSpread({}, onDisplay), {}, {\n          displayOff: false\n        }));\n      }, 300);\n    }\n\n    return function () {\n      return clearTimeout(timer);\n    };\n  }, [onDisplay]); // set a gim on display mode\n\n  var displayGim = function displayGim(displayState, itemId, type) {\n    var newdisplayOff = onDisplay.displayState && !displayState ? true : false;\n    setOnDisplay(_objectSpread(_objectSpread({}, onDisplay), {}, {\n      displayState: displayState,\n      displayOff: newdisplayOff,\n      itemId: itemId,\n      type: type\n    }));\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_12__[\"motion\"].div, {\n    className: \"relative flex flex-col w-full h-auto overflow-hidden\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_12__[\"motion\"].div, {\n      className: \"relative flex flex-col justify-start lg:h-screen h-auto m-0 p-0  w-full \".concat(_components_theme__WEBPACK_IMPORTED_MODULE_13__[\"theme\"].dark.backgroundColor),\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_12__[\"motion\"].div, {\n        className: \"relative flex justify-center items-center lg:h-full md:h-screen h-100 w-full\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"absolute top-0 left-0 lg:h-full md:h-full h-full w-full \",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_darkSkyOpen__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            height: \"lg:h-full h-full md:h-1/2 w-full\",\n            darkTheme: darkTheme\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 7\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 6\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_12__[\"motion\"].div, {\n          className: \"absolute z-20 flex justify-center items-start md:h-100 lg:h-100 md:top-1/4 top-1/4 h-full lg:top-1/3 w-full\",\n          style: onDisplay.displayState ? {\n            scale: sogumaScale,\n            y: sogumaYoffset\n          } : {\n            scale: 1,\n            y: 0\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_sogumaVx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            repos: repos,\n            dataLoading: true,\n            setOnDisplay: displayGim,\n            onDisplay: onDisplay,\n            darkTheme: darkTheme\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 69,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_sogumaVxPhone__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            repos: repos,\n            dataLoading: true,\n            setOnDisplay: displayGim,\n            onDisplay: onDisplay,\n            darkTheme: darkTheme\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 70,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_mainboard__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        onDisplay: onDisplay,\n        about: about,\n        repos: repos\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_boardPhone__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n        onDisplay: onDisplay,\n        about: about,\n        repos: repos\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 4\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 40,\n    columnNumber: 3\n  }, this);\n}\n\n_s(Home, \"WETFgi1QOSOn1exqfOzhPSfqkiU=\", false, function () {\n  return [framer_motion__WEBPACK_IMPORTED_MODULE_12__[\"useViewportScroll\"], framer_motion__WEBPACK_IMPORTED_MODULE_12__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_12__[\"useTransform\"]];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwiYWJvdXQiLCJyZXBvcyIsImRhdGFMb2FkaW5nIiwiZGFya1RoZW1lIiwiY2hhbmdlVGhlbWUiLCJ1c2VTdGF0ZSIsImRpc3BsYXlTdGF0ZSIsImRpc3BsYXlPZmYiLCJpdGVtSWQiLCJ0eXBlIiwib25EaXNwbGF5Iiwic2V0T25EaXNwbGF5IiwidXNlVmlld3BvcnRTY3JvbGwiLCJzY3JvbGxZUHJvZ3Jlc3MiLCJzb2d1bWFTY2FsZSIsInVzZVRyYW5zZm9ybSIsInNvZ3VtYVlvZmZzZXQiLCJ1c2VFZmZlY3QiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJkaXNwbGF5R2ltIiwibmV3ZGlzcGxheU9mZiIsInRoZW1lIiwiZGFyayIsImJhY2tncm91bmRDb2xvciIsInNjYWxlIiwieSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUdlLFNBQVNBLElBQVQsT0FBb0U7QUFBQTs7QUFBQSxNQUFwREMsS0FBb0QsUUFBcERBLEtBQW9EO0FBQUEsTUFBN0NDLEtBQTZDLFFBQTdDQSxLQUE2QztBQUFBLE1BQXRDQyxXQUFzQyxRQUF0Q0EsV0FBc0M7QUFBQSxNQUF6QkMsU0FBeUIsUUFBekJBLFNBQXlCO0FBQUEsTUFBZEMsV0FBYyxRQUFkQSxXQUFjOztBQUFBLGtCQUNoREMsdURBQVEsQ0FBQztBQUFFQyxnQkFBWSxFQUFFLElBQWhCO0FBQXNCQyxjQUFVLEVBQUcsS0FBbkM7QUFBMENDLFVBQU0sRUFBRSxDQUFDLENBQW5EO0FBQXNEQyxRQUFJLEVBQUUsQ0FBQztBQUE3RCxHQUFELENBRHdDO0FBQUEsTUFDM0VDLFNBRDJFO0FBQUEsTUFDaEVDLFlBRGdFOztBQUFBLDJCQUV0REMsd0VBQWlC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RztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRCxlQXFCQyxxRUFBQyw2REFBRDtBQUFXLGlCQUFTLEVBQUVPLFNBQXRCO0FBQWlDLGFBQUssRUFBRVYsS0FBeEM7QUFBK0MsYUFBSyxFQUFFQztBQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBckJELGVBc0JDLHFFQUFDLDhEQUFEO0FBQVksaUJBQVMsRUFBRVMsU0FBdkI7QUFBa0MsYUFBSyxFQUFFVixLQUF6QztBQUFnRCxhQUFLLEVBQUVDO0FBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F0QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBd0NBOztHQS9EdUJGLEk7VUFFS2EsZ0UsRUFDUkcsMkQsRUFDRUEsMkQ7OztLQUpDaEIsSSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERhcmtTa3lPcGVuIGZyb20gJy4uL2NvbXBvbmVudHMvZGFya1NreU9wZW4nXG5pbXBvcnQgU29ndW1hVnggZnJvbSAnLi4vY29tcG9uZW50cy9zb2d1bWFWeCdcbmltcG9ydCBTb2d1bWFWeFBob25lIGZyb20gJy4uL2NvbXBvbmVudHMvc29ndW1hVnhQaG9uZSdcbmltcG9ydCBEYXJrU2t5IGZyb20gJy4uL2NvbXBvbmVudHMvZGFya1NreSdcbmltcG9ydCBFeWVTd2l0Y2ggZnJvbSAnLi4vY29tcG9uZW50cy9leWVTd2l0Y2gnXG5pbXBvcnQgTWFpbkJvYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvbWFpbmJvYXJkJ1xuaW1wb3J0IEJvYXJkUGhvbmUgZnJvbSAnLi4vY29tcG9uZW50cy9ib2FyZFBob25lJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG5pbXBvcnQgU2NlbmUgZnJvbSAnLi4vY29tcG9uZW50cy9zY2VuZSdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1vdGlvbiwgdXNlVHJhbnNmb3JtLCB1c2VWaWV3cG9ydFNjcm9sbCwgdXNlTW90aW9uVmFsdWUgfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuLi9jb21wb25lbnRzL3RoZW1lJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBhYm91dCwgcmVwb3MsIGRhdGFMb2FkaW5nLCBkYXJrVGhlbWUsIGNoYW5nZVRoZW1lfSkge1xuXHRjb25zdCBbb25EaXNwbGF5LCBzZXRPbkRpc3BsYXldID0gdXNlU3RhdGUoeyBkaXNwbGF5U3RhdGU6IHRydWUsIGRpc3BsYXlPZmYgOiBmYWxzZSwgaXRlbUlkOiAtMSwgdHlwZTogLTEgfSlcblx0Y29uc3QgeyBzY3JvbGxZUHJvZ3Jlc3MgfSA9IHVzZVZpZXdwb3J0U2Nyb2xsKCk7XG5cdGNvbnN0IHNvZ3VtYVNjYWxlID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDAuMSwgMC40LCAxXSwgWzEsIDAuOSwgMC44LCAwLjFdKTtcblx0Y29uc3Qgc29ndW1hWW9mZnNldCA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAwLjEsIDAuNSwgMV0sIFswLCAtMTAsIC0xMDAsIC01MDBdKTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGxldCB0aW1lcjtcblx0XHRpZiAoIW9uRGlzcGxheS5kaXNwbGF5U3RhdGUgJiYgb25EaXNwbGF5LmRpc3BsYXlPZmYpXG5cdFx0e1xuXHRcdFx0dGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0c2V0T25EaXNwbGF5KHsgLi4ub25EaXNwbGF5LCBkaXNwbGF5T2ZmIDogZmFsc2UgfSk7XG5cdFx0XHR9LCAzMDApIFxuXHRcdH1cblx0XHRyZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKTtcblx0fSwgW29uRGlzcGxheV0pO1xuXG5cdC8vIHNldCBhIGdpbSBvbiBkaXNwbGF5IG1vZGVcblx0Y29uc3QgZGlzcGxheUdpbSA9IChkaXNwbGF5U3RhdGUsIGl0ZW1JZCwgdHlwZSkgPT4ge1xuXHRcdGNvbnN0IG5ld2Rpc3BsYXlPZmYgPSBvbkRpc3BsYXkuZGlzcGxheVN0YXRlICYmICFkaXNwbGF5U3RhdGUgPyB0cnVlIDogZmFsc2U7XG5cdFx0c2V0T25EaXNwbGF5KHsgLi4ub25EaXNwbGF5LCBkaXNwbGF5U3RhdGUsIGRpc3BsYXlPZmYgOiBuZXdkaXNwbGF5T2ZmLCBpdGVtSWQsIHR5cGUgfSk7XG5cdH1cblx0XG5cdHJldHVybiAoXG5cdFx0PG1vdGlvbi5kaXYgY2xhc3NOYW1lPXtgcmVsYXRpdmUgZmxleCBmbGV4LWNvbCB3LWZ1bGwgaC1hdXRvIG92ZXJmbG93LWhpZGRlbmB9Plxuey8qIHtcdFx0Y29uc29sZS5sb2coZGF0YUxvYWRpbmcgPyBcIm5vdCBmZXRjaGVkIHlldFwiIDogXCJhYm91dCA6XCIgLCBhYm91dCwgXCJyZXBvcyA6IFwiLCByZXBvcyApfVxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB6LTUwIHRleHQtd2hpdGUgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciB0b3AtMTAwIGxlZnQtMS80XCIgPlxuXHRcdFx0XHQ8aDE+b25EaXNwbGF5IDoge29uRGlzcGxheS5kaXNwbGF5U3RhdGUgPyBcInRydWVcIiA6IFwiZmFsc2VcIn08L2gxPlxuXHRcdFx0XHQ8aDE+ZGlzcGxheU9mZiA6IHtvbkRpc3BsYXkuZGlzcGxheU9mZiA/IFwidHJ1ZVwiIDogXCJmYWxzZVwifTwvaDE+XG5cdFx0XHRcdDxoMT5pdGVtSWQgOiB7b25EaXNwbGF5Lml0ZW1JZH08L2gxPlxuXHRcdFx0XHQ8aDE+dHlwZSA6IHtvbkRpc3BsYXkudHlwZX08L2gxPlxuXHRcdFx0XHQ8TGluayBocmVmPVwiL2hvbWVcIiA+PGE+bm9uZSBleGlzdGluZyB1cmw8L2E+PC9MaW5rPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8bmF2IGNsYXNzTmFtZT1cImZpeGVkIHotNTAgdG9wLTIwIHJpZ2h0LTggbGc6aC00MCBsZzp3LTI0IG1kOmgtMzIgbWQ6dy0yMCBoLTIwIHctMTZcIj5cblx0XHRcdFx0PEV5ZVN3aXRjaCBkYXJrVGhlbWU9e2RhcmtUaGVtZX0gY2hhbmdlVGhlbWU9e2NoYW5nZVRoZW1lfSBjb2xvcjI9XCJiZy1ncmVlbi01MDBcIiBjb2xvcjE9XCJiZy1ibHVlLTkwMFwiIC8+XG5cdFx0XHQ8L25hdj4gKi99XG5cdFx0XHQ8bW90aW9uLmRpdiBjbGFzc05hbWU9e2ByZWxhdGl2ZSBmbGV4IGZsZXgtY29sIGp1c3RpZnktc3RhcnQgbGc6aC1zY3JlZW4gaC1hdXRvIG0tMCBwLTAgIHctZnVsbCAke3RoZW1lLmRhcmsuYmFja2dyb3VuZENvbG9yfWB9XG5cdFx0XHQ+XG5cdFx0XHRcdDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGxnOmgtZnVsbCBtZDpoLXNjcmVlbiBoLTEwMCB3LWZ1bGxcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCBsZzpoLWZ1bGwgbWQ6aC1mdWxsIGgtZnVsbCB3LWZ1bGwgXCI+XG5cdFx0XHRcdFx0XHQ8RGFya1NreU9wZW4gaGVpZ2h0PVwibGc6aC1mdWxsIGgtZnVsbCBtZDpoLTEvMiB3LWZ1bGxcIiBkYXJrVGhlbWU9e2RhcmtUaGVtZX0gLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB6LTIwIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtc3RhcnQgbWQ6aC0xMDAgbGc6aC0xMDAgbWQ6dG9wLTEvNCB0b3AtMS80IGgtZnVsbCBsZzp0b3AtMS8zIHctZnVsbFwiXG5cdFx0XHRcdFx0XHRzdHlsZT17IG9uRGlzcGxheS5kaXNwbGF5U3RhdGUgPyBcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHNjYWxlOiBzb2d1bWFTY2FsZSxcblx0XHRcdFx0XHRcdFx0XHR5OiBzb2d1bWFZb2Zmc2V0XG5cdFx0XHRcdFx0XHRcdH0gOiB7XG5cdFx0XHRcdFx0XHRcdFx0c2NhbGUgOiAxLFxuXHRcdFx0XHRcdFx0XHRcdHkgOiAwXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8U29ndW1hVnggcmVwb3M9e3JlcG9zfSBkYXRhTG9hZGluZyBzZXRPbkRpc3BsYXk9e2Rpc3BsYXlHaW19IG9uRGlzcGxheT17b25EaXNwbGF5fSBkYXJrVGhlbWU9e2RhcmtUaGVtZX0gLz5cblx0XHRcdFx0XHRcdDxTb2d1bWFWeFBob25lIHJlcG9zPXtyZXBvc30gZGF0YUxvYWRpbmcgc2V0T25EaXNwbGF5PXtkaXNwbGF5R2ltfSBvbkRpc3BsYXk9e29uRGlzcGxheX0gZGFya1RoZW1lPXtkYXJrVGhlbWV9IC8+XG5cdFx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHRcdDxNYWluQm9hcmQgb25EaXNwbGF5PXtvbkRpc3BsYXl9IGFib3V0PXthYm91dH0gcmVwb3M9e3JlcG9zfSAvPlxuXHRcdFx0XHQ8Qm9hcmRQaG9uZSBvbkRpc3BsYXk9e29uRGlzcGxheX0gYWJvdXQ9e2Fib3V0fSByZXBvcz17cmVwb3N9IC8+XG5cdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHQgey8qIHtvbkRpc3BsYXkuZGlzcGxheVN0YXRlICYmIDxDYXJkIG9uRGlzcGxheT17b25EaXNwbGF5fSBkYXJrVGhlbWU9e2RhcmtUaGVtZX0gZGlzcGxheUdpbT17ZGlzcGxheUdpbX0gLz59ICovfVxuXHRcdDwvbW90aW9uLmRpdj5cblx0KVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG5cblx0Y29uc3QgcmVzMSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL0pha2VlRGVzdScpO1xuXHRjb25zdCByZXMyID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvSmFrZWVEZXN1L3JlcG9zJyk7XG5cdFxuXHRjb25zdCBhYm91dCA9IGF3YWl0IHJlczEuanNvbigpO1xuXHRjb25zdCByZXBvcyA9IGF3YWl0IHJlczIuanNvbigpO1xuXHQvLyBjb25zb2xlLmxvZyggYnJ1dERhdGEgKVxuXHQvLyBjb25zdCBsb2FkaW5nID0gYnJ1dERhdGEgPyB0cnVlIDogZmFsc2U7XG5cdC8vIGlmIChmZXRjaGVkRGF0YSlcblx0Ly8ge1xuXG5cdC8vIH1cblx0Y29uc3QgZGF0YUxvYWRpbmcgPSAoYWJvdXQgJiYgcmVwb3MpID09PSB1bmRlZmluZWQgPyB0cnVlIDogZmFsc2U7IFxuXHRcblx0cmV0dXJuIHtcblx0XHRwcm9wcyA6IHsgYWJvdXQsIHJlcG9zLCBkYXRhTG9hZGluZyAgfVxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})