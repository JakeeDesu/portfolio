webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/sogumaVxPhone.tsx":
/*!**************************************!*\
  !*** ./components/sogumaVxPhone.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SogumaVxPhone; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _sogumaPhone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sogumaPhone */ \"./components/sogumaPhone.tsx\");\n/* harmony import */ var _menuPhone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menuPhone */ \"./components/menuPhone.js\");\n\n\n\nvar _jsxFileName = \"/home/hamza/Desktop/portfolio/components/sogumaVxPhone.tsx\",\n    _s = $RefreshSig$();\n\n\n // import GimsPhone from './gimPhone'\n\n\n\n// gims props\nvar variants = {\n  initial: function initial(onDisplay) {\n    if (onDisplay.displayState) return {\n      y: 0,\n      scale: 1\n    };else return {\n      y: 0,\n      //-410,\n      scale: 0.7 //0.1,\n\n    };\n  },\n  standing: function standing(onDisplay) {\n    if (onDisplay.displayState) return {\n      scale: [1, 0.7],\n      y: [0, 0],\n      transition: {\n        scale: {\n          delay: 0.3,\n          duration: 1\n        },\n        y: {\n          delay: 0.3,\n          duration: 1\n        }\n      }\n    };else return {\n      y: 0,\n      // x: 0,\n      scale: 1,\n      transition: {\n        // duration: 0.5,\n        scale: {\n          delay: 0.3,\n          duration: 1\n        },\n        y: {\n          delay: 0.3,\n          duration: 1\n        }\n      }\n    };\n  }\n};\nvar data = [\"art\", \"about me\", \"p1\"];\nfunction SogumaVxPhone(_ref) {\n  _s();\n\n  var repos = _ref.repos,\n      fetchedData = _ref.fetchedData,\n      setOnDisplay = _ref.setOnDisplay,\n      onDisplay = _ref.onDisplay,\n      darkTheme = _ref.darkTheme;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([0, 0]),\n      _useState$ = Object(_home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState[0], 2),\n      direction = _useState$[0],\n      steps = _useState$[1],\n      setRotate = _useState[1]; // const [clickOff, setClickOff] = useState(true);\n  // const [type, setType] = useState([ 0, -1]);\n\n\n  var moveGims = function moveGims(newDirection) {\n    setRotate([newDirection, steps + newDirection]);\n  }; // console.log(dataLoading ? \"fetched DATA : \": fetchedData )\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {// if ( onDisplay.type > 0 )\n    // \tsetOnDisplay(true, onDisplay.itemId, -1)\n    // const initProjects = []\n    // repos.map((project) => {\n    // \tinitProjects.push(project.name);\n    // })\n    // // console.log(\" projects d ZAAAAAAAAAAAAAAAAAAB: \", initProjects)\n    // setProjects(initProjects)\n  }, []);\n\n  var onSogumaClick = function onSogumaClick() {\n    switch (onDisplay.type) {\n      case -1:\n        // none state\n        setOnDisplay(false, onDisplay.itemId, 0);\n        break;\n\n      case 0:\n        // menu state\n        setOnDisplay(true, onDisplay.itemId, -1);\n        break;\n\n      case 1:\n        // menu state\n        setOnDisplay(true, onDisplay.itemId, -1);\n        break;\n\n      case 2:\n        // menu state\n        setOnDisplay(false, onDisplay.itemId, 0);\n        break;\n    }\n  };\n\n  var onDisplayKey = onDisplay.displayState ? 1 : 0;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n    className: \"md:hidden relative flex flex-col justify-start items-center h-auto w-full\",\n    initial: \"initial\",\n    animate: \"standing\",\n    custom: onDisplay,\n    variants: variants,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_sogumaPhone__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      onDisplay: onDisplay,\n      darkTheme: darkTheme,\n      onSogumaClick: onSogumaClick,\n      setOnDisplay: setOnDisplay\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"AnimatePresence\"], {\n      children: !onDisplay.displayState && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n        className: \"md:hidden absolute top-full flex-col justify-center items-center w-full \",\n        initial: {\n          opacity: 0,\n          originY: 0,\n          scale: 0\n        },\n        animate: {\n          scale: 1,\n          originY: 0,\n          opacity: 1,\n          transition: {\n            duration: 1,\n            type: 'spring',\n            bounce: 0.5\n          }\n        },\n        exit: {\n          scale: 0,\n          originY: 0,\n          opacity: 0,\n          transition: {\n            duration: 1\n          }\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_menuPhone__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          onDisplay: onDisplay,\n          setOnDisplay: setOnDisplay\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 134,\n          columnNumber: 6\n        }, this)\n      }, onDisplayKey, false, {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 33\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 4\n    }, this)]\n  }, onDisplayKey, true, {\n    fileName: _jsxFileName,\n    lineNumber: 92,\n    columnNumber: 3\n  }, this);\n}\n\n_s(SogumaVxPhone, \"BSBNN5l9LIxqrCzE6GDni0II8nw=\");\n\n_c = SogumaVxPhone;\n\nvar _c;\n\n$RefreshReg$(_c, \"SogumaVxPhone\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zb2d1bWFWeFBob25lLnRzeD80ZGZjIl0sIm5hbWVzIjpbInZhcmlhbnRzIiwiaW5pdGlhbCIsIm9uRGlzcGxheSIsImRpc3BsYXlTdGF0ZSIsInkiLCJzY2FsZSIsInN0YW5kaW5nIiwidHJhbnNpdGlvbiIsImRlbGF5IiwiZHVyYXRpb24iLCJkYXRhIiwiU29ndW1hVnhQaG9uZSIsInJlcG9zIiwiZmV0Y2hlZERhdGEiLCJzZXRPbkRpc3BsYXkiLCJkYXJrVGhlbWUiLCJ1c2VTdGF0ZSIsImRpcmVjdGlvbiIsInN0ZXBzIiwic2V0Um90YXRlIiwibW92ZUdpbXMiLCJuZXdEaXJlY3Rpb24iLCJ1c2VFZmZlY3QiLCJvblNvZ3VtYUNsaWNrIiwidHlwZSIsIml0ZW1JZCIsIm9uRGlzcGxheUtleSIsIm9wYWNpdHkiLCJvcmlnaW5ZIiwiYm91bmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTtBQUNBO0FBSXVDO0FBR3ZDLElBQU1BLFFBQVEsR0FBRztBQUNoQkMsU0FBTyxFQUFFLGlCQUFDQyxTQUFELEVBQW9CO0FBQzVCLFFBQUlBLFNBQVMsQ0FBQ0MsWUFBZCxFQUNDLE9BQU87QUFDTkMsT0FBQyxFQUFFLENBREc7QUFFTkMsV0FBSyxFQUFFO0FBRkQsS0FBUCxDQURELEtBTUMsT0FBTztBQUNORCxPQUFDLEVBQUUsQ0FERztBQUNEO0FBQ0xDLFdBQUssRUFBRSxHQUZELENBRUs7O0FBRkwsS0FBUDtBQUlELEdBWmU7QUFhaEJDLFVBQVEsRUFBRSxrQkFBQ0osU0FBRCxFQUFvQjtBQUM3QixRQUFJQSxTQUFTLENBQUNDLFlBQWQsRUFDQyxPQUFPO0FBQ05FLFdBQUssRUFBRSxDQUFDLENBQUQsRUFBSSxHQUFKLENBREQ7QUFFTkQsT0FBQyxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FGRztBQUdORyxnQkFBVSxFQUFFO0FBQ1hGLGFBQUssRUFBRTtBQUFFRyxl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LG9EQUFELENBQVEsR0FBUjtBQUU1QixpQkFBUyxFQUFDLDBFQUZrQjtBQUczQixlQUFPLEVBQUU7QUFDUndCLGlCQUFPLEVBQUUsQ0FERDtBQUVSQyxpQkFBTyxFQUFHLENBRkY7QUFHUnZCLGVBQUssRUFBRztBQUhBLFNBSGtCO0FBUTNCLGVBQU8sRUFBRTtBQUNSQSxlQUFLLEVBQUcsQ0FEQTtBQUVSdUIsaUJBQU8sRUFBRyxDQUZGO0FBR1JELGlCQUFPLEVBQUUsQ0FIRDtBQUlScEIsb0JBQVUsRUFBRztBQUNaRSxvQkFBUSxFQUFHLENBREM7QUFFWmUsZ0JBQUksRUFBRyxRQUZLO0FBR1pLLGtCQUFNLEVBQUc7QUFIRztBQUpMLFNBUmtCO0FBa0IzQixZQUFJLEVBQUU7QUFDTHhCLGVBQUssRUFBRyxDQURIO0FBRUx1QixpQkFBTyxFQUFHLENBRkw7QUFHTEQsaUJBQU8sRUFBRSxDQUhKO0FBSUxwQixvQkFBVSxFQUFHO0FBQ1pFLG9CQUFRLEVBQUc7QUFEQztBQUpSLFNBbEJxQjtBQUFBLCtCQTJCM0IscUVBQUMsa0RBQUQ7QUFBVyxtQkFBUyxFQUFFUCxTQUF0QjtBQUFpQyxzQkFBWSxFQUFFWTtBQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBM0IyQixTQUN2QlksWUFEdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUQ3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZEQ7QUFBQSxLQUVNQSxZQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQWlEQTs7R0F4RnVCZixhOztLQUFBQSxhIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9zb2d1bWFWeFBob25lLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1vdGlvbiwgdXNlVHJhbnNmb3JtLCB1c2VWaWV3cG9ydFNjcm9sbCwgdXNlTW90aW9uVmFsdWUsIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG4vLyBpbXBvcnQgR2ltc1Bob25lIGZyb20gJy4vZ2ltUGhvbmUnXG5pbXBvcnQgU29ndW1hUGhvbmUgZnJvbSAnLi9zb2d1bWFQaG9uZSdcbmltcG9ydCBNZW51UGhvbmUgZnJvbSAnLi9tZW51UGhvbmUnXG5pbXBvcnQgeyB3cmFwIH0gZnJvbSAncG9wbW90aW9uJ1xuaW1wb3J0IFNvZ3VtYUV5ZSBmcm9tICcuL3N1Z3VtYUV5ZSdcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi90aGVtZSdcbmltcG9ydCB7IGdpbXNQcm9wcyB9IGZyb20gJy4vZ2ltUHJvcHMnIC8vIGdpbXMgcHJvcHNcblxuXG5jb25zdCB2YXJpYW50cyA9IHtcblx0aW5pdGlhbDogKG9uRGlzcGxheTogYW55KSA9PiB7XG5cdFx0aWYgKG9uRGlzcGxheS5kaXNwbGF5U3RhdGUpXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR5OiAwLFxuXHRcdFx0XHRzY2FsZTogMSxcblx0XHRcdH1cblx0XHRlbHNlXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR5OiAwLC8vLTQxMCxcblx0XHRcdFx0c2NhbGU6IDAuNywvLzAuMSxcblx0XHRcdH07XG5cdH0sXG5cdHN0YW5kaW5nOiAob25EaXNwbGF5OiBhbnkpID0+IHtcblx0XHRpZiAob25EaXNwbGF5LmRpc3BsYXlTdGF0ZSlcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHNjYWxlOiBbMSwgMC43XSxcblx0XHRcdFx0eTogWzAsIDBdLFxuXHRcdFx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHRcdFx0c2NhbGU6IHsgZGVsYXk6IDAuMywgZHVyYXRpb246IDEgfSxcblx0XHRcdFx0XHR5OiB7IGRlbGF5OiAwLjMsIGR1cmF0aW9uOiAxIH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdGVsc2Vcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHk6IDAsXG5cdFx0XHRcdC8vIHg6IDAsXG5cdFx0XHRcdHNjYWxlOiAxLFxuXHRcdFx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHRcdFx0Ly8gZHVyYXRpb246IDAuNSxcblx0XHRcdFx0XHRzY2FsZTogeyBkZWxheTogMC4zLCBkdXJhdGlvbjogMSB9LFxuXHRcdFx0XHRcdHk6IHsgZGVsYXk6IDAuMywgZHVyYXRpb246IDEgfVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHR9LFxufVxuXG5cbmNvbnN0IGRhdGEgPSBbXCJhcnRcIiwgXCJhYm91dCBtZVwiLCBcInAxXCJdXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNvZ3VtYVZ4UGhvbmUoeyByZXBvcywgZmV0Y2hlZERhdGEsIHNldE9uRGlzcGxheSwgb25EaXNwbGF5LCBkYXJrVGhlbWUgfSkge1xuXG5cdGNvbnN0IFtbZGlyZWN0aW9uLCBzdGVwc10sIHNldFJvdGF0ZV0gPSB1c2VTdGF0ZShbMCwgMF0pO1xuXHQvLyBjb25zdCBbY2xpY2tPZmYsIHNldENsaWNrT2ZmXSA9IHVzZVN0YXRlKHRydWUpO1xuXHQvLyBjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSB1c2VTdGF0ZShbIDAsIC0xXSk7XG5cblxuXHRjb25zdCBtb3ZlR2ltcyA9IChuZXdEaXJlY3Rpb246IG51bWJlcikgPT4ge1xuXHRcdHNldFJvdGF0ZShbbmV3RGlyZWN0aW9uLCBzdGVwcyArIG5ld0RpcmVjdGlvbl0pO1xuXHR9XG5cdC8vIGNvbnNvbGUubG9nKGRhdGFMb2FkaW5nID8gXCJmZXRjaGVkIERBVEEgOiBcIjogZmV0Y2hlZERhdGEgKVxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdC8vIGlmICggb25EaXNwbGF5LnR5cGUgPiAwIClcblx0XHQvLyBcdHNldE9uRGlzcGxheSh0cnVlLCBvbkRpc3BsYXkuaXRlbUlkLCAtMSlcblx0XHQvLyBjb25zdCBpbml0UHJvamVjdHMgPSBbXVxuXHRcdC8vIHJlcG9zLm1hcCgocHJvamVjdCkgPT4ge1xuXHRcdC8vIFx0aW5pdFByb2plY3RzLnB1c2gocHJvamVjdC5uYW1lKTtcblx0XHQvLyB9KVxuXHRcdC8vIC8vIGNvbnNvbGUubG9nKFwiIHByb2plY3RzIGQgWkFBQUFBQUFBQUFBQUFBQUFBQUI6IFwiLCBpbml0UHJvamVjdHMpXG5cdFx0Ly8gc2V0UHJvamVjdHMoaW5pdFByb2plY3RzKVxuXHR9LCBbXSlcblxuXHRjb25zdCBvblNvZ3VtYUNsaWNrID0gKCkgPT4ge1xuXHRcdHN3aXRjaCAob25EaXNwbGF5LnR5cGUpIHtcblx0XHRcdGNhc2UgLTE6IC8vIG5vbmUgc3RhdGVcblx0XHRcdFx0c2V0T25EaXNwbGF5KGZhbHNlLCBvbkRpc3BsYXkuaXRlbUlkLCAwKVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMDogLy8gbWVudSBzdGF0ZVxuXHRcdFx0XHRzZXRPbkRpc3BsYXkodHJ1ZSwgb25EaXNwbGF5Lml0ZW1JZCwgLTEpXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAxOiAvLyBtZW51IHN0YXRlXG5cdFx0XHRcdHNldE9uRGlzcGxheSh0cnVlLCBvbkRpc3BsYXkuaXRlbUlkLCAtMSlcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDI6IC8vIG1lbnUgc3RhdGVcblx0XHRcdFx0c2V0T25EaXNwbGF5KGZhbHNlLCBvbkRpc3BsYXkuaXRlbUlkLCAwKVxuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblx0Y29uc3Qgb25EaXNwbGF5S2V5ID0gb25EaXNwbGF5LmRpc3BsYXlTdGF0ZSA/IDEgOiAwO1xuXHRyZXR1cm4gKFxuXHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRjbGFzc05hbWU9XCJtZDpoaWRkZW4gcmVsYXRpdmUgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBoLWF1dG8gdy1mdWxsXCJcblx0XHRcdGtleT17b25EaXNwbGF5S2V5fVxuXHRcdFx0aW5pdGlhbD1cImluaXRpYWxcIlxuXHRcdFx0YW5pbWF0ZT1cInN0YW5kaW5nXCJcblx0XHRcdGN1c3RvbT17b25EaXNwbGF5fVxuXHRcdFx0dmFyaWFudHM9e3ZhcmlhbnRzfVxuXHRcdD5cblx0XHRcdDxTb2d1bWFQaG9uZVxuXHRcdFx0XHRvbkRpc3BsYXk9e29uRGlzcGxheX1cblx0XHRcdFx0ZGFya1RoZW1lPXtkYXJrVGhlbWV9XG5cdFx0XHRcdG9uU29ndW1hQ2xpY2s9e29uU29ndW1hQ2xpY2t9XG5cdFx0XHRcdHNldE9uRGlzcGxheT17c2V0T25EaXNwbGF5fVxuXHRcdFx0Lz5cblx0XHRcdDxBbmltYXRlUHJlc2VuY2U+XG5cdFx0XHRcdHshb25EaXNwbGF5LmRpc3BsYXlTdGF0ZSAmJiA8bW90aW9uLmRpdlxuXHRcdFx0XHRrZXk9e29uRGlzcGxheUtleX1cblx0XHRcdFx0Y2xhc3NOYW1lPVwibWQ6aGlkZGVuIGFic29sdXRlIHRvcC1mdWxsIGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LWZ1bGwgXCJcblx0XHRcdFx0XHRpbml0aWFsPXt7XG5cdFx0XHRcdFx0XHRvcGFjaXR5OiAwLFxuXHRcdFx0XHRcdFx0b3JpZ2luWSA6IDAsXG5cdFx0XHRcdFx0XHRzY2FsZSA6IDAsXG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRhbmltYXRlPXt7XG5cdFx0XHRcdFx0XHRzY2FsZSA6IDEsXG5cdFx0XHRcdFx0XHRvcmlnaW5ZIDogMCxcblx0XHRcdFx0XHRcdG9wYWNpdHk6IDEsXG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uIDoge1xuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbiA6IDEsXG5cdFx0XHRcdFx0XHRcdHR5cGUgOiAnc3ByaW5nJyxcblx0XHRcdFx0XHRcdFx0Ym91bmNlIDogMC41XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRleGl0PXt7XG5cdFx0XHRcdFx0XHRzY2FsZSA6IDAsXG5cdFx0XHRcdFx0XHRvcmlnaW5ZIDogMCxcblx0XHRcdFx0XHRcdG9wYWNpdHk6IDAsXG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uIDoge1xuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbiA6IDFcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PE1lbnVQaG9uZSBvbkRpc3BsYXk9e29uRGlzcGxheX0gc2V0T25EaXNwbGF5PXtzZXRPbkRpc3BsYXl9IC8+XG5cdFx0XHRcdDwvbW90aW9uLmRpdj59XG5cblx0XHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHRcdDwvbW90aW9uLmRpdj5cblx0KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/sogumaVxPhone.tsx\n");

/***/ })

})