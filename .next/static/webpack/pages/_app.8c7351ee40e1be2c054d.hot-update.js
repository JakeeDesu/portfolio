webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/mainboard.js":
/*!*********************************!*\
  !*** ./components/mainboard.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scene */ \"./components/scene.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _jsxFileName = \"/home/hamza/Desktop/portfolio/components/mainboard.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar boardVariants = {\n  appear: {\n    opacity: 0\n  },\n  onBoard: {\n    opacity: 1,\n    transition: {\n      duration: 1\n    }\n  },\n  disappear: {\n    opacity: 0,\n    transition: {\n      duration: 1\n    }\n  }\n};\n\nvar MainBoard = function MainBoard(_ref) {\n  _s();\n\n  var onDisplay = _ref.onDisplay,\n      about = _ref.about,\n      repos = _ref.repos;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])({\n    data: {},\n    title: \"\",\n    description: \"\",\n    type: onDisplay.type\n  }),\n      data = _useState[0],\n      setData = _useState[1];\n\n  var _useViewportScroll = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useViewportScroll\"])(),\n      scrollYProgress = _useViewportScroll.scrollYProgress; // const boardScale = useTransform(scrollYProgress, [0, 0.1, 0.4, 1], [1, 0.9, 0.8, 0.1]);\n\n\n  var boardYoffset = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"])(scrollYProgress, [0, 0.1, 0.5, 1], [-1000, -500, 0, 0]);\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    switch (onDisplay.type) {\n      case 1:\n        setData(_objectSpread(_objectSpread({}, data), {}, {\n          title: about.login,\n          description: about.bio,\n          data: about\n        }));\n        break;\n\n      case 2:\n        var projectData = repos[onDisplay.itemId > 0 ? onDisplay.itemId : 0];\n        setData(_objectSpread(_objectSpread({}, data), {}, {\n          title: projectData.name,\n          description: projectData.description,\n          data: projectData\n        }));\n        break;\n    }\n  }, [onDisplay.itemId]);\n  console.log(data);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"AnimatePresence\"], {\n    children: (onDisplay.type === 1 || onDisplay.type === 2 && onDisplay.displayState) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n      className: \"lg:absolute relative text-white flex flex-col lg:flex-row lg:justify-evenly lg:items-end z-10 h-screen w-full lg:w-full \",\n      initial: \"appear\",\n      animate: \"onBoard\",\n      exit: \"disappear\",\n      variants: boardVariants,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n        className: \"absolute lg:static flex w-full lg:h-5/6 flex-auto lg:w-1/2  lg:px-5\",\n        style: {\n          y: boardYoffset // scale : boardScale,\n\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"flex flex-col  justify-start items-center h-full w-full  p-10 lg:mr-5\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"w-full flex flex-row  p-1\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"flex flex-col justify-center items-start mx-7\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n                className: \"text-5xl my-10\",\n                children: data.title\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 61,\n                columnNumber: 9\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                children: data.description\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 62,\n                columnNumber: 9\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 60,\n              columnNumber: 8\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 7\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 6\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n        className: \"absolute lg:static flex  w-full lg:h-5/6 flex-auto lg:w-1/2  lg:px-5 \",\n        style: {\n          y: boardYoffset // scale : boardScale,\n\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"flex h-full w-full  p-10 lg:ml-5\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 6\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 82\n    }, _this) // { onDisplay.displayState && <Scene />}\n\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 43,\n    columnNumber: 3\n  }, _this);\n};\n\n_s(MainBoard, \"C/xX5IiZJVH9DBa133mV8qOlN9I=\", false, function () {\n  return [framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useViewportScroll\"], framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"]];\n});\n\n_c = MainBoard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainBoard);\n\nvar _c;\n\n$RefreshReg$(_c, \"MainBoard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYWluYm9hcmQuanM/Yjk5YiJdLCJuYW1lcyI6WyJib2FyZFZhcmlhbnRzIiwiYXBwZWFyIiwib3BhY2l0eSIsIm9uQm9hcmQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkaXNhcHBlYXIiLCJNYWluQm9hcmQiLCJvbkRpc3BsYXkiLCJhYm91dCIsInJlcG9zIiwidXNlU3RhdGUiLCJkYXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInR5cGUiLCJzZXREYXRhIiwidXNlVmlld3BvcnRTY3JvbGwiLCJzY3JvbGxZUHJvZ3Jlc3MiLCJib2FyZFlvZmZzZXQiLCJ1c2VUcmFuc2Zvcm0iLCJ1c2VFZmZlY3QiLCJsb2dpbiIsImJpbyIsInByb2plY3REYXRhIiwiaXRlbUlkIiwibmFtZSIsImNvbnNvbGUiLCJsb2ciLCJkaXNwbGF5U3RhdGUiLCJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBRztBQUNyQkMsUUFBTSxFQUFFO0FBQ1BDLFdBQU8sRUFBRTtBQURGLEdBRGE7QUFJckJDLFNBQU8sRUFBRTtBQUNSRCxXQUFPLEVBQUUsQ0FERDtBQUVSRSxjQUFVLEVBQUU7QUFDWEMsY0FBUSxFQUFFO0FBREM7QUFGSixHQUpZO0FBVXJCQyxXQUFTLEVBQUU7QUFDVkosV0FBTyxFQUFFLENBREM7QUFFVkUsY0FBVSxFQUFFO0FBQ1hDLGNBQVEsRUFBRTtBQURDO0FBRkY7QUFWVSxDQUF0Qjs7QUFrQkEsSUFBTUUsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBaUM7QUFBQTs7QUFBQSxNQUE5QkMsU0FBOEIsUUFBOUJBLFNBQThCO0FBQUEsTUFBbkJDLEtBQW1CLFFBQW5CQSxLQUFtQjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTs7QUFBQSxrQkFDMUJDLHNEQUFRLENBQUM7QUFBRUMsUUFBSSxFQUFFLEVBQVI7QUFBWUMs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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRC9FLENBa0NFOztBQWxDRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUF1Q0EsQ0F6REQ7O0dBQU1aLFM7VUFFdUJVLCtELEVBRVBHLDBEOzs7S0FKaEJiLFM7QUEyRFNBLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9tYWluYm9hcmQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2NlbmUgZnJvbSAnLi9zY2VuZSdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UsIHVzZVZpZXdwb3J0U2Nyb2xsLCB1c2VUcmFuc2Zvcm0gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBib2FyZFZhcmlhbnRzID0ge1xuXHRhcHBlYXI6IHtcblx0XHRvcGFjaXR5OiAwXG5cdH0sXG5cdG9uQm9hcmQ6IHtcblx0XHRvcGFjaXR5OiAxLFxuXHRcdHRyYW5zaXRpb246IHtcblx0XHRcdGR1cmF0aW9uOiAxXG5cdFx0fVxuXHR9LFxuXHRkaXNhcHBlYXI6IHtcblx0XHRvcGFjaXR5OiAwLFxuXHRcdHRyYW5zaXRpb246IHtcblx0XHRcdGR1cmF0aW9uOiAxXG5cdFx0fVxuXHR9XG59XG5cbmNvbnN0IE1haW5Cb2FyZCA9ICh7IG9uRGlzcGxheSwgYWJvdXQsIHJlcG9zIH0pID0+IHtcblx0Y29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoeyBkYXRhOiB7fSwgdGl0bGU6IFwiXCIsIGRlc2NyaXB0aW9uOiBcIlwiLCB0eXBlOiBvbkRpc3BsYXkudHlwZSB9KVxuXHRjb25zdCB7IHNjcm9sbFlQcm9ncmVzcyB9ID0gdXNlVmlld3BvcnRTY3JvbGwoKTtcblx0Ly8gY29uc3QgYm9hcmRTY2FsZSA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAwLjEsIDAuNCwgMV0sIFsxLCAwLjksIDAuOCwgMC4xXSk7XG5cdGNvbnN0IGJvYXJkWW9mZnNldCA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAwLjEsIDAuNSwgMV0sIFstMTAwMCwgLTUwMCwgMCwgMF0pO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0c3dpdGNoIChvbkRpc3BsYXkudHlwZSkge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRzZXREYXRhKHsgLi4uZGF0YSwgdGl0bGU6IGFib3V0LmxvZ2luLCBkZXNjcmlwdGlvbjogYWJvdXQuYmlvLCBkYXRhOiBhYm91dCB9KVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0Y29uc3QgcHJvamVjdERhdGEgPSByZXBvc1tvbkRpc3BsYXkuaXRlbUlkID4gMCA/IG9uRGlzcGxheS5pdGVtSWQgOiAwXVxuXHRcdFx0XHRzZXREYXRhKHsgLi4uZGF0YSwgdGl0bGU6IHByb2plY3REYXRhLm5hbWUsIGRlc2NyaXB0aW9uOiBwcm9qZWN0RGF0YS5kZXNjcmlwdGlvbiwgZGF0YTogcHJvamVjdERhdGEgfSlcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9LCBbb25EaXNwbGF5Lml0ZW1JZF0pXG5cdGNvbnNvbGUubG9nKGRhdGEpXG5cdHJldHVybiAoXG5cdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdHsgKG9uRGlzcGxheS50eXBlID09PSAxIHx8IG9uRGlzcGxheS50eXBlID09PSAyICYmIG9uRGlzcGxheS5kaXNwbGF5U3RhdGUpICYmIDxtb3Rpb24uZGl2XG5cdFx0XHRcdGNsYXNzTmFtZT1cImxnOmFic29sdXRlIHJlbGF0aXZlIHRleHQtd2hpdGUgZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBsZzpqdXN0aWZ5LWV2ZW5seSBsZzppdGVtcy1lbmQgei0xMCBoLXNjcmVlbiB3LWZ1bGwgbGc6dy1mdWxsIFwiXG5cdFx0XHRcdGluaXRpYWw9XCJhcHBlYXJcIlxuXHRcdFx0XHRhbmltYXRlPVwib25Cb2FyZFwiXG5cdFx0XHRcdGV4aXQ9XCJkaXNhcHBlYXJcIlxuXHRcdFx0XHR2YXJpYW50cz17Ym9hcmRWYXJpYW50c31cblx0XHRcdD5cblx0XHRcdFx0PG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGc6c3RhdGljIGZsZXggdy1mdWxsIGxnOmgtNS82IGZsZXgtYXV0byBsZzp3LTEvMiAgbGc6cHgtNVwiXG5cdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdHk6IGJvYXJkWW9mZnNldCxcblx0XHRcdFx0XHRcdC8vIHNjYWxlIDogYm9hcmRTY2FsZSxcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sICBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBoLWZ1bGwgdy1mdWxsICBwLTEwIGxnOm1yLTVcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggZmxleC1yb3cgIHAtMVwiID5cblx0XHRcdFx0XHRcdFx0ey8qIDxJbWFnZSBoZWlnaHQ9ezkwfSB3aWR0aD17OTB9ICBzcmM9XCIvaW1nMy5wbmdcIiAvPiAqL31cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLXN0YXJ0IG14LTdcIiA+XG5cdFx0XHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cInRleHQtNXhsIG15LTEwXCI+e2RhdGEudGl0bGV9PC9oMT5cblx0XHRcdFx0XHRcdFx0XHQ8cD57ZGF0YS5kZXNjcmlwdGlvbn08L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdFx0PG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGc6c3RhdGljIGZsZXggIHctZnVsbCBsZzpoLTUvNiBmbGV4LWF1dG8gbGc6dy0xLzIgIGxnOnB4LTUgXCJcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHk6IGJvYXJkWW9mZnNldCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gc2NhbGUgOiBib2FyZFNjYWxlLFxuXHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBoLWZ1bGwgdy1mdWxsICBwLTEwIGxnOm1sLTVcIj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0XHQvLyB7IG9uRGlzcGxheS5kaXNwbGF5U3RhdGUgJiYgPFNjZW5lIC8+fVxuXHRcdFx0fVxuXHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluQm9hcmQ7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/mainboard.js\n");

/***/ })

})