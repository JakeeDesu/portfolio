webpackHotUpdate_N_E("pages/home",{

/***/ "./components/soguma.tsx":
/*!*******************************!*\
  !*** ./components/soguma.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Soguma; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _gim__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gim */ \"./components/gim.tsx\");\n/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! popmotion */ \"./node_modules/popmotion/dist/es/index.js\");\n\n\n\nvar _jsxFileName = \"/home/hamza/Desktop/portfolio/components/soguma.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\nvar gimsProps = [{\n  id: 0,\n  // needed to fix \" key for map, organize layer order \"\n  type: \"main\",\n  leftRight: 0,\n  next: 1,\n  prev: 2,\n  properties: {\n    title: \"main\",\n    size: 100,\n    posi: {\n      x: 40,\n      y: 55\n    },\n    scale: 2,\n    zIndex: 10\n  }\n}, {\n  id: 1,\n  type: \"next\",\n  leftRight: 1,\n  next: 3,\n  prev: 0,\n  properties: {\n    title: \"next\",\n    size: 60,\n    posi: {\n      x: 85,\n      y: 45\n    },\n    scale: 1.2,\n    zIndex: 10\n  }\n}, {\n  id: 2,\n  type: \"previous\",\n  leftRight: -1,\n  next: 0,\n  prev: 4,\n  properties: {\n    title: \"previous\",\n    size: 80,\n    posi: {\n      x: 5,\n      y: 12\n    },\n    scale: 1.1,\n    zIndex: 10\n  }\n}, {\n  id: 3,\n  type: \"onHold\",\n  leftRight: 1,\n  next: 4,\n  prev: 1,\n  properties: {\n    title: \"...\",\n    size: 50,\n    posi: {\n      x: 60,\n      y: 18\n    },\n    scale: 0.5,\n    zIndex: 0\n  }\n}, {\n  id: 4,\n  type: \"hidden\",\n  leftRight: -1,\n  next: 2,\n  prev: 3,\n  properties: {\n    title: \"hidden\",\n    size: 40,\n    posi: {\n      x: 40,\n      y: 9\n    },\n    scale: 0.4,\n    zIndex: 0\n  }\n}];\nvar data = [\"about me\", \"my projects\", \"art\", \"p1\", \"p2\"];\nfunction Soguma(_ref) {\n  _s();\n\n  var _this = this;\n\n  var height = _ref.height,\n      width = _ref.width;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([0, 0]),\n      _useState$ = Object(_home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState[0], 2),\n      direction = _useState$[0],\n      steps = _useState$[1],\n      setRotate = _useState[1];\n\n  var currentIndex = Object(popmotion__WEBPACK_IMPORTED_MODULE_5__[\"wrap\"])(0, 4, steps);\n\n  var nextPosition = function nextPosition(newDirection) {\n    console.log(\"clickkkkkk\");\n    setRotate([newDirection, steps + newDirection]);\n  }; // console.log(getGimPropsById(3));\n\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n    className: \"relative flex justify-center items-start \".concat(height || \"h-1/2\", \" \").concat(width || \"w-1/2\", \"  border-gray-900 shadow-2xl \"),\n    children: [gimsProps.map(function (gim) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_gim__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        gimId: gim.id,\n        data: data,\n        direction: direction,\n        steps: steps,\n        nextPosition: nextPosition\n      }, gim.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 5\n      }, _this);\n    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n      className: \"relative  h-56 w-48 bg-white\",\n      onMouseDown: function onMouseDown() {\n        return nextPosition(-1);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: [\"\\\"direction : \\\" \", direction]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 96,\n    columnNumber: 3\n  }, this);\n}\n\n_s(Soguma, \"jxywUSMGD1MnKJWZBoQRMUqJkp4=\");\n\n_c = Soguma;\n\nvar _c;\n\n$RefreshReg$(_c, \"Soguma\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zb2d1bWEudHN4PzZjOWQiXSwibmFtZXMiOlsiZ2ltc1Byb3BzIiwiaWQiLCJ0eXBlIiwibGVmdFJpZ2h0IiwibmV4dCIsInByZXYiLCJwcm9wZXJ0aWVzIiwidGl0bGUiLCJzaXplIiwicG9zaSIsIngiLCJ5Iiwic2NhbGUiLCJ6SW5kZXgiLCJkYXRhIiwiU29ndW1hIiwiaGVpZ2h0Iiwid2lkdGgiLCJ1c2VTdGF0ZSIsImRpcmVjdGlvbiIsInN0ZXBzIiwic2V0Um90YXRlIiwiY3VycmVudEluZGV4Iiwid3JhcCIsIm5leHRQb3NpdGlvbiIsIm5ld0RpcmVjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJnaW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBRyxDQUNqQjtBQUNDQyxJQUFFLEVBQUUsQ0FETDtBQUNRO0FBQ1BDLE1BQUksRUFBRSxNQUZQO0FBR0NDLFdBQVMsRUFBRSxDQUhaO0FBSUNDLE1BQUksRUFBRSxDQUpQO0FBS0NDLE1BQUksRUFBRSxDQUxQO0FBTUNDLFlBQVUsRUFBRTtBQUNYQyxTQUFLLEVBQUUsTUFESTtBQUVYQyxRQUFJLEVBQUUsR0FGSztBQUdYQyxRQUFJLEVBQUU7QUFBRUMsT0FBQyxFQUFFLEVBQUw7QUFBU0MsT0FBQyxFQUFFO0FBQVosS0FISztBQUlYQyxTQUFLLEVBQUUsQ0FKSTtBQUtYQyxVQUFNLEVBQUU7QUFMRztBQU5iLENBRGlCLEVBZWpCO0FBQ0NaLElBQUUsRUFBRSxDQURMO0FBRUNDLE1BQUksRUFBRSxNQUZQO0FBR0NDLFdBQVMsRUFBRSxDQUhaO0FBSUNDLE1BQUksRUFBRSxDQUpQO0FBS0NDLE1BQUksRUFBRSxDQUxQO0FBTUNDLFlBQVUsRUFBRTtBQUNYQyxTQUFLLEVBQUUsTUFESTtBQUVYQyxRQUFJLEVBQUUsRUFGSztBQUdYQyxRQUFJLEVBQUU7QUFBRUMsT0FB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O0FBQUE7QUFBQTtBQUFBLGVBRGM7QUFBQSxLQUFkLENBTEYsZUFlQyxxRUFBQyxvREFBRCxDQUFRLEdBQVI7QUFBWSxlQUFTLEVBQUMsOEJBQXRCO0FBQ0MsaUJBQVcsRUFBRTtBQUFBLGVBQU11QixZQUFZLENBQUMsQ0FBQyxDQUFGLENBQWxCO0FBQUE7QUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZkQsZUFrQkU7QUFBQSxzQ0FBb0JMLFNBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQXNCQTs7R0FsQ3VCSixNOztLQUFBQSxNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9zb2d1bWEudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQgR2ltIGZyb20gJy4vZ2ltJ1xuaW1wb3J0IHsgd3JhcCB9IGZyb20gJ3BvcG1vdGlvbidcblxuY29uc3QgZ2ltc1Byb3BzID0gW1xuXHR7XG5cdFx0aWQ6IDAsIC8vIG5lZWRlZCB0byBmaXggXCIga2V5IGZvciBtYXAsIG9yZ2FuaXplIGxheWVyIG9yZGVyIFwiXG5cdFx0dHlwZTogXCJtYWluXCIsXG5cdFx0bGVmdFJpZ2h0OiAwLFxuXHRcdG5leHQ6IDEsXG5cdFx0cHJldjogMixcblx0XHRwcm9wZXJ0aWVzOiB7XG5cdFx0XHR0aXRsZTogXCJtYWluXCIsXG5cdFx0XHRzaXplOiAxMDAsXG5cdFx0XHRwb3NpOiB7IHg6IDQwLCB5OiA1NSB9LFxuXHRcdFx0c2NhbGU6IDIsXG5cdFx0XHR6SW5kZXg6IDEwLFxuXHRcdH1cblx0fSxcblx0e1xuXHRcdGlkOiAxLFxuXHRcdHR5cGU6IFwibmV4dFwiLFxuXHRcdGxlZnRSaWdodDogMSxcblx0XHRuZXh0OiAzLFxuXHRcdHByZXY6IDAsXG5cdFx0cHJvcGVydGllczoge1xuXHRcdFx0dGl0bGU6IFwibmV4dFwiLFxuXHRcdFx0c2l6ZTogNjAsXG5cdFx0XHRwb3NpOiB7IHg6IDg1LCB5OiA0NSB9LFxuXHRcdFx0c2NhbGU6IDEuMixcblx0XHRcdHpJbmRleDogMTAsXG5cblx0XHR9XG5cdH0sXG5cdHtcblx0XHRpZDogMixcblx0XHR0eXBlOiBcInByZXZpb3VzXCIsXG5cdFx0bGVmdFJpZ2h0OiAtMSxcblx0XHRuZXh0OiAwLFxuXHRcdHByZXY6IDQsXG5cdFx0cHJvcGVydGllczoge1xuXHRcdFx0dGl0bGU6IFwicHJldmlvdXNcIixcblx0XHRcdHNpemU6IDgwLFxuXHRcdFx0cG9zaTogeyB4OiA1LCB5OiAxMiB9LFxuXHRcdFx0c2NhbGU6IDEuMSxcblx0XHRcdHpJbmRleDogMTAsXG5cdFx0fVxuXHR9LFxuXHR7XG5cdFx0aWQ6IDMsXG5cdFx0dHlwZTogXCJvbkhvbGRcIixcblx0XHRsZWZ0UmlnaHQ6IDEsXG5cdFx0bmV4dDogNCxcblx0XHRwcmV2OiAxLFxuXHRcdHByb3BlcnRpZXM6IHtcblx0XHRcdHRpdGxlOiBcIi4uLlwiLFxuXHRcdFx0c2l6ZTogNTAsXG5cdFx0XHRwb3NpOiB7IHg6IDYwLCB5OiAxOCB9LFxuXHRcdFx0c2NhbGU6IDAuNSxcblx0XHRcdHpJbmRleDogMCxcblx0XHR9XG5cdH1cblx0LFxuXHR7XG5cdFx0aWQ6IDQsXG5cdFx0dHlwZTogXCJoaWRkZW5cIixcblx0XHRsZWZ0UmlnaHQ6IC0xLFxuXHRcdG5leHQ6IDIsXG5cdFx0cHJldjogMyxcblx0XHRwcm9wZXJ0aWVzOiB7XG5cdFx0XHR0aXRsZTogXCJoaWRkZW5cIixcblx0XHRcdHNpemU6IDQwLFxuXHRcdFx0cG9zaTogeyB4OiA0MCwgeTogOSB9LFxuXHRcdFx0c2NhbGU6IDAuNCxcblx0XHRcdHpJbmRleDogMCxcblx0XHR9XG5cdH1cbl1cblxuY29uc3QgZGF0YSA9IFtcImFib3V0IG1lXCIsIFwibXkgcHJvamVjdHNcIiwgXCJhcnRcIiwgXCJwMVwiLCBcInAyXCJdIFxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTb2d1bWEoeyBoZWlnaHQsIHdpZHRoIH0pIHtcblxuXHRjb25zdCBbW2RpcmVjdGlvbiwgc3RlcHNdLCBzZXRSb3RhdGVdID0gdXNlU3RhdGUoWzAsIDBdKTtcblxuXHRjb25zdCBjdXJyZW50SW5kZXggPSB3cmFwKDAsIDQsIHN0ZXBzKVxuXG5cdGNvbnN0IG5leHRQb3NpdGlvbiA9IChuZXdEaXJlY3Rpb246IG51bWJlcikgPT4ge1xuXHRcdGNvbnNvbGUubG9nKFwiY2xpY2tra2tra1wiKTtcblx0XHRzZXRSb3RhdGUoW25ld0RpcmVjdGlvbiwgc3RlcHMgKyBuZXdEaXJlY3Rpb25dKTtcblx0fVxuXG5cdC8vIGNvbnNvbGUubG9nKGdldEdpbVByb3BzQnlJZCgzKSk7XG5cdHJldHVybiAoXG5cdFx0PG1vdGlvbi5kaXZcblx0XHRcdGNsYXNzTmFtZT17YHJlbGF0aXZlIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtc3RhcnQgJHtoZWlnaHQgfHwgXCJoLTEvMlwifSAke3dpZHRoIHx8IFwidy0xLzJcIn0gIGJvcmRlci1ncmF5LTkwMCBzaGFkb3ctMnhsIGB9XG5cdFx0XHRcblx0XHQ+XG5cblx0XHRcdHtnaW1zUHJvcHMubWFwKChnaW0pID0+IChcblx0XHRcdFx0PEdpbSBcblx0XHRcdFx0XHRrZXk9e2dpbS5pZH1cblx0XHRcdFx0XHRnaW1JZD17Z2ltLmlkfVxuXHRcdFx0XHRcdGRhdGE9e2RhdGF9XG5cdFx0XHRcdFx0ZGlyZWN0aW9uPXtkaXJlY3Rpb259XG5cdFx0XHRcdFx0c3RlcHM9e3N0ZXBzfVxuXHRcdFx0XHRcdG5leHRQb3NpdGlvbj17bmV4dFBvc2l0aW9ufVxuXHRcdFx0XHQvPlxuXHRcdFx0KSl9XG5cdFx0XHQ8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSAgaC01NiB3LTQ4IGJnLXdoaXRlXCJcblx0XHRcdFx0b25Nb3VzZURvd249eygpID0+IG5leHRQb3NpdGlvbigtMSl9XG5cdFx0XHQ+PC9tb3Rpb24uZGl2PlxuXHRcdFx0XHQ8aDE+XCJkaXJlY3Rpb24gOiBcIiB7ZGlyZWN0aW9ufTwvaDE+XG5cdFx0PC9tb3Rpb24uZGl2PlxuXHQpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/soguma.tsx\n");

/***/ })

})