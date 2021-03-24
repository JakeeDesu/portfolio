webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/soguma.tsx":
/*!*******************************!*\
  !*** ./components/soguma.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Soguma; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _gim__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gim */ \"./components/gim.tsx\");\n/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! popmotion */ \"./node_modules/popmotion/dist/es/index.js\");\n\n\n\nvar _jsxFileName = \"/home/hamza/Desktop/portfolio/components/soguma.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\nvar gimsProps = [{\n  id: 0,\n  // needed to fix \" key for map, organize layer order \"\n  type: \"main\",\n  leftRight: 0,\n  next: 1,\n  prev: 2,\n  properties: {\n    title: \"main\",\n    size: 100,\n    posi: {\n      x: 40,\n      y: 55\n    },\n    scale: 2,\n    zIndex: 10\n  }\n}, {\n  id: 1,\n  type: \"next\",\n  leftRight: 1,\n  next: 3,\n  prev: 0,\n  properties: {\n    title: \"next\",\n    size: 60,\n    posi: {\n      x: 85,\n      y: 45\n    },\n    scale: 1.2,\n    zIndex: 10\n  }\n}, {\n  id: 2,\n  type: \"previous\",\n  leftRight: -1,\n  next: 0,\n  prev: 4,\n  properties: {\n    title: \"previous\",\n    size: 80,\n    posi: {\n      x: 5,\n      y: 12\n    },\n    scale: 1.1,\n    zIndex: 10\n  }\n}, {\n  id: 3,\n  type: \"onHold\",\n  leftRight: 1,\n  next: 4,\n  prev: 1,\n  properties: {\n    title: \"...\",\n    size: 50,\n    posi: {\n      x: 60,\n      y: 18\n    },\n    scale: 0.5,\n    zIndex: 0\n  }\n}, {\n  id: 4,\n  type: \"hidden\",\n  leftRight: -1,\n  next: 2,\n  prev: 3,\n  properties: {\n    title: \"hidden\",\n    size: 40,\n    posi: {\n      x: 40,\n      y: 9\n    },\n    scale: 0.4,\n    zIndex: 0\n  }\n}];\nvar data = [\"about me\", \"my projects\", \"art\", \"p1\", \"p2\"];\nfunction Soguma(_ref) {\n  _s();\n\n  var _this = this;\n\n  var height = _ref.height,\n      width = _ref.width;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([0, 0]),\n      _useState$ = Object(_home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState[0], 2),\n      direction = _useState$[0],\n      steps = _useState$[1],\n      setRotate = _useState[1];\n\n  var currentIndex = Object(popmotion__WEBPACK_IMPORTED_MODULE_5__[\"wrap\"])(0, 4, steps);\n\n  var nextPosition = function nextPosition(newDirection) {\n    console.log(\"clickkkkkk\");\n    setRotate([newDirection, steps + newDirection]);\n  }; // console.log(getGimPropsById(3));\n\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n    className: \"relative flex justify-center items-start \".concat(height || \"h-1/2\", \" \").concat(width || \"w-1/2\", \"  border-gray-900 shadow-2xl  \"),\n    initial: \"initial\",\n    animate: \"standing\",\n    variants: {\n      initial: {\n        y: -410,\n        x: 30,\n        scale: 0.1\n      },\n      standing: {\n        y: 0,\n        x: 0,\n        scale: 1,\n        transition: {\n          duration: 1.5 // x : { yoyo : Infinity, duration : 2},\n\n        }\n      }\n    },\n    children: [gimsProps.map(function (gim) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_gim__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        gimId: gim.id,\n        data: data,\n        direction: direction,\n        steps: steps,\n        nextPosition: nextPosition\n      }, gim.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 5\n      }, _this);\n    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n      className: \"relative h-60 w-44 bg-white\",\n      initial: \"initial\",\n      animate: \"standing\",\n      variants: {\n        initial: {\n          scale: 0.2,\n          x: 10,\n          // opacity : 0,\n          y: -100,\n          rotate: 20 // transition : {\n          // \tduration : 2,\n          // }\n\n        },\n        standing: {\n          scale: 1.1,\n          // opacity : 1,\n          y: [-12, -25],\n          rotate: 5,\n          x: 0,\n          transition: {\n            y: {\n              yoyo: Infinity,\n              duration: 1\n            },\n            duration: 2 // delay : 2.5,\n            // x : { yoyo : Infinity, duration : 2},\n\n          }\n        }\n      },\n      onMouseDown: function onMouseDown() {\n        return nextPosition(-1);\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"/scene\",\n        children: \"link\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 157,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 96,\n    columnNumber: 3\n  }, this);\n}\n\n_s(Soguma, \"jxywUSMGD1MnKJWZBoQRMUqJkp4=\");\n\n_c = Soguma;\n\nvar _c;\n\n$RefreshReg$(_c, \"Soguma\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zb2d1bWEudHN4PzZjOWQiXSwibmFtZXMiOlsiZ2ltc1Byb3BzIiwiaWQiLCJ0eXBlIiwibGVmdFJpZ2h0IiwibmV4dCIsInByZXYiLCJwcm9wZXJ0aWVzIiwidGl0bGUiLCJzaXplIiwicG9zaSIsIngiLCJ5Iiwic2NhbGUiLCJ6SW5kZXgiLCJkYXRhIiwiU29ndW1hIiwiaGVpZ2h0Iiwid2lkdGgiLCJ1c2VTdGF0ZSIsImRpcmVjdGlvbiIsInN0ZXBzIiwic2V0Um90YXRlIiwiY3VycmVudEluZGV4Iiwid3JhcCIsIm5leHRQb3NpdGlvbiIsIm5ld0RpcmVjdGlvbiIsImNvbnNvbGUiLCJsb2ciLCJpbml0aWFsIiwic3RhbmRpbmciLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJtYXAiLCJnaW0iLCJyb3RhdGUiLCJ5b3lvIiwiSW5maW5pdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBRyxDQUNqQjtBQUNDQyxJQUFFLEVBQUUsQ0FETDtBQUNRO0FBQ1BDLE1BQUksRUFBRSxNQUZQO0FBR0NDLFdBQVMsRUFBRSxDQUhaO0FBSUNDLE1BQUksRUFBRSxDQUpQO0FBS0NDLE1BQUksRUFBRSxDQUxQO0FBTUNDLFlBQVUsRUFBRTtBQUNYQyxTQUFLLEVBQUUsTUFESTtBQUVYQyxRQUFJLEVBQUUsR0FGSztBQUdYQyxRQUFJLEVBQUU7QUFBRUMsT0FBQyxFQUFFLEVBQUw7QUFBU0MsT0FBQyxFQUFFO0FBQVosS0FISztBQUlYQyxTQUFLLEVBQUUsQ0FKSTtBQUtYQyxVQUFNLEVBQUU7QUFMRztBQU5iLENBRGlCLEVBZWpCO0FBQ0NaLElBQUUsRUFBRSxDQURMO0FBRUNDLE1BQUksRUFBRSxNQUZQO0FBR0NDLFdBQVMsRUFBRSxDQUhaO0FBSUNDLE1BQUksRUFBRSxDQUpQO0FBS0NDLE1BQUksRUFBRSxDQUxQO0FBTUNDLFlBQVUs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WjtBQUNBOztBQUpZO0FBTkg7QUFYRixPQUhYO0FBNEJDLGlCQUFXLEVBQUU7QUFBQSxlQUFNUCxZQUFZLENBQUMsQ0FBQyxDQUFGLENBQWxCO0FBQUEsT0E1QmQ7QUFBQSw2QkE4QkM7QUFBRyxZQUFJLEVBQUMsUUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTlCRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBL0JEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBa0VBOztHQTlFdUJULE07O0tBQUFBLE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL3NvZ3VtYS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCBHaW0gZnJvbSAnLi9naW0nXG5pbXBvcnQgeyB3cmFwIH0gZnJvbSAncG9wbW90aW9uJ1xuXG5jb25zdCBnaW1zUHJvcHMgPSBbXG5cdHtcblx0XHRpZDogMCwgLy8gbmVlZGVkIHRvIGZpeCBcIiBrZXkgZm9yIG1hcCwgb3JnYW5pemUgbGF5ZXIgb3JkZXIgXCJcblx0XHR0eXBlOiBcIm1haW5cIixcblx0XHRsZWZ0UmlnaHQ6IDAsXG5cdFx0bmV4dDogMSxcblx0XHRwcmV2OiAyLFxuXHRcdHByb3BlcnRpZXM6IHtcblx0XHRcdHRpdGxlOiBcIm1haW5cIixcblx0XHRcdHNpemU6IDEwMCxcblx0XHRcdHBvc2k6IHsgeDogNDAsIHk6IDU1IH0sXG5cdFx0XHRzY2FsZTogMixcblx0XHRcdHpJbmRleDogMTAsXG5cdFx0fVxuXHR9LFxuXHR7XG5cdFx0aWQ6IDEsXG5cdFx0dHlwZTogXCJuZXh0XCIsXG5cdFx0bGVmdFJpZ2h0OiAxLFxuXHRcdG5leHQ6IDMsXG5cdFx0cHJldjogMCxcblx0XHRwcm9wZXJ0aWVzOiB7XG5cdFx0XHR0aXRsZTogXCJuZXh0XCIsXG5cdFx0XHRzaXplOiA2MCxcblx0XHRcdHBvc2k6IHsgeDogODUsIHk6IDQ1IH0sXG5cdFx0XHRzY2FsZTogMS4yLFxuXHRcdFx0ekluZGV4OiAxMCxcblxuXHRcdH1cblx0fSxcblx0e1xuXHRcdGlkOiAyLFxuXHRcdHR5cGU6IFwicHJldmlvdXNcIixcblx0XHRsZWZ0UmlnaHQ6IC0xLFxuXHRcdG5leHQ6IDAsXG5cdFx0cHJldjogNCxcblx0XHRwcm9wZXJ0aWVzOiB7XG5cdFx0XHR0aXRsZTogXCJwcmV2aW91c1wiLFxuXHRcdFx0c2l6ZTogODAsXG5cdFx0XHRwb3NpOiB7IHg6IDUsIHk6IDEyIH0sXG5cdFx0XHRzY2FsZTogMS4xLFxuXHRcdFx0ekluZGV4OiAxMCxcblx0XHR9XG5cdH0sXG5cdHtcblx0XHRpZDogMyxcblx0XHR0eXBlOiBcIm9uSG9sZFwiLFxuXHRcdGxlZnRSaWdodDogMSxcblx0XHRuZXh0OiA0LFxuXHRcdHByZXY6IDEsXG5cdFx0cHJvcGVydGllczoge1xuXHRcdFx0dGl0bGU6IFwiLi4uXCIsXG5cdFx0XHRzaXplOiA1MCxcblx0XHRcdHBvc2k6IHsgeDogNjAsIHk6IDE4IH0sXG5cdFx0XHRzY2FsZTogMC41LFxuXHRcdFx0ekluZGV4OiAwLFxuXHRcdH1cblx0fVxuXHQsXG5cdHtcblx0XHRpZDogNCxcblx0XHR0eXBlOiBcImhpZGRlblwiLFxuXHRcdGxlZnRSaWdodDogLTEsXG5cdFx0bmV4dDogMixcblx0XHRwcmV2OiAzLFxuXHRcdHByb3BlcnRpZXM6IHtcblx0XHRcdHRpdGxlOiBcImhpZGRlblwiLFxuXHRcdFx0c2l6ZTogNDAsXG5cdFx0XHRwb3NpOiB7IHg6IDQwLCB5OiA5IH0sXG5cdFx0XHRzY2FsZTogMC40LFxuXHRcdFx0ekluZGV4OiAwLFxuXHRcdH1cblx0fVxuXVxuXG5jb25zdCBkYXRhID0gW1wiYWJvdXQgbWVcIiwgXCJteSBwcm9qZWN0c1wiLCBcImFydFwiLCBcInAxXCIsIFwicDJcIl0gXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNvZ3VtYSh7IGhlaWdodCwgd2lkdGggfSkge1xuXG5cdGNvbnN0IFtbZGlyZWN0aW9uLCBzdGVwc10sIHNldFJvdGF0ZV0gPSB1c2VTdGF0ZShbMCwgMF0pO1xuXG5cdGNvbnN0IGN1cnJlbnRJbmRleCA9IHdyYXAoMCwgNCwgc3RlcHMpXG5cblx0Y29uc3QgbmV4dFBvc2l0aW9uID0gKG5ld0RpcmVjdGlvbjogbnVtYmVyKSA9PiB7XG5cdFx0Y29uc29sZS5sb2coXCJjbGlja2tra2trXCIpO1xuXHRcdHNldFJvdGF0ZShbbmV3RGlyZWN0aW9uLCBzdGVwcyArIG5ld0RpcmVjdGlvbl0pO1xuXHR9XG5cblx0Ly8gY29uc29sZS5sb2coZ2V0R2ltUHJvcHNCeUlkKDMpKTtcblx0cmV0dXJuIChcblx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0Y2xhc3NOYW1lPXtgcmVsYXRpdmUgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1zdGFydCAke2hlaWdodCB8fCBcImgtMS8yXCJ9ICR7d2lkdGggfHwgXCJ3LTEvMlwifSAgYm9yZGVyLWdyYXktOTAwIHNoYWRvdy0yeGwgIGB9XG5cdFx0XHRpbml0aWFsPVwiaW5pdGlhbFwiXG5cdFx0XHRhbmltYXRlPVwic3RhbmRpbmdcIlxuXHRcdFx0dmFyaWFudHM9e3tcblx0XHRcdFx0aW5pdGlhbCA6IHtcblx0XHRcdFx0XHR5IDogLTQxMCxcblx0XHRcdFx0XHR4IDogMzAsXG5cdFx0XHRcdFx0c2NhbGUgOiAwLjEsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHN0YW5kaW5nIDoge1xuXHRcdFx0XHRcdHkgOiAwLFxuXHRcdFx0XHRcdHg6IDAsXG5cdFx0XHRcdFx0c2NhbGU6IDEsXG5cdFx0XHRcdFx0dHJhbnNpdGlvbiA6IHtcblx0XHRcdFx0XHRcdGR1cmF0aW9uIDogMS41LFxuXHRcdFx0XHRcdFx0Ly8geCA6IHsgeW95byA6IEluZmluaXR5LCBkdXJhdGlvbiA6IDJ9LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH0sXG5cdFx0XHR9fVxuXHRcdD5cblx0XHRcdHtnaW1zUHJvcHMubWFwKChnaW0pID0+IChcblx0XHRcdFx0PEdpbSBcblx0XHRcdFx0XHRrZXk9e2dpbS5pZH1cblx0XHRcdFx0XHRnaW1JZD17Z2ltLmlkfVxuXHRcdFx0XHRcdGRhdGE9e2RhdGF9XG5cdFx0XHRcdFx0ZGlyZWN0aW9uPXtkaXJlY3Rpb259XG5cdFx0XHRcdFx0c3RlcHM9e3N0ZXBzfVxuXHRcdFx0XHRcdG5leHRQb3NpdGlvbj17bmV4dFBvc2l0aW9ufVxuXHRcdFx0XHQvPlxuXHRcdFx0KSl9XG5cdFx0XHQ8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLTYwIHctNDQgYmctd2hpdGVcIlxuXHRcdFx0XHRpbml0aWFsPVwiaW5pdGlhbFwiXG5cdFx0XHRcdGFuaW1hdGU9XCJzdGFuZGluZ1wiXG5cdFx0XHRcdHZhcmlhbnRzPXt7XG5cdFx0XHRcdFx0aW5pdGlhbCA6IHtcblx0XHRcdFx0XHRcdHNjYWxlIDogMC4yLFxuXHRcdFx0XHRcdFx0eDoxMCxcblx0XHRcdFx0XHRcdC8vIG9wYWNpdHkgOiAwLFxuXHRcdFx0XHRcdFx0eSA6IC0xMDAsXG5cdFx0XHRcdFx0XHRyb3RhdGUgOiAyMCxcblx0XHRcdFx0XHRcdC8vIHRyYW5zaXRpb24gOiB7XG5cdFx0XHRcdFx0XHQvLyBcdGR1cmF0aW9uIDogMixcblx0XHRcdFx0XHRcdC8vIH1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHN0YW5kaW5nIDoge1xuXHRcdFx0XHRcdFx0c2NhbGU6IDEuMSxcblx0XHRcdFx0XHRcdC8vIG9wYWNpdHkgOiAxLFxuXHRcdFx0XHRcdFx0eSA6IFstMTIsIC0yNV0sXG5cdFx0XHRcdFx0XHRyb3RhdGUgOiA1LFxuXHRcdFx0XHRcdFx0eCA6IDAsXG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uIDoge1xuXHRcdFx0XHRcdFx0XHR5IDogeyB5b3lvIDogSW5maW5pdHksIGR1cmF0aW9uIDogMX0sXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uIDogMixcblx0XHRcdFx0XHRcdFx0Ly8gZGVsYXkgOiAyLjUsXG5cdFx0XHRcdFx0XHRcdC8vIHggOiB7IHlveW8gOiBJbmZpbml0eSwgZHVyYXRpb24gOiAyfSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fX1cblx0XHRcdFx0b25Nb3VzZURvd249eygpID0+IG5leHRQb3NpdGlvbigtMSl9XG5cdFx0XHQ+XG5cdFx0XHRcdDxhIGhyZWY9Jy9zY2VuZSc+bGluazwvYT5cblx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHQ8L21vdGlvbi5kaXY+XG5cdCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/soguma.tsx\n");

/***/ })

})