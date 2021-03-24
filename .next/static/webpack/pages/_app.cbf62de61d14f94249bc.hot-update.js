webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/soguma.tsx":
/*!*******************************!*\
  !*** ./components/soguma.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Soguma; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _goinfre_hmhindat_portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _gim__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gim */ \"./components/gim.tsx\");\n/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! popmotion */ \"./node_modules/popmotion/dist/es/index.js\");\n\n\n\nvar _jsxFileName = \"/goinfre/hmhindat/portfolio/components/soguma.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\nvar gimsProps = [{\n  id: 0,\n  // needed to fix \" key for map, organize layer order \"\n  type: \"main\",\n  leftRight: 0,\n  next: 1,\n  prev: 2,\n  properties: {\n    title: \"main\",\n    size: 100,\n    posi: {\n      x: 40,\n      y: 55\n    },\n    scale: 2,\n    zIndex: 10\n  }\n}, {\n  id: 1,\n  type: \"next\",\n  leftRight: 1,\n  next: 3,\n  prev: 0,\n  properties: {\n    title: \"next\",\n    size: 60,\n    posi: {\n      x: 85,\n      y: 45\n    },\n    scale: 1.2,\n    zIndex: 10\n  }\n}, {\n  id: 2,\n  type: \"previous\",\n  leftRight: -1,\n  next: 0,\n  prev: 4,\n  properties: {\n    title: \"previous\",\n    size: 80,\n    posi: {\n      x: 5,\n      y: 12\n    },\n    scale: 1.1,\n    zIndex: 10\n  }\n}, {\n  id: 3,\n  type: \"onHold\",\n  leftRight: 1,\n  next: 4,\n  prev: 1,\n  properties: {\n    title: \"...\",\n    size: 50,\n    posi: {\n      x: 60,\n      y: 18\n    },\n    scale: 0.5,\n    zIndex: 0\n  }\n}, {\n  id: 4,\n  type: \"hidden\",\n  leftRight: -1,\n  next: 2,\n  prev: 3,\n  properties: {\n    title: \"hidden\",\n    size: 40,\n    posi: {\n      x: 40,\n      y: 9\n    },\n    scale: 0.4,\n    zIndex: 0\n  }\n}];\nvar data = [\"about me\", \"my projects\", \"art\", \"p1\", \"p2\"];\nfunction Soguma(_ref) {\n  _s();\n\n  var _this = this;\n\n  var height = _ref.height,\n      width = _ref.width;\n\n  var _useViewportScroll = Object(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"useViewportScroll\"])(),\n      scrollYProgress = _useViewportScroll.scrollYProgress;\n\n  var sogumaScale = Object(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"useTransform\"])(scrollYProgress, [0, 1], [1, 0]);\n  var sogumaYoffset = Object(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"useTransform\"])(scrollYProgress, [0, 0.5, 1], [0, -200, -500]);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([0, 0]),\n      _useState$ = Object(_goinfre_hmhindat_portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState[0], 2),\n      direction = _useState$[0],\n      steps = _useState$[1],\n      setRotate = _useState[1];\n\n  var currentIndex = Object(popmotion__WEBPACK_IMPORTED_MODULE_5__[\"wrap\"])(0, 4, steps);\n\n  var nextPosition = function nextPosition(newDirection) {\n    setRotate([newDirection, steps + newDirection]);\n  }; // console.log(getGimPropsById(3));\n\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n    className: \"relative flex justify-center items-start \".concat(height || \"h-1/2\", \" \").concat(width || \"w-1/2\", \"  border-gray-900 shadow-2xl  \"),\n    initial: \"initial\",\n    animate: \"standing\",\n    variants: {\n      initial: {\n        y: -410,\n        x: 30,\n        scale: 0.1\n      },\n      standing: {\n        y: 0,\n        x: 0,\n        scale: 1,\n        transition: {\n          duration: 1.5 // x : { yoyo : Infinity, duration : 2},\n\n        }\n      }\n    },\n    style: {\n      scale: sogumaScale,\n      y: sogumaYoffset\n    },\n    children: [gimsProps.map(function (gim) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_gim__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        gimId: gim.id,\n        data: data,\n        direction: direction,\n        steps: steps,\n        nextPosition: nextPosition\n      }, gim.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 125,\n        columnNumber: 5\n      }, _this);\n    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n      className: \"relative h-60 w-44 bg-white\",\n      initial: \"initial\",\n      animate: \"standing\",\n      variants: {\n        initial: {\n          scale: 0.2,\n          x: 10,\n          // opacity : 0,\n          y: -100,\n          rotate: 20 // transition : {\n          // \tduration : 2,\n          // }\n\n        },\n        standing: {\n          scale: 1.1,\n          // opacity : 1,\n          y: [-12, -25],\n          rotate: 5,\n          x: [-5, 0],\n          transition: {\n            y: {\n              yoyo: Infinity,\n              duration: 1\n            },\n            duration: 2,\n            // delay : 2.5,\n            x: {\n              duration: 2\n            },\n            scale: {\n              type: 'spring',\n              duration: 1\n            }\n          }\n        }\n      },\n      onMouseDown: function onMouseDown() {\n        return nextPosition(-1);\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"/scene\",\n        children: \"link\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 165,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 97,\n    columnNumber: 3\n  }, this);\n}\n\n_s(Soguma, \"3i63s4UKiqQ2GNCtJGPl3LWRBhw=\", false, function () {\n  return [framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"useViewportScroll\"], framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"useTransform\"]];\n});\n\n_c = Soguma;\n\nvar _c;\n\n$RefreshReg$(_c, \"Soguma\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zb2d1bWEudHN4PzZjOWQiXSwibmFtZXMiOlsiZ2ltc1Byb3BzIiwiaWQiLCJ0eXBlIiwibGVmdFJpZ2h0IiwibmV4dCIsInByZXYiLCJwcm9wZXJ0aWVzIiwidGl0bGUiLCJzaXplIiwicG9zaSIsIngiLCJ5Iiwic2NhbGUiLCJ6SW5kZXgiLCJkYXRhIiwiU29ndW1hIiwiaGVpZ2h0Iiwid2lkdGgiLCJ1c2VWaWV3cG9ydFNjcm9sbCIsInNjcm9sbFlQcm9ncmVzcyIsInNvZ3VtYVNjYWxlIiwidXNlVHJhbnNmb3JtIiwic29ndW1hWW9mZnNldCIsInVzZVN0YXRlIiwiZGlyZWN0aW9uIiwic3RlcHMiLCJzZXRSb3RhdGUiLCJjdXJyZW50SW5kZXgiLCJ3cmFwIiwibmV4dFBvc2l0aW9uIiwibmV3RGlyZWN0aW9uIiwiaW5pdGlhbCIsInN0YW5kaW5nIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwibWFwIiwiZ2ltIiwicm90YXRlIiwieW95byIsIkluZmluaXR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUcsQ0FDakI7QUFDQ0MsSUFBRSxFQUFFLENBREw7QUFDUTtBQUNQQyxNQUFJLEVBQUUsTUFGUDtBQUdDQyxXQUFTLEVBQUUsQ0FIWjtBQUlDQyxNQUFJLEVBQUUsQ0FKUDtBQUtDQyxNQUFJLEVBQUUsQ0FMUDtBQU1DQyxZQUFVLEVBQUU7QUFDWEMsU0FBSyxFQUFFLE1BREk7QUFFWEMsUUFBSSxFQUFFLEdBRks7QUFHWEMsUUFBSSxFQUFFO0FBQUVDLE9BQUMsRUFBRSxFQUFMO0FBQVNDLE9BQUMsRUFBRTtBQUFaLEtBSEs7QUFJWEMsU0FBSyxFQUFFLENBSkk7QUFLWEMsVUFBTSxFQUFFO0FBTEc7QUFOYixDQURpQixFQWVqQjtBQUNDWixJQUFFLEVBQUUsQ0FETDtBQUVDQyxNQUFJLEVBQUUsTUFGUDtBQUdDQyxX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RlQ7QUFHQyxjQUFRLEVBQUU7QUFDVDhCLGVBQU8sRUFBRztBQUNUbkIsZUFBSyxFQUFHLEdBREM7QUFFVEYsV0FBQyxFQUFDLEVBRk87QUFHVDtBQUNBQyxXQUFDLEVBQUcsQ0FBQyxHQUpJO0FBS1QwQixnQkFBTSxFQUFHLEVBTEEsQ0FNVDtBQUNBO0FBQ0E7O0FBUlMsU0FERDtBQVdUTCxnQkFBUSxFQUFHO0FBQ1ZwQixlQUFLLEVBQUUsR0FERztBQUVWO0FBQ0FELFdBQUMsRUFBRyxDQUFDLENBQUMsRUFBRixFQUFNLENBQUMsRUFBUCxDQUhNO0FBSVYwQixnQkFBTSxFQUFHLENBSkM7QUFLVjNCLFdBQUMsRUFBRyxDQUFDLENBQUMsQ0FBRixFQUFLLENBQUwsQ0FMTTtBQU1WdUIsb0JBQVUsRUFBRztBQUNadEIsYUFBQyxFQUFHO0FBQUUyQixrQkFBSSxFQUFHQyxRQUFUO0FBQW1CTCxzQkFBUSxFQUFHO0FBQTlCLGFBRFE7QUFFWkEsb0JBQVEsRUFBRyxDQUZDO0FBR1o7QUFDQXhCLGFBQUMsRUFBRztBQUFFd0Isc0JBQVEsRUFBRztBQUFiLGFBSlE7QUFLWnRCLGlCQUFLLEVBQUc7QUFBQ1Ysa0JBQUksRUFBRyxRQUFSO0FBQWtCZ0Msc0JBQVEsRUFBRztBQUE3QjtBQUxJO0FBTkg7QUFYRixPQUhYO0FBNkJDLGlCQUFXLEVBQUU7QUFBQSxlQUFNTCxZQUFZLENBQUMsQ0FBQyxDQUFGLENBQWxCO0FBQUEsT0E3QmQ7QUFBQSw2QkErQkM7QUFBRyxZQUFJLEVBQUMsUUFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQS9CRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBckNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBeUVBOztHQXRGdUJkLE07VUFDS0csK0QsRUFDUEcsMEQsRUFDQ0EsMEQ7OztLQUhDTixNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9zb2d1bWEudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1vdGlvbiwgdXNlVHJhbnNmb3JtLCB1c2VWaWV3cG9ydFNjcm9sbCwgdXNlTW90aW9uVmFsdWUgfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IEdpbSBmcm9tICcuL2dpbSdcbmltcG9ydCB7IHdyYXAgfSBmcm9tICdwb3Btb3Rpb24nXG5cbmNvbnN0IGdpbXNQcm9wcyA9IFtcblx0e1xuXHRcdGlkOiAwLCAvLyBuZWVkZWQgdG8gZml4IFwiIGtleSBmb3IgbWFwLCBvcmdhbml6ZSBsYXllciBvcmRlciBcIlxuXHRcdHR5cGU6IFwibWFpblwiLFxuXHRcdGxlZnRSaWdodDogMCxcblx0XHRuZXh0OiAxLFxuXHRcdHByZXY6IDIsXG5cdFx0cHJvcGVydGllczoge1xuXHRcdFx0dGl0bGU6IFwibWFpblwiLFxuXHRcdFx0c2l6ZTogMTAwLFxuXHRcdFx0cG9zaTogeyB4OiA0MCwgeTogNTUgfSxcblx0XHRcdHNjYWxlOiAyLFxuXHRcdFx0ekluZGV4OiAxMCxcblx0XHR9XG5cdH0sXG5cdHtcblx0XHRpZDogMSxcblx0XHR0eXBlOiBcIm5leHRcIixcblx0XHRsZWZ0UmlnaHQ6IDEsXG5cdFx0bmV4dDogMyxcblx0XHRwcmV2OiAwLFxuXHRcdHByb3BlcnRpZXM6IHtcblx0XHRcdHRpdGxlOiBcIm5leHRcIixcblx0XHRcdHNpemU6IDYwLFxuXHRcdFx0cG9zaTogeyB4OiA4NSwgeTogNDUgfSxcblx0XHRcdHNjYWxlOiAxLjIsXG5cdFx0XHR6SW5kZXg6IDEwLFxuXG5cdFx0fVxuXHR9LFxuXHR7XG5cdFx0aWQ6IDIsXG5cdFx0dHlwZTogXCJwcmV2aW91c1wiLFxuXHRcdGxlZnRSaWdodDogLTEsXG5cdFx0bmV4dDogMCxcblx0XHRwcmV2OiA0LFxuXHRcdHByb3BlcnRpZXM6IHtcblx0XHRcdHRpdGxlOiBcInByZXZpb3VzXCIsXG5cdFx0XHRzaXplOiA4MCxcblx0XHRcdHBvc2k6IHsgeDogNSwgeTogMTIgfSxcblx0XHRcdHNjYWxlOiAxLjEsXG5cdFx0XHR6SW5kZXg6IDEwLFxuXHRcdH1cblx0fSxcblx0e1xuXHRcdGlkOiAzLFxuXHRcdHR5cGU6IFwib25Ib2xkXCIsXG5cdFx0bGVmdFJpZ2h0OiAxLFxuXHRcdG5leHQ6IDQsXG5cdFx0cHJldjogMSxcblx0XHRwcm9wZXJ0aWVzOiB7XG5cdFx0XHR0aXRsZTogXCIuLi5cIixcblx0XHRcdHNpemU6IDUwLFxuXHRcdFx0cG9zaTogeyB4OiA2MCwgeTogMTggfSxcblx0XHRcdHNjYWxlOiAwLjUsXG5cdFx0XHR6SW5kZXg6IDAsXG5cdFx0fVxuXHR9XG5cdCxcblx0e1xuXHRcdGlkOiA0LFxuXHRcdHR5cGU6IFwiaGlkZGVuXCIsXG5cdFx0bGVmdFJpZ2h0OiAtMSxcblx0XHRuZXh0OiAyLFxuXHRcdHByZXY6IDMsXG5cdFx0cHJvcGVydGllczoge1xuXHRcdFx0dGl0bGU6IFwiaGlkZGVuXCIsXG5cdFx0XHRzaXplOiA0MCxcblx0XHRcdHBvc2k6IHsgeDogNDAsIHk6IDkgfSxcblx0XHRcdHNjYWxlOiAwLjQsXG5cdFx0XHR6SW5kZXg6IDAsXG5cdFx0fVxuXHR9XG5dXG5cbmNvbnN0IGRhdGEgPSBbXCJhYm91dCBtZVwiLCBcIm15IHByb2plY3RzXCIsIFwiYXJ0XCIsIFwicDFcIiwgXCJwMlwiXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTb2d1bWEoeyBoZWlnaHQsIHdpZHRoIH0pIHtcblx0Y29uc3QgeyBzY3JvbGxZUHJvZ3Jlc3MgfSA9IHVzZVZpZXdwb3J0U2Nyb2xsKCk7XG4gIGNvbnN0IHNvZ3VtYVNjYWxlID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDFdLCBbMSwgMF0pO1xuXHRjb25zdCBzb2d1bWFZb2Zmc2V0ID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDAuNSwgMV0sIFswLCAtMjAwLCAtNTAwXSk7XG5cdGNvbnN0IFtbZGlyZWN0aW9uLCBzdGVwc10sIHNldFJvdGF0ZV0gPSB1c2VTdGF0ZShbMCwgMF0pO1xuXG5cdGNvbnN0IGN1cnJlbnRJbmRleCA9IHdyYXAoMCwgNCwgc3RlcHMpXG5cblx0Y29uc3QgbmV4dFBvc2l0aW9uID0gKG5ld0RpcmVjdGlvbjogbnVtYmVyKSA9PiB7XG5cdFx0c2V0Um90YXRlKFtuZXdEaXJlY3Rpb24sIHN0ZXBzICsgbmV3RGlyZWN0aW9uXSk7XG5cdH1cblxuXHQvLyBjb25zb2xlLmxvZyhnZXRHaW1Qcm9wc0J5SWQoMykpO1xuXHRyZXR1cm4gKFxuXHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRjbGFzc05hbWU9e2ByZWxhdGl2ZSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLXN0YXJ0ICR7aGVpZ2h0IHx8IFwiaC0xLzJcIn0gJHt3aWR0aCB8fCBcInctMS8yXCJ9ICBib3JkZXItZ3JheS05MDAgc2hhZG93LTJ4bCAgYH1cblx0XHRcdGluaXRpYWw9XCJpbml0aWFsXCJcblx0XHRcdGFuaW1hdGU9XCJzdGFuZGluZ1wiXG5cdFx0XHR2YXJpYW50cz17e1xuXHRcdFx0XHRpbml0aWFsIDoge1xuXHRcdFx0XHRcdHkgOiAtNDEwLFxuXHRcdFx0XHRcdHggOiAzMCxcblx0XHRcdFx0XHRzY2FsZSA6IDAuMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0c3RhbmRpbmcgOiB7XG5cdFx0XHRcdFx0eSA6IDAsXG5cdFx0XHRcdFx0eDogMCxcblx0XHRcdFx0XHRzY2FsZTogMSxcblx0XHRcdFx0XHR0cmFuc2l0aW9uIDoge1xuXHRcdFx0XHRcdFx0ZHVyYXRpb24gOiAxLjUsXG5cdFx0XHRcdFx0XHQvLyB4IDogeyB5b3lvIDogSW5maW5pdHksIGR1cmF0aW9uIDogMn0sXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0fSxcblx0XHRcdH19XG5cdFx0XHRzdHlsZT17XG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzY2FsZSA6IHNvZ3VtYVNjYWxlLFxuXHRcdFx0XHRcdHkgOiBzb2d1bWFZb2Zmc2V0XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHQ+XG5cdFx0XHR7Z2ltc1Byb3BzLm1hcCgoZ2ltKSA9PiAoXG5cdFx0XHRcdDxHaW1cblx0XHRcdFx0XHRrZXk9e2dpbS5pZH1cblx0XHRcdFx0XHRnaW1JZD17Z2ltLmlkfVxuXHRcdFx0XHRcdGRhdGE9e2RhdGF9XG5cdFx0XHRcdFx0ZGlyZWN0aW9uPXtkaXJlY3Rpb259XG5cdFx0XHRcdFx0c3RlcHM9e3N0ZXBzfVxuXHRcdFx0XHRcdG5leHRQb3NpdGlvbj17bmV4dFBvc2l0aW9ufVxuXHRcdFx0XHQvPlxuXHRcdFx0KSl9XG5cdFx0XHQ8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLTYwIHctNDQgYmctd2hpdGVcIlxuXHRcdFx0XHRpbml0aWFsPVwiaW5pdGlhbFwiXG5cdFx0XHRcdGFuaW1hdGU9XCJzdGFuZGluZ1wiXG5cdFx0XHRcdHZhcmlhbnRzPXt7XG5cdFx0XHRcdFx0aW5pdGlhbCA6IHtcblx0XHRcdFx0XHRcdHNjYWxlIDogMC4yLFxuXHRcdFx0XHRcdFx0eDoxMCxcblx0XHRcdFx0XHRcdC8vIG9wYWNpdHkgOiAwLFxuXHRcdFx0XHRcdFx0eSA6IC0xMDAsXG5cdFx0XHRcdFx0XHRyb3RhdGUgOiAyMCxcblx0XHRcdFx0XHRcdC8vIHRyYW5zaXRpb24gOiB7XG5cdFx0XHRcdFx0XHQvLyBcdGR1cmF0aW9uIDogMixcblx0XHRcdFx0XHRcdC8vIH1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHN0YW5kaW5nIDoge1xuXHRcdFx0XHRcdFx0c2NhbGU6IDEuMSxcblx0XHRcdFx0XHRcdC8vIG9wYWNpdHkgOiAxLFxuXHRcdFx0XHRcdFx0eSA6IFstMTIsIC0yNV0sXG5cdFx0XHRcdFx0XHRyb3RhdGUgOiA1LFxuXHRcdFx0XHRcdFx0eCA6IFstNSAsMF0sXG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uIDoge1xuXHRcdFx0XHRcdFx0XHR5IDogeyB5b3lvIDogSW5maW5pdHksIGR1cmF0aW9uIDogMX0sXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uIDogMixcblx0XHRcdFx0XHRcdFx0Ly8gZGVsYXkgOiAyLjUsXG5cdFx0XHRcdFx0XHRcdHggOiB7IGR1cmF0aW9uIDogMn0sXG5cdFx0XHRcdFx0XHRcdHNjYWxlIDoge3R5cGUgOiAnc3ByaW5nJywgZHVyYXRpb24gOiAxfVxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9fVxuXHRcdFx0XHRvbk1vdXNlRG93bj17KCkgPT4gbmV4dFBvc2l0aW9uKC0xKX1cblx0XHRcdD5cblx0XHRcdFx0PGEgaHJlZj0nL3NjZW5lJz5saW5rPC9hPlxuXHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdDwvbW90aW9uLmRpdj5cblx0KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/soguma.tsx\n");

/***/ })

})