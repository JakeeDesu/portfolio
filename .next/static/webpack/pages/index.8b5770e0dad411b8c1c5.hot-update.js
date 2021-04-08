webpackHotUpdate_N_E("pages/index",{

/***/ "./components/sogumaVxPhone.tsx":
/*!**************************************!*\
  !*** ./components/sogumaVxPhone.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SogumaVxPhone; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _sogumaPhone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sogumaPhone */ \"./components/sogumaPhone.tsx\");\n/* harmony import */ var _menuPhone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menuPhone */ \"./components/menuPhone.js\");\n\n\n\nvar _jsxFileName = \"/home/hamza/Desktop/portfolio/components/sogumaVxPhone.tsx\",\n    _s = $RefreshSig$();\n\n\n // import GimsPhone from './gimPhone'\n\n\n\n// gims props\nvar variants = {\n  initial: function initial(onDisplay) {\n    if (onDisplay.displayState) return {\n      y: 0,\n      scale: 1\n    };else return {\n      y: 0,\n      //-410,\n      scale: 0.7 //0.1,\n\n    };\n  },\n  standing: function standing(onDisplay) {\n    if (onDisplay.displayState) return {\n      scale: [1, 0.7],\n      y: [0, 0],\n      transition: {\n        scale: {\n          delay: 0.3,\n          duration: 1\n        },\n        y: {\n          delay: 0.3,\n          duration: 1\n        }\n      }\n    };else return {\n      y: 0,\n      // x: 0,\n      scale: 1,\n      transition: {\n        // duration: 0.5,\n        scale: {\n          delay: 0.3,\n          duration: 1\n        },\n        y: {\n          delay: 0.3,\n          duration: 1\n        }\n      }\n    };\n  }\n};\nvar data = [\"art\", \"about me\", \"p1\"];\nfunction SogumaVxPhone(_ref) {\n  _s();\n\n  var repos = _ref.repos,\n      fetchedData = _ref.fetchedData,\n      setOnDisplay = _ref.setOnDisplay,\n      onDisplay = _ref.onDisplay,\n      darkTheme = _ref.darkTheme;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([0, 0]),\n      _useState$ = Object(_home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState[0], 2),\n      direction = _useState$[0],\n      steps = _useState$[1],\n      setRotate = _useState[1]; // const [clickOff, setClickOff] = useState(true);\n  // const [type, setType] = useState([ 0, -1]);\n\n\n  var moveGims = function moveGims(newDirection) {\n    setRotate([newDirection, steps + newDirection]);\n  }; // console.log(dataLoading ? \"fetched DATA : \": fetchedData )\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {// if ( onDisplay.type > 0 )\n    // \tsetOnDisplay(true, onDisplay.itemId, -1)\n    // const initProjects = []\n    // repos.map((project) => {\n    // \tinitProjects.push(project.name);\n    // })\n    // // console.log(\" projects d ZAAAAAAAAAAAAAAAAAAB: \", initProjects)\n    // setProjects(initProjects)\n  }, []);\n\n  var onSogumaClick = function onSogumaClick() {\n    switch (onDisplay.type) {\n      case -1:\n        // none state\n        setOnDisplay(false, onDisplay.itemId, 0);\n        break;\n\n      case 0:\n        // menu state\n        setOnDisplay(true, onDisplay.itemId, -1);\n        break;\n\n      case 1:\n        // menu state\n        setOnDisplay(true, onDisplay.itemId, -1);\n        break;\n\n      case 2:\n        // menu state\n        setOnDisplay(false, onDisplay.itemId, 0);\n        break;\n    }\n  };\n\n  var onDisplayKey = onDisplay.displayState ? 1 : 0;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n    className: \"md:hidden relative flex flex-col justify-start items-center h-auto w-full\",\n    initial: \"initial\",\n    animate: \"standing\",\n    custom: onDisplay,\n    variants: variants,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_sogumaPhone__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      onDisplay: onDisplay,\n      darkTheme: darkTheme,\n      onSogumaClick: onSogumaClick,\n      setOnDisplay: setOnDisplay\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"AnimatePresence\"], {\n      children: !onDisplay.displayState && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n        className: \"md:hidden absolute top-full flex-col justify-center items-center w-full \",\n        initial: {\n          opacity: 0,\n          originX: 0,\n          scale: 0\n        },\n        animate: {\n          scale: 1,\n          opacity: 1,\n          transition: {\n            duration: 1\n          }\n        },\n        exit: {\n          scale: 0,\n          opacity: 0,\n          transition: {\n            duration: 1\n          }\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_menuPhone__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n          onDisplay: onDisplay,\n          setOnDisplay: setOnDisplay\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 130,\n          columnNumber: 6\n        }, this)\n      }, onDisplayKey, false, {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 33\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 4\n    }, this)]\n  }, onDisplayKey, true, {\n    fileName: _jsxFileName,\n    lineNumber: 92,\n    columnNumber: 3\n  }, this);\n}\n\n_s(SogumaVxPhone, \"BSBNN5l9LIxqrCzE6GDni0II8nw=\");\n\n_c = SogumaVxPhone;\n\nvar _c;\n\n$RefreshReg$(_c, \"SogumaVxPhone\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zb2d1bWFWeFBob25lLnRzeD80ZGZjIl0sIm5hbWVzIjpbInZhcmlhbnRzIiwiaW5pdGlhbCIsIm9uRGlzcGxheSIsImRpc3BsYXlTdGF0ZSIsInkiLCJzY2FsZSIsInN0YW5kaW5nIiwidHJhbnNpdGlvbiIsImRlbGF5IiwiZHVyYXRpb24iLCJkYXRhIiwiU29ndW1hVnhQaG9uZSIsInJlcG9zIiwiZmV0Y2hlZERhdGEiLCJzZXRPbkRpc3BsYXkiLCJkYXJrVGhlbWUiLCJ1c2VTdGF0ZSIsImRpcmVjdGlvbiIsInN0ZXBzIiwic2V0Um90YXRlIiwibW92ZUdpbXMiLCJuZXdEaXJlY3Rpb24iLCJ1c2VFZmZlY3QiLCJvblNvZ3VtYUNsaWNrIiwidHlwZSIsIml0ZW1JZCIsIm9uRGlzcGxheUtleSIsIm9wYWNpdHkiLCJvcmlnaW5YIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTtBQUNBO0FBSXVDO0FBR3ZDLElBQU1BLFFBQVEsR0FBRztBQUNoQkMsU0FBTyxFQUFFLGlCQUFDQyxTQUFELEVBQW9CO0FBQzVCLFFBQUlBLFNBQVMsQ0FBQ0MsWUFBZCxFQUNDLE9BQU87QUFDTkMsT0FBQyxFQUFFLENBREc7QUFFTkMsV0FBSyxFQUFFO0FBRkQsS0FBUCxDQURELEtBTUMsT0FBTztBQUNORCxPQUFDLEVBQUUsQ0FERztBQUNEO0FBQ0xDLFdBQUssRUFBRSxHQUZELENBRUs7O0FBRkwsS0FBUDtBQUlELEdBWmU7QUFhaEJDLFVBQVEsRUFBRSxrQkFBQ0osU0FBRCxFQUFvQjtBQUM3QixRQUFJQSxTQUFTLENBQUNDLFlBQWQsRUFDQyxPQUFPO0FBQ05FLFdBQUssRUFBRSxDQUFDLENBQUQsRUFBSSxHQUFKLENBREQ7QUFFTkQsT0FBQyxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FGRztBQUdORyxnQkFBVSxFQUFFO0FBQ1hGLGFBQUssRUFBRTtBQUFFRyxlQUFLLEVBQUUs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QVEsR0FBUjtBQUU1QixpQkFBUyxFQUFDLDBFQUZrQjtBQUczQixlQUFPLEVBQUU7QUFDUndCLGlCQUFPLEVBQUUsQ0FERDtBQUVSQyxpQkFBTyxFQUFHLENBRkY7QUFHUnZCLGVBQUssRUFBRztBQUhBLFNBSGtCO0FBUTNCLGVBQU8sRUFBRTtBQUNSQSxlQUFLLEVBQUcsQ0FEQTtBQUVSc0IsaUJBQU8sRUFBRSxDQUZEO0FBR1JwQixvQkFBVSxFQUFHO0FBQ1pFLG9CQUFRLEVBQUc7QUFEQztBQUhMLFNBUmtCO0FBZTNCLFlBQUksRUFBRTtBQUNMSixlQUFLLEVBQUcsQ0FESDtBQUVMc0IsaUJBQU8sRUFBRSxDQUZKO0FBR0xwQixvQkFBVSxFQUFHO0FBQ1pFLG9CQUFRLEVBQUc7QUFEQztBQUhSLFNBZnFCO0FBQUEsK0JBdUIzQixxRUFBQyxrREFBRDtBQUFXLG1CQUFTLEVBQUVQLFNBQXRCO0FBQWlDLHNCQUFZLEVBQUVZO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF2QjJCLFNBQ3ZCWSxZQUR1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRDdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkRDtBQUFBLEtBRU1BLFlBRk47QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBNkNBOztHQXBGdUJmLGE7O0tBQUFBLGEiLCJmaWxlIjoiLi9jb21wb25lbnRzL3NvZ3VtYVZ4UGhvbmUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbW90aW9uLCB1c2VUcmFuc2Zvcm0sIHVzZVZpZXdwb3J0U2Nyb2xsLCB1c2VNb3Rpb25WYWx1ZSwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbi8vIGltcG9ydCBHaW1zUGhvbmUgZnJvbSAnLi9naW1QaG9uZSdcbmltcG9ydCBTb2d1bWFQaG9uZSBmcm9tICcuL3NvZ3VtYVBob25lJ1xuaW1wb3J0IE1lbnVQaG9uZSBmcm9tICcuL21lbnVQaG9uZSdcbmltcG9ydCB7IHdyYXAgfSBmcm9tICdwb3Btb3Rpb24nXG5pbXBvcnQgU29ndW1hRXllIGZyb20gJy4vc3VndW1hRXllJ1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuL3RoZW1lJ1xuaW1wb3J0IHsgZ2ltc1Byb3BzIH0gZnJvbSAnLi9naW1Qcm9wcycgLy8gZ2ltcyBwcm9wc1xuXG5cbmNvbnN0IHZhcmlhbnRzID0ge1xuXHRpbml0aWFsOiAob25EaXNwbGF5OiBhbnkpID0+IHtcblx0XHRpZiAob25EaXNwbGF5LmRpc3BsYXlTdGF0ZSlcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHk6IDAsXG5cdFx0XHRcdHNjYWxlOiAxLFxuXHRcdFx0fVxuXHRcdGVsc2Vcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHk6IDAsLy8tNDEwLFxuXHRcdFx0XHRzY2FsZTogMC43LC8vMC4xLFxuXHRcdFx0fTtcblx0fSxcblx0c3RhbmRpbmc6IChvbkRpc3BsYXk6IGFueSkgPT4ge1xuXHRcdGlmIChvbkRpc3BsYXkuZGlzcGxheVN0YXRlKVxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0c2NhbGU6IFsxLCAwLjddLFxuXHRcdFx0XHR5OiBbMCwgMF0sXG5cdFx0XHRcdHRyYW5zaXRpb246IHtcblx0XHRcdFx0XHRzY2FsZTogeyBkZWxheTogMC4zLCBkdXJhdGlvbjogMSB9LFxuXHRcdFx0XHRcdHk6IHsgZGVsYXk6IDAuMywgZHVyYXRpb246IDEgfVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0eTogMCxcblx0XHRcdFx0Ly8geDogMCxcblx0XHRcdFx0c2NhbGU6IDEsXG5cdFx0XHRcdHRyYW5zaXRpb246IHtcblx0XHRcdFx0XHQvLyBkdXJhdGlvbjogMC41LFxuXHRcdFx0XHRcdHNjYWxlOiB7IGRlbGF5OiAwLjMsIGR1cmF0aW9uOiAxIH0sXG5cdFx0XHRcdFx0eTogeyBkZWxheTogMC4zLCBkdXJhdGlvbjogMSB9XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdH0sXG59XG5cblxuY29uc3QgZGF0YSA9IFtcImFydFwiLCBcImFib3V0IG1lXCIsIFwicDFcIl1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU29ndW1hVnhQaG9uZSh7IHJlcG9zLCBmZXRjaGVkRGF0YSwgc2V0T25EaXNwbGF5LCBvbkRpc3BsYXksIGRhcmtUaGVtZSB9KSB7XG5cblx0Y29uc3QgW1tkaXJlY3Rpb24sIHN0ZXBzXSwgc2V0Um90YXRlXSA9IHVzZVN0YXRlKFswLCAwXSk7XG5cdC8vIGNvbnN0IFtjbGlja09mZiwgc2V0Q2xpY2tPZmZdID0gdXNlU3RhdGUodHJ1ZSk7XG5cdC8vIGNvbnN0IFt0eXBlLCBzZXRUeXBlXSA9IHVzZVN0YXRlKFsgMCwgLTFdKTtcblxuXG5cdGNvbnN0IG1vdmVHaW1zID0gKG5ld0RpcmVjdGlvbjogbnVtYmVyKSA9PiB7XG5cdFx0c2V0Um90YXRlKFtuZXdEaXJlY3Rpb24sIHN0ZXBzICsgbmV3RGlyZWN0aW9uXSk7XG5cdH1cblx0Ly8gY29uc29sZS5sb2coZGF0YUxvYWRpbmcgPyBcImZldGNoZWQgREFUQSA6IFwiOiBmZXRjaGVkRGF0YSApXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Ly8gaWYgKCBvbkRpc3BsYXkudHlwZSA+IDAgKVxuXHRcdC8vIFx0c2V0T25EaXNwbGF5KHRydWUsIG9uRGlzcGxheS5pdGVtSWQsIC0xKVxuXHRcdC8vIGNvbnN0IGluaXRQcm9qZWN0cyA9IFtdXG5cdFx0Ly8gcmVwb3MubWFwKChwcm9qZWN0KSA9PiB7XG5cdFx0Ly8gXHRpbml0UHJvamVjdHMucHVzaChwcm9qZWN0Lm5hbWUpO1xuXHRcdC8vIH0pXG5cdFx0Ly8gLy8gY29uc29sZS5sb2coXCIgcHJvamVjdHMgZCBaQUFBQUFBQUFBQUFBQUFBQUFBQjogXCIsIGluaXRQcm9qZWN0cylcblx0XHQvLyBzZXRQcm9qZWN0cyhpbml0UHJvamVjdHMpXG5cdH0sIFtdKVxuXG5cdGNvbnN0IG9uU29ndW1hQ2xpY2sgPSAoKSA9PiB7XG5cdFx0c3dpdGNoIChvbkRpc3BsYXkudHlwZSkge1xuXHRcdFx0Y2FzZSAtMTogLy8gbm9uZSBzdGF0ZVxuXHRcdFx0XHRzZXRPbkRpc3BsYXkoZmFsc2UsIG9uRGlzcGxheS5pdGVtSWQsIDApXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAwOiAvLyBtZW51IHN0YXRlXG5cdFx0XHRcdHNldE9uRGlzcGxheSh0cnVlLCBvbkRpc3BsYXkuaXRlbUlkLCAtMSlcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDE6IC8vIG1lbnUgc3RhdGVcblx0XHRcdFx0c2V0T25EaXNwbGF5KHRydWUsIG9uRGlzcGxheS5pdGVtSWQsIC0xKVxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMjogLy8gbWVudSBzdGF0ZVxuXHRcdFx0XHRzZXRPbkRpc3BsYXkoZmFsc2UsIG9uRGlzcGxheS5pdGVtSWQsIDApXG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXHRjb25zdCBvbkRpc3BsYXlLZXkgPSBvbkRpc3BsYXkuZGlzcGxheVN0YXRlID8gMSA6IDA7XG5cdHJldHVybiAoXG5cdFx0PG1vdGlvbi5kaXZcblx0XHRcdGNsYXNzTmFtZT1cIm1kOmhpZGRlbiByZWxhdGl2ZSBmbGV4IGZsZXgtY29sIGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIGgtYXV0byB3LWZ1bGxcIlxuXHRcdFx0a2V5PXtvbkRpc3BsYXlLZXl9XG5cdFx0XHRpbml0aWFsPVwiaW5pdGlhbFwiXG5cdFx0XHRhbmltYXRlPVwic3RhbmRpbmdcIlxuXHRcdFx0Y3VzdG9tPXtvbkRpc3BsYXl9XG5cdFx0XHR2YXJpYW50cz17dmFyaWFudHN9XG5cdFx0PlxuXHRcdFx0PFNvZ3VtYVBob25lXG5cdFx0XHRcdG9uRGlzcGxheT17b25EaXNwbGF5fVxuXHRcdFx0XHRkYXJrVGhlbWU9e2RhcmtUaGVtZX1cblx0XHRcdFx0b25Tb2d1bWFDbGljaz17b25Tb2d1bWFDbGlja31cblx0XHRcdFx0c2V0T25EaXNwbGF5PXtzZXRPbkRpc3BsYXl9XG5cdFx0XHQvPlxuXHRcdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdFx0eyFvbkRpc3BsYXkuZGlzcGxheVN0YXRlICYmIDxtb3Rpb24uZGl2XG5cdFx0XHRcdGtleT17b25EaXNwbGF5S2V5fVxuXHRcdFx0XHRjbGFzc05hbWU9XCJtZDpoaWRkZW4gYWJzb2x1dGUgdG9wLWZ1bGwgZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctZnVsbCBcIlxuXHRcdFx0XHRcdGluaXRpYWw9e3tcblx0XHRcdFx0XHRcdG9wYWNpdHk6IDAsXG5cdFx0XHRcdFx0XHRvcmlnaW5YIDogMCxcblx0XHRcdFx0XHRcdHNjYWxlIDogMFxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0YW5pbWF0ZT17e1xuXHRcdFx0XHRcdFx0c2NhbGUgOiAxLFxuXHRcdFx0XHRcdFx0b3BhY2l0eTogMSxcblx0XHRcdFx0XHRcdHRyYW5zaXRpb24gOiB7XG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uIDogMVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0ZXhpdD17e1xuXHRcdFx0XHRcdFx0c2NhbGUgOiAwLFxuXHRcdFx0XHRcdFx0b3BhY2l0eTogMCxcblx0XHRcdFx0XHRcdHRyYW5zaXRpb24gOiB7XG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uIDogMVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8TWVudVBob25lIG9uRGlzcGxheT17b25EaXNwbGF5fSBzZXRPbkRpc3BsYXk9e3NldE9uRGlzcGxheX0gLz5cblx0XHRcdFx0PC9tb3Rpb24uZGl2Pn1cblxuXHRcdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdFx0PC9tb3Rpb24uZGl2PlxuXHQpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/sogumaVxPhone.tsx\n");

/***/ })

})