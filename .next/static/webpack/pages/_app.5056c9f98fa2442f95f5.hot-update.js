webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/gim.tsx":
/*!****************************!*\
  !*** ./components/gim.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Gim; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! popmotion */ \"./node_modules/popmotion/dist/es/index.js\");\n\n\nvar _jsxFileName = \"/goinfre/hmhindat/portfolio/components/gim.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\nvar gimsProps = [{\n  id: 0,\n  // needed to fix \" key for map, organize layer order \"\n  type: \"main\",\n  leftRight: 0,\n  next: 1,\n  prev: 2,\n  properties: {\n    title: \"main\",\n    size: 100,\n    posi: {\n      x: 34,\n      y: 55\n    },\n    scale: 1.8,\n    zIndex: 10\n  }\n}, {\n  id: 1,\n  type: \"next\",\n  leftRight: 1,\n  next: 3,\n  prev: 0,\n  properties: {\n    title: \"next\",\n    size: 60,\n    posi: {\n      x: 75,\n      y: 40\n    },\n    scale: 1,\n    zIndex: 10\n  }\n}, {\n  id: 2,\n  type: \"previous\",\n  leftRight: -1,\n  next: 0,\n  prev: 4,\n  properties: {\n    title: \"previous\",\n    size: 80,\n    posi: {\n      x: 15,\n      y: 12\n    },\n    scale: 0.9,\n    zIndex: 0\n  }\n}, {\n  id: 3,\n  type: \"onHold\",\n  leftRight: 1,\n  next: 4,\n  prev: 1,\n  properties: {\n    title: \"...\",\n    size: 50,\n    posi: {\n      x: 60,\n      y: 8\n    },\n    scale: 0.3,\n    zIndex: 0\n  }\n}, {\n  id: 4,\n  type: \"hidden\",\n  leftRight: -1,\n  next: 2,\n  prev: 3,\n  properties: {\n    title: \"hidden\",\n    size: 40,\n    posi: {\n      x: 40,\n      y: 9\n    },\n    scale: 0.1,\n    zIndex: 0\n  }\n}];\n\nvar getGimPropsById = function getGimPropsById(gimId) {\n  return gimsProps.filter(function (gimProps) {\n    return gimProps.id == gimId;\n  }).pop() || gimsProps[0];\n};\n\nfunction Gim(_ref) {\n  _s();\n\n  var data = _ref.data,\n      gimId = _ref.gimId,\n      direction = _ref.direction,\n      steps = _ref.steps,\n      nextPosition = _ref.nextPosition;\n  var btnRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(Math.random()),\n      animationDelay = _useState[0],\n      setDelay = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    btnRef.current.setAttribute(\"disabled\", \"disabled\"); // const timer = setTimeout(() => btnRef.current.setAttribute(\"disabled\", \"disabled\") , 1300);\n    // return () => clearTimeout(timer);\n  }, []); // btnRef.current.setAttribute(\"disabled\", \"disabled\");\n\n  console.log(\"render gim : [\" + gimId + \"] random number : \" + animationDelay);\n  var currentIndex = Object(popmotion__WEBPACK_IMPORTED_MODULE_3__[\"wrap\"])(0, gimsProps.length, steps);\n  var currentGim = getGimPropsById(gimId);\n  var prevGim = direction < 0 ? getGimPropsById(currentGim.prev) : getGimPropsById(currentGim.next);\n  var nextGim = direction < 0 ? getGimPropsById(currentGim.next) : getGimPropsById(currentGim.prev);\n  var gimVariants = {\n    enter: function enter(direction) {\n      return {\n        y: 0,\n        top: \"\".concat(prevGim.properties.posi.y, \"%\"),\n        left: \"\".concat(prevGim.properties.posi.x, \"%\"),\n        // heigth : `${currentGim.properties.size}px`,\n        // width : `${currentGim.properties.size}px`,\n        scale: prevGim.properties.scale,\n        zIndex: \"\".concat(prevGim.properties.zIndex),\n        backgroudColor: direction ? \"red\" : \"blue\"\n      };\n    },\n    standing: {\n      y: [-10, 10],\n      top: \"\".concat(currentGim.properties.posi.y, \"%\"),\n      left: \"\".concat(currentGim.properties.posi.x, \"%\"),\n      // h : `${currentGim.properties.size}px`,\n      // w : `${currentGim.properties.size}px`,\n      scale: currentGim.properties.scale,\n      zIndex: direction > 0 && gimId == 2 ? 10 : \"\".concat(currentGim.properties.zIndex),\n      backgroudColor: direction ? \"red\" : \"blue\",\n      transition: {\n        y: {\n          yoyo: Infinity,\n          duration: 1 // delay : animationDelay * 2\n\n        },\n        type: \"spring\",\n        duration: 1.3\n      }\n    },\n    exit: function exit(direction) {\n      return {\n        y: 0,\n        top: \"\".concat(nextGim.properties.posi.y, \"%\"),\n        left: \"\".concat(nextGim.properties.posi.x, \"%\"),\n        // heigth : `${currentGim.properties.size}px`,\n        // width : `${currentGim.properties.size}px`,\n        scale: nextGim.properties.scale,\n        zIndex: \"\".concat(nextGim.properties.zIndex)\n      };\n    }\n  };\n  var currentData = getGimCurrenData(data, gimId, steps, direction);\n  return (\n    /*#__PURE__*/\n    // <AnimatePresence initial={false} custom={direction * -1}>\n    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"motion\"].div, {\n      ref: btnRef,\n      className: \"absolute flex justify-center items-center \".concat(\"h-36\" || false, \" \").concat(\"w-36\" || false, \" rounded-full \", \"bg-red-400\"),\n      variants: gimVariants,\n      initial: \"enter\",\n      animate: \"standing\",\n      custom: direction,\n      transition: {// type: \"spring\",\n        // duration : 4,\n      },\n      whileHover: {\n        scale: currentGim.properties.scale * 1.2,\n        boxShadow: '0 0px 20px 8px rgba(255, 255, 255, 0.5)',\n        transition: {\n          duration: 0.3 // y: {\n          // \tyoyo : Infinity,\n          // \tduration: 1,\n          // \tdelay : animationDelay * 2\n          // },\n          // x: {\n          // \tyoyo : Infinity,\n          // \tduration: 1,\n          // },\n\n        }\n      },\n      onMouseDown: function onMouseDown() {\n        return nextPosition(currentGim.leftRight);\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: currentData.current\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 182,\n        columnNumber: 5\n      }, this)\n    }, steps, false, {\n      fileName: _jsxFileName,\n      lineNumber: 153,\n      columnNumber: 4\n    }, this) // </AnimatePresence>\n\n  );\n}\n\n_s(Gim, \"WCf9ffz2d3yCzu7qIIV1f9en0Jo=\");\n\n_c = Gim;\n\nfunction fixGimsDataIndex(data, steps) {\n  var fixedIndex = steps < 0 ? (data.length + steps % data.length) % data.length : steps % data.length;\n  return fixedIndex;\n}\n\nfunction getGimCurrenData(data, gimId, moveSteps, moveDirection) {\n  switch (gimId) {\n    case 0:\n      // main gim\n      return {\n        current: data[fixGimsDataIndex(data, moveSteps + 1)],\n        next: data[fixGimsDataIndex(data, moveSteps + 2)],\n        prev: data[fixGimsDataIndex(data, moveSteps)]\n      };\n\n    case 1:\n      // next gim\n      return {\n        current: data[fixGimsDataIndex(data, moveSteps + 2)],\n        next: data[fixGimsDataIndex(data, moveSteps + 3)],\n        prev: data[fixGimsDataIndex(data, moveSteps + 1)]\n      };\n\n    case 2:\n      // prev gim\n      return {\n        current: data[fixGimsDataIndex(data, moveSteps)],\n        next: data[fixGimsDataIndex(data, moveSteps - 1)],\n        prev: data[fixGimsDataIndex(data, moveSteps + 1)]\n      };\n\n    case 3:\n      // onHold gim\n      return {\n        current: data[fixGimsDataIndex(data, moveSteps + 3)],\n        next: data[fixGimsDataIndex(data, moveSteps + 4)],\n        prev: data[fixGimsDataIndex(data, moveSteps + 2)]\n      };\n\n    case 4:\n      // hidden gim\n      var updatedIndex = moveDirection < 0 ? moveSteps : moveSteps + 3;\n      return {\n        current: data[fixGimsDataIndex(data, moveSteps + 4)],\n        next: data[fixGimsDataIndex(data, moveSteps + 5)],\n        prev: data[fixGimsDataIndex(data, updatedIndex)]\n      };\n  }\n\n  return 0;\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"Gim\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9naW0udHN4P2YyYTkiXSwibmFtZXMiOlsiZ2ltc1Byb3BzIiwiaWQiLCJ0eXBlIiwibGVmdFJpZ2h0IiwibmV4dCIsInByZXYiLCJwcm9wZXJ0aWVzIiwidGl0bGUiLCJzaXplIiwicG9zaSIsIngiLCJ5Iiwic2NhbGUiLCJ6SW5kZXgiLCJnZXRHaW1Qcm9wc0J5SWQiLCJnaW1JZCIsImZpbHRlciIsImdpbVByb3BzIiwicG9wIiwiR2ltIiwiZGF0YSIsImRpcmVjdGlvbiIsInN0ZXBzIiwibmV4dFBvc2l0aW9uIiwiYnRuUmVmIiwidXNlUmVmIiwidXNlU3RhdGUiLCJNYXRoIiwicmFuZG9tIiwiYW5pbWF0aW9uRGVsYXkiLCJzZXREZWxheSIsInVzZUVmZmVjdCIsImN1cnJlbnQiLCJzZXRBdHRyaWJ1dGUiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudEluZGV4Iiwid3JhcCIsImxlbmd0aCIsImN1cnJlbnRHaW0iLCJwcmV2R2ltIiwibmV4dEdpbSIsImdpbVZhcmlhbnRzIiwiZW50ZXIiLCJ0b3AiLCJsZWZ0IiwiYmFja2dyb3VkQ29sb3IiLCJzdGFuZGluZyIsInRyYW5zaXRpb24iLCJ5b3lvIiwiSW5maW5pdHkiLCJkdXJhdGlvbiIsImV4aXQiLCJjdXJyZW50RGF0YSIsImdldEdpbUN1cnJlbkRhdGEiLCJib3hTaGFkb3ciLCJmaXhHaW1zRGF0YUluZGV4IiwiZml4ZWRJbmRleCIsIm1vdmVTdGVwcyIsIm1vdmVEaXJlY3Rpb24iLCJ1cGRhdGVkSW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFJQSxJQUFNQSxTQUFTLEdBQUcsQ0FDakI7QUFDQ0MsSUFBRSxFQUFFLENBREw7QUFDUTtBQUNQQyxNQUFJLEVBQUUsTUFGUDtBQUdDQyxXQUFTLEVBQUUsQ0FIWjtBQUlDQyxNQUFJLEVBQUUsQ0FKUDtBQUtDQyxNQUFJLEVBQUUsQ0FMUDtBQU1DQyxZQUFVLEVB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aWxlIjoiLi9jb21wb25lbnRzL2dpbS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCB7IHdyYXAgfSBmcm9tICdwb3Btb3Rpb24nXG5cblxuXG5jb25zdCBnaW1zUHJvcHMgPSBbXG5cdHtcblx0XHRpZDogMCwgLy8gbmVlZGVkIHRvIGZpeCBcIiBrZXkgZm9yIG1hcCwgb3JnYW5pemUgbGF5ZXIgb3JkZXIgXCJcblx0XHR0eXBlOiBcIm1haW5cIixcblx0XHRsZWZ0UmlnaHQ6IDAsXG5cdFx0bmV4dDogMSxcblx0XHRwcmV2OiAyLFxuXHRcdHByb3BlcnRpZXM6IHtcblx0XHRcdHRpdGxlOiBcIm1haW5cIixcblx0XHRcdHNpemU6IDEwMCxcblx0XHRcdHBvc2k6IHsgeDogMzQsIHk6IDU1IH0sXG5cdFx0XHRzY2FsZTogMS44LFxuXHRcdFx0ekluZGV4OiAxMCxcblx0XHR9XG5cdH0sXG5cdHtcblx0XHRpZDogMSxcblx0XHR0eXBlOiBcIm5leHRcIixcblx0XHRsZWZ0UmlnaHQ6IDEsXG5cdFx0bmV4dDogMyxcblx0XHRwcmV2OiAwLFxuXHRcdHByb3BlcnRpZXM6IHtcblx0XHRcdHRpdGxlOiBcIm5leHRcIixcblx0XHRcdHNpemU6IDYwLFxuXHRcdFx0cG9zaTogeyB4OiA3NSwgeTogNDAgfSxcblx0XHRcdHNjYWxlOiAxLFxuXHRcdFx0ekluZGV4OiAxMCxcblxuXHRcdH1cblx0fSxcblx0e1xuXHRcdGlkOiAyLFxuXHRcdHR5cGU6IFwicHJldmlvdXNcIixcblx0XHRsZWZ0UmlnaHQ6IC0xLFxuXHRcdG5leHQ6IDAsXG5cdFx0cHJldjogNCxcblx0XHRwcm9wZXJ0aWVzOiB7XG5cdFx0XHR0aXRsZTogXCJwcmV2aW91c1wiLFxuXHRcdFx0c2l6ZTogODAsXG5cdFx0XHRwb3NpOiB7IHg6IDE1LCB5OiAxMiB9LFxuXHRcdFx0c2NhbGU6IDAuOSxcblx0XHRcdHpJbmRleDogMCxcblx0XHR9XG5cdH0sXG5cdHtcblx0XHRpZDogMyxcblx0XHR0eXBlOiBcIm9uSG9sZFwiLFxuXHRcdGxlZnRSaWdodDogMSxcblx0XHRuZXh0OiA0LFxuXHRcdHByZXY6IDEsXG5cdFx0cHJvcGVydGllczoge1xuXHRcdFx0dGl0bGU6IFwiLi4uXCIsXG5cdFx0XHRzaXplOiA1MCxcblx0XHRcdHBvc2k6IHsgeDogNjAsIHk6IDggfSxcblx0XHRcdHNjYWxlOiAwLjMsXG5cdFx0XHR6SW5kZXg6IDAsXG5cdFx0fVxuXHR9XG5cdCxcblx0e1xuXHRcdGlkOiA0LFxuXHRcdHR5cGU6IFwiaGlkZGVuXCIsXG5cdFx0bGVmdFJpZ2h0OiAtMSxcblx0XHRuZXh0OiAyLFxuXHRcdHByZXY6IDMsXG5cdFx0cHJvcGVydGllczoge1xuXHRcdFx0dGl0bGU6IFwiaGlkZGVuXCIsXG5cdFx0XHRzaXplOiA0MCxcblx0XHRcdHBvc2k6IHsgeDogNDAsIHk6IDkgfSxcblx0XHRcdHNjYWxlOiAwLjEsXG5cdFx0XHR6SW5kZXg6IDAsXG5cdFx0fVxuXHR9XG5dXG5cbmNvbnN0IGdldEdpbVByb3BzQnlJZCA9IChnaW1JZDogbnVtYmVyKSA9PiB7XG5cdHJldHVybiBnaW1zUHJvcHMuZmlsdGVyKChnaW1Qcm9wcykgPT4gZ2ltUHJvcHMuaWQgPT0gZ2ltSWQpLnBvcCgpIHx8IGdpbXNQcm9wc1swXTtcbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdpbSh7ZGF0YSwgZ2ltSWQsIGRpcmVjdGlvbiwgc3RlcHMsIG5leHRQb3NpdGlvbiB9KSB7XG5cblx0Y29uc3QgYnRuUmVmID0gdXNlUmVmKG51bGwpO1xuXHRjb25zdCBbYW5pbWF0aW9uRGVsYXksIHNldERlbGF5XSA9IHVzZVN0YXRlKE1hdGgucmFuZG9tKCkpO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0XHRidG5SZWYuY3VycmVudC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xuXHRcdC8vIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiBidG5SZWYuY3VycmVudC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpICwgMTMwMCk7XG5cdFx0Ly8gcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lcik7XG5cdH0sIFtdKVxuXHQvLyBidG5SZWYuY3VycmVudC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcImRpc2FibGVkXCIpO1xuXG5cdGNvbnNvbGUubG9nKFwicmVuZGVyIGdpbSA6IFtcIiArIGdpbUlkICsgXCJdIHJhbmRvbSBudW1iZXIgOiBcIiArIGFuaW1hdGlvbkRlbGF5KTtcblx0Y29uc3QgY3VycmVudEluZGV4ID0gd3JhcCgwLCBnaW1zUHJvcHMubGVuZ3RoLCBzdGVwcylcblx0Y29uc3QgY3VycmVudEdpbSA9IGdldEdpbVByb3BzQnlJZChnaW1JZCk7XG5cdGNvbnN0IHByZXZHaW0gPSAoZGlyZWN0aW9uIDwgMCkgPyBnZXRHaW1Qcm9wc0J5SWQoY3VycmVudEdpbS5wcmV2KSA6IGdldEdpbVByb3BzQnlJZChjdXJyZW50R2ltLm5leHQpO1xuXHRjb25zdCBuZXh0R2ltID0gKGRpcmVjdGlvbiA8IDApID8gZ2V0R2ltUHJvcHNCeUlkKGN1cnJlbnRHaW0ubmV4dCkgOiBnZXRHaW1Qcm9wc0J5SWQoY3VycmVudEdpbS5wcmV2KTtcblx0Y29uc3QgZ2ltVmFyaWFudHMgPSB7XG5cdFx0ZW50ZXI6IChkaXJlY3Rpb246IG51bWJlcikgPT4ge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0eTogMCxcblx0XHRcdFx0dG9wOiBgJHtwcmV2R2ltLnByb3BlcnRpZXMucG9zaS55fSVgLFxuXHRcdFx0XHRsZWZ0OiBgJHtwcmV2R2ltLnByb3BlcnRpZXMucG9zaS54fSVgLFxuXHRcdFx0XHQvLyBoZWlndGggOiBgJHtjdXJyZW50R2ltLnByb3BlcnRpZXMuc2l6ZX1weGAsXG5cdFx0XHRcdC8vIHdpZHRoIDogYCR7Y3VycmVudEdpbS5wcm9wZXJ0aWVzLnNpemV9cHhgLFxuXHRcdFx0XHRzY2FsZTogcHJldkdpbS5wcm9wZXJ0aWVzLnNjYWxlLFxuXHRcdFx0XHR6SW5kZXg6IGAke3ByZXZHaW0ucHJvcGVydGllcy56SW5kZXh9YCxcblx0XHRcdFx0YmFja2dyb3VkQ29sb3IgOiBkaXJlY3Rpb24gPyBcInJlZFwiIDogXCJibHVlXCIsXG5cdFx0XHR9O1xuXG5cdFx0fSxcblx0XHRzdGFuZGluZzoge1xuXHRcdFx0eTogWy0xMCAsIDEwXSxcblx0XHRcdHRvcDogYCR7Y3VycmVudEdpbS5wcm9wZXJ0aWVzLnBvc2kueX0lYCxcblx0XHRcdGxlZnQ6IGAke2N1cnJlbnRHaW0ucHJvcGVydGllcy5wb3NpLnh9JWAsXG5cdFx0XHQvLyBoIDogYCR7Y3VycmVudEdpbS5wcm9wZXJ0aWVzLnNpemV9cHhgLFxuXHRcdFx0Ly8gdyA6IGAke2N1cnJlbnRHaW0ucHJvcGVydGllcy5zaXplfXB4YCxcblx0XHRcdHNjYWxlOiBjdXJyZW50R2ltLnByb3BlcnRpZXMuc2NhbGUsXG5cdFx0XHR6SW5kZXg6ICBkaXJlY3Rpb24gPiAwICYmIGdpbUlkID09IDI/IDEwIDogYCR7Y3VycmVudEdpbS5wcm9wZXJ0aWVzLnpJbmRleH1gLFxuXHRcdFx0YmFja2dyb3VkQ29sb3IgOiBkaXJlY3Rpb24gPyBcInJlZFwiIDogXCJibHVlXCIsXG5cdFx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHRcdHk6IHtcblx0XHRcdFx0XHR5b3lvIDogSW5maW5pdHksXG5cdFx0XHRcdFx0ZHVyYXRpb246IDEsXG5cdFx0XHRcdFx0Ly8gZGVsYXkgOiBhbmltYXRpb25EZWxheSAqIDJcblx0XHRcdFx0fSxcblx0XHRcdFx0dHlwZSA6IFwic3ByaW5nXCIsXG5cdFx0XHRcdGR1cmF0aW9uIDogMS4zXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRleGl0OiAoZGlyZWN0aW9uOiBudW1iZXIpID0+IHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHkgOiAwLFxuXHRcdFx0XHR0b3A6IGAke25leHRHaW0ucHJvcGVydGllcy5wb3NpLnl9JWAsXG5cdFx0XHRcdGxlZnQ6IGAke25leHRHaW0ucHJvcGVydGllcy5wb3NpLnh9JWAsXG5cdFx0XHRcdC8vIGhlaWd0aCA6IGAke2N1cnJlbnRHaW0ucHJvcGVydGllcy5zaXplfXB4YCxcblx0XHRcdFx0Ly8gd2lkdGggOiBgJHtjdXJyZW50R2ltLnByb3BlcnRpZXMuc2l6ZX1weGAsXG5cdFx0XHRcdHNjYWxlOiBuZXh0R2ltLnByb3BlcnRpZXMuc2NhbGUsXG5cdFx0XHRcdHpJbmRleDogIGAke25leHRHaW0ucHJvcGVydGllcy56SW5kZXh9YCxcblx0XHRcdH07XG5cdFx0fVxuXHR9XG5cdGNvbnN0IGN1cnJlbnREYXRhID0gZ2V0R2ltQ3VycmVuRGF0YShkYXRhLCBnaW1JZCwgc3RlcHMsIGRpcmVjdGlvbik7XG5cdHJldHVybiAoXG5cdFx0Ly8gPEFuaW1hdGVQcmVzZW5jZSBpbml0aWFsPXtmYWxzZX0gY3VzdG9tPXtkaXJlY3Rpb24gKiAtMX0+XG5cdFx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0XHRyZWY9e2J0blJlZn1cblx0XHRcdFx0Y2xhc3NOYW1lPXtgYWJzb2x1dGUgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgJHtcImgtMzZcIiB8fCBcImgtNFwifSAke1widy0zNlwiIHx8IFwidy00XCJ9IHJvdW5kZWQtZnVsbCAkeyBcImJnLXJlZC00MDBcIn1gfVxuXHRcdFx0XHRrZXk9e3N0ZXBzfVxuXHRcdFx0XHR2YXJpYW50cz17Z2ltVmFyaWFudHN9XG5cdFx0XHRcdGluaXRpYWw9XCJlbnRlclwiXG5cdFx0XHRcdGFuaW1hdGU9XCJzdGFuZGluZ1wiXG5cdFx0XHRcdGN1c3RvbT17ZGlyZWN0aW9ufVxuXHRcdFx0XHR0cmFuc2l0aW9uPXt7XG5cdFx0XHRcdFx0Ly8gdHlwZTogXCJzcHJpbmdcIixcblx0XHRcdFx0XHQvLyBkdXJhdGlvbiA6IDQsXG5cdFx0XHRcdH19XG5cdFx0XHRcdHdoaWxlSG92ZXI9e3tcblx0XHRcdFx0XHRzY2FsZTogY3VycmVudEdpbS5wcm9wZXJ0aWVzLnNjYWxlICogMS4yLFxuXHRcdFx0XHRcdGJveFNoYWRvdzogJzAgMHB4IDIwcHggOHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KScsXG5cdFx0XHRcdFx0dHJhbnNpdGlvbiA6e1xuXHRcdFx0XHRcdFx0ZHVyYXRpb24gOiAwLjMsXG5cdFx0XHRcdFx0XHQvLyB5OiB7XG5cdFx0XHRcdFx0XHQvLyBcdHlveW8gOiBJbmZpbml0eSxcblx0XHRcdFx0XHRcdC8vIFx0ZHVyYXRpb246IDEsXG5cdFx0XHRcdFx0XHQvLyBcdGRlbGF5IDogYW5pbWF0aW9uRGVsYXkgKiAyXG5cdFx0XHRcdFx0XHQvLyB9LFxuXHRcdFx0XHRcdFx0Ly8geDoge1xuXHRcdFx0XHRcdFx0Ly8gXHR5b3lvIDogSW5maW5pdHksXG5cdFx0XHRcdFx0XHQvLyBcdGR1cmF0aW9uOiAxLFxuXHRcdFx0XHRcdFx0Ly8gfSxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9fVxuXHRcdFx0XHRvbk1vdXNlRG93bj17KCkgPT4gbmV4dFBvc2l0aW9uKGN1cnJlbnRHaW0ubGVmdFJpZ2h0KX1cblx0XHRcdD48aDE+XG5cdFx0XHRcdHtjdXJyZW50RGF0YS5jdXJyZW50fVxuXHRcdFx0PC9oMT5cblx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHQvLyA8L0FuaW1hdGVQcmVzZW5jZT5cblx0KTtcbn1cblxuZnVuY3Rpb24gZml4R2ltc0RhdGFJbmRleChkYXRhLCBzdGVwcykge1xuXHRsZXQgZml4ZWRJbmRleCA9IHN0ZXBzIDwgMCA/ICgoZGF0YS5sZW5ndGgpICsgKHN0ZXBzICUgZGF0YS5sZW5ndGgpKSAlIGRhdGEubGVuZ3RoICA6IHN0ZXBzICUgZGF0YS5sZW5ndGg7XG5cdHJldHVybiAoZml4ZWRJbmRleCk7XG59XG5cbmZ1bmN0aW9uIGdldEdpbUN1cnJlbkRhdGEoZGF0YSwgZ2ltSWQsIG1vdmVTdGVwcywgbW92ZURpcmVjdGlvbikge1xuXHRzd2l0Y2ggKGdpbUlkKSB7XG5cdFx0Y2FzZSAwOiAvLyBtYWluIGdpbVxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Y3VycmVudCA6IGRhdGFbZml4R2ltc0RhdGFJbmRleChkYXRhLCBtb3ZlU3RlcHMgKyAxKV0sXG5cdFx0XHRcdG5leHQgOiBkYXRhW2ZpeEdpbXNEYXRhSW5kZXgoZGF0YSwgbW92ZVN0ZXBzICsgMildLFxuXHRcdFx0XHRwcmV2IDogZGF0YVtmaXhHaW1zRGF0YUluZGV4KGRhdGEsIG1vdmVTdGVwcyApXSxcblx0XHRcdH07XG5cdFx0Y2FzZSAxOiAvLyBuZXh0IGdpbVxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Y3VycmVudCA6IGRhdGFbZml4R2ltc0RhdGFJbmRleChkYXRhLCBtb3ZlU3RlcHMgKyAyKV0sXG5cdFx0XHRcdG5leHQgOiBkYXRhW2ZpeEdpbXNEYXRhSW5kZXgoZGF0YSwgbW92ZVN0ZXBzICsgMyldLFxuXHRcdFx0XHRwcmV2IDogZGF0YVtmaXhHaW1zRGF0YUluZGV4KGRhdGEsIG1vdmVTdGVwcyArIDEpXSxcblx0XHRcdH07XG5cdFx0Y2FzZSAyOiAvLyBwcmV2IGdpbVxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Y3VycmVudCA6IGRhdGFbZml4R2ltc0RhdGFJbmRleChkYXRhLCBtb3ZlU3RlcHMpXSxcblx0XHRcdFx0bmV4dCA6IGRhdGFbZml4R2ltc0RhdGFJbmRleChkYXRhLCBtb3ZlU3RlcHMgLSAxKV0sXG5cdFx0XHRcdHByZXYgOiBkYXRhW2ZpeEdpbXNEYXRhSW5kZXgoZGF0YSwgbW92ZVN0ZXBzICsgMSldLFxuXHRcdFx0fTtcblx0XHRjYXNlIDM6IC8vIG9uSG9sZCBnaW1cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGN1cnJlbnQgOiBkYXRhW2ZpeEdpbXNEYXRhSW5kZXgoZGF0YSwgbW92ZVN0ZXBzICsgMyldLFxuXHRcdFx0XHRuZXh0IDogZGF0YVtmaXhHaW1zRGF0YUluZGV4KGRhdGEsIG1vdmVTdGVwcyArIDQpXSxcblx0XHRcdFx0cHJldiA6IGRhdGFbZml4R2ltc0RhdGFJbmRleChkYXRhLCBtb3ZlU3RlcHMgKyAyKV0sXG5cdFx0XHR9O1xuXHRcdGNhc2UgNDogLy8gaGlkZGVuIGdpbVxuXHRcdFx0bGV0IHVwZGF0ZWRJbmRleCA9IChtb3ZlRGlyZWN0aW9uIDwgMCkgPyBtb3ZlU3RlcHMgOiBtb3ZlU3RlcHMgKyAzO1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Y3VycmVudCA6IGRhdGFbZml4R2ltc0RhdGFJbmRleChkYXRhLCBtb3ZlU3RlcHMgKyA0KV0sXG5cdFx0XHRcdG5leHQgOiBkYXRhW2ZpeEdpbXNEYXRhSW5kZXgoZGF0YSwgbW92ZVN0ZXBzICsgNSldLFxuXHRcdFx0XHRwcmV2IDogZGF0YVtmaXhHaW1zRGF0YUluZGV4KGRhdGEsIHVwZGF0ZWRJbmRleCldLFxuXHRcdFx0fTtcblx0XHR9XG5cdHJldHVybiAoMCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/gim.tsx\n");

/***/ })

})