webpackHotUpdate_N_E("pages/card",{

/***/ "./pages/card.js":
/*!***********************!*\
  !*** ./pages/card.js ***!
  \***********************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_darkSky__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/darkSky */ \"./components/darkSky.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _components_imageDisplayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/imageDisplayer */ \"./components/imageDisplayer.tsx\");\n/* harmony import */ var _components_descriptionCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/descriptionCard */ \"./components/descriptionCard.js\");\n\n\nvar _jsxFileName = \"/goinfre/hmhindat/portfolio/pages/card.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n // import Sogumice from '../components/sogumice'\n// import LoloIcon from '../components/loloIcon'\n\n\n\n\n\n\n// import Image from 'next/Image'\nvar Card = function Card(_ref) {\n  _s();\n\n  var gitData = _ref.gitData,\n      onDisplay = _ref.onDisplay,\n      darkTheme = _ref.darkTheme,\n      displayGim = _ref.displayGim;\n  // const carRef = useRef(false);\n  // const { scrollYProgress } = useViewportScroll();\n  // const cardYOffset = useTransform(scrollYProgress, [ 0 , 0.1 , 0.4 , 1 ], [ 0 , 0 , 0 , 0 ]);\n  // const cardScale = useTransform(scrollYProgress, [ 0 , 0.1 , 0.6 , 1 ], [ 0 , 0.7 , 0.8 , 1 ]);\n  // const cardOpacity = useTransform(scrollYProgress, [ 0 , 0.1 , 0.6 , 1 ], [ 0 , 0.1 , 1 , 1 ]);\n  // const cardretateX = useTransform(scrollYProgress, [ 0 , 0.1 , 0.6 , 1 ], [ -30 , -20 , -20 , 0 ]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    if (gitData) console.log(gitData);\n  }, [gitData]); // const variants = {\n  // \thidden: (yOffset, cardOpacity) => {\n  // \t\treturn {\n  // \t\t\th : 0,\n  // \t\t\topacity : 0,\n  // \t\t};\n  // \t},\n  // \tshowsUp: (yOffset, cardOpacity) => {\n  // \t\treturn {\n  // \t\t\th : 1000,\n  // \t\t\topacity : 1,\n  // \t\t};\n  // \t}\n  // }\n  // const variants2 = {\n  // \thidden: {\n  // \t\theight : '0%',\n  // \t\th : 0,\n  // \t\topacity : 0,\n  // \t},\n  // \tshowsUp: {\n  // \t\theight : '100%',\n  // \t\th : 1000,\n  // \t\topacity : 1,\n  // \t\t// height:\"auto\",\n  // \t}\n  // }\n\n  return (\n    /*#__PURE__*/\n    // <motion.div className=\"relative flex flex-row justify-between w-full h-screen\"\n    // variants={variants2}\n    // initial={false}\n    // animate={onDisplay.displayState ? \"showsUp\" : \"hidden\"}\n    // >\n    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n      className: \"relative flex flex-row justify-between w-full h-screen\" // key={scrollYProgress}\n      // custom={onDisplay.onDisplayState}\n      // initial={false}\n      // animate={onDisplay.displayState ? \"showsUp\" : \"hidden\"}\n      // transition={{\n      // \tduration: 2\n      // }}\n      // style={{\n      // \topacity : cardOpacity,\n      // \ty : cardYOffset,\n      // \tscale : cardScale,\n      // \trotateX: cardretateX,\n      // }}\tvariants={variants}\n\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 11\n    }, _this) // </motion.div>\n\n  );\n};\n\n_s(Card, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = Card;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\n\nvar _c;\n\n$RefreshReg$(_c, \"Card\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FyZC5qcz9jYWQ3Il0sIm5hbWVzIjpbIkNhcmQiLCJnaXREYXRhIiwib25EaXNwbGF5IiwiZGFya1RoZW1lIiwiZGlzcGxheUdpbSIsInVzZUVmZmVjdCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBO0FBSUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sT0FDYjtBQUFBOztBQUFBLE1BRGdCQyxPQUNoQixRQURnQkEsT0FDaEI7QUFBQSxNQUQwQkMsU0FDMUIsUUFEMEJBLFNBQzFCO0FBQUEsTUFEcUNDLFNBQ3JDLFFBRHFDQSxTQUNyQztBQUFBLE1BRGdEQyxVQUNoRCxRQURnREEsVUFDaEQ7QUFFQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUMseURBQVMsQ0FBQyxZQUFLO0FBQ2QsUUFBSUosT0FBSixFQUNDSyxPQUFPLENBQUNDLEdBQVIsQ0FBWU4sT0FBWjtBQUNELEdBSFEsRUFHTixDQUFDQSxPQUFELENBSE0sQ0FBVCxDQVJELENBYUM7QUFDQztBQUNDO0FBQ0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNDO0FBQ0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0M7QUFDQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFFQztBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EseUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQVksZUFBUyxFQUFDLHdEQUF0QixDQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQztBQUNBO0FBQ0E7QUFDQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSRCxDQTZCUDs7QUE3Qk87QUErQlAsQ0ExRUY7O0dBQU1ELEk7O0tBQUFBLEk7O0FBZ0dVQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2NhcmQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGFya1NreSBmcm9tICcuLi9jb21wb25lbnRzL2RhcmtTa3knXG4vLyBpbXBvcnQgU29ndW1pY2UgZnJvbSAnLi4vY29tcG9uZW50cy9zb2d1bWljZSdcbi8vIGltcG9ydCBMb2xvSWNvbiBmcm9tICcuLi9jb21wb25lbnRzL2xvbG9JY29uJ1xuaW1wb3J0IHsgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtb3Rpb24sIHVzZVZpZXdwb3J0U2Nyb2xsLCB1c2VUcmFuc2Zvcm0gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IEltYWdlRGlzcGxheWVyIGZyb20gJy4uL2NvbXBvbmVudHMvaW1hZ2VEaXNwbGF5ZXInXG5pbXBvcnQgRGVzY3JpcHRpb25DYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvZGVzY3JpcHRpb25DYXJkJ1xuaW1wb3J0IHsgZ3FsIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgY2xpZW50IGZyb20gXCIuLi9hcG9sbG8tY2xpZW50XCI7XG4vLyBpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9JbWFnZSdcblxuXG5cbmNvbnN0IENhcmQgPSAoeyBnaXREYXRhLCAgb25EaXNwbGF5LCBkYXJrVGhlbWUsIGRpc3BsYXlHaW0gfSkgPT5cbntcblxuXHQvLyBjb25zdCBjYXJSZWYgPSB1c2VSZWYoZmFsc2UpO1xuXHQvLyBjb25zdCB7IHNjcm9sbFlQcm9ncmVzcyB9ID0gdXNlVmlld3BvcnRTY3JvbGwoKTtcblx0Ly8gY29uc3QgY2FyZFlPZmZzZXQgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbIDAgLCAwLjEgLCAwLjQgLCAxIF0sIFsgMCAsIDAgLCAwICwgMCBdKTtcblx0Ly8gY29uc3QgY2FyZFNjYWxlID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWyAwICwgMC4xICwgMC42ICwgMSBdLCBbIDAgLCAwLjcgLCAwLjggLCAxIF0pO1xuXHQvLyBjb25zdCBjYXJkT3BhY2l0eSA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFsgMCAsIDAuMSAsIDAuNiAsIDEgXSwgWyAwICwgMC4xICwgMSAsIDEgXSk7XG5cdC8vIGNvbnN0IGNhcmRyZXRhdGVYID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWyAwICwgMC4xICwgMC42ICwgMSBdLCBbIC0zMCAsIC0yMCAsIC0yMCAsIDAgXSk7XG5cdHVzZUVmZmVjdCgoKSA9Pntcblx0XHRpZiAoZ2l0RGF0YSlcblx0XHRcdGNvbnNvbGUubG9nKGdpdERhdGEpXG5cdH0sIFtnaXREYXRhXSlcblxuXHQvLyBjb25zdCB2YXJpYW50cyA9IHtcblx0XHQvLyBcdGhpZGRlbjogKHlPZmZzZXQsIGNhcmRPcGFjaXR5KSA9PiB7XG5cdFx0XHQvLyBcdFx0cmV0dXJuIHtcblx0XHRcdFx0Ly8gXHRcdFx0aCA6IDAsXG5cdFx0XHRcdC8vIFx0XHRcdG9wYWNpdHkgOiAwLFxuXHRcdFx0XHQvLyBcdFx0fTtcblx0XHRcdFx0Ly8gXHR9LFxuXHRcdFx0XHQvLyBcdHNob3dzVXA6ICh5T2Zmc2V0LCBjYXJkT3BhY2l0eSkgPT4ge1xuXHRcdFx0XHRcdC8vIFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0Ly8gXHRcdFx0aCA6IDEwMDAsXG5cdFx0XHRcdFx0XHQvLyBcdFx0XHRvcGFjaXR5IDogMSxcblx0XHRcdFx0XHRcdC8vIFx0XHR9O1xuXHRcdFx0XHRcdFx0Ly8gXHR9XG5cdFx0XHRcdFx0XHQvLyB9XG5cblx0XHRcdFx0XHRcdC8vIGNvbnN0IHZhcmlhbnRzMiA9IHtcblx0XHRcdFx0XHRcdFx0Ly8gXHRoaWRkZW46IHtcblx0XHRcdFx0XHRcdFx0XHQvLyBcdFx0aGVpZ2h0IDogJzAlJyxcblx0XHRcdFx0XHRcdFx0XHQvLyBcdFx0aCA6IDAsXG5cdFx0XHRcdFx0XHRcdFx0Ly8gXHRcdG9wYWNpdHkgOiAwLFxuXHRcdFx0XHRcdFx0XHRcdC8vIFx0fSxcblx0XHRcdFx0XHRcdFx0XHQvLyBcdHNob3dzVXA6IHtcblx0XHRcdFx0XHRcdFx0XHRcdC8vIFx0XHRoZWlnaHQgOiAnMTAwJScsXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBcdFx0aCA6IDEwMDAsXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBcdFx0b3BhY2l0eSA6IDEsXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBcdFx0Ly8gaGVpZ2h0OlwiYXV0b1wiLFxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gXHR9XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyB9XG5cblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsIGgtc2NyZWVuXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gdmFyaWFudHM9e3ZhcmlhbnRzMn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gaW5pdGlhbD17ZmFsc2V9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGFuaW1hdGU9e29uRGlzcGxheS5kaXNwbGF5U3RhdGUgPyBcInNob3dzVXBcIiA6IFwiaGlkZGVuXCJ9XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiB3LWZ1bGwgaC1zY3JlZW5cIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBrZXk9e3Njcm9sbFlQcm9ncmVzc31cblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gY3VzdG9tPXtvbkRpc3BsYXkub25EaXNwbGF5U3RhdGV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGluaXRpYWw9e2ZhbHNlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBhbmltYXRlPXtvbkRpc3BsYXkuZGlzcGxheVN0YXRlID8gXCJzaG93c1VwXCIgOiBcImhpZGRlblwifVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyB0cmFuc2l0aW9uPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gXHRkdXJhdGlvbjogMlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gc3R5bGU9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIFx0b3BhY2l0eSA6IGNhcmRPcGFjaXR5LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gXHR5IDogY2FyZFlPZmZzZXQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBcdHNjYWxlIDogY2FyZFNjYWxlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gXHRyb3RhdGVYOiBjYXJkcmV0YXRlWCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIH19XHR2YXJpYW50cz17dmFyaWFudHN9XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0ey8qIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cImgtMTAwIHctMTAwIHRleHQtd2hpdGVcIiBvblRhcD17KGV2ZW50LCBpbmZvKSA9PiBkaXNwbGF5R2ltKCl9PmNsaWNrIG1lPC9tb3Rpb24uZGl2PiAqL31cblxuXHRcdFx0XHR7LyogPERlc2NyaXB0aW9uQ2FyZCAvPlxuXHRcdFx0XHQ8SW1hZ2VEaXNwbGF5ZXIgLz4gKi99XG5cdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0Ly8gPC9tb3Rpb24uZGl2PlxuXHRcdClcblx0fVxuXG5cdGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGNsaWVudC5xdWVyeSh7XG4gICAgICBxdWVyeTogZ3FsYFxuICAgICAgICBxdWVyeSBDb3VudHJpZXMge1xuICAgICAgICAgIGNvdW50cmllcyB7XG4gICAgICAgICAgICBjb2RlXG4gICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICBlbW9qaVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYCxcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICBnaXREYXRhOiBkYXRhLFxuICAgICAgfSxcbiAgIH07XG59XG5cblx0ZXhwb3J0IGRlZmF1bHQgQ2FyZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/card.js\n");

/***/ })

})