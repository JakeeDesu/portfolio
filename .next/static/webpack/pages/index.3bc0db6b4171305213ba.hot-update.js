webpackHotUpdate_N_E("pages/index",{

/***/ "./components/sogumaVxPhone.tsx":
/*!**************************************!*\
  !*** ./components/sogumaVxPhone.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SogumaVxPhone; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _sogumaPhone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sogumaPhone */ \"./components/sogumaPhone.tsx\");\n/* harmony import */ var _menuPhone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menuPhone */ \"./components/menuPhone.js\");\n\n\n\nvar _jsxFileName = \"/home/hamza/Desktop/portfolio/components/sogumaVxPhone.tsx\",\n    _s = $RefreshSig$();\n\n\n // import GimsPhone from './gimPhone'\n\n\n\n// gims props\nvar variants = {\n  initial: function initial(onDisplay) {\n    if (onDisplay.displayState) return {\n      y: 0,\n      scale: 1\n    };else return {\n      y: 0,\n      //-410,\n      scale: 0.7 //0.1,\n\n    };\n  },\n  standing: function standing(onDisplay) {\n    if (onDisplay.displayState) return {\n      scale: [1, 0.7],\n      y: [0, 0],\n      transition: {\n        scale: {\n          delay: 0.3,\n          duration: 1\n        },\n        y: {\n          delay: 0.3,\n          duration: 1\n        }\n      }\n    };else return {\n      y: 0,\n      // x: 0,\n      scale: 1,\n      transition: {\n        // duration: 0.5,\n        scale: {\n          delay: 0.3,\n          duration: 1\n        },\n        y: {\n          delay: 0.3,\n          duration: 1\n        }\n      }\n    };\n  }\n};\nvar data = [\"art\", \"about me\", \"p1\"];\nfunction SogumaVxPhone(_ref) {\n  _s();\n\n  var repos = _ref.repos,\n      fetchedData = _ref.fetchedData,\n      setOnDisplay = _ref.setOnDisplay,\n      onDisplay = _ref.onDisplay,\n      darkTheme = _ref.darkTheme;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([0, 0]),\n      _useState$ = Object(_home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState[0], 2),\n      direction = _useState$[0],\n      steps = _useState$[1],\n      setRotate = _useState[1]; // const [clickOff, setClickOff] = useState(true);\n  // const [type, setType] = useState([ 0, -1]);\n\n\n  var moveGims = function moveGims(newDirection) {\n    setRotate([newDirection, steps + newDirection]);\n  }; // console.log(dataLoading ? \"fetched DATA : \": fetchedData )\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {// if ( onDisplay.type > 0 )\n    // \tsetOnDisplay(true, onDisplay.itemId, -1)\n    // const initProjects = []\n    // repos.map((project) => {\n    // \tinitProjects.push(project.name);\n    // })\n    // // console.log(\" projects d ZAAAAAAAAAAAAAAAAAAB: \", initProjects)\n    // setProjects(initProjects)\n  }, []);\n\n  var onSogumaClick = function onSogumaClick() {\n    switch (onDisplay.type) {\n      case -1:\n        // none state\n        setOnDisplay(false, onDisplay.itemId, 0);\n        break;\n\n      case 0:\n        // menu state\n        setOnDisplay(true, onDisplay.itemId, -1);\n        break;\n\n      case 1:\n        // menu state\n        setOnDisplay(true, onDisplay.itemId, -1);\n        break;\n\n      case 2:\n        // menu state\n        setOnDisplay(false, onDisplay.itemId, 0);\n        break;\n    }\n  };\n\n  var onDisplayKey = onDisplay.displayState ? 1 : 0;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n    className: \"md:hidden relative flex flex-col justify-start items-center h-auto w-full\",\n    initial: \"initial\",\n    animate: \"standing\",\n    custom: onDisplay,\n    variants: variants,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_sogumaPhone__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      onDisplay: onDisplay,\n      darkTheme: darkTheme,\n      onSogumaClick: onSogumaClick,\n      setOnDisplay: setOnDisplay\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 4\n    }, this), onDisplay.type !== 2 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_menuPhone__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      onDisplay: onDisplay,\n      setOnDisplay: setOnDisplay\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 31\n    }, this)]\n  }, onDisplayKey, true, {\n    fileName: _jsxFileName,\n    lineNumber: 92,\n    columnNumber: 3\n  }, this);\n}\n\n_s(SogumaVxPhone, \"BSBNN5l9LIxqrCzE6GDni0II8nw=\");\n\n_c = SogumaVxPhone;\n\nvar _c;\n\n$RefreshReg$(_c, \"SogumaVxPhone\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zb2d1bWFWeFBob25lLnRzeD80ZGZjIl0sIm5hbWVzIjpbInZhcmlhbnRzIiwiaW5pdGlhbCIsIm9uRGlzcGxheSIsImRpc3BsYXlTdGF0ZSIsInkiLCJzY2FsZSIsInN0YW5kaW5nIiwidHJhbnNpdGlvbiIsImRlbGF5IiwiZHVyYXRpb24iLCJkYXRhIiwiU29ndW1hVnhQaG9uZSIsInJlcG9zIiwiZmV0Y2hlZERhdGEiLCJzZXRPbkRpc3BsYXkiLCJkYXJrVGhlbWUiLCJ1c2VTdGF0ZSIsImRpcmVjdGlvbiIsInN0ZXBzIiwic2V0Um90YXRlIiwibW92ZUdpbXMiLCJuZXdEaXJlY3Rpb24iLCJ1c2VFZmZlY3QiLCJvblNvZ3VtYUNsaWNrIiwidHlwZSIsIml0ZW1JZCIsIm9uRGlzcGxheUtleSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0NBRUE7O0FBQ0E7QUFDQTtBQUl1QztBQUd2QyxJQUFNQSxRQUFRLEdBQUc7QUFDaEJDLFNBQU8sRUFBRSxpQkFBQ0MsU0FBRCxFQUFvQjtBQUM1QixRQUFJQSxTQUFTLENBQUNDLFlBQWQsRUFDQyxPQUFPO0FBQ05DLE9BQUMsRUFBRSxDQURHO0FBRU5DLFdBQUssRUFBRTtBQUZELEtBQVAsQ0FERCxLQU1DLE9BQU87QUFDTkQsT0FBQyxFQUFFLENBREc7QUFDRDtBQUNMQyxXQUFLLEVBQUUsR0FGRCxDQUVLOztBQUZMLEtBQVA7QUFJRCxHQVplO0FBYWhCQyxVQUFRLEVBQUUsa0JBQUNKLFNBQUQsRUFBb0I7QUFDN0IsUUFBSUEsU0FBUyxDQUFDQyxZQUFkLEVBQ0MsT0FBTztBQUNORSxXQUFLLEVBQUUsQ0FBQyxDQUFELEVBQUksR0FBSixDQUREO0FBRU5ELE9BQUMsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLENBRkc7QUFHTkcsZ0JBQVUsRUFBRTtBQUNYRixhQUFLLEVBQUU7QUFBRUcsZUFBSyxFQUFFLEdBQVQ7QUFBY0Msa0JBQVEsRUFBRTtBQUF4QixTQURJO0FBRVhMLFNBQUMsRUFBRTtBQUFFSSxlQUFLLEVBQUUsR0FBVDtBQUFjQyxrQkFBUSxFQUFFO0FBQXhCO0FBRlE7QUFITixLQUFQLENBREQsS0FVQyxPQUFPO0FBQ05MLE9BQUMsRUFBRSxDQURHO0FBRU47QUFDQUMsV0FBSyxFQUFFLENBSEQ7QUFJTkUsZ0JBQVUsRUFBRTtBQUNYO0FBQ0FGLGFBQUssRUFBRTtBQUFFRyxlQUFLLEVBQUUsR0FBVDtBQUFjQyxrQkFBUSxFQUFFO0FBQXhCLFNBRkk7QUFHWEwsU0FBQyxFQUFFO0FBQUVJLGVBQUssRUFBRSxHQUFUO0FBQWNDLGtCQUFRLEVBQUU7QUFBeEI7QUFIUTtBQUpOLEtBQVA7QUFVRDtBQWxDZSxDQUFqQjtBQXNDQSxJQUFNQyxJQUFJLEdBQUcsQ0FBQyxLQUFELEVBQVEsVUFBUixFQUFvQixJQUFwQixDQUFiO0FBRWUsU0FBU0MsYUFBVCxPQUFvRjtBQUFBOztBQUFBLE1BQTNEQyxLQUEyRCxRQUEzREEsS0FBMkQ7QUFBQSxNQUFwREMsV0FBb0QsUUFBcERBLFdBQW9EO0FBQUEsTUFBdENDLFlBQXNDLFFBQXRDQSxZQUFzQztBQUFBLE1BQXhCWixTQUF3QixRQUF4QkEsU0FBd0I7QUFBQSxNQUFiYSxTQUFhLFFBQWJBLFNBQWE7O0FBQUEsa0JBRTFEQyxzREFBUSxDQUFDLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBRCxDQUZrRDtBQUFBO0FBQUEsTUFFMUZDLFNBRjBGO0FBQUEsTUFFL0VDLEtBRitFO0FBQUEsTUFFdkVDLFNBRnVFLGlCQUdsRztBQUNBOzs7QUFHQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxZQUFELEVBQTBCO0FBQzFDRixhQUFTLENBQUMsQ0FBQ0UsWUFBRCxFQUFlSCxLQUFLLEdBQUdHLFlBQXZCLENBQUQsQ0FBVDtBQUNBLEdBRkQsQ0FQa0csQ0FVbEc7OztBQUNBQyx5REFBUyxDQUFDLFlBQU0sQ0FDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FUUSxFQVNOLEVBVE0sQ0FBVDs7QUFXQSxNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDMUIsWUFBUXJCLFNBQVMsQ0FBQ3NCLElBQWxCO0FBQ0MsV0FBTSxDQUFDLENBQVA7QUFBVztBQUNWVixvQkFBWSxDQUFDLEtBQUQsRUFBUVosU0FBUyxDQUFDdUIsTUFBbEIsRUFBMEIsQ0FBMUIsQ0FBWjtBQUNBOztBQUNELFdBQU0sQ0FBTjtBQUFVO0FBQ1RYLG9CQUFZLENBQUMsSUFBRCxFQUFPWixTQUFTLENBQUN1QixNQUFqQixFQUF5QixDQUFDLENBQTFCLENBQVo7QUFDQTs7QUFDRCxXQUFNLENBQU47QUFBVTtBQUNUWCxvQkFBWSxDQUFDLElBQUQsRUFBT1osU0FBUyxDQUFDdUIsTUFBakIsRUFBeUIsQ0FBQyxDQUExQixDQUFaO0FBQ0E7O0FBQ0QsV0FBTSxDQUFOO0FBQVU7QUFDVFgsb0JBQVksQ0FBQyxLQUFELEVBQVFaLFNBQVMsQ0FBQ3VCLE1BQWxCLEVBQTBCLENBQTFCLENBQVo7QUFDRDtBQVpEO0FBY0QsR0FmRDs7QUFnQkEsTUFBTUMsWUFBWSxHQUFHeEIsU0FBUyxDQUFDQyxZQUFWLEdBQXlCLENBQXpCLEdBQTZCLENBQWxEO0FBQ0Esc0JBQ0MscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0MsYUFBUyxFQUFDLDJFQURYO0FBR0MsV0FBTyxFQUFDLFNBSFQ7QUFJQyxXQUFPLEVBQUMsVUFKVDtBQUtDLFVBQU0sRUFBRUQsU0FMVDtBQU1DLFlBQVEsRUFBRUYsUUFOWDtBQUFBLDRCQVFDLHFFQUFDLG9EQUFEO0FBQ0MsZUFBUyxFQUFFRSxTQURaO0FBRUMsZUFBUyxFQUFFYSxTQUZaO0FBR0MsbUJBQWEsRUFBRVEsYUFIaEI7QUFJQyxrQkFBWSxFQUFFVDtBQUpmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRCxFQWNJWixTQUFTLENBQUNzQixJQUFWLEtBQW1CLENBQW5CLGlCQUF3QixxRUFBQyxrREFBRDtBQUFXLGVBQVMsRUFBRXRCLFNBQXRCO0FBQWtDLGtCQUFZLEVBQUVZO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFkNUI7QUFBQSxLQUVNWSxZQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQWtCQTs7R0F6RHVCZixhOztLQUFBQSxhIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9zb2d1bWFWeFBob25lLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1vdGlvbiwgdXNlVHJhbnNmb3JtLCB1c2VWaWV3cG9ydFNjcm9sbCwgdXNlTW90aW9uVmFsdWUsIEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG4vLyBpbXBvcnQgR2ltc1Bob25lIGZyb20gJy4vZ2ltUGhvbmUnXG5pbXBvcnQgU29ndW1hUGhvbmUgZnJvbSAnLi9zb2d1bWFQaG9uZSdcbmltcG9ydCBNZW51UGhvbmUgZnJvbSAnLi9tZW51UGhvbmUnXG5pbXBvcnQgeyB3cmFwIH0gZnJvbSAncG9wbW90aW9uJ1xuaW1wb3J0IFNvZ3VtYUV5ZSBmcm9tICcuL3N1Z3VtYUV5ZSdcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi90aGVtZSdcbmltcG9ydCB7IGdpbXNQcm9wcyB9IGZyb20gJy4vZ2ltUHJvcHMnIC8vIGdpbXMgcHJvcHNcblxuXG5jb25zdCB2YXJpYW50cyA9IHtcblx0aW5pdGlhbDogKG9uRGlzcGxheTogYW55KSA9PiB7XG5cdFx0aWYgKG9uRGlzcGxheS5kaXNwbGF5U3RhdGUpXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR5OiAwLFxuXHRcdFx0XHRzY2FsZTogMSxcblx0XHRcdH1cblx0XHRlbHNlXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR5OiAwLC8vLTQxMCxcblx0XHRcdFx0c2NhbGU6IDAuNywvLzAuMSxcblx0XHRcdH07XG5cdH0sXG5cdHN0YW5kaW5nOiAob25EaXNwbGF5OiBhbnkpID0+IHtcblx0XHRpZiAob25EaXNwbGF5LmRpc3BsYXlTdGF0ZSlcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHNjYWxlOiBbMSwgMC43XSxcblx0XHRcdFx0eTogWzAsIDBdLFxuXHRcdFx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHRcdFx0c2NhbGU6IHsgZGVsYXk6IDAuMywgZHVyYXRpb246IDEgfSxcblx0XHRcdFx0XHR5OiB7IGRlbGF5OiAwLjMsIGR1cmF0aW9uOiAxIH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdGVsc2Vcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHk6IDAsXG5cdFx0XHRcdC8vIHg6IDAsXG5cdFx0XHRcdHNjYWxlOiAxLFxuXHRcdFx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHRcdFx0Ly8gZHVyYXRpb246IDAuNSxcblx0XHRcdFx0XHRzY2FsZTogeyBkZWxheTogMC4zLCBkdXJhdGlvbjogMSB9LFxuXHRcdFx0XHRcdHk6IHsgZGVsYXk6IDAuMywgZHVyYXRpb246IDEgfVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHR9LFxufVxuXG5cbmNvbnN0IGRhdGEgPSBbXCJhcnRcIiwgXCJhYm91dCBtZVwiLCBcInAxXCJdXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNvZ3VtYVZ4UGhvbmUoeyByZXBvcyAsZmV0Y2hlZERhdGEgLCBzZXRPbkRpc3BsYXksIG9uRGlzcGxheSwgZGFya1RoZW1lIH0pIHtcblxuXHRjb25zdCBbW2RpcmVjdGlvbiwgc3RlcHNdLCBzZXRSb3RhdGVdID0gdXNlU3RhdGUoWzAsIDBdKTtcblx0Ly8gY29uc3QgW2NsaWNrT2ZmLCBzZXRDbGlja09mZl0gPSB1c2VTdGF0ZSh0cnVlKTtcblx0Ly8gY29uc3QgW3R5cGUsIHNldFR5cGVdID0gdXNlU3RhdGUoWyAwLCAtMV0pO1xuXG5cblx0Y29uc3QgbW92ZUdpbXMgPSAobmV3RGlyZWN0aW9uOiBudW1iZXIpID0+IHtcblx0XHRzZXRSb3RhdGUoW25ld0RpcmVjdGlvbiwgc3RlcHMgKyBuZXdEaXJlY3Rpb25dKTtcblx0fVxuXHQvLyBjb25zb2xlLmxvZyhkYXRhTG9hZGluZyA/IFwiZmV0Y2hlZCBEQVRBIDogXCI6IGZldGNoZWREYXRhIClcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHQvLyBpZiAoIG9uRGlzcGxheS50eXBlID4gMCApXG5cdFx0Ly8gXHRzZXRPbkRpc3BsYXkodHJ1ZSwgb25EaXNwbGF5Lml0ZW1JZCwgLTEpXG5cdFx0Ly8gY29uc3QgaW5pdFByb2plY3RzID0gW11cblx0XHQvLyByZXBvcy5tYXAoKHByb2plY3QpID0+IHtcblx0XHQvLyBcdGluaXRQcm9qZWN0cy5wdXNoKHByb2plY3QubmFtZSk7XG5cdFx0Ly8gfSlcblx0XHQvLyAvLyBjb25zb2xlLmxvZyhcIiBwcm9qZWN0cyBkIFpBQUFBQUFBQUFBQUFBQUFBQUFCOiBcIiwgaW5pdFByb2plY3RzKVxuXHRcdC8vIHNldFByb2plY3RzKGluaXRQcm9qZWN0cylcblx0fSwgW10pXG5cblx0Y29uc3Qgb25Tb2d1bWFDbGljayA9ICgpID0+IHtcblx0XHRcdHN3aXRjaCAob25EaXNwbGF5LnR5cGUpIHtcblx0XHRcdFx0Y2FzZSAgLTEgOiAvLyBub25lIHN0YXRlXG5cdFx0XHRcdFx0c2V0T25EaXNwbGF5KGZhbHNlLCBvbkRpc3BsYXkuaXRlbUlkLCAwKVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICAwIDogLy8gbWVudSBzdGF0ZVxuXHRcdFx0XHRcdHNldE9uRGlzcGxheSh0cnVlLCBvbkRpc3BsYXkuaXRlbUlkLCAtMSlcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAgMSA6IC8vIG1lbnUgc3RhdGVcblx0XHRcdFx0XHRzZXRPbkRpc3BsYXkodHJ1ZSwgb25EaXNwbGF5Lml0ZW1JZCwgLTEpXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgIDIgOiAvLyBtZW51IHN0YXRlXG5cdFx0XHRcdFx0c2V0T25EaXNwbGF5KGZhbHNlLCBvbkRpc3BsYXkuaXRlbUlkLCAwKVxuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0fVxuXHRjb25zdCBvbkRpc3BsYXlLZXkgPSBvbkRpc3BsYXkuZGlzcGxheVN0YXRlID8gMSA6IDA7XG5cdHJldHVybiAoXG5cdFx0PG1vdGlvbi5kaXZcblx0XHRcdGNsYXNzTmFtZT1cIm1kOmhpZGRlbiByZWxhdGl2ZSBmbGV4IGZsZXgtY29sIGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIGgtYXV0byB3LWZ1bGxcIlxuXHRcdFx0a2V5PXtvbkRpc3BsYXlLZXl9XG5cdFx0XHRpbml0aWFsPVwiaW5pdGlhbFwiXG5cdFx0XHRhbmltYXRlPVwic3RhbmRpbmdcIlxuXHRcdFx0Y3VzdG9tPXtvbkRpc3BsYXl9XG5cdFx0XHR2YXJpYW50cz17dmFyaWFudHN9XG5cdFx0PlxuXHRcdFx0PFNvZ3VtYVBob25lXG5cdFx0XHRcdG9uRGlzcGxheT17b25EaXNwbGF5fVxuXHRcdFx0XHRkYXJrVGhlbWU9e2RhcmtUaGVtZX1cblx0XHRcdFx0b25Tb2d1bWFDbGljaz17b25Tb2d1bWFDbGlja31cblx0XHRcdFx0c2V0T25EaXNwbGF5PXtzZXRPbkRpc3BsYXl9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdHsgb25EaXNwbGF5LnR5cGUgIT09IDIgJiYgPE1lbnVQaG9uZSBvbkRpc3BsYXk9e29uRGlzcGxheX0gIHNldE9uRGlzcGxheT17c2V0T25EaXNwbGF5fS8+fVxuXHRcdDwvbW90aW9uLmRpdj5cblx0KTtcbn1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/sogumaVxPhone.tsx\n");

/***/ })

})