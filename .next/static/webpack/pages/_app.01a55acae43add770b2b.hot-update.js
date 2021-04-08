webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/menuPhone.js":
/*!*********************************!*\
  !*** ./components/menuPhone.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n\n\nvar _jsxFileName = \"/home/hamza/Desktop/portfolio/components/menuPhone.js\",\n    _this = undefined;\n\n\nvar variants = {\n  initial: {\n    opacity: 0\n  },\n  animation: {\n    opacity: 0.5,\n    transition: {\n      duration: 1\n    }\n  },\n  onHover: {\n    opacity: 1,\n    scale: 1.1,\n    transition: {\n      duration: 0.3,\n      type: 'spring',\n      bounce: 0.3\n    }\n  }\n};\n\nvar MenuPhone = function MenuPhone(_ref) {\n  var onDisplay = _ref.onDisplay,\n      setOnDisplay = _ref.setOnDisplay;\n\n  var selectTitle = function selectTitle(type) {\n    switch (type) {\n      case 2:\n        setOnDisplay(true, onDisplay.displayOff, 1);\n        break;\n\n      case 3:\n        {\n          setTimeout(function () {\n            setOnDisplay(false, onDisplay.displayOff, 2);\n          }, 500);\n          setOnDisplay(true, onDisplay.displayOff, -1);\n        }\n        break;\n\n      case 4:\n        setOnDisplay(true, onDisplay.displayOff, -1);\n        break;\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"md:hidden absolute top-full flex-col justify-center items-center h-full w-full\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n      className: \"absolute md:text-2xl lg:text-3xl border-white border-2 border-opacity-20 shadow-soft2glow text-center text-white font-black  flex flex-col justify-center items-center lg:h-100 md:h-80 lg:w-52 md:w-44 bg-gradient-to-b  bg-gray-500 to-gray-400 bg-opacity-5 rounded-b-full top-36 lg:pt-20 md:pt-12 \",\n      initial: {\n        opacity: 1,\n        y: 0,\n        scaleY: 0,\n        scaleX: 1,\n        originY: 0,\n        originX: \"50%\"\n      },\n      animate: onDisplay.type === 0 ? {\n        opacity: 1,\n        y: 0,\n        scaleY: [0.9, 1.03],\n        scaleX: [1, 1.03],\n        originY: 0,\n        originX: \"50%\",\n        transition: {\n          scaleX: {\n            duration: 1,\n            repeat: Infinity,\n            repeatType: 'reverse',\n            type: 'spring',\n            bounce: 0.4\n          },\n          scaleY: {\n            duration: 1,\n            repeat: Infinity,\n            repeatType: 'reverse',\n            type: 'spring',\n            bounce: 0.4\n          },\n          duration: 0.3,\n          delay: 0.2\n        }\n      } : {\n        opacity: 0,\n        y: 0,\n        scaleY: 0,\n        scaleX: 1,\n        originY: 0,\n        originX: \"50%\",\n        transition: {\n          duration: 0.3\n        }\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].h1, {\n        className: \" text-center lg:m-5 md:m-2 t cursor-pointer\",\n        variants: variants,\n        initial: \"initial\",\n        animate: \"animation\",\n        whileHover: \"onHover\",\n        onMouseDown: function onMouseDown() {\n          return selectTitle(2);\n        },\n        children: \"ABOUT ME\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].h1, {\n        className: \" lg:m-5 md:m-2  cursor-pointer\",\n        variants: variants,\n        initial: \"initial\",\n        animate: \"animation\",\n        whileHover: \"onHover\",\n        onMouseDown: function onMouseDown() {\n          return selectTitle(3);\n        },\n        children: \"MY PROJECTS\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].h1, {\n        className: \" lg:m-5 md:m-2  line-through cursor-pointer\",\n        variants: variants,\n        initial: \"initial\",\n        animate: \"animation\",\n        whileHover: \"onHover\",\n        onMouseDown: function onMouseDown() {\n          return selectTitle(4);\n        },\n        children: \"ART\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n      className: \"absolute lg:w-64 md:w-56 w-20 lg:top-36 md:top-28 top-12 opacity-70 overflow-hidden\",\n      initial: {\n        y: -100\n      },\n      animate: onDisplay.type === 0 ? {\n        scale: 1,\n        y: [2, 5, 4, 1],\n        transition: {\n          y: {\n            duration: 3,\n            yoyo: Infinity\n          },\n          duration: 0.3\n        }\n      } : {\n        scale: 0.9,\n        y: -100,\n        transition: {\n          duration: 0.3,\n          delay: 0.3\n        }\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: \"/teeth.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 128,\n        columnNumber: 5\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 4\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = MenuPhone;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MenuPhone);\n\nvar _c;\n\n$RefreshReg$(_c, \"MenuPhone\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZW51UGhvbmUuanM/Njc0ZSJdLCJuYW1lcyI6WyJ2YXJpYW50cyIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0aW9uIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwib25Ib3ZlciIsInNjYWxlIiwidHlwZSIsImJvdW5jZSIsIk1lbnVQaG9uZSIsIm9uRGlzcGxheSIsInNldE9uRGlzcGxheSIsInNlbGVjdFRpdGxlIiwiZGlzcGxheU9mZiIsInNldFRpbWVvdXQiLCJ5Iiwic2NhbGVZIiwic2NhbGVYIiwib3JpZ2luWSIsIm9yaWdpblgiLCJyZXBlYXQiLCJJbmZpbml0eSIsInJlcGVhdFR5cGUiLCJkZWxheSIsInlveW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsUUFBUSxHQUFHO0FBQ2hCQyxTQUFPLEVBQUU7QUFDUkMsV0FBTyxFQUFFO0FBREQsR0FETztBQUloQkMsV0FBUyxFQUFFO0FBQ1ZELFdBQU8sRUFBRSxHQURDO0FBRVZFLGNBQVUsRUFBRTtBQUNYQyxjQUFRLEVBQUU7QUFEQztBQUZGLEdBSks7QUFVaEJDLFNBQU8sRUFBRTtBQUNSSixXQUFPLEVBQUUsQ0FERDtBQUVSSyxTQUFLLEVBQUUsR0FGQztBQUdSSCxjQUFVLEVBQUU7QUFDWEMsY0FBUSxFQUFFLEdBREM7QUFFWEcsVUFBSSxFQUFFLFFBRks7QUFHWEMsWUFBTSxFQUFFO0FBSEc7QUFISjtBQVZPLENBQWpCOztBQXFCQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFpQztBQUFBLE1BQTlCQyxTQUE4QixRQUE5QkEsU0FBOEI7QUFBQSxNQUFuQkMsWUFBbUIsUUFBbkJBLFlBQW1COztBQUdsRCxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDTCxJQUFELEVBQVU7QUFDN0IsWUFBUUEsSUFBUjtBQUNDLFdBQUssQ0FBTDtBQUNDSSxvQkFBWSxDQUFDLElBQUQsRUFBT0QsU0FBUyxD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bGUiOiIuL2NvbXBvbmVudHMvbWVudVBob25lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcblxuY29uc3QgdmFyaWFudHMgPSB7XG5cdGluaXRpYWw6IHtcblx0XHRvcGFjaXR5OiAwLFxuXHR9LFxuXHRhbmltYXRpb246IHtcblx0XHRvcGFjaXR5OiAwLjUsXG5cdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0ZHVyYXRpb246IDFcblx0XHR9XG5cdH0sXG5cdG9uSG92ZXI6IHtcblx0XHRvcGFjaXR5OiAxLFxuXHRcdHNjYWxlOiAxLjEsXG5cdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0ZHVyYXRpb246IDAuMyxcblx0XHRcdHR5cGU6ICdzcHJpbmcnLFxuXHRcdFx0Ym91bmNlOiAwLjNcblx0XHR9XG5cdH1cbn1cblxuY29uc3QgTWVudVBob25lID0gKHsgb25EaXNwbGF5LCBzZXRPbkRpc3BsYXkgfSkgPT4ge1xuXG5cblx0Y29uc3Qgc2VsZWN0VGl0bGUgPSAodHlwZSkgPT4ge1xuXHRcdHN3aXRjaCAodHlwZSkge1xuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHRzZXRPbkRpc3BsYXkodHJ1ZSwgb25EaXNwbGF5LmRpc3BsYXlPZmYsIDEpXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7c2V0T25EaXNwbGF5KGZhbHNlLCBvbkRpc3BsYXkuZGlzcGxheU9mZiwgMik7fSwgNTAwKTtcblx0XHRcdFx0XHRzZXRPbkRpc3BsYXkodHJ1ZSwgb25EaXNwbGF5LmRpc3BsYXlPZmYsIC0xKTtcblxuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSA0OlxuXHRcdFx0XHRzZXRPbkRpc3BsYXkodHJ1ZSwgb25EaXNwbGF5LmRpc3BsYXlPZmYsIC0xKVxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxkaXZcblx0XHRcdGNsYXNzTmFtZT1cIm1kOmhpZGRlbiBhYnNvbHV0ZSB0b3AtZnVsbCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1mdWxsIHctZnVsbFwiXG5cdFx0PlxuXHRcdFx0PG1vdGlvbi5kaXZcblx0XHRcdFx0Y2xhc3NOYW1lPVwiYWJzb2x1dGUgbWQ6dGV4dC0yeGwgbGc6dGV4dC0zeGwgYm9yZGVyLXdoaXRlIGJvcmRlci0yIGJvcmRlci1vcGFjaXR5LTIwIHNoYWRvdy1zb2Z0Mmdsb3cgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZSBmb250LWJsYWNrICBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBsZzpoLTEwMCBtZDpoLTgwIGxnOnctNTIgbWQ6dy00NCBiZy1ncmFkaWVudC10by1iICBiZy1ncmF5LTUwMCB0by1ncmF5LTQwMCBiZy1vcGFjaXR5LTUgcm91bmRlZC1iLWZ1bGwgdG9wLTM2IGxnOnB0LTIwIG1kOnB0LTEyIFwiXG5cdFx0XHRcdGluaXRpYWw9e3tcblx0XHRcdFx0XHRvcGFjaXR5OiAxLFxuXHRcdFx0XHRcdHk6IDAsXG5cdFx0XHRcdFx0c2NhbGVZOiAwLFxuXHRcdFx0XHRcdHNjYWxlWDogMSxcblx0XHRcdFx0XHRvcmlnaW5ZOiAwLFxuXHRcdFx0XHRcdG9yaWdpblg6IFwiNTAlXCIsXG5cdFx0XHRcdH19XG5cdFx0XHRcdGFuaW1hdGU9e29uRGlzcGxheS50eXBlID09PSAwID8ge1xuXHRcdFx0XHRcdG9wYWNpdHk6IDEsXG5cdFx0XHRcdFx0eTogMCxcblx0XHRcdFx0XHRzY2FsZVk6IFswLjksIDEuMDNdLFxuXHRcdFx0XHRcdHNjYWxlWDogWzEsIDEuMDNdLFxuXHRcdFx0XHRcdG9yaWdpblk6IDAsXG5cdFx0XHRcdFx0b3JpZ2luWDogXCI1MCVcIixcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHRcdFx0XHRzY2FsZVg6IHsgZHVyYXRpb246IDEsIHJlcGVhdDogSW5maW5pdHksIHJlcGVhdFR5cGU6ICdyZXZlcnNlJywgdHlwZTogJ3NwcmluZycsIGJvdW5jZTogMC40LCB9LFxuXHRcdFx0XHRcdFx0c2NhbGVZOiB7IGR1cmF0aW9uOiAxLCByZXBlYXQ6IEluZmluaXR5LCByZXBlYXRUeXBlOiAncmV2ZXJzZScsIHR5cGU6ICdzcHJpbmcnLCBib3VuY2U6IDAuNCwgfSxcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiAwLjMsXG5cdFx0XHRcdFx0XHRkZWxheTogMC4yXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IDoge1xuXHRcdFx0XHRcdFx0b3BhY2l0eTogMCxcblx0XHRcdFx0XHRcdHk6IDAsXG5cdFx0XHRcdFx0XHRzY2FsZVk6IDAsXG5cdFx0XHRcdFx0XHRzY2FsZVg6IDEsXG5cdFx0XHRcdFx0XHRvcmlnaW5ZOiAwLFxuXHRcdFx0XHRcdFx0b3JpZ2luWDogXCI1MCVcIixcblx0XHRcdFx0XHRcdHRyYW5zaXRpb246IHtcblx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDAuMyxcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9fVxuXHRcdFx0PlxuXHRcdFx0XHQ8bW90aW9uLmgxIGNsYXNzTmFtZT1cIiB0ZXh0LWNlbnRlciBsZzptLTUgbWQ6bS0yIHQgY3Vyc29yLXBvaW50ZXJcIlxuXHRcdFx0XHRcdHZhcmlhbnRzPXt2YXJpYW50c31cblx0XHRcdFx0XHRpbml0aWFsPVwiaW5pdGlhbFwiXG5cdFx0XHRcdFx0YW5pbWF0ZT1cImFuaW1hdGlvblwiXG5cdFx0XHRcdFx0d2hpbGVIb3Zlcj1cIm9uSG92ZXJcIlxuXHRcdFx0XHRcdG9uTW91c2VEb3duPXsoKSA9PiBzZWxlY3RUaXRsZSgyKX1cblxuXHRcdFx0XHQ+QUJPVVQgTUU8L21vdGlvbi5oMT5cblx0XHRcdFx0PG1vdGlvbi5oMSBjbGFzc05hbWU9XCIgbGc6bS01IG1kOm0tMiAgY3Vyc29yLXBvaW50ZXJcIlxuXHRcdFx0XHRcdHZhcmlhbnRzPXt2YXJpYW50c31cblx0XHRcdFx0XHRpbml0aWFsPVwiaW5pdGlhbFwiXG5cdFx0XHRcdFx0YW5pbWF0ZT1cImFuaW1hdGlvblwiXG5cdFx0XHRcdFx0d2hpbGVIb3Zlcj1cIm9uSG92ZXJcIlxuXHRcdFx0XHRcdG9uTW91c2VEb3duPXsoKSA9PiBzZWxlY3RUaXRsZSgzKX1cblx0XHRcdFx0Pk1ZIFBST0pFQ1RTPC9tb3Rpb24uaDE+XG5cdFx0XHRcdDxtb3Rpb24uaDEgY2xhc3NOYW1lPVwiIGxnOm0tNSBtZDptLTIgIGxpbmUtdGhyb3VnaCBjdXJzb3ItcG9pbnRlclwiXG5cdFx0XHRcdFx0dmFyaWFudHM9e3ZhcmlhbnRzfVxuXHRcdFx0XHRcdGluaXRpYWw9XCJpbml0aWFsXCJcblx0XHRcdFx0XHRhbmltYXRlPVwiYW5pbWF0aW9uXCJcblx0XHRcdFx0XHR3aGlsZUhvdmVyPVwib25Ib3ZlclwiXG5cdFx0XHRcdFx0b25Nb3VzZURvd249eygpID0+IHNlbGVjdFRpdGxlKDQpfVxuXHRcdFx0XHQ+QVJUPC9tb3Rpb24uaDE+XG5cdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0XHRjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZzp3LTY0IG1kOnctNTYgdy0yMCBsZzp0b3AtMzYgbWQ6dG9wLTI4IHRvcC0xMiBvcGFjaXR5LTcwIG92ZXJmbG93LWhpZGRlblwiXG5cdFx0XHRcdGluaXRpYWw9e3tcblx0XHRcdFx0XHR5OiAtMTAwLFxuXHRcdFx0XHR9fVxuXHRcdFx0XHRhbmltYXRlPXtvbkRpc3BsYXkudHlwZSA9PT0gMCA/IHtcblx0XHRcdFx0XHRzY2FsZTogMSxcblx0XHRcdFx0XHR5OiBbMiwgNSwgNCwgMV0sXG5cdFx0XHRcdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0XHRcdFx0eTogeyBkdXJhdGlvbjogMywgeW95bzogSW5maW5pdHkgfSxcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiAwLjMsXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IDoge1xuXHRcdFx0XHRcdFx0c2NhbGU6IDAuOSxcblx0XHRcdFx0XHRcdHk6IC0xMDAsXG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAwLjMsXG5cdFx0XHRcdFx0XHRcdGRlbGF5OiAwLjMsXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fX1cblx0XHRcdD5cblx0XHRcdFx0PGltZyBzcmM9XCIvdGVldGgucG5nXCIgLz5cblx0XHRcdDwvbW90aW9uLmRpdj5cblxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNZW51UGhvbmU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/menuPhone.js\n");

/***/ })

})