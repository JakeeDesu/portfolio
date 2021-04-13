webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _components_darkSkyOpen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/darkSkyOpen */ \"./components/darkSkyOpen.js\");\n/* harmony import */ var _components_sogumaVx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/sogumaVx */ \"./components/sogumaVx.tsx\");\n/* harmony import */ var _components_sogumaVxPhone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/sogumaVxPhone */ \"./components/sogumaVxPhone.tsx\");\n/* harmony import */ var _components_darkSky__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/darkSky */ \"./components/darkSky.js\");\n/* harmony import */ var _components_eyeSwitch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/eyeSwitch */ \"./components/eyeSwitch.js\");\n/* harmony import */ var _components_mainboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/mainboard */ \"./components/mainboard.js\");\n/* harmony import */ var _components_boardPhone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/boardPhone */ \"./components/boardPhone.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_utilities_getLocalProjectData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/utilities/getLocalProjectData */ \"./components/utilities/getLocalProjectData.js\");\n/* harmony import */ var _components_scene__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/scene */ \"./components/scene.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _components_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/theme */ \"./components/theme.js\");\n\n\n\nvar _jsxFileName = \"/home/hamza/Desktop/portfolio/pages/index.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction rotateByMousePosition(event, ref) {\n  var currentPosi = {\n    x: event.pageX,\n    y: event.pageY\n  };\n  var offset = {\n    top: 0,\n    left: 0\n  };\n  if (ref) offset = ref.getBoundingClientRect();\n  ref.style.transform = \"rotateY(\".concat(maping(currentPosi.x - offset.left, [0, offset.width], [-10, 10]), \"deg)\");\n  ref.style.transform += \"rotateX(\".concat(maping(currentPosi.y - offset.top, [0, offset.height], [-10, 10]), \"deg)\"); // console.log(maping(currentPosi.x - offset.left, [0, offset.width],[-40, 40]))\n  // ref.style.transform += ` rotateY(${maping(currentPosi.y - offset.top, [0, offset.height],[-40, 40])}deg)`\n  // return {\n  // \tx : currentPosi.x - offset.left,\n  // \ty : currentPosi.y - offset.top,\n  // \t// zab\n  // }\n}\n\nfunction maping(value, interval1, interval2) {\n  return value * (interval2[1] - interval2[0]) / interval1[1] + interval2[0];\n}\n\nvar __N_SSG = true;\nfunction Home(_ref) {\n  _s();\n\n  var about = _ref.about,\n      repos = _ref.repos,\n      dataLoading = _ref.dataLoading,\n      darkTheme = _ref.darkTheme,\n      changeTheme = _ref.changeTheme;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_12__[\"useState\"])({\n    displayState: true,\n    displayOff: false,\n    itemId: -1,\n    type: -1\n  }),\n      onDisplay = _useState[0],\n      setOnDisplay = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_12__[\"useState\"])({}),\n      mousePosition = _useState2[0],\n      setMousePosition = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_12__[\"useState\"])({\n    height: 0,\n    width: 0\n  }),\n      size = _useState3[0],\n      setSize = _useState3[1];\n\n  var imageRef = Object(react__WEBPACK_IMPORTED_MODULE_12__[\"useRef\"])();\n\n  var _useViewportScroll = Object(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useViewportScroll\"])(),\n      scrollYProgress = _useViewportScroll.scrollYProgress;\n\n  var sogumaScale = Object(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useTransform\"])(scrollYProgress, [0, 0.1, 0.4, 1], [1, 0.9, 0.8, 0.1]);\n  var sogumaYoffset = Object(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useTransform\"])(scrollYProgress, [0, 0.1, 0.5, 1], [0, -10, -100, -500]);\n  var rX = maping(mousePosition.x, [0, size.width], [0, 50]);\n  var rY = maping(mousePosition.y, [0, size.height], [0, 50]); // getLocalProjectData(\"Fractol\");\n  // const [[soguma, board], setElements] = useState([null,null])\n\n  Object(react__WEBPACK_IMPORTED_MODULE_12__[\"useEffect\"])(function () {\n    // setElements([document.getElementById('soguma'), document.getElementById('board')])\n    // if (imageRef && imageRef.current)\n    // {\n    // \tconsole.log(\"tyyype x \", imageRef.current.getBoundingClientRect())\n    // \tlet rectSize = imageRef.current.getBoundingClientRect()\n    // \tsetSize({ height : rectSize.height, width : rectSize.width})\n    // }\n    var timer;\n\n    if (!onDisplay.displayState && onDisplay.displayOff) {\n      timer = setTimeout(function () {\n        setOnDisplay(_objectSpread(_objectSpread({}, onDisplay), {}, {\n          displayOff: false\n        }));\n      }, 300);\n    }\n\n    return function () {\n      return clearTimeout(timer);\n    };\n  }, [onDisplay]); // set a gim on display mode\n\n  var displayGim = function displayGim(displayState, itemId, type) {\n    // setTimeout(() => {\n    // \tlet board = document.getElementById('board');\n    // \tif (board && (onDisplay.displayState && onDisplay.type === 2))\n    // \t{\n    // \t\tboard.scrollIntoView(false);\n    // \t\tconsole.log(\"func fired \")\n    // \t}\n    // \telse\n    console.log(\"scroooooooooooooooooolll: NULLLLL type : \" + type + \" state : \" + displayState); // }, 100)\n\n    console.log(\" |||  DISPLAY : \", displayState ? \"true\" : \"false\", \" ||| type : \" + type);\n    var newdisplayOff = onDisplay.displayState && !displayState ? true : false;\n    setOnDisplay(_objectSpread(_objectSpread({}, onDisplay), {}, {\n      displayState: displayState,\n      displayOff: newdisplayOff,\n      itemId: itemId,\n      type: type\n    }));\n  };\n\n  var handleMouseMove = function handleMouseMove(e) {\n    rotateByMousePosition(e, imageRef.current);\n  };\n\n  var handleMouseLeave = function handleMouseLeave(e) {\n    imageRef.current.style.transform = \"rotateX(0deg) rotateY(0deg)\";\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].div, {\n    className: \"relative flex flex-col w-full h-auto overflow-hidden\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].div, {\n      className: \"relative flex flex-col justify-start l:h-screen \".concat(onDisplay.displayState && onDisplay.type !== -1 ? \"h-auto\" : \"h-screen\", \" m-0 p-0  w-full \").concat(_components_theme__WEBPACK_IMPORTED_MODULE_14__[\"theme\"].dark.backgroundColor),\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].div, {\n        id: \"soguma\",\n        className: \"relative flex justify-center items-center l:h-full md:h-screen h-80 w-full\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"absolute top-0 left-0 lg:h-full md:h-full h-full w-full \",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_darkSkyOpen__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            height: \"lg:h-full h-full md:h-1/2 w-full\",\n            darkTheme: darkTheme\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 117,\n            columnNumber: 7\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 6\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"absolute w-full h-full top-0 left-0\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].div, {\n            className: \" flex flex-col justify-center items-center h-full w-1/2 \",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].div, {\n              className: \"relative flex items-center justify-center w-1/3 h-full pt-full\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"hr\", {\n                className: \"absolute top-0 border-2 border-black h-1/2\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 129,\n                columnNumber: 11\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].img, {\n                className: \"absolute left-0 w-full border-4 border-black rounded-full\",\n                src: \"/me/0.png\",\n                ref: imageRef,\n                onMouseMove: handleMouseMove,\n                onMouseLeave: handleMouseLeave,\n                style: {\n                  scale: sogumaScale,\n                  y: sogumaYoffset\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 130,\n                columnNumber: 10\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 126,\n              columnNumber: 9\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 122,\n            columnNumber: 7\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 119,\n          columnNumber: 6\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].div, {\n          className: \"absolute flex justify-center items-start md:h-100 lg:h-100 md:top-1/4 top-1/4 h-full lg:top-1/3 w-full z-20 pointer-events-none\",\n          style: onDisplay.displayState ? {\n            scale: sogumaScale,\n            y: sogumaYoffset\n          } : {\n            scale: 1,\n            y: 0\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_sogumaVx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            repos: repos,\n            dataLoading: true,\n            setOnDisplay: displayGim,\n            onDisplay: onDisplay,\n            darkTheme: darkTheme\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 154,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_sogumaVxPhone__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            repos: repos,\n            dataLoading: true,\n            setOnDisplay: displayGim,\n            onDisplay: onDisplay,\n            darkTheme: darkTheme\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 155,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 143,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 115,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_mainboard__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        id: \"board\",\n        onDisplay: onDisplay,\n        about: about,\n        repos: repos\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 158,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 4\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 98,\n    columnNumber: 3\n  }, this);\n}\n\n_s(Home, \"xo856P2IuV9Yol9VHEmZcDubB3I=\", false, function () {\n  return [framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useViewportScroll\"], framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useTransform\"]];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJyb3RhdGVCeU1vdXNlUG9zaXRpb24iLCJldmVudCIsInJlZiIsImN1cnJlbnRQb3NpIiwieCIsInBhZ2VYIiwieSIsInBhZ2VZIiwib2Zmc2V0IiwidG9wIiwibGVmdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInN0eWxlIiwidHJhbnNmb3JtIiwibWFwaW5nIiwid2lkdGgiLCJoZWlnaHQiLCJ2YWx1ZSIsImludGVydmFsMSIsImludGVydmFsMiIsIkhvbWUiLCJhYm91dCIsInJlcG9zIiwiZGF0YUxvYWRpbmciLCJkYXJrVGhlbWUiLCJjaGFuZ2VUaGVtZSIsInVzZVN0YXRlIiwiZGlzcGxheVN0YXRlIiwiZGlzcGxheU9mZiIsIml0ZW1JZCIsInR5cGUiLCJvbkRpc3BsYXkiLCJzZXRPbkRpc3BsYXkiLCJtb3VzZVBvc2l0aW9uIiwic2V0TW91c2VQb3NpdGlvbiIsInNpemUiLCJzZXRTaXplIiwiaW1hZ2VSZWYiLCJ1c2VSZWYiLCJ1c2VWaWV3cG9ydFNjcm9sbCIsInNjcm9sbFlQcm9ncmVzcyIsInNvZ3VtYVNjYWxlIiwidXNlVHJhbnNmb3JtIiwic29ndW1hWW9mZnNldCIsInJYIiwiclkiLCJ1c2VFZmZlY3QiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJkaXNwbGF5R2ltIiwiY29uc29sZSIsImxvZyIsIm5ld2Rpc3BsYXlPZmYiLCJoYW5kbGVNb3VzZU1vdmUiLCJlIiwiY3VycmVudCIsImhhbmRsZU1vdXNlTGVhdmUiLCJ0aGVtZSIsImRhcmsiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzY2FsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLHFCQUFULENBQStC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UyxFQUFFUDtBQUEvRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVhELGVBWUMscUVBQUMsaUVBQUQ7QUFBZSxpQkFBSyxFQUFFRixLQUF0QjtBQUE2Qix1QkFBVyxNQUF4QztBQUF5Qyx3QkFBWSxFQUFFNEIsVUFBdkQ7QUFBbUUscUJBQVMsRUFBRW5CLFNBQTlFO0FBQXlGLHFCQUFTLEVBQUVQO0FBQXBHO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBWkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTVCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRCxlQTZDQyxxRUFBQyw2REFBRDtBQUFXLFVBQUUsRUFBQyxPQUFkO0FBQXNCLGlCQUFTLEVBQUVPLFNBQWpDO0FBQTRDLGFBQUssRUFBRVYsS0FBbkQ7QUFBMEQsYUFBSyxFQUFFQztBQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBN0NEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQW1FQTs7R0E1SHVCRixJO1VBS0ttQixnRSxFQUNSRywyRCxFQUNFQSwyRDs7O0tBUEN0QixJIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGFya1NreU9wZW4gZnJvbSAnLi4vY29tcG9uZW50cy9kYXJrU2t5T3BlbidcbmltcG9ydCBTb2d1bWFWeCBmcm9tICcuLi9jb21wb25lbnRzL3NvZ3VtYVZ4J1xuaW1wb3J0IFNvZ3VtYVZ4UGhvbmUgZnJvbSAnLi4vY29tcG9uZW50cy9zb2d1bWFWeFBob25lJ1xuaW1wb3J0IERhcmtTa3kgZnJvbSAnLi4vY29tcG9uZW50cy9kYXJrU2t5J1xuaW1wb3J0IEV5ZVN3aXRjaCBmcm9tICcuLi9jb21wb25lbnRzL2V5ZVN3aXRjaCdcbmltcG9ydCBNYWluQm9hcmQgZnJvbSAnLi4vY29tcG9uZW50cy9tYWluYm9hcmQnXG5pbXBvcnQgQm9hcmRQaG9uZSBmcm9tICcuLi9jb21wb25lbnRzL2JvYXJkUGhvbmUnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgZ2V0TG9jYWxQcm9qZWN0RGF0YSBmcm9tICcuLi9jb21wb25lbnRzL3V0aWxpdGllcy9nZXRMb2NhbFByb2plY3REYXRhJ1xuXG5pbXBvcnQgU2NlbmUgZnJvbSAnLi4vY29tcG9uZW50cy9zY2VuZSdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbW90aW9uLCB1c2VUcmFuc2Zvcm0sIHVzZVZpZXdwb3J0U2Nyb2xsLCB1c2VNb3Rpb25WYWx1ZSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQgeyB0aGVtZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvdGhlbWUnXG5cbmZ1bmN0aW9uIHJvdGF0ZUJ5TW91c2VQb3NpdGlvbihldmVudCwgcmVmKSB7XG5cdGNvbnN0IGN1cnJlbnRQb3NpID0ge1xuXHRcdHggOiBldmVudC5wYWdlWCAsXG5cdFx0eSA6IGV2ZW50LnBhZ2VZLFxuXHR9XG5cblx0bGV0IG9mZnNldCA9IHt0b3AgOiAwLCBsZWZ0IDogMH1cblx0aWYgKHJlZiApXG5cdG9mZnNldCA9IHJlZi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXHRyZWYuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZVkoJHttYXBpbmcoY3VycmVudFBvc2kueCAtIG9mZnNldC5sZWZ0LCBbMCwgb2Zmc2V0LndpZHRoXSxbLTEwLCAxMF0pfWRlZylgXG5cdHJlZi5zdHlsZS50cmFuc2Zvcm0gKz0gYHJvdGF0ZVgoJHttYXBpbmcoY3VycmVudFBvc2kueSAtIG9mZnNldC50b3AsIFswLCBvZmZzZXQuaGVpZ2h0XSxbLTEwLCAxMF0pfWRlZylgXG5cdC8vIGNvbnNvbGUubG9nKG1hcGluZyhjdXJyZW50UG9zaS54IC0gb2Zmc2V0LmxlZnQsIFswLCBvZmZzZXQud2lkdGhdLFstNDAsIDQwXSkpXG5cdC8vIHJlZi5zdHlsZS50cmFuc2Zvcm0gKz0gYCByb3RhdGVZKCR7bWFwaW5nKGN1cnJlbnRQb3NpLnkgLSBvZmZzZXQudG9wLCBbMCwgb2Zmc2V0LmhlaWdodF0sWy00MCwgNDBdKX1kZWcpYFxuXHQvLyByZXR1cm4ge1xuXHQvLyBcdHggOiBjdXJyZW50UG9zaS54IC0gb2Zmc2V0LmxlZnQsXG5cdC8vIFx0eSA6IGN1cnJlbnRQb3NpLnkgLSBvZmZzZXQudG9wLFxuXHQvLyBcdC8vIHphYlxuXHQvLyB9XG59XG5cbmZ1bmN0aW9uIG1hcGluZyh2YWx1ZSwgaW50ZXJ2YWwxLCBpbnRlcnZhbDIpIHtcblx0cmV0dXJuICAodmFsdWUgKiAoaW50ZXJ2YWwyWzFdIC0gaW50ZXJ2YWwyWzBdKSAvIGludGVydmFsMVsxXSkgKyBpbnRlcnZhbDJbMF1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGFib3V0LCByZXBvcywgZGF0YUxvYWRpbmcsIGRhcmtUaGVtZSwgY2hhbmdlVGhlbWV9KSB7XG5cdGNvbnN0IFtvbkRpc3BsYXksIHNldE9uRGlzcGxheV0gPSB1c2VTdGF0ZSh7IGRpc3BsYXlTdGF0ZTogdHJ1ZSwgZGlzcGxheU9mZiA6IGZhbHNlLCBpdGVtSWQ6IC0xLCB0eXBlOiAtMSB9KVxuXHRjb25zdCBbbW91c2VQb3NpdGlvbiwgc2V0TW91c2VQb3NpdGlvbl0gPSB1c2VTdGF0ZSh7fSk7XG5cdGNvbnN0IFtzaXplLCBzZXRTaXplXSA9IHVzZVN0YXRlKHtoZWlnaHQgOiAwLCB3aWR0aCA6IDB9KTtcblx0Y29uc3QgaW1hZ2VSZWYgPSB1c2VSZWYoKVxuXHRjb25zdCB7IHNjcm9sbFlQcm9ncmVzcyB9ID0gdXNlVmlld3BvcnRTY3JvbGwoKTtcblx0Y29uc3Qgc29ndW1hU2NhbGUgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMC4xLCAwLjQsIDFdLCBbMSwgMC45LCAwLjgsIDAuMV0pO1xuXHRjb25zdCBzb2d1bWFZb2Zmc2V0ID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDAuMSwgMC41LCAxXSwgWzAsIC0xMCwgLTEwMCwgLTUwMF0pO1xuXG5cblxuXHRjb25zdCByWCA9IG1hcGluZyhtb3VzZVBvc2l0aW9uLnggLCBbMCAsIHNpemUud2lkdGhdLCBbMCwgNTBdKVxuXHRjb25zdCByWSA9IG1hcGluZyhtb3VzZVBvc2l0aW9uLnksIFswICwgc2l6ZS5oZWlnaHRdLCBbMCwgNTBdKVxuXHQvLyBnZXRMb2NhbFByb2plY3REYXRhKFwiRnJhY3RvbFwiKTtcblx0Ly8gY29uc3QgW1tzb2d1bWEsIGJvYXJkXSwgc2V0RWxlbWVudHNdID0gdXNlU3RhdGUoW251bGwsbnVsbF0pXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Ly8gc2V0RWxlbWVudHMoW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzb2d1bWEnKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXJkJyldKVxuXHRcdC8vIGlmIChpbWFnZVJlZiAmJiBpbWFnZVJlZi5jdXJyZW50KVxuXHRcdC8vIHtcblx0XHQvLyBcdGNvbnNvbGUubG9nKFwidHl5eXBlIHggXCIsIGltYWdlUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkpXG5cdFx0Ly8gXHRsZXQgcmVjdFNpemUgPSBpbWFnZVJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cdFx0Ly8gXHRzZXRTaXplKHsgaGVpZ2h0IDogcmVjdFNpemUuaGVpZ2h0LCB3aWR0aCA6IHJlY3RTaXplLndpZHRofSlcblx0XHQvLyB9XG5cdFx0XHRsZXQgdGltZXI7XG5cdFx0aWYgKCFvbkRpc3BsYXkuZGlzcGxheVN0YXRlICYmIG9uRGlzcGxheS5kaXNwbGF5T2ZmKVxuXHRcdHtcblx0XHRcdHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHNldE9uRGlzcGxheSh7IC4uLm9uRGlzcGxheSwgZGlzcGxheU9mZiA6IGZhbHNlIH0pO1xuXHRcdFx0fSwgMzAwKSBcblx0XHR9XG5cdFx0cmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lcik7XG5cdH0sIFtvbkRpc3BsYXldKTtcblxuXHQvLyBzZXQgYSBnaW0gb24gZGlzcGxheSBtb2RlXG5cdGNvbnN0IGRpc3BsYXlHaW0gPSAoZGlzcGxheVN0YXRlLCBpdGVtSWQsIHR5cGUpID0+IHtcblx0XHQvLyBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHQvLyBcdGxldCBib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2FyZCcpO1xuXHRcdC8vIFx0aWYgKGJvYXJkICYmIChvbkRpc3BsYXkuZGlzcGxheVN0YXRlICYmIG9uRGlzcGxheS50eXBlID09PSAyKSlcblx0XHQvLyBcdHtcblx0XHQvLyBcdFx0Ym9hcmQuc2Nyb2xsSW50b1ZpZXcoZmFsc2UpO1xuXHRcdC8vIFx0XHRjb25zb2xlLmxvZyhcImZ1bmMgZmlyZWQgXCIpXG5cdFx0Ly8gXHR9XG5cdFx0Ly8gXHRlbHNlXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwic2Nyb29vb29vb29vb29vb29vb29vbGxsOiBOVUxMTExMIHR5cGUgOiBcIiArIHR5cGUgKyBcIiBzdGF0ZSA6IFwiKyBkaXNwbGF5U3RhdGUpXG5cblx0XHQvLyB9LCAxMDApXG5cdFx0Y29uc29sZS5sb2coXCIgfHx8ICBESVNQTEFZIDogXCIsIGRpc3BsYXlTdGF0ZSA/IFwidHJ1ZVwiIDogXCJmYWxzZVwiICwgXCIgfHx8IHR5cGUgOiBcIiArIHR5cGUgKVxuXHRcdGNvbnN0IG5ld2Rpc3BsYXlPZmYgPSBvbkRpc3BsYXkuZGlzcGxheVN0YXRlICYmICFkaXNwbGF5U3RhdGUgPyB0cnVlIDogZmFsc2U7XG5cdFx0c2V0T25EaXNwbGF5KHsgLi4ub25EaXNwbGF5LCBkaXNwbGF5U3RhdGUsIGRpc3BsYXlPZmYgOiBuZXdkaXNwbGF5T2ZmLCBpdGVtSWQsIHR5cGUgfSk7XG5cdH1cblx0XG5cdGNvbnN0IGhhbmRsZU1vdXNlTW92ZSA9IGUgPT4ge1xuXHRcdHJvdGF0ZUJ5TW91c2VQb3NpdGlvbihlLCBpbWFnZVJlZi5jdXJyZW50KVxuXHQgIH07XG5cdGNvbnN0ICBoYW5kbGVNb3VzZUxlYXZlID0gZSA9PiB7XG5cdFx0aW1hZ2VSZWYuY3VycmVudC5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpYFxuXHR9XG5cdHJldHVybiAoXG5cdFx0PG1vdGlvbi5kaXYgY2xhc3NOYW1lPXtgcmVsYXRpdmUgZmxleCBmbGV4LWNvbCB3LWZ1bGwgaC1hdXRvIG92ZXJmbG93LWhpZGRlbmB9Plxuey8qIHtcdFx0Y29uc29sZS5sb2coZGF0YUxvYWRpbmcgPyBcIm5vdCBmZXRjaGVkIHlldFwiIDogXCJhYm91dCA6XCIgLCBhYm91dCwgXCJyZXBvcyA6IFwiLCByZXBvcyApfSAqL31cblx0XHRcdHsvKiA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHotNTAgdGV4dC13aGl0ZSBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIHRvcC0xMDAgbGVmdC0xLzRcIiA+XG5cdFx0XHRcdDxoMT5vbkRpc3BsYXkgOiB7b25EaXNwbGF5LmRpc3BsYXlTdGF0ZSA/IFwidHJ1ZVwiIDogXCJmYWxzZVwifTwvaDE+XG5cdFx0XHRcdDxoMT5kaXNwbGF5T2ZmIDoge29uRGlzcGxheS5kaXNwbGF5T2ZmID8gXCJ0cnVlXCIgOiBcImZhbHNlXCJ9PC9oMT5cblx0XHRcdFx0PGgxPml0ZW1JZCA6IHtvbkRpc3BsYXkuaXRlbUlkfTwvaDE+XG5cdFx0XHRcdDxoMT50eXBlIDoge29uRGlzcGxheS50eXBlfTwvaDE+XG5cdFx0XHRcdDxoMT5YIDoge21vdXNlUG9zaXRpb24ueH08L2gxPlxuXHRcdFx0XHQ8aDE+WSA6IHttb3VzZVBvc2l0aW9uLnl9PC9oMT5cblx0PFx0XHRcdGgxPnRvcCA6IHtzaXplLnRvcH0gfCBsZWZ0IDoge3NpemUubGVmdH08L2gxPlxuXHRcdFx0XHQ8TGluayBocmVmPVwiL2hvbWVcIiA+PGE+bm9uZSBleGlzdGluZyB1cmw8L2E+PC9MaW5rPlxuXHRcdFx0PC9kaXY+ICovfVxuXHRcdFx0ey8qIDxuYXYgY2xhc3NOYW1lPVwiZml4ZWQgei01MCB0b3AtMjAgcmlnaHQtOCBsZzpoLTQwIGxnOnctMjQgbWQ6aC0zMiBtZDp3LTIwIGgtMjAgdy0xNlwiPlxuXHRcdFx0XHQ8RXllU3dpdGNoIGRhcmtUaGVtZT17ZGFya1RoZW1lfSBjaGFuZ2VUaGVtZT17Y2hhbmdlVGhlbWV9IGNvbG9yMj1cImJnLWdyZWVuLTUwMFwiIGNvbG9yMT1cImJnLWJsdWUtOTAwXCIgLz5cblx0XHRcdDwvbmF2PiAqL31cblx0XHRcdDxtb3Rpb24uZGl2IGNsYXNzTmFtZT17YHJlbGF0aXZlIGZsZXggZmxleC1jb2wganVzdGlmeS1zdGFydCBsOmgtc2NyZWVuICR7b25EaXNwbGF5LmRpc3BsYXlTdGF0ZSAmJiBvbkRpc3BsYXkudHlwZSAhPT0gLTEgPyBcImgtYXV0b1wiIDogXCJoLXNjcmVlblwiIH0gbS0wIHAtMCAgdy1mdWxsICR7dGhlbWUuZGFyay5iYWNrZ3JvdW5kQ29sb3J9YH1cblx0XHRcdD5cblx0XHRcdFx0PG1vdGlvbi5kaXYgaWQ9XCJzb2d1bWFcIiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBsOmgtZnVsbCBtZDpoLXNjcmVlbiBoLTgwIHctZnVsbFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIGxnOmgtZnVsbCBtZDpoLWZ1bGwgaC1mdWxsIHctZnVsbCBcIj5cblx0XHRcdFx0XHRcdDxEYXJrU2t5T3BlbiBoZWlnaHQ9XCJsZzpoLWZ1bGwgaC1mdWxsIG1kOmgtMS8yIHctZnVsbFwiIGRhcmtUaGVtZT17ZGFya1RoZW1lfSAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy1mdWxsIGgtZnVsbCB0b3AtMCBsZWZ0LTBcIiBcblx0XHRcdFx0XHRcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8bW90aW9uLmRpdiBjbGFzc05hbWU9XCIgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1mdWxsIHctMS8yIFwiXG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0ey8qIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1mdWxsIHctNS82IGJnLXJlZC02MDBcIj4gKi99XG5cdFx0XHRcdFx0XHRcdFx0PG1vdGlvbi5kaXZcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctMS8zIGgtZnVsbCBwdC1mdWxsXCJcblx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGhyIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGJvcmRlci0yIGJvcmRlci1ibGFjayBoLTEvMlwiPjwvaHI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bW90aW9uLmltZyBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTAgdy1mdWxsIGJvcmRlci00IGJvcmRlci1ibGFjayByb3VuZGVkLWZ1bGxcIiBzcmM9XCIvbWUvMC5wbmdcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZWY9e2ltYWdlUmVmfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbk1vdXNlTW92ZT17aGFuZGxlTW91c2VNb3ZlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbk1vdXNlTGVhdmU9e2hhbmRsZU1vdXNlTGVhdmV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzY2FsZTogc29ndW1hU2NhbGUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR5OiBzb2d1bWFZb2Zmc2V0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdFx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0XHRcdFx0ey8qIDwvZGl2PiAqL31cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLXN0YXJ0IG1kOmgtMTAwIGxnOmgtMTAwIG1kOnRvcC0xLzQgdG9wLTEvNCBoLWZ1bGwgbGc6dG9wLTEvMyB3LWZ1bGwgei0yMCBwb2ludGVyLWV2ZW50cy1ub25lXCJcblx0XHRcdFx0XHRcdHN0eWxlPXsgb25EaXNwbGF5LmRpc3BsYXlTdGF0ZSA/IFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0c2NhbGU6IHNvZ3VtYVNjYWxlLFxuXHRcdFx0XHRcdFx0XHRcdHk6IHNvZ3VtYVlvZmZzZXRcblx0XHRcdFx0XHRcdFx0fSA6IHtcblx0XHRcdFx0XHRcdFx0XHRzY2FsZSA6IDEsXG5cdFx0XHRcdFx0XHRcdFx0eSA6IDBcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxTb2d1bWFWeCByZXBvcz17cmVwb3N9IGRhdGFMb2FkaW5nIHNldE9uRGlzcGxheT17ZGlzcGxheUdpbX0gb25EaXNwbGF5PXtvbkRpc3BsYXl9IGRhcmtUaGVtZT17ZGFya1RoZW1lfSAvPlxuXHRcdFx0XHRcdFx0PFNvZ3VtYVZ4UGhvbmUgcmVwb3M9e3JlcG9zfSBkYXRhTG9hZGluZyBzZXRPbkRpc3BsYXk9e2Rpc3BsYXlHaW19IG9uRGlzcGxheT17b25EaXNwbGF5fSBkYXJrVGhlbWU9e2RhcmtUaGVtZX0gLz5cblx0XHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdFx0PE1haW5Cb2FyZCBpZD1cImJvYXJkXCIgb25EaXNwbGF5PXtvbkRpc3BsYXl9IGFib3V0PXthYm91dH0gcmVwb3M9e3JlcG9zfSAvPlxuXHRcdFx0XHR7LyogPEJvYXJkUGhvbmUgb25EaXNwbGF5PXtvbkRpc3BsYXl9IGFib3V0PXthYm91dH0gcmVwb3M9e3JlcG9zfSAvPiAqL31cblx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdCB7Lyoge29uRGlzcGxheS5kaXNwbGF5U3RhdGUgJiYgPENhcmQgb25EaXNwbGF5PXtvbkRpc3BsYXl9IGRhcmtUaGVtZT17ZGFya1RoZW1lfSBkaXNwbGF5R2ltPXtkaXNwbGF5R2ltfSAvPn0gKi99XG5cdFx0PC9tb3Rpb24uZGl2PlxuXHQpXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcblxuXHRjb25zdCByZXMxID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvSmFrZWVEZXN1Jyk7XG5cdGNvbnN0IHJlczIgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9KYWtlZURlc3UvcmVwb3MnKTtcblx0XG5cdGNvbnN0IGFib3V0ID0gYXdhaXQgcmVzMS5qc29uKCk7XG5cdGNvbnN0IHJlcG9zID0gYXdhaXQgcmVzMi5qc29uKCk7XG5cdC8vIGNvbnNvbGUubG9nKCBicnV0RGF0YSApXG5cdC8vIGNvbnN0IGxvYWRpbmcgPSBicnV0RGF0YSA/IHRydWUgOiBmYWxzZTtcblx0Ly8gaWYgKGZldGNoZWREYXRhKVxuXHQvLyB7XG5cblx0Ly8gfVxuXHRjb25zdCBkYXRhTG9hZGluZyA9IChhYm91dCAmJiByZXBvcykgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBmYWxzZTsgXG5cdFxuXHRyZXR1cm4ge1xuXHRcdHByb3BzIDogeyBhYm91dCwgcmVwb3MsIGRhdGFMb2FkaW5nICB9XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})