webpackHotUpdate_N_E("pages/index",{

/***/ "./components/menu.js":
/*!****************************!*\
  !*** ./components/menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n\n\nvar _jsxFileName = \"/home/hamza/Desktop/portfolio/components/menu.js\",\n    _this = undefined;\n\n\nvar variants = {\n  initial: {\n    opacity: 0\n  },\n  animation: {\n    opacity: 1,\n    transition: {\n      duration: 1\n    }\n  },\n  onHover: {\n    scale: 1.2,\n    transition: {\n      duration: 0.5,\n      type: 'spring',\n      bounce: 0.5\n    }\n  }\n};\n\nvar Menu = function Menu(_ref) {\n  var onDisplay = _ref.onDisplay;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"absolute flex flex-col justify-center items-center h-full w-full\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n      className: \"absolute text-center text-white font-black  flex flex-col justify-end items-center h-100 w-48 bg-gradient-to-b  bg-gray-500 to-gray-400 bg-opacity-5 rounded-b-full top-36 pb-11\",\n      initial: {\n        opacity: 1,\n        y: 0,\n        scaleY: 0,\n        scaleX: 1,\n        originY: 0,\n        originX: \"50%\"\n      },\n      animate: onDisplay.type === 0 ? {\n        opacity: 1,\n        y: 0,\n        scaleY: [0.9, 1],\n        scaleX: [1, 1.01],\n        originY: 0,\n        originX: \"50%\",\n        transition: {\n          scaleX: {\n            duration: 0.8,\n            repeat: Infinity,\n            repeatType: 'reverse',\n            type: 'spring',\n            bounce: 0.4\n          },\n          scaleY: {\n            duration: 0.8,\n            repeat: Infinity,\n            repeatType: 'reverse',\n            type: 'spring',\n            bounce: 0.4\n          },\n          duration: 0.4,\n          delay: 0.3\n        }\n      } : {\n        opacity: 0,\n        y: 0,\n        scaleY: 0,\n        scaleX: 1,\n        originY: 0,\n        originX: \"50%\",\n        transition: {\n          duration: 0.4\n        }\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].h1, {\n        className: \" text-center m-5 text-2xl cursor-pointer\",\n        initial: \"initial\",\n        animate: \"animation\",\n        whileHover: \"onHover\",\n        variants: variants,\n        children: \"ABOUT ME\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].h1, {\n        className: \" m-5 text-2xl cursor-pointer\",\n        initial: \"initial\",\n        animate: \"animation\",\n        whileHover: \"onHover\",\n        variants: variants,\n        children: \"MY PROJECTS\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 5\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].h1, {\n        className: \" m-5 text-2xl line-through cursor-pointer\",\n        initial: \"initial\",\n        animate: \"animation\",\n        whileHover: \"onHover\",\n        variants: variants,\n        children: \"ART\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 5\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 4\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n      className: \"absolute w-64 top-36 opacity-50 overflow-hidden\",\n      initial: {\n        y: -10\n      },\n      animate: onDisplay.type === 0 ? {\n        scale: 1,\n        y: 0,\n        transition: {\n          duration: 0.4\n        }\n      } : {\n        scale: 0.9,\n        y: -100,\n        transition: {\n          duration: 0.4,\n          delay: 0.5\n        }\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: \"/teeth.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 5\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 4\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = Menu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\n\nvar _c;\n\n$RefreshReg$(_c, \"Menu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZW51LmpzPzQ1MmEiXSwibmFtZXMiOlsidmFyaWFudHMiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGlvbiIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsIm9uSG92ZXIiLCJzY2FsZSIsInR5cGUiLCJib3VuY2UiLCJNZW51Iiwib25EaXNwbGF5IiwieSIsInNjYWxlWSIsInNjYWxlWCIsIm9yaWdpblkiLCJvcmlnaW5YIiwicmVwZWF0IiwiSW5maW5pdHkiLCJyZXBlYXRUeXBlIiwiZGVsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsUUFBUSxHQUFHO0FBQ2hCQyxTQUFPLEVBQUc7QUFDVEMsV0FBTyxFQUFHO0FBREQsR0FETTtBQUloQkMsV0FBUyxFQUFHO0FBQ1hELFdBQU8sRUFBRyxDQURDO0FBRVhFLGNBQVUsRUFBRztBQUNaQyxjQUFRLEVBQUc7QUFEQztBQUZGLEdBSkk7QUFVaEJDLFNBQU8sRUFBRztBQUNUQyxTQUFLLEVBQUcsR0FEQztBQUVUSCxjQUFVLEVBQUc7QUFDWkMsY0FBUSxFQUFHLEdBREM7QUFFWkcsVUFBSSxFQUFHLFFBRks7QUFHWkMsWUFBTSxFQUFHO0FBSEc7QUFGSjtBQVZNLENBQWpCOztBQW9CQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFxQjtBQUFBLE1BQWpCQyxTQUFpQixRQUFqQkEsU0FBaUI7QUFDakMsc0JBQ0M7QUFDQyxhQUFTLEVBQUMsa0VBRFg7QUFBQSw0QkFHQyxxRUFBQyxvREFBRCxDQUFRLEdBQVI7QUFDQyxlQUFTLEVBQUMsa0xBRFg7QUFFQyxhQUFPLEVBQUU7QUFDUlQsZUFBTyxFQUFFLENBREQ7QUFFUlUsU0FBQyxFQUFFLENBRks7QUFHUkMsY0FBTSxFQUFFLENBSEE7QUFJUkMsY0FBTSxFQUFFLENBSkE7QUFLUkMsZUFBTyxFQUFFLENBTEQ7QUFNUkMsZUFBTyxFQUFFO0FBTkQsT0FGVjtBQVVDLGFBQU8sRUFBRUwsU0FBUyxDQUFDSCxJQUFWLEtBQW1CLENBQW5CLEdBQXVCO0FBQy9CTixlQUFPLEVBQUUsQ0FEc0I7QUFFL0JVLFNBQUMsRUFBRSxDQUY0QjtBQUcvQkMsY0FBTSxFQUFFLENBQUMsR0FBRCxFQUFNLENBQU4sQ0FIdUI7QUFJL0JDLGNBQU0sRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLENBSnVCO0FBSy9CQyxlQUFPLEVBQUUsQ0FMc0I7QUFNL0JDLGVBQU8sRUFBRSxLQU5zQjtBQU8vQlosa0JBQVUsRUFBRTtBQUNYVSxnQkFBTSxFQUFFO0FBQUVULG9CQUFRLEVBQUUsR0FBWjtBQUFpQlksa0JBQU0sRUFBRUMsUUFBekI7QUFBbUNDLHNCQUFVLEVBQUUsU0FBL0M7QUFBMERYLGdCQUFJLEVBQUUsUUFBaEU7QUFBMEVDLGtCQUFNLEVBQUU7QUFBbEYsV0FERztBQUVYSSxnQkFBTSxFQUFFO0FBQUVSLG9CQUFRLEVBQUUsR0FBWjtBQUFpQlksa0JBQU0sRUFBRUMsUUFBekI7QUFBbUNDLHNCQUFVLEVBQUUsU0FBL0M7QUFBMERYLGdCQUFJLEVBQUUsUUFBaEU7QUFBMEVDLGtCQUFNLEVBQUU7QUFBbEYsV0FGRztBQUdYSixrQkFBUSxFQUFFLEdBSEM7QUFJWGUsZUFBSyxFQUFFO0FBSkk7QUFQbUIsT0FBdkIsR0FhTDtBQUNGbEIsZUFBTyxFQUFFLENBRFA7QUFFRlUsU0FBQyxFQUFFLENBRkQ7QUFHRkMsY0FBTSxFQUFFLENBSE47QUFJRkMsY0FBTSxFQUFFLENBSk47QUFLRkMsZUFBTyxFQUFFLENBTFA7QUFNRkMsZUFBTyxFQUFFLEtBTlA7QUFPRlosa0JBQVUsRUFBRTtBQUNYQyxrQkFBUSxFQUFFO0FBREM7QUFQVixPQXZCTDtBQUFBLDhCQW9DQyxxRUFBQyxvREFBRCxDQUFRLEVBQVI7QUFBVyxpQkFBUyxFQUFDLDBDQUFyQjtBQUNDLGVBQU8sRUFBQyxTQURUO0FBRUMsZUFBTyxFQUFDLFdBRlQ7QUFHQyxrQkFBVSxFQUFDLFNBSFo7QUFJQyxnQkFBUSxFQUFFTCxRQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBcENELGVBMENDLHFFQUFDLG9EQUFELENBQVEsRUFBUjtBQUFXLGlCQUFTLEVBQUMsOEJBQXJCO0FBQ0MsZUFBTyxFQUFDLFNBRFQ7QUFFQyxlQUFPLEVBQUMsV0FGVDtBQUdDLGtCQUFVLEVBQUMsU0FIWjtBQUlDLGdCQUFRLEVBQUVBLFFBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUExQ0QsZUFnREMscUVBQUMsb0RBQUQsQ0FBUSxFQUFSO0FBQVcsaUJBQVMsRUFBQywyQ0FBckI7QUFDQyxlQUFPLEVBQUMsU0FEVDtBQUVDLGVBQU8sRUFBQyxXQUZUO0FBR0Msa0JBQVUsRUFBQyxTQUhaO0FBSUMsZ0JBQVEsRUFBRUEsUUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWhERDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRCxlQTBEQyxxRUFBQyxvREFBRCxDQUFRLEdBQVI7QUFDQyxlQUFTLEVBQUMsaURBRFg7QUFFQyxhQUFPLEVBQUU7QUFDUlksU0FBQyxFQUFFLENBQUM7QUFESSxPQUZWO0FBS0MsYUFBTyxFQUFFRCxTQUFTLENBQUNILElBQVYsS0FBbUIsQ0FBbkIsR0FBdUI7QUFDL0JELGFBQUssRUFBRSxDQUR3QjtBQUUvQkssU0FBQyxFQUFFLENBRjRCO0FBRy9CUixrQkFBVSxFQUFFO0FBQ1hDLGtCQUFRLEVBQUU7QUFEQztBQUhtQixPQUF2QixHQU1MO0FBQ0ZFLGFBQUssRUFBRSxHQURMO0FBRUZLLFNBQUMsRUFBRSxDQUFDLEdBRkY7QUFHRlIsa0JBQVUsRUFBRTtBQUNYQyxrQkFBUSxFQUFFLEdBREM7QUFFWGUsZUFBSyxFQUFFO0FBRkk7QUFIVixPQVhMO0FBQUEsNkJBb0JDO0FBQUssV0FBRyxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXBCRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBMUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBb0ZBLENBckZEOztLQUFNVixJO0FBdUZTQSxtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbWVudS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5cbmNvbnN0IHZhcmlhbnRzID0ge1xuXHRpbml0aWFsIDoge1xuXHRcdG9wYWNpdHkgOiAwLFxuXHR9LFxuXHRhbmltYXRpb24gOiB7XG5cdFx0b3BhY2l0eSA6IDEsXG5cdFx0dHJhbnNpdGlvbiA6IHtcblx0XHRcdGR1cmF0aW9uIDogMVxuXHRcdH1cblx0fSxcblx0b25Ib3ZlciA6IHtcblx0XHRzY2FsZSA6IDEuMixcblx0XHR0cmFuc2l0aW9uIDoge1xuXHRcdFx0ZHVyYXRpb24gOiAwLjUsXG5cdFx0XHR0eXBlIDogJ3NwcmluZycsXG5cdFx0XHRib3VuY2UgOiAwLjVcblx0XHR9XG5cdH1cbn1cblxuY29uc3QgTWVudSA9ICggeyBvbkRpc3BsYXkgfSApID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2XG5cdFx0XHRjbGFzc05hbWU9XCJhYnNvbHV0ZSBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLWZ1bGwgdy1mdWxsXCJcblx0XHQ+XG5cdFx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0XHRjbGFzc05hbWU9XCJhYnNvbHV0ZSB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlIGZvbnQtYmxhY2sgIGZsZXggZmxleC1jb2wganVzdGlmeS1lbmQgaXRlbXMtY2VudGVyIGgtMTAwIHctNDggYmctZ3JhZGllbnQtdG8tYiAgYmctZ3JheS01MDAgdG8tZ3JheS00MDAgYmctb3BhY2l0eS01IHJvdW5kZWQtYi1mdWxsIHRvcC0zNiBwYi0xMVwiXG5cdFx0XHRcdGluaXRpYWw9e3tcblx0XHRcdFx0XHRvcGFjaXR5OiAxLFxuXHRcdFx0XHRcdHk6IDAsXG5cdFx0XHRcdFx0c2NhbGVZOiAwLFxuXHRcdFx0XHRcdHNjYWxlWDogMSxcblx0XHRcdFx0XHRvcmlnaW5ZOiAwLFxuXHRcdFx0XHRcdG9yaWdpblg6IFwiNTAlXCIsXG5cdFx0XHRcdH19XG5cdFx0XHRcdGFuaW1hdGU9e29uRGlzcGxheS50eXBlID09PSAwID8ge1xuXHRcdFx0XHRcdG9wYWNpdHk6IDEsXG5cdFx0XHRcdFx0eTogMCxcblx0XHRcdFx0XHRzY2FsZVk6IFswLjksIDFdLFxuXHRcdFx0XHRcdHNjYWxlWDogWzEsIDEuMDFdLFxuXHRcdFx0XHRcdG9yaWdpblk6IDAsXG5cdFx0XHRcdFx0b3JpZ2luWDogXCI1MCVcIixcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHRcdFx0XHRzY2FsZVg6IHsgZHVyYXRpb246IDAuOCwgcmVwZWF0OiBJbmZpbml0eSwgcmVwZWF0VHlwZTogJ3JldmVyc2UnLCB0eXBlOiAnc3ByaW5nJywgYm91bmNlOiAwLjQsIH0sXG5cdFx0XHRcdFx0XHRzY2FsZVk6IHsgZHVyYXRpb246IDAuOCwgcmVwZWF0OiBJbmZpbml0eSwgcmVwZWF0VHlwZTogJ3JldmVyc2UnLCB0eXBlOiAnc3ByaW5nJywgYm91bmNlOiAwLjQsIH0sXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogMC40LFxuXHRcdFx0XHRcdFx0ZGVsYXk6IDAuM1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSA6IHtcblx0XHRcdFx0XHRcdG9wYWNpdHk6IDAsXG5cdFx0XHRcdFx0XHR5OiAwLFxuXHRcdFx0XHRcdFx0c2NhbGVZOiAwLFxuXHRcdFx0XHRcdFx0c2NhbGVYOiAxLFxuXHRcdFx0XHRcdFx0b3JpZ2luWTogMCxcblx0XHRcdFx0XHRcdG9yaWdpblg6IFwiNTAlXCIsXG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAwLjQsXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fX1cblxuXHRcdFx0PlxuXHRcdFx0XHQ8bW90aW9uLmgxIGNsYXNzTmFtZT1cIiB0ZXh0LWNlbnRlciBtLTUgdGV4dC0yeGwgY3Vyc29yLXBvaW50ZXJcIlxuXHRcdFx0XHRcdGluaXRpYWw9XCJpbml0aWFsXCJcblx0XHRcdFx0XHRhbmltYXRlPVwiYW5pbWF0aW9uXCJcblx0XHRcdFx0XHR3aGlsZUhvdmVyPVwib25Ib3ZlclwiXG5cdFx0XHRcdFx0dmFyaWFudHM9e3ZhcmlhbnRzfVxuXHRcdFx0XHQ+QUJPVVQgTUU8L21vdGlvbi5oMT5cblx0XHRcdFx0PG1vdGlvbi5oMSBjbGFzc05hbWU9XCIgbS01IHRleHQtMnhsIGN1cnNvci1wb2ludGVyXCJcblx0XHRcdFx0XHRpbml0aWFsPVwiaW5pdGlhbFwiXG5cdFx0XHRcdFx0YW5pbWF0ZT1cImFuaW1hdGlvblwiXG5cdFx0XHRcdFx0d2hpbGVIb3Zlcj1cIm9uSG92ZXJcIlxuXHRcdFx0XHRcdHZhcmlhbnRzPXt2YXJpYW50c31cblx0XHRcdFx0Pk1ZIFBST0pFQ1RTPC9tb3Rpb24uaDE+XG5cdFx0XHRcdDxtb3Rpb24uaDEgY2xhc3NOYW1lPVwiIG0tNSB0ZXh0LTJ4bCBsaW5lLXRocm91Z2ggY3Vyc29yLXBvaW50ZXJcIlxuXHRcdFx0XHRcdGluaXRpYWw9XCJpbml0aWFsXCJcblx0XHRcdFx0XHRhbmltYXRlPVwiYW5pbWF0aW9uXCJcblx0XHRcdFx0XHR3aGlsZUhvdmVyPVwib25Ib3ZlclwiXG5cdFx0XHRcdFx0dmFyaWFudHM9e3ZhcmlhbnRzfVxuXHRcdFx0XHQ+QVJUPC9tb3Rpb24uaDE+XG5cdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0XHRjbGFzc05hbWU9XCJhYnNvbHV0ZSB3LTY0IHRvcC0zNiBvcGFjaXR5LTUwIG92ZXJmbG93LWhpZGRlblwiXG5cdFx0XHRcdGluaXRpYWw9e3tcblx0XHRcdFx0XHR5OiAtMTAsXG5cdFx0XHRcdH19XG5cdFx0XHRcdGFuaW1hdGU9e29uRGlzcGxheS50eXBlID09PSAwID8ge1xuXHRcdFx0XHRcdHNjYWxlOiAxLFxuXHRcdFx0XHRcdHk6IDAsXG5cdFx0XHRcdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDAuNCxcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gOiB7XG5cdFx0XHRcdFx0XHRzY2FsZTogMC45LFxuXHRcdFx0XHRcdFx0eTogLTEwMCxcblx0XHRcdFx0XHRcdHRyYW5zaXRpb246IHtcblx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDAuNCxcblx0XHRcdFx0XHRcdFx0ZGVsYXk6IDAuNSxcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9fVxuXHRcdFx0PlxuXHRcdFx0XHQ8aW1nIHNyYz1cIi90ZWV0aC5wbmdcIiAvPlxuXHRcdFx0PC9tb3Rpb24uZGl2PlxuXG5cdFx0PC9kaXY+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnU7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/menu.js\n");

/***/ })

})