webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _components_darkSkyOpen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/darkSkyOpen */ \"./components/darkSkyOpen.js\");\n/* harmony import */ var _components_sogumaVx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/sogumaVx */ \"./components/sogumaVx.tsx\");\n/* harmony import */ var _components_sogumaVxPhone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/sogumaVxPhone */ \"./components/sogumaVxPhone.tsx\");\n/* harmony import */ var _components_darkSky__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/darkSky */ \"./components/darkSky.js\");\n/* harmony import */ var _components_eyeSwitch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/eyeSwitch */ \"./components/eyeSwitch.js\");\n/* harmony import */ var _components_mainboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/mainboard */ \"./components/mainboard.js\");\n/* harmony import */ var _components_boardPhone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/boardPhone */ \"./components/boardPhone.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_utilities_getLocalProjectData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/utilities/getLocalProjectData */ \"./components/utilities/getLocalProjectData.js\");\n/* harmony import */ var _components_scene__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/scene */ \"./components/scene.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _components_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/theme */ \"./components/theme.js\");\n\n\n\nvar _jsxFileName = \"/home/hamza/Desktop/portfolio/pages/index.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Home(_ref) {\n  _s();\n\n  var about = _ref.about,\n      repos = _ref.repos,\n      dataLoading = _ref.dataLoading,\n      darkTheme = _ref.darkTheme,\n      changeTheme = _ref.changeTheme;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_12__[\"useState\"])({\n    displayState: true,\n    displayOff: false,\n    itemId: -1,\n    type: -1\n  }),\n      onDisplay = _useState[0],\n      setOnDisplay = _useState[1];\n\n  var _useViewportScroll = Object(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useViewportScroll\"])(),\n      scrollYProgress = _useViewportScroll.scrollYProgress;\n\n  var sogumaScale = Object(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useTransform\"])(scrollYProgress, [0, 0.1, 0.4, 1], [1, 0.9, 0.8, 0.1]);\n  var sogumaYoffset = Object(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useTransform\"])(scrollYProgress, [0, 0.1, 0.5, 1], [0, -10, -100, -500]); // getLocalProjectData(\"Fractol\");\n  // const [[soguma, board], setElements] = useState([null,null])\n\n  Object(react__WEBPACK_IMPORTED_MODULE_12__[\"useEffect\"])(function () {\n    // setElements([document.getElementById('soguma'), document.getElementById('board')])\n    var timer;\n\n    if (!onDisplay.displayState && onDisplay.displayOff) {\n      timer = setTimeout(function () {\n        setOnDisplay(_objectSpread(_objectSpread({}, onDisplay), {}, {\n          displayOff: false\n        }));\n      }, 300);\n    }\n\n    return function () {\n      return clearTimeout(timer);\n    };\n  }, [onDisplay]); // set a gim on display mode\n\n  var displayGim = function displayGim(displayState, itemId, type) {\n    // setTimeout(() => {\n    // \tlet board = document.getElementById('board');\n    // \tif (board && (onDisplay.displayState && onDisplay.type === 2))\n    // \t{\n    // \t\tboard.scrollIntoView(false);\n    // \t\tconsole.log(\"func fired \")\n    // \t}\n    // \telse\n    // \t\tconsole.log(\"scroooooooooooooooooolll: NULLLLL type : \" + type + \" state : \"+ displayState)\n    // }, 100)\n    console.log(\" |||  DISPLAY : \", displayState ? \"true\" : \"false\", \" ||| type : \" + type);\n    var newdisplayOff = onDisplay.displayState && !displayState ? true : false;\n    setOnDisplay(_objectSpread(_objectSpread({}, onDisplay), {}, {\n      displayState: displayState,\n      displayOff: newdisplayOff,\n      itemId: itemId,\n      type: type\n    }));\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].div, {\n    className: \"relative flex flex-col w-full h-auto overflow-hidden\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].div, {\n      className: \"relative flex flex-col justify-start l:h-screen \".concat(onDisplay.displayState && onDisplay.type !== -1 ? \"h-auto\" : \"h-screen\", \" m-0 p-0  w-full \").concat(_components_theme__WEBPACK_IMPORTED_MODULE_14__[\"theme\"].dark.backgroundColor),\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].div, {\n        id: \"soguma\",\n        className: \"relative flex justify-center items-center l:h-full md:h-screen h-80 w-full\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"absolute top-0 left-0 lg:h-full md:h-full h-full w-full \",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_darkSkyOpen__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            height: \"lg:h-full h-full md:h-1/2 w-full\",\n            darkTheme: darkTheme\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 7\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 6\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"absolute w-full h-full top-0 left-0\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \" flex flex-col justify-center items-center h-full w-1/2 \",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"relative flex items-center w-2/3 h-full pt-full \",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].img, {\n                className: \"absolute left-0 object-fill border-4 border-black rounded-full\",\n                src: \"/me/0.png\",\n                animate: {\n                  opacity: 1\n                },\n                whileHover: {\n                  opacity: 0.5\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 78,\n                columnNumber: 10\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 77,\n              columnNumber: 9\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"hr\", {\n              className: \"absolute -left-full border-2 border-black w-100\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 88,\n              columnNumber: 9\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 7\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 6\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].div, {\n          className: \"absolute flex justify-center items-start md:h-100 lg:h-100 md:top-1/4 top-1/4 h-full lg:top-1/3 w-full z-20\",\n          style: onDisplay.displayState ? {\n            scale: sogumaScale,\n            y: sogumaYoffset\n          } : {\n            scale: 1,\n            y: 0\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_sogumaVx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            repos: repos,\n            dataLoading: true,\n            setOnDisplay: displayGim,\n            onDisplay: onDisplay,\n            darkTheme: darkTheme\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 103,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_sogumaVxPhone__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            repos: repos,\n            dataLoading: true,\n            setOnDisplay: displayGim,\n            onDisplay: onDisplay,\n            darkTheme: darkTheme\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 104,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_mainboard__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        id: \"board\",\n        onDisplay: onDisplay,\n        about: about,\n        repos: repos\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 4\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 56,\n    columnNumber: 3\n  }, this);\n}\n\n_s(Home, \"WETFgi1QOSOn1exqfOzhPSfqkiU=\", false, function () {\n  return [framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useViewportScroll\"], framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useTransform\"]];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwiYWJvdXQiLCJyZXBvcyIsImRhdGFMb2FkaW5nIiwiZGFya1RoZW1lIiwiY2hhbmdlVGhlbWUiLCJ1c2VTdGF0ZSIsImRpc3BsYXlTdGF0ZSIsImRpc3BsYXlPZmYiLCJpdGVtSWQiLCJ0eXBlIiwib25EaXNwbGF5Iiwic2V0T25EaXNwbGF5IiwidXNlVmlld3BvcnRTY3JvbGwiLCJzY3JvbGxZUHJvZ3Jlc3MiLCJzb2d1bWFTY2FsZSIsInVzZVRyYW5zZm9ybSIsInNvZ3VtYVlvZmZzZXQiLCJ1c2VFZmZlY3QiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJkaXNwbGF5R2ltIiwiY29uc29sZSIsImxvZyIsIm5ld2Rpc3BsYXlPZmYiLCJ0aGVtZSIsImRhcmsiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvcGFjaXR5Iiwic2NhbGUiLCJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBR2UsU0FBU0EsSUFBVCxPQUFvRTtBQUFBOztBQUFBLE1BQXBEQyxLQUFvRCxRQUFwREEsS0FBb0Q7QUFBQSxNQUE3Q0MsS0FBNkMsUUFBN0NBLEtBQTZDO0FBQUEsTUFBdENDLFdBQXNDLFFBQXRDQSxXQUFzQztBQUFBLE1BQXpCQyxTQUF5QixRQUF6QkEsU0FBeUI7QUFBQSxNQUFkQyxXQUFjLFFBQWRBLFdBQWM7O0FBQUEsa0JBQ2hEQyx1REFBUSxDQUFDO0FBQUVDLGdCQUFZLEVBQUUsSUFBaEI7QUFBc0JDLGNBQVUsRUFBRyxLQUFuQztBQUEwQ0MsVUFBTSxFQUFFLENBQUMsQ0FBbkQ7QUFBc0RDLFFBQUksRUFBRSxDQUFDO0FBQTdELEdBQUQsQ0FEd0M7QUFBQSxNQUMzRUMsU0FEMkU7QUFBQSxN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O0FBQTBELGFBQUssRUFBRUM7QUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXZDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFaRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUEwREE7O0dBaEd1QkYsSTtVQUVLYSxnRSxFQUNSRywyRCxFQUNFQSwyRDs7O0tBSkNoQixJIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGFya1NreU9wZW4gZnJvbSAnLi4vY29tcG9uZW50cy9kYXJrU2t5T3BlbidcbmltcG9ydCBTb2d1bWFWeCBmcm9tICcuLi9jb21wb25lbnRzL3NvZ3VtYVZ4J1xuaW1wb3J0IFNvZ3VtYVZ4UGhvbmUgZnJvbSAnLi4vY29tcG9uZW50cy9zb2d1bWFWeFBob25lJ1xuaW1wb3J0IERhcmtTa3kgZnJvbSAnLi4vY29tcG9uZW50cy9kYXJrU2t5J1xuaW1wb3J0IEV5ZVN3aXRjaCBmcm9tICcuLi9jb21wb25lbnRzL2V5ZVN3aXRjaCdcbmltcG9ydCBNYWluQm9hcmQgZnJvbSAnLi4vY29tcG9uZW50cy9tYWluYm9hcmQnXG5pbXBvcnQgQm9hcmRQaG9uZSBmcm9tICcuLi9jb21wb25lbnRzL2JvYXJkUGhvbmUnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgZ2V0TG9jYWxQcm9qZWN0RGF0YSBmcm9tICcuLi9jb21wb25lbnRzL3V0aWxpdGllcy9nZXRMb2NhbFByb2plY3REYXRhJ1xuXG5pbXBvcnQgU2NlbmUgZnJvbSAnLi4vY29tcG9uZW50cy9zY2VuZSdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1vdGlvbiwgdXNlVHJhbnNmb3JtLCB1c2VWaWV3cG9ydFNjcm9sbCwgdXNlTW90aW9uVmFsdWUgfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuLi9jb21wb25lbnRzL3RoZW1lJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBhYm91dCwgcmVwb3MsIGRhdGFMb2FkaW5nLCBkYXJrVGhlbWUsIGNoYW5nZVRoZW1lfSkge1xuXHRjb25zdCBbb25EaXNwbGF5LCBzZXRPbkRpc3BsYXldID0gdXNlU3RhdGUoeyBkaXNwbGF5U3RhdGU6IHRydWUsIGRpc3BsYXlPZmYgOiBmYWxzZSwgaXRlbUlkOiAtMSwgdHlwZTogLTEgfSlcblx0Y29uc3QgeyBzY3JvbGxZUHJvZ3Jlc3MgfSA9IHVzZVZpZXdwb3J0U2Nyb2xsKCk7XG5cdGNvbnN0IHNvZ3VtYVNjYWxlID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDAuMSwgMC40LCAxXSwgWzEsIDAuOSwgMC44LCAwLjFdKTtcblx0Y29uc3Qgc29ndW1hWW9mZnNldCA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAwLjEsIDAuNSwgMV0sIFswLCAtMTAsIC0xMDAsIC01MDBdKTtcblxuXHQvLyBnZXRMb2NhbFByb2plY3REYXRhKFwiRnJhY3RvbFwiKTtcblx0Ly8gY29uc3QgW1tzb2d1bWEsIGJvYXJkXSwgc2V0RWxlbWVudHNdID0gdXNlU3RhdGUoW251bGwsbnVsbF0pXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Ly8gc2V0RWxlbWVudHMoW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzb2d1bWEnKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXJkJyldKVxuXHRcdGxldCB0aW1lcjtcblx0XHRpZiAoIW9uRGlzcGxheS5kaXNwbGF5U3RhdGUgJiYgb25EaXNwbGF5LmRpc3BsYXlPZmYpXG5cdFx0e1xuXHRcdFx0dGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0c2V0T25EaXNwbGF5KHsgLi4ub25EaXNwbGF5LCBkaXNwbGF5T2ZmIDogZmFsc2UgfSk7XG5cdFx0XHR9LCAzMDApIFxuXHRcdH1cblx0XHRyZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKTtcblx0fSwgW29uRGlzcGxheV0pO1xuXG5cdC8vIHNldCBhIGdpbSBvbiBkaXNwbGF5IG1vZGVcblx0Y29uc3QgZGlzcGxheUdpbSA9IChkaXNwbGF5U3RhdGUsIGl0ZW1JZCwgdHlwZSkgPT4ge1xuXHRcdC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdC8vIFx0bGV0IGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXJkJyk7XG5cdFx0Ly8gXHRpZiAoYm9hcmQgJiYgKG9uRGlzcGxheS5kaXNwbGF5U3RhdGUgJiYgb25EaXNwbGF5LnR5cGUgPT09IDIpKVxuXHRcdC8vIFx0e1xuXHRcdC8vIFx0XHRib2FyZC5zY3JvbGxJbnRvVmlldyhmYWxzZSk7XG5cdFx0Ly8gXHRcdGNvbnNvbGUubG9nKFwiZnVuYyBmaXJlZCBcIilcblx0XHQvLyBcdH1cblx0XHQvLyBcdGVsc2Vcblx0XHQvLyBcdFx0Y29uc29sZS5sb2coXCJzY3Jvb29vb29vb29vb29vb29vb29sbGw6IE5VTExMTEwgdHlwZSA6IFwiICsgdHlwZSArIFwiIHN0YXRlIDogXCIrIGRpc3BsYXlTdGF0ZSlcblxuXHRcdC8vIH0sIDEwMClcblx0XHRjb25zb2xlLmxvZyhcIiB8fHwgIERJU1BMQVkgOiBcIiwgZGlzcGxheVN0YXRlID8gXCJ0cnVlXCIgOiBcImZhbHNlXCIgLCBcIiB8fHwgdHlwZSA6IFwiICsgdHlwZSApXG5cdFx0Y29uc3QgbmV3ZGlzcGxheU9mZiA9IG9uRGlzcGxheS5kaXNwbGF5U3RhdGUgJiYgIWRpc3BsYXlTdGF0ZSA/IHRydWUgOiBmYWxzZTtcblx0XHRzZXRPbkRpc3BsYXkoeyAuLi5vbkRpc3BsYXksIGRpc3BsYXlTdGF0ZSwgZGlzcGxheU9mZiA6IG5ld2Rpc3BsYXlPZmYsIGl0ZW1JZCwgdHlwZSB9KTtcblx0fVxuXHRcblx0cmV0dXJuIChcblx0XHQ8bW90aW9uLmRpdiBjbGFzc05hbWU9e2ByZWxhdGl2ZSBmbGV4IGZsZXgtY29sIHctZnVsbCBoLWF1dG8gb3ZlcmZsb3ctaGlkZGVuYH0+XG57Lyoge1x0XHRjb25zb2xlLmxvZyhkYXRhTG9hZGluZyA/IFwibm90IGZldGNoZWQgeWV0XCIgOiBcImFib3V0IDpcIiAsIGFib3V0LCBcInJlcG9zIDogXCIsIHJlcG9zICl9ICovfVxuXHRcdFx0ey8qIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgei01MCB0ZXh0LXdoaXRlIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgdG9wLTEwMCBsZWZ0LTEvNFwiID5cblx0XHRcdFx0PGgxPm9uRGlzcGxheSA6IHtvbkRpc3BsYXkuZGlzcGxheVN0YXRlID8gXCJ0cnVlXCIgOiBcImZhbHNlXCJ9PC9oMT5cblx0XHRcdFx0PGgxPmRpc3BsYXlPZmYgOiB7b25EaXNwbGF5LmRpc3BsYXlPZmYgPyBcInRydWVcIiA6IFwiZmFsc2VcIn08L2gxPlxuXHRcdFx0XHQ8aDE+aXRlbUlkIDoge29uRGlzcGxheS5pdGVtSWR9PC9oMT5cblx0XHRcdFx0PGgxPnR5cGUgOiB7b25EaXNwbGF5LnR5cGV9PC9oMT5cblx0XHRcdFx0PExpbmsgaHJlZj1cIi9ob21lXCIgPjxhPm5vbmUgZXhpc3RpbmcgdXJsPC9hPjwvTGluaz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PG5hdiBjbGFzc05hbWU9XCJmaXhlZCB6LTUwIHRvcC0yMCByaWdodC04IGxnOmgtNDAgbGc6dy0yNCBtZDpoLTMyIG1kOnctMjAgaC0yMCB3LTE2XCI+XG5cdFx0XHRcdDxFeWVTd2l0Y2ggZGFya1RoZW1lPXtkYXJrVGhlbWV9IGNoYW5nZVRoZW1lPXtjaGFuZ2VUaGVtZX0gY29sb3IyPVwiYmctZ3JlZW4tNTAwXCIgY29sb3IxPVwiYmctYmx1ZS05MDBcIiAvPlxuXHRcdFx0PC9uYXY+ICovfVxuXHRcdFx0PG1vdGlvbi5kaXYgY2xhc3NOYW1lPXtgcmVsYXRpdmUgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGw6aC1zY3JlZW4gJHtvbkRpc3BsYXkuZGlzcGxheVN0YXRlICYmIG9uRGlzcGxheS50eXBlICE9PSAtMSA/IFwiaC1hdXRvXCIgOiBcImgtc2NyZWVuXCIgfSBtLTAgcC0wICB3LWZ1bGwgJHt0aGVtZS5kYXJrLmJhY2tncm91bmRDb2xvcn1gfVxuXHRcdFx0PlxuXHRcdFx0XHQ8bW90aW9uLmRpdiBpZD1cInNvZ3VtYVwiIGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGw6aC1mdWxsIG1kOmgtc2NyZWVuIGgtODAgdy1mdWxsXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgbGc6aC1mdWxsIG1kOmgtZnVsbCBoLWZ1bGwgdy1mdWxsIFwiPlxuXHRcdFx0XHRcdFx0PERhcmtTa3lPcGVuIGhlaWdodD1cImxnOmgtZnVsbCBoLWZ1bGwgbWQ6aC0xLzIgdy1mdWxsXCIgZGFya1RoZW1lPXtkYXJrVGhlbWV9IC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB3LWZ1bGwgaC1mdWxsIHRvcC0wIGxlZnQtMFwiID5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtZnVsbCB3LTEvMiBcIj5cblx0XHRcdFx0XHRcdFx0ey8qIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1mdWxsIHctNS82IGJnLXJlZC02MDBcIj4gKi99XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGl0ZW1zLWNlbnRlciB3LTIvMyBoLWZ1bGwgcHQtZnVsbCBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxtb3Rpb24uaW1nXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMCBvYmplY3QtZmlsbCBib3JkZXItNCBib3JkZXItYmxhY2sgcm91bmRlZC1mdWxsXCIgc3JjPVwiL21lLzAucG5nXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YW5pbWF0ZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDEsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHdoaWxlSG92ZXI9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvcGFjaXR5IDogMC41XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XHRcblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGhyIGNsYXNzTmFtZT1cImFic29sdXRlIC1sZWZ0LWZ1bGwgYm9yZGVyLTIgYm9yZGVyLWJsYWNrIHctMTAwXCI+PC9ocj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHR7LyogPC9kaXY+ICovfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtc3RhcnQgbWQ6aC0xMDAgbGc6aC0xMDAgbWQ6dG9wLTEvNCB0b3AtMS80IGgtZnVsbCBsZzp0b3AtMS8zIHctZnVsbCB6LTIwXCJcblx0XHRcdFx0XHRcdHN0eWxlPXsgb25EaXNwbGF5LmRpc3BsYXlTdGF0ZSA/IFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0c2NhbGU6IHNvZ3VtYVNjYWxlLFxuXHRcdFx0XHRcdFx0XHRcdHk6IHNvZ3VtYVlvZmZzZXRcblx0XHRcdFx0XHRcdFx0fSA6IHtcblx0XHRcdFx0XHRcdFx0XHRzY2FsZSA6IDEsXG5cdFx0XHRcdFx0XHRcdFx0eSA6IDBcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxTb2d1bWFWeCByZXBvcz17cmVwb3N9IGRhdGFMb2FkaW5nIHNldE9uRGlzcGxheT17ZGlzcGxheUdpbX0gb25EaXNwbGF5PXtvbkRpc3BsYXl9IGRhcmtUaGVtZT17ZGFya1RoZW1lfSAvPlxuXHRcdFx0XHRcdFx0PFNvZ3VtYVZ4UGhvbmUgcmVwb3M9e3JlcG9zfSBkYXRhTG9hZGluZyBzZXRPbkRpc3BsYXk9e2Rpc3BsYXlHaW19IG9uRGlzcGxheT17b25EaXNwbGF5fSBkYXJrVGhlbWU9e2RhcmtUaGVtZX0gLz5cblx0XHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdFx0PE1haW5Cb2FyZCBpZD1cImJvYXJkXCIgb25EaXNwbGF5PXtvbkRpc3BsYXl9IGFib3V0PXthYm91dH0gcmVwb3M9e3JlcG9zfSAvPlxuXHRcdFx0XHR7LyogPEJvYXJkUGhvbmUgb25EaXNwbGF5PXtvbkRpc3BsYXl9IGFib3V0PXthYm91dH0gcmVwb3M9e3JlcG9zfSAvPiAqL31cblx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdCB7Lyoge29uRGlzcGxheS5kaXNwbGF5U3RhdGUgJiYgPENhcmQgb25EaXNwbGF5PXtvbkRpc3BsYXl9IGRhcmtUaGVtZT17ZGFya1RoZW1lfSBkaXNwbGF5R2ltPXtkaXNwbGF5R2ltfSAvPn0gKi99XG5cdFx0PC9tb3Rpb24uZGl2PlxuXHQpXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcblxuXHRjb25zdCByZXMxID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvSmFrZWVEZXN1Jyk7XG5cdGNvbnN0IHJlczIgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9KYWtlZURlc3UvcmVwb3MnKTtcblx0XG5cdGNvbnN0IGFib3V0ID0gYXdhaXQgcmVzMS5qc29uKCk7XG5cdGNvbnN0IHJlcG9zID0gYXdhaXQgcmVzMi5qc29uKCk7XG5cdC8vIGNvbnNvbGUubG9nKCBicnV0RGF0YSApXG5cdC8vIGNvbnN0IGxvYWRpbmcgPSBicnV0RGF0YSA/IHRydWUgOiBmYWxzZTtcblx0Ly8gaWYgKGZldGNoZWREYXRhKVxuXHQvLyB7XG5cblx0Ly8gfVxuXHRjb25zdCBkYXRhTG9hZGluZyA9IChhYm91dCAmJiByZXBvcykgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBmYWxzZTsgXG5cdFxuXHRyZXR1cm4ge1xuXHRcdHByb3BzIDogeyBhYm91dCwgcmVwb3MsIGRhdGFMb2FkaW5nICB9XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})