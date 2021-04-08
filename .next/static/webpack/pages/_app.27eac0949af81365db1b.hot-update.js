webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/sogumaVxPhone.tsx":
/*!**************************************!*\
  !*** ./components/sogumaVxPhone.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SogumaVxPhone; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _sogumaPhone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sogumaPhone */ \"./components/sogumaPhone.tsx\");\n/* harmony import */ var _menuPhone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menuPhone */ \"./components/menuPhone.js\");\n\n\n\nvar _jsxFileName = \"/home/hamza/Desktop/portfolio/components/sogumaVxPhone.tsx\",\n    _s = $RefreshSig$();\n\n\n // import GimsPhone from './gimPhone'\n\n\n\n// gims props\nvar variants = {\n  initial: function initial(onDisplay) {\n    if (onDisplay.displayState) return {\n      y: 0,\n      scale: 1\n    };else return {\n      y: 0,\n      //-410,\n      scale: 0.7 //0.1,\n\n    };\n  },\n  standing: function standing(onDisplay) {\n    if (onDisplay.displayState) return {\n      scale: [1, 0.7],\n      y: [0, 0],\n      transition: {\n        scale: {\n          delay: 0.3,\n          duration: 1\n        },\n        y: {\n          delay: 0.3,\n          duration: 1\n        }\n      }\n    };else return {\n      y: 0,\n      // x: 0,\n      scale: 1,\n      transition: {\n        // duration: 0.5,\n        scale: {\n          delay: 0.3,\n          duration: 1\n        },\n        y: {\n          delay: 0.3,\n          duration: 1\n        }\n      }\n    };\n  }\n};\nvar data = [\"art\", \"about me\", \"p1\"];\nfunction SogumaVxPhone(_ref) {\n  _s();\n\n  var repos = _ref.repos,\n      fetchedData = _ref.fetchedData,\n      setOnDisplay = _ref.setOnDisplay,\n      onDisplay = _ref.onDisplay,\n      darkTheme = _ref.darkTheme;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([0, 0]),\n      _useState$ = Object(_home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState[0], 2),\n      direction = _useState$[0],\n      steps = _useState$[1],\n      setRotate = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true),\n      clickOff = _useState2[0],\n      setClickOff = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      projects = _useState3[0],\n      setProjects = _useState3[1];\n\n  var moveGims = function moveGims(newDirection) {\n    setRotate([newDirection, steps + newDirection]);\n  }; // console.log(dataLoading ? \"fetched DATA : \": fetchedData )\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var initProjects = [];\n    repos.map(function (project) {\n      initProjects.push(project.name);\n    }); // console.log(\" projects d ZAAAAAAAAAAAAAAAAAAB: \", initProjects)\n\n    setProjects(initProjects);\n  }, [repos]);\n\n  var onSogumaClick = function onSogumaClick() {\n    switch (onDisplay.type) {\n      case -1:\n        // none state\n        setOnDisplay(false, onDisplay.itemId, 0);\n        break;\n\n      case 0:\n        // menu state\n        setOnDisplay(false, onDisplay.itemId, -1);\n        break;\n\n      case 1:\n        // about state\n        setOnDisplay(true, onDisplay.itemId, 0);\n        break;\n\n      case 2:\n        //  case 1) gims on display | case 2) a project on display \n        if (!onDisplay.displayOff) onDisplay.displayState ? setOnDisplay(false, onDisplay.itemId, 2) : setOnDisplay(true, onDisplay.itemId, 2); // else\n        // setOnDisplay(false, onDisplay.itemId, 2)\n\n        break;\n\n      case 3:\n        break;\n    }\n  };\n\n  var onDisplayKey = onDisplay.displayState ? 1 : 0;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n    className: \"md:hidden relative flex flex-col justify-start items-center h-auto w-full\",\n    initial: \"initial\",\n    animate: \"standing\",\n    custom: onDisplay,\n    variants: variants,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_sogumaPhone__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      onDisplay: onDisplay,\n      darkTheme: darkTheme,\n      onSogumaClick: onSogumaClick,\n      setOnDisplay: setOnDisplay\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 4\n    }, this), onDisplay.type !== 2 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_menuPhone__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      onDisplay: onDisplay,\n      setOnDisplay: setOnDisplay\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 31\n    }, this)]\n  }, onDisplayKey, true, {\n    fileName: _jsxFileName,\n    lineNumber: 94,\n    columnNumber: 3\n  }, this);\n}\n\n_s(SogumaVxPhone, \"drdXBGiJG3DTiISEBYABsAztkKM=\");\n\n_c = SogumaVxPhone;\n\nvar _c;\n\n$RefreshReg$(_c, \"SogumaVxPhone\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zb2d1bWFWeFBob25lLnRzeD80ZGZjIl0sIm5hbWVzIjpbInZhcmlhbnRzIiwiaW5pdGlhbCIsIm9uRGlzcGxheSIsImRpc3BsYXlTdGF0ZSIsInkiLCJzY2FsZSIsInN0YW5kaW5nIiwidHJhbnNpdGlvbiIsImRlbGF5IiwiZHVyYXRpb24iLCJkYXRhIiwiU29ndW1hVnhQaG9uZSIsInJlcG9zIiwiZmV0Y2hlZERhdGEiLCJzZXRPbkRpc3BsYXkiLCJkYXJrVGhlbWUiLCJ1c2VTdGF0ZSIsImRpcmVjdGlvbiIsInN0ZXBzIiwic2V0Um90YXRlIiwiY2xpY2tPZmYiLCJzZXRDbGlja09mZiIsInByb2plY3RzIiwic2V0UHJvamVjdHMiLCJtb3ZlR2ltcyIsIm5ld0RpcmVjdGlvbiIsInVzZUVmZmVjdCIsImluaXRQcm9qZWN0cyIsIm1hcCIsInByb2plY3QiLCJwdXNoIiwibmFtZSIsIm9uU29ndW1hQ2xpY2siLCJ0eXBlIiwiaXRlbUlkIiwiZGlzcGxheU9mZiIsIm9uRGlzcGxheUtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ0E7QUFDQTtBQUl1QztBQUd2QyxJQUFNQSxRQUFRLEdBQUc7QUFDaEJDLFNBQU8sRUFBRSxpQkFBQ0MsU0FBRCxFQUFvQjtBQUM1QixRQUFJQSxTQUFTLENBQUNDLFlBQWQsRUFDQyxPQUFPO0FBQ05DLE9BQUMsRUFBRSxDQURHO0FBRU5DLFdBQUssRUFBRTtBQUZELEtBQVAsQ0FERCxLQU1DLE9BQU87QUFDTkQsT0FBQyxFQUFFLENBREc7QUFDRDtBQUNMQyxXQUFLLEVBQUUsR0FGRCxDQUVLOztBQUZMLEtBQVA7QUFJRCxHQVplO0FBYWhCQyxVQUFRLEVBQUUsa0JBQUNKLFNBQUQsRUFBb0I7QUFDN0IsUUFBSUEsU0FBUyxDQUFDQyxZQUFkLEVBQ0MsT0FBTztBQUNORSxXQUFLLEVBQUUsQ0FBQyxDQUFELEVBQUksR0FBSixDQUREO0FB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LENBQUMsSUFBRCxFQUFPWixTQUFTLENBQUNnQyxNQUFqQixFQUF5QixDQUF6QixDQUFoRixDQUZGLENBR0M7QUFDQzs7QUFDRDs7QUFDRCxXQUFNLENBQU47QUFDQztBQWpCRjtBQW1CRCxHQXBCRDs7QUFxQkEsTUFBTUUsWUFBWSxHQUFHbEMsU0FBUyxDQUFDQyxZQUFWLEdBQXlCLENBQXpCLEdBQTZCLENBQWxEO0FBQ0Esc0JBQ0MscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0MsYUFBUyxFQUFDLDJFQURYO0FBR0MsV0FBTyxFQUFDLFNBSFQ7QUFJQyxXQUFPLEVBQUMsVUFKVDtBQUtDLFVBQU0sRUFBRUQsU0FMVDtBQU1DLFlBQVEsRUFBRUYsUUFOWDtBQUFBLDRCQVFDLHFFQUFDLG9EQUFEO0FBQ0MsZUFBUyxFQUFFRSxTQURaO0FBRUMsZUFBUyxFQUFFYSxTQUZaO0FBR0MsbUJBQWEsRUFBRWlCLGFBSGhCO0FBSUMsa0JBQVksRUFBRWxCO0FBSmY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJELEVBY0laLFNBQVMsQ0FBQytCLElBQVYsS0FBbUIsQ0FBbkIsaUJBQXdCLHFFQUFDLGtEQUFEO0FBQVcsZUFBUyxFQUFFL0IsU0FBdEI7QUFBa0Msa0JBQVksRUFBRVk7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWQ1QjtBQUFBLEtBRU1zQixZQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQWtCQTs7R0EzRHVCekIsYTs7S0FBQUEsYSIsImZpbGUiOiIuL2NvbXBvbmVudHMvc29ndW1hVnhQaG9uZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtb3Rpb24sIHVzZVRyYW5zZm9ybSwgdXNlVmlld3BvcnRTY3JvbGwsIHVzZU1vdGlvblZhbHVlLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuLy8gaW1wb3J0IEdpbXNQaG9uZSBmcm9tICcuL2dpbVBob25lJ1xuaW1wb3J0IFNvZ3VtYVBob25lIGZyb20gJy4vc29ndW1hUGhvbmUnXG5pbXBvcnQgTWVudVBob25lIGZyb20gJy4vbWVudVBob25lJ1xuaW1wb3J0IHsgd3JhcCB9IGZyb20gJ3BvcG1vdGlvbidcbmltcG9ydCBTb2d1bWFFeWUgZnJvbSAnLi9zdWd1bWFFeWUnXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJy4vdGhlbWUnXG5pbXBvcnQgeyBnaW1zUHJvcHMgfSBmcm9tICcuL2dpbVByb3BzJyAvLyBnaW1zIHByb3BzXG5cblxuY29uc3QgdmFyaWFudHMgPSB7XG5cdGluaXRpYWw6IChvbkRpc3BsYXk6IGFueSkgPT4ge1xuXHRcdGlmIChvbkRpc3BsYXkuZGlzcGxheVN0YXRlKVxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0eTogMCxcblx0XHRcdFx0c2NhbGU6IDEsXG5cdFx0XHR9XG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0eTogMCwvLy00MTAsXG5cdFx0XHRcdHNjYWxlOiAwLjcsLy8wLjEsXG5cdFx0XHR9O1xuXHR9LFxuXHRzdGFuZGluZzogKG9uRGlzcGxheTogYW55KSA9PiB7XG5cdFx0aWYgKG9uRGlzcGxheS5kaXNwbGF5U3RhdGUpXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRzY2FsZTogWzEsIDAuN10sXG5cdFx0XHRcdHk6IFswLCAwXSxcblx0XHRcdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0XHRcdHNjYWxlOiB7IGRlbGF5OiAwLjMsIGR1cmF0aW9uOiAxIH0sXG5cdFx0XHRcdFx0eTogeyBkZWxheTogMC4zLCBkdXJhdGlvbjogMSB9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRlbHNlXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR5OiAwLFxuXHRcdFx0XHQvLyB4OiAwLFxuXHRcdFx0XHRzY2FsZTogMSxcblx0XHRcdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0XHRcdC8vIGR1cmF0aW9uOiAwLjUsXG5cdFx0XHRcdFx0c2NhbGU6IHsgZGVsYXk6IDAuMywgZHVyYXRpb246IDEgfSxcblx0XHRcdFx0XHR5OiB7IGRlbGF5OiAwLjMsIGR1cmF0aW9uOiAxIH1cblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0fSxcbn1cblxuXG5jb25zdCBkYXRhID0gW1wiYXJ0XCIsIFwiYWJvdXQgbWVcIiwgXCJwMVwiXVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTb2d1bWFWeFBob25lKHsgcmVwb3MgLGZldGNoZWREYXRhICwgc2V0T25EaXNwbGF5LCBvbkRpc3BsYXksIGRhcmtUaGVtZSB9KSB7XG5cblx0Y29uc3QgW1tkaXJlY3Rpb24sIHN0ZXBzXSwgc2V0Um90YXRlXSA9IHVzZVN0YXRlKFswLCAwXSk7XG5cdGNvbnN0IFtjbGlja09mZiwgc2V0Q2xpY2tPZmZdID0gdXNlU3RhdGUodHJ1ZSk7XG5cdGNvbnN0IFtwcm9qZWN0cywgc2V0UHJvamVjdHNdID0gdXNlU3RhdGUoW10pO1xuXG5cblx0Y29uc3QgbW92ZUdpbXMgPSAobmV3RGlyZWN0aW9uOiBudW1iZXIpID0+IHtcblx0XHRzZXRSb3RhdGUoW25ld0RpcmVjdGlvbiwgc3RlcHMgKyBuZXdEaXJlY3Rpb25dKTtcblx0fVxuXHQvLyBjb25zb2xlLmxvZyhkYXRhTG9hZGluZyA/IFwiZmV0Y2hlZCBEQVRBIDogXCI6IGZldGNoZWREYXRhIClcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRjb25zdCBpbml0UHJvamVjdHMgPSBbXVxuXHRcdHJlcG9zLm1hcCgocHJvamVjdCkgPT4ge1xuXHRcdFx0aW5pdFByb2plY3RzLnB1c2gocHJvamVjdC5uYW1lKTtcblx0XHR9KVxuXHRcdC8vIGNvbnNvbGUubG9nKFwiIHByb2plY3RzIGQgWkFBQUFBQUFBQUFBQUFBQUFBQUI6IFwiLCBpbml0UHJvamVjdHMpXG5cdFx0c2V0UHJvamVjdHMoaW5pdFByb2plY3RzKVxuXHR9LCBbcmVwb3NdKVxuXHRjb25zdCBvblNvZ3VtYUNsaWNrID0gKCkgPT4ge1xuXHRcdFx0c3dpdGNoIChvbkRpc3BsYXkudHlwZSkge1xuXHRcdFx0XHRjYXNlICAtMSA6IC8vIG5vbmUgc3RhdGVcblx0XHRcdFx0XHRcdHNldE9uRGlzcGxheShmYWxzZSwgb25EaXNwbGF5Lml0ZW1JZCwgMClcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAgMCA6IC8vIG1lbnUgc3RhdGVcblx0XHRcdFx0XHRzZXRPbkRpc3BsYXkoZmFsc2UsIG9uRGlzcGxheS5pdGVtSWQsIC0xKVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICAxIDogLy8gYWJvdXQgc3RhdGVcblx0XHRcdFx0XHRzZXRPbkRpc3BsYXkodHJ1ZSwgb25EaXNwbGF5Lml0ZW1JZCwgMClcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAgMiA6IC8vICBjYXNlIDEpIGdpbXMgb24gZGlzcGxheSB8IGNhc2UgMikgYSBwcm9qZWN0IG9uIGRpc3BsYXkgXG5cdFx0XHRcdFx0aWYgKCFvbkRpc3BsYXkuZGlzcGxheU9mZilcblx0XHRcdFx0XHRcdG9uRGlzcGxheS5kaXNwbGF5U3RhdGUgPyBzZXRPbkRpc3BsYXkoZmFsc2UsIG9uRGlzcGxheS5pdGVtSWQsIDIpIDogc2V0T25EaXNwbGF5KHRydWUsIG9uRGlzcGxheS5pdGVtSWQsIDIpO1xuXHRcdFx0XHRcdC8vIGVsc2Vcblx0XHRcdFx0XHRcdC8vIHNldE9uRGlzcGxheShmYWxzZSwgb25EaXNwbGF5Lml0ZW1JZCwgMilcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAgMyA6IFxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHR9XG5cdGNvbnN0IG9uRGlzcGxheUtleSA9IG9uRGlzcGxheS5kaXNwbGF5U3RhdGUgPyAxIDogMDtcblx0cmV0dXJuIChcblx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0Y2xhc3NOYW1lPVwibWQ6aGlkZGVuIHJlbGF0aXZlIGZsZXggZmxleC1jb2wganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgaC1hdXRvIHctZnVsbFwiXG5cdFx0XHRrZXk9e29uRGlzcGxheUtleX1cblx0XHRcdGluaXRpYWw9XCJpbml0aWFsXCJcblx0XHRcdGFuaW1hdGU9XCJzdGFuZGluZ1wiXG5cdFx0XHRjdXN0b209e29uRGlzcGxheX1cblx0XHRcdHZhcmlhbnRzPXt2YXJpYW50c31cblx0XHQ+XG5cdFx0XHQ8U29ndW1hUGhvbmVcblx0XHRcdFx0b25EaXNwbGF5PXtvbkRpc3BsYXl9XG5cdFx0XHRcdGRhcmtUaGVtZT17ZGFya1RoZW1lfVxuXHRcdFx0XHRvblNvZ3VtYUNsaWNrPXtvblNvZ3VtYUNsaWNrfVxuXHRcdFx0XHRzZXRPbkRpc3BsYXk9e3NldE9uRGlzcGxheX1cblx0XHRcdFx0Lz5cblx0XHRcdFx0eyBvbkRpc3BsYXkudHlwZSAhPT0gMiAmJiA8TWVudVBob25lIG9uRGlzcGxheT17b25EaXNwbGF5fSAgc2V0T25EaXNwbGF5PXtzZXRPbkRpc3BsYXl9Lz59XG5cdFx0PC9tb3Rpb24uZGl2PlxuXHQpO1xufVxuICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/sogumaVxPhone.tsx\n");

/***/ })

})