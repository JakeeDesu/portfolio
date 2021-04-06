webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/sogumaVx.tsx":
/*!*********************************!*\
  !*** ./components/sogumaVx.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SogumaVx; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _gim__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gim */ \"./components/gim.tsx\");\n/* harmony import */ var _soguma__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./soguma */ \"./components/soguma.tsx\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu */ \"./components/menu.js\");\n/* harmony import */ var _gimProps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./gimProps */ \"./components/gimProps.js\");\n\n\n\nvar _jsxFileName = \"/home/hamza/Desktop/portfolio/components/sogumaVx.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n // gims props\n\nvar variants = {\n  initial: function initial(onDisplay) {\n    if (onDisplay.displayState) return {\n      y: 0,\n      scale: 1\n    };else return {\n      y: -100,\n      //-410,\n      scale: 0.7 //0.1,\n\n    };\n  },\n  standing: function standing(onDisplay) {\n    if (onDisplay.displayState) return {\n      scale: [1, 0.7],\n      y: [0, -100],\n      transition: {\n        scale: {\n          delay: 0.3,\n          duration: 1\n        },\n        y: {\n          delay: 0.3,\n          duration: 1\n        }\n      }\n    };else return {\n      y: 0,\n      // x: 0,\n      scale: 1,\n      transition: {\n        // duration: 0.5,\n        scale: {\n          delay: 0.3,\n          duration: 1\n        },\n        y: {\n          delay: 0.3,\n          duration: 1\n        }\n      }\n    };\n  }\n};\nvar data = [\"art\", \"about me\", \"p1\"];\nfunction SogumaVx(_ref) {\n  _s();\n\n  var _this = this;\n\n  var setOnDisplay = _ref.setOnDisplay,\n      onDisplay = _ref.onDisplay,\n      darkTheme = _ref.darkTheme;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([0, 0]),\n      _useState$ = Object(_home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState[0], 2),\n      direction = _useState$[0],\n      steps = _useState$[1],\n      setRotate = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true),\n      clickOff = _useState2[0],\n      setClickOff = _useState2[1];\n\n  var moveGims = function moveGims(newDirection) {\n    setRotate([newDirection, steps + newDirection]);\n  };\n\n  var onSogumaClick = function onSogumaClick() {\n    switch (onDisplay.type) {\n      case -1:\n        setOnDisplay(true, onDisplay.itemId, 0);\n        break;\n\n      case 0:\n        setOnDisplay(true, onDisplay.itemId, -1);\n        break;\n\n      case 1:\n        if (!onDisplay.displayOff) onDisplay.displayState ? setOnDisplay(false, -1, 1) : moveGims(-1);\n        break;\n\n      case 2:\n        break;\n    }\n  };\n\n  var onDisplayKey = onDisplay.displayState ? 1 : 0;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n    className: \"relative flex flex-col justify-start items-center h-full w-full \",\n    initial: \"initial\",\n    animate: \"standing\",\n    custom: onDisplay,\n    variants: variants,\n    children: [onDisplay.type === 1 && _gimProps__WEBPACK_IMPORTED_MODULE_7__[\"gimsProps\"].map(function (gim) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_gim__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        gimId: gim.id,\n        data: data,\n        direction: direction,\n        steps: steps,\n        moveGims: moveGims,\n        setOnDisplay: setOnDisplay,\n        onDisplay: onDisplay,\n        darkTheme: darkTheme\n      }, gim.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 5\n      }, _this);\n    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_menu__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      onDisplay: onDisplay,\n      setOnDisplay: setOnDisplay\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_soguma__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      onDisplay: onDisplay,\n      darkTheme: darkTheme,\n      onSogumaClick: onSogumaClick\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 4\n    }, this)]\n  }, onDisplayKey, true, {\n    fileName: _jsxFileName,\n    lineNumber: 79,\n    columnNumber: 3\n  }, this);\n}\n\n_s(SogumaVx, \"lTbNSIOy3UAS4Pf3w/kdgjGEVhw=\");\n\n_c = SogumaVx;\n\nvar _c;\n\n$RefreshReg$(_c, \"SogumaVx\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zb2d1bWFWeC50c3g/NmJhYiJdLCJuYW1lcyI6WyJ2YXJpYW50cyIsImluaXRpYWwiLCJvbkRpc3BsYXkiLCJkaXNwbGF5U3RhdGUiLCJ5Iiwic2NhbGUiLCJzdGFuZGluZyIsInRyYW5zaXRpb24iLCJkZWxheSIsImR1cmF0aW9uIiwiZGF0YSIsIlNvZ3VtYVZ4Iiwic2V0T25EaXNwbGF5IiwiZGFya1RoZW1lIiwidXNlU3RhdGUiLCJkaXJlY3Rpb24iLCJzdGVwcyIsInNldFJvdGF0ZSIsImNsaWNrT2ZmIiwic2V0Q2xpY2tPZmYiLCJtb3ZlR2ltcyIsIm5ld0RpcmVjdGlvbiIsIm9uU29ndW1hQ2xpY2siLCJ0eXBlIiwiaXRlbUlkIiwiZGlzcGxheU9mZiIsIm9uRGlzcGxheUtleSIsImdpbXNQcm9wcyIsIm1hcCIsImdpbSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBSXVDOztBQUV2QyxJQUFNQSxRQUFRLEdBQUc7QUFDaEJDLFNBQU8sRUFBRSxpQkFBQ0MsU0FBRCxFQUFvQjtBQUM1QixRQUFJQSxTQUFTLENBQUNDLFlBQWQsRUFDQyxPQUFPO0FBQ05DLE9BQUMsRUFBRSxDQURHO0FBRU5DLFdBQUssRUFBRTtBQUZELEtBQVAsQ0FERCxLQU1DLE9BQU87QUFDTkQsT0FBQyxFQUFFLENBQUMsR0FERTtBQUNFO0FBQ1JDLFdBQUssRUFBRSxHQUZELENBRUs7O0FBRkwsS0FBUDtBQUlELEdBWmU7QUFhaEJDLFVBQVEsRUFBRSxrQkFBQ0osU0FBRCxFQUFvQjtBQUM3QixRQUFJQSxTQUFTLENBQUNDLFlBQWQsRUFDQyxPQUFPO0FBQ05FLFdBQUssRUFBRSxDQUFDLENBQUQsRUFBSSxHQUFKLENBREQ7QUFFTkQsT0FBQyxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUMsR0FBTCxDQUZHO0FBR05HLGdCQUFVLEVBQUU7QUFDWEYsYUFBSyxF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Q01nQixHQUFHLENBQUNDLEVBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURzQztBQUFBLEtBQWQsQ0FSMUIsZUFxQkMscUVBQUMsNkNBQUQ7QUFBTSxlQUFTLEVBQUU1QixTQUFqQjtBQUE2QixrQkFBWSxFQUFFVTtBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBckJELGVBc0JDLHFFQUFDLCtDQUFEO0FBQ0MsZUFBUyxFQUFFVixTQURaO0FBRUMsZUFBUyxFQUFFVyxTQUZaO0FBR0MsbUJBQWEsRUFBRVM7QUFIaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRCRDtBQUFBLEtBRU1JLFlBRk47QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBOEJBOztHQXpEdUJmLFE7O0tBQUFBLFEiLCJmaWxlIjoiLi9jb21wb25lbnRzL3NvZ3VtYVZ4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1vdGlvbiwgdXNlVHJhbnNmb3JtLCB1c2VWaWV3cG9ydFNjcm9sbCwgdXNlTW90aW9uVmFsdWUsIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQgR2ltIGZyb20gJy4vZ2ltJ1xuaW1wb3J0IFNvZ3VtYSBmcm9tICcuL3NvZ3VtYSdcbmltcG9ydCBNZW51IGZyb20gJy4vbWVudSdcbmltcG9ydCB7IHdyYXAgfSBmcm9tICdwb3Btb3Rpb24nXG5pbXBvcnQgU29ndW1hRXllIGZyb20gJy4vc3VndW1hRXllJ1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuL3RoZW1lJ1xuaW1wb3J0IHsgZ2ltc1Byb3BzIH0gZnJvbSAnLi9naW1Qcm9wcycgLy8gZ2ltcyBwcm9wc1xuXG5jb25zdCB2YXJpYW50cyA9IHtcblx0aW5pdGlhbDogKG9uRGlzcGxheTogYW55KSA9PiB7XG5cdFx0aWYgKG9uRGlzcGxheS5kaXNwbGF5U3RhdGUpXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR5OiAwLFxuXHRcdFx0XHRzY2FsZTogMSxcblx0XHRcdH1cblx0XHRlbHNlXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR5OiAtMTAwLC8vLTQxMCxcblx0XHRcdFx0c2NhbGU6IDAuNywvLzAuMSxcblx0XHRcdH07XG5cdH0sXG5cdHN0YW5kaW5nOiAob25EaXNwbGF5OiBhbnkpID0+IHtcblx0XHRpZiAob25EaXNwbGF5LmRpc3BsYXlTdGF0ZSlcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHNjYWxlOiBbMSwgMC43XSxcblx0XHRcdFx0eTogWzAsIC0xMDBdLFxuXHRcdFx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHRcdFx0c2NhbGU6IHsgZGVsYXk6IDAuMywgZHVyYXRpb246IDEgfSxcblx0XHRcdFx0XHR5OiB7IGRlbGF5OiAwLjMsIGR1cmF0aW9uOiAxIH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdGVsc2Vcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHk6IDAsXG5cdFx0XHRcdC8vIHg6IDAsXG5cdFx0XHRcdHNjYWxlOiAxLFxuXHRcdFx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHRcdFx0Ly8gZHVyYXRpb246IDAuNSxcblx0XHRcdFx0XHRzY2FsZTogeyBkZWxheTogMC4zLCBkdXJhdGlvbjogMSB9LFxuXHRcdFx0XHRcdHk6IHsgZGVsYXk6IDAuMywgZHVyYXRpb246IDEgfVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHR9LFxufVxuXG5cbmNvbnN0IGRhdGEgPSBbXCJhcnRcIiwgXCJhYm91dCBtZVwiLCBcInAxXCIsXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTb2d1bWFWeCh7IHNldE9uRGlzcGxheSwgb25EaXNwbGF5LCBkYXJrVGhlbWUgfSkge1xuXG5cdGNvbnN0IFtbZGlyZWN0aW9uLCBzdGVwc10sIHNldFJvdGF0ZV0gPSB1c2VTdGF0ZShbMCwgMF0pO1xuXHRjb25zdCBbY2xpY2tPZmYsIHNldENsaWNrT2ZmXSA9IHVzZVN0YXRlKHRydWUpO1xuXG5cblx0Y29uc3QgbW92ZUdpbXMgPSAobmV3RGlyZWN0aW9uOiBudW1iZXIpID0+IHtcblx0XHRzZXRSb3RhdGUoW25ld0RpcmVjdGlvbiwgc3RlcHMgKyBuZXdEaXJlY3Rpb25dKTtcblx0fVxuXG5cdGNvbnN0IG9uU29ndW1hQ2xpY2sgPSAoKSA9PiB7XG5cdFx0XHRzd2l0Y2ggKG9uRGlzcGxheS50eXBlKSB7XG5cdFx0XHRcdGNhc2UgIC0xIDpcblx0XHRcdFx0XHRzZXRPbkRpc3BsYXkodHJ1ZSwgb25EaXNwbGF5Lml0ZW1JZCwgMClcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAgMCA6XG5cdFx0XHRcdFx0c2V0T25EaXNwbGF5KHRydWUsIG9uRGlzcGxheS5pdGVtSWQsIC0xKVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICAxIDpcblx0XHRcdFx0XHRcdGlmICghb25EaXNwbGF5LmRpc3BsYXlPZmYpXG5cdFx0XHRcdFx0XHRcdG9uRGlzcGxheS5kaXNwbGF5U3RhdGUgPyBzZXRPbkRpc3BsYXkoZmFsc2UsIC0xLCAxKSA6IG1vdmVHaW1zKC0xKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAgMiA6XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdH1cblx0Y29uc3Qgb25EaXNwbGF5S2V5ID0gb25EaXNwbGF5LmRpc3BsYXlTdGF0ZSA/IDEgOiAwO1xuXHRyZXR1cm4gKFxuXHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGZsZXgtY29sIGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIGgtZnVsbCB3LWZ1bGwgXCJcblx0XHRcdGtleT17b25EaXNwbGF5S2V5fVxuXHRcdFx0aW5pdGlhbD1cImluaXRpYWxcIlxuXHRcdFx0YW5pbWF0ZT1cInN0YW5kaW5nXCJcblx0XHRcdGN1c3RvbT17b25EaXNwbGF5fVxuXHRcdFx0dmFyaWFudHM9e3ZhcmlhbnRzfVxuXHRcdD5cblx0XHRcdHtvbkRpc3BsYXkudHlwZSA9PT0gMSAmJiBnaW1zUHJvcHMubWFwKChnaW0pID0+IChcblx0XHRcdFx0PEdpbVxuXHRcdFx0XHRcdGtleT17Z2ltLmlkfVxuXHRcdFx0XHRcdGdpbUlkPXtnaW0uaWR9XG5cdFx0XHRcdFx0ZGF0YT17ZGF0YX1cblx0XHRcdFx0XHRkaXJlY3Rpb249e2RpcmVjdGlvbn1cblx0XHRcdFx0XHRzdGVwcz17c3RlcHN9XG5cdFx0XHRcdFx0bW92ZUdpbXM9e21vdmVHaW1zfVxuXHRcdFx0XHRcdHNldE9uRGlzcGxheT17c2V0T25EaXNwbGF5fVxuXHRcdFx0XHRcdG9uRGlzcGxheT17b25EaXNwbGF5fVxuXHRcdFx0XHRcdGRhcmtUaGVtZT17ZGFya1RoZW1lfVxuXHRcdFx0XHQvPlxuXHRcdFx0KSl9XG5cdFx0XHQ8TWVudSBvbkRpc3BsYXk9e29uRGlzcGxheX0gIHNldE9uRGlzcGxheT17c2V0T25EaXNwbGF5fS8+XG5cdFx0XHQ8U29ndW1hXG5cdFx0XHRcdG9uRGlzcGxheT17b25EaXNwbGF5fVxuXHRcdFx0XHRkYXJrVGhlbWU9e2RhcmtUaGVtZX1cblx0XHRcdFx0b25Tb2d1bWFDbGljaz17b25Tb2d1bWFDbGlja31cblx0XHRcdC8+XG5cdFx0PC9tb3Rpb24uZGl2PlxuXHQpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/sogumaVx.tsx\n");

/***/ })

})