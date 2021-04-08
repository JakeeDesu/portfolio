webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/menuPhone.js":
/*!*********************************!*\
  !*** ./components/menuPhone.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n\n\nvar _jsxFileName = \"/home/hamza/Desktop/portfolio/components/menuPhone.js\",\n    _this = undefined;\n\n\nvar variants = {\n  initial: {\n    opacity: 0\n  },\n  animation: {\n    opacity: 0.5,\n    transition: {\n      duration: 1\n    }\n  },\n  onHover: {\n    opacity: 1,\n    scale: 1.1,\n    transition: {\n      duration: 0.3,\n      type: 'spring',\n      bounce: 0.3\n    }\n  }\n};\n\nvar MenuPhone = function MenuPhone(_ref) {\n  var onDisplay = _ref.onDisplay,\n      setOnDisplay = _ref.setOnDisplay;\n\n  var selectTitle = function selectTitle(type) {\n    switch (type) {\n      case 2:\n        setOnDisplay(true, onDisplay.displayOff, 1);\n        break;\n\n      case 3:\n        {\n          setTimeout(function () {\n            setOnDisplay(false, onDisplay.displayOff, 2);\n          }, 500);\n          setOnDisplay(true, onDisplay.displayOff, -1);\n        }\n        break;\n\n      case 4:\n        setOnDisplay(true, onDisplay.displayOff, -1);\n        break;\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"md:hidden absolute top-full flex-col justify-center items-center w-full \",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"AnimatePresence\"], {\n      children: onDisplay.displayState && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n        className: \"relative text-white text-xl flex flex-col justify-evenly items-center rounded-lg bg-gray-500 bg-opacity-50 h-half w-full px-4\",\n        initial: {\n          opacity: 0\n        },\n        animate: onDisplay.type === 0 ? {\n          opacity: 1\n        } : {\n          opacity: 0\n        },\n        exit: {\n          opacity: 0\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"flex justify-center items-center text-white text-center align-middle object-center cursor-pointer w-full h-1/4 bg-black\",\n          onMouseDown: function onMouseDown() {\n            return selectTitle(2);\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n            children: \"ABOUT ME\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 69,\n            columnNumber: 7\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 6\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"flex justify-center items-center text-white text-center align-middle object-center cursor-pointer w-full h-1/4 bg-black\",\n          onMouseDown: function onMouseDown() {\n            return selectTitle(3);\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n            children: \"MY PROJECTS\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 74,\n            columnNumber: 7\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 6\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"flex justify-center items-center text-white text-center line-through align-middle object-center cursor-pointer w-full h-1/4 bg-black\",\n          onMouseDown: function onMouseDown() {\n            return selectTitle(4);\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n            children: \"ART\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 7\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 6\n        }, _this)]\n      }, onDisplay.type, true, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 32\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 4\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = MenuPhone;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MenuPhone);\n\nvar _c;\n\n$RefreshReg$(_c, \"MenuPhone\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tZW51UGhvbmUuanM/Njc0ZSJdLCJuYW1lcyI6WyJ2YXJpYW50cyIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0aW9uIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwib25Ib3ZlciIsInNjYWxlIiwidHlwZSIsImJvdW5jZSIsIk1lbnVQaG9uZSIsIm9uRGlzcGxheSIsInNldE9uRGlzcGxheSIsInNlbGVjdFRpdGxlIiwiZGlzcGxheU9mZiIsInNldFRpbWVvdXQiLCJkaXNwbGF5U3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUEsUUFBUSxHQUFHO0FBQ2hCQyxTQUFPLEVBQUU7QUFDUkMsV0FBTyxFQUFFO0FBREQsR0FETztBQUloQkMsV0FBUyxFQUFFO0FBQ1ZELFdBQU8sRUFBRSxHQURDO0FBRVZFLGNBQVUsRUFBRTtBQUNYQyxjQUFRLEVBQUU7QUFEQztBQUZGLEdBSks7QUFVaEJDLFNBQU8sRUFBRTtBQUNSSixXQUFPLEVBQUUsQ0FERDtBQUVSSyxTQUFLLEVBQUUsR0FGQztBQUdSSCxjQUFVLEVBQUU7QUFDWEMsY0FBUSxFQUFFLEdBREM7QUFFWEcsVUFBSSxFQUFFLFFBRks7QUFHWEMsWUFBTSxFQUFFO0FBSEc7QUFISjtBQVZPLENBQWpCOztBQXFCQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUFpQztBQUFBLE1BQTlCQyxTQUE4QixRQUE5QkEsU0FBOEI7QUFBQSxNQUFuQkMsWUFBbUIsUUFBbkJBLFlBQW1COztBQUdsRCxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDTCxJQUFELEVBQVU7QUFDN0IsWUFBUUEsSUFBUjtBQUNDLFdBQUssQ0FBTDtBQUNDSSxvQkFBWSxDQUFDLElBQUQsRUFBT0QsU0FBUyxDQUFDRyxVQUFqQixFQUE2QixDQUE3QixDQUFaO0FBQ0E7O0FBQ0QsV0FBSyxDQUFMO0FBQ0M7QUFDQ0Msb0JBQVUsQ0FBQyxZQUFNO0FBQUNILHdCQUFZLENBQUMsS0FBRCxFQUFRRCxTQUFTLENBQUNHLFVBQWxCLEVBQThCLENBQTlCLENBQVo7QUFBOEMsV0FBdEQsRUFBd0QsR0FBeEQsQ0FBVjtBQUNBRixzQkFBWSxDQUFDLElBQUQsRUFBT0QsU0FBUyxDQUFDRyxVQUFqQixFQUE2QixDQUFDLENBQTlCLENBQVo7QUFFQTtBQUNEOztBQUNELFdBQUssQ0FBTDtBQUNDRixvQkFBWSxDQUFDLElBQUQsRUFBT0QsU0FBUyxDQUFDRyxVQUFqQixFQUE2QixDQUFDLENBQTlCLENBQVo7QUFDQTtBQWJGO0FBZUEsR0FoQkQ7O0FBa0JBLHNCQUNDO0FBQ0MsYUFBUyxFQUFDLDBFQURYO0FBQUEsMkJBR0MscUVBQUMsNkRBQUQ7QUFBQSxnQkFFRUgsU0FBUyxDQUFDSyxZQUFWLGlCQUEwQixxRUFBQyxvREFBRCxDQUFRLEdBQVI7QUFDMUIsaUJBQVMsRUFBQywrSEFEZ0I7QUFHMUIsZUFBTyxFQUFFO0FBQ1JkLGlCQUFPLEVBQUU7QUFERCxTQUhpQjtBQU0xQixlQUFPLEVBQUVTLFNBQVMsQ0FBQ0gsSUFBVixLQUFtQixDQUFuQixHQUF1QjtBQUMvQk4saUJBQU8sRUFBRTtBQURzQixTQUF2QixHQUVMO0FBQ0ZBLGlCQUFPLEVBQUU7QUFEUCxTQVJzQjtBQVcxQixZQUFJLEVBQUU7QUFDTEEsaUJBQU8sRUFBRTtBQURKLFNBWG9CO0FBQUEsZ0NBZTFCO0FBQUssbUJBQVMsRUFBQyx5SEFBZjtBQUNDLHFCQUFXLEVBQUU7QUFBQSxtQkFBTVcsV0FBVyxDQUFDLENBQUQsQ0FBakI7QUFBQSxXQURkO0FBQUEsaUNBR0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWYwQixlQW9CMUI7QUFBSyxtQkFBUyxFQUFDLHlIQUFmO0FBQ0MscUJBQVcsRUFBRTtBQUFBLG1CQUFNQSxXQUFXLENBQUMsQ0FBRCxDQUFqQjtBQUFBLFdBRGQ7QUFBQSxpQ0FHQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBcEIwQixlQXlCMUI7QUFBSyxtQkFBUyxFQUFDLHNJQUFmO0FBQ0MscUJBQVcsRUFBRTtBQUFBLG1CQUFNQSxXQUFXLENBQUMsQ0FBRCxDQUFqQjtBQUFBLFdBRGQ7QUFBQSxpQ0FHQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBekIwQjtBQUFBLFNBRXJCRixTQUFTLENBQUNILElBRlc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUY1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBd0NBLENBN0REOztLQUFNRSxTO0FBK0RTQSx3RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbWVudVBob25lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuXG5jb25zdCB2YXJpYW50cyA9IHtcblx0aW5pdGlhbDoge1xuXHRcdG9wYWNpdHk6IDAsXG5cdH0sXG5cdGFuaW1hdGlvbjoge1xuXHRcdG9wYWNpdHk6IDAuNSxcblx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHRkdXJhdGlvbjogMVxuXHRcdH1cblx0fSxcblx0b25Ib3Zlcjoge1xuXHRcdG9wYWNpdHk6IDEsXG5cdFx0c2NhbGU6IDEuMSxcblx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHRkdXJhdGlvbjogMC4zLFxuXHRcdFx0dHlwZTogJ3NwcmluZycsXG5cdFx0XHRib3VuY2U6IDAuM1xuXHRcdH1cblx0fVxufVxuXG5jb25zdCBNZW51UGhvbmUgPSAoeyBvbkRpc3BsYXksIHNldE9uRGlzcGxheSB9KSA9PiB7XG5cblxuXHRjb25zdCBzZWxlY3RUaXRsZSA9ICh0eXBlKSA9PiB7XG5cdFx0c3dpdGNoICh0eXBlKSB7XG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHNldE9uRGlzcGxheSh0cnVlLCBvbkRpc3BsYXkuZGlzcGxheU9mZiwgMSlcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDM6XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtzZXRPbkRpc3BsYXkoZmFsc2UsIG9uRGlzcGxheS5kaXNwbGF5T2ZmLCAyKTt9LCA1MDApO1xuXHRcdFx0XHRcdHNldE9uRGlzcGxheSh0cnVlLCBvbkRpc3BsYXkuZGlzcGxheU9mZiwgLTEpO1xuXG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDQ6XG5cdFx0XHRcdHNldE9uRGlzcGxheSh0cnVlLCBvbkRpc3BsYXkuZGlzcGxheU9mZiwgLTEpXG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdlxuXHRcdFx0Y2xhc3NOYW1lPVwibWQ6aGlkZGVuIGFic29sdXRlIHRvcC1mdWxsIGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LWZ1bGwgXCJcblx0XHQ+XG5cdFx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXG5cdFx0XHRcdHtvbkRpc3BsYXkuZGlzcGxheVN0YXRlICYmIDxtb3Rpb24uZGl2XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwicmVsYXRpdmUgdGV4dC13aGl0ZSB0ZXh0LXhsIGZsZXggZmxleC1jb2wganVzdGlmeS1ldmVubHkgaXRlbXMtY2VudGVyIHJvdW5kZWQtbGcgYmctZ3JheS01MDAgYmctb3BhY2l0eS01MCBoLWhhbGYgdy1mdWxsIHB4LTRcIlxuXHRcdFx0XHRcdGtleT17b25EaXNwbGF5LnR5cGV9XG5cdFx0XHRcdFx0aW5pdGlhbD17e1xuXHRcdFx0XHRcdFx0b3BhY2l0eTogMCxcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdGFuaW1hdGU9e29uRGlzcGxheS50eXBlID09PSAwID8ge1xuXHRcdFx0XHRcdFx0b3BhY2l0eTogMSxcblx0XHRcdFx0XHR9IDoge1xuXHRcdFx0XHRcdFx0XHRvcGFjaXR5OiAwLFxuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRleGl0PXt7XG5cdFx0XHRcdFx0XHRvcGFjaXR5OiAwLFxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtd2hpdGUgdGV4dC1jZW50ZXIgYWxpZ24tbWlkZGxlIG9iamVjdC1jZW50ZXIgY3Vyc29yLXBvaW50ZXIgdy1mdWxsIGgtMS80IGJnLWJsYWNrXCIgXG5cdFx0XHRcdFx0XHRvbk1vdXNlRG93bj17KCkgPT4gc2VsZWN0VGl0bGUoMil9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGgxPkFCT1VUIE1FPC9oMT5cblx0XHRcdFx0XHQ8L2RpdiA+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LXdoaXRlIHRleHQtY2VudGVyIGFsaWduLW1pZGRsZSBvYmplY3QtY2VudGVyIGN1cnNvci1wb2ludGVyIHctZnVsbCBoLTEvNCBiZy1ibGFja1wiIFxuXHRcdFx0XHRcdFx0b25Nb3VzZURvd249eygpID0+IHNlbGVjdFRpdGxlKDMpfVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxoMT5NWSBQUk9KRUNUUzwvaDE+XG5cdFx0XHRcdFx0PC9kaXYgPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC13aGl0ZSB0ZXh0LWNlbnRlciBsaW5lLXRocm91Z2ggYWxpZ24tbWlkZGxlIG9iamVjdC1jZW50ZXIgY3Vyc29yLXBvaW50ZXIgdy1mdWxsIGgtMS80IGJnLWJsYWNrXCIgXG5cdFx0XHRcdFx0XHRvbk1vdXNlRG93bj17KCkgPT4gc2VsZWN0VGl0bGUoNCl9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGgxPkFSVDwvaDE+XG5cdFx0XHRcdFx0PC9kaXYgPlxuXHRcdFx0XHQ8L21vdGlvbi5kaXY+fVxuXHRcdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVQaG9uZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/menuPhone.js\n");

/***/ })

})