webpackHotUpdate_N_E("pages/home",{

/***/ "./components/gim.tsx":
/*!****************************!*\
  !*** ./components/gim.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Gim; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme */ \"./components/theme.js\");\n\n\nvar _jsxFileName = \"/goinfre/hmhindat/portfolioo/components/gim.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\nvar gimsProps = [{\n  id: 0,\n  // needed to fix \" key for map, organize layer order \"\n  type: \"main\",\n  leftRight: 0,\n  next: 1,\n  prev: 2,\n  properties: {\n    title: \"main\",\n    size: 100,\n    posi: {\n      x: 34,\n      y: 55\n    },\n    scale: 1.8,\n    zIndex: 100\n  }\n}, {\n  id: 1,\n  type: \"next\",\n  leftRight: 1,\n  next: 3,\n  prev: 0,\n  properties: {\n    title: \"next\",\n    size: 60,\n    posi: {\n      x: 75,\n      y: 40\n    },\n    scale: 1,\n    zIndex: 10\n  }\n}, {\n  id: 2,\n  type: \"previous\",\n  leftRight: -1,\n  next: 0,\n  prev: 4,\n  properties: {\n    title: \"previous\",\n    size: 80,\n    posi: {\n      x: 15,\n      y: 12\n    },\n    scale: 0.9,\n    zIndex: 0\n  }\n}, {\n  id: 3,\n  type: \"onHold\",\n  leftRight: 1,\n  next: 4,\n  prev: 1,\n  properties: {\n    title: \"...\",\n    size: 50,\n    posi: {\n      x: 60,\n      y: 8\n    },\n    scale: 0.3,\n    zIndex: 0\n  }\n}, {\n  id: 4,\n  type: \"hidden\",\n  leftRight: -1,\n  next: 2,\n  prev: 3,\n  properties: {\n    title: \"hidden\",\n    size: 40,\n    posi: {\n      x: 40,\n      y: 9\n    },\n    scale: 0.1,\n    zIndex: 0\n  }\n}];\n\nvar getGimPropsById = function getGimPropsById(gimId) {\n  return gimsProps.filter(function (gimProps) {\n    return gimProps.id == gimId;\n  }).pop() || gimsProps[0];\n};\n\nfunction Gim(_ref) {\n  _s();\n\n  var data = _ref.data,\n      gimId = _ref.gimId,\n      direction = _ref.direction,\n      steps = _ref.steps,\n      nextPosition = _ref.nextPosition,\n      setOnDisplay = _ref.setOnDisplay,\n      onDisplay = _ref.onDisplay,\n      darkTheme = _ref.darkTheme;\n\n  var _useViewportScroll = Object(framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"useViewportScroll\"])(),\n      scrollYProgress = _useViewportScroll.scrollYProgress;\n\n  var yRange = Object(framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"useTransform\"])(scrollYProgress, [0, 0.9], [0, 1]);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(Math.random()),\n      animationDelay = _useState[0],\n      setDelay = _useState[1];\n\n  console.log(\"render gim : [\" + gimId + \"] random number : \" + animationDelay);\n  var currentGim = getGimPropsById(gimId);\n  var prevGim = direction < 0 ? getGimPropsById(currentGim.prev) : getGimPropsById(currentGim.next);\n  var nextGim = direction < 0 ? getGimPropsById(currentGim.next) : getGimPropsById(currentGim.prev);\n  var gimvariants = {\n    enter: function enter(direction) {\n      return {\n        y: 0,\n        top: \"\".concat(prevGim.properties.posi.y, \"%\"),\n        left: \"\".concat(prevGim.properties.posi.x, \"%\"),\n        scale: prevGim.properties.scale,\n        zIndex: prevGim.properties.zIndex\n      };\n    },\n    standing: {\n      y: [-10, 10],\n      top: \"\".concat(currentGim.properties.posi.y, \"%\"),\n      left: \"\".concat(currentGim.properties.posi.x, \"%\"),\n      scale: currentGim.properties.scale,\n      zIndex: direction > 0 && gimId == 2 ? 10 : currentGim.properties.zIndex,\n      transition: {\n        y: {\n          yoyo: Infinity,\n          duration: 1 // delay : animationDelay * 2\n\n        },\n        type: \"spring\",\n        duration: 1.3\n      }\n    },\n    display: {\n      // position : 'fixed',\n      y: 0,\n      top: '',\n      left: '0%',\n      bottom: '0%',\n      transition: {\n        type: \"spring\",\n        duration: 0.8\n      }\n    },\n    exit: function exit(direction) {\n      return {\n        y: 0,\n        top: \"\".concat(nextGim.properties.posi.y, \"%\"),\n        left: \"\".concat(nextGim.properties.posi.x, \"%\"),\n        scale: nextGim.properties.scale,\n        zIndex: nextGim.properties.zIndex\n      };\n    }\n  };\n  var currentData = getGimCurrenData(data, gimId, steps, direction);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"motion\"].div, {\n    className: \"absolute  flex justify-center items-center \".concat(\"h-36\" || false, \" \").concat(\"w-36\" || false, \" m-10 rounded-full \").concat(darkTheme ? _theme__WEBPACK_IMPORTED_MODULE_3__[\"theme\"].dark.gims.style : _theme__WEBPACK_IMPORTED_MODULE_3__[\"theme\"].light.gims.style),\n    variants: gimvariants,\n    initial: \"enter\",\n    animate: onDisplay.displayState && gimId == 0 ? \"display\" : \"standing\",\n    custom: direction,\n    drag: true,\n    dragConstraints: {\n      top: 0,\n      left: 0,\n      right: 0,\n      bottom: 0\n    },\n    whileHover: {\n      // scale: currentGim.properties.scale * 1.2,\n      // boxShadow: '0 0px 30px 2px rgb(255, 255, 255, 0.3)',\n      transition: {\n        duration: 0.3\n      }\n    },\n    onTap: function onTap(event, info) {\n      return gimId == 0 ? setOnDisplay(!onDisplay.displayState, fixGimsDataIndex(data, steps + 1), 0) : nextPosition(currentGim.leftRight);\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"relative flex justify-center items-center w-full h-full\",\n      children: [!darkTheme && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"absolute -top-1/4 -left-1/4 h-32 w-32 bg-white rounded-full\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 181,\n        columnNumber: 21\n      }, this), !darkTheme && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"absolute top-1/4 -right-1/4 h-16 w-16 bg-white rounded-full\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 182,\n        columnNumber: 21\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: \"absolute top-1/4 mt-4 \".concat(darkTheme ? _theme__WEBPACK_IMPORTED_MODULE_3__[\"theme\"].dark.gims.text : _theme__WEBPACK_IMPORTED_MODULE_3__[\"theme\"].light.gims.text),\n        children: currentData ? currentData.current : \"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 183,\n        columnNumber: 6\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 180,\n      columnNumber: 5\n    }, this)\n  }, steps, false, {\n    fileName: _jsxFileName,\n    lineNumber: 156,\n    columnNumber: 4\n  }, this);\n}\n\n_s(Gim, \"k+HClhlmX/H/RWMLzZCYiEYIaIc=\", false, function () {\n  return [framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"useViewportScroll\"], framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"useTransform\"]];\n});\n\n_c = Gim;\n\nfunction fixGimsDataIndex(data, steps) {\n  var fixedIndex = steps < 0 ? (data.length + steps % data.length) % data.length : steps % data.length;\n  return fixedIndex;\n}\n\nfunction getGimCurrenData(data, gimId, moveSteps, moveDirection) {\n  switch (gimId) {\n    case 0:\n      // main gim\n      return {\n        current: data[fixGimsDataIndex(data, moveSteps + 1)],\n        next: data[fixGimsDataIndex(data, moveSteps + 2)],\n        prev: data[fixGimsDataIndex(data, moveSteps)]\n      };\n\n    case 1:\n      // next gim\n      return {\n        current: data[fixGimsDataIndex(data, moveSteps + 2)],\n        next: data[fixGimsDataIndex(data, moveSteps + 3)],\n        prev: data[fixGimsDataIndex(data, moveSteps + 1)]\n      };\n\n    case 2:\n      // prev gim\n      return {\n        current: data[fixGimsDataIndex(data, moveSteps)],\n        next: data[fixGimsDataIndex(data, moveSteps - 1)],\n        prev: data[fixGimsDataIndex(data, moveSteps + 1)]\n      };\n\n    case 3:\n      // onHold gim\n      return {\n        current: data[fixGimsDataIndex(data, moveSteps + 3)],\n        next: data[fixGimsDataIndex(data, moveSteps + 4)],\n        prev: data[fixGimsDataIndex(data, moveSteps + 2)]\n      };\n\n    case 4:\n      // hidden gim\n      var updatedIndex = moveDirection < 0 ? moveSteps : moveSteps + 3;\n      return {\n        current: data[fixGimsDataIndex(data, moveSteps + 4)],\n        next: data[fixGimsDataIndex(data, moveSteps + 5)],\n        prev: data[fixGimsDataIndex(data, updatedIndex)]\n      };\n  }\n\n  return 0;\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"Gim\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9naW0udHN4P2YyYTkiXSwibmFtZXMiOlsiZ2ltc1Byb3BzIiwiaWQiLCJ0eXBlIiwibGVmdFJpZ2h0IiwibmV4dCIsInByZXYiLCJwcm9wZXJ0aWVzIiwidGl0bGUiLCJzaXplIiwicG9zaSIsIngiLCJ5Iiwic2NhbGUiLCJ6SW5kZXgiLCJnZXRHaW1Qcm9wc0J5SWQiLCJnaW1JZCIsImZpbHRlciIsImdpbVByb3BzIiwicG9wIiwiR2ltIiwiZGF0YSIsImRpcmVjdGlvbiIsInN0ZXBzIiwibmV4dFBvc2l0aW9uIiwic2V0T25EaXNwbGF5Iiwib25EaXNwbGF5IiwiZGFya1RoZW1lIiwidXNlVmlld3BvcnRTY3JvbGwiLCJzY3JvbGxZUHJvZ3Jlc3MiLCJ5UmFuZ2UiLCJ1c2VUcmFuc2Zvcm0iLCJ1c2VTdGF0ZSIsIk1hdGgiLCJyYW5kb20iLCJhbmltYXRpb25EZWxheSIsInNldERlbGF5IiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRHaW0iLCJwcmV2R2ltIiwibmV4dEdpbSIsImdpbXZhcmlhbnRzIiwiZW50ZXIiLCJ0b3AiLCJsZWZ0Iiwic3RhbmRpbmciLCJ0cmFuc2l0aW9uIiwieW95byIsIkluZmluaXR5IiwiZHVyYXRpb24iLCJkaXNwbGF5IiwiYm90dG9tIiwiZXhpdCIsImN1cnJlbnREYXRhIiwiZ2V0R2ltQ3VycmVuRGF0YSIsInRoZW1lIiwiZGFyayIsImdpbXMiLCJzdHlsZSIsImxpZ2h0IiwiZGlzcGxheVN0YXRlIiwicmlnaHQiLCJldmVudCIsImluZm8iLCJmaXhHaW1zRGF0YUluZGV4IiwidGV4dCIsImN1cnJlbnQiLCJmaXhlZEluZGV4IiwibGVuZ3RoIiwibW92ZVN0ZXBzIiwibW92ZURpcmVjdGlvbiIsInVwZGF0ZWRJbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUlBLElBQU1BLFNBQVMsR0FBRyxDQUNqQjtBQUNDQyxJQUFFLEVBQUUs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R05oRSxZQUFJLEVBQUdlLElBQUksQ0FBQzRDLGdCQUFnQixDQUFDNUMsSUFBRCxFQUFPaUQsU0FBUyxHQUFHLENBQW5CLENBQWpCO0FBSEwsT0FBUDs7QUFLRCxTQUFLLENBQUw7QUFBUTtBQUNQLGFBQU87QUFDTkgsZUFBTyxFQUFHOUMsSUFBSSxDQUFDNEMsZ0JBQWdCLENBQUM1QyxJQUFELEVBQU9pRCxTQUFTLEdBQUcsQ0FBbkIsQ0FBakIsQ0FEUjtBQUVOakUsWUFBSSxFQUFHZ0IsSUFBSSxDQUFDNEMsZ0JBQWdCLENBQUM1QyxJQUFELEVBQU9pRCxTQUFTLEdBQUcsQ0FBbkIsQ0FBakIsQ0FGTDtBQUdOaEUsWUFBSSxFQUFHZSxJQUFJLENBQUM0QyxnQkFBZ0IsQ0FBQzVDLElBQUQsRUFBT2lELFNBQVMsR0FBRyxDQUFuQixDQUFqQjtBQUhMLE9BQVA7O0FBS0QsU0FBSyxDQUFMO0FBQVE7QUFDUCxVQUFJRSxZQUFZLEdBQUlELGFBQWEsR0FBRyxDQUFqQixHQUFzQkQsU0FBdEIsR0FBa0NBLFNBQVMsR0FBRyxDQUFqRTtBQUNBLGFBQU87QUFDTkgsZUFBTyxFQUFHOUMsSUFBSSxDQUFDNEMsZ0JBQWdCLENBQUM1QyxJQUFELEVBQU9pRCxTQUFTLEdBQUcsQ0FBbkIsQ0FBakIsQ0FEUjtBQUVOakUsWUFBSSxFQUFHZ0IsSUFBSSxDQUFDNEMsZ0JBQWdCLENBQUM1QyxJQUFELEVBQU9pRCxTQUFTLEdBQUcsQ0FBbkIsQ0FBakIsQ0FGTDtBQUdOaEUsWUFBSSxFQUFHZSxJQUFJLENBQUM0QyxnQkFBZ0IsQ0FBQzVDLElBQUQsRUFBT21ELFlBQVAsQ0FBakI7QUFITCxPQUFQO0FBM0JGOztBQWlDQSxTQUFRLENBQVI7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvZ2ltLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UsIHVzZVRyYW5zZm9ybSwgdXNlVmlld3BvcnRTY3JvbGwsIHVzZU1vdGlvblZhbHVlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCB7IHdyYXAgfSBmcm9tICdwb3Btb3Rpb24nXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJy4vdGhlbWUnXG5cblxuXG5jb25zdCBnaW1zUHJvcHMgPSBbXG5cdHtcblx0XHRpZDogMCwgLy8gbmVlZGVkIHRvIGZpeCBcIiBrZXkgZm9yIG1hcCwgb3JnYW5pemUgbGF5ZXIgb3JkZXIgXCJcblx0XHR0eXBlOiBcIm1haW5cIixcblx0XHRsZWZ0UmlnaHQ6IDAsXG5cdFx0bmV4dDogMSxcblx0XHRwcmV2OiAyLFxuXHRcdHByb3BlcnRpZXM6IHtcblx0XHRcdHRpdGxlOiBcIm1haW5cIixcblx0XHRcdHNpemU6IDEwMCxcblx0XHRcdHBvc2k6IHsgeDogMzQsIHk6IDU1IH0sXG5cdFx0XHRzY2FsZTogMS44LFxuXHRcdFx0ekluZGV4OiAxMDAsXG5cdFx0fVxuXHR9LFxuXHR7XG5cdFx0aWQ6IDEsXG5cdFx0dHlwZTogXCJuZXh0XCIsXG5cdFx0bGVmdFJpZ2h0OiAxLFxuXHRcdG5leHQ6IDMsXG5cdFx0cHJldjogMCxcblx0XHRwcm9wZXJ0aWVzOiB7XG5cdFx0XHR0aXRsZTogXCJuZXh0XCIsXG5cdFx0XHRzaXplOiA2MCxcblx0XHRcdHBvc2k6IHsgeDogNzUsIHk6IDQwIH0sXG5cdFx0XHRzY2FsZTogMSxcblx0XHRcdHpJbmRleDogMTAsXG5cblx0XHR9XG5cdH0sXG5cdHtcblx0XHRpZDogMixcblx0XHR0eXBlOiBcInByZXZpb3VzXCIsXG5cdFx0bGVmdFJpZ2h0OiAtMSxcblx0XHRuZXh0OiAwLFxuXHRcdHByZXY6IDQsXG5cdFx0cHJvcGVydGllczoge1xuXHRcdFx0dGl0bGU6IFwicHJldmlvdXNcIixcblx0XHRcdHNpemU6IDgwLFxuXHRcdFx0cG9zaTogeyB4OiAxNSwgeTogMTIgfSxcblx0XHRcdHNjYWxlOiAwLjksXG5cdFx0XHR6SW5kZXg6IDAsXG5cdFx0fVxuXHR9LFxuXHR7XG5cdFx0aWQ6IDMsXG5cdFx0dHlwZTogXCJvbkhvbGRcIixcblx0XHRsZWZ0UmlnaHQ6IDEsXG5cdFx0bmV4dDogNCxcblx0XHRwcmV2OiAxLFxuXHRcdHByb3BlcnRpZXM6IHtcblx0XHRcdHRpdGxlOiBcIi4uLlwiLFxuXHRcdFx0c2l6ZTogNTAsXG5cdFx0XHRwb3NpOiB7IHg6IDYwLCB5OiA4IH0sXG5cdFx0XHRzY2FsZTogMC4zLFxuXHRcdFx0ekluZGV4OiAwLFxuXHRcdH1cblx0fVxuXHQsXG5cdHtcblx0XHRpZDogNCxcblx0XHR0eXBlOiBcImhpZGRlblwiLFxuXHRcdGxlZnRSaWdodDogLTEsXG5cdFx0bmV4dDogMixcblx0XHRwcmV2OiAzLFxuXHRcdHByb3BlcnRpZXM6IHtcblx0XHRcdHRpdGxlOiBcImhpZGRlblwiLFxuXHRcdFx0c2l6ZTogNDAsXG5cdFx0XHRwb3NpOiB7IHg6IDQwLCB5OiA5IH0sXG5cdFx0XHRzY2FsZTogMC4xLFxuXHRcdFx0ekluZGV4OiAwLFxuXHRcdH1cblx0fVxuXVxuXG5jb25zdCBnZXRHaW1Qcm9wc0J5SWQgPSAoZ2ltSWQ6IG51bWJlcikgPT4ge1xuXHRyZXR1cm4gZ2ltc1Byb3BzLmZpbHRlcigoZ2ltUHJvcHMpID0+IGdpbVByb3BzLmlkID09IGdpbUlkKS5wb3AoKSB8fCBnaW1zUHJvcHNbMF07XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHaW0oe2RhdGEsIGdpbUlkLCBkaXJlY3Rpb24sIHN0ZXBzLCBuZXh0UG9zaXRpb24sIHNldE9uRGlzcGxheSwgb25EaXNwbGF5LCBkYXJrVGhlbWUgfSkge1xuXG5cdGNvbnN0IHsgc2Nyb2xsWVByb2dyZXNzIH0gPSB1c2VWaWV3cG9ydFNjcm9sbCgpO1xuIFx0Y29uc3QgeVJhbmdlID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDAuOV0sIFswLCAxXSk7XG5cbiAgY29uc3QgW2FuaW1hdGlvbkRlbGF5LCBzZXREZWxheV0gPSB1c2VTdGF0ZShNYXRoLnJhbmRvbSgpKTtcblxuXG5cdGNvbnNvbGUubG9nKFwicmVuZGVyIGdpbSA6IFtcIiArIGdpbUlkICsgXCJdIHJhbmRvbSBudW1iZXIgOiBcIiArIGFuaW1hdGlvbkRlbGF5KTtcblxuXHRjb25zdCBjdXJyZW50R2ltID0gZ2V0R2ltUHJvcHNCeUlkKGdpbUlkKTtcblx0Y29uc3QgcHJldkdpbSA9IChkaXJlY3Rpb24gPCAwKSA/IGdldEdpbVByb3BzQnlJZChjdXJyZW50R2ltLnByZXYpIDogZ2V0R2ltUHJvcHNCeUlkKGN1cnJlbnRHaW0ubmV4dCk7XG5cdGNvbnN0IG5leHRHaW0gPSAoZGlyZWN0aW9uIDwgMCkgPyBnZXRHaW1Qcm9wc0J5SWQoY3VycmVudEdpbS5uZXh0KSA6IGdldEdpbVByb3BzQnlJZChjdXJyZW50R2ltLnByZXYpO1xuXG5cblx0Y29uc3QgZ2ltdmFyaWFudHMgPSB7XG5cdFx0ZW50ZXI6IChkaXJlY3Rpb246IG51bWJlcikgPT4ge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0eTogMCxcblx0XHRcdFx0dG9wOiBgJHtwcmV2R2ltLnByb3BlcnRpZXMucG9zaS55fSVgLFxuXHRcdFx0XHRsZWZ0OiBgJHtwcmV2R2ltLnByb3BlcnRpZXMucG9zaS54fSVgLFxuXHRcdFx0XHRzY2FsZTogcHJldkdpbS5wcm9wZXJ0aWVzLnNjYWxlLFxuXHRcdFx0XHR6SW5kZXg6IHByZXZHaW0ucHJvcGVydGllcy56SW5kZXgsXG5cdFx0XHR9O1xuXG5cdFx0fSxcblx0XHRzdGFuZGluZzoge1xuXHRcdFx0eTogWy0xMCAsIDEwXSxcblx0XHRcdHRvcDogYCR7Y3VycmVudEdpbS5wcm9wZXJ0aWVzLnBvc2kueX0lYCxcblx0XHRcdGxlZnQ6IGAke2N1cnJlbnRHaW0ucHJvcGVydGllcy5wb3NpLnh9JWAsXG5cdFx0XHRzY2FsZTogY3VycmVudEdpbS5wcm9wZXJ0aWVzLnNjYWxlLFxuXHRcdFx0ekluZGV4OiAoZGlyZWN0aW9uID4gMCAmJiBnaW1JZCA9PSAyKSA/IDEwIDogY3VycmVudEdpbS5wcm9wZXJ0aWVzLnpJbmRleCxcblx0XHRcdHRyYW5zaXRpb246IHtcblx0XHRcdFx0eToge1xuXHRcdFx0XHRcdHlveW8gOiBJbmZpbml0eSxcblx0XHRcdFx0XHRkdXJhdGlvbjogMSxcblx0XHRcdFx0XHQvLyBkZWxheSA6IGFuaW1hdGlvbkRlbGF5ICogMlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR0eXBlIDogXCJzcHJpbmdcIixcblx0XHRcdFx0ZHVyYXRpb24gOiAxLjNcblx0XHRcdH1cblx0XHR9LFxuXHRcdGRpc3BsYXkgOiB7XG5cdFx0XHQvLyBwb3NpdGlvbiA6ICdmaXhlZCcsXG5cdFx0XHRcdHkgOiAgMCxcblx0XHRcdFx0dG9wIDogJycsXG5cdFx0XHRcdGxlZnQgOiAnMCUnLFxuXHRcdFx0XHRib3R0b20gOiAnMCUnLFxuXHRcdFx0XHR0cmFuc2l0aW9uIDoge1xuXHRcdFx0XHRcdHR5cGU6IFwic3ByaW5nXCIsXG5cdFx0XHRcdFx0ZHVyYXRpb24gOiAwLjhcblx0XHRcdFx0fVxuXHRcdH0sXG5cdFx0ZXhpdDogKGRpcmVjdGlvbjogbnVtYmVyKSA9PiB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR5IDogMCxcblx0XHRcdFx0dG9wOiBgJHtuZXh0R2ltLnByb3BlcnRpZXMucG9zaS55fSVgLFxuXHRcdFx0XHRsZWZ0OiBgJHtuZXh0R2ltLnByb3BlcnRpZXMucG9zaS54fSVgLFxuXHRcdFx0XHRzY2FsZTogbmV4dEdpbS5wcm9wZXJ0aWVzLnNjYWxlLFxuXHRcdFx0XHR6SW5kZXg6ICBuZXh0R2ltLnByb3BlcnRpZXMuekluZGV4LFxuXHRcdFx0fTtcblx0XHR9XG5cdH1cblxuXHRjb25zdCBjdXJyZW50RGF0YSA9IGdldEdpbUN1cnJlbkRhdGEoZGF0YSwgZ2ltSWQsIHN0ZXBzLCBkaXJlY3Rpb24pO1xuXG5cdHJldHVybiAoXG5cdFx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0XHRjbGFzc05hbWU9e2BhYnNvbHV0ZSAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgJHtcImgtMzZcIiB8fCBcImgtNFwifSAke1widy0zNlwiIHx8IFwidy00XCJ9IG0tMTAgcm91bmRlZC1mdWxsICR7IGRhcmtUaGVtZSA/IHRoZW1lLmRhcmsuZ2ltcy5zdHlsZSA6IHRoZW1lLmxpZ2h0LmdpbXMuc3R5bGV9YH1cblx0XHRcdFx0a2V5PXtzdGVwc31cblx0XHRcdFx0dmFyaWFudHM9e2dpbXZhcmlhbnRzfVxuXHRcdFx0XHRpbml0aWFsPVwiZW50ZXJcIlxuXHRcdFx0XHRhbmltYXRlPXtvbkRpc3BsYXkuZGlzcGxheVN0YXRlICYmIGdpbUlkID09IDAgPyBcImRpc3BsYXlcIiA6IFwic3RhbmRpbmdcIn1cblx0XHRcdFx0Y3VzdG9tPXtkaXJlY3Rpb259XG5cdFx0XHRcdGRyYWdcblx0XHRcdFx0ZHJhZ0NvbnN0cmFpbnRzPXt7XG5cdFx0XHRcdFx0dG9wIDogMCxcblx0XHRcdFx0XHRsZWZ0OiAwLFxuXHRcdFx0XHRcdHJpZ2h0OiAwLFxuXHRcdFx0XHRcdGJvdHRvbTogMCxcblx0XHRcdFx0fX1cblx0XHRcdFx0d2hpbGVIb3Zlcj17e1xuXHRcdFx0XHRcdC8vIHNjYWxlOiBjdXJyZW50R2ltLnByb3BlcnRpZXMuc2NhbGUgKiAxLjIsXG5cdFx0XHRcdFx0Ly8gYm94U2hhZG93OiAnMCAwcHggMzBweCAycHggcmdiKDI1NSwgMjU1LCAyNTUsIDAuMyknLFxuXHRcdFx0XHRcdHRyYW5zaXRpb24gOntcblx0XHRcdFx0XHRcdGR1cmF0aW9uIDogMC4zLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH19XG5cdFx0XHRcdG9uVGFwPXsoZXZlbnQsIGluZm8pID0+IGdpbUlkID09IDAgPyBzZXRPbkRpc3BsYXkoIW9uRGlzcGxheS5kaXNwbGF5U3RhdGUsIGZpeEdpbXNEYXRhSW5kZXgoZGF0YSwgc3RlcHMgKyAxKSwgMCk6IG5leHRQb3NpdGlvbihjdXJyZW50R2ltLmxlZnRSaWdodCl9XG5cdFx0XHQ+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LWZ1bGwgaC1mdWxsXCIgPlxuXHRcdFx0XHRcdHshZGFya1RoZW1lICYmIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgLXRvcC0xLzQgLWxlZnQtMS80IGgtMzIgdy0zMiBiZy13aGl0ZSByb3VuZGVkLWZ1bGxcIj48L2Rpdj59XG5cdFx0XHRcdFx0eyFkYXJrVGhlbWUgJiYgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMS80IC1yaWdodC0xLzQgaC0xNiB3LTE2IGJnLXdoaXRlIHJvdW5kZWQtZnVsbFwiPjwvZGl2Pn1cblx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPXtgYWJzb2x1dGUgdG9wLTEvNCBtdC00ICR7IGRhcmtUaGVtZSA/IHRoZW1lLmRhcmsuZ2ltcy50ZXh0IDogdGhlbWUubGlnaHQuZ2ltcy50ZXh0fWB9PntjdXJyZW50RGF0YSA/IGN1cnJlbnREYXRhLmN1cnJlbnQgOiBcIlwifTwvaDE+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9tb3Rpb24uZGl2PlxuXHQpO1xufVxuXG5cblxuXG5cblxuXG5mdW5jdGlvbiBmaXhHaW1zRGF0YUluZGV4KGRhdGEsIHN0ZXBzKSB7XG5cdGxldCBmaXhlZEluZGV4ID0gc3RlcHMgPCAwID8gKChkYXRhLmxlbmd0aCkgKyAoc3RlcHMgJSBkYXRhLmxlbmd0aCkpICUgZGF0YS5sZW5ndGggIDogc3RlcHMgJSBkYXRhLmxlbmd0aDtcblx0cmV0dXJuIChmaXhlZEluZGV4KTtcbn1cblxuZnVuY3Rpb24gZ2V0R2ltQ3VycmVuRGF0YShkYXRhLCBnaW1JZCwgbW92ZVN0ZXBzLCBtb3ZlRGlyZWN0aW9uKSB7XG5cdHN3aXRjaCAoZ2ltSWQpIHtcblx0XHRjYXNlIDA6IC8vIG1haW4gZ2ltXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRjdXJyZW50IDogZGF0YVtmaXhHaW1zRGF0YUluZGV4KGRhdGEsIG1vdmVTdGVwcyArIDEpXSxcblx0XHRcdFx0bmV4dCA6IGRhdGFbZml4R2ltc0RhdGFJbmRleChkYXRhLCBtb3ZlU3RlcHMgKyAyKV0sXG5cdFx0XHRcdHByZXYgOiBkYXRhW2ZpeEdpbXNEYXRhSW5kZXgoZGF0YSwgbW92ZVN0ZXBzICldLFxuXHRcdFx0fTtcblx0XHRjYXNlIDE6IC8vIG5leHQgZ2ltXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRjdXJyZW50IDogZGF0YVtmaXhHaW1zRGF0YUluZGV4KGRhdGEsIG1vdmVTdGVwcyArIDIpXSxcblx0XHRcdFx0bmV4dCA6IGRhdGFbZml4R2ltc0RhdGFJbmRleChkYXRhLCBtb3ZlU3RlcHMgKyAzKV0sXG5cdFx0XHRcdHByZXYgOiBkYXRhW2ZpeEdpbXNEYXRhSW5kZXgoZGF0YSwgbW92ZVN0ZXBzICsgMSldLFxuXHRcdFx0fTtcblx0XHRjYXNlIDI6IC8vIHByZXYgZ2ltXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRjdXJyZW50IDogZGF0YVtmaXhHaW1zRGF0YUluZGV4KGRhdGEsIG1vdmVTdGVwcyldLFxuXHRcdFx0XHRuZXh0IDogZGF0YVtmaXhHaW1zRGF0YUluZGV4KGRhdGEsIG1vdmVTdGVwcyAtIDEpXSxcblx0XHRcdFx0cHJldiA6IGRhdGFbZml4R2ltc0RhdGFJbmRleChkYXRhLCBtb3ZlU3RlcHMgKyAxKV0sXG5cdFx0XHR9O1xuXHRcdGNhc2UgMzogLy8gb25Ib2xkIGdpbVxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Y3VycmVudCA6IGRhdGFbZml4R2ltc0RhdGFJbmRleChkYXRhLCBtb3ZlU3RlcHMgKyAzKV0sXG5cdFx0XHRcdG5leHQgOiBkYXRhW2ZpeEdpbXNEYXRhSW5kZXgoZGF0YSwgbW92ZVN0ZXBzICsgNCldLFxuXHRcdFx0XHRwcmV2IDogZGF0YVtmaXhHaW1zRGF0YUluZGV4KGRhdGEsIG1vdmVTdGVwcyArIDIpXSxcblx0XHRcdH07XG5cdFx0Y2FzZSA0OiAvLyBoaWRkZW4gZ2ltXG5cdFx0XHRsZXQgdXBkYXRlZEluZGV4ID0gKG1vdmVEaXJlY3Rpb24gPCAwKSA/IG1vdmVTdGVwcyA6IG1vdmVTdGVwcyArIDM7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRjdXJyZW50IDogZGF0YVtmaXhHaW1zRGF0YUluZGV4KGRhdGEsIG1vdmVTdGVwcyArIDQpXSxcblx0XHRcdFx0bmV4dCA6IGRhdGFbZml4R2ltc0RhdGFJbmRleChkYXRhLCBtb3ZlU3RlcHMgKyA1KV0sXG5cdFx0XHRcdHByZXYgOiBkYXRhW2ZpeEdpbXNEYXRhSW5kZXgoZGF0YSwgdXBkYXRlZEluZGV4KV0sXG5cdFx0XHR9O1xuXHRcdH1cblx0cmV0dXJuICgwKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/gim.tsx\n");

/***/ })

})