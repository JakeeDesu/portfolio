webpackHotUpdate_N_E("pages/index",{

/***/ "./components/gim.tsx":
/*!****************************!*\
  !*** ./components/gim.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sogumaTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sogumaTitle */ \"./components/sogumaTitle.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme */ \"./components/theme.js\");\n/* harmony import */ var _gimProps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gimProps */ \"./components/gimProps.js\");\n\nvar _jsxFileName = \"/home/hamza/Desktop/portfolio/components/gim.tsx\";\n\n\n\n // gims props\n\nvar getGimPropsById = function getGimPropsById(gimId) {\n  return _gimProps__WEBPACK_IMPORTED_MODULE_4__[\"gimsProps\"].filter(function (gimProps) {\n    return gimProps.id == gimId;\n  }).pop() || _gimProps__WEBPACK_IMPORTED_MODULE_4__[\"gimsProps\"][0];\n};\n\nfunction Gim(_ref) {\n  var data = _ref.data,\n      gimId = _ref.gimId,\n      direction = _ref.direction,\n      steps = _ref.steps,\n      moveGims = _ref.moveGims,\n      setOnDisplay = _ref.setOnDisplay,\n      onDisplay = _ref.onDisplay,\n      darkTheme = _ref.darkTheme;\n  var currentGim = getGimPropsById(gimId);\n  var prevGim = direction < 0 && !onDisplay.displayState ? getGimPropsById(currentGim.prev) : getGimPropsById(currentGim.next);\n  var animationKey = onDisplay.displayState ? steps + 1 : steps;\n  var variants = {\n    enter: function enter(onDisplay) {\n      return {\n        opacity: 1,\n        y: 0,\n        top: onDisplay.displayState ? \"\".concat(currentGim.properties.posi.y, \"%\") : onDisplay.displayOff ? \"\".concat(_gimProps__WEBPACK_IMPORTED_MODULE_4__[\"fromProps\"].properties.posi.y, \"%\") : \"\".concat(prevGim.properties.posi.y, \"%\"),\n        left: onDisplay.displayState ? \"\".concat(currentGim.properties.posi.x, \"%\") : onDisplay.displayOff ? \"\".concat(_gimProps__WEBPACK_IMPORTED_MODULE_4__[\"fromProps\"].properties.posi.x, \"%\") : \"\".concat(prevGim.properties.posi.x, \"%\"),\n        scale: onDisplay.displayState ? currentGim.properties.scale : onDisplay.displayOff ? _gimProps__WEBPACK_IMPORTED_MODULE_4__[\"fromProps\"].properties.scale : prevGim.properties.scale,\n        zIndex: prevGim.properties.zIndex\n      };\n    },\n    standing: function standing(onDisplay) {\n      return {\n        opacity: 1,\n        y: onDisplay.displayState ? 0 : [-10, 10],\n        top: onDisplay.displayState ? \"\".concat(_gimProps__WEBPACK_IMPORTED_MODULE_4__[\"fromProps\"].properties.posi.y, \"%\") : \"\".concat(currentGim.properties.posi.y, \"%\"),\n        left: onDisplay.displayState ? \"\".concat(_gimProps__WEBPACK_IMPORTED_MODULE_4__[\"fromProps\"].properties.posi.x, \"%\") : \"\".concat(currentGim.properties.posi.x, \"%\"),\n        scale: onDisplay.displayState ? _gimProps__WEBPACK_IMPORTED_MODULE_4__[\"fromProps\"].properties.scale : currentGim.properties.scale,\n        zIndex: onDisplay.displayState ? _gimProps__WEBPACK_IMPORTED_MODULE_4__[\"fromProps\"].properties.zIndex : gimId == 2 || onDisplay.displayOff ? 10 : currentGim.properties.zIndex,\n        transition: {\n          y: {\n            yoyo: Infinity,\n            duration: 1\n          },\n          type: \"spring\",\n          duration: 1.3\n        }\n      };\n    },\n    display: {\n      scale: currentGim.properties.scale,\n      boxShadow: 'none',\n      y: 0,\n      top: '',\n      left: '50%',\n      bottom: '0%',\n      transition: {\n        type: \"spring\",\n        duration: 0.8\n      }\n    },\n    hover: function hover(onDisplay) {\n      if (!(onDisplay.displayState || onDisplay.displayOff)) return {\n        opacity: 1,\n        scale: currentGim.properties.scale * 1.2,\n        transition: {\n          duration: 0.3\n        }\n      };\n    }\n  };\n  var currentData = getGimCurrenData(data, gimId, steps, direction);\n\n  var clickGim = function clickGim() {\n    if (gimId == 0) setOnDisplay(!onDisplay.displayState, fixGimsDataIndex(data, steps + 1), onDisplay.type);else if (!onDisplay.displayState) {\n      console.log(\"turn\");\n      moveGims(currentGim.leftRight);\n    }\n    console.log(\"turn fail\");\n    return false;\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__[\"motion\"].div, {\n    className: \"absolute  md:flex justify-center items-center hidden pointer-events-auto \".concat(darkTheme && _theme__WEBPACK_IMPORTED_MODULE_3__[\"theme\"].dark.gims.style(false) || _theme__WEBPACK_IMPORTED_MODULE_3__[\"theme\"].light.gims.style),\n    variants: variants,\n    initial: \"enter\",\n    animate: \"standing\",\n    custom: onDisplay,\n    drag: true,\n    dragConstraints: {\n      top: 0,\n      left: 0,\n      right: 0,\n      bottom: 0\n    } // whileHover=\"hover\"\n    ,\n    onMouseDown: function onMouseDown() {\n      return clickGim();\n    },\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_sogumaTitle__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      darkTheme: darkTheme,\n      text: currentData ? currentData.current : \"\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 108,\n      columnNumber: 4\n    }, this)\n  }, animationKey, false, {\n    fileName: _jsxFileName,\n    lineNumber: 90,\n    columnNumber: 3\n  }, this);\n}\n\n_c = Gim;\n\nfunction fixGimsDataIndex(data, steps) {\n  var fixedIndex = steps < 0 ? (data.length + steps % data.length) % data.length : steps % data.length;\n  return fixedIndex;\n}\n\nfunction getGimCurrenData(data, gimId, moveSteps, moveDirection) {\n  switch (gimId) {\n    case 0:\n      // main gim\n      return {\n        current: data[fixGimsDataIndex(data, moveSteps + 1)],\n        next: data[fixGimsDataIndex(data, moveSteps + 2)],\n        prev: data[fixGimsDataIndex(data, moveSteps)]\n      };\n\n    case 1:\n      // next gim\n      return {\n        current: data[fixGimsDataIndex(data, moveSteps + 2)],\n        next: data[fixGimsDataIndex(data, moveSteps + 3)],\n        prev: data[fixGimsDataIndex(data, moveSteps + 1)]\n      };\n\n    case 2:\n      // prev gim\n      return {\n        current: data[fixGimsDataIndex(data, moveSteps)],\n        next: data[fixGimsDataIndex(data, moveSteps - 1)],\n        prev: data[fixGimsDataIndex(data, moveSteps + 1)]\n      };\n\n    case 3:\n      // onHold gim\n      return {\n        current: data[fixGimsDataIndex(data, moveSteps + 3)],\n        next: data[fixGimsDataIndex(data, moveSteps + 4)],\n        prev: data[fixGimsDataIndex(data, moveSteps + 2)]\n      };\n\n    case 4:\n      // hidden gim\n      var updatedIndex = moveDirection < 0 ? moveSteps : moveSteps + 3;\n      return {\n        current: data[fixGimsDataIndex(data, moveSteps + 4)],\n        next: data[fixGimsDataIndex(data, moveSteps + 5)],\n        prev: data[fixGimsDataIndex(data, updatedIndex)]\n      };\n  }\n\n  return 0;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gim);\n\nvar _c;\n\n$RefreshReg$(_c, \"Gim\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9naW0udHN4P2YyYTkiXSwibmFtZXMiOlsiZ2V0R2ltUHJvcHNCeUlkIiwiZ2ltSWQiLCJnaW1zUHJvcHMiLCJmaWx0ZXIiLCJnaW1Qcm9wcyIsImlkIiwicG9wIiwiR2ltIiwiZGF0YSIsImRpcmVjdGlvbiIsInN0ZXBzIiwibW92ZUdpbXMiLCJzZXRPbkRpc3BsYXkiLCJvbkRpc3BsYXkiLCJkYXJrVGhlbWUiLCJjdXJyZW50R2ltIiwicHJldkdpbSIsImRpc3BsYXlTdGF0ZSIsInByZXYiLCJuZXh0IiwiYW5pbWF0aW9uS2V5IiwidmFyaWFudHMiLCJlbnRlciIsIm9wYWNpdHkiLCJ5IiwidG9wIiwicHJvcGVydGllcyIsInBvc2kiLCJkaXNwbGF5T2ZmIiwiZnJvbVByb3BzIiwibGVmdCIsIngiLCJzY2FsZSIsInpJbmRleCIsInN0YW5kaW5nIiwidHJhbnNpdGlvbiIsInlveW8iLCJJbmZpbml0eSIsImR1cmF0aW9uIiwidHlwZSIsImRpc3BsYXkiLCJib3hTaGFkb3ciLCJib3R0b20iLCJob3ZlciIsImN1cnJlbnREYXRhIiwiZ2V0R2ltQ3VycmVuRGF0YSIsImNsaWNrR2ltIiwiZml4R2ltc0RhdGFJbmRleCIsImNvbnNvbGUiLCJsb2ciLCJsZWZ0UmlnaHQiLCJ0aGVtZSIsImRhcmsiLCJnaW1zIiwic3R5bGUiLCJsaWdodCIsInJpZ2h0IiwiY3VycmVudCIsImZpeGVkSW5kZXgiLCJsZW5ndGgiLCJtb3ZlU3RlcHMiLCJtb3ZlRGlyZWN0aW9uIiwidXBkYXRlZEluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FDa0Q7O0FBS2xELElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRCxFQUFtQjtBQUMxQyxTQUFPQyxtREFBUyxDQUFDQyxNQUFWLENBQWlCLFVBQUNDLFFBQUQ7QUFBQSxXQUFjQSxRQUFRLENBQUNDLEVBQVQsSUFBZUosS0FBN0I7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QUFHLENBQW5CLENBQWpCLENBRFA7QUFFTnpDLFlBQUksRUFBRVgsSUFBSSxDQUFDdUMsZ0JBQWdCLENBQUN2QyxJQUFELEVBQU9vRCxTQUFTLEdBQUcsQ0FBbkIsQ0FBakIsQ0FGSjtBQUdOMUMsWUFBSSxFQUFFVixJQUFJLENBQUN1QyxnQkFBZ0IsQ0FBQ3ZDLElBQUQsRUFBT3NELFlBQVAsQ0FBakI7QUFISixPQUFQO0FBM0JGOztBQWlDQSxTQUFRLENBQVI7QUFDQTs7QUFFY3ZELGtFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9naW0udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNvZ3VtYVRpdGxlIGZyb20gJy4vc29ndW1hVGl0bGUnXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuL3RoZW1lJ1xuaW1wb3J0IHsgZ2ltc1Byb3BzLCBmcm9tUHJvcHMgfSBmcm9tICcuL2dpbVByb3BzJyAvLyBnaW1zIHByb3BzXG5cblxuXG5cbmNvbnN0IGdldEdpbVByb3BzQnlJZCA9IChnaW1JZDogbnVtYmVyKSA9PiB7XG5cdHJldHVybiBnaW1zUHJvcHMuZmlsdGVyKChnaW1Qcm9wcykgPT4gZ2ltUHJvcHMuaWQgPT0gZ2ltSWQpLnBvcCgpIHx8IGdpbXNQcm9wc1swXTtcbn1cblxuZnVuY3Rpb24gR2ltKHsgZGF0YSwgZ2ltSWQsIGRpcmVjdGlvbiwgc3RlcHMsIG1vdmVHaW1zLCBzZXRPbkRpc3BsYXksIG9uRGlzcGxheSwgZGFya1RoZW1lIH0pIHtcblxuXHRjb25zdCBjdXJyZW50R2ltID0gZ2V0R2ltUHJvcHNCeUlkKGdpbUlkKTtcblx0Y29uc3QgcHJldkdpbSA9IChkaXJlY3Rpb24gPCAwICYmICFvbkRpc3BsYXkuZGlzcGxheVN0YXRlKSA/IGdldEdpbVByb3BzQnlJZChjdXJyZW50R2ltLnByZXYpIDogZ2V0R2ltUHJvcHNCeUlkKGN1cnJlbnRHaW0ubmV4dCk7XG5cdGNvbnN0IGFuaW1hdGlvbktleSA9IG9uRGlzcGxheS5kaXNwbGF5U3RhdGUgPyBzdGVwcyArIDEgOiBzdGVwcztcblxuXG5cdGNvbnN0IHZhcmlhbnRzID0ge1xuXHRcdGVudGVyOiAob25EaXNwbGF5OiBhbnkpID0+IHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdG9wYWNpdHkgOiAxLFxuXHRcdFx0XHR5OiAwLFxuXHRcdFx0XHR0b3A6IG9uRGlzcGxheS5kaXNwbGF5U3RhdGUgPyBgJHtjdXJyZW50R2ltLnByb3BlcnRpZXMucG9zaS55fSVgIDogKG9uRGlzcGxheS5kaXNwbGF5T2ZmID8gYCR7ZnJvbVByb3BzLnByb3BlcnRpZXMucG9zaS55fSVgIDogYCR7cHJldkdpbS5wcm9wZXJ0aWVzLnBvc2kueX0lYCksXG5cdFx0XHRcdGxlZnQ6IG9uRGlzcGxheS5kaXNwbGF5U3RhdGUgPyBgJHtjdXJyZW50R2ltLnByb3BlcnRpZXMucG9zaS54fSVgIDogKG9uRGlzcGxheS5kaXNwbGF5T2ZmID8gYCR7ZnJvbVByb3BzLnByb3BlcnRpZXMucG9zaS54fSVgIDogYCR7cHJldkdpbS5wcm9wZXJ0aWVzLnBvc2kueH0lYCksXG5cdFx0XHRcdHNjYWxlOiBvbkRpc3BsYXkuZGlzcGxheVN0YXRlID8gY3VycmVudEdpbS5wcm9wZXJ0aWVzLnNjYWxlIDogKG9uRGlzcGxheS5kaXNwbGF5T2ZmID8gZnJvbVByb3BzLnByb3BlcnRpZXMuc2NhbGUgOiBwcmV2R2ltLnByb3BlcnRpZXMuc2NhbGUpLFxuXHRcdFx0XHR6SW5kZXg6IHByZXZHaW0ucHJvcGVydGllcy56SW5kZXgsXG5cdFx0XHR9O1xuXG5cdFx0fSxcblx0XHRzdGFuZGluZzogKG9uRGlzcGxheTogYW55KSA9PiB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRvcGFjaXR5IDogMSxcblx0XHRcdFx0eTogb25EaXNwbGF5LmRpc3BsYXlTdGF0ZSA/IDAgOiBbLTEwLCAxMF0sXG5cdFx0XHRcdHRvcDogb25EaXNwbGF5LmRpc3BsYXlTdGF0ZSA/IGAke2Zyb21Qcm9wcy5wcm9wZXJ0aWVzLnBvc2kueX0lYCA6IGAke2N1cnJlbnRHaW0ucHJvcGVydGllcy5wb3NpLnl9JWAsXG5cdFx0XHRcdGxlZnQ6IG9uRGlzcGxheS5kaXNwbGF5U3RhdGUgPyBgJHtmcm9tUHJvcHMucHJvcGVydGllcy5wb3NpLnh9JWAgOiBgJHtjdXJyZW50R2ltLnByb3BlcnRpZXMucG9zaS54fSVgLFxuXHRcdFx0XHRzY2FsZTogb25EaXNwbGF5LmRpc3BsYXlTdGF0ZSA/IGZyb21Qcm9wcy5wcm9wZXJ0aWVzLnNjYWxlIDogY3VycmVudEdpbS5wcm9wZXJ0aWVzLnNjYWxlLFxuXHRcdFx0XHR6SW5kZXg6IG9uRGlzcGxheS5kaXNwbGF5U3RhdGUgPyBmcm9tUHJvcHMucHJvcGVydGllcy56SW5kZXggOiAoZ2ltSWQgPT0gMiB8fCBvbkRpc3BsYXkuZGlzcGxheU9mZiA/IDEwIDogY3VycmVudEdpbS5wcm9wZXJ0aWVzLnpJbmRleCksXG5cdFx0XHRcdHRyYW5zaXRpb246IHtcblx0XHRcdFx0XHR5OiB7XG5cdFx0XHRcdFx0XHR5b3lvOiBJbmZpbml0eSxcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiAxLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dHlwZTogXCJzcHJpbmdcIixcblx0XHRcdFx0XHRkdXJhdGlvbjogMS4zXG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fSxcblx0XHRkaXNwbGF5OiB7XG5cdFx0XHRzY2FsZTogY3VycmVudEdpbS5wcm9wZXJ0aWVzLnNjYWxlLFxuXHRcdFx0Ym94U2hhZG93OiAnbm9uZScsXG5cdFx0XHR5OiAwLFxuXHRcdFx0dG9wOiAnJyxcblx0XHRcdGxlZnQ6ICc1MCUnLFxuXHRcdFx0Ym90dG9tOiAnMCUnLFxuXHRcdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0XHR0eXBlOiBcInNwcmluZ1wiLFxuXHRcdFx0XHRkdXJhdGlvbjogMC44XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRob3ZlcjogKG9uRGlzcGxheTogYW55KSA9PiB7XG5cdFx0XHRpZiAoIShvbkRpc3BsYXkuZGlzcGxheVN0YXRlIHx8IG9uRGlzcGxheS5kaXNwbGF5T2ZmKSlcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRvcGFjaXR5OiAxLFxuXHRcdFx0XHRcdHNjYWxlOiBjdXJyZW50R2ltLnByb3BlcnRpZXMuc2NhbGUgKiAxLjIsXG5cdFx0XHRcdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDAuM1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHR9LFxuXHR9XG5cblx0Y29uc3QgY3VycmVudERhdGEgPSBnZXRHaW1DdXJyZW5EYXRhKGRhdGEsIGdpbUlkLCBzdGVwcywgZGlyZWN0aW9uKTtcblxuXHRjb25zdCBjbGlja0dpbSA9ICgpID0+IHtcblx0XHRcblx0XHRpZiAoZ2ltSWQgPT0gMClcblx0XHRcdHNldE9uRGlzcGxheSghb25EaXNwbGF5LmRpc3BsYXlTdGF0ZSwgZml4R2ltc0RhdGFJbmRleChkYXRhLCBzdGVwcyArIDEpLCBvbkRpc3BsYXkudHlwZSlcblx0XHRlbHNlIGlmICghKG9uRGlzcGxheS5kaXNwbGF5U3RhdGUpKVxuXHRcdHtcblx0XHRcdGNvbnNvbGUubG9nKFwidHVyblwiKTtcblx0XHRcdG1vdmVHaW1zKGN1cnJlbnRHaW0ubGVmdFJpZ2h0KVxuXHRcdH1cblx0XHRjb25zb2xlLmxvZyhcInR1cm4gZmFpbFwiKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRyZXR1cm4gKFxuXHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRjbGFzc05hbWU9e2BhYnNvbHV0ZSAgbWQ6ZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaGlkZGVuIHBvaW50ZXItZXZlbnRzLWF1dG8gJHtkYXJrVGhlbWUgJiYgdGhlbWUuZGFyay5naW1zLnN0eWxlKGZhbHNlKSB8fCB0aGVtZS5saWdodC5naW1zLnN0eWxlfWB9XG5cdFx0XHRrZXk9e2FuaW1hdGlvbktleX1cblx0XHRcdHZhcmlhbnRzPXt2YXJpYW50c31cblx0XHRcdGluaXRpYWw9XCJlbnRlclwiXG5cdFx0XHRhbmltYXRlPVwic3RhbmRpbmdcIlxuXHRcdFx0Y3VzdG9tPXtvbkRpc3BsYXl9XG5cdFx0XHRkcmFnXG5cdFx0XHRkcmFnQ29uc3RyYWludHM9e3tcblx0XHRcdFx0dG9wOiAwLFxuXHRcdFx0XHRsZWZ0OiAwLFxuXHRcdFx0XHRyaWdodDogMCxcblx0XHRcdFx0Ym90dG9tOiAwLFxuXHRcdFx0fX1cblx0XHRcdC8vIHdoaWxlSG92ZXI9XCJob3ZlclwiXG5cdFx0XHRvbk1vdXNlRG93bj17KCkgPT4gY2xpY2tHaW0oKX1cblx0XHQ+XG5cblx0XHRcdDxTb2d1bWFUaXRsZVxuXHRcdFx0XHRkYXJrVGhlbWU9e2RhcmtUaGVtZX1cblx0XHRcdFx0dGV4dD17Y3VycmVudERhdGEgPyBjdXJyZW50RGF0YS5jdXJyZW50IDogXCJcIn1cblx0XHRcdC8+XG5cblx0XHQ8L21vdGlvbi5kaXY+XG5cdCk7XG59XG5cblxuXG5cblxuXG5cbmZ1bmN0aW9uIGZpeEdpbXNEYXRhSW5kZXgoZGF0YSwgc3RlcHMpIHtcblx0bGV0IGZpeGVkSW5kZXggPSBzdGVwcyA8IDAgPyAoKGRhdGEubGVuZ3RoKSArIChzdGVwcyAlIGRhdGEubGVuZ3RoKSkgJSBkYXRhLmxlbmd0aCA6IHN0ZXBzICUgZGF0YS5sZW5ndGg7XG5cdHJldHVybiAoZml4ZWRJbmRleCk7XG59XG5cbmZ1bmN0aW9uIGdldEdpbUN1cnJlbkRhdGEoZGF0YSwgZ2ltSWQsIG1vdmVTdGVwcywgbW92ZURpcmVjdGlvbikge1xuXHRzd2l0Y2ggKGdpbUlkKSB7XG5cdFx0Y2FzZSAwOiAvLyBtYWluIGdpbVxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Y3VycmVudDogZGF0YVtmaXhHaW1zRGF0YUluZGV4KGRhdGEsIG1vdmVTdGVwcyArIDEpXSxcblx0XHRcdFx0bmV4dDogZGF0YVtmaXhHaW1zRGF0YUluZGV4KGRhdGEsIG1vdmVTdGVwcyArIDIpXSxcblx0XHRcdFx0cHJldjogZGF0YVtmaXhHaW1zRGF0YUluZGV4KGRhdGEsIG1vdmVTdGVwcyldLFxuXHRcdFx0fTtcblx0XHRjYXNlIDE6IC8vIG5leHQgZ2ltXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRjdXJyZW50OiBkYXRhW2ZpeEdpbXNEYXRhSW5kZXgoZGF0YSwgbW92ZVN0ZXBzICsgMildLFxuXHRcdFx0XHRuZXh0OiBkYXRhW2ZpeEdpbXNEYXRhSW5kZXgoZGF0YSwgbW92ZVN0ZXBzICsgMyldLFxuXHRcdFx0XHRwcmV2OiBkYXRhW2ZpeEdpbXNEYXRhSW5kZXgoZGF0YSwgbW92ZVN0ZXBzICsgMSldLFxuXHRcdFx0fTtcblx0XHRjYXNlIDI6IC8vIHByZXYgZ2ltXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRjdXJyZW50OiBkYXRhW2ZpeEdpbXNEYXRhSW5kZXgoZGF0YSwgbW92ZVN0ZXBzKV0sXG5cdFx0XHRcdG5leHQ6IGRhdGFbZml4R2ltc0RhdGFJbmRleChkYXRhLCBtb3ZlU3RlcHMgLSAxKV0sXG5cdFx0XHRcdHByZXY6IGRhdGFbZml4R2ltc0RhdGFJbmRleChkYXRhLCBtb3ZlU3RlcHMgKyAxKV0sXG5cdFx0XHR9O1xuXHRcdGNhc2UgMzogLy8gb25Ib2xkIGdpbVxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Y3VycmVudDogZGF0YVtmaXhHaW1zRGF0YUluZGV4KGRhdGEsIG1vdmVTdGVwcyArIDMpXSxcblx0XHRcdFx0bmV4dDogZGF0YVtmaXhHaW1zRGF0YUluZGV4KGRhdGEsIG1vdmVTdGVwcyArIDQpXSxcblx0XHRcdFx0cHJldjogZGF0YVtmaXhHaW1zRGF0YUluZGV4KGRhdGEsIG1vdmVTdGVwcyArIDIpXSxcblx0XHRcdH07XG5cdFx0Y2FzZSA0OiAvLyBoaWRkZW4gZ2ltXG5cdFx0XHRsZXQgdXBkYXRlZEluZGV4ID0gKG1vdmVEaXJlY3Rpb24gPCAwKSA/IG1vdmVTdGVwcyA6IG1vdmVTdGVwcyArIDM7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRjdXJyZW50OiBkYXRhW2ZpeEdpbXNEYXRhSW5kZXgoZGF0YSwgbW92ZVN0ZXBzICsgNCldLFxuXHRcdFx0XHRuZXh0OiBkYXRhW2ZpeEdpbXNEYXRhSW5kZXgoZGF0YSwgbW92ZVN0ZXBzICsgNSldLFxuXHRcdFx0XHRwcmV2OiBkYXRhW2ZpeEdpbXNEYXRhSW5kZXgoZGF0YSwgdXBkYXRlZEluZGV4KV0sXG5cdFx0XHR9O1xuXHR9XG5cdHJldHVybiAoMCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdpbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/gim.tsx\n");

/***/ })

})