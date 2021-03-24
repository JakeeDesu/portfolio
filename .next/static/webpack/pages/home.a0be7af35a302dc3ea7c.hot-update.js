webpackHotUpdate_N_E("pages/home",{

/***/ "./components/gim.tsx":
/*!****************************!*\
  !*** ./components/gim.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Gim; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var popmotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! popmotion */ \"./node_modules/popmotion/dist/es/index.js\");\n\n\nvar _jsxFileName = \"/home/hamza/Desktop/portfolio/components/gim.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\nvar gimsProps = [{\n  id: 0,\n  // needed to fix \" key for map, organize layer order \"\n  type: \"main\",\n  leftRight: 0,\n  next: 1,\n  prev: 2,\n  properties: {\n    title: \"main\",\n    size: 100,\n    posi: {\n      x: 40,\n      y: 55\n    },\n    scale: 2,\n    zIndex: 10\n  }\n}, {\n  id: 1,\n  type: \"next\",\n  leftRight: 1,\n  next: 3,\n  prev: 0,\n  properties: {\n    title: \"next\",\n    size: 60,\n    posi: {\n      x: 85,\n      y: 45\n    },\n    scale: 1.2,\n    zIndex: 10\n  }\n}, {\n  id: 2,\n  type: \"previous\",\n  leftRight: -1,\n  next: 0,\n  prev: 4,\n  properties: {\n    title: \"previous\",\n    size: 80,\n    posi: {\n      x: 5,\n      y: 12\n    },\n    scale: 1.1,\n    zIndex: 0\n  }\n}, {\n  id: 3,\n  type: \"onHold\",\n  leftRight: 1,\n  next: 4,\n  prev: 1,\n  properties: {\n    title: \"...\",\n    size: 50,\n    posi: {\n      x: 60,\n      y: 18\n    },\n    scale: 0.5,\n    zIndex: 0\n  }\n}, {\n  id: 4,\n  type: \"hidden\",\n  leftRight: -1,\n  next: 2,\n  prev: 3,\n  properties: {\n    title: \"hidden\",\n    size: 40,\n    posi: {\n      x: 40,\n      y: 9\n    },\n    scale: 0.4,\n    zIndex: 0\n  }\n}];\n\nvar getGimPropsById = function getGimPropsById(gimId) {\n  return gimsProps.filter(function (gimProps) {\n    return gimProps.id == gimId;\n  }).pop() || gimsProps[0];\n};\n\nfunction Gim(_ref) {\n  _s();\n\n  var data = _ref.data,\n      gimId = _ref.gimId,\n      direction = _ref.direction,\n      steps = _ref.steps,\n      nextPosition = _ref.nextPosition;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(Math.random()),\n      animationDelay = _useState[0],\n      setDelay = _useState[1];\n\n  console.log(\"render gim : [\" + gimId + \"] random number : \" + animationDelay);\n  var currentIndex = Object(popmotion__WEBPACK_IMPORTED_MODULE_3__[\"wrap\"])(0, gimsProps.length, steps);\n  var currentGim = getGimPropsById(gimId);\n  var prevGim = direction < 0 ? getGimPropsById(currentGim.prev) : getGimPropsById(currentGim.next);\n  var nextGim = direction < 0 ? getGimPropsById(currentGim.next) : getGimPropsById(currentGim.prev);\n  var gimVariants = {\n    enter: function enter(direction) {\n      return {\n        y: 0,\n        top: \"\".concat(prevGim.properties.posi.y, \"%\"),\n        left: \"\".concat(prevGim.properties.posi.x, \"%\"),\n        // heigth : `${currentGim.properties.size}px`,\n        // width : `${currentGim.properties.size}px`,\n        scale: prevGim.properties.scale,\n        zIndex: \"\".concat(prevGim.properties.zIndex),\n        backgroudColor: direction ? \"red\" : \"blue\"\n      };\n    },\n    standing: {\n      y: [-10, 10],\n      top: \"\".concat(currentGim.properties.posi.y, \"%\"),\n      left: \"\".concat(currentGim.properties.posi.x, \"%\"),\n      // h : `${currentGim.properties.size}px`,\n      // w : `${currentGim.properties.size}px`,\n      scale: currentGim.properties.scale,\n      zIndex: direction > 0 && gimId == 2 ? 10 : \"\".concat(currentGim.properties.zIndex),\n      backgroudColor: direction ? \"red\" : \"blue\",\n      transition: {\n        y: {\n          yoyo: Infinity,\n          duration: 1,\n          delay: animationDelay * 2\n        },\n        type: \"spring\",\n        duration: 1.3\n      }\n    },\n    exit: function exit(direction) {\n      return {\n        y: 0,\n        top: \"\".concat(nextGim.properties.posi.y, \"%\"),\n        left: \"\".concat(nextGim.properties.posi.x, \"%\"),\n        // heigth : `${currentGim.properties.size}px`,\n        // width : `${currentGim.properties.size}px`,\n        scale: nextGim.properties.scale,\n        zIndex: \"\".concat(nextGim.properties.zIndex)\n      };\n    }\n  };\n  var currentData = getGimCurrenData(data, gimId, steps, direction);\n  return (\n    /*#__PURE__*/\n    // <AnimatePresence initial={false} custom={direction * -1}>\n    Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"motion\"].div, {\n      className: \"absolute flex justify-center items-center \".concat(\"h-36\" || false, \" \").concat(\"w-36\" || false, \" rounded-full \", \"bg-red-400\"),\n      variants: gimVariants,\n      initial: \"enter\",\n      animate: \"standing\",\n      custom: direction,\n      transition: {// type: \"spring\",\n        // duration : 4,\n      },\n      whileHover: {\n        scale: currentGim.properties.scale * 1.2,\n        boxShadow: '0 0px 20px 8px rgba(255, 255, 255, 0.5)',\n        transition: {\n          duration: 0.3 // y: {\n          // \tyoyo : Infinity,\n          // \tduration: 1,\n          // \tdelay : animationDelay * 2\n          // },\n          // x: {\n          // \tyoyo : Infinity,\n          // \tduration: 1,\n          // },\n\n        }\n      },\n      onMouseDown: function onMouseDown() {\n        return nextPosition(currentGim.leftRight);\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: currentData.current\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 174,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: \"/home\",\n        children: \"link\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 177,\n        columnNumber: 4\n      }, this)]\n    }, steps, true, {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 4\n    }, this) // </AnimatePresence>\n\n  );\n}\n\n_s(Gim, \"9u7iZYPcA5+WazSNBWnscW1HO9c=\");\n\n_c = Gim;\n\nfunction fixGimsDataIndex(data, steps) {\n  var fixedIndex = steps < 0 ? (data.length + steps % data.length) % data.length : steps % data.length;\n  return fixedIndex;\n}\n\nfunction getGimCurrenData(data, gimId, moveSteps, moveDirection) {\n  switch (gimId) {\n    case 0:\n      // main gim\n      return {\n        current: data[fixGimsDataIndex(data, moveSteps + 1)],\n        next: data[fixGimsDataIndex(data, moveSteps + 2)],\n        prev: data[fixGimsDataIndex(data, moveSteps)]\n      };\n\n    case 1:\n      // next gim\n      return {\n        current: data[fixGimsDataIndex(data, moveSteps + 2)],\n        next: data[fixGimsDataIndex(data, moveSteps + 3)],\n        prev: data[fixGimsDataIndex(data, moveSteps + 1)]\n      };\n\n    case 2:\n      // prev gim\n      return {\n        current: data[fixGimsDataIndex(data, moveSteps)],\n        next: data[fixGimsDataIndex(data, moveSteps - 1)],\n        prev: data[fixGimsDataIndex(data, moveSteps + 1)]\n      };\n\n    case 3:\n      // onHold gim\n      return {\n        current: data[fixGimsDataIndex(data, moveSteps + 3)],\n        next: data[fixGimsDataIndex(data, moveSteps + 4)],\n        prev: data[fixGimsDataIndex(data, moveSteps + 2)]\n      };\n\n    case 4:\n      // hidden gim\n      var updatedIndex = moveDirection < 0 ? moveSteps : moveSteps + 3;\n      return {\n        current: data[fixGimsDataIndex(data, moveSteps + 4)],\n        next: data[fixGimsDataIndex(data, moveSteps + 5)],\n        prev: data[fixGimsDataIndex(data, updatedIndex)]\n      };\n  }\n\n  return 0;\n}\n\nvar _c;\n\n$RefreshReg$(_c, \"Gim\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9naW0udHN4P2YyYTkiXSwibmFtZXMiOlsiZ2ltc1Byb3BzIiwiaWQiLCJ0eXBlIiwibGVmdFJpZ2h0IiwibmV4dCIsInByZXYiLCJwcm9wZXJ0aWVzIiwidGl0bGUiLCJzaXplIiwicG9zaSIsIngiLCJ5Iiwic2NhbGUiLCJ6SW5kZXgiLCJnZXRHaW1Qcm9wc0J5SWQiLCJnaW1JZCIsImZpbHRlciIsImdpbVByb3BzIiwicG9wIiwiR2ltIiwiZGF0YSIsImRpcmVjdGlvbiIsInN0ZXBzIiwibmV4dFBvc2l0aW9uIiwidXNlU3RhdGUiLCJNYXRoIiwicmFuZG9tIiwiYW5pbWF0aW9uRGVsYXkiLCJzZXREZWxheSIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50SW5kZXgiLCJ3cmFwIiwibGVuZ3RoIiwiY3VycmVudEdpbSIsInByZXZHaW0iLCJuZXh0R2ltIiwiZ2ltVmFyaWFudHMiLCJlbnRlciIsInRvcCIsImxlZnQiLCJiYWNrZ3JvdWRDb2xvciIsInN0YW5kaW5nIiwidHJhbnNpdGlvbiIsInlveW8iLCJJbmZpbml0eSIsImR1cmF0aW9uIiwiZGVsYXkiLCJleGl0IiwiY3VycmVudERhdGEiLCJnZXRHaW1DdXJyZW5EYXRhIiwiYm94U2hhZG93IiwiY3VycmVudCIsImZpeEdpbXNEYXRhSW5kZXgiLCJmaXhlZEluZGV4IiwibW92ZVN0ZXBzIiwibW92ZURpcmVjdGlvbiIsInVwZGF0ZWRJbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUtBLElBQU1BLFNBQVMsR0FBRyxDQUNqQjtBQUNDQyxJQUFFLEVBQUUsQ0FETDtBQUNRO0FBQ1BDLE1BQUksRUFBRSxNQUZQO0FBR0NDLFdBQVMsRUFBRSxDQUhaO0FBSUNDLE1BQUksRUFBRSxDQUpQO0FBS0NDLE1BQUksRUFBRSxDQUxQO0FBTUNDLFlBQVUsRUFBRTtBQUNYQyxTQUFLLEVBQUUsTUFESTtBQUVYQyxRQUFJLEVB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RUFBR2UsSUFBSSxDQUFDaUMsZ0JBQWdCLENBQUNqQyxJQUFELEVBQU9tQyxTQUFTLEdBQUcsQ0FBbkIsQ0FBakI7QUFITCxPQUFQOztBQUtELFNBQUssQ0FBTDtBQUFRO0FBQ1AsYUFBTztBQUNOSCxlQUFPLEVBQUdoQyxJQUFJLENBQUNpQyxnQkFBZ0IsQ0FBQ2pDLElBQUQsRUFBT21DLFNBQVMsR0FBRyxDQUFuQixDQUFqQixDQURSO0FBRU5uRCxZQUFJLEVBQUdnQixJQUFJLENBQUNpQyxnQkFBZ0IsQ0FBQ2pDLElBQUQsRUFBT21DLFNBQVMsR0FBRyxDQUFuQixDQUFqQixDQUZMO0FBR05sRCxZQUFJLEVBQUdlLElBQUksQ0FBQ2lDLGdCQUFnQixDQUFDakMsSUFBRCxFQUFPbUMsU0FBUyxHQUFHLENBQW5CLENBQWpCO0FBSEwsT0FBUDs7QUFLRCxTQUFLLENBQUw7QUFBUTtBQUNQLFVBQUlFLFlBQVksR0FBSUQsYUFBYSxHQUFHLENBQWpCLEdBQXNCRCxTQUF0QixHQUFrQ0EsU0FBUyxHQUFHLENBQWpFO0FBQ0EsYUFBTztBQUNOSCxlQUFPLEVBQUdoQyxJQUFJLENBQUNpQyxnQkFBZ0IsQ0FBQ2pDLElBQUQsRUFBT21DLFNBQVMsR0FBRyxDQUFuQixDQUFqQixDQURSO0FBRU5uRCxZQUFJLEVBQUdnQixJQUFJLENBQUNpQyxnQkFBZ0IsQ0FBQ2pDLElBQUQsRUFBT21DLFNBQVMsR0FBRyxDQUFuQixDQUFqQixDQUZMO0FBR05sRCxZQUFJLEVBQUdlLElBQUksQ0FBQ2lDLGdCQUFnQixDQUFDakMsSUFBRCxFQUFPcUMsWUFBUCxDQUFqQjtBQUhMLE9BQVA7QUEzQkY7O0FBaUNBLFNBQVEsQ0FBUjtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9naW0udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCB7IHdyYXAgfSBmcm9tICdwb3Btb3Rpb24nXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnbmV4dC9saW5rJ1xuXG5cblxuY29uc3QgZ2ltc1Byb3BzID0gW1xuXHR7XG5cdFx0aWQ6IDAsIC8vIG5lZWRlZCB0byBmaXggXCIga2V5IGZvciBtYXAsIG9yZ2FuaXplIGxheWVyIG9yZGVyIFwiXG5cdFx0dHlwZTogXCJtYWluXCIsXG5cdFx0bGVmdFJpZ2h0OiAwLFxuXHRcdG5leHQ6IDEsXG5cdFx0cHJldjogMixcblx0XHRwcm9wZXJ0aWVzOiB7XG5cdFx0XHR0aXRsZTogXCJtYWluXCIsXG5cdFx0XHRzaXplOiAxMDAsXG5cdFx0XHRwb3NpOiB7IHg6IDQwLCB5OiA1NSB9LFxuXHRcdFx0c2NhbGU6IDIsXG5cdFx0XHR6SW5kZXg6IDEwLFxuXHRcdH1cblx0fSxcblx0e1xuXHRcdGlkOiAxLFxuXHRcdHR5cGU6IFwibmV4dFwiLFxuXHRcdGxlZnRSaWdodDogMSxcblx0XHRuZXh0OiAzLFxuXHRcdHByZXY6IDAsXG5cdFx0cHJvcGVydGllczoge1xuXHRcdFx0dGl0bGU6IFwibmV4dFwiLFxuXHRcdFx0c2l6ZTogNjAsXG5cdFx0XHRwb3NpOiB7IHg6IDg1LCB5OiA0NSB9LFxuXHRcdFx0c2NhbGU6IDEuMixcblx0XHRcdHpJbmRleDogMTAsXG5cblx0XHR9XG5cdH0sXG5cdHtcblx0XHRpZDogMixcblx0XHR0eXBlOiBcInByZXZpb3VzXCIsXG5cdFx0bGVmdFJpZ2h0OiAtMSxcblx0XHRuZXh0OiAwLFxuXHRcdHByZXY6IDQsXG5cdFx0cHJvcGVydGllczoge1xuXHRcdFx0dGl0bGU6IFwicHJldmlvdXNcIixcblx0XHRcdHNpemU6IDgwLFxuXHRcdFx0cG9zaTogeyB4OiA1LCB5OiAxMiB9LFxuXHRcdFx0c2NhbGU6IDEuMSxcblx0XHRcdHpJbmRleDogMCxcblx0XHR9XG5cdH0sXG5cdHtcblx0XHRpZDogMyxcblx0XHR0eXBlOiBcIm9uSG9sZFwiLFxuXHRcdGxlZnRSaWdodDogMSxcblx0XHRuZXh0OiA0LFxuXHRcdHByZXY6IDEsXG5cdFx0cHJvcGVydGllczoge1xuXHRcdFx0dGl0bGU6IFwiLi4uXCIsXG5cdFx0XHRzaXplOiA1MCxcblx0XHRcdHBvc2k6IHsgeDogNjAsIHk6IDE4IH0sXG5cdFx0XHRzY2FsZTogMC41LFxuXHRcdFx0ekluZGV4OiAwLFxuXHRcdH1cblx0fVxuXHQsXG5cdHtcblx0XHRpZDogNCwgXG5cdFx0dHlwZTogXCJoaWRkZW5cIixcblx0XHRsZWZ0UmlnaHQ6IC0xLFxuXHRcdG5leHQ6IDIsXG5cdFx0cHJldjogMyxcblx0XHRwcm9wZXJ0aWVzOiB7XG5cdFx0XHR0aXRsZTogXCJoaWRkZW5cIixcblx0XHRcdHNpemU6IDQwLFxuXHRcdFx0cG9zaTogeyB4OiA0MCwgeTogOSB9LFxuXHRcdFx0c2NhbGU6IDAuNCxcblx0XHRcdHpJbmRleDogMCxcblx0XHR9XG5cdH1cbl1cblxuY29uc3QgZ2V0R2ltUHJvcHNCeUlkID0gKGdpbUlkOiBudW1iZXIpID0+IHtcblx0cmV0dXJuIGdpbXNQcm9wcy5maWx0ZXIoKGdpbVByb3BzKSA9PiBnaW1Qcm9wcy5pZCA9PSBnaW1JZCkucG9wKCkgfHwgZ2ltc1Byb3BzWzBdO1xufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2ltKHtkYXRhLCBnaW1JZCwgZGlyZWN0aW9uLCBzdGVwcywgbmV4dFBvc2l0aW9uIH0pIHtcblxuXHRjb25zdCBbYW5pbWF0aW9uRGVsYXksIHNldERlbGF5XSA9IHVzZVN0YXRlKE1hdGgucmFuZG9tKCkpO1xuXG5cdGNvbnNvbGUubG9nKFwicmVuZGVyIGdpbSA6IFtcIiArIGdpbUlkICsgXCJdIHJhbmRvbSBudW1iZXIgOiBcIiArIGFuaW1hdGlvbkRlbGF5KTtcblx0Y29uc3QgY3VycmVudEluZGV4ID0gd3JhcCgwLCBnaW1zUHJvcHMubGVuZ3RoLCBzdGVwcylcblx0Y29uc3QgY3VycmVudEdpbSA9IGdldEdpbVByb3BzQnlJZChnaW1JZCk7XG5cdGNvbnN0IHByZXZHaW0gPSAoZGlyZWN0aW9uIDwgMCkgPyBnZXRHaW1Qcm9wc0J5SWQoY3VycmVudEdpbS5wcmV2KSA6IGdldEdpbVByb3BzQnlJZChjdXJyZW50R2ltLm5leHQpO1xuXHRjb25zdCBuZXh0R2ltID0gKGRpcmVjdGlvbiA8IDApID8gZ2V0R2ltUHJvcHNCeUlkKGN1cnJlbnRHaW0ubmV4dCkgOiBnZXRHaW1Qcm9wc0J5SWQoY3VycmVudEdpbS5wcmV2KTtcblx0Y29uc3QgZ2ltVmFyaWFudHMgPSB7XG5cdFx0ZW50ZXI6IChkaXJlY3Rpb246IG51bWJlcikgPT4ge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0eTogMCxcblx0XHRcdFx0dG9wOiBgJHtwcmV2R2ltLnByb3BlcnRpZXMucG9zaS55fSVgLFxuXHRcdFx0XHRsZWZ0OiBgJHtwcmV2R2ltLnByb3BlcnRpZXMucG9zaS54fSVgLFxuXHRcdFx0XHQvLyBoZWlndGggOiBgJHtjdXJyZW50R2ltLnByb3BlcnRpZXMuc2l6ZX1weGAsXG5cdFx0XHRcdC8vIHdpZHRoIDogYCR7Y3VycmVudEdpbS5wcm9wZXJ0aWVzLnNpemV9cHhgLFxuXHRcdFx0XHRzY2FsZTogcHJldkdpbS5wcm9wZXJ0aWVzLnNjYWxlLFxuXHRcdFx0XHR6SW5kZXg6IGAke3ByZXZHaW0ucHJvcGVydGllcy56SW5kZXh9YCxcblx0XHRcdFx0YmFja2dyb3VkQ29sb3IgOiBkaXJlY3Rpb24gPyBcInJlZFwiIDogXCJibHVlXCIsXG5cdFx0XHR9O1xuXG5cdFx0fSxcblx0XHRzdGFuZGluZzoge1xuXHRcdFx0eTogWy0xMCAsIDEwXSxcblx0XHRcdHRvcDogYCR7Y3VycmVudEdpbS5wcm9wZXJ0aWVzLnBvc2kueX0lYCxcblx0XHRcdGxlZnQ6IGAke2N1cnJlbnRHaW0ucHJvcGVydGllcy5wb3NpLnh9JWAsXG5cdFx0XHQvLyBoIDogYCR7Y3VycmVudEdpbS5wcm9wZXJ0aWVzLnNpemV9cHhgLFxuXHRcdFx0Ly8gdyA6IGAke2N1cnJlbnRHaW0ucHJvcGVydGllcy5zaXplfXB4YCxcblx0XHRcdHNjYWxlOiBjdXJyZW50R2ltLnByb3BlcnRpZXMuc2NhbGUsXG5cdFx0XHR6SW5kZXg6ICBkaXJlY3Rpb24gPiAwICYmIGdpbUlkID09IDI/IDEwIDogYCR7Y3VycmVudEdpbS5wcm9wZXJ0aWVzLnpJbmRleH1gLFxuXHRcdFx0YmFja2dyb3VkQ29sb3IgOiBkaXJlY3Rpb24gPyBcInJlZFwiIDogXCJibHVlXCIsXG5cdFx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHRcdHk6IHtcblx0XHRcdFx0XHR5b3lvIDogSW5maW5pdHksXG5cdFx0XHRcdFx0ZHVyYXRpb246IDEsXG5cdFx0XHRcdFx0ZGVsYXkgOiBhbmltYXRpb25EZWxheSAqIDJcblx0XHRcdFx0fSxcblx0XHRcdFx0dHlwZSA6IFwic3ByaW5nXCIsXG5cdFx0XHRcdGR1cmF0aW9uIDogMS4zXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRleGl0OiAoZGlyZWN0aW9uOiBudW1iZXIpID0+IHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHkgOiAwLFxuXHRcdFx0XHR0b3A6IGAke25leHRHaW0ucHJvcGVydGllcy5wb3NpLnl9JWAsXG5cdFx0XHRcdGxlZnQ6IGAke25leHRHaW0ucHJvcGVydGllcy5wb3NpLnh9JWAsXG5cdFx0XHRcdC8vIGhlaWd0aCA6IGAke2N1cnJlbnRHaW0ucHJvcGVydGllcy5zaXplfXB4YCxcblx0XHRcdFx0Ly8gd2lkdGggOiBgJHtjdXJyZW50R2ltLnByb3BlcnRpZXMuc2l6ZX1weGAsXG5cdFx0XHRcdHNjYWxlOiBuZXh0R2ltLnByb3BlcnRpZXMuc2NhbGUsXG5cdFx0XHRcdHpJbmRleDogIGAke25leHRHaW0ucHJvcGVydGllcy56SW5kZXh9YCxcblx0XHRcdH07XG5cdFx0fVxuXHR9XG5cdGNvbnN0IGN1cnJlbnREYXRhID0gZ2V0R2ltQ3VycmVuRGF0YShkYXRhLCBnaW1JZCwgc3RlcHMsIGRpcmVjdGlvbik7XG5cdHJldHVybiAoXG5cdFx0Ly8gPEFuaW1hdGVQcmVzZW5jZSBpbml0aWFsPXtmYWxzZX0gY3VzdG9tPXtkaXJlY3Rpb24gKiAtMX0+XG5cdFx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0XHRjbGFzc05hbWU9e2BhYnNvbHV0ZSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciAke1wiaC0zNlwiIHx8IFwiaC00XCJ9ICR7XCJ3LTM2XCIgfHwgXCJ3LTRcIn0gcm91bmRlZC1mdWxsICR7IFwiYmctcmVkLTQwMFwifWB9XG5cdFx0XHRcdGtleT17c3RlcHN9XG5cdFx0XHRcdHZhcmlhbnRzPXtnaW1WYXJpYW50c31cblx0XHRcdFx0aW5pdGlhbD1cImVudGVyXCJcblx0XHRcdFx0YW5pbWF0ZT1cInN0YW5kaW5nXCJcblx0XHRcdFx0Y3VzdG9tPXtkaXJlY3Rpb259XG5cdFx0XHRcdHRyYW5zaXRpb249e3tcblx0XHRcdFx0XHQvLyB0eXBlOiBcInNwcmluZ1wiLFxuXHRcdFx0XHRcdC8vIGR1cmF0aW9uIDogNCxcblx0XHRcdFx0fX1cblx0XHRcdFx0d2hpbGVIb3Zlcj17e1xuXHRcdFx0XHRcdHNjYWxlOiBjdXJyZW50R2ltLnByb3BlcnRpZXMuc2NhbGUgKiAxLjIsXG5cdFx0XHRcdFx0Ym94U2hhZG93OiAnMCAwcHggMjBweCA4cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJyxcblx0XHRcdFx0XHR0cmFuc2l0aW9uIDp7XG5cdFx0XHRcdFx0XHRkdXJhdGlvbiA6IDAuMyxcblx0XHRcdFx0XHRcdC8vIHk6IHtcblx0XHRcdFx0XHRcdC8vIFx0eW95byA6IEluZmluaXR5LFxuXHRcdFx0XHRcdFx0Ly8gXHRkdXJhdGlvbjogMSxcblx0XHRcdFx0XHRcdC8vIFx0ZGVsYXkgOiBhbmltYXRpb25EZWxheSAqIDJcblx0XHRcdFx0XHRcdC8vIH0sXG5cdFx0XHRcdFx0XHQvLyB4OiB7XG5cdFx0XHRcdFx0XHQvLyBcdHlveW8gOiBJbmZpbml0eSxcblx0XHRcdFx0XHRcdC8vIFx0ZHVyYXRpb246IDEsXG5cdFx0XHRcdFx0XHQvLyB9LFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdH19XG5cdFx0XHRcdG9uTW91c2VEb3duPXsoKSA9PiBuZXh0UG9zaXRpb24oY3VycmVudEdpbS5sZWZ0UmlnaHQpfVxuXHRcdFx0PjxoMT5cblx0XHRcdFx0e2N1cnJlbnREYXRhLmN1cnJlbnR9XG5cdFx0XHQ8L2gxPlxuXHRcdFx0PGEgaHJlZj0nL2hvbWUnPmxpbms8L2E+XG5cdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0Ly8gPC9BbmltYXRlUHJlc2VuY2U+XG5cdCk7XG59XG5cbmZ1bmN0aW9uIGZpeEdpbXNEYXRhSW5kZXgoZGF0YSwgc3RlcHMpIHtcblx0bGV0IGZpeGVkSW5kZXggPSBzdGVwcyA8IDAgPyAoKGRhdGEubGVuZ3RoKSArIChzdGVwcyAlIGRhdGEubGVuZ3RoKSkgJSBkYXRhLmxlbmd0aCAgOiBzdGVwcyAlIGRhdGEubGVuZ3RoO1xuXHRyZXR1cm4gKGZpeGVkSW5kZXgpO1xufVxuXG5mdW5jdGlvbiBnZXRHaW1DdXJyZW5EYXRhKGRhdGEsIGdpbUlkLCBtb3ZlU3RlcHMsIG1vdmVEaXJlY3Rpb24pIHtcblx0c3dpdGNoIChnaW1JZCkge1xuXHRcdGNhc2UgMDogLy8gbWFpbiBnaW1cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGN1cnJlbnQgOiBkYXRhW2ZpeEdpbXNEYXRhSW5kZXgoZGF0YSwgbW92ZVN0ZXBzICsgMSldLFxuXHRcdFx0XHRuZXh0IDogZGF0YVtmaXhHaW1zRGF0YUluZGV4KGRhdGEsIG1vdmVTdGVwcyArIDIpXSxcblx0XHRcdFx0cHJldiA6IGRhdGFbZml4R2ltc0RhdGFJbmRleChkYXRhLCBtb3ZlU3RlcHMgKV0sXG5cdFx0XHR9O1xuXHRcdGNhc2UgMTogLy8gbmV4dCBnaW1cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGN1cnJlbnQgOiBkYXRhW2ZpeEdpbXNEYXRhSW5kZXgoZGF0YSwgbW92ZVN0ZXBzICsgMildLFxuXHRcdFx0XHRuZXh0IDogZGF0YVtmaXhHaW1zRGF0YUluZGV4KGRhdGEsIG1vdmVTdGVwcyArIDMpXSxcblx0XHRcdFx0cHJldiA6IGRhdGFbZml4R2ltc0RhdGFJbmRleChkYXRhLCBtb3ZlU3RlcHMgKyAxKV0sXG5cdFx0XHR9O1xuXHRcdGNhc2UgMjogLy8gcHJldiBnaW1cblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGN1cnJlbnQgOiBkYXRhW2ZpeEdpbXNEYXRhSW5kZXgoZGF0YSwgbW92ZVN0ZXBzKV0sXG5cdFx0XHRcdG5leHQgOiBkYXRhW2ZpeEdpbXNEYXRhSW5kZXgoZGF0YSwgbW92ZVN0ZXBzIC0gMSldLFxuXHRcdFx0XHRwcmV2IDogZGF0YVtmaXhHaW1zRGF0YUluZGV4KGRhdGEsIG1vdmVTdGVwcyArIDEpXSxcblx0XHRcdH07XG5cdFx0Y2FzZSAzOiAvLyBvbkhvbGQgZ2ltXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRjdXJyZW50IDogZGF0YVtmaXhHaW1zRGF0YUluZGV4KGRhdGEsIG1vdmVTdGVwcyArIDMpXSxcblx0XHRcdFx0bmV4dCA6IGRhdGFbZml4R2ltc0RhdGFJbmRleChkYXRhLCBtb3ZlU3RlcHMgKyA0KV0sXG5cdFx0XHRcdHByZXYgOiBkYXRhW2ZpeEdpbXNEYXRhSW5kZXgoZGF0YSwgbW92ZVN0ZXBzICsgMildLFxuXHRcdFx0fTtcblx0XHRjYXNlIDQ6IC8vIGhpZGRlbiBnaW1cblx0XHRcdGxldCB1cGRhdGVkSW5kZXggPSAobW92ZURpcmVjdGlvbiA8IDApID8gbW92ZVN0ZXBzIDogbW92ZVN0ZXBzICsgMztcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGN1cnJlbnQgOiBkYXRhW2ZpeEdpbXNEYXRhSW5kZXgoZGF0YSwgbW92ZVN0ZXBzICsgNCldLFxuXHRcdFx0XHRuZXh0IDogZGF0YVtmaXhHaW1zRGF0YUluZGV4KGRhdGEsIG1vdmVTdGVwcyArIDUpXSxcblx0XHRcdFx0cHJldiA6IGRhdGFbZml4R2ltc0RhdGFJbmRleChkYXRhLCB1cGRhdGVkSW5kZXgpXSxcblx0XHRcdH07XG5cdFx0fVxuXHRyZXR1cm4gKDApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/gim.tsx\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
false,

/***/ "./node_modules/next/dist/client/link.js":
false,

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
false,

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
false,

/***/ "./node_modules/next/dist/client/route-loader.js":
false,

/***/ "./node_modules/next/dist/client/router.js":
false,

/***/ "./node_modules/next/dist/client/use-intersection.js":
false,

/***/ "./node_modules/next/dist/client/with-router.js":
false,

/***/ "./node_modules/next/dist/compiled/webpack/module.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/get-asset-path-from-route.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
false,

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
false,

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
false,

/***/ "./node_modules/next/link.js":
false,

/***/ "./node_modules/react-is/cjs/react-is.development.js":
false,

/***/ "./node_modules/react-is/index.js":
false,

/***/ "./node_modules/regenerator-runtime/runtime.js":
false

})