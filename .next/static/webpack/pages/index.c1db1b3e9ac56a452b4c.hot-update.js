webpackHotUpdate_N_E("pages/index",{

/***/ "./components/menu.js":
/*!****************************!*\
  !*** ./components/menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n\n\nvar _jsxFileName = \"/home/hamza/Desktop/portfolio/components/menu.js\",\n    _this = undefined;\n\n\nvar variants = {\n  initial: {\n    opacity: 0\n  },\n  animation: {\n    opacity: 0.5,\n    transition: {\n      duration: 1\n    }\n  },\n  onHover: {\n    opacity: 1,\n    scale: 1.1,\n    transition: {\n      duration: 0.3,\n      type: 'spring',\n      bounce: 0.3\n    }\n  }\n};\n\nvar Menu = function Menu(_ref) {\n  var onDisplay = _ref.onDisplay,\n      setOnDisplay = _ref.setOnDisplay;\n\n  var selectTitle = function selectTitle(type) {\n    switch (type) {\n      case 2:\n        setOnDisplay(true, onDisplay.displayOff, 1);\n        break;\n\n      case 3:\n        {\n          setTimeout(function () {\n            setOnDisplay(false, onDisplay.displayOff, 2);\n          }, 500);\n          setOnDisplay(true, onDisplay.displayOff, -1);\n        }\n        break;\n\n      case 4:\n        setOnDisplay(true, -1, -1);\n        break;\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"flex absolute -top-10  flex-col justify-center items-center h-90 w-full\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n      className: \"relative flex flex-col justify-center items-center w-full h-full \",\n      initial: {\n        opacity: 0\n      },\n      animate: {\n        opacity: 1\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n        className: \"absolute md:text-2xl lg:text-3xl border-white border-2 border-opacity-20 shadow-soft2glow text-center text-white font-black  flex flex-col justify-center items-center lg:h-100 md:h-80 lg:w-52 md:w-44 bg-gradient-to-b  bg-gray-500 to-gray-400 bg-opacity-5 rounded-b-full top-36 lg:pt-20 md:pt-12 \",\n        initial: {\n          opacity: 1,\n          y: 0,\n          scaleY: 0,\n          scaleX: 1,\n          originY: 0,\n          originX: \"50%\"\n        },\n        animate: onDisplay.type === 0 ? {\n          opacity: 1,\n          y: 0,\n          scaleY: [0.9, 1.03],\n          scaleX: [1, 1.03],\n          originY: 0,\n          originX: \"50%\",\n          transition: {\n            scaleX: {\n              duration: 1,\n              repeat: Infinity,\n              repeatType: 'reverse',\n              type: 'spring',\n              bounce: 0.4\n            },\n            scaleY: {\n              duration: 1,\n              repeat: Infinity,\n              repeatType: 'reverse',\n              type: 'spring',\n              bounce: 0.4\n            },\n            duration: 0.3,\n            delay: 0.2\n          }\n        } : {\n          opacity: 0,\n          y: 0,\n          scaleY: 0,\n          scaleX: 1,\n          originY: 0,\n          originX: \"50%\",\n          transition: {\n            duration: 0.3\n          }\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].h1, {\n          className: \" text-center lg:m-5 md:m-2 t cursor-pointer\",\n          variants: variants,\n          initial: \"initial\",\n          animate: \"animation\",\n          whileHover: \"onHover\",\n          onMouseDown: function onMouseDown() {\n            return selectTitle(2);\n          },\n          children: \"ABOUT ME\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 6\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].h1, {\n          className: \" lg:m-5 md:m-2  cursor-pointer\",\n          variants: variants,\n          initial: \"initial\",\n          animate: \"animation\",\n          whileHover: \"onHover\",\n          onMouseDown: function onMouseDown() {\n            return selectTitle(3);\n          },\n          children: \"MY PROJECTS\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 6\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].h1, {\n          className: \" lg:m-5 md:m-2  line-through cursor-pointer\",\n          variants: variants,\n          initial: \"initial\",\n          animate: \"animation\",\n          whileHover: \"onHover\",\n          onMouseDown: function onMouseDown() {\n            return selectTitle(4);\n          },\n          children: \"ART\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 6\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n        className: \"absolute lg:w-64 md:w-56 w-20 lg:top-36 md:top-28 top-12 opacity-70 overflow-hidden\",\n        initial: {\n          y: -100\n        },\n        animate: onDisplay.type === 0 ? {\n          scale: 1,\n          y: [2, 5, 4, 1],\n          transition: {\n            y: {\n              duration: 3,\n              yoyo: Infinity\n            },\n            duration: 0.3\n          }\n        } : {\n          scale: 0.9,\n          y: -100,\n          transition: {\n            duration: 0.3,\n            delay: 0.3\n          }\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: \"/teeth.png\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 138,\n          columnNumber: 6\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 4\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = Menu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\n\nvar _c;\n\n$RefreshReg$(_c, \"Menu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZW51LmpzPzQ1MmEiXSwibmFtZXMiOlsidmFyaWFudHMiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGlvbiIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsIm9uSG92ZXIiLCJzY2FsZSIsInR5cGUiLCJib3VuY2UiLCJNZW51Iiwib25EaXNwbGF5Iiwic2V0T25EaXNwbGF5Iiwic2VsZWN0VGl0bGUiLCJkaXNwbGF5T2ZmIiwic2V0VGltZW91dCIsInkiLCJzY2FsZVkiLCJzY2FsZVgiLCJvcmlnaW5ZIiwib3JpZ2luWCIsInJlcGVhdCIsIkluZmluaXR5IiwicmVwZWF0VHlwZSIsImRlbGF5IiwieW95byJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxRQUFRLEdBQUc7QUFDaEJDLFNBQU8sRUFBRTtBQUNSQyxXQUFPLEVBQUU7QUFERCxHQURPO0FBSWhCQyxXQUFTLEVBQUU7QUFDVkQsV0FBTyxFQUFFLEdBREM7QUFFVkUsY0FBVSxFQUFFO0FBQ1hDLGNBQVEsRUFBRTtBQURDO0FBRkYsR0FKSztBQVVoQkMsU0FBTyxFQUFFO0FBQ1JKLFdBQU8sRUFBRSxDQUREO0FBRVJLLFNBQUssRUFBRSxHQUZDO0FBR1JILGNBQVUsRUFBRTtBQUNYQyxjQUFRLEVBQUUsR0FEQztBQUVYRyxVQUFJLEVBQUUsUUFGSztBQUdYQyxZQUFNLEVBQUU7QUFIRztBQUhKO0FBVk8sQ0FBakI7O0FBcUJBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWlDO0FBQUEsTUFBOUJDLFNBQThCLFFBQTlCQSxTQUE4QjtBQUFBLE1BQW5CQyxZQUFtQixRQUFuQkEsWUFBbUI7O0FBRzdDLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNMLElBQUQsRUFBVTtBQUM3QixZQUFRQSxJQUFSO0FBQ0MsV0FBSyxDQUFMO0FBQ0NJLG9CQUFZLENBQUMsSUFBRCxFQUFPRCxTQUFTLENBQUNHLFVBQWpC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cUJDO0FBQUssYUFBRyxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXJCRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBcEVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQW1HQSxDQXhIRDs7S0FBTWQsSTtBQTBIU0EsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL21lbnUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuXG5jb25zdCB2YXJpYW50cyA9IHtcblx0aW5pdGlhbDoge1xuXHRcdG9wYWNpdHk6IDAsXG5cdH0sXG5cdGFuaW1hdGlvbjoge1xuXHRcdG9wYWNpdHk6IDAuNSxcblx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHRkdXJhdGlvbjogMVxuXHRcdH1cblx0fSxcblx0b25Ib3Zlcjoge1xuXHRcdG9wYWNpdHk6IDEsXG5cdFx0c2NhbGU6IDEuMSxcblx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHRkdXJhdGlvbjogMC4zLFxuXHRcdFx0dHlwZTogJ3NwcmluZycsXG5cdFx0XHRib3VuY2U6IDAuM1xuXHRcdH1cblx0fVxufVxuXG5jb25zdCBNZW51ID0gKHsgb25EaXNwbGF5LCBzZXRPbkRpc3BsYXkgfSkgPT4ge1xuXG5cblx0Y29uc3Qgc2VsZWN0VGl0bGUgPSAodHlwZSkgPT4ge1xuXHRcdHN3aXRjaCAodHlwZSkge1xuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHRzZXRPbkRpc3BsYXkodHJ1ZSwgb25EaXNwbGF5LmRpc3BsYXlPZmYsIDEpXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7c2V0T25EaXNwbGF5KGZhbHNlLCBvbkRpc3BsYXkuZGlzcGxheU9mZiwgMik7fSwgNTAwKTtcblx0XHRcdFx0XHRzZXRPbkRpc3BsYXkodHJ1ZSwgb25EaXNwbGF5LmRpc3BsYXlPZmYsIC0xKTtcblxuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSA0OlxuXHRcdFx0XHRzZXRPbkRpc3BsYXkodHJ1ZSwgLTEsIC0xKVxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxkaXZcblx0XHRcdGNsYXNzTmFtZT1cImZsZXggYWJzb2x1dGUgLXRvcC0xMCAgZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtOTAgdy1mdWxsXCJcblx0XHQ+XG5cdFx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0XHRjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LWZ1bGwgaC1mdWxsIFwiXG5cdFx0XHRcdGluaXRpYWw9e3tcblx0XHRcdFx0XHRvcGFjaXR5IDogMCxcblx0XHRcdFx0fX1cblx0XHRcdFx0YW5pbWF0ZT17e1xuXHRcdFx0XHRcdG9wYWNpdHk6IDFcblx0XHRcdFx0fX1cblx0XHRcdD5cblxuXHRcdFx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImFic29sdXRlIG1kOnRleHQtMnhsIGxnOnRleHQtM3hsIGJvcmRlci13aGl0ZSBib3JkZXItMiBib3JkZXItb3BhY2l0eS0yMCBzaGFkb3ctc29mdDJnbG93IHRleHQtY2VudGVyIHRleHQtd2hpdGUgZm9udC1ibGFjayAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbGc6aC0xMDAgbWQ6aC04MCBsZzp3LTUyIG1kOnctNDQgYmctZ3JhZGllbnQtdG8tYiAgYmctZ3JheS01MDAgdG8tZ3JheS00MDAgYmctb3BhY2l0eS01IHJvdW5kZWQtYi1mdWxsIHRvcC0zNiBsZzpwdC0yMCBtZDpwdC0xMiBcIlxuXHRcdFx0XHRcdGluaXRpYWw9e3tcblx0XHRcdFx0XHRcdG9wYWNpdHk6IDEsXG5cdFx0XHRcdFx0XHR5OiAwLFxuXHRcdFx0XHRcdFx0c2NhbGVZOiAwLFxuXHRcdFx0XHRcdFx0c2NhbGVYOiAxLFxuXHRcdFx0XHRcdFx0b3JpZ2luWTogMCxcblx0XHRcdFx0XHRcdG9yaWdpblg6IFwiNTAlXCIsXG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRhbmltYXRlPXtvbkRpc3BsYXkudHlwZSA9PT0gMCA/IHtcblx0XHRcdFx0XHRcdG9wYWNpdHk6IDEsXG5cdFx0XHRcdFx0XHR5OiAwLFxuXHRcdFx0XHRcdFx0c2NhbGVZOiBbMC45LCAxLjAzXSxcblx0XHRcdFx0XHRcdHNjYWxlWDogWzEsIDEuMDNdLFxuXHRcdFx0XHRcdFx0b3JpZ2luWTogMCxcblx0XHRcdFx0XHRcdG9yaWdpblg6IFwiNTAlXCIsXG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHRcdFx0XHRcdHNjYWxlWDogeyBkdXJhdGlvbjogMSwgcmVwZWF0OiBJbmZpbml0eSwgcmVwZWF0VHlwZTogJ3JldmVyc2UnLCB0eXBlOiAnc3ByaW5nJywgYm91bmNlOiAwLjQsIH0sXG5cdFx0XHRcdFx0XHRcdHNjYWxlWTogeyBkdXJhdGlvbjogMSwgcmVwZWF0OiBJbmZpbml0eSwgcmVwZWF0VHlwZTogJ3JldmVyc2UnLCB0eXBlOiAnc3ByaW5nJywgYm91bmNlOiAwLjQsIH0sXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAwLjMsXG5cdFx0XHRcdFx0XHRcdGRlbGF5OiAwLjJcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IDoge1xuXHRcdFx0XHRcdFx0XHRvcGFjaXR5OiAwLFxuXHRcdFx0XHRcdFx0XHR5OiAwLFxuXHRcdFx0XHRcdFx0XHRzY2FsZVk6IDAsXG5cdFx0XHRcdFx0XHRcdHNjYWxlWDogMSxcblx0XHRcdFx0XHRcdFx0b3JpZ2luWTogMCxcblx0XHRcdFx0XHRcdFx0b3JpZ2luWDogXCI1MCVcIixcblx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAwLjMsXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8bW90aW9uLmgxIGNsYXNzTmFtZT1cIiB0ZXh0LWNlbnRlciBsZzptLTUgbWQ6bS0yIHQgY3Vyc29yLXBvaW50ZXJcIlxuXHRcdFx0XHRcdFx0dmFyaWFudHM9e3ZhcmlhbnRzfVxuXHRcdFx0XHRcdFx0aW5pdGlhbD1cImluaXRpYWxcIlxuXHRcdFx0XHRcdFx0YW5pbWF0ZT1cImFuaW1hdGlvblwiXG5cdFx0XHRcdFx0XHR3aGlsZUhvdmVyPVwib25Ib3ZlclwiXG5cdFx0XHRcdFx0XHRvbk1vdXNlRG93bj17KCkgPT4gc2VsZWN0VGl0bGUoMil9XG5cblx0XHRcdFx0XHQ+QUJPVVQgTUU8L21vdGlvbi5oMT5cblx0XHRcdFx0XHQ8bW90aW9uLmgxIGNsYXNzTmFtZT1cIiBsZzptLTUgbWQ6bS0yICBjdXJzb3ItcG9pbnRlclwiXG5cdFx0XHRcdFx0XHR2YXJpYW50cz17dmFyaWFudHN9XG5cdFx0XHRcdFx0XHRpbml0aWFsPVwiaW5pdGlhbFwiXG5cdFx0XHRcdFx0XHRhbmltYXRlPVwiYW5pbWF0aW9uXCJcblx0XHRcdFx0XHRcdHdoaWxlSG92ZXI9XCJvbkhvdmVyXCJcblx0XHRcdFx0XHRcdG9uTW91c2VEb3duPXsoKSA9PiBzZWxlY3RUaXRsZSgzKX1cblx0XHRcdFx0XHQ+TVkgUFJPSkVDVFM8L21vdGlvbi5oMT5cblx0XHRcdFx0XHQ8bW90aW9uLmgxIGNsYXNzTmFtZT1cIiBsZzptLTUgbWQ6bS0yICBsaW5lLXRocm91Z2ggY3Vyc29yLXBvaW50ZXJcIlxuXHRcdFx0XHRcdFx0dmFyaWFudHM9e3ZhcmlhbnRzfVxuXHRcdFx0XHRcdFx0aW5pdGlhbD1cImluaXRpYWxcIlxuXHRcdFx0XHRcdFx0YW5pbWF0ZT1cImFuaW1hdGlvblwiXG5cdFx0XHRcdFx0XHR3aGlsZUhvdmVyPVwib25Ib3ZlclwiXG5cdFx0XHRcdFx0XHRvbk1vdXNlRG93bj17KCkgPT4gc2VsZWN0VGl0bGUoNCl9XG5cdFx0XHRcdFx0PkFSVDwvbW90aW9uLmgxPlxuXHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYWJzb2x1dGUgbGc6dy02NCBtZDp3LTU2IHctMjAgbGc6dG9wLTM2IG1kOnRvcC0yOCB0b3AtMTIgb3BhY2l0eS03MCBvdmVyZmxvdy1oaWRkZW5cIlxuXHRcdFx0XHRcdGluaXRpYWw9e3tcblx0XHRcdFx0XHRcdHk6IC0xMDAsXG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRhbmltYXRlPXtvbkRpc3BsYXkudHlwZSA9PT0gMCA/IHtcblx0XHRcdFx0XHRcdHNjYWxlOiAxLFxuXHRcdFx0XHRcdFx0eTogWzIsIDUsIDQsIDFdLFxuXHRcdFx0XHRcdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0XHRcdFx0XHR5OiB7IGR1cmF0aW9uOiAzLCB5b3lvOiBJbmZpbml0eSB9LFxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMC4zLFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gOiB7XG5cdFx0XHRcdFx0XHRcdHNjYWxlOiAwLjksXG5cdFx0XHRcdFx0XHRcdHk6IC0xMDAsXG5cdFx0XHRcdFx0XHRcdHRyYW5zaXRpb246IHtcblx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMC4zLFxuXHRcdFx0XHRcdFx0XHRcdGRlbGF5OiAwLjMsXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8aW1nIHNyYz1cIi90ZWV0aC5wbmdcIiAvPlxuXHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHQ8L21vdGlvbi5kaXY+XG5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVudTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/menu.js\n");

/***/ })

})