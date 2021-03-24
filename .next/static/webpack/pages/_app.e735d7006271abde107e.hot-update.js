webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/soguma.tsx":
/*!*******************************!*\
  !*** ./components/soguma.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Soguma; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _goinfre_hmhindat_portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _gim__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gim */ \"./components/gim.tsx\");\n/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! popmotion */ \"./node_modules/popmotion/dist/es/index.js\");\n\n\n\nvar _jsxFileName = \"/goinfre/hmhindat/portfolio/components/soguma.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\nvar gimsProps = [{\n  id: 0,\n  // needed to fix \" key for map, organize layer order \"\n  type: \"main\",\n  leftRight: 0,\n  next: 1,\n  prev: 2,\n  properties: {\n    title: \"main\",\n    size: 100,\n    posi: {\n      x: 40,\n      y: 55\n    },\n    scale: 2,\n    zIndex: 10\n  }\n}, {\n  id: 1,\n  type: \"next\",\n  leftRight: 1,\n  next: 3,\n  prev: 0,\n  properties: {\n    title: \"next\",\n    size: 60,\n    posi: {\n      x: 85,\n      y: 45\n    },\n    scale: 1.2,\n    zIndex: 10\n  }\n}, {\n  id: 2,\n  type: \"previous\",\n  leftRight: -1,\n  next: 0,\n  prev: 4,\n  properties: {\n    title: \"previous\",\n    size: 80,\n    posi: {\n      x: 5,\n      y: 12\n    },\n    scale: 1.1,\n    zIndex: 10\n  }\n}, {\n  id: 3,\n  type: \"onHold\",\n  leftRight: 1,\n  next: 4,\n  prev: 1,\n  properties: {\n    title: \"...\",\n    size: 50,\n    posi: {\n      x: 60,\n      y: 18\n    },\n    scale: 0.5,\n    zIndex: 0\n  }\n}, {\n  id: 4,\n  type: \"hidden\",\n  leftRight: -1,\n  next: 2,\n  prev: 3,\n  properties: {\n    title: \"hidden\",\n    size: 40,\n    posi: {\n      x: 40,\n      y: 9\n    },\n    scale: 0.4,\n    zIndex: 0\n  }\n}];\nvar data = [\"about me\", \"my projects\", \"art\", \"p1\", \"p2\"];\nfunction Soguma(_ref) {\n  _s();\n\n  var _this = this;\n\n  var height = _ref.height,\n      width = _ref.width;\n\n  var _useViewportScroll = Object(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"useViewportScroll\"])(),\n      scrollYProgress = _useViewportScroll.scrollYProgress;\n\n  var sogumaScale = Object(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"useTransform\"])(scrollYProgress, [0, 0.5], [1, 0]);\n  var sogumaYoffset = Object(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"useTransform\"])(scrollYProgress, [0, 0.5], [0, -1000]);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([0, 0]),\n      _useState$ = Object(_goinfre_hmhindat_portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState[0], 2),\n      direction = _useState$[0],\n      steps = _useState$[1],\n      setRotate = _useState[1];\n\n  var currentIndex = Object(popmotion__WEBPACK_IMPORTED_MODULE_5__[\"wrap\"])(0, 4, steps);\n\n  var nextPosition = function nextPosition(newDirection) {\n    setRotate([newDirection, steps + newDirection]);\n  }; // console.log(getGimPropsById(3));\n\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n    className: \"relative flex justify-center items-start \".concat(height || \"h-1/2\", \" \").concat(width || \"w-1/2\", \"  border-gray-900 shadow-2xl  \"),\n    initial: \"initial\",\n    animate: \"standing\",\n    variants: {\n      initial: {\n        y: -410,\n        x: 30,\n        scale: 0.1\n      },\n      standing: {\n        y: 0,\n        x: 0,\n        scale: 1,\n        transition: {\n          duration: 1.5 // x : { yoyo : Infinity, duration : 2},\n\n        }\n      }\n    },\n    style: {\n      scale: sogumaScale,\n      y: sogumaYoffset\n    },\n    children: [gimsProps.map(function (gim) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_gim__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        gimId: gim.id,\n        data: data,\n        direction: direction,\n        steps: steps,\n        nextPosition: nextPosition\n      }, gim.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 5\n      }, _this);\n    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n      className: \"relative h-60 w-44 bg-white\",\n      initial: \"initial\",\n      animate: \"standing\",\n      variants: {\n        initial: {\n          scale: 0.2,\n          x: 10,\n          // opacity : 0,\n          y: -100,\n          rotate: 20 // transition : {\n          // \tduration : 2,\n          // }\n\n        },\n        standing: {\n          scale: 1.1,\n          // opacity : 1,\n          y: [-12, -25],\n          rotate: 5,\n          x: [-5, 0],\n          transition: {\n            y: {\n              yoyo: Infinity,\n              duration: 1\n            },\n            duration: 2,\n            // delay : 2.5,\n            x: {\n              duration: 2\n            },\n            scale: {\n              type: 'spring',\n              duration: 1\n            }\n          }\n        }\n      },\n      onMouseDown: function onMouseDown() {\n        return nextPosition(-1);\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"/scene\",\n        children: \"link\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 165,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 97,\n    columnNumber: 3\n  }, this);\n}\n\n_s(Soguma, \"3i63s4UKiqQ2GNCtJGPl3LWRBhw=\", false, function () {\n  return [framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"useViewportScroll\"], framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"useTransform\"]];\n});\n\n_c = Soguma;\n\nvar _c;\n\n$RefreshReg$(_c, \"Soguma\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zb2d1bWEudHN4PzZjOWQiXSwibmFtZXMiOlsiZ2ltc1Byb3BzIiwiaWQiLCJ0eXBlIiwibGVmdFJpZ2h0IiwibmV4dCIsInByZXYiLCJwcm9wZXJ0aWVzIiwidGl0bGUiLCJzaXplIiwicG9zaSIsIngiLCJ5Iiwic2NhbGUiLCJ6SW5kZXgiLCJkYXRhIiwiU29ndW1hIiwiaGVpZ2h0Iiwid2lkdGgiLCJ1c2VWaWV3cG9ydFNjcm9sbCIsInNjcm9sbFlQcm9ncmVzcyIsInNvZ3VtYVNjYWxlIiwidXNlVHJhbnNmb3JtIiwic29ndW1hWW9mZnNldCIsInVzZVN0YXRlIiwiZGlyZWN0aW9uIiwic3RlcHMiLCJzZXRSb3RhdGUiLCJjdXJyZW50SW5kZXgiLCJ3cmFwIiwibmV4dFBvc2l0aW9uIiwibmV3RGlyZWN0aW9uIiwiaW5pdGlhbCIsInN0YW5kaW5nIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwibWFwIiwiZ2ltIiwicm90YXRlIiwieW95byIsIkluZmluaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUcsQ0FDakI7QUFDQ0MsSUFBRSxFQUFFLENBREw7QUFDUTtBQUNQQyxNQUFJLEVBQUUsTUFGUDtBQUdDQyxXQUFTLEVBQUUsQ0FIWjtBQUlDQyxNQUFJLEVBQUUsQ0FKUDtBQUtDQyxNQUFJLEVBQUUsQ0FMUDtBQU1DQyxZQUFVLEVBQUU7QUFDWEMsU0FBSyxFQUFFLE1BREk7QUFFWEMsUUFBSSxFQUFFLEdBRks7QUFHWEMsUUFBSSxFQUFFO0FBQUVDLE9BQUMsRUFBRSxFQUFMO0FBQVNDLE9BQUMsRUFBRTtBQUFaLEtBSEs7QUFJWEMsU0FBSyxFQUFFLENBSkk7QUFLWEMsVUFBTSxFQUFFO0FBTEc7QUFOYixDQURpQixFQWVqQjtBQUNDWixJQUFFLEVBQUUsQ0FETDtBQUVDQyxNQUFJLEVBQUUsTUFGUDtBQUdDQyxX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ZUFBTyxFQUFHO0FBQ1RuQixlQUFLLEVBQUcsR0FEQztBQUVURixXQUFDLEVBQUMsRUFGTztBQUdUO0FBQ0FDLFdBQUMsRUFBRyxDQUFDLEdBSkk7QUFLVDBCLGdCQUFNLEVBQUcsRUFMQSxDQU1UO0FBQ0E7QUFDQTs7QUFSUyxTQUREO0FBV1RMLGdCQUFRLEVBQUc7QUFDVnBCLGVBQUssRUFBRSxHQURHO0FBRVY7QUFDQUQsV0FBQyxFQUFHLENBQUMsQ0FBQyxFQUFGLEVBQU0sQ0FBQyxFQUFQLENBSE07QUFJVjBCLGdCQUFNLEVBQUcsQ0FKQztBQUtWM0IsV0FBQyxFQUFHLENBQUMsQ0FBQyxDQUFGLEVBQUssQ0FBTCxDQUxNO0FBTVZ1QixvQkFBVSxFQUFHO0FBQ1p0QixhQUFDLEVBQUc7QUFBRTJCLGtCQUFJLEVBQUdDLFFBQVQ7QUFBbUJMLHNCQUFRLEVBQUc7QUFBOUIsYUFEUTtBQUVaQSxvQkFBUSxFQUFHLENBRkM7QUFHWjtBQUNBeEIsYUFBQyxFQUFHO0FBQUV3QixzQkFBUSxFQUFHO0FBQWIsYUFKUTtBQUtadEIsaUJBQUssRUFBRztBQUFDVixrQkFBSSxFQUFHLFFBQVI7QUFBa0JnQyxzQkFBUSxFQUFHO0FBQTdCO0FBTEk7QUFOSDtBQVhGLE9BSFg7QUE2QkMsaUJBQVcsRUFBRTtBQUFBLGVBQU1MLFlBQVksQ0FBQyxDQUFDLENBQUYsQ0FBbEI7QUFBQSxPQTdCZDtBQUFBLDZCQStCQztBQUFHLFlBQUksRUFBQyxRQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBL0JEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFyQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUF5RUE7O0dBdEZ1QmQsTTtVQUNLRywrRCxFQUNQRywwRCxFQUNDQSwwRDs7O0tBSENOLE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL3NvZ3VtYS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbW90aW9uLCB1c2VUcmFuc2Zvcm0sIHVzZVZpZXdwb3J0U2Nyb2xsLCB1c2VNb3Rpb25WYWx1ZSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQgR2ltIGZyb20gJy4vZ2ltJ1xuaW1wb3J0IHsgd3JhcCB9IGZyb20gJ3BvcG1vdGlvbidcblxuY29uc3QgZ2ltc1Byb3BzID0gW1xuXHR7XG5cdFx0aWQ6IDAsIC8vIG5lZWRlZCB0byBmaXggXCIga2V5IGZvciBtYXAsIG9yZ2FuaXplIGxheWVyIG9yZGVyIFwiXG5cdFx0dHlwZTogXCJtYWluXCIsXG5cdFx0bGVmdFJpZ2h0OiAwLFxuXHRcdG5leHQ6IDEsXG5cdFx0cHJldjogMixcblx0XHRwcm9wZXJ0aWVzOiB7XG5cdFx0XHR0aXRsZTogXCJtYWluXCIsXG5cdFx0XHRzaXplOiAxMDAsXG5cdFx0XHRwb3NpOiB7IHg6IDQwLCB5OiA1NSB9LFxuXHRcdFx0c2NhbGU6IDIsXG5cdFx0XHR6SW5kZXg6IDEwLFxuXHRcdH1cblx0fSxcblx0e1xuXHRcdGlkOiAxLFxuXHRcdHR5cGU6IFwibmV4dFwiLFxuXHRcdGxlZnRSaWdodDogMSxcblx0XHRuZXh0OiAzLFxuXHRcdHByZXY6IDAsXG5cdFx0cHJvcGVydGllczoge1xuXHRcdFx0dGl0bGU6IFwibmV4dFwiLFxuXHRcdFx0c2l6ZTogNjAsXG5cdFx0XHRwb3NpOiB7IHg6IDg1LCB5OiA0NSB9LFxuXHRcdFx0c2NhbGU6IDEuMixcblx0XHRcdHpJbmRleDogMTAsXG5cblx0XHR9XG5cdH0sXG5cdHtcblx0XHRpZDogMixcblx0XHR0eXBlOiBcInByZXZpb3VzXCIsXG5cdFx0bGVmdFJpZ2h0OiAtMSxcblx0XHRuZXh0OiAwLFxuXHRcdHByZXY6IDQsXG5cdFx0cHJvcGVydGllczoge1xuXHRcdFx0dGl0bGU6IFwicHJldmlvdXNcIixcblx0XHRcdHNpemU6IDgwLFxuXHRcdFx0cG9zaTogeyB4OiA1LCB5OiAxMiB9LFxuXHRcdFx0c2NhbGU6IDEuMSxcblx0XHRcdHpJbmRleDogMTAsXG5cdFx0fVxuXHR9LFxuXHR7XG5cdFx0aWQ6IDMsXG5cdFx0dHlwZTogXCJvbkhvbGRcIixcblx0XHRsZWZ0UmlnaHQ6IDEsXG5cdFx0bmV4dDogNCxcblx0XHRwcmV2OiAxLFxuXHRcdHByb3BlcnRpZXM6IHtcblx0XHRcdHRpdGxlOiBcIi4uLlwiLFxuXHRcdFx0c2l6ZTogNTAsXG5cdFx0XHRwb3NpOiB7IHg6IDYwLCB5OiAxOCB9LFxuXHRcdFx0c2NhbGU6IDAuNSxcblx0XHRcdHpJbmRleDogMCxcblx0XHR9XG5cdH1cblx0LFxuXHR7XG5cdFx0aWQ6IDQsXG5cdFx0dHlwZTogXCJoaWRkZW5cIixcblx0XHRsZWZ0UmlnaHQ6IC0xLFxuXHRcdG5leHQ6IDIsXG5cdFx0cHJldjogMyxcblx0XHRwcm9wZXJ0aWVzOiB7XG5cdFx0XHR0aXRsZTogXCJoaWRkZW5cIixcblx0XHRcdHNpemU6IDQwLFxuXHRcdFx0cG9zaTogeyB4OiA0MCwgeTogOSB9LFxuXHRcdFx0c2NhbGU6IDAuNCxcblx0XHRcdHpJbmRleDogMCxcblx0XHR9XG5cdH1cbl1cblxuY29uc3QgZGF0YSA9IFtcImFib3V0IG1lXCIsIFwibXkgcHJvamVjdHNcIiwgXCJhcnRcIiwgXCJwMVwiLCBcInAyXCJdXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNvZ3VtYSh7IGhlaWdodCwgd2lkdGggfSkge1xuXHRjb25zdCB7IHNjcm9sbFlQcm9ncmVzcyB9ID0gdXNlVmlld3BvcnRTY3JvbGwoKTtcbiAgY29uc3Qgc29ndW1hU2NhbGUgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMC41XSwgWzEsIDBdKTtcblx0Y29uc3Qgc29ndW1hWW9mZnNldCA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAwLjVdLCBbMCwgLTEwMDBdKTtcblx0Y29uc3QgW1tkaXJlY3Rpb24sIHN0ZXBzXSwgc2V0Um90YXRlXSA9IHVzZVN0YXRlKFswLCAwXSk7XG5cblx0Y29uc3QgY3VycmVudEluZGV4ID0gd3JhcCgwLCA0LCBzdGVwcylcblxuXHRjb25zdCBuZXh0UG9zaXRpb24gPSAobmV3RGlyZWN0aW9uOiBudW1iZXIpID0+IHtcblx0XHRzZXRSb3RhdGUoW25ld0RpcmVjdGlvbiwgc3RlcHMgKyBuZXdEaXJlY3Rpb25dKTtcblx0fVxuXG5cdC8vIGNvbnNvbGUubG9nKGdldEdpbVByb3BzQnlJZCgzKSk7XG5cdHJldHVybiAoXG5cdFx0PG1vdGlvbi5kaXZcblx0XHRcdGNsYXNzTmFtZT17YHJlbGF0aXZlIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtc3RhcnQgJHtoZWlnaHQgfHwgXCJoLTEvMlwifSAke3dpZHRoIHx8IFwidy0xLzJcIn0gIGJvcmRlci1ncmF5LTkwMCBzaGFkb3ctMnhsICBgfVxuXHRcdFx0aW5pdGlhbD1cImluaXRpYWxcIlxuXHRcdFx0YW5pbWF0ZT1cInN0YW5kaW5nXCJcblx0XHRcdHZhcmlhbnRzPXt7XG5cdFx0XHRcdGluaXRpYWwgOiB7XG5cdFx0XHRcdFx0eSA6IC00MTAsXG5cdFx0XHRcdFx0eCA6IDMwLFxuXHRcdFx0XHRcdHNjYWxlIDogMC4xLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRzdGFuZGluZyA6IHtcblx0XHRcdFx0XHR5IDogMCxcblx0XHRcdFx0XHR4OiAwLFxuXHRcdFx0XHRcdHNjYWxlOiAxLFxuXHRcdFx0XHRcdHRyYW5zaXRpb24gOiB7XG5cdFx0XHRcdFx0XHRkdXJhdGlvbiA6IDEuNSxcblx0XHRcdFx0XHRcdC8vIHggOiB7IHlveW8gOiBJbmZpbml0eSwgZHVyYXRpb24gOiAyfSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9LFxuXHRcdFx0fX1cblx0XHRcdHN0eWxlPXtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHNjYWxlIDogc29ndW1hU2NhbGUsXG5cdFx0XHRcdFx0eSA6IHNvZ3VtYVlvZmZzZXRcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdD5cblx0XHRcdHtnaW1zUHJvcHMubWFwKChnaW0pID0+IChcblx0XHRcdFx0PEdpbVxuXHRcdFx0XHRcdGtleT17Z2ltLmlkfVxuXHRcdFx0XHRcdGdpbUlkPXtnaW0uaWR9XG5cdFx0XHRcdFx0ZGF0YT17ZGF0YX1cblx0XHRcdFx0XHRkaXJlY3Rpb249e2RpcmVjdGlvbn1cblx0XHRcdFx0XHRzdGVwcz17c3RlcHN9XG5cdFx0XHRcdFx0bmV4dFBvc2l0aW9uPXtuZXh0UG9zaXRpb259XG5cdFx0XHRcdC8+XG5cdFx0XHQpKX1cblx0XHRcdDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGgtNjAgdy00NCBiZy13aGl0ZVwiXG5cdFx0XHRcdGluaXRpYWw9XCJpbml0aWFsXCJcblx0XHRcdFx0YW5pbWF0ZT1cInN0YW5kaW5nXCJcblx0XHRcdFx0dmFyaWFudHM9e3tcblx0XHRcdFx0XHRpbml0aWFsIDoge1xuXHRcdFx0XHRcdFx0c2NhbGUgOiAwLjIsXG5cdFx0XHRcdFx0XHR4OjEwLFxuXHRcdFx0XHRcdFx0Ly8gb3BhY2l0eSA6IDAsXG5cdFx0XHRcdFx0XHR5IDogLTEwMCxcblx0XHRcdFx0XHRcdHJvdGF0ZSA6IDIwLFxuXHRcdFx0XHRcdFx0Ly8gdHJhbnNpdGlvbiA6IHtcblx0XHRcdFx0XHRcdC8vIFx0ZHVyYXRpb24gOiAyLFxuXHRcdFx0XHRcdFx0Ly8gfVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0c3RhbmRpbmcgOiB7XG5cdFx0XHRcdFx0XHRzY2FsZTogMS4xLFxuXHRcdFx0XHRcdFx0Ly8gb3BhY2l0eSA6IDEsXG5cdFx0XHRcdFx0XHR5IDogWy0xMiwgLTI1XSxcblx0XHRcdFx0XHRcdHJvdGF0ZSA6IDUsXG5cdFx0XHRcdFx0XHR4IDogWy01ICwwXSxcblx0XHRcdFx0XHRcdHRyYW5zaXRpb24gOiB7XG5cdFx0XHRcdFx0XHRcdHkgOiB7IHlveW8gOiBJbmZpbml0eSwgZHVyYXRpb24gOiAxfSxcblx0XHRcdFx0XHRcdFx0ZHVyYXRpb24gOiAyLFxuXHRcdFx0XHRcdFx0XHQvLyBkZWxheSA6IDIuNSxcblx0XHRcdFx0XHRcdFx0eCA6IHsgZHVyYXRpb24gOiAyfSxcblx0XHRcdFx0XHRcdFx0c2NhbGUgOiB7dHlwZSA6ICdzcHJpbmcnLCBkdXJhdGlvbiA6IDF9XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH19XG5cdFx0XHRcdG9uTW91c2VEb3duPXsoKSA9PiBuZXh0UG9zaXRpb24oLTEpfVxuXHRcdFx0PlxuXHRcdFx0XHQ8YSBocmVmPScvc2NlbmUnPmxpbms8L2E+XG5cdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0PC9tb3Rpb24uZGl2PlxuXHQpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/soguma.tsx\n");

/***/ })

})