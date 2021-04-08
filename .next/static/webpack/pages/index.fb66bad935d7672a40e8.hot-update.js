webpackHotUpdate_N_E("pages/index",{

/***/ "./components/sogumaVxPhone.tsx":
/*!**************************************!*\
  !*** ./components/sogumaVxPhone.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SogumaVxPhone; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _sogumaPhone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sogumaPhone */ \"./components/sogumaPhone.tsx\");\n/* harmony import */ var _menuPhone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menuPhone */ \"./components/menuPhone.js\");\n\n\n\nvar _jsxFileName = \"/home/hamza/Desktop/portfolio/components/sogumaVxPhone.tsx\",\n    _s = $RefreshSig$();\n\n\n // import GimsPhone from './gimPhone'\n\n\n\n// gims props\nvar variants = {\n  initial: function initial(onDisplay) {\n    if (onDisplay.displayState) return {\n      y: 0,\n      scale: 1\n    };else return {\n      y: 0,\n      //-410,\n      scale: 0.7 //0.1,\n\n    };\n  },\n  standing: function standing(onDisplay) {\n    if (onDisplay.displayState) return {\n      scale: [1, 0.7],\n      y: [0, 0],\n      transition: {\n        scale: {\n          delay: 0.3,\n          duration: 1\n        },\n        y: {\n          delay: 0.3,\n          duration: 1\n        }\n      }\n    };else return {\n      y: 0,\n      // x: 0,\n      scale: 1,\n      transition: {\n        // duration: 0.5,\n        scale: {\n          delay: 0.3,\n          duration: 1\n        },\n        y: {\n          delay: 0.3,\n          duration: 1\n        }\n      }\n    };\n  }\n};\nvar data = [\"art\", \"about me\", \"p1\"];\nfunction SogumaVxPhone(_ref) {\n  _s();\n\n  var repos = _ref.repos,\n      fetchedData = _ref.fetchedData,\n      setOnDisplay = _ref.setOnDisplay,\n      onDisplay = _ref.onDisplay,\n      darkTheme = _ref.darkTheme;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([0, 0]),\n      _useState$ = Object(_home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState[0], 2),\n      direction = _useState$[0],\n      steps = _useState$[1],\n      setRotate = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true),\n      clickOff = _useState2[0],\n      setClickOff = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      projects = _useState3[0],\n      setProjects = _useState3[1];\n\n  var moveGims = function moveGims(newDirection) {\n    setRotate([newDirection, steps + newDirection]);\n  }; // console.log(dataLoading ? \"fetched DATA : \": fetchedData )\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {// const initProjects = []\n    // repos.map((project) => {\n    // \tinitProjects.push(project.name);\n    // })\n    // // console.log(\" projects d ZAAAAAAAAAAAAAAAAAAB: \", initProjects)\n    // setProjects(initProjects)\n  }, [repos]);\n\n  var onSogumaClick = function onSogumaClick() {\n    switch (onDisplay.type) {\n      case -1:\n        // none state\n        setOnDisplay(false, onDisplay.itemId, 0);\n        break;\n\n      case 0:\n        // menu state\n        setOnDisplay(true, onDisplay.itemId, -1);\n        break;\n    }\n  };\n\n  var onDisplayKey = onDisplay.displayState ? 1 : 0;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n    className: \"md:hidden relative flex flex-col justify-start items-center h-auto w-full\",\n    initial: \"initial\",\n    animate: \"standing\",\n    custom: onDisplay,\n    variants: variants,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_sogumaPhone__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      onDisplay: onDisplay,\n      darkTheme: darkTheme,\n      onSogumaClick: onSogumaClick,\n      setOnDisplay: setOnDisplay\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 4\n    }, this), onDisplay.type !== 2 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_menuPhone__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      onDisplay: onDisplay,\n      setOnDisplay: setOnDisplay\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 98,\n      columnNumber: 31\n    }, this)]\n  }, onDisplayKey, true, {\n    fileName: _jsxFileName,\n    lineNumber: 84,\n    columnNumber: 3\n  }, this);\n}\n\n_s(SogumaVxPhone, \"drdXBGiJG3DTiISEBYABsAztkKM=\");\n\n_c = SogumaVxPhone;\n\nvar _c;\n\n$RefreshReg$(_c, \"SogumaVxPhone\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zb2d1bWFWeFBob25lLnRzeD80ZGZjIl0sIm5hbWVzIjpbInZhcmlhbnRzIiwiaW5pdGlhbCIsIm9uRGlzcGxheSIsImRpc3BsYXlTdGF0ZSIsInkiLCJzY2FsZSIsInN0YW5kaW5nIiwidHJhbnNpdGlvbiIsImRlbGF5IiwiZHVyYXRpb24iLCJkYXRhIiwiU29ndW1hVnhQaG9uZSIsInJlcG9zIiwiZmV0Y2hlZERhdGEiLCJzZXRPbkRpc3BsYXkiLCJkYXJrVGhlbWUiLCJ1c2VTdGF0ZSIsImRpcmVjdGlvbiIsInN0ZXBzIiwic2V0Um90YXRlIiwiY2xpY2tPZmYiLCJzZXRDbGlja09mZiIsInByb2plY3RzIiwic2V0UHJvamVjdHMiLCJtb3ZlR2ltcyIsIm5ld0RpcmVjdGlvbiIsInVzZUVmZmVjdCIsIm9uU29ndW1hQ2xpY2siLCJ0eXBlIiwiaXRlbUlkIiwib25EaXNwbGF5S2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTtBQUNBO0FBSXVDO0FBR3ZDLElBQU1BLFFBQVEsR0FBRztBQUNoQkMsU0FBTyxFQUFFLGlCQUFDQyxTQUFELEVBQW9CO0FBQzVCLFFBQUlBLFNBQVMsQ0FBQ0MsWUFBZCxFQUNDLE9BQU87QUFDTkMsT0FBQyxFQUFFLENBREc7QUFFTkMsV0FBSyxFQUFFO0FBRkQsS0FBUCxDQURELEtBTUMsT0FBTztBQUNORCxPQUFDLEVBQUUsQ0FERztBQUNEO0FBQ0xDLFdBQUssRUFBRSxHQUZELENBRUs7O0FBRkwsS0FBUDtBQUlELEdBWmU7QUFhaEJDLFVBQVEsRUFBRSxrQkFBQ0osU0FBRCxFQUFvQjtBQUM3QixRQUFJQSxTQUFTLENBQUNDLFlBQWQsRUFDQyxPQUFPO0FBQ05FLFdBQUssRUFBRSxDQUFDLENBQUQsRUFBSSxHQUFKLENBREQ7QUFFTkQsT0FBQyxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FGRztBQUdORyxnQkFBVSxFQUFFO0FB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RVk7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWQ1QjtBQUFBLEtBRU1nQixZQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQWtCQTs7R0FqRHVCbkIsYTs7S0FBQUEsYSIsImZpbGUiOiIuL2NvbXBvbmVudHMvc29ndW1hVnhQaG9uZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtb3Rpb24sIHVzZVRyYW5zZm9ybSwgdXNlVmlld3BvcnRTY3JvbGwsIHVzZU1vdGlvblZhbHVlLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuLy8gaW1wb3J0IEdpbXNQaG9uZSBmcm9tICcuL2dpbVBob25lJ1xuaW1wb3J0IFNvZ3VtYVBob25lIGZyb20gJy4vc29ndW1hUGhvbmUnXG5pbXBvcnQgTWVudVBob25lIGZyb20gJy4vbWVudVBob25lJ1xuaW1wb3J0IHsgd3JhcCB9IGZyb20gJ3BvcG1vdGlvbidcbmltcG9ydCBTb2d1bWFFeWUgZnJvbSAnLi9zdWd1bWFFeWUnXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJy4vdGhlbWUnXG5pbXBvcnQgeyBnaW1zUHJvcHMgfSBmcm9tICcuL2dpbVByb3BzJyAvLyBnaW1zIHByb3BzXG5cblxuY29uc3QgdmFyaWFudHMgPSB7XG5cdGluaXRpYWw6IChvbkRpc3BsYXk6IGFueSkgPT4ge1xuXHRcdGlmIChvbkRpc3BsYXkuZGlzcGxheVN0YXRlKVxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0eTogMCxcblx0XHRcdFx0c2NhbGU6IDEsXG5cdFx0XHR9XG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0eTogMCwvLy00MTAsXG5cdFx0XHRcdHNjYWxlOiAwLjcsLy8wLjEsXG5cdFx0XHR9O1xuXHR9LFxuXHRzdGFuZGluZzogKG9uRGlzcGxheTogYW55KSA9PiB7XG5cdFx0aWYgKG9uRGlzcGxheS5kaXNwbGF5U3RhdGUpXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRzY2FsZTogWzEsIDAuN10sXG5cdFx0XHRcdHk6IFswLCAwXSxcblx0XHRcdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0XHRcdHNjYWxlOiB7IGRlbGF5OiAwLjMsIGR1cmF0aW9uOiAxIH0sXG5cdFx0XHRcdFx0eTogeyBkZWxheTogMC4zLCBkdXJhdGlvbjogMSB9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRlbHNlXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR5OiAwLFxuXHRcdFx0XHQvLyB4OiAwLFxuXHRcdFx0XHRzY2FsZTogMSxcblx0XHRcdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0XHRcdC8vIGR1cmF0aW9uOiAwLjUsXG5cdFx0XHRcdFx0c2NhbGU6IHsgZGVsYXk6IDAuMywgZHVyYXRpb246IDEgfSxcblx0XHRcdFx0XHR5OiB7IGRlbGF5OiAwLjMsIGR1cmF0aW9uOiAxIH1cblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0fSxcbn1cblxuXG5jb25zdCBkYXRhID0gW1wiYXJ0XCIsIFwiYWJvdXQgbWVcIiwgXCJwMVwiXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTb2d1bWFWeFBob25lKHsgcmVwb3MgLGZldGNoZWREYXRhICwgc2V0T25EaXNwbGF5LCBvbkRpc3BsYXksIGRhcmtUaGVtZSB9KSB7XG5cblx0Y29uc3QgW1tkaXJlY3Rpb24sIHN0ZXBzXSwgc2V0Um90YXRlXSA9IHVzZVN0YXRlKFswLCAwXSk7XG5cdGNvbnN0IFtjbGlja09mZiwgc2V0Q2xpY2tPZmZdID0gdXNlU3RhdGUodHJ1ZSk7XG5cdGNvbnN0IFtwcm9qZWN0cywgc2V0UHJvamVjdHNdID0gdXNlU3RhdGUoW10pO1xuXG5cblx0Y29uc3QgbW92ZUdpbXMgPSAobmV3RGlyZWN0aW9uOiBudW1iZXIpID0+IHtcblx0XHRzZXRSb3RhdGUoW25ld0RpcmVjdGlvbiwgc3RlcHMgKyBuZXdEaXJlY3Rpb25dKTtcblx0fVxuXHQvLyBjb25zb2xlLmxvZyhkYXRhTG9hZGluZyA/IFwiZmV0Y2hlZCBEQVRBIDogXCI6IGZldGNoZWREYXRhIClcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHQvLyBjb25zdCBpbml0UHJvamVjdHMgPSBbXVxuXHRcdC8vIHJlcG9zLm1hcCgocHJvamVjdCkgPT4ge1xuXHRcdC8vIFx0aW5pdFByb2plY3RzLnB1c2gocHJvamVjdC5uYW1lKTtcblx0XHQvLyB9KVxuXHRcdC8vIC8vIGNvbnNvbGUubG9nKFwiIHByb2plY3RzIGQgWkFBQUFBQUFBQUFBQUFBQUFBQUI6IFwiLCBpbml0UHJvamVjdHMpXG5cdFx0Ly8gc2V0UHJvamVjdHMoaW5pdFByb2plY3RzKVxuXHR9LCBbcmVwb3NdKVxuXG5cdGNvbnN0IG9uU29ndW1hQ2xpY2sgPSAoKSA9PiB7XG5cdFx0XHRzd2l0Y2ggKG9uRGlzcGxheS50eXBlKSB7XG5cdFx0XHRcdGNhc2UgIC0xIDogLy8gbm9uZSBzdGF0ZVxuXHRcdFx0XHRcdFx0c2V0T25EaXNwbGF5KGZhbHNlLCBvbkRpc3BsYXkuaXRlbUlkLCAwKVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICAwIDogLy8gbWVudSBzdGF0ZVxuXHRcdFx0XHRcdHNldE9uRGlzcGxheSh0cnVlLCBvbkRpc3BsYXkuaXRlbUlkLCAtMSlcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0fVxuXHRjb25zdCBvbkRpc3BsYXlLZXkgPSBvbkRpc3BsYXkuZGlzcGxheVN0YXRlID8gMSA6IDA7XG5cdHJldHVybiAoXG5cdFx0PG1vdGlvbi5kaXZcblx0XHRcdGNsYXNzTmFtZT1cIm1kOmhpZGRlbiByZWxhdGl2ZSBmbGV4IGZsZXgtY29sIGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIGgtYXV0byB3LWZ1bGxcIlxuXHRcdFx0a2V5PXtvbkRpc3BsYXlLZXl9XG5cdFx0XHRpbml0aWFsPVwiaW5pdGlhbFwiXG5cdFx0XHRhbmltYXRlPVwic3RhbmRpbmdcIlxuXHRcdFx0Y3VzdG9tPXtvbkRpc3BsYXl9XG5cdFx0XHR2YXJpYW50cz17dmFyaWFudHN9XG5cdFx0PlxuXHRcdFx0PFNvZ3VtYVBob25lXG5cdFx0XHRcdG9uRGlzcGxheT17b25EaXNwbGF5fVxuXHRcdFx0XHRkYXJrVGhlbWU9e2RhcmtUaGVtZX1cblx0XHRcdFx0b25Tb2d1bWFDbGljaz17b25Tb2d1bWFDbGlja31cblx0XHRcdFx0c2V0T25EaXNwbGF5PXtzZXRPbkRpc3BsYXl9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdHsgb25EaXNwbGF5LnR5cGUgIT09IDIgJiYgPE1lbnVQaG9uZSBvbkRpc3BsYXk9e29uRGlzcGxheX0gIHNldE9uRGlzcGxheT17c2V0T25EaXNwbGF5fS8+fVxuXHRcdDwvbW90aW9uLmRpdj5cblx0KTtcbn1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/sogumaVxPhone.tsx\n");

/***/ })

})