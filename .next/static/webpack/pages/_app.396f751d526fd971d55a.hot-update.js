webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/soguma.tsx":
/*!*******************************!*\
  !*** ./components/soguma.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Soguma; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _gim__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gim */ \"./components/gim.tsx\");\n/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! popmotion */ \"./node_modules/popmotion/dist/es/index.js\");\n\n\n\nvar _jsxFileName = \"/home/hamza/Desktop/portfolio/components/soguma.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\nvar gimsProps = [{\n  id: 0,\n  // needed to fix \" key for map, organize layer order \"\n  type: \"main\",\n  leftRight: 0,\n  next: 1,\n  prev: 2,\n  properties: {\n    title: \"main\",\n    size: 100,\n    posi: {\n      x: 40,\n      y: 55\n    },\n    scale: 2,\n    zIndex: 10\n  }\n}, {\n  id: 1,\n  type: \"next\",\n  leftRight: 1,\n  next: 3,\n  prev: 0,\n  properties: {\n    title: \"next\",\n    size: 60,\n    posi: {\n      x: 85,\n      y: 45\n    },\n    scale: 1.2,\n    zIndex: 10\n  }\n}, {\n  id: 2,\n  type: \"previous\",\n  leftRight: -1,\n  next: 0,\n  prev: 4,\n  properties: {\n    title: \"previous\",\n    size: 80,\n    posi: {\n      x: 5,\n      y: 12\n    },\n    scale: 1.1,\n    zIndex: 10\n  }\n}, {\n  id: 3,\n  type: \"onHold\",\n  leftRight: 1,\n  next: 4,\n  prev: 1,\n  properties: {\n    title: \"...\",\n    size: 50,\n    posi: {\n      x: 60,\n      y: 18\n    },\n    scale: 0.5,\n    zIndex: 0\n  }\n}, {\n  id: 4,\n  type: \"hidden\",\n  leftRight: -1,\n  next: 2,\n  prev: 3,\n  properties: {\n    title: \"hidden\",\n    size: 40,\n    posi: {\n      x: 40,\n      y: 9\n    },\n    scale: 0.4,\n    zIndex: 0\n  }\n}];\nvar data = [\"about me\", \"my projects\", \"art\", \"p1\", \"p2\"];\nfunction Soguma(_ref) {\n  _s();\n\n  var _this = this;\n\n  var height = _ref.height,\n      width = _ref.width;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([0, 0]),\n      _useState$ = Object(_home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState[0], 2),\n      direction = _useState$[0],\n      steps = _useState$[1],\n      setRotate = _useState[1];\n\n  var currentIndex = Object(popmotion__WEBPACK_IMPORTED_MODULE_5__[\"wrap\"])(0, 4, steps);\n\n  var nextPosition = function nextPosition(newDirection) {\n    console.log(\"clickkkkkk\");\n    setRotate([newDirection, steps + newDirection]);\n  }; // console.log(getGimPropsById(3));\n\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n    className: \"relative flex justify-center items-start \".concat(height || \"h-1/2\", \" \").concat(width || \"w-1/2\", \"  border-gray-900 shadow-2xl  \"),\n    initial: \"initial\",\n    animate: \"standing\",\n    variants: {\n      initial: {\n        y: -430,\n        scale: 0.1\n      },\n      standing: {\n        y: 0,\n        scale: 1,\n        transition: {\n          duration: 2 // x : { yoyo : Infinity, duration : 2},\n\n        }\n      }\n    },\n    children: [gimsProps.map(function (gim) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_gim__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        gimId: gim.id,\n        data: data,\n        direction: direction,\n        steps: steps,\n        nextPosition: nextPosition\n      }, gim.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 5\n      }, _this);\n    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n      className: \"relative h-60 w-44 bg-white\",\n      initial: \"initial\",\n      animate: \"standing\",\n      variants: {\n        initial: {\n          scale: 1.1,\n          // opacity : 0,\n          y: -100,\n          rotate: 15 // transition : {\n          // \tduration : 2,\n          // }\n\n        },\n        standing: {\n          scale: 1.1,\n          // opacity : 1,\n          y: [-12, -25],\n          rotate: 9,\n          // x : [0, 5, -5, 0],\n          transition: {\n            y: {\n              yoyo: Infinity,\n              duration: 1\n            },\n            duration: 1.3,\n            delay: 2.5 // x : { yoyo : Infinity, duration : 2},\n\n          }\n        }\n      },\n      onMouseDown: function onMouseDown() {\n        return nextPosition(-1);\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"/scene\",\n        children: \"link\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 154,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 125,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 96,\n    columnNumber: 3\n  }, this);\n}\n\n_s(Soguma, \"jxywUSMGD1MnKJWZBoQRMUqJkp4=\");\n\n_c = Soguma;\n\nvar _c;\n\n$RefreshReg$(_c, \"Soguma\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zb2d1bWEudHN4PzZjOWQiXSwibmFtZXMiOlsiZ2ltc1Byb3BzIiwiaWQiLCJ0eXBlIiwibGVmdFJpZ2h0IiwibmV4dCIsInByZXYiLCJwcm9wZXJ0aWVzIiwidGl0bGUiLCJzaXplIiwicG9zaSIsIngiLCJ5Iiwic2NhbGUiLCJ6SW5kZXgiLCJkYXRhIiwiU29ndW1hIiwiaGVpZ2h0Iiwid2lkdGgiLCJ1c2VTdGF0ZSIsImRpcmVjdGlvbiIsInN0ZXBzIiwic2V0Um90YXRlIiwiY3VycmVudEluZGV4Iiwid3JhcCIsIm5leHRQb3NpdGlvbiIsIm5ld0RpcmVjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJpbml0aWFsIiwic3RhbmRpbmciLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJtYXAiLCJnaW0iLCJyb3RhdGUiLCJ5b3lvIiwiSW5maW5pdHkiLCJkZWxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHLENBQ2pCO0FBQ0NDLElBQUUsRUFBRSxDQURMO0FBQ1E7QUFDUEMsTUFBSSxFQUFFLE1BRlA7QUFHQ0MsV0FBUyxFQUFFLENBSFo7QUFJQ0MsTUFBSSxFQUFFLENBSlA7QUFLQ0MsTUFBSSxFQUFFLENBTFA7QUFNQ0MsWUFBVSxFQUFFO0FBQ1hDLFNBQUssRUFBRSxNQURJO0FBRVhDLFFBQUksRUFBRSxHQUZLO0FBR1hDLFFBQUksRUFBRTtBQUFFQyxPQUFDLEVBQUUsRUFBTDtBQUFTQyxPQUFDLEVBQUU7QUFBWixLQUhLO0FBSVhDLFNBQUssRUFBRSxDQUpJO0FBS1hDLFVBQU0sRUFBRTtBQUxHO0FBTmIsQ0FEaUIsRUFlakI7QUFDQ1osSUFBRSxFQUFFLENBREw7QUFFQ0MsTUFBSSxFQUFFLE1BRlA7QUFHQ0MsV0FBUyxFQUFFLENBSFo7QUFJQ0MsTUFBSSxFQUFFLENBSlA7QUFLQ0MsTUFBSSxFQUFFLENBTFA7QUFN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WUFBWSxDQUFDLENBQUMsQ0FBRixDQUFsQjtBQUFBLE9BM0JkO0FBQUEsNkJBNkJDO0FBQUcsWUFBSSxFQUFDLFFBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE3QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTdCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQStEQTs7R0EzRXVCVCxNOztLQUFBQSxNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9zb2d1bWEudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQgR2ltIGZyb20gJy4vZ2ltJ1xuaW1wb3J0IHsgd3JhcCB9IGZyb20gJ3BvcG1vdGlvbidcblxuY29uc3QgZ2ltc1Byb3BzID0gW1xuXHR7XG5cdFx0aWQ6IDAsIC8vIG5lZWRlZCB0byBmaXggXCIga2V5IGZvciBtYXAsIG9yZ2FuaXplIGxheWVyIG9yZGVyIFwiXG5cdFx0dHlwZTogXCJtYWluXCIsXG5cdFx0bGVmdFJpZ2h0OiAwLFxuXHRcdG5leHQ6IDEsXG5cdFx0cHJldjogMixcblx0XHRwcm9wZXJ0aWVzOiB7XG5cdFx0XHR0aXRsZTogXCJtYWluXCIsXG5cdFx0XHRzaXplOiAxMDAsXG5cdFx0XHRwb3NpOiB7IHg6IDQwLCB5OiA1NSB9LFxuXHRcdFx0c2NhbGU6IDIsXG5cdFx0XHR6SW5kZXg6IDEwLFxuXHRcdH1cblx0fSxcblx0e1xuXHRcdGlkOiAxLFxuXHRcdHR5cGU6IFwibmV4dFwiLFxuXHRcdGxlZnRSaWdodDogMSxcblx0XHRuZXh0OiAzLFxuXHRcdHByZXY6IDAsXG5cdFx0cHJvcGVydGllczoge1xuXHRcdFx0dGl0bGU6IFwibmV4dFwiLFxuXHRcdFx0c2l6ZTogNjAsXG5cdFx0XHRwb3NpOiB7IHg6IDg1LCB5OiA0NSB9LFxuXHRcdFx0c2NhbGU6IDEuMixcblx0XHRcdHpJbmRleDogMTAsXG5cblx0XHR9XG5cdH0sXG5cdHtcblx0XHRpZDogMixcblx0XHR0eXBlOiBcInByZXZpb3VzXCIsXG5cdFx0bGVmdFJpZ2h0OiAtMSxcblx0XHRuZXh0OiAwLFxuXHRcdHByZXY6IDQsXG5cdFx0cHJvcGVydGllczoge1xuXHRcdFx0dGl0bGU6IFwicHJldmlvdXNcIixcblx0XHRcdHNpemU6IDgwLFxuXHRcdFx0cG9zaTogeyB4OiA1LCB5OiAxMiB9LFxuXHRcdFx0c2NhbGU6IDEuMSxcblx0XHRcdHpJbmRleDogMTAsXG5cdFx0fVxuXHR9LFxuXHR7XG5cdFx0aWQ6IDMsXG5cdFx0dHlwZTogXCJvbkhvbGRcIixcblx0XHRsZWZ0UmlnaHQ6IDEsXG5cdFx0bmV4dDogNCxcblx0XHRwcmV2OiAxLFxuXHRcdHByb3BlcnRpZXM6IHtcblx0XHRcdHRpdGxlOiBcIi4uLlwiLFxuXHRcdFx0c2l6ZTogNTAsXG5cdFx0XHRwb3NpOiB7IHg6IDYwLCB5OiAxOCB9LFxuXHRcdFx0c2NhbGU6IDAuNSxcblx0XHRcdHpJbmRleDogMCxcblx0XHR9XG5cdH1cblx0LFxuXHR7XG5cdFx0aWQ6IDQsXG5cdFx0dHlwZTogXCJoaWRkZW5cIixcblx0XHRsZWZ0UmlnaHQ6IC0xLFxuXHRcdG5leHQ6IDIsXG5cdFx0cHJldjogMyxcblx0XHRwcm9wZXJ0aWVzOiB7XG5cdFx0XHR0aXRsZTogXCJoaWRkZW5cIixcblx0XHRcdHNpemU6IDQwLFxuXHRcdFx0cG9zaTogeyB4OiA0MCwgeTogOSB9LFxuXHRcdFx0c2NhbGU6IDAuNCxcblx0XHRcdHpJbmRleDogMCxcblx0XHR9XG5cdH1cbl1cblxuY29uc3QgZGF0YSA9IFtcImFib3V0IG1lXCIsIFwibXkgcHJvamVjdHNcIiwgXCJhcnRcIiwgXCJwMVwiLCBcInAyXCJdIFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTb2d1bWEoeyBoZWlnaHQsIHdpZHRoIH0pIHtcblxuXHRjb25zdCBbW2RpcmVjdGlvbiwgc3RlcHNdLCBzZXRSb3RhdGVdID0gdXNlU3RhdGUoWzAsIDBdKTtcblxuXHRjb25zdCBjdXJyZW50SW5kZXggPSB3cmFwKDAsIDQsIHN0ZXBzKVxuXG5cdGNvbnN0IG5leHRQb3NpdGlvbiA9IChuZXdEaXJlY3Rpb246IG51bWJlcikgPT4ge1xuXHRcdGNvbnNvbGUubG9nKFwiY2xpY2tra2tra1wiKTtcblx0XHRzZXRSb3RhdGUoW25ld0RpcmVjdGlvbiwgc3RlcHMgKyBuZXdEaXJlY3Rpb25dKTtcblx0fVxuXG5cdC8vIGNvbnNvbGUubG9nKGdldEdpbVByb3BzQnlJZCgzKSk7XG5cdHJldHVybiAoXG5cdFx0PG1vdGlvbi5kaXZcblx0XHRcdGNsYXNzTmFtZT17YHJlbGF0aXZlIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtc3RhcnQgJHtoZWlnaHQgfHwgXCJoLTEvMlwifSAke3dpZHRoIHx8IFwidy0xLzJcIn0gIGJvcmRlci1ncmF5LTkwMCBzaGFkb3ctMnhsICBgfVxuXHRcdFx0aW5pdGlhbD1cImluaXRpYWxcIlxuXHRcdFx0YW5pbWF0ZT1cInN0YW5kaW5nXCJcblx0XHRcdHZhcmlhbnRzPXt7XG5cdFx0XHRcdGluaXRpYWwgOiB7XG5cdFx0XHRcdFx0eSA6IC00MzAsXG5cdFx0XHRcdFx0c2NhbGUgOiAwLjEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHN0YW5kaW5nIDoge1xuXHRcdFx0XHRcdHkgOiAwLFxuXHRcdFx0XHRcdHNjYWxlOiAxLFxuXHRcdFx0XHRcdHRyYW5zaXRpb24gOiB7XG5cdFx0XHRcdFx0XHRkdXJhdGlvbiA6IDIsXG5cdFx0XHRcdFx0XHQvLyB4IDogeyB5b3lvIDogSW5maW5pdHksIGR1cmF0aW9uIDogMn0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdH19XG5cdFx0PlxuXHRcdFx0e2dpbXNQcm9wcy5tYXAoKGdpbSkgPT4gKFxuXHRcdFx0XHQ8R2ltIFxuXHRcdFx0XHRcdGtleT17Z2ltLmlkfVxuXHRcdFx0XHRcdGdpbUlkPXtnaW0uaWR9XG5cdFx0XHRcdFx0ZGF0YT17ZGF0YX1cblx0XHRcdFx0XHRkaXJlY3Rpb249e2RpcmVjdGlvbn1cblx0XHRcdFx0XHRzdGVwcz17c3RlcHN9XG5cdFx0XHRcdFx0bmV4dFBvc2l0aW9uPXtuZXh0UG9zaXRpb259XG5cdFx0XHRcdC8+XG5cdFx0XHQpKX1cblx0XHRcdDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtNjAgdy00NCBiZy13aGl0ZVwiXG5cdFx0XHRcdGluaXRpYWw9XCJpbml0aWFsXCJcblx0XHRcdFx0YW5pbWF0ZT1cInN0YW5kaW5nXCJcblx0XHRcdFx0dmFyaWFudHM9e3tcblx0XHRcdFx0XHRpbml0aWFsIDoge1xuXHRcdFx0XHRcdFx0c2NhbGUgOiAxLjEsXG5cdFx0XHRcdFx0XHQvLyBvcGFjaXR5IDogMCxcblx0XHRcdFx0XHRcdHkgOiAtMTAwLFxuXHRcdFx0XHRcdFx0cm90YXRlIDogMTUsXG5cdFx0XHRcdFx0XHQvLyB0cmFuc2l0aW9uIDoge1xuXHRcdFx0XHRcdFx0Ly8gXHRkdXJhdGlvbiA6IDIsXG5cdFx0XHRcdFx0XHQvLyB9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRzdGFuZGluZyA6IHtcblx0XHRcdFx0XHRcdHNjYWxlOiAxLjEsXG5cdFx0XHRcdFx0XHQvLyBvcGFjaXR5IDogMSxcblx0XHRcdFx0XHRcdHkgOiBbLTEyLCAtMjVdLFxuXHRcdFx0XHRcdFx0cm90YXRlIDogOSxcblx0XHRcdFx0XHRcdC8vIHggOiBbMCwgNSwgLTUsIDBdLFxuXHRcdFx0XHRcdFx0dHJhbnNpdGlvbiA6IHtcblx0XHRcdFx0XHRcdFx0eSA6IHsgeW95byA6IEluZmluaXR5LCBkdXJhdGlvbiA6IDF9LFxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbiA6IDEuMyxcblx0XHRcdFx0XHRcdFx0ZGVsYXkgOiAyLjUsXG5cdFx0XHRcdFx0XHRcdC8vIHggOiB7IHlveW8gOiBJbmZpbml0eSwgZHVyYXRpb24gOiAyfSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fX1cblx0XHRcdFx0b25Nb3VzZURvd249eygpID0+IG5leHRQb3NpdGlvbigtMSl9XG5cdFx0XHQ+XG5cdFx0XHRcdDxhIGhyZWY9Jy9zY2VuZSc+bGluazwvYT5cblx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHQ8L21vdGlvbi5kaXY+XG5cdCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/soguma.tsx\n");

/***/ })

})