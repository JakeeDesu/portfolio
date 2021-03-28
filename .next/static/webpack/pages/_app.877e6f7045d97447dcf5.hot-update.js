webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/card.js":
/*!***********************!*\
  !*** ./pages/card.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Card; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _components_imageDisplayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/imageDisplayer */ \"./components/imageDisplayer.tsx\");\n/* harmony import */ var _components_descriptionCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/descriptionCard */ \"./components/descriptionCard.js\");\n\n\nvar _jsxFileName = \"/goinfre/hmhindat/portfolioo/pages/card.js\",\n    _s = $RefreshSig$();\n\n// import DarkSky from '../components/darkSky'\n// import Sogumice from '../components/sogumice'\n// import LoloIcon from '../components/loloIcon'\n\n\n\n // import Image from 'next/Image'\n\nvar theme = {\n  light: {\n    backgroundColor: 'bg-gray-900',\n    shadowsColor: 'bg-blue-400',\n    gimsColor: 'bg-red-200'\n  },\n  dark: {\n    backgroundColor: 'bg-blue-400',\n    shadowsColor: 'bg-gray-900',\n    gimsColor: 'bg-blue-400'\n  }\n};\nfunction Card(_ref) {\n  _s();\n\n  var onDisplay = _ref.onDisplay,\n      darkTheme = _ref.darkTheme;\n  var carRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(false);\n\n  var _useViewportScroll = Object(framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"useViewportScroll\"])(),\n      scrollYProgress = _useViewportScroll.scrollYProgress; // const yRnage = useTransform(useViewportScroll, [0, 1], window.)\n\n\n  var variants = {\n    hidden: {\n      zIndex: 0\n    },\n    showsUp: {\n      zIndex: 50\n    }\n  };\n  var variants2 = {\n    hidden: {\n      opacity: 0\n    },\n    showsUp: {\n      opacity: 1,\n      // boxShadow : '0 0px 20px 8px rgba(255, 255, 255, 0.5)',\n      height: \"auto\"\n    }\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"motion\"].div, {\n    className: \"absolute flex flex-col justify-center items-center w-full h-full top-0 \",\n    initial: false,\n    animate: onDisplay.displayState ? \"showsUp\" : \"hidden\",\n    variants: variants,\n    transition: {\n      duration: 2\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"motion\"].div, {\n      className: \"flex flex-row justify-between w-full h-auto p-5\",\n      variants: variants2,\n      transition: {\n        boxShadow: {\n          duration: 3\n        },\n        delay: 2,\n        duration: 2\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_descriptionCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_imageDisplayer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 4\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 3\n  }, this);\n}\n\n_s(Card, \"JEeM2HSEWJmetkzVenFiVnhMowc=\", false, function () {\n  return [framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"useViewportScroll\"]];\n});\n\n_c = Card;\n\nvar _c;\n\n$RefreshReg$(_c, \"Card\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FyZC5qcz9jYWQ3Il0sIm5hbWVzIjpbInRoZW1lIiwibGlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzaGFkb3dzQ29sb3IiLCJnaW1zQ29sb3IiLCJkYXJrIiwiQ2FyZCIsIm9uRGlzcGxheSIsImRhcmtUaGVtZSIsImNhclJlZiIsInVzZVJlZiIsInVzZVZpZXdwb3J0U2Nyb2xsIiwic2Nyb2xsWVByb2dyZXNzIiwidmFyaWFudHMiLCJoaWRkZW4iLCJ6SW5kZXgiLCJzaG93c1VwIiwidmFyaWFudHMyIiwib3BhY2l0eSIsImhlaWdodCIsImRpc3BsYXlTdGF0ZSIsImR1cmF0aW9uIiwiYm94U2hhZG93IiwiZGVsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBR0EsSUFBTUEsS0FBSyxHQUFHO0FBQ2JDLE9BQUssRUFBRztBQUNQQyxtQkFBZSxFQUFHLGFBRFg7QUFFUEMsZ0JBQVksRUFBRyxhQUZSO0FBR1BDLGFBQVMsRUFBRztBQUhMLEdBREs7QUFNYkMsTUFBSSxFQUFHO0FBQ05ILG1CQUFlLEVBQUcsYUFEWjtBQUVOQyxnQkFBWSxFQUFHLGFBRlQ7QUFHTkMsYUFBUyxFQUFHO0FBSE47QUFOTSxDQUFkO0FBYWUsU0FBU0UsSUFBVCxPQUF5QztBQUFBOztBQUFBLE1BQXhCQyxTQUF3QixRQUF4QkEsU0FBd0I7QUFBQSxNQUFiQyxTQUFhLFFBQWJBLFNBQWE7QUFFdkQsTUFBTUMsTUFBTSxHQUFHQyxvREFBTSxDQUFDLEtBQUQsQ0FBckI7O0FBRnVELDJCQUczQkMsdUVBQWlCLEVBSFU7QUFBQSxNQUcvQ0MsZUFIK0Msc0JBRy9DQSxlQUgrQyxFQUl2RDs7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHO0FBQ2hCQyxVQUFNLEVBQUc7QUFDUkMsWUFBTSxFQUFHO0FBREQsS0FETztBQUloQkMsV0FBTyxFQUFHO0FBQ1RELFlBQU0sRUFBRztBQURBO0FBSk0sR0FBakI7QUFTQSxNQUFNRSxTQUFTLEdBQUc7QUFDakJILFVBQU0sRUFBRztBQUNSSSxhQUFPLEVBQUc7QUFERixLQURRO0FBSWpCRixXQUFPLEVBQUc7QUFDVEUsYUFBTyxFQUFHLENBREQ7QUFFVDtBQUNBQyxZQUFNLEVBQUM7QUFIRTtBQUpPLEdBQWxCO0FBV0Esc0JBQ0MscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0MsYUFBUyxFQUFDLHlFQURYO0FBRUMsV0FBTyxFQUFFLEtBRlY7QUFHQyxXQUFPLEVBQUdaLFNBQVMsQ0FBQ2EsWUFBVixHQUF5QixTQUF6QixHQUFxQyxRQUhoRDtBQUlDLFlBQVEsRUFBRVAsUUFKWDtBQUtDLGNBQVUsRUFBRTtBQUVYUSxjQUFRLEVBQUc7QUFGQSxLQUxiO0FBQUEsMkJBVUMscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQVksZUFBUyxFQUFDLGlEQUF0QjtBQUNDLGNBQVEsRUFBRUosU0FEWDtBQUVDLGdCQUFVLEVBQUU7QUFDWEssaUJBQVMsRUFBRztBQUNYRCxrQkFBUSxFQUFHO0FBREEsU0FERDtBQUlYRSxhQUFLLEVBQUUsQ0FKSTtBQUtYRixnQkFBUSxFQUFHO0FBTEEsT0FGYjtBQUFBLDhCQVVDLHFFQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRCxlQVdDLHFFQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFWRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUEwQkE7O0dBbkR1QmYsSTtVQUdLSywrRDs7O0tBSExMLEkiLCJmaWxlIjoiLi9wYWdlcy9jYXJkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IERhcmtTa3kgZnJvbSAnLi4vY29tcG9uZW50cy9kYXJrU2t5J1xuLy8gaW1wb3J0IFNvZ3VtaWNlIGZyb20gJy4uL2NvbXBvbmVudHMvc29ndW1pY2UnXG4vLyBpbXBvcnQgTG9sb0ljb24gZnJvbSAnLi4vY29tcG9uZW50cy9sb2xvSWNvbidcbmltcG9ydCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbW90aW9uLCB1c2VWaWV3cG9ydFNjcm9sbCAgfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IEltYWdlRGlzcGxheWVyIGZyb20gJy4uL2NvbXBvbmVudHMvaW1hZ2VEaXNwbGF5ZXInXG5pbXBvcnQgRGVzY3JpcHRpb25DYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvZGVzY3JpcHRpb25DYXJkJ1xuLy8gaW1wb3J0IEltYWdlIGZyb20gJ25leHQvSW1hZ2UnXG5cblxuY29uc3QgdGhlbWUgPSB7XG5cdGxpZ2h0IDoge1xuXHRcdGJhY2tncm91bmRDb2xvciA6ICdiZy1ncmF5LTkwMCcsXG5cdFx0c2hhZG93c0NvbG9yIDogJ2JnLWJsdWUtNDAwJyxcblx0XHRnaW1zQ29sb3IgOiAnYmctcmVkLTIwMCdcblx0fSxcblx0ZGFyayA6IHtcblx0XHRiYWNrZ3JvdW5kQ29sb3IgOiAnYmctYmx1ZS00MDAnLFxuXHRcdHNoYWRvd3NDb2xvciA6ICdiZy1ncmF5LTkwMCcsXG5cdFx0Z2ltc0NvbG9yIDogJ2JnLWJsdWUtNDAwJ1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmQgKHsgb25EaXNwbGF5LCBkYXJrVGhlbWUgfSkge1xuXG5cdGNvbnN0IGNhclJlZiA9IHVzZVJlZihmYWxzZSlcblx0Y29uc3QgeyBzY3JvbGxZUHJvZ3Jlc3MgfSA9IHVzZVZpZXdwb3J0U2Nyb2xsKClcblx0Ly8gY29uc3QgeVJuYWdlID0gdXNlVHJhbnNmb3JtKHVzZVZpZXdwb3J0U2Nyb2xsLCBbMCwgMV0sIHdpbmRvdy4pXG5cdGNvbnN0IHZhcmlhbnRzID0ge1xuXHRcdGhpZGRlbiA6IHtcblx0XHRcdHpJbmRleCA6IDAsXG5cdFx0fSxcblx0XHRzaG93c1VwIDoge1xuXHRcdFx0ekluZGV4IDogNTAsXG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgdmFyaWFudHMyID0ge1xuXHRcdGhpZGRlbiA6IHtcblx0XHRcdG9wYWNpdHkgOiAwLFxuXHRcdH0sXG5cdFx0c2hvd3NVcCA6IHtcblx0XHRcdG9wYWNpdHkgOiAxLFxuXHRcdFx0Ly8gYm94U2hhZG93IDogJzAgMHB4IDIwcHggOHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KScsXG5cdFx0XHRoZWlnaHQ6XCJhdXRvXCIsXG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIChcblx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0Y2xhc3NOYW1lPVwiYWJzb2x1dGUgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdy1mdWxsIGgtZnVsbCB0b3AtMCBcIlxuXHRcdFx0aW5pdGlhbD17ZmFsc2V9XG5cdFx0XHRhbmltYXRlPXsgb25EaXNwbGF5LmRpc3BsYXlTdGF0ZSA/IFwic2hvd3NVcFwiIDogXCJoaWRkZW5cIn1cblx0XHRcdHZhcmlhbnRzPXt2YXJpYW50c31cblx0XHRcdHRyYW5zaXRpb249e3tcblxuXHRcdFx0XHRkdXJhdGlvbiA6IDJcblx0XHRcdH19XG5cdFx0PlxuXHRcdFx0PG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsIGgtYXV0byBwLTVcIlxuXHRcdFx0XHR2YXJpYW50cz17dmFyaWFudHMyfVxuXHRcdFx0XHR0cmFuc2l0aW9uPXt7XG5cdFx0XHRcdFx0Ym94U2hhZG93IDoge1xuXHRcdFx0XHRcdFx0ZHVyYXRpb24gOiAzLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0ZGVsYXk6IDIsXG5cdFx0XHRcdFx0ZHVyYXRpb24gOiAyXG5cdFx0XHRcdH19XG5cdFx0XHRcdD5cblx0XHRcdFx0PERlc2NyaXB0aW9uQ2FyZC8+XG5cdFx0XHRcdDxJbWFnZURpc3BsYXllci8+XG5cdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0PC9tb3Rpb24uZGl2PlxuXHQpXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/card.js\n");

/***/ })

})