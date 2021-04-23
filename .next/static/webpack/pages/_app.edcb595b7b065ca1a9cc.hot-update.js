webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/title.js":
/*!*****************************!*\
  !*** ./components/title.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"../node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"../node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"../node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/goinfre/hmhindat/portfolio/components/title.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar Title = function Title(_ref) {\n  _s();\n\n  var title = _ref.title,\n      description = _ref.description,\n      image = _ref.image;\n\n  var _useViewportScroll = Object(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useViewportScroll\"])(),\n      scrollYProgress = _useViewportScroll.scrollYProgress;\n\n  var textYoffset = Object(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useTransform\"])(scrollYProgress, [0, 0.1, 0.5, 1], [0, 0, 0, 0]);\n  var textColor = Object(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useTransform\"])(scrollYProgress, [0, 0.8, 1], [\"#000000\", \"#FFFFFF\", \"#FFFFFF\"]);\n  var boardYoffset = Object(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useTransform\"])(scrollYProgress, [0, 0.1, 0.5, 1], [-2000, 0, 0, 0]);\n  var boardScale = Object(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useTransform\"])(scrollYProgress, [0, 0.1, 0.4, 1], [3, 2, 1.2, 1]);\n  var boardOpacity = Object(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useTransform\"])(scrollYProgress, [0, 0.1, 0.4, 1], [0, 0.9, 1, 1]);\n  var boardImageOpacity = Object(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useTransform\"])(scrollYProgress, [0, 0.1, 0.4, 1], [0, 0, 0, 1]);\n  var boardColor = Object(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useTransform\"])(scrollYProgress, [0, 0.5, 1], [\"#FFFFFF\", \"#000000\", \"#000000\"]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"flex flex-col  justify-start items-center h-full w-full\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"relative w-full flex flex-row justify-center items-center h-full \",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n        className: \"flex flex-col justify-center items-center w-full h-full \",\n        style: {\n          y: boardYoffset,\n          scale: boardScale,\n          opacity: boardOpacity\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"flex flex-col w-2/5 \",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n            className: \"relative flex justify-center items-center w-full pt-full border-4 border-black bg-white z-100 rounded-full\",\n            style: {\n              color: textColor,\n              backgroundColor: boardColor\n            },\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"hr\", {\n              className: \"absolute bottom-full right-1/2 border-2 border-black h-screen\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 8\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"absolute flex justify-center items-center top-0  w-full h-full\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n                className: \" md:text-8xl  text-4xl \",\n                children: title\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 36,\n                columnNumber: 9\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 35,\n              columnNumber: 8\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 7\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 6\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n          className: \"relative flex flex-col justify-center items-center mx-2 \",\n          style: {\n            y: textYoffset,\n            opacity: boardImageOpacity\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: description\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 8\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 7\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 6\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 4\n  }, _this);\n};\n\n_s(Title, \"FnwcWjZJHrye7qRPZoszczvBH2g=\", false, function () {\n  return [framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useViewportScroll\"], framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"useTransform\"]];\n});\n\n_c = Title;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Title);\n\nvar _c;\n\n$RefreshReg$(_c, \"Title\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"../node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90aXRsZS5qcz80N2UzIl0sIm5hbWVzIjpbIlRpdGxlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwidXNlVmlld3BvcnRTY3JvbGwiLCJzY3JvbGxZUHJvZ3Jlc3MiLCJ0ZXh0WW9mZnNldCIsInVzZVRyYW5zZm9ybSIsInRleHRDb2xvciIsImJvYXJkWW9mZnNldCIsImJvYXJkU2NhbGUiLCJib2FyZE9wYWNpdHkiLCJib2FyZEltYWdlT3BhY2l0eSIsImJvYXJkQ29sb3IiLCJ5Iiwic2NhbGUiLCJvcGFjaXR5IiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBbUM7QUFBQTs7QUFBQSxNQUFoQ0MsS0FBZ0MsUUFBaENBLEtBQWdDO0FBQUEsTUFBekJDLFdBQXlCLFFBQXpCQSxXQUF5QjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTs7QUFBQSwyQkFFcEJDLHVFQUFpQixFQUZHO0FBQUEsTUFFeENDLGVBRndDLHNCQUV4Q0EsZUFGd0M7O0FBR2hELE1BQU1DLFdBQVcsR0FBR0Msa0VBQVksQ0FBQ0YsZUFBRCxFQUFrQixDQUFDLENBQUQsRUFBSSxHQUFKLEVBQVMsR0FBVCxFQUFjLENBQWQsQ0FBbEIsRUFBb0MsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLENBQXBDLENBQWhDO0FBQ0EsTUFBTUcsU0FBUyxHQUFHRCxrRUFBWSxDQUFDRixlQUFELEVBQWtCLENBQUMsQ0FBRCxFQUFJLEdBQUosRUFBUyxDQUFULENBQWxCLEVBQStCLENBQUMsU0FBRCxFQUFZLFNBQVosRUFBdUIsU0FBdkIsQ0FBL0IsQ0FBOUI7QUFDQSxNQUFNSSxZQUFZLEdBQUdGLGtFQUFZLENBQUNGLGVBQUQsRUFBa0IsQ0FBQyxDQUFELEVBQUksR0FBSixFQUFTLEdBQVQsRUFBYyxDQUFkLENBQWxCLEVBQW9DLENBQUMsQ0FBQyxJQUFGLEVBQVEsQ0FBUixFQUFXLENBQVgsRUFBYyxDQUFkLENBQXBDLENBQWpDO0FBQ0EsTUFBTUssVUFBVSxHQUFHSCxrRUFBWSxDQUFDRixlQUFELEVBQWtCLENBQUMsQ0FBRCxFQUFJLEdBQUosRUFBUyxHQUFULEVBQWMsQ0FBZCxDQUFsQixFQUFvQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sR0FBUCxFQUFZLENBQVosQ0FBcEMsQ0FBL0I7QUFDQSxNQUFNTSxZQUFZLEdBQUdKLGtFQUFZLENBQUNGLGVBQUQsRUFBa0IsQ0FBQyxDQUFELEVBQUksR0FBSixFQUFTLEdBQVQsRUFBYyxDQUFkLENBQWxCLEVBQW9DLENBQUMsQ0FBRCxFQUFJLEdBQUosRUFBUyxDQUFULEVBQVksQ0FBWixDQUFwQyxDQUFqQztBQUNBLE1BQU1PLGlCQUFpQixHQUFHTCxrRUFBWSxDQUFDRixlQUFELEVBQWtCLENBQUMsQ0FBRCxFQUFJLEdBQUosRUFBUyxHQUFULEVBQWMsQ0FBZCxDQUFsQixFQUFvQyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsQ0FBcEMsQ0FBdEM7QUFDQSxNQUFNUSxVQUFVLEdBQUdOLGtFQUFZLENBQUNGLGVBQUQsRUFBa0IsQ0FBQyxDQUFELEVBQUssR0FBTCxFQUFVLENBQVYsQ0FBbEIsRUFBZ0MsQ0FBQyxTQUFELEVBQVksU0FBWixFQUF1QixTQUF2QixDQUFoQyxDQUEvQjtBQUNBLHNCQUVFO0FBQUssYUFBUyxFQUFDLHlEQUFmO0FBQUEsMkJBQ0M7QUFBSyxlQUFTLEVBQUMsbUVBQWY7QUFBQSw2QkFDQyxxRUFBQyxvREFBRCxDQUFRLEdBQVI7QUFDQyxpQkFBUyxFQUFDLDBEQURYO0FBRUMsYUFBSyxFQUFFO0FBQ05TLFdBQUMsRUFBRUwsWUFERztBQUVOTSxlQUFLLEVBQUVMLFVBRkQ7QUFHTk0saUJBQU8sRUFBRUw7QUFISCxTQUZSO0FBQUEsZ0NBUUE7QUFBSyxtQkFBUyxFQUFDLHNCQUFmO0FBQUEsaUNBQ0MscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0EscUJBQVMsRUFBQyw0R0FEVjtBQUVBLGlCQUFLLEVBQUU7QUFDTk0sbUJBQUssRUFBR1QsU0FERjtBQUVOVSw2QkFBZSxFQUFHTDtBQUZaLGFBRlA7QUFBQSxvQ0FPQztBQUFJLHVCQUFTLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBELGVBUUM7QUFBSyx1QkFBUyxFQUFDLGdFQUFmO0FBQUEscUNBQ0M7QUFBSSx5QkFBUyxFQUFDLHlCQUFkO0FBQUEsMEJBQXlDWjtBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJBLGVBc0JDLHFFQUFDLG9EQUFELENBQVEsR0FBUjtBQUNDLG1CQUFTLEVBQUMsMERBRFg7QUFFQyxlQUFLLEVBQUU7QUFDTmEsYUFBQyxFQUFFUixXQURHO0FBRU5VLG1CQUFPLEVBQUVKO0FBRkgsV0FGUjtBQUFBLGlDQU9DO0FBQUEsc0JBQUlWO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdEJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRkY7QUEwQ0EsQ0FwREQ7O0dBQU1GLEs7VUFFdUJJLCtELEVBQ1JHLDBELEVBQ0ZBLDBELEVBQ0dBLDBELEVBQ0ZBLDBELEVBQ0VBLDBELEVBQ0tBLDBELEVBQ1BBLDBEOzs7S0FUZFAsSztBQXNEU0Esb0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3RpdGxlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uLCB1c2VUcmFuc2Zvcm0sIHVzZVZpZXdwb3J0U2Nyb2xsIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuXG5jb25zdCBUaXRsZSA9ICh7IHRpdGxlLCBkZXNjcmlwdGlvbiwgaW1hZ2UgfSkgPT4ge1xuXG5cdGNvbnN0IHsgc2Nyb2xsWVByb2dyZXNzIH0gPSB1c2VWaWV3cG9ydFNjcm9sbCgpO1xuXHRjb25zdCB0ZXh0WW9mZnNldCA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAwLjEsIDAuNSwgMV0sIFswLCAwLCAwLCAwXSk7XG5cdGNvbnN0IHRleHRDb2xvciA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAwLjgsIDFdLCBbXCIjMDAwMDAwXCIsIFwiI0ZGRkZGRlwiLCBcIiNGRkZGRkZcIl0gKVxuXHRjb25zdCBib2FyZFlvZmZzZXQgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMC4xLCAwLjUsIDFdLCBbLTIwMDAsIDAsIDAsIDBdKTtcblx0Y29uc3QgYm9hcmRTY2FsZSA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAwLjEsIDAuNCwgMV0sIFszLCAyLCAxLjIsIDFdKTtcblx0Y29uc3QgYm9hcmRPcGFjaXR5ID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDAuMSwgMC40LCAxXSwgWzAsIDAuOSwgMSwgMV0pO1xuXHRjb25zdCBib2FyZEltYWdlT3BhY2l0eSA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAwLjEsIDAuNCwgMV0sIFswLCAwLCAwLCAxXSk7XG5cdGNvbnN0IGJvYXJkQ29sb3IgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCAsIDAuNSwgMV0sIFtcIiNGRkZGRkZcIiwgXCIjMDAwMDAwXCIsIFwiIzAwMDAwMFwiXSApXG5cdHJldHVybiAoXG5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCAganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgaC1mdWxsIHctZnVsbFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBmbGV4IGZsZXgtcm93IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLWZ1bGwgXCIgPlxuXHRcdFx0XHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LWZ1bGwgaC1mdWxsIFwiXG5cdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHR5OiBib2FyZFlvZmZzZXQsXG5cdFx0XHRcdFx0XHRcdHNjYWxlOiBib2FyZFNjYWxlLFxuXHRcdFx0XHRcdFx0XHRvcGFjaXR5OiBib2FyZE9wYWNpdHksXG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy0yLzUgXCI+XG5cdFx0XHRcdFx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1mdWxsIHB0LWZ1bGwgYm9yZGVyLTQgYm9yZGVyLWJsYWNrIGJnLXdoaXRlIHotMTAwIHJvdW5kZWQtZnVsbFwiXG5cdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRjb2xvciA6IHRleHRDb2xvcixcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yIDogYm9hcmRDb2xvclxuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PGhyIGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS1mdWxsIHJpZ2h0LTEvMiBib3JkZXItMiBib3JkZXItYmxhY2sgaC1zY3JlZW5cIj48L2hyPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRvcC0wICB3LWZ1bGwgaC1mdWxsXCIgPlxuXHRcdFx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCIgbWQ6dGV4dC04eGwgIHRleHQtNHhsIFwiPnt0aXRsZX08L2gxPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG14LTIgXCJcblx0XHRcdFx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHR5OiB0ZXh0WW9mZnNldCxcblx0XHRcdFx0XHRcdFx0XHRvcGFjaXR5OiBib2FyZEltYWdlT3BhY2l0eSxcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PHA+e2Rlc2NyaXB0aW9ufTwvcD5cblx0XHRcdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHRcdFx0XHRcdFx0ey8qIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy1mdWxsIGgtMzAwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8SW1hZ2Ugd2lkdGg9J3Jlc3BvbnNpdmUnIGhlaWdodD0ncmVzcG9uc2l2ZScgIHNyYz17aW1hZ2V9IC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+ICovfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBUaXRsZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/title.js\n");

/***/ })

})