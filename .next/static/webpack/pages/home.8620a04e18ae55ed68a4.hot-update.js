webpackHotUpdate_N_E("pages/home",{

/***/ "./components/gim.tsx":
/*!****************************!*\
  !*** ./components/gim.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Gim; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme */ \"./components/theme.js\");\n\n\nvar _jsxFileName = \"/goinfre/hmhindat/portfolioo/components/gim.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\nvar gimsProps = [{\n  id: 0,\n  // needed to fix \" key for map, organize layer order \"\n  type: \"main\",\n  leftRight: 0,\n  next: 1,\n  prev: 2,\n  properties: {\n    title: \"main\",\n    size: 100,\n    posi: {\n      x: 34,\n      y: 55\n    },\n    scale: 1.8,\n    zIndex: 50\n  }\n}, {\n  id: 1,\n  type: \"next\",\n  leftRight: 1,\n  next: 3,\n  prev: 0,\n  properties: {\n    title: \"next\",\n    size: 60,\n    posi: {\n      x: 75,\n      y: 40\n    },\n    scale: 1,\n    zIndex: 10\n  }\n}, {\n  id: 2,\n  type: \"previous\",\n  leftRight: -1,\n  next: 0,\n  prev: 4,\n  properties: {\n    title: \"previous\",\n    size: 80,\n    posi: {\n      x: 15,\n      y: 12\n    },\n    scale: 0.9,\n    zIndex: 0\n  }\n}, {\n  id: 3,\n  type: \"onHold\",\n  leftRight: 1,\n  next: 4,\n  prev: 1,\n  properties: {\n    title: \"...\",\n    size: 50,\n    posi: {\n      x: 60,\n      y: 8\n    },\n    scale: 0.3,\n    zIndex: 0\n  }\n}, {\n  id: 4,\n  type: \"hidden\",\n  leftRight: -1,\n  next: 2,\n  prev: 3,\n  properties: {\n    title: \"hidden\",\n    size: 40,\n    posi: {\n      x: 40,\n      y: 9\n    },\n    scale: 0.1,\n    zIndex: 0\n  }\n}];\n\nvar getGimPropsById = function getGimPropsById(gimId) {\n  return gimsProps.filter(function (gimProps) {\n    return gimProps.id == gimId;\n  }).pop() || gimsProps[0];\n};\n\nfunction Gim(_ref) {\n  _s();\n\n  var data = _ref.data,\n      gimId = _ref.gimId,\n      direction = _ref.direction,\n      steps = _ref.steps,\n      nextPosition = _ref.nextPosition,\n      setOnDisplay = _ref.setOnDisplay,\n      onDisplay = _ref.onDisplay,\n      darkTheme = _ref.darkTheme;\n\n  var _useViewportScroll = Object(framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"useViewportScroll\"])(),\n      scrollYProgress = _useViewportScroll.scrollYProgress;\n\n  var yRange = Object(framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"useTransform\"])(scrollYProgress, [0, 0.9], [0, 1]);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(Math.random()),\n      animationDelay = _useState[0],\n      setDelay = _useState[1];\n\n  console.log(\"render gim : [\" + gimId + \"] random number : \" + animationDelay);\n  var currentGim = getGimPropsById(gimId);\n  var prevGim = direction < 0 ? getGimPropsById(currentGim.prev) : getGimPropsById(currentGim.next);\n  var nextGim = direction < 0 ? getGimPropsById(currentGim.next) : getGimPropsById(currentGim.prev);\n  var gimvariants = {\n    enter: function enter(direction) {\n      return {\n        y: 0,\n        top: \"\".concat(prevGim.properties.posi.y, \"%\"),\n        left: \"\".concat(prevGim.properties.posi.x, \"%\"),\n        scale: prevGim.properties.scale,\n        zIndex: prevGim.properties.zIndex\n      };\n    },\n    standing: {\n      y: [-10, 10],\n      top: \"\".concat(currentGim.properties.posi.y, \"%\"),\n      left: \"\".concat(currentGim.properties.posi.x, \"%\"),\n      scale: currentGim.properties.scale,\n      zIndex: direction > 0 && gimId == 2 ? 10 : currentGim.properties.zIndex,\n      transition: {\n        y: {\n          yoyo: Infinity,\n          duration: 1 // delay : animationDelay * 2\n\n        },\n        type: \"spring\",\n        duration: 1.3\n      }\n    },\n    display: {\n      // position : 'fixed',\n      y: 0,\n      top: '',\n      left: '0%',\n      bottom: '0%',\n      transition: {\n        type: \"spring\",\n        duration: 0.8\n      }\n    },\n    exit: function exit(direction) {\n      return {\n        y: 0,\n        top: \"\".concat(nextGim.properties.posi.y, \"%\"),\n        left: \"\".concat(nextGim.properties.posi.x, \"%\"),\n        scale: nextGim.properties.scale,\n        zIndex: nextGim.properties.zIndex\n      };\n    }\n  };\n  var currentData = getGimCurrenData(data, gimId, steps, direction);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"motion\"].div, {\n    className: \"absolute  flex justify-center items-center \".concat(\"h-36\" || false, \" \").concat(\"w-36\" || false, \" m-10 rounded-full \").concat(darkTheme ? _theme__WEBPACK_IMPORTED_MODULE_3__[\"theme\"].dark.gims.style : _theme__WEBPACK_IMPORTED_MODULE_3__[\"theme\"].light.gims.style),\n    variants: gimvariants,\n    initial: \"enter\",\n    animate: onDisplay.displayState && gimId == 0 ? \"display\" : \"standing\",\n    custom: direction,\n    drag: true,\n    dragConstraints: {\n      top: 0,\n      left: 0,\n      right: 0,\n      bottom: 0\n    },\n    whileHover: {\n      // scale: currentGim.properties.scale * 1.2,\n      // boxShadow: '0 0px 30px 2px rgb(255, 255, 255, 0.3)',\n      transition: {\n        duration: 0.3\n      }\n    },\n    onMouseUp: function onMouseUp() {\n      return gimId == 0 ? setOnDisplay(!onDisplay.displayState, fixGimsDataIndex(data, steps + 1), 0) : nextPosition(currentGim.leftRight);\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"relative flex justify-center items-center w-full h-full\",\n      children: [!darkTheme && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"absolute -top-1/4 -left-1/4 h-32 w-32 bg-white rounded-full\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 181,\n        columnNumber: 21\n      }, this), !darkTheme && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"absolute top-1/4 -right-1/4 h-16 w-16 bg-white rounded-full\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 182,\n        columnNumber: 21\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: \"absolute top-1/4 mt-4 \".concat(darkTheme ? _theme__WEBPACK_IMPORTED_MODULE_3__[\"theme\"].dark.gims.text : _theme__WEBPACK_IMPORTED_MODULE_3__[\"theme\"].light.gims.text),\n        children: currentData ? currentData.current : \"\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 183,\n        columnNumber: 6\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 180,\n      columnNumber: 5\n    }, this)\n  }, steps, false, {\n    fileName: _jsxFileName,\n    lineNumber: 156,\n    columnNumber: 4\n  }, this);\n}\n\n_s(Gim, \"k+HClhlmX/H/RWMLzZCYiEYIaIc=\", false, function () {\n  return [framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"useViewportScroll\"], framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"useTransform\"]];\n});\n\n_c = Gim;\n\nfunction fixGimsDataIndex(data, steps) {\n  var fixedIndex = steps < 0 ? (data.length + steps % data.length) % data.length : steps % data.length;\n  return fixedIndex;\n}\n\nfunction getGimCurrenData(data, gimId, moveSteps, moveDirection) {\n  switch (gimId) {\n    case 0:\n      // main gim\n      return {\n        current: data[fixGimsDataIndex(data, moveSteps + 1)],\n        next: data[fixGimsDataIndex(data, moveSteps + 2)],\n        prev: data[fixGimsDataIndex(data, moveSteps)]\n      };\n\n    case 1:\n      // next gim\n      return {\n        current: data[fixGimsDataIndex(data, moveSteps + 2)],\n        next: data[fixGimsDataIndex(data, moveSteps + 3)],\n        prev: data[fixGimsDataIndex(data, moveSteps + 1)]\n      };\n\n    case 2:\n      // prev gim\n      return {\n        current: data[fixGimsDataIndex(data, moveSteps)],\n        next: data[fixGimsDataIndex(data, moveSteps - 1)],\n        prev: data[fixGimsDataIndex(data, moveSteps + 1)]\n      };\n\n    case 3:\n      // onHold gim\n      return {\n        current: data[fixGimsDataIndex(data, moveSteps + 3)],\n        next: data[fixGimsDataIndex(data, moveSteps + 4)],\n        prev: data[fixGimsDataIndex(data, moveSteps + 2)]\n      };\n\n    case 4:\n      // hidden gim\n      var updatedIndex = moveDirection < 0 ? moveSteps : moveSteps + 3;\n      return {\n        current: data[fixGimsDataIndex(data, moveSteps + 4)],\n        next: data[fixGimsDataIndex(data, moveSteps + 5)],\n        prev: data[fixGimsDataIndex(data, updatedIndex)]\n      };\n  }\n\n  return 0;\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"Gim\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9naW0udHN4P2YyYTkiXSwibmFtZXMiOlsiZ2ltc1Byb3BzIiwiaWQiLCJ0eXBlIiwibGVmdFJpZ2h0IiwibmV4dCIsInByZXYiLCJwcm9wZXJ0aWVzIiwidGl0bGUiLCJzaXplIiwicG9zaSIsIngiLCJ5Iiwic2NhbGUiLCJ6SW5kZXgiLCJnZXRHaW1Qcm9wc0J5SWQiLCJnaW1JZCIsImZpbHRlciIsImdpbVByb3BzIiwicG9wIiwiR2ltIiwiZGF0YSIsImRpcmVjdGlvbiIsInN0ZXBzIiwibmV4dFBvc2l0aW9uIiwic2V0T25EaXNwbGF5Iiwib25EaXNwbGF5IiwiZGFya1RoZW1lIiwidXNlVmlld3BvcnRTY3JvbGwiLCJzY3JvbGxZUHJvZ3Jlc3MiLCJ5UmFuZ2UiLCJ1c2VUcmFuc2Zvcm0iLCJ1c2VTdGF0ZSIsIk1hdGgiLCJyYW5kb20iLCJhbmltYXRpb25EZWxheSIsInNldERlbGF5IiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRHaW0iLCJwcmV2R2ltIiwibmV4dEdpbSIsImdpbXZhcmlhbnRzIiwiZW50ZXIiLCJ0b3AiLCJsZWZ0Iiwic3RhbmRpbmciLCJ0cmFuc2l0aW9uIiwieW95byIsIkluZmluaXR5IiwiZHVyYXRpb24iLCJkaXNwbGF5IiwiYm90dG9tIiwiZXhpdCIsImN1cnJlbnREYXRhIiwiZ2V0R2ltQ3VycmVuRGF0YSIsInRoZW1lIiwiZGFyayIsImdpbXMiLCJzdHlsZSIsImxpZ2h0IiwiZGlzcGxheVN0YXRlIiwicmlnaHQiLCJmaXhHaW1zRGF0YUluZGV4IiwidGV4dCIsImN1cnJlbnQiLCJmaXhlZEluZGV4IiwibGVuZ3RoIiwibW92ZVN0ZXBzIiwibW92ZURpcmVjdGlvbiIsInVwZGF0ZWRJbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUlBLElBQU1BLFNBQVMsR0FBRyxDQUNqQjtBQUNDQyxJQUFFLEVBQUUsQ0FETDtBQUNRO0FBQ1BD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QzFDLElBQUQsRUFBTytDLFNBQVMsR0FBRyxDQUFuQixDQUFqQjtBQUhMLE9BQVA7O0FBS0QsU0FBSyxDQUFMO0FBQVE7QUFDUCxhQUFPO0FBQ05ILGVBQU8sRUFBRzVDLElBQUksQ0FBQzBDLGdCQUFnQixDQUFDMUMsSUFBRCxFQUFPK0MsU0FBUyxHQUFHLENBQW5CLENBQWpCLENBRFI7QUFFTi9ELFlBQUksRUFBR2dCLElBQUksQ0FBQzBDLGdCQUFnQixDQUFDMUMsSUFBRCxFQUFPK0MsU0FBUyxHQUFHLENBQW5CLENBQWpCLENBRkw7QUFHTjlELFlBQUksRUFBR2UsSUFBSSxDQUFDMEMsZ0JBQWdCLENBQUMxQyxJQUFELEVBQU8rQyxTQUFTLEdBQUcsQ0FBbkIsQ0FBakI7QUFITCxPQUFQOztBQUtELFNBQUssQ0FBTDtBQUFRO0FBQ1AsVUFBSUUsWUFBWSxHQUFJRCxhQUFhLEdBQUcsQ0FBakIsR0FBc0JELFNBQXRCLEdBQWtDQSxTQUFTLEdBQUcsQ0FBakU7QUFDQSxhQUFPO0FBQ05ILGVBQU8sRUFBRzVDLElBQUksQ0FBQzBDLGdCQUFnQixDQUFDMUMsSUFBRCxFQUFPK0MsU0FBUyxHQUFHLENBQW5CLENBQWpCLENBRFI7QUFFTi9ELFlBQUksRUFBR2dCLElBQUksQ0FBQzBDLGdCQUFnQixDQUFDMUMsSUFBRCxFQUFPK0MsU0FBUyxHQUFHLENBQW5CLENBQWpCLENBRkw7QUFHTjlELFlBQUksRUFBR2UsSUFBSSxDQUFDMEMsZ0JBQWdCLENBQUMxQyxJQUFELEVBQU9pRCxZQUFQLENBQWpCO0FBSEwsT0FBUDtBQTNCRjs7QUFpQ0EsU0FBUSxDQUFSO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL2dpbS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlLCB1c2VUcmFuc2Zvcm0sIHVzZVZpZXdwb3J0U2Nyb2xsLCB1c2VNb3Rpb25WYWx1ZSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQgeyB3cmFwIH0gZnJvbSAncG9wbW90aW9uJ1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuL3RoZW1lJ1xuXG5cblxuY29uc3QgZ2ltc1Byb3BzID0gW1xuXHR7XG5cdFx0aWQ6IDAsIC8vIG5lZWRlZCB0byBmaXggXCIga2V5IGZvciBtYXAsIG9yZ2FuaXplIGxheWVyIG9yZGVyIFwiXG5cdFx0dHlwZTogXCJtYWluXCIsXG5cdFx0bGVmdFJpZ2h0OiAwLFxuXHRcdG5leHQ6IDEsXG5cdFx0cHJldjogMixcblx0XHRwcm9wZXJ0aWVzOiB7XG5cdFx0XHR0aXRsZTogXCJtYWluXCIsXG5cdFx0XHRzaXplOiAxMDAsXG5cdFx0XHRwb3NpOiB7IHg6IDM0LCB5OiA1NSB9LFxuXHRcdFx0c2NhbGU6IDEuOCxcblx0XHRcdHpJbmRleDogNTAsXG5cdFx0fVxuXHR9LFxuXHR7XG5cdFx0aWQ6IDEsXG5cdFx0dHlwZTogXCJuZXh0XCIsXG5cdFx0bGVmdFJpZ2h0OiAxLFxuXHRcdG5leHQ6IDMsXG5cdFx0cHJldjogMCxcblx0XHRwcm9wZXJ0aWVzOiB7XG5cdFx0XHR0aXRsZTogXCJuZXh0XCIsXG5cdFx0XHRzaXplOiA2MCxcblx0XHRcdHBvc2k6IHsgeDogNzUsIHk6IDQwIH0sXG5cdFx0XHRzY2FsZTogMSxcblx0XHRcdHpJbmRleDogMTAsXG5cblx0XHR9XG5cdH0sXG5cdHtcblx0XHRpZDogMixcblx0XHR0eXBlOiBcInByZXZpb3VzXCIsXG5cdFx0bGVmdFJpZ2h0OiAtMSxcblx0XHRuZXh0OiAwLFxuXHRcdHByZXY6IDQsXG5cdFx0cHJvcGVydGllczoge1xuXHRcdFx0dGl0bGU6IFwicHJldmlvdXNcIixcblx0XHRcdHNpemU6IDgwLFxuXHRcdFx0cG9zaTogeyB4OiAxNSwgeTogMTIgfSxcblx0XHRcdHNjYWxlOiAwLjksXG5cdFx0XHR6SW5kZXg6IDAsXG5cdFx0fVxuXHR9LFxuXHR7XG5cdFx0aWQ6IDMsXG5cdFx0dHlwZTogXCJvbkhvbGRcIixcblx0XHRsZWZ0UmlnaHQ6IDEsXG5cdFx0bmV4dDogNCxcblx0XHRwcmV2OiAxLFxuXHRcdHByb3BlcnRpZXM6IHtcblx0XHRcdHRpdGxlOiBcIi4uLlwiLFxuXHRcdFx0c2l6ZTogNTAsXG5cdFx0XHRwb3NpOiB7IHg6IDYwLCB5OiA4IH0sXG5cdFx0XHRzY2FsZTogMC4zLFxuXHRcdFx0ekluZGV4OiAwLFxuXHRcdH1cblx0fVxuXHQsXG5cdHtcblx0XHRpZDogNCxcblx0XHR0eXBlOiBcImhpZGRlblwiLFxuXHRcdGxlZnRSaWdodDogLTEsXG5cdFx0bmV4dDogMixcblx0XHRwcmV2OiAzLFxuXHRcdHByb3BlcnRpZXM6IHtcblx0XHRcdHRpdGxlOiBcImhpZGRlblwiLFxuXHRcdFx0c2l6ZTogNDAsXG5cdFx0XHRwb3NpOiB7IHg6IDQwLCB5OiA5IH0sXG5cdFx0XHRzY2FsZTogMC4xLFxuXHRcdFx0ekluZGV4OiAwLFxuXHRcdH1cblx0fVxuXVxuXG5jb25zdCBnZXRHaW1Qcm9wc0J5SWQgPSAoZ2ltSWQ6IG51bWJlcikgPT4ge1xuXHRyZXR1cm4gZ2ltc1Byb3BzLmZpbHRlcigoZ2ltUHJvcHMpID0+IGdpbVByb3BzLmlkID09IGdpbUlkKS5wb3AoKSB8fCBnaW1zUHJvcHNbMF07XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHaW0oe2RhdGEsIGdpbUlkLCBkaXJlY3Rpb24sIHN0ZXBzLCBuZXh0UG9zaXRpb24sIHNldE9uRGlzcGxheSwgb25EaXNwbGF5LCBkYXJrVGhlbWUgfSkge1xuXG5cdGNvbnN0IHsgc2Nyb2xsWVByb2dyZXNzIH0gPSB1c2VWaWV3cG9ydFNjcm9sbCgpO1xuIFx0Y29uc3QgeVJhbmdlID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDAuOV0sIFswLCAxXSk7XG5cbiAgY29uc3QgW2FuaW1hdGlvbkRlbGF5LCBzZXREZWxheV0gPSB1c2VTdGF0ZShNYXRoLnJhbmRvbSgpKTtcblxuXG5cdGNvbnNvbGUubG9nKFwicmVuZGVyIGdpbSA6IFtcIiArIGdpbUlkICsgXCJdIHJhbmRvbSBudW1iZXIgOiBcIiArIGFuaW1hdGlvbkRlbGF5KTtcblxuXHRjb25zdCBjdXJyZW50R2ltID0gZ2V0R2ltUHJvcHNCeUlkKGdpbUlkKTtcblx0Y29uc3QgcHJldkdpbSA9IChkaXJlY3Rpb24gPCAwKSA/IGdldEdpbVByb3BzQnlJZChjdXJyZW50R2ltLnByZXYpIDogZ2V0R2ltUHJvcHNCeUlkKGN1cnJlbnRHaW0ubmV4dCk7XG5cdGNvbnN0IG5leHRHaW0gPSAoZGlyZWN0aW9uIDwgMCkgPyBnZXRHaW1Qcm9wc0J5SWQoY3VycmVudEdpbS5uZXh0KSA6IGdldEdpbVByb3BzQnlJZChjdXJyZW50R2ltLnByZXYpO1xuXG5cblx0Y29uc3QgZ2ltdmFyaWFudHMgPSB7XG5cdFx0ZW50ZXI6IChkaXJlY3Rpb246IG51bWJlcikgPT4ge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0eTogMCxcblx0XHRcdFx0dG9wOiBgJHtwcmV2R2ltLnByb3BlcnRpZXMucG9zaS55fSVgLFxuXHRcdFx0XHRsZWZ0OiBgJHtwcmV2R2ltLnByb3BlcnRpZXMucG9zaS54fSVgLFxuXHRcdFx0XHRzY2FsZTogcHJldkdpbS5wcm9wZXJ0aWVzLnNjYWxlLFxuXHRcdFx0XHR6SW5kZXg6IHByZXZHaW0ucHJvcGVydGllcy56SW5kZXgsXG5cdFx0XHR9O1xuXG5cdFx0fSxcblx0XHRzdGFuZGluZzoge1xuXHRcdFx0eTogWy0xMCAsIDEwXSxcblx0XHRcdHRvcDogYCR7Y3VycmVudEdpbS5wcm9wZXJ0aWVzLnBvc2kueX0lYCxcblx0XHRcdGxlZnQ6IGAke2N1cnJlbnRHaW0ucHJvcGVydGllcy5wb3NpLnh9JWAsXG5cdFx0XHRzY2FsZTogY3VycmVudEdpbS5wcm9wZXJ0aWVzLnNjYWxlLFxuXHRcdFx0ekluZGV4OiAoZGlyZWN0aW9uID4gMCAmJiBnaW1JZCA9PSAyKSA/IDEwIDogY3VycmVudEdpbS5wcm9wZXJ0aWVzLnpJbmRleCxcblx0XHRcdHRyYW5zaXRpb246IHtcblx0XHRcdFx0eToge1xuXHRcdFx0XHRcdHlveW8gOiBJbmZpbml0eSxcblx0XHRcdFx0XHRkdXJhdGlvbjogMSxcblx0XHRcdFx0XHQvLyBkZWxheSA6IGFuaW1hdGlvbkRlbGF5ICogMlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR0eXBlIDogXCJzcHJpbmdcIixcblx0XHRcdFx0ZHVyYXRpb24gOiAxLjNcblx0XHRcdH1cblx0XHR9LFxuXHRcdGRpc3BsYXkgOiB7XG5cdFx0XHQvLyBwb3NpdGlvbiA6ICdmaXhlZCcsXG5cdFx0XHRcdHkgOiAgMCxcblx0XHRcdFx0dG9wIDogJycsXG5cdFx0XHRcdGxlZnQgOiAnMCUnLFxuXHRcdFx0XHRib3R0b20gOiAnMCUnLFxuXHRcdFx0XHR0cmFuc2l0aW9uIDoge1xuXHRcdFx0XHRcdHR5cGU6IFwic3ByaW5nXCIsXG5cdFx0XHRcdFx0ZHVyYXRpb24gOiAwLjhcblx0XHRcdFx0fVxuXHRcdH0sXG5cdFx0ZXhpdDogKGRpcmVjdGlvbjogbnVtYmVyKSA9PiB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR5IDogMCxcblx0XHRcdFx0dG9wOiBgJHtuZXh0R2ltLnByb3BlcnRpZXMucG9zaS55fSVgLFxuXHRcdFx0XHRsZWZ0OiBgJHtuZXh0R2ltLnByb3BlcnRpZXMucG9zaS54fSVgLFxuXHRcdFx0XHRzY2FsZTogbmV4dEdpbS5wcm9wZXJ0aWVzLnNjYWxlLFxuXHRcdFx0XHR6SW5kZXg6ICBuZXh0R2ltLnByb3BlcnRpZXMuekluZGV4LFxuXHRcdFx0fTtcblx0XHR9XG5cdH1cblxuXHRjb25zdCBjdXJyZW50RGF0YSA9IGdldEdpbUN1cnJlbkRhdGEoZGF0YSwgZ2ltSWQsIHN0ZXBzLCBkaXJlY3Rpb24pO1xuXG5cdHJldHVybiAoXG5cdFx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0XHRjbGFzc05hbWU9e2BhYnNvbHV0ZSAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgJHtcImgtMzZcIiB8fCBcImgtNFwifSAke1widy0zNlwiIHx8IFwidy00XCJ9IG0tMTAgcm91bmRlZC1mdWxsICR7IGRhcmtUaGVtZSA/IHRoZW1lLmRhcmsuZ2ltcy5zdHlsZSA6IHRoZW1lLmxpZ2h0LmdpbXMuc3R5bGV9YH1cblx0XHRcdFx0a2V5PXtzdGVwc31cblx0XHRcdFx0dmFyaWFudHM9e2dpbXZhcmlhbnRzfVxuXHRcdFx0XHRpbml0aWFsPVwiZW50ZXJcIlxuXHRcdFx0XHRhbmltYXRlPXtvbkRpc3BsYXkuZGlzcGxheVN0YXRlICYmIGdpbUlkID09IDAgPyBcImRpc3BsYXlcIiA6IFwic3RhbmRpbmdcIn1cblx0XHRcdFx0Y3VzdG9tPXtkaXJlY3Rpb259XG5cdFx0XHRcdGRyYWdcblx0XHRcdFx0ZHJhZ0NvbnN0cmFpbnRzPXt7XG5cdFx0XHRcdFx0dG9wIDogMCxcblx0XHRcdFx0XHRsZWZ0OiAwLFxuXHRcdFx0XHRcdHJpZ2h0OiAwLFxuXHRcdFx0XHRcdGJvdHRvbTogMCxcblx0XHRcdFx0fX1cblx0XHRcdFx0d2hpbGVIb3Zlcj17e1xuXHRcdFx0XHRcdC8vIHNjYWxlOiBjdXJyZW50R2ltLnByb3BlcnRpZXMuc2NhbGUgKiAxLjIsXG5cdFx0XHRcdFx0Ly8gYm94U2hhZG93OiAnMCAwcHggMzBweCAycHggcmdiKDI1NSwgMjU1LCAyNTUsIDAuMyknLFxuXHRcdFx0XHRcdHRyYW5zaXRpb24gOntcblx0XHRcdFx0XHRcdGR1cmF0aW9uIDogMC4zLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH19XG5cdFx0XHRcdG9uTW91c2VVcD17KCkgPT4gZ2ltSWQgPT0gMCA/IHNldE9uRGlzcGxheSghb25EaXNwbGF5LmRpc3BsYXlTdGF0ZSwgZml4R2ltc0RhdGFJbmRleChkYXRhLCBzdGVwcyArIDEpLCAwKTogbmV4dFBvc2l0aW9uKGN1cnJlbnRHaW0ubGVmdFJpZ2h0KX1cblx0XHRcdD5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctZnVsbCBoLWZ1bGxcIiA+XG5cdFx0XHRcdFx0eyFkYXJrVGhlbWUgJiYgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtdG9wLTEvNCAtbGVmdC0xLzQgaC0zMiB3LTMyIGJnLXdoaXRlIHJvdW5kZWQtZnVsbFwiPjwvZGl2Pn1cblx0XHRcdFx0XHR7IWRhcmtUaGVtZSAmJiA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0xLzQgLXJpZ2h0LTEvNCBoLTE2IHctMTYgYmctd2hpdGUgcm91bmRlZC1mdWxsXCI+PC9kaXY+fVxuXHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9e2BhYnNvbHV0ZSB0b3AtMS80IG10LTQgJHsgZGFya1RoZW1lID8gdGhlbWUuZGFyay5naW1zLnRleHQgOiB0aGVtZS5saWdodC5naW1zLnRleHR9YH0+e2N1cnJlbnREYXRhID8gY3VycmVudERhdGEuY3VycmVudCA6IFwiXCJ9PC9oMT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L21vdGlvbi5kaXY+XG5cdCk7XG59XG5cblxuXG5cblxuXG5cbmZ1bmN0aW9uIGZpeEdpbXNEYXRhSW5kZXgoZGF0YSwgc3RlcHMpIHtcblx0bGV0IGZpeGVkSW5kZXggPSBzdGVwcyA8IDAgPyAoKGRhdGEubGVuZ3RoKSArIChzdGVwcyAlIGRhdGEubGVuZ3RoKSkgJSBkYXRhLmxlbmd0aCAgOiBzdGVwcyAlIGRhdGEubGVuZ3RoO1xuXHRyZXR1cm4gKGZpeGVkSW5kZXgpO1xufVxuXG5mdW5jdGlvbiBnZXRHaW1DdXJyZW5EYXRhKGRhdGEsIGdpbUlkLCBtb3ZlU3RlcHMsIG1vdmVEaXJlY3Rpb24pIHtcblx0c3dpdGNoIChnaW1JZCkge1xuXHRcdGNhc2UgMDogLy8gbWFpbiBnaW1cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGN1cnJlbnQgOiBkYXRhW2ZpeEdpbXNEYXRhSW5kZXgoZGF0YSwgbW92ZVN0ZXBzICsgMSldLFxuXHRcdFx0XHRuZXh0IDogZGF0YVtmaXhHaW1zRGF0YUluZGV4KGRhdGEsIG1vdmVTdGVwcyArIDIpXSxcblx0XHRcdFx0cHJldiA6IGRhdGFbZml4R2ltc0RhdGFJbmRleChkYXRhLCBtb3ZlU3RlcHMgKV0sXG5cdFx0XHR9O1xuXHRcdGNhc2UgMTogLy8gbmV4dCBnaW1cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGN1cnJlbnQgOiBkYXRhW2ZpeEdpbXNEYXRhSW5kZXgoZGF0YSwgbW92ZVN0ZXBzICsgMildLFxuXHRcdFx0XHRuZXh0IDogZGF0YVtmaXhHaW1zRGF0YUluZGV4KGRhdGEsIG1vdmVTdGVwcyArIDMpXSxcblx0XHRcdFx0cHJldiA6IGRhdGFbZml4R2ltc0RhdGFJbmRleChkYXRhLCBtb3ZlU3RlcHMgKyAxKV0sXG5cdFx0XHR9O1xuXHRcdGNhc2UgMjogLy8gcHJldiBnaW1cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGN1cnJlbnQgOiBkYXRhW2ZpeEdpbXNEYXRhSW5kZXgoZGF0YSwgbW92ZVN0ZXBzKV0sXG5cdFx0XHRcdG5leHQgOiBkYXRhW2ZpeEdpbXNEYXRhSW5kZXgoZGF0YSwgbW92ZVN0ZXBzIC0gMSldLFxuXHRcdFx0XHRwcmV2IDogZGF0YVtmaXhHaW1zRGF0YUluZGV4KGRhdGEsIG1vdmVTdGVwcyArIDEpXSxcblx0XHRcdH07XG5cdFx0Y2FzZSAzOiAvLyBvbkhvbGQgZ2ltXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRjdXJyZW50IDogZGF0YVtmaXhHaW1zRGF0YUluZGV4KGRhdGEsIG1vdmVTdGVwcyArIDMpXSxcblx0XHRcdFx0bmV4dCA6IGRhdGFbZml4R2ltc0RhdGFJbmRleChkYXRhLCBtb3ZlU3RlcHMgKyA0KV0sXG5cdFx0XHRcdHByZXYgOiBkYXRhW2ZpeEdpbXNEYXRhSW5kZXgoZGF0YSwgbW92ZVN0ZXBzICsgMildLFxuXHRcdFx0fTtcblx0XHRjYXNlIDQ6IC8vIGhpZGRlbiBnaW1cblx0XHRcdGxldCB1cGRhdGVkSW5kZXggPSAobW92ZURpcmVjdGlvbiA8IDApID8gbW92ZVN0ZXBzIDogbW92ZVN0ZXBzICsgMztcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGN1cnJlbnQgOiBkYXRhW2ZpeEdpbXNEYXRhSW5kZXgoZGF0YSwgbW92ZVN0ZXBzICsgNCldLFxuXHRcdFx0XHRuZXh0IDogZGF0YVtmaXhHaW1zRGF0YUluZGV4KGRhdGEsIG1vdmVTdGVwcyArIDUpXSxcblx0XHRcdFx0cHJldiA6IGRhdGFbZml4R2ltc0RhdGFJbmRleChkYXRhLCB1cGRhdGVkSW5kZXgpXSxcblx0XHRcdH07XG5cdFx0fVxuXHRyZXR1cm4gKDApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/gim.tsx\n");

/***/ })

})