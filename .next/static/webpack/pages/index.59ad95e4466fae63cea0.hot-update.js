webpackHotUpdate_N_E("pages/index",{

/***/ "./components/menuPhone.js":
/*!*********************************!*\
  !*** ./components/menuPhone.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n\n\nvar _jsxFileName = \"/home/hamza/Desktop/portfolio/components/menuPhone.js\",\n    _this = undefined;\n\n\nvar variants = {\n  initial: {\n    opacity: 0\n  },\n  animation: {\n    opacity: 0.5,\n    transition: {\n      duration: 1\n    }\n  },\n  onHover: {\n    opacity: 1,\n    scale: 1.1,\n    transition: {\n      duration: 0.3,\n      type: 'spring',\n      bounce: 0.3\n    }\n  }\n};\n\nvar MenuPhone = function MenuPhone(_ref) {\n  var onDisplay = _ref.onDisplay,\n      setOnDisplay = _ref.setOnDisplay;\n\n  var selectTitle = function selectTitle(type) {\n    switch (type) {\n      case 2:\n        setOnDisplay(true, onDisplay.displayOff, 1);\n        break;\n\n      case 3:\n        {\n          setTimeout(function () {\n            setOnDisplay(false, onDisplay.displayOff, 2);\n          }, 500);\n          setOnDisplay(true, onDisplay.displayOff, -1);\n        }\n        break;\n\n      case 4:\n        setOnDisplay(true, onDisplay.displayOff, -1);\n        break;\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"md:hidden absolute top-full flex-col justify-center items-center h-half w-full px-4\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n      className: \"relative text-while text-xl flex flex-col justify-evenly items-center rounded-lg bg-gray-500 bg-opacity-50 h-full w-full\",\n      initial: {\n        opacity: 1,\n        y: 0,\n        scaleY: 0,\n        scaleX: 1,\n        originY: 0,\n        originX: \"50%\"\n      },\n      animate: onDisplay.type === 0 ? {\n        opacity: 1,\n        y: 0,\n        scaleY: [0.9, 1.03],\n        scaleX: [1, 1.03],\n        originY: 0,\n        originX: \"50%\",\n        transition: {\n          scaleX: {\n            duration: 1,\n            repeat: Infinity,\n            repeatType: 'reverse',\n            type: 'spring',\n            bounce: 0.4\n          },\n          scaleY: {\n            duration: 1,\n            repeat: Infinity,\n            repeatType: 'reverse',\n            type: 'spring',\n            bounce: 0.4\n          },\n          duration: 0.3,\n          delay: 0.2\n        }\n      } : {\n        opacity: 0,\n        y: 0,\n        scaleY: 0,\n        scaleX: 1,\n        originY: 0,\n        originX: \"50%\",\n        transition: {\n          duration: 0.3\n        }\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].h1, {\n        className: \" text-center align-middle object-center cursor-pointer w-full h-1/4 bg-gray-100\",\n        variants: variants,\n        initial: \"initial\",\n        animate: \"animation\",\n        whileHover: \"onHover\",\n        onMouseDown: function onMouseDown() {\n          return selectTitle(2);\n        },\n        children: \"ABOUT ME\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].h1, {\n        className: \"text-center   cursor-pointer w-full h-1/4 bg-gray-100\",\n        variants: variants,\n        initial: \"initial\",\n        animate: \"animation\",\n        whileHover: \"onHover\",\n        onMouseDown: function onMouseDown() {\n          return selectTitle(3);\n        },\n        children: \"MY PROJECTS\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].h1, {\n        className: \"text-center line-through cursor-pointer w-full h-1/4 bg-gray-100\",\n        variants: variants,\n        initial: \"initial\",\n        animate: \"animation\",\n        whileHover: \"onHover\",\n        onMouseDown: function onMouseDown() {\n          return selectTitle(4);\n        },\n        children: \"ART\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 4\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = MenuPhone;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MenuPhone);\n\nvar _c;\n\n$RefreshReg$(_c, \"MenuPhone\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZW51UGhvbmUuanM/Njc0ZSJdLCJuYW1lcyI6WyJ2YXJpYW50cyIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0aW9uIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwib25Ib3ZlciIsInNjYWxlIiwidHlwZSIsImJvdW5jZSIsIk1lbnVQaG9uZSIsIm9uRGlzcGxheSIsInNldE9uRGlzcGxheSIsInNlbGVjdFRpdGxlIiwiZGlzcGxheU9mZiIsInNldFRpbWVvdXQiLCJ5Iiwic2NhbGVZIiwic2NhbGVYIiwib3JpZ2luWSIsIm9yaWdpblgiLCJyZXBlYXQiLCJJbmZpbml0eSIsInJlcGVhdFR5cGUiLCJkZWxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxRQUFRLEdBQUc7QUFDaEJDLFNBQU8sRUFBRTtBQUNSQyxXQUFPLEVBQUU7QUFERCxHQURPO0FBSWhCQyxXQUFTLEVBQUU7QUFDVkQsV0FBTyxFQUFFLEdBREM7QUFFVkUsY0FBVSxFQUFFO0FBQ1hDLGNBQVEsRUFBRTtBQURDO0FBRkYsR0FKSztBQVVoQkMsU0FBTyxFQUFFO0FBQ1JKLFdBQU8sRUFBRSxDQUREO0FBRVJLLFNBQUssRUFBRSxHQUZDO0FBR1JILGNBQVUsRUFBRTtBQUNYQyxjQUFRLEVBQUUsR0FEQztBQUVYRyxVQUFJLEVBQUUsUUFGSztBQUdYQyxZQUFNLEVBQUU7QUFIRztBQUhKO0FBVk8sQ0FBakI7O0FBcUJBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWlDO0FBQUEsTUFBOUJDLFNBQThCLFFBQTlCQSxTQUE4QjtBQUFBLE1BQW5CQyxZQUFtQixRQUFuQkEsWUFBbUI7O0FBR2xELE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNMLElBQUQsRUFBVTtBQUM3QixZQUFRQSxJQUFSO0FBQ0MsV0FBSyxDQUFMO0FBQ0NJLG9CQUFZLENBQUMsSUFBRCxFQUFPRCxTQUFTLENBQUNHLFVB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LGVBM0NELGVBa0RDLHFFQUFDLG9EQUFELENBQVEsRUFBUjtBQUFXLGlCQUFTLEVBQUMsa0VBQXJCO0FBQ0MsZ0JBQVEsRUFBRWIsUUFEWDtBQUVDLGVBQU8sRUFBQyxTQUZUO0FBR0MsZUFBTyxFQUFDLFdBSFQ7QUFJQyxrQkFBVSxFQUFDLFNBSlo7QUFLQyxtQkFBVyxFQUFFO0FBQUEsaUJBQU1hLFdBQVcsQ0FBQyxDQUFELENBQWpCO0FBQUEsU0FMZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWxERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUFpRUEsQ0F0RkQ7O0tBQU1ILFM7QUF3RlNBLHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9tZW51UGhvbmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuXG5jb25zdCB2YXJpYW50cyA9IHtcblx0aW5pdGlhbDoge1xuXHRcdG9wYWNpdHk6IDAsXG5cdH0sXG5cdGFuaW1hdGlvbjoge1xuXHRcdG9wYWNpdHk6IDAuNSxcblx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHRkdXJhdGlvbjogMVxuXHRcdH1cblx0fSxcblx0b25Ib3Zlcjoge1xuXHRcdG9wYWNpdHk6IDEsXG5cdFx0c2NhbGU6IDEuMSxcblx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHRkdXJhdGlvbjogMC4zLFxuXHRcdFx0dHlwZTogJ3NwcmluZycsXG5cdFx0XHRib3VuY2U6IDAuM1xuXHRcdH1cblx0fVxufVxuXG5jb25zdCBNZW51UGhvbmUgPSAoeyBvbkRpc3BsYXksIHNldE9uRGlzcGxheSB9KSA9PiB7XG5cblxuXHRjb25zdCBzZWxlY3RUaXRsZSA9ICh0eXBlKSA9PiB7XG5cdFx0c3dpdGNoICh0eXBlKSB7XG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHNldE9uRGlzcGxheSh0cnVlLCBvbkRpc3BsYXkuZGlzcGxheU9mZiwgMSlcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDM6XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtzZXRPbkRpc3BsYXkoZmFsc2UsIG9uRGlzcGxheS5kaXNwbGF5T2ZmLCAyKTt9LCA1MDApO1xuXHRcdFx0XHRcdHNldE9uRGlzcGxheSh0cnVlLCBvbkRpc3BsYXkuZGlzcGxheU9mZiwgLTEpO1xuXG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDQ6XG5cdFx0XHRcdHNldE9uRGlzcGxheSh0cnVlLCBvbkRpc3BsYXkuZGlzcGxheU9mZiwgLTEpXG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdlxuXHRcdFx0Y2xhc3NOYW1lPVwibWQ6aGlkZGVuIGFic29sdXRlIHRvcC1mdWxsIGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLWhhbGYgdy1mdWxsIHB4LTRcIlxuXHRcdD5cblx0XHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRcdGNsYXNzTmFtZT1cInJlbGF0aXZlIHRleHQtd2hpbGUgdGV4dC14bCBmbGV4IGZsZXgtY29sIGp1c3RpZnktZXZlbmx5IGl0ZW1zLWNlbnRlciByb3VuZGVkLWxnIGJnLWdyYXktNTAwIGJnLW9wYWNpdHktNTAgaC1mdWxsIHctZnVsbFwiXG5cdFx0XHRcdGluaXRpYWw9e3tcblx0XHRcdFx0XHRvcGFjaXR5OiAxLFxuXHRcdFx0XHRcdHk6IDAsXG5cdFx0XHRcdFx0c2NhbGVZOiAwLFxuXHRcdFx0XHRcdHNjYWxlWDogMSxcblx0XHRcdFx0XHRvcmlnaW5ZOiAwLFxuXHRcdFx0XHRcdG9yaWdpblg6IFwiNTAlXCIsXG5cdFx0XHRcdH19XG5cdFx0XHRcdGFuaW1hdGU9e29uRGlzcGxheS50eXBlID09PSAwID8ge1xuXHRcdFx0XHRcdG9wYWNpdHk6IDEsXG5cdFx0XHRcdFx0eTogMCxcblx0XHRcdFx0XHRzY2FsZVk6IFswLjksIDEuMDNdLFxuXHRcdFx0XHRcdHNjYWxlWDogWzEsIDEuMDNdLFxuXHRcdFx0XHRcdG9yaWdpblk6IDAsXG5cdFx0XHRcdFx0b3JpZ2luWDogXCI1MCVcIixcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHRcdFx0XHRzY2FsZVg6IHsgZHVyYXRpb246IDEsIHJlcGVhdDogSW5maW5pdHksIHJlcGVhdFR5cGU6ICdyZXZlcnNlJywgdHlwZTogJ3NwcmluZycsIGJvdW5jZTogMC40LCB9LFxuXHRcdFx0XHRcdFx0c2NhbGVZOiB7IGR1cmF0aW9uOiAxLCByZXBlYXQ6IEluZmluaXR5LCByZXBlYXRUeXBlOiAncmV2ZXJzZScsIHR5cGU6ICdzcHJpbmcnLCBib3VuY2U6IDAuNCwgfSxcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiAwLjMsXG5cdFx0XHRcdFx0XHRkZWxheTogMC4yXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IDoge1xuXHRcdFx0XHRcdFx0b3BhY2l0eTogMCxcblx0XHRcdFx0XHRcdHk6IDAsXG5cdFx0XHRcdFx0XHRzY2FsZVk6IDAsXG5cdFx0XHRcdFx0XHRzY2FsZVg6IDEsXG5cdFx0XHRcdFx0XHRvcmlnaW5ZOiAwLFxuXHRcdFx0XHRcdFx0b3JpZ2luWDogXCI1MCVcIixcblx0XHRcdFx0XHRcdHRyYW5zaXRpb246IHtcblx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDAuMyxcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9fVxuXHRcdFx0PlxuXHRcdFx0XHQ8bW90aW9uLmgxIGNsYXNzTmFtZT1cIiB0ZXh0LWNlbnRlciBhbGlnbi1taWRkbGUgb2JqZWN0LWNlbnRlciBjdXJzb3ItcG9pbnRlciB3LWZ1bGwgaC0xLzQgYmctZ3JheS0xMDBcIlxuXHRcdFx0XHRcdHZhcmlhbnRzPXt2YXJpYW50c31cblx0XHRcdFx0XHRpbml0aWFsPVwiaW5pdGlhbFwiXG5cdFx0XHRcdFx0YW5pbWF0ZT1cImFuaW1hdGlvblwiXG5cdFx0XHRcdFx0d2hpbGVIb3Zlcj1cIm9uSG92ZXJcIlxuXHRcdFx0XHRcdG9uTW91c2VEb3duPXsoKSA9PiBzZWxlY3RUaXRsZSgyKX1cblxuXHRcdFx0XHQ+QUJPVVQgTUU8L21vdGlvbi5oMT5cblx0XHRcdFx0PG1vdGlvbi5oMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciAgIGN1cnNvci1wb2ludGVyIHctZnVsbCBoLTEvNCBiZy1ncmF5LTEwMFwiXG5cdFx0XHRcdFx0dmFyaWFudHM9e3ZhcmlhbnRzfVxuXHRcdFx0XHRcdGluaXRpYWw9XCJpbml0aWFsXCJcblx0XHRcdFx0XHRhbmltYXRlPVwiYW5pbWF0aW9uXCJcblx0XHRcdFx0XHR3aGlsZUhvdmVyPVwib25Ib3ZlclwiXG5cdFx0XHRcdFx0b25Nb3VzZURvd249eygpID0+IHNlbGVjdFRpdGxlKDMpfVxuXHRcdFx0XHQ+TVkgUFJPSkVDVFM8L21vdGlvbi5oMT5cblx0XHRcdFx0PG1vdGlvbi5oMSBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBsaW5lLXRocm91Z2ggY3Vyc29yLXBvaW50ZXIgdy1mdWxsIGgtMS80IGJnLWdyYXktMTAwXCJcblx0XHRcdFx0XHR2YXJpYW50cz17dmFyaWFudHN9XG5cdFx0XHRcdFx0aW5pdGlhbD1cImluaXRpYWxcIlxuXHRcdFx0XHRcdGFuaW1hdGU9XCJhbmltYXRpb25cIlxuXHRcdFx0XHRcdHdoaWxlSG92ZXI9XCJvbkhvdmVyXCJcblx0XHRcdFx0XHRvbk1vdXNlRG93bj17KCkgPT4gc2VsZWN0VGl0bGUoNCl9XG5cdFx0XHRcdD5BUlQ8L21vdGlvbi5oMT5cblx0XHRcdDwvbW90aW9uLmRpdj5cblxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNZW51UGhvbmU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/menuPhone.js\n");

/***/ })

})