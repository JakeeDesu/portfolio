webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/menu.js":
/*!****************************!*\
  !*** ./components/menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n\n\nvar _jsxFileName = \"/home/hamza/Desktop/portfolio/components/menu.js\",\n    _this = undefined;\n\n\nvar variants = {\n  initial: {\n    opacity: 0\n  },\n  animation: {\n    opacity: 1,\n    transition: {\n      duration: 1\n    }\n  },\n  hover: {\n    scale: 1.2,\n    transition: {\n      duration: 0.3,\n      type: 'spring',\n      bounce: 0.5\n    }\n  }\n};\n\nvar Menu = function Menu(_ref) {\n  var onDisplay = _ref.onDisplay;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"absolute flex flex-col justify-center items-center h-full w-full\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n      className: \"absolute text-center text-white font-black  flex flex-col justify-end items-center h-100 w-48 bg-gradient-to-b  bg-gray-500 to-gray-400 bg-opacity-5 rounded-b-full top-36 pb-11\",\n      initial: {\n        opacity: 1,\n        y: 0,\n        scaleY: 0,\n        scaleX: 1,\n        originY: 0,\n        originX: \"50%\"\n      },\n      animate: onDisplay.type === 0 ? {\n        opacity: 1,\n        y: 0,\n        scaleY: [0.9, 1],\n        scaleX: [1, 1.01],\n        originY: 0,\n        originX: \"50%\",\n        transition: {\n          scaleX: {\n            duration: 0.8,\n            repeat: Infinity,\n            repeatType: 'reverse',\n            type: 'spring',\n            bounce: 0.4\n          },\n          scaleY: {\n            duration: 0.8,\n            repeat: Infinity,\n            repeatType: 'reverse',\n            type: 'spring',\n            bounce: 0.4\n          },\n          duration: 0.4,\n          delay: 0.3\n        }\n      } : {\n        opacity: 0,\n        y: 0,\n        scaleY: 0,\n        scaleX: 1,\n        originY: 0,\n        originX: \"50%\",\n        transition: {\n          duration: 0.4\n        }\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].h1, {\n        className: \" text-center m-5 text-2xl cursor-pointer\",\n        initial: \"initial\",\n        animate: \"animation\",\n        variants: variants,\n        onHover: \"onHover\",\n        children: \"ABOUT ME\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].h1, {\n        className: \" m-5 text-2xl cursor-pointer\",\n        initial: \"initial\",\n        animate: \"animation\",\n        variants: variants,\n        children: \"MY PROJECTS\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].h1, {\n        className: \" m-5 text-2xl line-through cursor-pointer\",\n        initial: \"initial\",\n        animate: \"animation\",\n        variants: variants,\n        children: \"ART\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n      className: \"absolute w-64 top-36 opacity-50 overflow-hidden\",\n      initial: {\n        y: -10\n      },\n      animate: onDisplay.type === 0 ? {\n        scale: 1,\n        y: 0,\n        transition: {\n          duration: 0.4\n        }\n      } : {\n        scale: 0.9,\n        y: -100,\n        transition: {\n          duration: 0.4,\n          delay: 0.5\n        }\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: \"/teeth.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 5\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 4\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = Menu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\n\nvar _c;\n\n$RefreshReg$(_c, \"Menu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZW51LmpzPzQ1MmEiXSwibmFtZXMiOlsidmFyaWFudHMiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGlvbiIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImhvdmVyIiwic2NhbGUiLCJ0eXBlIiwiYm91bmNlIiwiTWVudSIsIm9uRGlzcGxheSIsInkiLCJzY2FsZVkiLCJzY2FsZVgiLCJvcmlnaW5ZIiwib3JpZ2luWCIsInJlcGVhdCIsIkluZmluaXR5IiwicmVwZWF0VHlwZSIsImRlbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLFFBQVEsR0FBRztBQUNoQkMsU0FBTyxFQUFHO0FBQ1RDLFdBQU8sRUFBRztBQURELEdBRE07QUFJaEJDLFdBQVMsRUFBRztBQUNYRCxXQUFPLEVBQUcsQ0FEQztBQUVYRSxjQUFVLEVBQUc7QUFDWkMsY0FBUSxFQUFHO0FBREM7QUFGRixHQUpJO0FBVWhCQyxPQUFLLEVBQUc7QUFDUEMsU0FBSyxFQUFHLEdBREQ7QUFFUEgsY0FBVSxFQUFHO0FBQ1pDLGNBQVEsRUFBRyxHQURDO0FBRVpHLFVBQUksRUFBRyxRQUZLO0FBR1pDLFlBQU0sRUFBRztBQUhHO0FBRk47QUFWUSxDQUFqQjs7QUFvQkEsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FBcUI7QUFBQSxNQUFqQkMsU0FBaUIsUUFBakJBLFNBQWlCO0FBQ2pDLHNCQUNDO0FBQ0MsYUFBUyxFQUFDLGtFQURYO0FBQUEsNEJBR0MscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0MsZUFBUyxFQUFDLGtMQURYO0FBRUMsYUFBTyxFQUFFO0FBQ1JULGVBQU8sRUFBRSxDQUREO0FBRVJVLFNBQUMsRUFBRSxDQUZLO0FBR1JDLGNBQU0sRUFBRSxDQUhBO0FBSVJDLGNBQU0sRUFBRSxDQUpBO0FBS1JDLGVBQU8sRUFBRSxDQUxEO0FBTVJDLGVBQU8sRUFBRTtBQU5ELE9BRlY7QUFVQyxhQUFP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cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5cbmNvbnN0IHZhcmlhbnRzID0ge1xuXHRpbml0aWFsIDoge1xuXHRcdG9wYWNpdHkgOiAwLFxuXHR9LFxuXHRhbmltYXRpb24gOiB7XG5cdFx0b3BhY2l0eSA6IDEsXG5cdFx0dHJhbnNpdGlvbiA6IHtcblx0XHRcdGR1cmF0aW9uIDogMVxuXHRcdH1cblx0fSxcblx0aG92ZXIgOiB7XG5cdFx0c2NhbGUgOiAxLjIsXG5cdFx0dHJhbnNpdGlvbiA6IHtcblx0XHRcdGR1cmF0aW9uIDogMC4zLFxuXHRcdFx0dHlwZSA6ICdzcHJpbmcnLFxuXHRcdFx0Ym91bmNlIDogMC41XG5cdFx0fVxuXHR9XG59XG5cbmNvbnN0IE1lbnUgPSAoIHsgb25EaXNwbGF5IH0gKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGRpdlxuXHRcdFx0Y2xhc3NOYW1lPVwiYWJzb2x1dGUgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1mdWxsIHctZnVsbFwiXG5cdFx0PlxuXHRcdFx0PG1vdGlvbi5kaXZcblx0XHRcdFx0Y2xhc3NOYW1lPVwiYWJzb2x1dGUgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZSBmb250LWJsYWNrICBmbGV4IGZsZXgtY29sIGp1c3RpZnktZW5kIGl0ZW1zLWNlbnRlciBoLTEwMCB3LTQ4IGJnLWdyYWRpZW50LXRvLWIgIGJnLWdyYXktNTAwIHRvLWdyYXktNDAwIGJnLW9wYWNpdHktNSByb3VuZGVkLWItZnVsbCB0b3AtMzYgcGItMTFcIlxuXHRcdFx0XHRpbml0aWFsPXt7XG5cdFx0XHRcdFx0b3BhY2l0eTogMSxcblx0XHRcdFx0XHR5OiAwLFxuXHRcdFx0XHRcdHNjYWxlWTogMCxcblx0XHRcdFx0XHRzY2FsZVg6IDEsXG5cdFx0XHRcdFx0b3JpZ2luWTogMCxcblx0XHRcdFx0XHRvcmlnaW5YOiBcIjUwJVwiLFxuXHRcdFx0XHR9fVxuXHRcdFx0XHRhbmltYXRlPXtvbkRpc3BsYXkudHlwZSA9PT0gMCA/IHtcblx0XHRcdFx0XHRvcGFjaXR5OiAxLFxuXHRcdFx0XHRcdHk6IDAsXG5cdFx0XHRcdFx0c2NhbGVZOiBbMC45LCAxXSxcblx0XHRcdFx0XHRzY2FsZVg6IFsxLCAxLjAxXSxcblx0XHRcdFx0XHRvcmlnaW5ZOiAwLFxuXHRcdFx0XHRcdG9yaWdpblg6IFwiNTAlXCIsXG5cdFx0XHRcdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0XHRcdFx0c2NhbGVYOiB7IGR1cmF0aW9uOiAwLjgsIHJlcGVhdDogSW5maW5pdHksIHJlcGVhdFR5cGU6ICdyZXZlcnNlJywgdHlwZTogJ3NwcmluZycsIGJvdW5jZTogMC40LCB9LFxuXHRcdFx0XHRcdFx0c2NhbGVZOiB7IGR1cmF0aW9uOiAwLjgsIHJlcGVhdDogSW5maW5pdHksIHJlcGVhdFR5cGU6ICdyZXZlcnNlJywgdHlwZTogJ3NwcmluZycsIGJvdW5jZTogMC40LCB9LFxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDAuNCxcblx0XHRcdFx0XHRcdGRlbGF5OiAwLjNcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gOiB7XG5cdFx0XHRcdFx0XHRvcGFjaXR5OiAwLFxuXHRcdFx0XHRcdFx0eTogMCxcblx0XHRcdFx0XHRcdHNjYWxlWTogMCxcblx0XHRcdFx0XHRcdHNjYWxlWDogMSxcblx0XHRcdFx0XHRcdG9yaWdpblk6IDAsXG5cdFx0XHRcdFx0XHRvcmlnaW5YOiBcIjUwJVwiLFxuXHRcdFx0XHRcdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMC40LFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH19XG5cblx0XHRcdD5cblx0XHRcdFx0PG1vdGlvbi5oMSBjbGFzc05hbWU9XCIgdGV4dC1jZW50ZXIgbS01IHRleHQtMnhsIGN1cnNvci1wb2ludGVyXCJcblx0XHRcdFx0XHRpbml0aWFsPVwiaW5pdGlhbFwiXG5cdFx0XHRcdFx0YW5pbWF0ZT1cImFuaW1hdGlvblwiXG5cdFx0XHRcdFx0dmFyaWFudHM9e3ZhcmlhbnRzfVxuXHRcdFx0XHRcdG9uSG92ZXI9XCJvbkhvdmVyXCJcblx0XHRcdFx0PkFCT1VUIE1FPC9tb3Rpb24uaDE+XG5cdFx0XHRcdDxtb3Rpb24uaDEgY2xhc3NOYW1lPVwiIG0tNSB0ZXh0LTJ4bCBjdXJzb3ItcG9pbnRlclwiXG5cdFx0XHRcdFx0aW5pdGlhbD1cImluaXRpYWxcIlxuXHRcdFx0XHRcdGFuaW1hdGU9XCJhbmltYXRpb25cIlxuXHRcdFx0XHRcdHZhcmlhbnRzPXt2YXJpYW50c31cblx0XHRcdFx0Pk1ZIFBST0pFQ1RTPC9tb3Rpb24uaDE+XG5cdFx0XHRcdDxtb3Rpb24uaDEgY2xhc3NOYW1lPVwiIG0tNSB0ZXh0LTJ4bCBsaW5lLXRocm91Z2ggY3Vyc29yLXBvaW50ZXJcIlxuXHRcdFx0XHRcdGluaXRpYWw9XCJpbml0aWFsXCJcblx0XHRcdFx0XHRhbmltYXRlPVwiYW5pbWF0aW9uXCJcblx0XHRcdFx0XHR2YXJpYW50cz17dmFyaWFudHN9XG5cdFx0XHRcdD5BUlQ8L21vdGlvbi5oMT5cblx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRcdGNsYXNzTmFtZT1cImFic29sdXRlIHctNjQgdG9wLTM2IG9wYWNpdHktNTAgb3ZlcmZsb3ctaGlkZGVuXCJcblx0XHRcdFx0aW5pdGlhbD17e1xuXHRcdFx0XHRcdHk6IC0xMCxcblx0XHRcdFx0fX1cblx0XHRcdFx0YW5pbWF0ZT17b25EaXNwbGF5LnR5cGUgPT09IDAgPyB7XG5cdFx0XHRcdFx0c2NhbGU6IDEsXG5cdFx0XHRcdFx0eTogMCxcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogMC40LFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSA6IHtcblx0XHRcdFx0XHRcdHNjYWxlOiAwLjksXG5cdFx0XHRcdFx0XHR5OiAtMTAwLFxuXHRcdFx0XHRcdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMC40LFxuXHRcdFx0XHRcdFx0XHRkZWxheTogMC41LFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH19XG5cdFx0XHQ+XG5cdFx0XHRcdDxpbWcgc3JjPVwiL3RlZXRoLnBuZ1wiIC8+XG5cdFx0XHQ8L21vdGlvbi5kaXY+XG5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVudTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/menu.js\n");

/***/ })

})