webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/card.js":
/*!***********************!*\
  !*** ./pages/card.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Card; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _components_imageDisplayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/imageDisplayer */ \"./components/imageDisplayer.tsx\");\n/* harmony import */ var _components_descriptionCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/descriptionCard */ \"./components/descriptionCard.js\");\n\n\nvar _jsxFileName = \"/goinfre/hmhindat/portfolioo/pages/card.js\",\n    _s = $RefreshSig$();\n\n// import DarkSky from '../components/darkSky'\n// import Sogumice from '../components/sogumice'\n// import LoloIcon from '../components/loloIcon'\n\n\n\n // import Image from 'next/Image'\n\nvar theme = {\n  light: {\n    backgroundColor: 'bg-gray-900',\n    shadowsColor: 'bg-blue-400',\n    gimsColor: 'bg-red-200'\n  },\n  dark: {\n    backgroundColor: 'bg-blue-400',\n    shadowsColor: 'bg-gray-900',\n    gimsColor: 'bg-blue-400'\n  }\n};\nfunction Card(_ref) {\n  _s();\n\n  var onDisplay = _ref.onDisplay,\n      darkTheme = _ref.darkTheme;\n  var carRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(false);\n\n  var _useViewportScroll = Object(framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"useViewportScroll\"])(),\n      scrollYProgress = _useViewportScroll.scrollYProgress; // const yRnage = useTransform(useViewportScroll, [0, 1], window.)\n\n\n  var variants = {\n    hidden: {\n      opacity: 0,\n      botttom: 'full'\n    },\n    showsUp: {\n      opacity: 1,\n      // boxShadow : ['0 0px 0px 0px rgba(255, 255, 255, 0.5)', '0 0px 20px 8px rgba(255, 255, 255, 0.5)'],\n      height: \"auto\",\n      top: 0\n    }\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"motion\"].div, {\n    className: \"absolute -bottom-full flex flex-col justify-center items-center w-full h-auto \",\n    initial: false,\n    animate: onDisplay.displayState ? \"showsUp\" : \"hidden\",\n    variants: variants,\n    transition: {\n      boxShadow: {\n        duration: 3\n      },\n      duration: 2\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"flex flex-row justify-between w-full p-5\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_descriptionCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_imageDisplayer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 4\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 3\n  }, this);\n}\n\n_s(Card, \"JEeM2HSEWJmetkzVenFiVnhMowc=\", false, function () {\n  return [framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"useViewportScroll\"]];\n});\n\n_c = Card;\n\nvar _c;\n\n$RefreshReg$(_c, \"Card\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FyZC5qcz9jYWQ3Il0sIm5hbWVzIjpbInRoZW1lIiwibGlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzaGFkb3dzQ29sb3IiLCJnaW1zQ29sb3IiLCJkYXJrIiwiQ2FyZCIsIm9uRGlzcGxheSIsImRhcmtUaGVtZSIsImNhclJlZiIsInVzZVJlZiIsInVzZVZpZXdwb3J0U2Nyb2xsIiwic2Nyb2xsWVByb2dyZXNzIiwidmFyaWFudHMiLCJoaWRkZW4iLCJvcGFjaXR5IiwiYm90dHRvbSIsInNob3dzVXAiLCJoZWlnaHQiLCJ0b3AiLCJkaXNwbGF5U3RhdGUiLCJib3hTaGFkb3ciLCJkdXJhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFHQSxJQUFNQSxLQUFLLEdBQUc7QUFDYkMsT0FBSyxFQUFHO0FBQ1BDLG1CQUFlLEVBQUcsYUFEWDtBQUVQQyxnQkFBWSxFQUFHLGFBRlI7QUFHUEMsYUFBUyxFQUFHO0FBSEwsR0FESztBQU1iQyxNQUFJLEVBQUc7QUFDTkgsbUJBQWUsRUFBRyxhQURaO0FBRU5DLGdCQUFZLEVBQUcsYUFGVDtBQUdOQyxhQUFTLEVBQUc7QUFITjtBQU5NLENBQWQ7QUFhZSxTQUFTRSxJQUFULE9BQXlDO0FBQUE7O0FBQUEsTUFBeEJDLFNBQXdCLFFBQXhCQSxTQUF3QjtBQUFBLE1BQWJDLFNBQWEsUUFBYkEsU0FBYTtBQUV2RCxNQUFNQyxNQUFNLEdBQUdDLG9EQUFNLENBQUMsS0FBRCxDQUFyQjs7QUFGdUQsMkJBRzNCQyx1RUFBaUIsRUFIVTtBQUFBLE1BRy9DQyxlQUgrQyxzQkFHL0NBLGVBSCtDLEVBSXZEOzs7QUFDQSxNQUFNQyxRQUFRLEdBQUc7QUFDaEJDLFVBQU0sRUFBRztBQUNSQyxhQUFPLEVBQUcsQ0FERjtBQUVSQyxhQUFPLEVBQUc7QUFGRixLQURPO0FBS2hCQyxXQUFPLEVBQUc7QUFDVEYsYUFBTyxFQUFHLENBREQ7QUFFVDtBQUNBRyxZQUFNLEVBQUMsTUFIRTtBQUlUQyxTQUFHLEVBQUc7QUFKRztBQUxNLEdBQWpCO0FBWUEsc0JBQ0MscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0MsYUFBUyxFQUFDLGdGQURYO0FBRUMsV0FBTyxFQUFFLEtBRlY7QUFHQyxXQUFPLEVBQUdaLFNBQVMsQ0FBQ2EsWUFBVixHQUF5QixTQUF6QixHQUFxQyxRQUhoRDtBQUlDLFlBQVEsRUFBRVAsUUFKWDtBQUtDLGNBQVUsRUFBRTtBQUNYUSxlQUFTLEVBQUc7QUFDWEMsZ0JBQVEsRUFBRztBQURBLE9BREQ7QUFJWEEsY0FBUSxFQUFHO0FBSkEsS0FMYjtBQUFBLDJCQVlDO0FBQUssZUFBUyxFQUFDLDBDQUFmO0FBQUEsOEJBQ0MscUVBQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELGVBRUMscUVBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQW1CQTs7R0FwQ3VCaEIsSTtVQUdLSywrRDs7O0tBSExMLEkiLCJmaWxlIjoiLi9wYWdlcy9jYXJkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IERhcmtTa3kgZnJvbSAnLi4vY29tcG9uZW50cy9kYXJrU2t5J1xuLy8gaW1wb3J0IFNvZ3VtaWNlIGZyb20gJy4uL2NvbXBvbmVudHMvc29ndW1pY2UnXG4vLyBpbXBvcnQgTG9sb0ljb24gZnJvbSAnLi4vY29tcG9uZW50cy9sb2xvSWNvbidcbmltcG9ydCB7IHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbW90aW9uLCB1c2VWaWV3cG9ydFNjcm9sbCAgfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IEltYWdlRGlzcGxheWVyIGZyb20gJy4uL2NvbXBvbmVudHMvaW1hZ2VEaXNwbGF5ZXInXG5pbXBvcnQgRGVzY3JpcHRpb25DYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvZGVzY3JpcHRpb25DYXJkJ1xuLy8gaW1wb3J0IEltYWdlIGZyb20gJ25leHQvSW1hZ2UnXG5cblxuY29uc3QgdGhlbWUgPSB7XG5cdGxpZ2h0IDoge1xuXHRcdGJhY2tncm91bmRDb2xvciA6ICdiZy1ncmF5LTkwMCcsXG5cdFx0c2hhZG93c0NvbG9yIDogJ2JnLWJsdWUtNDAwJyxcblx0XHRnaW1zQ29sb3IgOiAnYmctcmVkLTIwMCdcblx0fSxcblx0ZGFyayA6IHtcblx0XHRiYWNrZ3JvdW5kQ29sb3IgOiAnYmctYmx1ZS00MDAnLFxuXHRcdHNoYWRvd3NDb2xvciA6ICdiZy1ncmF5LTkwMCcsXG5cdFx0Z2ltc0NvbG9yIDogJ2JnLWJsdWUtNDAwJ1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcmQgKHsgb25EaXNwbGF5LCBkYXJrVGhlbWUgfSkge1xuXG5cdGNvbnN0IGNhclJlZiA9IHVzZVJlZihmYWxzZSlcblx0Y29uc3QgeyBzY3JvbGxZUHJvZ3Jlc3MgfSA9IHVzZVZpZXdwb3J0U2Nyb2xsKClcblx0Ly8gY29uc3QgeVJuYWdlID0gdXNlVHJhbnNmb3JtKHVzZVZpZXdwb3J0U2Nyb2xsLCBbMCwgMV0sIHdpbmRvdy4pXG5cdGNvbnN0IHZhcmlhbnRzID0ge1xuXHRcdGhpZGRlbiA6IHtcblx0XHRcdG9wYWNpdHkgOiAwLFxuXHRcdFx0Ym90dHRvbSA6ICdmdWxsJ1xuXHRcdH0sXG5cdFx0c2hvd3NVcCA6IHtcblx0XHRcdG9wYWNpdHkgOiAxLFxuXHRcdFx0Ly8gYm94U2hhZG93IDogWycwIDBweCAwcHggMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KScsICcwIDBweCAyMHB4IDhweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSknXSxcblx0XHRcdGhlaWdodDpcImF1dG9cIixcblx0XHRcdHRvcCA6IDAsXG5cdFx0fVxuXHR9XG5cdHJldHVybiAoXG5cdFx0PG1vdGlvbi5kaXZcblx0XHRcdGNsYXNzTmFtZT1cImFic29sdXRlIC1ib3R0b20tZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LWZ1bGwgaC1hdXRvIFwiXG5cdFx0XHRpbml0aWFsPXtmYWxzZX1cblx0XHRcdGFuaW1hdGU9eyBvbkRpc3BsYXkuZGlzcGxheVN0YXRlID8gXCJzaG93c1VwXCIgOiBcImhpZGRlblwifVxuXHRcdFx0dmFyaWFudHM9e3ZhcmlhbnRzfVxuXHRcdFx0dHJhbnNpdGlvbj17e1xuXHRcdFx0XHRib3hTaGFkb3cgOiB7XG5cdFx0XHRcdFx0ZHVyYXRpb24gOiAzLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRkdXJhdGlvbiA6IDJcblx0XHRcdH19XG5cdFx0PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiB3LWZ1bGwgcC01XCI+XG5cdFx0XHRcdDxEZXNjcmlwdGlvbkNhcmQvPlxuXHRcdFx0XHQ8SW1hZ2VEaXNwbGF5ZXIvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9tb3Rpb24uZGl2PlxuXHQpXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/card.js\n");

/***/ })

})