webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/menuPhone.js":
/*!*********************************!*\
  !*** ./components/menuPhone.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n\n\nvar _jsxFileName = \"/home/hamza/Desktop/portfolio/components/menuPhone.js\",\n    _this = undefined;\n\n\nvar variants = {\n  initial: {\n    opacity: 0\n  },\n  animation: {\n    opacity: 0.5,\n    transition: {\n      duration: 1\n    }\n  },\n  onHover: {\n    opacity: 1,\n    scale: 1.1,\n    transition: {\n      duration: 0.3,\n      type: 'spring',\n      bounce: 0.3\n    }\n  }\n};\n\nvar MenuPhone = function MenuPhone(_ref) {\n  var onDisplay = _ref.onDisplay,\n      setOnDisplay = _ref.setOnDisplay;\n\n  var selectTitle = function selectTitle(type) {\n    switch (type) {\n      case 2:\n        setOnDisplay(true, onDisplay.displayOff, 1);\n        break;\n\n      case 3:\n        {\n          setTimeout(function () {\n            setOnDisplay(false, onDisplay.displayOff, 2);\n          }, 500);\n          setOnDisplay(true, onDisplay.displayOff, -1);\n        }\n        break;\n\n      case 4:\n        setOnDisplay(true, onDisplay.displayOff, -1);\n        break;\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"md:hidden absolute top-full flex-col justify-center items-center w-full \",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"AnimatePresence\"], {\n      children: !onDisplay.displayState && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n        className: \"relative text-white text-xl flex flex-col justify-evenly items-center rounded-lg bg-gray-500 bg-opacity-50 h-half w-full px-4\",\n        initial: {\n          opacity: 0,\n          y: 0,\n          scaleY: 0,\n          scaleX: 0,\n          originY: 0,\n          originX: \"50%\"\n        },\n        animate: onDisplay.type === 0 ? {\n          opacity: 1,\n          y: 0,\n          scaleY: [0.9, 1.03],\n          scaleX: [1, 1.03],\n          originY: 0,\n          originX: \"50%\",\n          transition: {\n            scaleX: {\n              duration: 1,\n              repeat: Infinity,\n              repeatType: 'reverse',\n              type: 'spring',\n              bounce: 0.4\n            },\n            scaleY: {\n              duration: 1,\n              repeat: Infinity,\n              repeatType: 'reverse',\n              type: 'spring',\n              bounce: 0.4\n            },\n            duration: 0.3,\n            delay: 0.2\n          }\n        } : {\n          opacity: 0,\n          y: 0,\n          scaleY: 0,\n          scaleX: 0,\n          originY: 0,\n          originX: \"50%\",\n          transition: {\n            scaleX: {\n              duration: 1\n            },\n            scaleY: {\n              duration: 1\n            },\n            duration: 0.3\n          }\n        },\n        exit: {\n          opacity: 0,\n          y: 0,\n          scaleY: 0,\n          scaleX: 0,\n          originY: 0,\n          originX: \"50%\",\n          transition: {\n            scaleX: {\n              duration: 1\n            },\n            scaleY: {\n              duration: 1\n            },\n            duration: 0.3\n          }\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"flex justify-center items-center text-white text-center align-middle object-center cursor-pointer w-full h-1/4 bg-black\",\n          onMouseDown: function onMouseDown() {\n            return selectTitle(2);\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n            children: \"ABOUT ME\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 104,\n            columnNumber: 7\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 6\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"flex justify-center items-center text-white text-center align-middle object-center cursor-pointer w-full h-1/4 bg-black\",\n          onMouseDown: function onMouseDown() {\n            return selectTitle(3);\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n            children: \"MY PROJECTS\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 109,\n            columnNumber: 7\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 6\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"flex justify-center items-center text-white text-center line-through align-middle object-center cursor-pointer w-full h-1/4 bg-black\",\n          onMouseDown: function onMouseDown() {\n            return selectTitle(4);\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n            children: \"ART\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 114,\n            columnNumber: 7\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 6\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 33\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 4\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = MenuPhone;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MenuPhone);\n\nvar _c;\n\n$RefreshReg$(_c, \"MenuPhone\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZW51UGhvbmUuanM/Njc0ZSJdLCJuYW1lcyI6WyJ2YXJpYW50cyIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0aW9uIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwib25Ib3ZlciIsInNjYWxlIiwidHlwZSIsImJvdW5jZSIsIk1lbnVQaG9uZSIsIm9uRGlzcGxheSIsInNldE9uRGlzcGxheSIsInNlbGVjdFRpdGxlIiwiZGlzcGxheU9mZiIsInNldFRpbWVvdXQiLCJkaXNwbGF5U3RhdGUiLCJ5Iiwic2NhbGVZIiwic2NhbGVYIiwib3JpZ2luWSIsIm9yaWdpblgiLCJyZXBlYXQiLCJJbmZpbml0eSIsInJlcGVhdFR5cGUiLCJkZWxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxRQUFRLEdBQUc7QUFDaEJDLFNBQU8sRUFBRTtBQUNSQyxXQUFPLEVBQUU7QUFERCxHQURPO0FBSWhCQyxXQUFTLEVBQUU7QUFDVkQsV0FBTyxFQUFFLEdBREM7QUFFVkUsY0FBVSxFQUFFO0FBQ1hDLGNBQVEsRUFBRTtBQURDO0FBRkYsR0FKSztBQVVoQkMsU0FBTyxFQUFFO0FBQ1JKLFdBQU8sRUFBRSxDQUREO0FBRVJLLFNBQUssRUFBRSxHQUZDO0FBR1JILGNBQVUsRUFBRTtBQUNYQyxjQUFRLEVBQUUsR0FEQztBQUVYRyxVQUFJLEVBQUUsUUFGSztBQUdYQyxZQUFNLEVBQUU7QUFIRztBQUhKO0FBVk8sQ0FBakI7O0FBcUJBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWlDO0FBQUEsTUFBOUJDLFNBQThCLFFBQTlCQSxTQUE4QjtBQUFBLE1BQW5CQyxZQUFtQixRQUFuQkEsWUFBbUI7O0FBR2xELE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNMLElBQUQsRUFBVTtBQUM3QixZQUFRQSxJQUFSO0FBQ0MsV0FBSyxDQUFMO0FBQ0NJLG9CQUFZLENBQUMsSUFBRCxFQUFP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QVBQLFNBcENxQjtBQUFBLGdDQWtEM0I7QUFBSyxtQkFBUyxFQUFDLHlIQUFmO0FBQ0MscUJBQVcsRUFBRTtBQUFBLG1CQUFNUSxXQUFXLENBQUMsQ0FBRCxDQUFqQjtBQUFBLFdBRGQ7QUFBQSxpQ0FHQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbEQyQixlQXVEM0I7QUFBSyxtQkFBUyxFQUFDLHlIQUFmO0FBQ0MscUJBQVcsRUFBRTtBQUFBLG1CQUFNQSxXQUFXLENBQUMsQ0FBRCxDQUFqQjtBQUFBLFdBRGQ7QUFBQSxpQ0FHQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdkQyQixlQTREM0I7QUFBSyxtQkFBUyxFQUFDLHNJQUFmO0FBQ0MscUJBQVcsRUFBRTtBQUFBLG1CQUFNQSxXQUFXLENBQUMsQ0FBRCxDQUFqQjtBQUFBLFdBRGQ7QUFBQSxpQ0FHQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBNUQyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQTJFQSxDQWhHRDs7S0FBTUgsUztBQWtHU0Esd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL21lbnVQaG9uZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcblxuY29uc3QgdmFyaWFudHMgPSB7XG5cdGluaXRpYWw6IHtcblx0XHRvcGFjaXR5OiAwLFxuXHR9LFxuXHRhbmltYXRpb246IHtcblx0XHRvcGFjaXR5OiAwLjUsXG5cdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0ZHVyYXRpb246IDFcblx0XHR9XG5cdH0sXG5cdG9uSG92ZXI6IHtcblx0XHRvcGFjaXR5OiAxLFxuXHRcdHNjYWxlOiAxLjEsXG5cdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0ZHVyYXRpb246IDAuMyxcblx0XHRcdHR5cGU6ICdzcHJpbmcnLFxuXHRcdFx0Ym91bmNlOiAwLjNcblx0XHR9XG5cdH1cbn1cblxuY29uc3QgTWVudVBob25lID0gKHsgb25EaXNwbGF5LCBzZXRPbkRpc3BsYXkgfSkgPT4ge1xuXG5cblx0Y29uc3Qgc2VsZWN0VGl0bGUgPSAodHlwZSkgPT4ge1xuXHRcdHN3aXRjaCAodHlwZSkge1xuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHRzZXRPbkRpc3BsYXkodHJ1ZSwgb25EaXNwbGF5LmRpc3BsYXlPZmYsIDEpXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7c2V0T25EaXNwbGF5KGZhbHNlLCBvbkRpc3BsYXkuZGlzcGxheU9mZiwgMik7fSwgNTAwKTtcblx0XHRcdFx0XHRzZXRPbkRpc3BsYXkodHJ1ZSwgb25EaXNwbGF5LmRpc3BsYXlPZmYsIC0xKTtcblxuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSA0OlxuXHRcdFx0XHRzZXRPbkRpc3BsYXkodHJ1ZSwgb25EaXNwbGF5LmRpc3BsYXlPZmYsIC0xKVxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxkaXZcblx0XHRcdGNsYXNzTmFtZT1cIm1kOmhpZGRlbiBhYnNvbHV0ZSB0b3AtZnVsbCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1mdWxsIFwiXG5cdFx0PlxuXHRcdFx0PEFuaW1hdGVQcmVzZW5jZT5cblxuXHRcdFx0XHR7IW9uRGlzcGxheS5kaXNwbGF5U3RhdGUgJiYgPG1vdGlvbi5kaXZcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJyZWxhdGl2ZSB0ZXh0LXdoaXRlIHRleHQteGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWV2ZW5seSBpdGVtcy1jZW50ZXIgcm91bmRlZC1sZyBiZy1ncmF5LTUwMCBiZy1vcGFjaXR5LTUwIGgtaGFsZiB3LWZ1bGwgcHgtNFwiXG5cdFx0XHRcdFx0aW5pdGlhbD17e1xuXHRcdFx0XHRcdFx0b3BhY2l0eTogMCxcblx0XHRcdFx0XHRcdHk6IDAsXG5cdFx0XHRcdFx0XHRzY2FsZVk6IDAsXG5cdFx0XHRcdFx0XHRzY2FsZVg6IDAsXG5cdFx0XHRcdFx0XHRvcmlnaW5ZOiAwLFxuXHRcdFx0XHRcdFx0b3JpZ2luWDogXCI1MCVcIixcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdGFuaW1hdGU9e29uRGlzcGxheS50eXBlID09PSAwID8ge1xuXHRcdFx0XHRcdFx0b3BhY2l0eTogMSxcblx0XHRcdFx0XHRcdHk6IDAsXG5cdFx0XHRcdFx0XHRzY2FsZVk6IFswLjksIDEuMDNdLFxuXHRcdFx0XHRcdFx0c2NhbGVYOiBbMSwgMS4wM10sXG5cdFx0XHRcdFx0XHRvcmlnaW5ZOiAwLFxuXHRcdFx0XHRcdFx0b3JpZ2luWDogXCI1MCVcIixcblx0XHRcdFx0XHRcdHRyYW5zaXRpb246IHtcblx0XHRcdFx0XHRcdFx0c2NhbGVYOiB7IGR1cmF0aW9uOiAxLCByZXBlYXQ6IEluZmluaXR5LCByZXBlYXRUeXBlOiAncmV2ZXJzZScsIHR5cGU6ICdzcHJpbmcnLCBib3VuY2U6IDAuNCwgfSxcblx0XHRcdFx0XHRcdFx0c2NhbGVZOiB7IGR1cmF0aW9uOiAxLCByZXBlYXQ6IEluZmluaXR5LCByZXBlYXRUeXBlOiAncmV2ZXJzZScsIHR5cGU6ICdzcHJpbmcnLCBib3VuY2U6IDAuNCwgfSxcblx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDAuMyxcblx0XHRcdFx0XHRcdFx0ZGVsYXk6IDAuMlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gOiB7XG5cdFx0XHRcdFx0XHRcdG9wYWNpdHk6IDAsXG5cdFx0XHRcdFx0XHRcdHk6IDAsXG5cdFx0XHRcdFx0XHRcdHNjYWxlWTogMCxcblx0XHRcdFx0XHRcdFx0c2NhbGVYOiAwLFxuXHRcdFx0XHRcdFx0XHRvcmlnaW5ZOiAwLFxuXHRcdFx0XHRcdFx0XHRvcmlnaW5YOiBcIjUwJVwiLFxuXHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHRcdFx0XHRcdFx0c2NhbGVYOiB7IGR1cmF0aW9uOiAxIH0sXG5cdFx0XHRcdFx0XHRcdFx0c2NhbGVZOiB7IGR1cmF0aW9uOiAxfSxcblx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMC4zLFxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdGV4aXQ9e3tcblx0XHRcdFx0XHRcdG9wYWNpdHk6IDAsXG5cdFx0XHRcdFx0XHR5OiAwLFxuXHRcdFx0XHRcdFx0c2NhbGVZOiAwLFxuXHRcdFx0XHRcdFx0c2NhbGVYOiAwLFxuXHRcdFx0XHRcdFx0b3JpZ2luWTogMCxcblx0XHRcdFx0XHRcdG9yaWdpblg6IFwiNTAlXCIsXG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHRcdFx0XHRcdHNjYWxlWDogeyBkdXJhdGlvbjogMSB9LFxuXHRcdFx0XHRcdFx0XHRzY2FsZVk6IHsgZHVyYXRpb246IDEgfSxcblx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDAuMyxcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LXdoaXRlIHRleHQtY2VudGVyIGFsaWduLW1pZGRsZSBvYmplY3QtY2VudGVyIGN1cnNvci1wb2ludGVyIHctZnVsbCBoLTEvNCBiZy1ibGFja1wiIFxuXHRcdFx0XHRcdFx0b25Nb3VzZURvd249eygpID0+IHNlbGVjdFRpdGxlKDIpfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxoMT5BQk9VVCBNRTwvaDE+XG5cdFx0XHRcdFx0PC9kaXYgPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC13aGl0ZSB0ZXh0LWNlbnRlciBhbGlnbi1taWRkbGUgb2JqZWN0LWNlbnRlciBjdXJzb3ItcG9pbnRlciB3LWZ1bGwgaC0xLzQgYmctYmxhY2tcIiBcblx0XHRcdFx0XHRcdG9uTW91c2VEb3duPXsoKSA9PiBzZWxlY3RUaXRsZSgzKX1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8aDE+TVkgUFJPSkVDVFM8L2gxPlxuXHRcdFx0XHRcdDwvZGl2ID5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtd2hpdGUgdGV4dC1jZW50ZXIgbGluZS10aHJvdWdoIGFsaWduLW1pZGRsZSBvYmplY3QtY2VudGVyIGN1cnNvci1wb2ludGVyIHctZnVsbCBoLTEvNCBiZy1ibGFja1wiIFxuXHRcdFx0XHRcdFx0b25Nb3VzZURvd249eygpID0+IHNlbGVjdFRpdGxlKDQpfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxoMT5BUlQ8L2gxPlxuXHRcdFx0XHRcdDwvZGl2ID5cblx0XHRcdFx0PC9tb3Rpb24uZGl2Pn1cblx0XHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNZW51UGhvbmU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/menuPhone.js\n");

/***/ })

})