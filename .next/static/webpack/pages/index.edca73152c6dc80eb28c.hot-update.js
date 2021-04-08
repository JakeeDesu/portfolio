webpackHotUpdate_N_E("pages/index",{

/***/ "./components/boardPhone.js":
/*!**********************************!*\
  !*** ./components/boardPhone.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scene */ \"./components/scene.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\nvar _jsxFileName = \"/home/hamza/Desktop/portfolio/components/boardPhone.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar boardVariants = {\n  appear: {\n    opacity: 0\n  },\n  onBoard: {\n    opacity: 1,\n    transition: {\n      duration: 1\n    }\n  },\n  disappear: {\n    opacity: 0,\n    transition: {\n      duration: 1\n    }\n  }\n};\n\nvar BoardPhone = function BoardPhone(_ref) {\n  _s();\n\n  var onDisplay = _ref.onDisplay,\n      about = _ref.about,\n      repos = _ref.repos;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])({\n    data: {},\n    title: \"\",\n    description: \"\",\n    type: onDisplay.type\n  }),\n      data = _useState[0],\n      setData = _useState[1];\n\n  var _useViewportScroll = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useViewportScroll\"])(),\n      scrollYProgress = _useViewportScroll.scrollYProgress;\n\n  var textYoffset = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"])(scrollYProgress, [0, 0.1, 0.5, 1], [0, 10, 50, 0]);\n  var boardYoffset = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"])(scrollYProgress, [0, 0.1, 0.5, 1], [0, -100, -300, 0]);\n  var boardScale = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"])(scrollYProgress, [0, 0.1, 0.4, 1], [1, 2, 1.7, 1]);\n  var boardOpacity = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"])(scrollYProgress, [0, 0.1, 0.4, 1], [1, 0, 0.7, 1]);\n  var boardImageOpacity = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"])(scrollYProgress, [0, 0.1, 0.4, 1], [1, 0, 0.1, 1]);\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    switch (onDisplay.type) {\n      case 1:\n        setData(_objectSpread(_objectSpread({}, data), {}, {\n          title: about.login,\n          description: about.bio,\n          data: about\n        }));\n        break;\n\n      case 2:\n        var projectData = repos[onDisplay.itemId > 0 ? onDisplay.itemId : 0];\n        setData(_objectSpread(_objectSpread({}, data), {}, {\n          title: projectData.name,\n          description: projectData.description,\n          data: projectData\n        }));\n        break;\n    }\n  }, [onDisplay.itemId]);\n  console.log(data);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n    className: \"relative text-white md:hidden flex flex-col z-10 w-full  bg-blue-400\",\n    variants: boardVariants,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"relative text-white md:hidden flex flex-col z-10 w-full bg-sogumaBlue\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n        className: \"flex flex-col justify-start items-center w-full h-100 bg-green-100 px-4\",\n        initial: \"appear\",\n        animate: \"onBoard\",\n        exit: \"disappear\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"w-full flex flex-row justify-center items-center  p-1 bg-yellow-700\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n            className: \"flex flex-col justify-center lg:items-start items-center mx-7 \",\n            style: {\n              y: boardYoffset,\n              scale: boardScale // opacity: boardOpacity\n\n            },\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].h1, {\n              className: \"md:text-8xl lg:text-7xl text-4xl my-10\",\n              children: data.title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 67,\n              columnNumber: 8\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].p, {\n              style: {\n                y: textYoffset,\n                opacity: boardImageOpacity\n              },\n              children: data.description\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 68,\n              columnNumber: 8\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 7\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 6\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"motion\"].div, {\n        className: \"flex w-full h-100 flex-col justify-start items-center bg-red-100 px-4 bg-green-500\",\n        initial: \"appear\",\n        animate: \"onBoard\",\n        exit: \"disappear\",\n        style: {\n          opacity: 1 //boardImageOpacity\n\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"flex h-100 w-full  p-10 lg:ml-5 bg-yellow-700\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 6\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 4\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 3\n  }, _this) // { onDisplay.displayState && <Scene />}\n  ;\n};\n\n_s(BoardPhone, \"zNsPKizzvpbo/EJYCuRtztvlTbk=\", false, function () {\n  return [framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useViewportScroll\"], framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_4__[\"useTransform\"]];\n});\n\n_c = BoardPhone;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BoardPhone);\n\nvar _c;\n\n$RefreshReg$(_c, \"BoardPhone\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ib2FyZFBob25lLmpzPzc4OGUiXSwibmFtZXMiOlsiYm9hcmRWYXJpYW50cyIsImFwcGVhciIsIm9wYWNpdHkiLCJvbkJvYXJkIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZGlzYXBwZWFyIiwiQm9hcmRQaG9uZSIsIm9uRGlzcGxheSIsImFib3V0IiwicmVwb3MiLCJ1c2VTdGF0ZSIsImRhdGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidHlwZSIsInNldERhdGEiLCJ1c2VWaWV3cG9ydFNjcm9sbCIsInNjcm9sbFlQcm9ncmVzcyIsInRleHRZb2Zmc2V0IiwidXNlVHJhbnNmb3JtIiwiYm9hcmRZb2Zmc2V0IiwiYm9hcmRTY2FsZSIsImJvYXJkT3BhY2l0eSIsImJvYXJkSW1hZ2VPcGFjaXR5IiwidXNlRWZmZWN0IiwibG9naW4iLCJiaW8iLCJwcm9qZWN0RGF0YSIsIml0ZW1JZCIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwieSIsInNjYWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBRztBQUNyQkMsUUFBTSxFQUFFO0FBQ1BDLFdBQU8sRUFBRTtBQURGLEdBRGE7QUFJckJDLFNBQU8sRUFBRTtBQUNSRCxXQUFPLEVBQUUsQ0FERDtBQUVSRSxjQUFVLEVBQUU7QUFDWEMsY0FBUSxFQUFFO0FBREM7QUFGSixHQUpZO0FBVXJCQyxXQUFTLEVBQUU7QUFDVkosV0FBTyxFQUFFLENBREM7QUFFVkUsY0FBVSxFQUFFO0FBQ1hDLGNBQVEsRUFBRTtBQURDO0FBRkY7QUFWVSxDQUF0Qjs7QUFrQkEsSUFBTUUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBaUM7QUFBQTs7QUFBQSxNQUE5QkMsU0FBOEIsUUFBOUJBLFNBQThCO0FBQUEsTUFBbkJDLEtBQW1CLFFBQW5CQSxLQUFtQjtBQUFBLE1BQVpDLEtBQVksUUFBWkEs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L2JvYXJkUGhvbmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2NlbmUgZnJvbSAnLi9zY2VuZSdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UsIHVzZVZpZXdwb3J0U2Nyb2xsLCB1c2VUcmFuc2Zvcm0gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBib2FyZFZhcmlhbnRzID0ge1xuXHRhcHBlYXI6IHtcblx0XHRvcGFjaXR5OiAwXG5cdH0sXG5cdG9uQm9hcmQ6IHtcblx0XHRvcGFjaXR5OiAxLFxuXHRcdHRyYW5zaXRpb246IHtcblx0XHRcdGR1cmF0aW9uOiAxXG5cdFx0fVxuXHR9LFxuXHRkaXNhcHBlYXI6IHtcblx0XHRvcGFjaXR5OiAwLFxuXHRcdHRyYW5zaXRpb246IHtcblx0XHRcdGR1cmF0aW9uOiAxXG5cdFx0fVxuXHR9XG59XG5cbmNvbnN0IEJvYXJkUGhvbmUgPSAoeyBvbkRpc3BsYXksIGFib3V0LCByZXBvcyB9KSA9PiB7XG5cdGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHsgZGF0YToge30sIHRpdGxlOiBcIlwiLCBkZXNjcmlwdGlvbjogXCJcIiwgdHlwZTogb25EaXNwbGF5LnR5cGUgfSlcblx0Y29uc3QgeyBzY3JvbGxZUHJvZ3Jlc3MgfSA9IHVzZVZpZXdwb3J0U2Nyb2xsKCk7XG5cdGNvbnN0IHRleHRZb2Zmc2V0ID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDAuMSwgMC41LCAxXSwgWzAsIDEwLCA1MCwgMF0pO1xuXHRjb25zdCBib2FyZFlvZmZzZXQgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMC4xLCAwLjUsIDFdLCBbMCwgLTEwMCwgLTMwMCwgMF0pO1xuXHRjb25zdCBib2FyZFNjYWxlID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDAuMSwgMC40LCAxXSwgWzEsIDIsIDEuNywgMV0pO1xuXHRjb25zdCBib2FyZE9wYWNpdHkgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMC4xLCAwLjQsIDFdLCBbMSwgMCwgMC43LCAxXSk7XG5cdGNvbnN0IGJvYXJkSW1hZ2VPcGFjaXR5ID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDAuMSwgMC40LCAxXSwgWzEsIDAsIDAuMSwgMV0pO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0c3dpdGNoIChvbkRpc3BsYXkudHlwZSkge1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRzZXREYXRhKHsgLi4uZGF0YSwgdGl0bGU6IGFib3V0LmxvZ2luLCBkZXNjcmlwdGlvbjogYWJvdXQuYmlvLCBkYXRhOiBhYm91dCB9KVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0Y29uc3QgcHJvamVjdERhdGEgPSByZXBvc1tvbkRpc3BsYXkuaXRlbUlkID4gMCA/IG9uRGlzcGxheS5pdGVtSWQgOiAwXVxuXHRcdFx0XHRzZXREYXRhKHsgLi4uZGF0YSwgdGl0bGU6IHByb2plY3REYXRhLm5hbWUsIGRlc2NyaXB0aW9uOiBwcm9qZWN0RGF0YS5kZXNjcmlwdGlvbiwgZGF0YTogcHJvamVjdERhdGEgfSlcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9LCBbb25EaXNwbGF5Lml0ZW1JZF0pXG5cdGNvbnNvbGUubG9nKGRhdGEpXG5cdHJldHVybiAoXG5cdFx0PG1vdGlvbi5kaXZcblx0XHRcdGNsYXNzTmFtZT1cInJlbGF0aXZlIHRleHQtd2hpdGUgbWQ6aGlkZGVuIGZsZXggZmxleC1jb2wgei0xMCB3LWZ1bGwgIGJnLWJsdWUtNDAwXCJcblx0XHRcdHZhcmlhbnRzPXtib2FyZFZhcmlhbnRzfVxuXHRcdD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdGV4dC13aGl0ZSBtZDpoaWRkZW4gZmxleCBmbGV4LWNvbCB6LTEwIHctZnVsbCBiZy1zb2d1bWFCbHVlXCI+XG5cblx0XHRcdFx0PG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciB3LWZ1bGwgaC0xMDAgYmctZ3JlZW4tMTAwIHB4LTRcIlxuXHRcdFx0XHRcdGluaXRpYWw9XCJhcHBlYXJcIlxuXHRcdFx0XHRcdGFuaW1hdGU9XCJvbkJvYXJkXCJcblx0XHRcdFx0XHRleGl0PVwiZGlzYXBwZWFyXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyICBwLTEgYmcteWVsbG93LTcwMFwiID5cblx0XHRcdFx0XHRcdHsvKiA8SW1hZ2UgaGVpZ2h0PXs5MH0gd2lkdGg9ezkwfSAgc3JjPVwiL2ltZzMucG5nXCIgLz4gKi99XG5cdFx0XHRcdFx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGxnOml0ZW1zLXN0YXJ0IGl0ZW1zLWNlbnRlciBteC03IFwiXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0eTogYm9hcmRZb2Zmc2V0LFxuXHRcdFx0XHRcdFx0XHRcdHNjYWxlOiBib2FyZFNjYWxlLFxuXHRcdFx0XHRcdFx0XHRcdC8vIG9wYWNpdHk6IGJvYXJkT3BhY2l0eVxuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8bW90aW9uLmgxIGNsYXNzTmFtZT1cIm1kOnRleHQtOHhsIGxnOnRleHQtN3hsIHRleHQtNHhsIG15LTEwXCI+e2RhdGEudGl0bGV9PC9tb3Rpb24uaDE+XG5cdFx0XHRcdFx0XHRcdDxtb3Rpb24ucFxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHR5OiB0ZXh0WW9mZnNldCxcblx0XHRcdFx0XHRcdFx0XHRcdG9wYWNpdHk6IGJvYXJkSW1hZ2VPcGFjaXR5XG5cdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0PntkYXRhLmRlc2NyaXB0aW9ufTwvbW90aW9uLnA+XG5cdFx0XHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdFx0PG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgaC0xMDAgZmxleC1jb2wganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgYmctcmVkLTEwMCBweC00IGJnLWdyZWVuLTUwMFwiXG5cdFx0XHRcdFx0aW5pdGlhbD1cImFwcGVhclwiXG5cdFx0XHRcdFx0YW5pbWF0ZT1cIm9uQm9hcmRcIlxuXHRcdFx0XHRcdGV4aXQ9XCJkaXNhcHBlYXJcIlxuXHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRvcGFjaXR5OiAxLy9ib2FyZEltYWdlT3BhY2l0eVxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggaC0xMDAgdy1mdWxsICBwLTEwIGxnOm1sLTUgYmcteWVsbG93LTcwMFwiPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cblx0XHRcdDwvZGl2PlxuXHRcdDwvbW90aW9uLmRpdj5cblxuXHRcdC8vIHsgb25EaXNwbGF5LmRpc3BsYXlTdGF0ZSAmJiA8U2NlbmUgLz59XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvYXJkUGhvbmU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/boardPhone.js\n");

/***/ })

})