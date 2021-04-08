webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/sogumaVxPhone.tsx":
/*!**************************************!*\
  !*** ./components/sogumaVxPhone.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SogumaVxPhone; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _sogumaPhone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sogumaPhone */ \"./components/sogumaPhone.tsx\");\n/* harmony import */ var _menuPhone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menuPhone */ \"./components/menuPhone.js\");\n\n\n\nvar _jsxFileName = \"/home/hamza/Desktop/portfolio/components/sogumaVxPhone.tsx\",\n    _s = $RefreshSig$();\n\n\n // import GimsPhone from './gimPhone'\n\n\n\n// gims props\nvar variants = {\n  initial: function initial(onDisplay) {\n    if (onDisplay.displayState) return {\n      y: 0,\n      scale: 1\n    };else return {\n      y: 0,\n      //-410,\n      scale: 0.7 //0.1,\n\n    };\n  },\n  standing: function standing(onDisplay) {\n    if (onDisplay.displayState) return {\n      scale: [1, 0.7],\n      y: [0, 0],\n      transition: {\n        scale: {\n          delay: 0.3,\n          duration: 1\n        },\n        y: {\n          delay: 0.3,\n          duration: 1\n        }\n      }\n    };else return {\n      y: 0,\n      // x: 0,\n      scale: 1,\n      transition: {\n        // duration: 0.5,\n        scale: {\n          delay: 0.3,\n          duration: 1\n        },\n        y: {\n          delay: 0.3,\n          duration: 1\n        }\n      }\n    };\n  }\n};\nvar data = [\"art\", \"about me\", \"p1\"];\nfunction SogumaVxPhone(_ref) {\n  _s();\n\n  var repos = _ref.repos,\n      fetchedData = _ref.fetchedData,\n      setOnDisplay = _ref.setOnDisplay,\n      onDisplay = _ref.onDisplay,\n      darkTheme = _ref.darkTheme;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([0, 0]),\n      _useState$ = Object(_home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState[0], 2),\n      direction = _useState$[0],\n      steps = _useState$[1],\n      setRotate = _useState[1]; // const [clickOff, setClickOff] = useState(true);\n  // const [type, setType] = useState([ 0, -1]);\n\n\n  var moveGims = function moveGims(newDirection) {\n    setRotate([newDirection, steps + newDirection]);\n  }; // console.log(dataLoading ? \"fetched DATA : \": fetchedData )\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {// if ( onDisplay.type > 0 )\n    // \tsetOnDisplay(true, onDisplay.itemId, -1)\n    // const initProjects = []\n    // repos.map((project) => {\n    // \tinitProjects.push(project.name);\n    // })\n    // // console.log(\" projects d ZAAAAAAAAAAAAAAAAAAB: \", initProjects)\n    // setProjects(initProjects)\n  }, []);\n\n  var onSogumaClick = function onSogumaClick() {\n    switch (onDisplay.type) {\n      case -1:\n        // none state\n        setOnDisplay(false, onDisplay.itemId, 0);\n        break;\n\n      case 0:\n        // menu state\n        setOnDisplay(true, onDisplay.itemId, -1);\n        break;\n\n      case 1:\n        // menu state\n        setOnDisplay(true, onDisplay.itemId, -1);\n        break;\n\n      case 2:\n        // menu state\n        setOnDisplay(false, onDisplay.itemId, 0);\n        break;\n    }\n  };\n\n  var onDisplayKey = onDisplay.displayState ? 1 : 0;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n    className: \"md:hidden relative flex flex-col justify-start items-center h-auto w-full\",\n    initial: \"initial\",\n    animate: \"standing\",\n    custom: onDisplay,\n    variants: variants,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_sogumaPhone__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      onDisplay: onDisplay,\n      darkTheme: darkTheme,\n      onSogumaClick: onSogumaClick,\n      setOnDisplay: setOnDisplay\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n      initial: {\n        opacity: 0\n      },\n      animate: {\n        opacity: 1\n      },\n      exit: {\n        opacity: 0\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_menuPhone__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        onDisplay: onDisplay,\n        setOnDisplay: setOnDisplay\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 4\n    }, this)]\n  }, onDisplayKey, true, {\n    fileName: _jsxFileName,\n    lineNumber: 92,\n    columnNumber: 3\n  }, this);\n}\n\n_s(SogumaVxPhone, \"BSBNN5l9LIxqrCzE6GDni0II8nw=\");\n\n_c = SogumaVxPhone;\n\nvar _c;\n\n$RefreshReg$(_c, \"SogumaVxPhone\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zb2d1bWFWeFBob25lLnRzeD80ZGZjIl0sIm5hbWVzIjpbInZhcmlhbnRzIiwiaW5pdGlhbCIsIm9uRGlzcGxheSIsImRpc3BsYXlTdGF0ZSIsInkiLCJzY2FsZSIsInN0YW5kaW5nIiwidHJhbnNpdGlvbiIsImRlbGF5IiwiZHVyYXRpb24iLCJkYXRhIiwiU29ndW1hVnhQaG9uZSIsInJlcG9zIiwiZmV0Y2hlZERhdGEiLCJzZXRPbkRpc3BsYXkiLCJkYXJrVGhlbWUiLCJ1c2VTdGF0ZSIsImRpcmVjdGlvbiIsInN0ZXBzIiwic2V0Um90YXRlIiwibW92ZUdpbXMiLCJuZXdEaXJlY3Rpb24iLCJ1c2VFZmZlY3QiLCJvblNvZ3VtYUNsaWNrIiwidHlwZSIsIml0ZW1JZCIsIm9uRGlzcGxheUtleSIsIm9wYWNpdHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBOztBQUNBO0FBQ0E7QUFJdUM7QUFHdkMsSUFBTUEsUUFBUSxHQUFHO0FBQ2hCQyxTQUFPLEVBQUUsaUJBQUNDLFNBQUQsRUFBb0I7QUFDNUIsUUFBSUEsU0FBUyxDQUFDQyxZQUFkLEVBQ0MsT0FBTztBQUNOQyxPQUFDLEVBQUUsQ0FERztBQUVOQyxXQUFLLEVBQUU7QUFGRCxLQUFQLENBREQsS0FNQyxPQUFPO0FBQ05ELE9BQUMsRUFBRSxDQURHO0FBQ0Q7QUFDTEMsV0FBSyxFQUFFLEdBRkQsQ0FFSzs7QUFGTCxLQUFQO0FBSUQsR0FaZTtBQWFoQkMsVUFBUSxFQUFFLGtCQUFDSixTQUFELEVBQW9CO0FBQzdCLFFBQUlBLFNBQVMsQ0FBQ0MsWUFBZCxFQUNDLE9BQU87QUFDTkUsV0FBSyxFQUFFLENBQUMsQ0FBRCxFQUFJLEdBQUosQ0FERDtBQUVORCxPQUFDLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUZHO0FBR05HLGdCQUFVLEVBQUU7QUFDWEYsYUFBSyxFQUFFO0FBQUVHLGVBQUssRUFBRSxHQUFUO0FBQWND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RTtBQUNSQSxlQUFPLEVBQUU7QUFERCxPQUpWO0FBT0MsVUFBSSxFQUFFO0FBQ0xBLGVBQU8sRUFBRTtBQURKLE9BUFA7QUFBQSw2QkFXQyxxRUFBQyxrREFBRDtBQUFXLGlCQUFTLEVBQUV6QixTQUF0QjtBQUFpQyxvQkFBWSxFQUFFWTtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWREO0FBQUEsS0FFTVksWUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUE4QkE7O0dBckV1QmYsYTs7S0FBQUEsYSIsImZpbGUiOiIuL2NvbXBvbmVudHMvc29ndW1hVnhQaG9uZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtb3Rpb24sIHVzZVRyYW5zZm9ybSwgdXNlVmlld3BvcnRTY3JvbGwsIHVzZU1vdGlvblZhbHVlLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuLy8gaW1wb3J0IEdpbXNQaG9uZSBmcm9tICcuL2dpbVBob25lJ1xuaW1wb3J0IFNvZ3VtYVBob25lIGZyb20gJy4vc29ndW1hUGhvbmUnXG5pbXBvcnQgTWVudVBob25lIGZyb20gJy4vbWVudVBob25lJ1xuaW1wb3J0IHsgd3JhcCB9IGZyb20gJ3BvcG1vdGlvbidcbmltcG9ydCBTb2d1bWFFeWUgZnJvbSAnLi9zdWd1bWFFeWUnXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJy4vdGhlbWUnXG5pbXBvcnQgeyBnaW1zUHJvcHMgfSBmcm9tICcuL2dpbVByb3BzJyAvLyBnaW1zIHByb3BzXG5cblxuY29uc3QgdmFyaWFudHMgPSB7XG5cdGluaXRpYWw6IChvbkRpc3BsYXk6IGFueSkgPT4ge1xuXHRcdGlmIChvbkRpc3BsYXkuZGlzcGxheVN0YXRlKVxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0eTogMCxcblx0XHRcdFx0c2NhbGU6IDEsXG5cdFx0XHR9XG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0eTogMCwvLy00MTAsXG5cdFx0XHRcdHNjYWxlOiAwLjcsLy8wLjEsXG5cdFx0XHR9O1xuXHR9LFxuXHRzdGFuZGluZzogKG9uRGlzcGxheTogYW55KSA9PiB7XG5cdFx0aWYgKG9uRGlzcGxheS5kaXNwbGF5U3RhdGUpXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRzY2FsZTogWzEsIDAuN10sXG5cdFx0XHRcdHk6IFswLCAwXSxcblx0XHRcdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0XHRcdHNjYWxlOiB7IGRlbGF5OiAwLjMsIGR1cmF0aW9uOiAxIH0sXG5cdFx0XHRcdFx0eTogeyBkZWxheTogMC4zLCBkdXJhdGlvbjogMSB9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRlbHNlXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR5OiAwLFxuXHRcdFx0XHQvLyB4OiAwLFxuXHRcdFx0XHRzY2FsZTogMSxcblx0XHRcdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0XHRcdC8vIGR1cmF0aW9uOiAwLjUsXG5cdFx0XHRcdFx0c2NhbGU6IHsgZGVsYXk6IDAuMywgZHVyYXRpb246IDEgfSxcblx0XHRcdFx0XHR5OiB7IGRlbGF5OiAwLjMsIGR1cmF0aW9uOiAxIH1cblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0fSxcbn1cblxuXG5jb25zdCBkYXRhID0gW1wiYXJ0XCIsIFwiYWJvdXQgbWVcIiwgXCJwMVwiXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTb2d1bWFWeFBob25lKHsgcmVwb3MsIGZldGNoZWREYXRhLCBzZXRPbkRpc3BsYXksIG9uRGlzcGxheSwgZGFya1RoZW1lIH0pIHtcblxuXHRjb25zdCBbW2RpcmVjdGlvbiwgc3RlcHNdLCBzZXRSb3RhdGVdID0gdXNlU3RhdGUoWzAsIDBdKTtcblx0Ly8gY29uc3QgW2NsaWNrT2ZmLCBzZXRDbGlja09mZl0gPSB1c2VTdGF0ZSh0cnVlKTtcblx0Ly8gY29uc3QgW3R5cGUsIHNldFR5cGVdID0gdXNlU3RhdGUoWyAwLCAtMV0pO1xuXG5cblx0Y29uc3QgbW92ZUdpbXMgPSAobmV3RGlyZWN0aW9uOiBudW1iZXIpID0+IHtcblx0XHRzZXRSb3RhdGUoW25ld0RpcmVjdGlvbiwgc3RlcHMgKyBuZXdEaXJlY3Rpb25dKTtcblx0fVxuXHQvLyBjb25zb2xlLmxvZyhkYXRhTG9hZGluZyA/IFwiZmV0Y2hlZCBEQVRBIDogXCI6IGZldGNoZWREYXRhIClcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHQvLyBpZiAoIG9uRGlzcGxheS50eXBlID4gMCApXG5cdFx0Ly8gXHRzZXRPbkRpc3BsYXkodHJ1ZSwgb25EaXNwbGF5Lml0ZW1JZCwgLTEpXG5cdFx0Ly8gY29uc3QgaW5pdFByb2plY3RzID0gW11cblx0XHQvLyByZXBvcy5tYXAoKHByb2plY3QpID0+IHtcblx0XHQvLyBcdGluaXRQcm9qZWN0cy5wdXNoKHByb2plY3QubmFtZSk7XG5cdFx0Ly8gfSlcblx0XHQvLyAvLyBjb25zb2xlLmxvZyhcIiBwcm9qZWN0cyBkIFpBQUFBQUFBQUFBQUFBQUFBQUFCOiBcIiwgaW5pdFByb2plY3RzKVxuXHRcdC8vIHNldFByb2plY3RzKGluaXRQcm9qZWN0cylcblx0fSwgW10pXG5cblx0Y29uc3Qgb25Tb2d1bWFDbGljayA9ICgpID0+IHtcblx0XHRzd2l0Y2ggKG9uRGlzcGxheS50eXBlKSB7XG5cdFx0XHRjYXNlIC0xOiAvLyBub25lIHN0YXRlXG5cdFx0XHRcdHNldE9uRGlzcGxheShmYWxzZSwgb25EaXNwbGF5Lml0ZW1JZCwgMClcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDA6IC8vIG1lbnUgc3RhdGVcblx0XHRcdFx0c2V0T25EaXNwbGF5KHRydWUsIG9uRGlzcGxheS5pdGVtSWQsIC0xKVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMTogLy8gbWVudSBzdGF0ZVxuXHRcdFx0XHRzZXRPbkRpc3BsYXkodHJ1ZSwgb25EaXNwbGF5Lml0ZW1JZCwgLTEpXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAyOiAvLyBtZW51IHN0YXRlXG5cdFx0XHRcdHNldE9uRGlzcGxheShmYWxzZSwgb25EaXNwbGF5Lml0ZW1JZCwgMClcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cdGNvbnN0IG9uRGlzcGxheUtleSA9IG9uRGlzcGxheS5kaXNwbGF5U3RhdGUgPyAxIDogMDtcblx0cmV0dXJuIChcblx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0Y2xhc3NOYW1lPVwibWQ6aGlkZGVuIHJlbGF0aXZlIGZsZXggZmxleC1jb2wganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgaC1hdXRvIHctZnVsbFwiXG5cdFx0XHRrZXk9e29uRGlzcGxheUtleX1cblx0XHRcdGluaXRpYWw9XCJpbml0aWFsXCJcblx0XHRcdGFuaW1hdGU9XCJzdGFuZGluZ1wiXG5cdFx0XHRjdXN0b209e29uRGlzcGxheX1cblx0XHRcdHZhcmlhbnRzPXt2YXJpYW50c31cblx0XHQ+XG5cdFx0XHQ8U29ndW1hUGhvbmVcblx0XHRcdFx0b25EaXNwbGF5PXtvbkRpc3BsYXl9XG5cdFx0XHRcdGRhcmtUaGVtZT17ZGFya1RoZW1lfVxuXHRcdFx0XHRvblNvZ3VtYUNsaWNrPXtvblNvZ3VtYUNsaWNrfVxuXHRcdFx0XHRzZXRPbkRpc3BsYXk9e3NldE9uRGlzcGxheX1cblx0XHRcdC8+XG5cdFx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0XHRpbml0aWFsPXt7XG5cdFx0XHRcdFx0b3BhY2l0eTogMCxcblx0XHRcdFx0fX1cblx0XHRcdFx0YW5pbWF0ZT17e1xuXHRcdFx0XHRcdG9wYWNpdHk6IDEsXG5cdFx0XHRcdH19XG5cdFx0XHRcdGV4aXQ9e3tcblx0XHRcdFx0XHRvcGFjaXR5OiAwLFxuXHRcdFx0XHR9fVxuXHRcdFx0PlxuXHRcdFx0XHQ8TWVudVBob25lIG9uRGlzcGxheT17b25EaXNwbGF5fSBzZXRPbkRpc3BsYXk9e3NldE9uRGlzcGxheX0gLz5cblx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHQ8L21vdGlvbi5kaXY+XG5cdCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/sogumaVxPhone.tsx\n");

/***/ })

})