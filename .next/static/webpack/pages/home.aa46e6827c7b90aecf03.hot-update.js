webpackHotUpdate_N_E("pages/home",{

/***/ "./components/soguma.tsx":
/*!*******************************!*\
  !*** ./components/soguma.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Soguma; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _gim__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gim */ \"./components/gim.tsx\");\n/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! popmotion */ \"./node_modules/popmotion/dist/es/index.js\");\n\n\n\nvar _jsxFileName = \"/home/hamza/Desktop/portfolio/components/soguma.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\nvar gimsProps = [{\n  id: 0,\n  // needed to fix \" key for map, organize layer order \"\n  type: \"main\",\n  leftRight: 0,\n  next: 1,\n  prev: 2,\n  properties: {\n    title: \"main\",\n    size: 100,\n    posi: {\n      x: 40,\n      y: 55\n    },\n    scale: 2,\n    zIndex: 10\n  }\n}, {\n  id: 1,\n  type: \"next\",\n  leftRight: 1,\n  next: 3,\n  prev: 0,\n  properties: {\n    title: \"next\",\n    size: 60,\n    posi: {\n      x: 85,\n      y: 45\n    },\n    scale: 1.2,\n    zIndex: 10\n  }\n}, {\n  id: 2,\n  type: \"previous\",\n  leftRight: -1,\n  next: 0,\n  prev: 4,\n  properties: {\n    title: \"previous\",\n    size: 80,\n    posi: {\n      x: 5,\n      y: 12\n    },\n    scale: 1.1,\n    zIndex: 10\n  }\n}, {\n  id: 3,\n  type: \"onHold\",\n  leftRight: 1,\n  next: 4,\n  prev: 1,\n  properties: {\n    title: \"...\",\n    size: 50,\n    posi: {\n      x: 60,\n      y: 18\n    },\n    scale: 0.5,\n    zIndex: 0\n  }\n}, {\n  id: 4,\n  type: \"hidden\",\n  leftRight: -1,\n  next: 2,\n  prev: 3,\n  properties: {\n    title: \"hidden\",\n    size: 40,\n    posi: {\n      x: 40,\n      y: 9\n    },\n    scale: 0.4,\n    zIndex: 0\n  }\n}];\nvar data = [\"about me\", \"my projects\", \"art\", \"p1\", \"p2\"];\nfunction Soguma(_ref) {\n  _s();\n\n  var _this = this;\n\n  var height = _ref.height,\n      width = _ref.width;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([0, 0]),\n      _useState$ = Object(_home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState[0], 2),\n      direction = _useState$[0],\n      steps = _useState$[1],\n      setRotate = _useState[1];\n\n  var currentIndex = Object(popmotion__WEBPACK_IMPORTED_MODULE_5__[\"wrap\"])(0, 4, steps);\n\n  var nextPosition = function nextPosition(newDirection) {\n    console.log(\"clickkkkkk\");\n    setRotate([newDirection, steps + newDirection]);\n  }; // console.log(getGimPropsById(3));\n\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n    className: \"relative flex justify-center items-start \".concat(height || \"h-1/2\", \" \").concat(width || \"w-1/2\", \"  border-gray-900 shadow-2xl bg-gray-900 \"),\n    children: [gimsProps.map(function (gim) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_gim__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        gimId: gim.id,\n        data: data,\n        direction: direction,\n        steps: steps,\n        nextPosition: nextPosition\n      }, gim.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 5\n      }, _this);\n    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n      className: \"relative h-60 w-44 bg-white\",\n      initial: \"initial\",\n      animate: \"standing\",\n      variants: {\n        initial: {\n          scale: 1.1,\n          // opacity : 0,\n          y: -100,\n          rotate: 15 // transition : {\n          // \tduration : 2,\n          // }\n\n        },\n        standing: {\n          scale: 1.2,\n          // opacity : 1,\n          y: [-12, -25],\n          rotate: 10,\n          // x : [0, 5, -5, 0],\n          transition: {\n            y: {\n              yoyo: Infinity,\n              duration: 1\n            },\n            duration: 1.3,\n            delay: 2.5 // x : { yoyo : Infinity, duration : 2},\n\n          }\n        }\n      },\n      onMouseDown: function onMouseDown() {\n        return nextPosition(-1);\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"/scene\",\n        children: \"link\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 139,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 96,\n    columnNumber: 3\n  }, this);\n}\n\n_s(Soguma, \"jxywUSMGD1MnKJWZBoQRMUqJkp4=\");\n\n_c = Soguma;\n\nvar _c;\n\n$RefreshReg$(_c, \"Soguma\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zb2d1bWEudHN4PzZjOWQiXSwibmFtZXMiOlsiZ2ltc1Byb3BzIiwiaWQiLCJ0eXBlIiwibGVmdFJpZ2h0IiwibmV4dCIsInByZXYiLCJwcm9wZXJ0aWVzIiwidGl0bGUiLCJzaXplIiwicG9zaSIsIngiLCJ5Iiwic2NhbGUiLCJ6SW5kZXgiLCJkYXRhIiwiU29ndW1hIiwiaGVpZ2h0Iiwid2lkdGgiLCJ1c2VTdGF0ZSIsImRpcmVjdGlvbiIsInN0ZXBzIiwic2V0Um90YXRlIiwiY3VycmVudEluZGV4Iiwid3JhcCIsIm5leHRQb3NpdGlvbiIsIm5ld0RpcmVjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJnaW0iLCJpbml0aWFsIiwicm90YXRlIiwic3RhbmRpbmciLCJ0cmFuc2l0aW9uIiwieW95byIsIkluZmluaXR5IiwiZHVyYXRpb24iLCJkZWxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHLENBQ2pCO0FBQ0NDLElBQUUsRUFBRSxDQURMO0FBQ1E7QUFDUEMsTUFBSSxFQUFFLE1BRlA7QUFHQ0MsV0FBUyxFQUFFLENBSFo7QUFJQ0MsTUFBSSxFQUFFLENBSlA7QUFLQ0MsTUFBSSxFQUFFLENBTFA7QUFNQ0MsWUFBVSxFQUFFO0FBQ1hDLFNBQUssRUFBRSxNQURJO0FBRVhDLFFBQUksRUFBRSxHQUZLO0FBR1hDLFFBQUksRUFBRTtBQUFFQyxPQUFDLEVBQUUsRUFBTDtBQUFTQyxPQUFDLEVBQUU7QUFBWixLQUhLO0FBSVhDLFNBQUssRUFBRSxDQUpJO0FBS1hDLFVBQU0sRUFBRTtBQUxHO0FBTmIsQ0FEaUIsRUFlakI7QUFDQ1osSUFBRSxFQUFFLENBREw7QUFFQ0MsTUFBSSxFQUFFLE1BRlA7QUFHQ0MsV0FBUyxFQUFFLENBSFo7QUFJQ0MsTUFBSSxFQUFFLENBSlA7QUFLQ0MsTUFBSSxFQUFFLENBTFA7QUFN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ZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IEdpbSBmcm9tICcuL2dpbSdcbmltcG9ydCB7IHdyYXAgfSBmcm9tICdwb3Btb3Rpb24nXG5cbmNvbnN0IGdpbXNQcm9wcyA9IFtcblx0e1xuXHRcdGlkOiAwLCAvLyBuZWVkZWQgdG8gZml4IFwiIGtleSBmb3IgbWFwLCBvcmdhbml6ZSBsYXllciBvcmRlciBcIlxuXHRcdHR5cGU6IFwibWFpblwiLFxuXHRcdGxlZnRSaWdodDogMCxcblx0XHRuZXh0OiAxLFxuXHRcdHByZXY6IDIsXG5cdFx0cHJvcGVydGllczoge1xuXHRcdFx0dGl0bGU6IFwibWFpblwiLFxuXHRcdFx0c2l6ZTogMTAwLFxuXHRcdFx0cG9zaTogeyB4OiA0MCwgeTogNTUgfSxcblx0XHRcdHNjYWxlOiAyLFxuXHRcdFx0ekluZGV4OiAxMCxcblx0XHR9XG5cdH0sXG5cdHtcblx0XHRpZDogMSxcblx0XHR0eXBlOiBcIm5leHRcIixcblx0XHRsZWZ0UmlnaHQ6IDEsXG5cdFx0bmV4dDogMyxcblx0XHRwcmV2OiAwLFxuXHRcdHByb3BlcnRpZXM6IHtcblx0XHRcdHRpdGxlOiBcIm5leHRcIixcblx0XHRcdHNpemU6IDYwLFxuXHRcdFx0cG9zaTogeyB4OiA4NSwgeTogNDUgfSxcblx0XHRcdHNjYWxlOiAxLjIsXG5cdFx0XHR6SW5kZXg6IDEwLFxuXG5cdFx0fVxuXHR9LFxuXHR7XG5cdFx0aWQ6IDIsXG5cdFx0dHlwZTogXCJwcmV2aW91c1wiLFxuXHRcdGxlZnRSaWdodDogLTEsXG5cdFx0bmV4dDogMCxcblx0XHRwcmV2OiA0LFxuXHRcdHByb3BlcnRpZXM6IHtcblx0XHRcdHRpdGxlOiBcInByZXZpb3VzXCIsXG5cdFx0XHRzaXplOiA4MCxcblx0XHRcdHBvc2k6IHsgeDogNSwgeTogMTIgfSxcblx0XHRcdHNjYWxlOiAxLjEsXG5cdFx0XHR6SW5kZXg6IDEwLFxuXHRcdH1cblx0fSxcblx0e1xuXHRcdGlkOiAzLFxuXHRcdHR5cGU6IFwib25Ib2xkXCIsXG5cdFx0bGVmdFJpZ2h0OiAxLFxuXHRcdG5leHQ6IDQsXG5cdFx0cHJldjogMSxcblx0XHRwcm9wZXJ0aWVzOiB7XG5cdFx0XHR0aXRsZTogXCIuLi5cIixcblx0XHRcdHNpemU6IDUwLFxuXHRcdFx0cG9zaTogeyB4OiA2MCwgeTogMTggfSxcblx0XHRcdHNjYWxlOiAwLjUsXG5cdFx0XHR6SW5kZXg6IDAsXG5cdFx0fVxuXHR9XG5cdCxcblx0e1xuXHRcdGlkOiA0LFxuXHRcdHR5cGU6IFwiaGlkZGVuXCIsXG5cdFx0bGVmdFJpZ2h0OiAtMSxcblx0XHRuZXh0OiAyLFxuXHRcdHByZXY6IDMsXG5cdFx0cHJvcGVydGllczoge1xuXHRcdFx0dGl0bGU6IFwiaGlkZGVuXCIsXG5cdFx0XHRzaXplOiA0MCxcblx0XHRcdHBvc2k6IHsgeDogNDAsIHk6IDkgfSxcblx0XHRcdHNjYWxlOiAwLjQsXG5cdFx0XHR6SW5kZXg6IDAsXG5cdFx0fVxuXHR9XG5dXG5cbmNvbnN0IGRhdGEgPSBbXCJhYm91dCBtZVwiLCBcIm15IHByb2plY3RzXCIsIFwiYXJ0XCIsIFwicDFcIiwgXCJwMlwiXSBcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU29ndW1hKHsgaGVpZ2h0LCB3aWR0aCB9KSB7XG5cblx0Y29uc3QgW1tkaXJlY3Rpb24sIHN0ZXBzXSwgc2V0Um90YXRlXSA9IHVzZVN0YXRlKFswLCAwXSk7XG5cblx0Y29uc3QgY3VycmVudEluZGV4ID0gd3JhcCgwLCA0LCBzdGVwcylcblxuXHRjb25zdCBuZXh0UG9zaXRpb24gPSAobmV3RGlyZWN0aW9uOiBudW1iZXIpID0+IHtcblx0XHRjb25zb2xlLmxvZyhcImNsaWNra2tra2tcIik7XG5cdFx0c2V0Um90YXRlKFtuZXdEaXJlY3Rpb24sIHN0ZXBzICsgbmV3RGlyZWN0aW9uXSk7XG5cdH1cblxuXHQvLyBjb25zb2xlLmxvZyhnZXRHaW1Qcm9wc0J5SWQoMykpO1xuXHRyZXR1cm4gKFxuXHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRjbGFzc05hbWU9e2ByZWxhdGl2ZSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLXN0YXJ0ICR7aGVpZ2h0IHx8IFwiaC0xLzJcIn0gJHt3aWR0aCB8fCBcInctMS8yXCJ9ICBib3JkZXItZ3JheS05MDAgc2hhZG93LTJ4bCBiZy1ncmF5LTkwMCBgfVxuXHRcdFx0XG5cdFx0PlxuXHRcdFx0e2dpbXNQcm9wcy5tYXAoKGdpbSkgPT4gKFxuXHRcdFx0XHQ8R2ltIFxuXHRcdFx0XHRcdGtleT17Z2ltLmlkfVxuXHRcdFx0XHRcdGdpbUlkPXtnaW0uaWR9XG5cdFx0XHRcdFx0ZGF0YT17ZGF0YX1cblx0XHRcdFx0XHRkaXJlY3Rpb249e2RpcmVjdGlvbn1cblx0XHRcdFx0XHRzdGVwcz17c3RlcHN9XG5cdFx0XHRcdFx0bmV4dFBvc2l0aW9uPXtuZXh0UG9zaXRpb259XG5cdFx0XHRcdC8+XG5cdFx0XHQpKX1cblx0XHRcdDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtNjAgdy00NCBiZy13aGl0ZVwiXG5cdFx0XHRcdGluaXRpYWw9XCJpbml0aWFsXCJcblx0XHRcdFx0YW5pbWF0ZT1cInN0YW5kaW5nXCJcblx0XHRcdFx0dmFyaWFudHM9e3tcblx0XHRcdFx0XHRpbml0aWFsIDoge1xuXHRcdFx0XHRcdFx0c2NhbGUgOiAxLjEsXG5cdFx0XHRcdFx0XHQvLyBvcGFjaXR5IDogMCxcblx0XHRcdFx0XHRcdHkgOiAtMTAwLFxuXHRcdFx0XHRcdFx0cm90YXRlIDogMTUsXG5cdFx0XHRcdFx0XHQvLyB0cmFuc2l0aW9uIDoge1xuXHRcdFx0XHRcdFx0Ly8gXHRkdXJhdGlvbiA6IDIsXG5cdFx0XHRcdFx0XHQvLyB9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRzdGFuZGluZyA6IHtcblx0XHRcdFx0XHRcdHNjYWxlOiAxLjIsXG5cdFx0XHRcdFx0XHQvLyBvcGFjaXR5IDogMSxcblx0XHRcdFx0XHRcdHkgOiBbLTEyLCAtMjVdLFxuXHRcdFx0XHRcdFx0cm90YXRlIDogMTAsXG5cdFx0XHRcdFx0XHQvLyB4IDogWzAsIDUsIC01LCAwXSxcblx0XHRcdFx0XHRcdHRyYW5zaXRpb24gOiB7XG5cdFx0XHRcdFx0XHRcdHkgOiB7IHlveW8gOiBJbmZpbml0eSwgZHVyYXRpb24gOiAxfSxcblx0XHRcdFx0XHRcdFx0ZHVyYXRpb24gOiAxLjMsXG5cdFx0XHRcdFx0XHRcdGRlbGF5IDogMi41LFxuXHRcdFx0XHRcdFx0XHQvLyB4IDogeyB5b3lvIDogSW5maW5pdHksIGR1cmF0aW9uIDogMn0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH19XG5cdFx0XHRcdG9uTW91c2VEb3duPXsoKSA9PiBuZXh0UG9zaXRpb24oLTEpfVxuXHRcdFx0PlxuXHRcdFx0XHQ8YSBocmVmPScvc2NlbmUnPmxpbms8L2E+XG5cdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0PC9tb3Rpb24uZGl2PlxuXHQpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/soguma.tsx\n");

/***/ })

})