webpackHotUpdate_N_E("pages/home",{

/***/ "./pages/card.js":
/*!***********************!*\
  !*** ./pages/card.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Card; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _components_imageDisplayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/imageDisplayer */ \"./components/imageDisplayer.tsx\");\n/* harmony import */ var _components_descriptionCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/descriptionCard */ \"./components/descriptionCard.js\");\n\n\nvar _jsxFileName = \"/goinfre/hmhindat/portfolioo/pages/card.js\",\n    _s = $RefreshSig$();\n\n// import DarkSky from '../components/darkSky'\n// import Sogumice from '../components/sogumice'\n// import LoloIcon from '../components/loloIcon'\n\n\n\n // import Image from 'next/Image'\n\nvar theme = {\n  light: {\n    backgroundColor: 'bg-gray-900',\n    shadowsColor: 'bg-blue-400',\n    gimsColor: 'bg-red-200'\n  },\n  dark: {\n    backgroundColor: 'bg-blue-400',\n    shadowsColor: 'bg-gray-900',\n    gimsColor: 'bg-blue-400'\n  }\n};\nfunction Card(_ref) {\n  _s();\n\n  var onDisplay = _ref.onDisplay,\n      darkTheme = _ref.darkTheme,\n      displayGim = _ref.displayGim;\n  var carRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(false);\n\n  var _useViewportScroll = Object(framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"useViewportScroll\"])(),\n      scrollYProgress = _useViewportScroll.scrollYProgress; // const yRnage = useTransform(useViewportScroll, [0, 1], window.)\n\n\n  var variants = {\n    hidden: {\n      zIndex: 0\n    },\n    showsUp: {\n      zIndex: 50\n    }\n  };\n  var variants2 = {\n    hidden: {\n      opacity: 0\n    },\n    showsUp: {\n      opacity: 1,\n      // boxShadow : '0 0px 20px 8px rgba(255, 255, 255, 0.5)',\n      height: \"auto\"\n    }\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"motion\"].div, {\n    className: \"absolute flex flex-col justify-center items-center w-full h-full top-0 \",\n    initial: false,\n    animate: onDisplay.displayState ? \"showsUp\" : \"hidden\",\n    variants: variants,\n    transition: {\n      duration: 2\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"motion\"].div, {\n      className: \"flex flex-row justify-between w-full h-auto p-5\",\n      variants: variants2,\n      transition: {\n        boxShadow: {\n          duration: 3\n        },\n        delay: 2,\n        duration: 2\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"motion\"].div, {\n        className: \"h-100 w-100\",\n        onTap: displayGim,\n        children: \"click me\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_descriptionCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_imageDisplayer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 4\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 3\n  }, this);\n}\n\n_s(Card, \"JEeM2HSEWJmetkzVenFiVnhMowc=\", false, function () {\n  return [framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"useViewportScroll\"]];\n});\n\n_c = Card;\n\nvar _c;\n\n$RefreshReg$(_c, \"Card\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FyZC5qcz9jYWQ3Il0sIm5hbWVzIjpbInRoZW1lIiwibGlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzaGFkb3dzQ29sb3IiLCJnaW1zQ29sb3IiLCJkYXJrIiwiQ2FyZCIsIm9uRGlzcGxheSIsImRhcmtUaGVtZSIsImRpc3BsYXlHaW0iLCJjYXJSZWYiLCJ1c2VSZWYiLCJ1c2VWaWV3cG9ydFNjcm9sbCIsInNjcm9sbFlQcm9ncmVzcyIsInZhcmlhbnRzIiwiaGlkZGVuIiwiekluZGV4Iiwic2hvd3NVcCIsInZhcmlhbnRzMiIsIm9wYWNpdHkiLCJoZWlnaHQiLCJkaXNwbGF5U3RhdGUiLCJkdXJhdGlvbiIsImJveFNoYWRvdyIsImRlbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUVBOztBQUdBLElBQU1BLEtBQUssR0FBRztBQUNiQyxPQUFLLEVBQUc7QUFDUEMsbUJBQWUsRUFBRyxhQURYO0FBRVBDLGdCQUFZLEVBQUcsYUFGUjtBQUdQQyxhQUFTLEVBQUc7QUFITCxHQURLO0FBTWJDLE1BQUksRUFBRztBQUNOSCxtQkFBZSxFQUFHLGFBRFo7QUFFTkMsZ0JBQVksRUFBRyxhQUZUO0FBR05DLGFBQVMsRUFBRztBQUhOO0FBTk0sQ0FBZDtBQWFlLFNBQVNFLElBQVQsT0FBcUQ7QUFBQTs7QUFBQSxNQUFwQ0MsU0FBb0MsUUFBcENBLFNBQW9DO0FBQUEsTUFBekJDLFNBQXlCLFFBQXpCQSxTQUF5QjtBQUFBLE1BQWRDLFVBQWMsUUFBZEEsVUFBYztBQUVuRSxNQUFNQyxNQUFNLEdBQUdDLG9EQUFNLENBQUMsS0FBRCxDQUFyQjs7QUFGbUUsMkJBR3ZDQyx1RUFBaUIsRUFIc0I7QUFBQSxNQUczREMsZUFIMkQsc0JBRzNEQSxlQUgyRCxFQUluRTs7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHO0FBQ2hCQyxVQUFNLEVBQUc7QUFDUkMsWUFBTSxFQUFHO0FBREQsS0FETztBQUloQkMsV0FBTyxFQUFHO0FBQ1RELFlBQU0sRUFBRztBQURBO0FBSk0sR0FBakI7QUFTQSxNQUFNRSxTQUFTLEdBQUc7QUFDakJILFVBQU0sRUFBRztBQUNSSSxhQUFPLEVBQUc7QUFERixLQURRO0FBSWpCRixXQUFPLEVBQUc7QUFDVEUsYUFBTyxFQUFHLENBREQ7QUFFVDtBQUNBQyxZQUFNLEVBQUM7QUFIRTtBQUpPLEdBQWxCO0FBV0Esc0JBQ0MscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0MsYUFBUyxFQUFDLHlFQURYO0FBRUMsV0FBTyxFQUFFLEtBRlY7QUFHQyxXQUFPLEVBQUdiLFNBQVMsQ0FBQ2MsWUFBVixHQUF5QixTQUF6QixHQUFxQyxRQUhoRDtBQUlDLFlBQVEsRUFBRVAsUUFKWDtBQUtDLGNBQVUsRUFBRTtBQUVYUSxjQUFRLEVBQUc7QUFGQSxLQUxiO0FBQUEsMkJBVUMscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQVksZUFBUyxFQUFDLGlEQUF0QjtBQUNDLGNBQVEsRUFBRUosU0FEWDtBQUVDLGdCQUFVLEVBQUU7QUFDWEssaUJBQVMsRUFBRztBQUNYRCxrQkFBUSxFQUFHO0FBREEsU0FERDtBQUlYRSxhQUFLLEVBQUUsQ0FKSTtBQUtYRixnQkFBUSxFQUFHO0FBTEEsT0FGYjtBQUFBLDhCQVVDLHFFQUFDLG9EQUFELENBQVEsR0FBUjtBQUFZLGlCQUFTLEVBQUMsYUFBdEI7QUFBb0MsYUFBSyxFQUFFYixVQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZELGVBV0MscUVBQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhELGVBWUMscUVBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQTJCQTs7R0FwRHVCSCxJO1VBR0tNLCtEOzs7S0FITE4sSSIsImZpbGUiOiIuL3BhZ2VzL2NhcmQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgRGFya1NreSBmcm9tICcuLi9jb21wb25lbnRzL2RhcmtTa3knXG4vLyBpbXBvcnQgU29ndW1pY2UgZnJvbSAnLi4vY29tcG9uZW50cy9zb2d1bWljZSdcbi8vIGltcG9ydCBMb2xvSWNvbiBmcm9tICcuLi9jb21wb25lbnRzL2xvbG9JY29uJ1xuaW1wb3J0IHsgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtb3Rpb24sIHVzZVZpZXdwb3J0U2Nyb2xsICB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQgSW1hZ2VEaXNwbGF5ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9pbWFnZURpc3BsYXllcidcbmltcG9ydCBEZXNjcmlwdGlvbkNhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9kZXNjcmlwdGlvbkNhcmQnXG4vLyBpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9JbWFnZSdcblxuXG5jb25zdCB0aGVtZSA9IHtcblx0bGlnaHQgOiB7XG5cdFx0YmFja2dyb3VuZENvbG9yIDogJ2JnLWdyYXktOTAwJyxcblx0XHRzaGFkb3dzQ29sb3IgOiAnYmctYmx1ZS00MDAnLFxuXHRcdGdpbXNDb2xvciA6ICdiZy1yZWQtMjAwJ1xuXHR9LFxuXHRkYXJrIDoge1xuXHRcdGJhY2tncm91bmRDb2xvciA6ICdiZy1ibHVlLTQwMCcsXG5cdFx0c2hhZG93c0NvbG9yIDogJ2JnLWdyYXktOTAwJyxcblx0XHRnaW1zQ29sb3IgOiAnYmctYmx1ZS00MDAnXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyZCAoeyBvbkRpc3BsYXksIGRhcmtUaGVtZSwgZGlzcGxheUdpbSB9KSB7XG5cblx0Y29uc3QgY2FyUmVmID0gdXNlUmVmKGZhbHNlKVxuXHRjb25zdCB7IHNjcm9sbFlQcm9ncmVzcyB9ID0gdXNlVmlld3BvcnRTY3JvbGwoKVxuXHQvLyBjb25zdCB5Um5hZ2UgPSB1c2VUcmFuc2Zvcm0odXNlVmlld3BvcnRTY3JvbGwsIFswLCAxXSwgd2luZG93Lilcblx0Y29uc3QgdmFyaWFudHMgPSB7XG5cdFx0aGlkZGVuIDoge1xuXHRcdFx0ekluZGV4IDogMCxcblx0XHR9LFxuXHRcdHNob3dzVXAgOiB7XG5cdFx0XHR6SW5kZXggOiA1MCxcblx0XHR9XG5cdH1cblxuXHRjb25zdCB2YXJpYW50czIgPSB7XG5cdFx0aGlkZGVuIDoge1xuXHRcdFx0b3BhY2l0eSA6IDAsXG5cdFx0fSxcblx0XHRzaG93c1VwIDoge1xuXHRcdFx0b3BhY2l0eSA6IDEsXG5cdFx0XHQvLyBib3hTaGFkb3cgOiAnMCAwcHggMjBweCA4cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJyxcblx0XHRcdGhlaWdodDpcImF1dG9cIixcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRjbGFzc05hbWU9XCJhYnNvbHV0ZSBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LWZ1bGwgaC1mdWxsIHRvcC0wIFwiXG5cdFx0XHRpbml0aWFsPXtmYWxzZX1cblx0XHRcdGFuaW1hdGU9eyBvbkRpc3BsYXkuZGlzcGxheVN0YXRlID8gXCJzaG93c1VwXCIgOiBcImhpZGRlblwifVxuXHRcdFx0dmFyaWFudHM9e3ZhcmlhbnRzfVxuXHRcdFx0dHJhbnNpdGlvbj17e1xuXG5cdFx0XHRcdGR1cmF0aW9uIDogMlxuXHRcdFx0fX1cblx0XHQ+XG5cdFx0XHQ8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiB3LWZ1bGwgaC1hdXRvIHAtNVwiXG5cdFx0XHRcdHZhcmlhbnRzPXt2YXJpYW50czJ9XG5cdFx0XHRcdHRyYW5zaXRpb249e3tcblx0XHRcdFx0XHRib3hTaGFkb3cgOiB7XG5cdFx0XHRcdFx0XHRkdXJhdGlvbiA6IDMsXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRkZWxheTogMixcblx0XHRcdFx0XHRkdXJhdGlvbiA6IDJcblx0XHRcdFx0fX1cblx0XHRcdFx0PlxuXHRcdFx0XHQ8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJoLTEwMCB3LTEwMFwiIG9uVGFwPXtkaXNwbGF5R2ltfT5jbGljayBtZTwvbW90aW9uLmRpdj5cblx0XHRcdFx0PERlc2NyaXB0aW9uQ2FyZC8+XG5cdFx0XHRcdDxJbWFnZURpc3BsYXllci8+XG5cdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0PC9tb3Rpb24uZGl2PlxuXHQpXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/card.js\n");

/***/ })

})