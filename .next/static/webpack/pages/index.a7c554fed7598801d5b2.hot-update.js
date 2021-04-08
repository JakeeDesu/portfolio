webpackHotUpdate_N_E("pages/index",{

/***/ "./components/boardPhone.js":
/*!**********************************!*\
  !*** ./components/boardPhone.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scene */ \"./components/scene.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _jsxFileName = \"/home/hamza/Desktop/portfolio/components/boardPhone.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar boardVariants = {\n  appear: {\n    opacity: 0\n  },\n  onBoard: {\n    opacity: 1,\n    transition: {\n      duration: 1\n    }\n  },\n  disappear: {\n    opacity: 0,\n    transition: {\n      duration: 1\n    }\n  }\n};\n\nvar BoardPhone = function BoardPhone(_ref) {\n  _s();\n\n  var onDisplay = _ref.onDisplay,\n      about = _ref.about,\n      repos = _ref.repos;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])({\n    data: {},\n    title: \"\",\n    description: \"\",\n    type: onDisplay.type\n  }),\n      data = _useState[0],\n      setData = _useState[1];\n\n  var _useViewportScroll = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useViewportScroll\"])(),\n      scrollYProgress = _useViewportScroll.scrollYProgress;\n\n  var textYoffset = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"])(scrollYProgress, [0, 0.1, 0.5, 1], [0, 10, 50, 0]);\n  var boardYoffset = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"])(scrollYProgress, [0, 0.1, 0.5, 1], [0, -100, -300, 0]);\n  var boardScale = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"])(scrollYProgress, [0, 0.1, 0.4, 1], [1, 2, 1.7, 1]);\n  var boardOpacity = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"])(scrollYProgress, [0, 0.1, 0.4, 1], [1, 0, 0.7, 1]);\n  var boardImageOpacity = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"])(scrollYProgress, [0, 0.1, 0.4, 1], [1, 0, 0.1, 1]);\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    switch (onDisplay.type) {\n      case 1:\n        setData(_objectSpread(_objectSpread({}, data), {}, {\n          title: about.login,\n          description: about.bio,\n          data: about\n        }));\n        break;\n\n      case 2:\n        var projectData = repos[onDisplay.itemId > 0 ? onDisplay.itemId : 0];\n        setData(_objectSpread(_objectSpread({}, data), {}, {\n          title: projectData.name,\n          description: projectData.description,\n          data: projectData\n        }));\n        break;\n    }\n  }, [onDisplay.itemId]);\n  console.log(data);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n    className: \"relative text-white md:hidden flex flex-col z-10 w-full \",\n    variants: boardVariants,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"AnimatePresence\"], {\n      children: onDisplay.displayState && onDisplay.type !== -1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"relative text-white md:hidden flex flex-col z-10 w-full\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n          className: \"flex flex-col justify-start items-center w-full h-100 bg-green-100 px-4\",\n          initial: \"appear\",\n          animate: \"onBoard\",\n          exit: \"disappear\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"w-full flex flex-row justify-center items-center  p-1 bg-yellow-700\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n              className: \"flex flex-col justify-center lg:items-start items-center mx-7 \",\n              style: {\n                y: boardYoffset,\n                scale: boardScale // opacity: boardOpacity\n\n              },\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].h1, {\n                className: \"md:text-8xl lg:text-7xl text-4xl my-10\",\n                children: data.title\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 70,\n                columnNumber: 10\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].p, {\n                style: {\n                  y: textYoffset,\n                  opacity: boardImageOpacity\n                },\n                children: data.description\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 71,\n                columnNumber: 10\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 62,\n              columnNumber: 9\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 8\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 53,\n          columnNumber: 6\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n          className: \"flex w-full h-100 flex-col justify-start items-center bg-red-100 px-4 bg-green-500\",\n          initial: \"appear\",\n          animate: \"onBoard\",\n          exit: \"disappear\",\n          style: {\n            opacity: 1 //boardImageOpacity\n\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"flex h-100 w-full  p-10 lg:ml-5 \"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 88,\n            columnNumber: 7\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 6\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 57\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 4\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 3\n  }, _this) // { onDisplay.displayState && <Scene />}\n  ;\n};\n\n_s(BoardPhone, \"zNsPKizzvpbo/EJYCuRtztvlTbk=\", false, function () {\n  return [framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useViewportScroll\"], framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"]];\n});\n\n_c = BoardPhone;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BoardPhone);\n\nvar _c;\n\n$RefreshReg$(_c, \"BoardPhone\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ib2FyZFBob25lLmpzPzc4OGUiXSwibmFtZXMiOlsiYm9hcmRWYXJpYW50cyIsImFwcGVhciIsIm9wYWNpdHkiLCJvbkJvYXJkIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZGlzYXBwZWFyIiwiQm9hcmRQaG9uZSIsIm9uRGlzcGxheSIsImFib3V0IiwicmVwb3MiLCJ1c2VTdGF0ZSIsImRhdGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidHlwZSIsInNldERhdGEiLCJ1c2VWaWV3cG9ydFNjcm9sbCIsInNjcm9sbFlQcm9ncmVzcyIsInRleHRZb2Zmc2V0IiwidXNlVHJhbnNmb3JtIiwiYm9hcmRZb2Zmc2V0IiwiYm9hcmRTY2FsZSIsImJvYXJkT3BhY2l0eSIsImJvYXJkSW1hZ2VPcGFjaXR5IiwidXNlRWZmZWN0IiwibG9naW4iLCJiaW8iLCJwcm9qZWN0RGF0YSIsIml0ZW1JZCIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwiZGlzcGxheVN0YXRlIiwieSIsInNjYWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBRztBQUNyQkMsUUFBTSxFQUFFO0FBQ1BDLFdBQU8sRUFBRTtBQURGLEdBRGE7QUFJckJDLFNBQU8sRUFBRTtBQUNSRCxXQUFPLEVBQUUsQ0FERDtBQUVSRSxjQUFVLEVBQUU7QUFDWEMsY0FBUSxFQUFFO0FBREM7QUFGSixHQUpZO0FBVXJCQyxXQUFTLEVBQUU7QUFDVkosV0FBTyxFQUFFLENBREM7QUFFVkUsY0FBVSxFQUFFO0FBQ1hDLGNBQVEsRUFBRTtBQURDO0FBRkY7QUFWVSxDQUF0Qjs7QUFrQkEsSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBaUM7QUFBQTs7QUFBQSxNQUE5QkMsU0FBOEIsUUFBOUJBLFNBQThCO0FBQUEsTUFBbkJDLEtBQW1CLFFBQW5CQSxLQUFtQjtBQUFBLE1B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QUFBQSxXQURELENBcURDO0FBckREO0FBdURBLENBNUVEOztHQUFNSyxVO1VBRXVCVSwrRCxFQUNSRywwRCxFQUNDQSwwRCxFQUNGQSwwRCxFQUNFQSwwRCxFQUNLQSwwRDs7O0tBUHJCYixVO0FBOEVTQSx5RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvYm9hcmRQaG9uZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTY2VuZSBmcm9tICcuL3NjZW5lJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSwgdXNlVmlld3BvcnRTY3JvbGwsIHVzZVRyYW5zZm9ybSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IGJvYXJkVmFyaWFudHMgPSB7XG5cdGFwcGVhcjoge1xuXHRcdG9wYWNpdHk6IDBcblx0fSxcblx0b25Cb2FyZDoge1xuXHRcdG9wYWNpdHk6IDEsXG5cdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0ZHVyYXRpb246IDFcblx0XHR9XG5cdH0sXG5cdGRpc2FwcGVhcjoge1xuXHRcdG9wYWNpdHk6IDAsXG5cdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0ZHVyYXRpb246IDFcblx0XHR9XG5cdH1cbn1cblxuY29uc3QgQm9hcmRQaG9uZSA9ICh7IG9uRGlzcGxheSwgYWJvdXQsIHJlcG9zIH0pID0+IHtcblx0Y29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoeyBkYXRhOiB7fSwgdGl0bGU6IFwiXCIsIGRlc2NyaXB0aW9uOiBcIlwiLCB0eXBlOiBvbkRpc3BsYXkudHlwZSB9KVxuXHRjb25zdCB7IHNjcm9sbFlQcm9ncmVzcyB9ID0gdXNlVmlld3BvcnRTY3JvbGwoKTtcblx0Y29uc3QgdGV4dFlvZmZzZXQgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMC4xLCAwLjUsIDFdLCBbMCwgMTAsIDUwLCAwXSk7XG5cdGNvbnN0IGJvYXJkWW9mZnNldCA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAwLjEsIDAuNSwgMV0sIFswLCAtMTAwLCAtMzAwLCAwXSk7XG5cdGNvbnN0IGJvYXJkU2NhbGUgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMC4xLCAwLjQsIDFdLCBbMSwgMiwgMS43LCAxXSk7XG5cdGNvbnN0IGJvYXJkT3BhY2l0eSA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAwLjEsIDAuNCwgMV0sIFsxLCAwLCAwLjcsIDFdKTtcblx0Y29uc3QgYm9hcmRJbWFnZU9wYWNpdHkgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMC4xLCAwLjQsIDFdLCBbMSwgMCwgMC4xLCAxXSk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRzd2l0Y2ggKG9uRGlzcGxheS50eXBlKSB7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHNldERhdGEoeyAuLi5kYXRhLCB0aXRsZTogYWJvdXQubG9naW4sIGRlc2NyaXB0aW9uOiBhYm91dC5iaW8sIGRhdGE6IGFib3V0IH0pXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHRjb25zdCBwcm9qZWN0RGF0YSA9IHJlcG9zW29uRGlzcGxheS5pdGVtSWQgPiAwID8gb25EaXNwbGF5Lml0ZW1JZCA6IDBdXG5cdFx0XHRcdHNldERhdGEoeyAuLi5kYXRhLCB0aXRsZTogcHJvamVjdERhdGEubmFtZSwgZGVzY3JpcHRpb246IHByb2plY3REYXRhLmRlc2NyaXB0aW9uLCBkYXRhOiBwcm9qZWN0RGF0YSB9KVxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH0sIFtvbkRpc3BsYXkuaXRlbUlkXSlcblx0Y29uc29sZS5sb2coZGF0YSlcblx0cmV0dXJuIChcblx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0Y2xhc3NOYW1lPVwicmVsYXRpdmUgdGV4dC13aGl0ZSBtZDpoaWRkZW4gZmxleCBmbGV4LWNvbCB6LTEwIHctZnVsbCBcIlxuXHRcdFx0dmFyaWFudHM9e2JvYXJkVmFyaWFudHN9XG5cdFx0PlxuXHRcdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdFx0e29uRGlzcGxheS5kaXNwbGF5U3RhdGUgJiYgb25EaXNwbGF5LnR5cGUgIT09IC0xICYmIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdGV4dC13aGl0ZSBtZDpoaWRkZW4gZmxleCBmbGV4LWNvbCB6LTEwIHctZnVsbFwiPlxuXG5cdFx0XHRcdFx0PG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciB3LWZ1bGwgaC0xMDAgYmctZ3JlZW4tMTAwIHB4LTRcIlxuXHRcdFx0XHRcdFx0aW5pdGlhbD1cImFwcGVhclwiXG5cdFx0XHRcdFx0XHRhbmltYXRlPVwib25Cb2FyZFwiXG5cdFx0XHRcdFx0XHRleGl0PVwiZGlzYXBwZWFyXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHR7LyogPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sICBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBoLWZ1bGwgdy1mdWxsICBwLTEwIGxnOm1yLTVcIj5cblx0XHRcdFx0XHRcdDwvZGl2PiAqL31cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgIHAtMSBiZy15ZWxsb3ctNzAwXCIgPlxuXHRcdFx0XHRcdFx0XHRcdHsvKiA8SW1hZ2UgaGVpZ2h0PXs5MH0gd2lkdGg9ezkwfSAgc3JjPVwiL2ltZzMucG5nXCIgLz4gKi99XG5cdFx0XHRcdFx0XHRcdFx0PG1vdGlvbi5kaXZcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgbGc6aXRlbXMtc3RhcnQgaXRlbXMtY2VudGVyIG14LTcgXCJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHk6IGJvYXJkWW9mZnNldCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2NhbGU6IGJvYXJkU2NhbGUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIG9wYWNpdHk6IGJvYXJkT3BhY2l0eVxuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bW90aW9uLmgxIGNsYXNzTmFtZT1cIm1kOnRleHQtOHhsIGxnOnRleHQtN3hsIHRleHQtNHhsIG15LTEwXCI+e2RhdGEudGl0bGV9PC9tb3Rpb24uaDE+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bW90aW9uLnBcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR5OiB0ZXh0WW9mZnNldCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvcGFjaXR5OiBib2FyZEltYWdlT3BhY2l0eVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0PntkYXRhLmRlc2NyaXB0aW9ufTwvbW90aW9uLnA+XG5cdFx0XHRcdFx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHRcdFx0PG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgaC0xMDAgZmxleC1jb2wganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgYmctcmVkLTEwMCBweC00IGJnLWdyZWVuLTUwMFwiXG5cdFx0XHRcdFx0XHRpbml0aWFsPVwiYXBwZWFyXCJcblx0XHRcdFx0XHRcdGFuaW1hdGU9XCJvbkJvYXJkXCJcblx0XHRcdFx0XHRcdGV4aXQ9XCJkaXNhcHBlYXJcIlxuXHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0b3BhY2l0eTogMS8vYm9hcmRJbWFnZU9wYWNpdHlcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtMTAwIHctZnVsbCAgcC0xMCBsZzptbC01IFwiPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR9XG5cdFx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblxuXHRcdDwvbW90aW9uLmRpdj5cblxuXHRcdC8vIHsgb25EaXNwbGF5LmRpc3BsYXlTdGF0ZSAmJiA8U2NlbmUgLz59XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvYXJkUGhvbmU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/boardPhone.js\n");

/***/ })

})