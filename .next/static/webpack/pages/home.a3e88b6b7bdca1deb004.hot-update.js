webpackHotUpdate_N_E("pages/home",{

/***/ "./components/gim.tsx":
/*!****************************!*\
  !*** ./components/gim.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Gim; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme */ \"./components/theme.js\");\n\n\nvar _jsxFileName = \"/goinfre/hmhindat/portfolioo/components/gim.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\nvar gimsProps = [{\n  id: 0,\n  // needed to fix \" key for map, organize layer order \"\n  type: \"main\",\n  leftRight: 0,\n  next: 1,\n  prev: 2,\n  properties: {\n    title: \"main\",\n    size: 100,\n    posi: {\n      x: 34,\n      y: 55\n    },\n    scale: 1.8,\n    zIndex: 50\n  }\n}, {\n  id: 1,\n  type: \"next\",\n  leftRight: 1,\n  next: 3,\n  prev: 0,\n  properties: {\n    title: \"next\",\n    size: 60,\n    posi: {\n      x: 75,\n      y: 40\n    },\n    scale: 1,\n    zIndex: 10\n  }\n}, {\n  id: 2,\n  type: \"previous\",\n  leftRight: -1,\n  next: 0,\n  prev: 4,\n  properties: {\n    title: \"previous\",\n    size: 80,\n    posi: {\n      x: 15,\n      y: 12\n    },\n    scale: 0.9,\n    zIndex: 0\n  }\n}, {\n  id: 3,\n  type: \"onHold\",\n  leftRight: 1,\n  next: 4,\n  prev: 1,\n  properties: {\n    title: \"...\",\n    size: 50,\n    posi: {\n      x: 60,\n      y: 8\n    },\n    scale: 0.3,\n    zIndex: 0\n  }\n}, {\n  id: 4,\n  type: \"hidden\",\n  leftRight: -1,\n  next: 2,\n  prev: 3,\n  properties: {\n    title: \"hidden\",\n    size: 40,\n    posi: {\n      x: 40,\n      y: 9\n    },\n    scale: 0.1,\n    zIndex: 0\n  }\n}];\n\nvar getGimPropsById = function getGimPropsById(gimId) {\n  return gimsProps.filter(function (gimProps) {\n    return gimProps.id == gimId;\n  }).pop() || gimsProps[0];\n};\n\nfunction Gim(_ref) {\n  _s();\n\n  var data = _ref.data,\n      gimId = _ref.gimId,\n      direction = _ref.direction,\n      steps = _ref.steps,\n      nextPosition = _ref.nextPosition,\n      setOnDisplay = _ref.setOnDisplay,\n      onDisplay = _ref.onDisplay,\n      darkTheme = _ref.darkTheme;\n\n  var _useViewportScroll = Object(framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"useViewportScroll\"])(),\n      scrollYProgress = _useViewportScroll.scrollYProgress;\n\n  var yRange = Object(framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"useTransform\"])(scrollYProgress, [0, 0.9], [0, 1]);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(Math.random()),\n      animationDelay = _useState[0],\n      setDelay = _useState[1];\n\n  console.log(\"render gim : [\" + gimId + \"] random number : \" + animationDelay);\n  var currentGim = getGimPropsById(gimId);\n  var prevGim = direction < 0 ? getGimPropsById(currentGim.prev) : getGimPropsById(currentGim.next);\n  var nextGim = direction < 0 ? getGimPropsById(currentGim.next) : getGimPropsById(currentGim.prev);\n  var gimvariants = {\n    enter: function enter(direction) {\n      return {\n        y: 0,\n        top: \"\".concat(prevGim.properties.posi.y, \"%\"),\n        left: \"\".concat(prevGim.properties.posi.x, \"%\"),\n        scale: prevGim.properties.scale,\n        zIndex: onDisplay.displayState ? -10 : prevGim.properties.zIndex\n      };\n    },\n    standing: {\n      y: [-10, 10],\n      top: \"\".concat(currentGim.properties.posi.y, \"%\"),\n      left: \"\".concat(currentGim.properties.posi.x, \"%\"),\n      scale: currentGim.properties.scale,\n      zIndex: direction > 0 && gimId == 2 ? -10 : currentGim.properties.zIndex,\n      transition: {\n        y: {\n          yoyo: Infinity,\n          duration: 1 // delay : animationDelay * 2\n\n        },\n        type: \"spring\",\n        duration: 1.3\n      }\n    },\n    display: {\n      // position : 'fixed',\n      y: 0,\n      top: '',\n      left: '0%',\n      bottom: '0%',\n      transition: {\n        type: \"spring\",\n        duration: 0.8\n      }\n    },\n    exit: function exit(direction) {\n      return {\n        y: 0,\n        top: \"\".concat(nextGim.properties.posi.y, \"%\"),\n        left: \"\".concat(nextGim.properties.posi.x, \"%\"),\n        scale: nextGim.properties.scale,\n        zIndex: nextGim.properties.zIndex\n      };\n    }\n  };\n  var currentData = getGimCurrenData(data, gimId, steps, direction);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"motion\"].div, {\n    className: \"absolute  flex justify-center items-center \".concat(\"h-36\" || false, \" \").concat(\"w-36\" || false, \" m-10 rounded-full \").concat(darkTheme ? _theme__WEBPACK_IMPORTED_MODULE_3__[\"theme\"].dark.gims.style : _theme__WEBPACK_IMPORTED_MODULE_3__[\"theme\"].light.gims.style),\n    variants: gimvariants,\n    initial: \"enter\",\n    animate: onDisplay.displayState && gimId == 0 ? \"display\" : \"standing\",\n    custom: direction,\n    drag: true,\n    dragConstraints: {\n      top: 0,\n      left: 0,\n      right: 0,\n      bottom: 0\n    },\n    whileHover: {\n      // scale: currentGim.properties.scale * 1.2,\n      // boxShadow: '0 0px 30px 2px rgb(255, 255, 255, 0.3)',\n      transition: {\n        duration: 0.3\n      }\n    },\n    onMouseUp: function onMouseUp() {\n      return gimId == 0 ? setOnDisplay(!onDisplay.displayState, fixGimsDataIndex(data, steps + 1), 0) : nextPosition(currentGim.leftRight);\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"relative flex justify-center items-center w-full h-full\",\n      children: [!darkTheme && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"absolute -top-1/4 -left-1/4 h-32 w-32 bg-white rounded-full\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 181,\n        columnNumber: 21\n      }, this), !darkTheme && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"absolute top-1/4 -right-1/4 h-16 w-16 bg-white rounded-full\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 182,\n        columnNumber: 21\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: \"absolute top-1/4 mt-4 \".concat(darkTheme ? _theme__WEBPACK_IMPORTED_MODULE_3__[\"theme\"].dark.gims.text : _theme__WEBPACK_IMPORTED_MODULE_3__[\"theme\"].light.gims.text),\n        children: currentData ? currentData.current : \"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 183,\n        columnNumber: 6\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 180,\n      columnNumber: 5\n    }, this)\n  }, steps, false, {\n    fileName: _jsxFileName,\n    lineNumber: 156,\n    columnNumber: 4\n  }, this);\n}\n\n_s(Gim, \"k+HClhlmX/H/RWMLzZCYiEYIaIc=\", false, function () {\n  return [framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"useViewportScroll\"], framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"useTransform\"]];\n});\n\n_c = Gim;\n\nfunction fixGimsDataIndex(data, steps) {\n  var fixedIndex = steps < 0 ? (data.length + steps % data.length) % data.length : steps % data.length;\n  return fixedIndex;\n}\n\nfunction getGimCurrenData(data, gimId, moveSteps, moveDirection) {\n  switch (gimId) {\n    case 0:\n      // main gim\n      return {\n        current: data[fixGimsDataIndex(data, moveSteps + 1)],\n        next: data[fixGimsDataIndex(data, moveSteps + 2)],\n        prev: data[fixGimsDataIndex(data, moveSteps)]\n      };\n\n    case 1:\n      // next gim\n      return {\n        current: data[fixGimsDataIndex(data, moveSteps + 2)],\n        next: data[fixGimsDataIndex(data, moveSteps + 3)],\n        prev: data[fixGimsDataIndex(data, moveSteps + 1)]\n      };\n\n    case 2:\n      // prev gim\n      return {\n        current: data[fixGimsDataIndex(data, moveSteps)],\n        next: data[fixGimsDataIndex(data, moveSteps - 1)],\n        prev: data[fixGimsDataIndex(data, moveSteps + 1)]\n      };\n\n    case 3:\n      // onHold gim\n      return {\n        current: data[fixGimsDataIndex(data, moveSteps + 3)],\n        next: data[fixGimsDataIndex(data, moveSteps + 4)],\n        prev: data[fixGimsDataIndex(data, moveSteps + 2)]\n      };\n\n    case 4:\n      // hidden gim\n      var updatedIndex = moveDirection < 0 ? moveSteps : moveSteps + 3;\n      return {\n        current: data[fixGimsDataIndex(data, moveSteps + 4)],\n        next: data[fixGimsDataIndex(data, moveSteps + 5)],\n        prev: data[fixGimsDataIndex(data, updatedIndex)]\n      };\n  }\n\n  return 0;\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"Gim\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9naW0udHN4P2YyYTkiXSwibmFtZXMiOlsiZ2ltc1Byb3BzIiwiaWQiLCJ0eXBlIiwibGVmdFJpZ2h0IiwibmV4dCIsInByZXYiLCJwcm9wZXJ0aWVzIiwidGl0bGUiLCJzaXplIiwicG9zaSIsIngiLCJ5Iiwic2NhbGUiLCJ6SW5kZXgiLCJnZXRHaW1Qcm9wc0J5SWQiLCJnaW1JZCIsImZpbHRlciIsImdpbVByb3BzIiwicG9wIiwiR2ltIiwiZGF0YSIsImRpcmVjdGlvbiIsInN0ZXBzIiwibmV4dFBvc2l0aW9uIiwic2V0T25EaXNwbGF5Iiwib25EaXNwbGF5IiwiZGFya1RoZW1lIiwidXNlVmlld3BvcnRTY3JvbGwiLCJzY3JvbGxZUHJvZ3Jlc3MiLCJ5UmFuZ2UiLCJ1c2VUcmFuc2Zvcm0iLCJ1c2VTdGF0ZSIsIk1hdGgiLCJyYW5kb20iLCJhbmltYXRpb25EZWxheSIsInNldERlbGF5IiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRHaW0iLCJwcmV2R2ltIiwibmV4dEdpbSIsImdpbXZhcmlhbnRzIiwiZW50ZXIiLCJ0b3AiLCJsZWZ0IiwiZGlzcGxheVN0YXRlIiwic3RhbmRpbmciLCJ0cmFuc2l0aW9uIiwieW95byIsIkluZmluaXR5IiwiZHVyYXRpb24iLCJkaXNwbGF5IiwiYm90dG9tIiwiZXhpdCIsImN1cnJlbnREYXRhIiwiZ2V0R2ltQ3VycmVuRGF0YSIsInRoZW1lIiwiZGFyayIsImdpbXMiLCJzdHlsZSIsImxpZ2h0IiwicmlnaHQiLCJmaXhHaW1zRGF0YUluZGV4IiwidGV4dCIsImN1cnJlbnQiLCJmaXhlZEluZGV4IiwibGVuZ3RoIiwibW92ZVN0ZXBzIiwibW92ZURpcmVjdGlvbiIsInVwZGF0ZWRJbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUlBLElBQU1BLFNBQVMsR0FBRyxDQUNqQjtBQUNDQyxJQUFFLEVBQUUsQ0FETDtBQUNRO0FBQ1BD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LENBRkw7QUFHTjlELFlBQUksRUFBR2UsSUFBSSxDQUFDMEMsZ0JBQWdCLENBQUMxQyxJQUFELEVBQU8rQyxTQUFTLEdBQUcsQ0FBbkIsQ0FBakI7QUFITCxPQUFQOztBQUtELFNBQUssQ0FBTDtBQUFRO0FBQ1AsYUFBTztBQUNOSCxlQUFPLEVBQUc1QyxJQUFJLENBQUMwQyxnQkFBZ0IsQ0FBQzFDLElBQUQsRUFBTytDLFNBQVMsR0FBRyxDQUFuQixDQUFqQixDQURSO0FBRU4vRCxZQUFJLEVBQUdnQixJQUFJLENBQUMwQyxnQkFBZ0IsQ0FBQzFDLElBQUQsRUFBTytDLFNBQVMsR0FBRyxDQUFuQixDQUFqQixDQUZMO0FBR045RCxZQUFJLEVBQUdlLElBQUksQ0FBQzBDLGdCQUFnQixDQUFDMUMsSUFBRCxFQUFPK0MsU0FBUyxHQUFHLENBQW5CLENBQWpCO0FBSEwsT0FBUDs7QUFLRCxTQUFLLENBQUw7QUFBUTtBQUNQLFVBQUlFLFlBQVksR0FBSUQsYUFBYSxHQUFHLENBQWpCLEdBQXNCRCxTQUF0QixHQUFrQ0EsU0FBUyxHQUFHLENBQWpFO0FBQ0EsYUFBTztBQUNOSCxlQUFPLEVBQUc1QyxJQUFJLENBQUMwQyxnQkFBZ0IsQ0FBQzFDLElBQUQsRUFBTytDLFNBQVMsR0FBRyxDQUFuQixDQUFqQixDQURSO0FBRU4vRCxZQUFJLEVBQUdnQixJQUFJLENBQUMwQyxnQkFBZ0IsQ0FBQzFDLElBQUQsRUFBTytDLFNBQVMsR0FBRyxDQUFuQixDQUFqQixDQUZMO0FBR045RCxZQUFJLEVBQUdlLElBQUksQ0FBQzBDLGdCQUFnQixDQUFDMUMsSUFBRCxFQUFPaUQsWUFBUCxDQUFqQjtBQUhMLE9BQVA7QUEzQkY7O0FBaUNBLFNBQVEsQ0FBUjtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9naW0udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtb3Rpb24sIEFuaW1hdGVQcmVzZW5jZSwgdXNlVHJhbnNmb3JtLCB1c2VWaWV3cG9ydFNjcm9sbCwgdXNlTW90aW9uVmFsdWUgfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IHsgd3JhcCB9IGZyb20gJ3BvcG1vdGlvbidcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi90aGVtZSdcblxuXG5cbmNvbnN0IGdpbXNQcm9wcyA9IFtcblx0e1xuXHRcdGlkOiAwLCAvLyBuZWVkZWQgdG8gZml4IFwiIGtleSBmb3IgbWFwLCBvcmdhbml6ZSBsYXllciBvcmRlciBcIlxuXHRcdHR5cGU6IFwibWFpblwiLFxuXHRcdGxlZnRSaWdodDogMCxcblx0XHRuZXh0OiAxLFxuXHRcdHByZXY6IDIsXG5cdFx0cHJvcGVydGllczoge1xuXHRcdFx0dGl0bGU6IFwibWFpblwiLFxuXHRcdFx0c2l6ZTogMTAwLFxuXHRcdFx0cG9zaTogeyB4OiAzNCwgeTogNTUgfSxcblx0XHRcdHNjYWxlOiAxLjgsXG5cdFx0XHR6SW5kZXg6IDUwLFxuXHRcdH1cblx0fSxcblx0e1xuXHRcdGlkOiAxLFxuXHRcdHR5cGU6IFwibmV4dFwiLFxuXHRcdGxlZnRSaWdodDogMSxcblx0XHRuZXh0OiAzLFxuXHRcdHByZXY6IDAsXG5cdFx0cHJvcGVydGllczoge1xuXHRcdFx0dGl0bGU6IFwibmV4dFwiLFxuXHRcdFx0c2l6ZTogNjAsXG5cdFx0XHRwb3NpOiB7IHg6IDc1LCB5OiA0MCB9LFxuXHRcdFx0c2NhbGU6IDEsXG5cdFx0XHR6SW5kZXg6IDEwLFxuXG5cdFx0fVxuXHR9LFxuXHR7XG5cdFx0aWQ6IDIsXG5cdFx0dHlwZTogXCJwcmV2aW91c1wiLFxuXHRcdGxlZnRSaWdodDogLTEsXG5cdFx0bmV4dDogMCxcblx0XHRwcmV2OiA0LFxuXHRcdHByb3BlcnRpZXM6IHtcblx0XHRcdHRpdGxlOiBcInByZXZpb3VzXCIsXG5cdFx0XHRzaXplOiA4MCxcblx0XHRcdHBvc2k6IHsgeDogMTUsIHk6IDEyIH0sXG5cdFx0XHRzY2FsZTogMC45LFxuXHRcdFx0ekluZGV4OiAwLFxuXHRcdH1cblx0fSxcblx0e1xuXHRcdGlkOiAzLFxuXHRcdHR5cGU6IFwib25Ib2xkXCIsXG5cdFx0bGVmdFJpZ2h0OiAxLFxuXHRcdG5leHQ6IDQsXG5cdFx0cHJldjogMSxcblx0XHRwcm9wZXJ0aWVzOiB7XG5cdFx0XHR0aXRsZTogXCIuLi5cIixcblx0XHRcdHNpemU6IDUwLFxuXHRcdFx0cG9zaTogeyB4OiA2MCwgeTogOCB9LFxuXHRcdFx0c2NhbGU6IDAuMyxcblx0XHRcdHpJbmRleDogMCxcblx0XHR9XG5cdH1cblx0LFxuXHR7XG5cdFx0aWQ6IDQsXG5cdFx0dHlwZTogXCJoaWRkZW5cIixcblx0XHRsZWZ0UmlnaHQ6IC0xLFxuXHRcdG5leHQ6IDIsXG5cdFx0cHJldjogMyxcblx0XHRwcm9wZXJ0aWVzOiB7XG5cdFx0XHR0aXRsZTogXCJoaWRkZW5cIixcblx0XHRcdHNpemU6IDQwLFxuXHRcdFx0cG9zaTogeyB4OiA0MCwgeTogOSB9LFxuXHRcdFx0c2NhbGU6IDAuMSxcblx0XHRcdHpJbmRleDogMCxcblx0XHR9XG5cdH1cbl1cblxuY29uc3QgZ2V0R2ltUHJvcHNCeUlkID0gKGdpbUlkOiBudW1iZXIpID0+IHtcblx0cmV0dXJuIGdpbXNQcm9wcy5maWx0ZXIoKGdpbVByb3BzKSA9PiBnaW1Qcm9wcy5pZCA9PSBnaW1JZCkucG9wKCkgfHwgZ2ltc1Byb3BzWzBdO1xufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2ltKHtkYXRhLCBnaW1JZCwgZGlyZWN0aW9uLCBzdGVwcywgbmV4dFBvc2l0aW9uLCBzZXRPbkRpc3BsYXksIG9uRGlzcGxheSwgZGFya1RoZW1lIH0pIHtcblxuXHRjb25zdCB7IHNjcm9sbFlQcm9ncmVzcyB9ID0gdXNlVmlld3BvcnRTY3JvbGwoKTtcbiBcdGNvbnN0IHlSYW5nZSA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAwLjldLCBbMCwgMV0pO1xuXG4gIGNvbnN0IFthbmltYXRpb25EZWxheSwgc2V0RGVsYXldID0gdXNlU3RhdGUoTWF0aC5yYW5kb20oKSk7XG5cblxuXHRjb25zb2xlLmxvZyhcInJlbmRlciBnaW0gOiBbXCIgKyBnaW1JZCArIFwiXSByYW5kb20gbnVtYmVyIDogXCIgKyBhbmltYXRpb25EZWxheSk7XG5cblx0Y29uc3QgY3VycmVudEdpbSA9IGdldEdpbVByb3BzQnlJZChnaW1JZCk7XG5cdGNvbnN0IHByZXZHaW0gPSAoZGlyZWN0aW9uIDwgMCkgPyBnZXRHaW1Qcm9wc0J5SWQoY3VycmVudEdpbS5wcmV2KSA6IGdldEdpbVByb3BzQnlJZChjdXJyZW50R2ltLm5leHQpO1xuXHRjb25zdCBuZXh0R2ltID0gKGRpcmVjdGlvbiA8IDApID8gZ2V0R2ltUHJvcHNCeUlkKGN1cnJlbnRHaW0ubmV4dCkgOiBnZXRHaW1Qcm9wc0J5SWQoY3VycmVudEdpbS5wcmV2KTtcblxuXG5cdGNvbnN0IGdpbXZhcmlhbnRzID0ge1xuXHRcdGVudGVyOiAoZGlyZWN0aW9uOiBudW1iZXIpID0+IHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHk6IDAsXG5cdFx0XHRcdHRvcDogYCR7cHJldkdpbS5wcm9wZXJ0aWVzLnBvc2kueX0lYCxcblx0XHRcdFx0bGVmdDogYCR7cHJldkdpbS5wcm9wZXJ0aWVzLnBvc2kueH0lYCxcblx0XHRcdFx0c2NhbGU6IHByZXZHaW0ucHJvcGVydGllcy5zY2FsZSxcblx0XHRcdFx0ekluZGV4OiBvbkRpc3BsYXkuZGlzcGxheVN0YXRlID8gLTEwIDogcHJldkdpbS5wcm9wZXJ0aWVzLnpJbmRleCxcblx0XHRcdH07XG5cblx0XHR9LFxuXHRcdHN0YW5kaW5nOiB7XG5cdFx0XHR5OiBbLTEwICwgMTBdLFxuXHRcdFx0dG9wOiBgJHtjdXJyZW50R2ltLnByb3BlcnRpZXMucG9zaS55fSVgLFxuXHRcdFx0bGVmdDogYCR7Y3VycmVudEdpbS5wcm9wZXJ0aWVzLnBvc2kueH0lYCxcblx0XHRcdHNjYWxlOiBjdXJyZW50R2ltLnByb3BlcnRpZXMuc2NhbGUsXG5cdFx0XHR6SW5kZXg6IChkaXJlY3Rpb24gPiAwICYmIGdpbUlkID09IDIpID8gLTEwIDogY3VycmVudEdpbS5wcm9wZXJ0aWVzLnpJbmRleCxcblx0XHRcdHRyYW5zaXRpb246IHtcblx0XHRcdFx0eToge1xuXHRcdFx0XHRcdHlveW8gOiBJbmZpbml0eSxcblx0XHRcdFx0XHRkdXJhdGlvbjogMSxcblx0XHRcdFx0XHQvLyBkZWxheSA6IGFuaW1hdGlvbkRlbGF5ICogMlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR0eXBlIDogXCJzcHJpbmdcIixcblx0XHRcdFx0ZHVyYXRpb24gOiAxLjNcblx0XHRcdH1cblx0XHR9LFxuXHRcdGRpc3BsYXkgOiB7XG5cdFx0XHQvLyBwb3NpdGlvbiA6ICdmaXhlZCcsXG5cdFx0XHRcdHkgOiAgMCxcblx0XHRcdFx0dG9wIDogJycsXG5cdFx0XHRcdGxlZnQgOiAnMCUnLFxuXHRcdFx0XHRib3R0b20gOiAnMCUnLFxuXHRcdFx0XHR0cmFuc2l0aW9uIDoge1xuXHRcdFx0XHRcdHR5cGU6IFwic3ByaW5nXCIsXG5cdFx0XHRcdFx0ZHVyYXRpb24gOiAwLjhcblx0XHRcdFx0fVxuXHRcdH0sXG5cdFx0ZXhpdDogKGRpcmVjdGlvbjogbnVtYmVyKSA9PiB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR5IDogMCxcblx0XHRcdFx0dG9wOiBgJHtuZXh0R2ltLnByb3BlcnRpZXMucG9zaS55fSVgLFxuXHRcdFx0XHRsZWZ0OiBgJHtuZXh0R2ltLnByb3BlcnRpZXMucG9zaS54fSVgLFxuXHRcdFx0XHRzY2FsZTogbmV4dEdpbS5wcm9wZXJ0aWVzLnNjYWxlLFxuXHRcdFx0XHR6SW5kZXg6ICBuZXh0R2ltLnByb3BlcnRpZXMuekluZGV4LFxuXHRcdFx0fTtcblx0XHR9XG5cdH1cblxuXHRjb25zdCBjdXJyZW50RGF0YSA9IGdldEdpbUN1cnJlbkRhdGEoZGF0YSwgZ2ltSWQsIHN0ZXBzLCBkaXJlY3Rpb24pO1xuXG5cdHJldHVybiAoXG5cdFx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0XHRjbGFzc05hbWU9e2BhYnNvbHV0ZSAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgJHtcImgtMzZcIiB8fCBcImgtNFwifSAke1widy0zNlwiIHx8IFwidy00XCJ9IG0tMTAgcm91bmRlZC1mdWxsICR7IGRhcmtUaGVtZSA/IHRoZW1lLmRhcmsuZ2ltcy5zdHlsZSA6IHRoZW1lLmxpZ2h0LmdpbXMuc3R5bGV9YH1cblx0XHRcdFx0a2V5PXtzdGVwc31cblx0XHRcdFx0dmFyaWFudHM9e2dpbXZhcmlhbnRzfVxuXHRcdFx0XHRpbml0aWFsPVwiZW50ZXJcIlxuXHRcdFx0XHRhbmltYXRlPXtvbkRpc3BsYXkuZGlzcGxheVN0YXRlICYmIGdpbUlkID09IDAgPyBcImRpc3BsYXlcIiA6IFwic3RhbmRpbmdcIn1cblx0XHRcdFx0Y3VzdG9tPXtkaXJlY3Rpb259XG5cdFx0XHRcdGRyYWdcblx0XHRcdFx0ZHJhZ0NvbnN0cmFpbnRzPXt7XG5cdFx0XHRcdFx0dG9wIDogMCxcblx0XHRcdFx0XHRsZWZ0OiAwLFxuXHRcdFx0XHRcdHJpZ2h0OiAwLFxuXHRcdFx0XHRcdGJvdHRvbTogMCxcblx0XHRcdFx0fX1cblx0XHRcdFx0d2hpbGVIb3Zlcj17e1xuXHRcdFx0XHRcdC8vIHNjYWxlOiBjdXJyZW50R2ltLnByb3BlcnRpZXMuc2NhbGUgKiAxLjIsXG5cdFx0XHRcdFx0Ly8gYm94U2hhZG93OiAnMCAwcHggMzBweCAycHggcmdiKDI1NSwgMjU1LCAyNTUsIDAuMyknLFxuXHRcdFx0XHRcdHRyYW5zaXRpb24gOntcblx0XHRcdFx0XHRcdGR1cmF0aW9uIDogMC4zLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH19XG5cdFx0XHRcdG9uTW91c2VVcD17KCkgPT4gZ2ltSWQgPT0gMCA/IHNldE9uRGlzcGxheSghb25EaXNwbGF5LmRpc3BsYXlTdGF0ZSwgZml4R2ltc0RhdGFJbmRleChkYXRhLCBzdGVwcyArIDEpLCAwKTogbmV4dFBvc2l0aW9uKGN1cnJlbnRHaW0ubGVmdFJpZ2h0KX1cblx0XHRcdD5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctZnVsbCBoLWZ1bGxcIiA+XG5cdFx0XHRcdFx0eyFkYXJrVGhlbWUgJiYgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtdG9wLTEvNCAtbGVmdC0xLzQgaC0zMiB3LTMyIGJnLXdoaXRlIHJvdW5kZWQtZnVsbFwiPjwvZGl2Pn1cblx0XHRcdFx0XHR7IWRhcmtUaGVtZSAmJiA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0xLzQgLXJpZ2h0LTEvNCBoLTE2IHctMTYgYmctd2hpdGUgcm91bmRlZC1mdWxsXCI+PC9kaXY+fVxuXHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9e2BhYnNvbHV0ZSB0b3AtMS80IG10LTQgJHsgZGFya1RoZW1lID8gdGhlbWUuZGFyay5naW1zLnRleHQgOiB0aGVtZS5saWdodC5naW1zLnRleHR9YH0+e2N1cnJlbnREYXRhID8gY3VycmVudERhdGEuY3VycmVudCA6IFwiXCJ9PC9oMT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L21vdGlvbi5kaXY+XG5cdCk7XG59XG5cblxuXG5cblxuXG5cbmZ1bmN0aW9uIGZpeEdpbXNEYXRhSW5kZXgoZGF0YSwgc3RlcHMpIHtcblx0bGV0IGZpeGVkSW5kZXggPSBzdGVwcyA8IDAgPyAoKGRhdGEubGVuZ3RoKSArIChzdGVwcyAlIGRhdGEubGVuZ3RoKSkgJSBkYXRhLmxlbmd0aCAgOiBzdGVwcyAlIGRhdGEubGVuZ3RoO1xuXHRyZXR1cm4gKGZpeGVkSW5kZXgpO1xufVxuXG5mdW5jdGlvbiBnZXRHaW1DdXJyZW5EYXRhKGRhdGEsIGdpbUlkLCBtb3ZlU3RlcHMsIG1vdmVEaXJlY3Rpb24pIHtcblx0c3dpdGNoIChnaW1JZCkge1xuXHRcdGNhc2UgMDogLy8gbWFpbiBnaW1cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGN1cnJlbnQgOiBkYXRhW2ZpeEdpbXNEYXRhSW5kZXgoZGF0YSwgbW92ZVN0ZXBzICsgMSldLFxuXHRcdFx0XHRuZXh0IDogZGF0YVtmaXhHaW1zRGF0YUluZGV4KGRhdGEsIG1vdmVTdGVwcyArIDIpXSxcblx0XHRcdFx0cHJldiA6IGRhdGFbZml4R2ltc0RhdGFJbmRleChkYXRhLCBtb3ZlU3RlcHMgKV0sXG5cdFx0XHR9O1xuXHRcdGNhc2UgMTogLy8gbmV4dCBnaW1cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGN1cnJlbnQgOiBkYXRhW2ZpeEdpbXNEYXRhSW5kZXgoZGF0YSwgbW92ZVN0ZXBzICsgMildLFxuXHRcdFx0XHRuZXh0IDogZGF0YVtmaXhHaW1zRGF0YUluZGV4KGRhdGEsIG1vdmVTdGVwcyArIDMpXSxcblx0XHRcdFx0cHJldiA6IGRhdGFbZml4R2ltc0RhdGFJbmRleChkYXRhLCBtb3ZlU3RlcHMgKyAxKV0sXG5cdFx0XHR9O1xuXHRcdGNhc2UgMjogLy8gcHJldiBnaW1cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGN1cnJlbnQgOiBkYXRhW2ZpeEdpbXNEYXRhSW5kZXgoZGF0YSwgbW92ZVN0ZXBzKV0sXG5cdFx0XHRcdG5leHQgOiBkYXRhW2ZpeEdpbXNEYXRhSW5kZXgoZGF0YSwgbW92ZVN0ZXBzIC0gMSldLFxuXHRcdFx0XHRwcmV2IDogZGF0YVtmaXhHaW1zRGF0YUluZGV4KGRhdGEsIG1vdmVTdGVwcyArIDEpXSxcblx0XHRcdH07XG5cdFx0Y2FzZSAzOiAvLyBvbkhvbGQgZ2ltXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRjdXJyZW50IDogZGF0YVtmaXhHaW1zRGF0YUluZGV4KGRhdGEsIG1vdmVTdGVwcyArIDMpXSxcblx0XHRcdFx0bmV4dCA6IGRhdGFbZml4R2ltc0RhdGFJbmRleChkYXRhLCBtb3ZlU3RlcHMgKyA0KV0sXG5cdFx0XHRcdHByZXYgOiBkYXRhW2ZpeEdpbXNEYXRhSW5kZXgoZGF0YSwgbW92ZVN0ZXBzICsgMildLFxuXHRcdFx0fTtcblx0XHRjYXNlIDQ6IC8vIGhpZGRlbiBnaW1cblx0XHRcdGxldCB1cGRhdGVkSW5kZXggPSAobW92ZURpcmVjdGlvbiA8IDApID8gbW92ZVN0ZXBzIDogbW92ZVN0ZXBzICsgMztcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGN1cnJlbnQgOiBkYXRhW2ZpeEdpbXNEYXRhSW5kZXgoZGF0YSwgbW92ZVN0ZXBzICsgNCldLFxuXHRcdFx0XHRuZXh0IDogZGF0YVtmaXhHaW1zRGF0YUluZGV4KGRhdGEsIG1vdmVTdGVwcyArIDUpXSxcblx0XHRcdFx0cHJldiA6IGRhdGFbZml4R2ltc0RhdGFJbmRleChkYXRhLCB1cGRhdGVkSW5kZXgpXSxcblx0XHRcdH07XG5cdFx0fVxuXHRyZXR1cm4gKDApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/gim.tsx\n");

/***/ })

})