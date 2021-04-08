webpackHotUpdate_N_E("pages/index",{

/***/ "./components/sogumaVxPhone.tsx":
/*!**************************************!*\
  !*** ./components/sogumaVxPhone.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SogumaVxPhone; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _sogumaPhone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sogumaPhone */ \"./components/sogumaPhone.tsx\");\n/* harmony import */ var _menuPhone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menuPhone */ \"./components/menuPhone.js\");\n\n\n\nvar _jsxFileName = \"/home/hamza/Desktop/portfolio/components/sogumaVxPhone.tsx\",\n    _s = $RefreshSig$();\n\n\n // import GimsPhone from './gimPhone'\n\n\n\n// gims props\nvar variants = {\n  initial: function initial(onDisplay) {\n    if (onDisplay.displayState) return {\n      y: 0,\n      scale: 1\n    };else return {\n      y: 0,\n      //-410,\n      scale: 0.7 //0.1,\n\n    };\n  },\n  standing: function standing(onDisplay) {\n    if (onDisplay.displayState) return {\n      scale: [1, 0.7],\n      y: [0, 0],\n      transition: {\n        scale: {\n          delay: 0.3,\n          duration: 1\n        },\n        y: {\n          delay: 0.3,\n          duration: 1\n        }\n      }\n    };else return {\n      y: 0,\n      // x: 0,\n      scale: 1,\n      transition: {\n        // duration: 0.5,\n        scale: {\n          delay: 0.3,\n          duration: 1\n        },\n        y: {\n          delay: 0.3,\n          duration: 1\n        }\n      }\n    };\n  }\n};\nvar data = [\"art\", \"about me\", \"p1\"];\nfunction SogumaVxPhone(_ref) {\n  _s();\n\n  var repos = _ref.repos,\n      fetchedData = _ref.fetchedData,\n      setOnDisplay = _ref.setOnDisplay,\n      onDisplay = _ref.onDisplay,\n      darkTheme = _ref.darkTheme;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([0, 0]),\n      _useState$ = Object(_home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState[0], 2),\n      direction = _useState$[0],\n      steps = _useState$[1],\n      setRotate = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true),\n      clickOff = _useState2[0],\n      setClickOff = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      projects = _useState3[0],\n      setProjects = _useState3[1];\n\n  var moveGims = function moveGims(newDirection) {\n    setRotate([newDirection, steps + newDirection]);\n  }; // console.log(dataLoading ? \"fetched DATA : \": fetchedData )\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var initProjects = [];\n    repos.map(function (project) {\n      initProjects.push(project.name);\n    }); // console.log(\" projects d ZAAAAAAAAAAAAAAAAAAB: \", initProjects)\n\n    setProjects(initProjects);\n  }, [repos]);\n\n  var onSogumaClick = function onSogumaClick() {\n    switch (onDisplay.type) {\n      case -1:\n        // none state\n        setOnDisplay(false, onDisplay.itemId, 0);\n        break;\n\n      case 0:\n        // menu state\n        setOnDisplay(false, onDisplay.itemId, -1);\n        break;\n\n      case 1:\n        // about state\n        setOnDisplay(true, onDisplay.itemId, 0);\n        break;\n\n      case 2:\n        //  case 1) gims on display | case 2) a project on display \n        if (!onDisplay.displayOff) onDisplay.displayState ? setOnDisplay(false, onDisplay.itemId, 2) : setOnDisplay(true, onDisplay.itemId, 2); // else\n        // setOnDisplay(false, onDisplay.itemId, 2)\n\n        break;\n\n      case 3:\n        break;\n    }\n  };\n\n  var onDisplayKey = onDisplay.displayState ? 1 : 0;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n    className: \"md:hidden relative flex flex-col justify-start items-center h-auto w-full\",\n    initial: \"initial\",\n    animate: \"standing\",\n    custom: onDisplay,\n    variants: variants,\n    children: [onDisplay.type != 2 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_menuPhone__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      onDisplay: onDisplay,\n      setOnDisplay: setOnDisplay\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 28\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_sogumaPhone__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      onDisplay: onDisplay,\n      darkTheme: darkTheme,\n      onSogumaClick: onSogumaClick,\n      setOnDisplay: setOnDisplay\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 103,\n      columnNumber: 4\n    }, this)]\n  }, onDisplayKey, true, {\n    fileName: _jsxFileName,\n    lineNumber: 94,\n    columnNumber: 3\n  }, this);\n}\n\n_s(SogumaVxPhone, \"drdXBGiJG3DTiISEBYABsAztkKM=\");\n\n_c = SogumaVxPhone;\n\nvar _c;\n\n$RefreshReg$(_c, \"SogumaVxPhone\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zb2d1bWFWeFBob25lLnRzeD80ZGZjIl0sIm5hbWVzIjpbInZhcmlhbnRzIiwiaW5pdGlhbCIsIm9uRGlzcGxheSIsImRpc3BsYXlTdGF0ZSIsInkiLCJzY2FsZSIsInN0YW5kaW5nIiwidHJhbnNpdGlvbiIsImRlbGF5IiwiZHVyYXRpb24iLCJkYXRhIiwiU29ndW1hVnhQaG9uZSIsInJlcG9zIiwiZmV0Y2hlZERhdGEiLCJzZXRPbkRpc3BsYXkiLCJkYXJrVGhlbWUiLCJ1c2VTdGF0ZSIsImRpcmVjdGlvbiIsInN0ZXBzIiwic2V0Um90YXRlIiwiY2xpY2tPZmYiLCJzZXRDbGlja09mZiIsInByb2plY3RzIiwic2V0UHJvamVjdHMiLCJtb3ZlR2ltcyIsIm5ld0RpcmVjdGlvbiIsInVzZUVmZmVjdCIsImluaXRQcm9qZWN0cyIsIm1hcCIsInByb2plY3QiLCJwdXNoIiwibmFtZSIsIm9uU29ndW1hQ2xpY2siLCJ0eXBlIiwiaXRlbUlkIiwiZGlzcGxheU9mZiIsIm9uRGlzcGxheUtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ0E7QUFDQTtBQUl1QztBQUd2QyxJQUFNQSxRQUFRLEdBQUc7QUFDaEJDLFNBQU8sRUFBRSxpQkFBQ0MsU0FBRCxFQUFvQjtBQUM1QixRQUFJQSxTQUFTLENBQUNDLFlBQWQsRUFDQyxPQUFPO0FBQ05DLE9BQUMsRUFBRSxDQURHO0FBRU5DLFdBQUssRUFBRTtBQUZELEtBQVAsQ0FERCxLQU1DLE9BQU87QUFDTkQsT0FBQyxFQUFFLENBREc7QUFDRDtBQUNMQyxXQUFLLEVBQUUsR0FGRCxDQUVLOztBQUZMLEtBQVA7QUFJRCxHQVplO0FBYWhCQyxVQUFRLEVBQUUsa0JBQUNKLFNBQUQsRUFBb0I7QUFDN0IsUUFBSUEsU0FBUyxDQUFDQyxZQUFkLEVBQ0MsT0FBTztBQUNORSxXQUFLLEVBQUUsQ0FBQyxDQUFELEVBQUksR0FBSixDQUREO0FB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LENBQUMsSUFBRCxFQUFPWixTQUFTLENBQUNnQyxNQUFqQixFQUF5QixDQUF6QixDQUFoRixDQUZGLENBR0M7QUFDQzs7QUFDRDs7QUFDRCxXQUFNLENBQU47QUFDQztBQWpCRjtBQW1CRCxHQXBCRDs7QUFxQkEsTUFBTUUsWUFBWSxHQUFHbEMsU0FBUyxDQUFDQyxZQUFWLEdBQXlCLENBQXpCLEdBQTZCLENBQWxEO0FBQ0Esc0JBQ0MscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0MsYUFBUyxFQUFDLDJFQURYO0FBR0MsV0FBTyxFQUFDLFNBSFQ7QUFJQyxXQUFPLEVBQUMsVUFKVDtBQUtDLFVBQU0sRUFBRUQsU0FMVDtBQU1DLFlBQVEsRUFBRUYsUUFOWDtBQUFBLGVBUUdFLFNBQVMsQ0FBQytCLElBQVYsSUFBaUIsQ0FBakIsaUJBQXNCLHFFQUFDLGtEQUFEO0FBQVcsZUFBUyxFQUFFL0IsU0FBdEI7QUFBa0Msa0JBQVksRUFBRVk7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJ6QixlQVNDLHFFQUFDLG9EQUFEO0FBQ0MsZUFBUyxFQUFFWixTQURaO0FBRUMsZUFBUyxFQUFFYSxTQUZaO0FBR0MsbUJBQWEsRUFBRWlCLGFBSGhCO0FBSUMsa0JBQVksRUFBRWxCO0FBSmY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVREO0FBQUEsS0FFTXNCLFlBRk47QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBa0JBOztHQTNEdUJ6QixhOztLQUFBQSxhIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9zb2d1bWFWeFBob25lLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1vdGlvbiwgdXNlVHJhbnNmb3JtLCB1c2VWaWV3cG9ydFNjcm9sbCwgdXNlTW90aW9uVmFsdWUsIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG4vLyBpbXBvcnQgR2ltc1Bob25lIGZyb20gJy4vZ2ltUGhvbmUnXG5pbXBvcnQgU29ndW1hUGhvbmUgZnJvbSAnLi9zb2d1bWFQaG9uZSdcbmltcG9ydCBNZW51UGhvbmUgZnJvbSAnLi9tZW51UGhvbmUnXG5pbXBvcnQgeyB3cmFwIH0gZnJvbSAncG9wbW90aW9uJ1xuaW1wb3J0IFNvZ3VtYUV5ZSBmcm9tICcuL3N1Z3VtYUV5ZSdcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi90aGVtZSdcbmltcG9ydCB7IGdpbXNQcm9wcyB9IGZyb20gJy4vZ2ltUHJvcHMnIC8vIGdpbXMgcHJvcHNcblxuXG5jb25zdCB2YXJpYW50cyA9IHtcblx0aW5pdGlhbDogKG9uRGlzcGxheTogYW55KSA9PiB7XG5cdFx0aWYgKG9uRGlzcGxheS5kaXNwbGF5U3RhdGUpXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR5OiAwLFxuXHRcdFx0XHRzY2FsZTogMSxcblx0XHRcdH1cblx0XHRlbHNlXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR5OiAwLC8vLTQxMCxcblx0XHRcdFx0c2NhbGU6IDAuNywvLzAuMSxcblx0XHRcdH07XG5cdH0sXG5cdHN0YW5kaW5nOiAob25EaXNwbGF5OiBhbnkpID0+IHtcblx0XHRpZiAob25EaXNwbGF5LmRpc3BsYXlTdGF0ZSlcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHNjYWxlOiBbMSwgMC43XSxcblx0XHRcdFx0eTogWzAsIDBdLFxuXHRcdFx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHRcdFx0c2NhbGU6IHsgZGVsYXk6IDAuMywgZHVyYXRpb246IDEgfSxcblx0XHRcdFx0XHR5OiB7IGRlbGF5OiAwLjMsIGR1cmF0aW9uOiAxIH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdGVsc2Vcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHk6IDAsXG5cdFx0XHRcdC8vIHg6IDAsXG5cdFx0XHRcdHNjYWxlOiAxLFxuXHRcdFx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHRcdFx0Ly8gZHVyYXRpb246IDAuNSxcblx0XHRcdFx0XHRzY2FsZTogeyBkZWxheTogMC4zLCBkdXJhdGlvbjogMSB9LFxuXHRcdFx0XHRcdHk6IHsgZGVsYXk6IDAuMywgZHVyYXRpb246IDEgfVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHR9LFxufVxuXG5cbmNvbnN0IGRhdGEgPSBbXCJhcnRcIiwgXCJhYm91dCBtZVwiLCBcInAxXCJdXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNvZ3VtYVZ4UGhvbmUoeyByZXBvcyAsZmV0Y2hlZERhdGEgLCBzZXRPbkRpc3BsYXksIG9uRGlzcGxheSwgZGFya1RoZW1lIH0pIHtcblxuXHRjb25zdCBbW2RpcmVjdGlvbiwgc3RlcHNdLCBzZXRSb3RhdGVdID0gdXNlU3RhdGUoWzAsIDBdKTtcblx0Y29uc3QgW2NsaWNrT2ZmLCBzZXRDbGlja09mZl0gPSB1c2VTdGF0ZSh0cnVlKTtcblx0Y29uc3QgW3Byb2plY3RzLCBzZXRQcm9qZWN0c10gPSB1c2VTdGF0ZShbXSk7XG5cblxuXHRjb25zdCBtb3ZlR2ltcyA9IChuZXdEaXJlY3Rpb246IG51bWJlcikgPT4ge1xuXHRcdHNldFJvdGF0ZShbbmV3RGlyZWN0aW9uLCBzdGVwcyArIG5ld0RpcmVjdGlvbl0pO1xuXHR9XG5cdC8vIGNvbnNvbGUubG9nKGRhdGFMb2FkaW5nID8gXCJmZXRjaGVkIERBVEEgOiBcIjogZmV0Y2hlZERhdGEgKVxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGNvbnN0IGluaXRQcm9qZWN0cyA9IFtdXG5cdFx0cmVwb3MubWFwKChwcm9qZWN0KSA9PiB7XG5cdFx0XHRpbml0UHJvamVjdHMucHVzaChwcm9qZWN0Lm5hbWUpO1xuXHRcdH0pXG5cdFx0Ly8gY29uc29sZS5sb2coXCIgcHJvamVjdHMgZCBaQUFBQUFBQUFBQUFBQUFBQUFBQjogXCIsIGluaXRQcm9qZWN0cylcblx0XHRzZXRQcm9qZWN0cyhpbml0UHJvamVjdHMpXG5cdH0sIFtyZXBvc10pXG5cdGNvbnN0IG9uU29ndW1hQ2xpY2sgPSAoKSA9PiB7XG5cdFx0XHRzd2l0Y2ggKG9uRGlzcGxheS50eXBlKSB7XG5cdFx0XHRcdGNhc2UgIC0xIDogLy8gbm9uZSBzdGF0ZVxuXHRcdFx0XHRcdFx0c2V0T25EaXNwbGF5KGZhbHNlLCBvbkRpc3BsYXkuaXRlbUlkLCAwKVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICAwIDogLy8gbWVudSBzdGF0ZVxuXHRcdFx0XHRcdHNldE9uRGlzcGxheShmYWxzZSwgb25EaXNwbGF5Lml0ZW1JZCwgLTEpXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgIDEgOiAvLyBhYm91dCBzdGF0ZVxuXHRcdFx0XHRcdHNldE9uRGlzcGxheSh0cnVlLCBvbkRpc3BsYXkuaXRlbUlkLCAwKVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICAyIDogLy8gIGNhc2UgMSkgZ2ltcyBvbiBkaXNwbGF5IHwgY2FzZSAyKSBhIHByb2plY3Qgb24gZGlzcGxheSBcblx0XHRcdFx0XHRpZiAoIW9uRGlzcGxheS5kaXNwbGF5T2ZmKVxuXHRcdFx0XHRcdFx0b25EaXNwbGF5LmRpc3BsYXlTdGF0ZSA/IHNldE9uRGlzcGxheShmYWxzZSwgb25EaXNwbGF5Lml0ZW1JZCwgMikgOiBzZXRPbkRpc3BsYXkodHJ1ZSwgb25EaXNwbGF5Lml0ZW1JZCwgMik7XG5cdFx0XHRcdFx0Ly8gZWxzZVxuXHRcdFx0XHRcdFx0Ly8gc2V0T25EaXNwbGF5KGZhbHNlLCBvbkRpc3BsYXkuaXRlbUlkLCAyKVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICAzIDogXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdH1cblx0Y29uc3Qgb25EaXNwbGF5S2V5ID0gb25EaXNwbGF5LmRpc3BsYXlTdGF0ZSA/IDEgOiAwO1xuXHRyZXR1cm4gKFxuXHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRjbGFzc05hbWU9XCJtZDpoaWRkZW4gcmVsYXRpdmUgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBoLWF1dG8gdy1mdWxsXCJcblx0XHRcdGtleT17b25EaXNwbGF5S2V5fVxuXHRcdFx0aW5pdGlhbD1cImluaXRpYWxcIlxuXHRcdFx0YW5pbWF0ZT1cInN0YW5kaW5nXCJcblx0XHRcdGN1c3RvbT17b25EaXNwbGF5fVxuXHRcdFx0dmFyaWFudHM9e3ZhcmlhbnRzfVxuXHRcdD5cblx0XHRcdHsgb25EaXNwbGF5LnR5cGUgIT0yICYmIDxNZW51UGhvbmUgb25EaXNwbGF5PXtvbkRpc3BsYXl9ICBzZXRPbkRpc3BsYXk9e3NldE9uRGlzcGxheX0vPn1cblx0XHRcdDxTb2d1bWFQaG9uZVxuXHRcdFx0XHRvbkRpc3BsYXk9e29uRGlzcGxheX1cblx0XHRcdFx0ZGFya1RoZW1lPXtkYXJrVGhlbWV9XG5cdFx0XHRcdG9uU29ndW1hQ2xpY2s9e29uU29ndW1hQ2xpY2t9XG5cdFx0XHRcdHNldE9uRGlzcGxheT17c2V0T25EaXNwbGF5fVxuXHRcdFx0Lz5cblx0XHQ8L21vdGlvbi5kaXY+XG5cdCk7XG59XG4gICJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/sogumaVxPhone.tsx\n");

/***/ })

})