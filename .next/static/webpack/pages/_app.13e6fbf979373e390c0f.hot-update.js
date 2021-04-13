webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _components_darkSkyOpen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/darkSkyOpen */ \"./components/darkSkyOpen.js\");\n/* harmony import */ var _components_sogumaVx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/sogumaVx */ \"./components/sogumaVx.tsx\");\n/* harmony import */ var _components_sogumaVxPhone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/sogumaVxPhone */ \"./components/sogumaVxPhone.tsx\");\n/* harmony import */ var _components_darkSky__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/darkSky */ \"./components/darkSky.js\");\n/* harmony import */ var _components_eyeSwitch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/eyeSwitch */ \"./components/eyeSwitch.js\");\n/* harmony import */ var _components_mainboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/mainboard */ \"./components/mainboard.js\");\n/* harmony import */ var _components_boardPhone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/boardPhone */ \"./components/boardPhone.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_utilities_getLocalProjectData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/utilities/getLocalProjectData */ \"./components/utilities/getLocalProjectData.js\");\n/* harmony import */ var _components_scene__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/scene */ \"./components/scene.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _components_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/theme */ \"./components/theme.js\");\n\n\n\nvar _jsxFileName = \"/home/hamza/Desktop/portfolio/pages/index.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction rotateByMousePosition(event, ref) {\n  var currentPosi = {\n    x: event.pageX,\n    y: event.pageY\n  };\n  var offset = {\n    top: 0,\n    left: 0\n  };\n  if (ref) offset = ref.getBoundingClientRect();\n  ref.style.transform = \"rotateY(\".concat(maping(currentPosi.x - offset.left, [0, offset.width], [-10, 10]), \"deg)\");\n  ref.style.transform += \"rotateX(\".concat(maping(currentPosi.y - offset.top, [0, offset.height], [-10, 10]), \"deg)\"); // console.log(maping(currentPosi.x - offset.left, [0, offset.width],[-40, 40]))\n  // ref.style.transform += ` rotateY(${maping(currentPosi.y - offset.top, [0, offset.height],[-40, 40])}deg)`\n  // return {\n  // \tx : currentPosi.x - offset.left,\n  // \ty : currentPosi.y - offset.top,\n  // \t// zab\n  // }\n}\n\nfunction maping(value, interval1, interval2) {\n  return value * (interval2[1] - interval2[0]) / interval1[1] + interval2[0];\n}\n\nvar __N_SSG = true;\nfunction Home(_ref) {\n  _s();\n\n  var about = _ref.about,\n      repos = _ref.repos,\n      dataLoading = _ref.dataLoading,\n      darkTheme = _ref.darkTheme,\n      changeTheme = _ref.changeTheme;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_12__[\"useState\"])({\n    displayState: true,\n    displayOff: false,\n    itemId: -1,\n    type: -1\n  }),\n      onDisplay = _useState[0],\n      setOnDisplay = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_12__[\"useState\"])({}),\n      mousePosition = _useState2[0],\n      setMousePosition = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_12__[\"useState\"])({\n    height: 0,\n    width: 0\n  }),\n      size = _useState3[0],\n      setSize = _useState3[1];\n\n  var imageRef = Object(react__WEBPACK_IMPORTED_MODULE_12__[\"useRef\"])();\n\n  var _useViewportScroll = Object(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useViewportScroll\"])(),\n      scrollYProgress = _useViewportScroll.scrollYProgress;\n\n  var sogumaScale = Object(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useTransform\"])(scrollYProgress, [0, 0.1, 0.4, 1], [1, 0.9, 0.8, 0.1]);\n  var sogumaYoffset = Object(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useTransform\"])(scrollYProgress, [0, 0.1, 0.5, 1], [0, -10, -100, -500]);\n  var rX = maping(mousePosition.x, [0, size.width], [0, 50]);\n  var rY = maping(mousePosition.y, [0, size.height], [0, 50]); // getLocalProjectData(\"Fractol\");\n  // const [[soguma, board], setElements] = useState([null,null])\n\n  Object(react__WEBPACK_IMPORTED_MODULE_12__[\"useEffect\"])(function () {\n    // setElements([document.getElementById('soguma'), document.getElementById('board')])\n    // if (imageRef && imageRef.current)\n    // {\n    // \tconsole.log(\"tyyype x \", imageRef.current.getBoundingClientRect())\n    // \tlet rectSize = imageRef.current.getBoundingClientRect()\n    // \tsetSize({ height : rectSize.height, width : rectSize.width})\n    // }\n    var timer;\n\n    if (!onDisplay.displayState && onDisplay.displayOff) {\n      timer = setTimeout(function () {\n        setOnDisplay(_objectSpread(_objectSpread({}, onDisplay), {}, {\n          displayOff: false\n        }));\n      }, 300);\n    }\n\n    return function () {\n      return clearTimeout(timer);\n    };\n  }, [onDisplay]); // set a gim on display mode\n\n  var displayGim = function displayGim(displayState, itemId, type) {\n    // setTimeout(() => {\n    // \tlet board = document.getElementById('board');\n    // \tif (board && (onDisplay.displayState && onDisplay.type === 2))\n    // \t{\n    // \t\tboard.scrollIntoView(false);\n    // \t\tconsole.log(\"func fired \")\n    // \t}\n    // \telse\n    console.log(\"scroooooooooooooooooolll: NULLLLL type : \" + type + \" state : \" + displayState); // }, 100)\n\n    console.log(\" |||  DISPLAY : \", displayState ? \"true\" : \"false\", \" ||| type : \" + type);\n    var newdisplayOff = onDisplay.displayState && !displayState ? true : false;\n    setOnDisplay(_objectSpread(_objectSpread({}, onDisplay), {}, {\n      displayState: displayState,\n      displayOff: newdisplayOff,\n      itemId: itemId,\n      type: type\n    }));\n  };\n\n  var handleMouseMove = function handleMouseMove(e) {\n    rotateByMousePosition(e, imageRef.current);\n  };\n\n  var handleMouseLeave = function handleMouseLeave(e) {\n    imageRef.current.style.transform = \"rotateX(0deg) rotateY(0deg)\";\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].div, {\n    className: \"relative flex flex-col w-full h-auto overflow-hidden\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].div, {\n      className: \"relative flex flex-col justify-start l:h-screen \".concat(onDisplay.displayState && onDisplay.type !== -1 ? \"h-auto\" : \"h-screen\", \" m-0 p-0  w-full \").concat(_components_theme__WEBPACK_IMPORTED_MODULE_14__[\"theme\"].dark.backgroundColor),\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].div, {\n        id: \"soguma\",\n        className: \"relative flex justify-center items-center l:h-full md:h-screen h-80 w-full\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"absolute top-0 left-0 lg:h-full md:h-full h-full w-full \",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_darkSkyOpen__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            height: \"lg:h-full h-full md:h-1/2 w-full\",\n            darkTheme: darkTheme\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 117,\n            columnNumber: 7\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 6\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"absolute w-full h-full top-0 left-0\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].div, {\n            className: \" flex flex-col justify-center items-center h-full w-1/2 \",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].div, {\n              className: \"relative flex items-center w-1/3 h-full pt-full\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].img, {\n                className: \"absolute left-0 w-full border-4 border-black rounded-full\",\n                src: \"/me/0.png\",\n                ref: imageRef,\n                onMouseMove: handleMouseMove,\n                onMouseLeave: handleMouseLeave // style={{\n                // \trotateY : rX,\n                // \trotateX : rY\n                // }}\n\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 129,\n                columnNumber: 10\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"hr\", {\n                className: \"absolute top-full border-2 border-black h-half\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 138,\n                columnNumber: 10\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 126,\n              columnNumber: 9\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 122,\n            columnNumber: 7\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 119,\n          columnNumber: 6\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].div, {\n          className: \"absolute flex justify-center items-start md:h-100 lg:h-100 md:top-1/4 top-1/4 h-full lg:top-1/3 w-full z-20 pointer-events-none\",\n          style: onDisplay.displayState ? {\n            scale: sogumaScale,\n            y: sogumaYoffset\n          } : {\n            scale: 1,\n            y: 0\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_sogumaVx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            repos: repos,\n            dataLoading: true,\n            setOnDisplay: displayGim,\n            onDisplay: onDisplay,\n            darkTheme: darkTheme\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 154,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_sogumaVxPhone__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            repos: repos,\n            dataLoading: true,\n            setOnDisplay: displayGim,\n            onDisplay: onDisplay,\n            darkTheme: darkTheme\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 155,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 143,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 115,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_mainboard__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        id: \"board\",\n        onDisplay: onDisplay,\n        about: about,\n        repos: repos\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 158,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 4\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 98,\n    columnNumber: 3\n  }, this);\n}\n\n_s(Home, \"xo856P2IuV9Yol9VHEmZcDubB3I=\", false, function () {\n  return [framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useViewportScroll\"], framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useTransform\"]];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJyb3RhdGVCeU1vdXNlUG9zaXRpb24iLCJldmVudCIsInJlZiIsImN1cnJlbnRQb3NpIiwieCIsInBhZ2VYIiwieSIsInBhZ2VZIiwib2Zmc2V0IiwidG9wIiwibGVmdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInN0eWxlIiwidHJhbnNmb3JtIiwibWFwaW5nIiwid2lkdGgiLCJoZWlnaHQiLCJ2YWx1ZSIsImludGVydmFsMSIsImludGVydmFsMiIsIkhvbWUiLCJhYm91dCIsInJlcG9zIiwiZGF0YUxvYWRpbmciLCJkYXJrVGhlbWUiLCJjaGFuZ2VUaGVtZSIsInVzZVN0YXRlIiwiZGlzcGxheVN0YXRlIiwiZGlzcGxheU9mZiIsIml0ZW1JZCIsInR5cGUiLCJvbkRpc3BsYXkiLCJzZXRPbkRpc3BsYXkiLCJtb3VzZVBvc2l0aW9uIiwic2V0TW91c2VQb3NpdGlvbiIsInNpemUiLCJzZXRTaXplIiwiaW1hZ2VSZWYiLCJ1c2VSZWYiLCJ1c2VWaWV3cG9ydFNjcm9sbCIsInNjcm9sbFlQcm9ncmVzcyIsInNvZ3VtYVNjYWxlIiwidXNlVHJhbnNmb3JtIiwic29ndW1hWW9mZnNldCIsInJYIiwiclkiLCJ1c2VFZmZlY3QiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJkaXNwbGF5R2ltIiwiY29uc29sZSIsImxvZyIsIm5ld2Rpc3BsYXlPZmYiLCJoYW5kbGVNb3VzZU1vdmUiLCJlIiwiY3VycmVudCIsImhhbmRsZU1vdXNlTGVhdmUiLCJ0aGVtZSIsImRhcmsiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzY2FsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLHFCQUFULENBQStC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QyxxRUFBQyxpRUFBRDtBQUFlLGlCQUFLLEVBQUVGLEtBQXRCO0FBQTZCLHVCQUFXLE1BQXhDO0FBQXlDLHdCQUFZLEVBQUU0QixVQUF2RDtBQUFtRSxxQkFBUyxFQUFFbkIsU0FBOUU7QUFBeUYscUJBQVMsRUFBRVA7QUFBcEc7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFaRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBNUJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZELGVBNkNDLHFFQUFDLDZEQUFEO0FBQVcsVUFBRSxFQUFDLE9BQWQ7QUFBc0IsaUJBQVMsRUFBRU8sU0FBakM7QUFBNEMsYUFBSyxFQUFFVixLQUFuRDtBQUEwRCxhQUFLLEVBQUVDO0FBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E3Q0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBbUVBOztHQTVIdUJGLEk7VUFLS21CLGdFLEVBQ1JHLDJELEVBQ0VBLDJEOzs7S0FQQ3RCLEkiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEYXJrU2t5T3BlbiBmcm9tICcuLi9jb21wb25lbnRzL2RhcmtTa3lPcGVuJ1xuaW1wb3J0IFNvZ3VtYVZ4IGZyb20gJy4uL2NvbXBvbmVudHMvc29ndW1hVngnXG5pbXBvcnQgU29ndW1hVnhQaG9uZSBmcm9tICcuLi9jb21wb25lbnRzL3NvZ3VtYVZ4UGhvbmUnXG5pbXBvcnQgRGFya1NreSBmcm9tICcuLi9jb21wb25lbnRzL2RhcmtTa3knXG5pbXBvcnQgRXllU3dpdGNoIGZyb20gJy4uL2NvbXBvbmVudHMvZXllU3dpdGNoJ1xuaW1wb3J0IE1haW5Cb2FyZCBmcm9tICcuLi9jb21wb25lbnRzL21haW5ib2FyZCdcbmltcG9ydCBCb2FyZFBob25lIGZyb20gJy4uL2NvbXBvbmVudHMvYm9hcmRQaG9uZSdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBnZXRMb2NhbFByb2plY3REYXRhIGZyb20gJy4uL2NvbXBvbmVudHMvdXRpbGl0aWVzL2dldExvY2FsUHJvamVjdERhdGEnXG5cbmltcG9ydCBTY2VuZSBmcm9tICcuLi9jb21wb25lbnRzL3NjZW5lJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtb3Rpb24sIHVzZVRyYW5zZm9ybSwgdXNlVmlld3BvcnRTY3JvbGwsIHVzZU1vdGlvblZhbHVlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi4vY29tcG9uZW50cy90aGVtZSdcblxuZnVuY3Rpb24gcm90YXRlQnlNb3VzZVBvc2l0aW9uKGV2ZW50LCByZWYpIHtcblx0Y29uc3QgY3VycmVudFBvc2kgPSB7XG5cdFx0eCA6IGV2ZW50LnBhZ2VYICxcblx0XHR5IDogZXZlbnQucGFnZVksXG5cdH1cblxuXHRsZXQgb2Zmc2V0ID0ge3RvcCA6IDAsIGxlZnQgOiAwfVxuXHRpZiAocmVmIClcblx0b2Zmc2V0ID0gcmVmLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cdHJlZi5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlWSgke21hcGluZyhjdXJyZW50UG9zaS54IC0gb2Zmc2V0LmxlZnQsIFswLCBvZmZzZXQud2lkdGhdLFstMTAsIDEwXSl9ZGVnKWBcblx0cmVmLnN0eWxlLnRyYW5zZm9ybSArPSBgcm90YXRlWCgke21hcGluZyhjdXJyZW50UG9zaS55IC0gb2Zmc2V0LnRvcCwgWzAsIG9mZnNldC5oZWlnaHRdLFstMTAsIDEwXSl9ZGVnKWBcblx0Ly8gY29uc29sZS5sb2cobWFwaW5nKGN1cnJlbnRQb3NpLnggLSBvZmZzZXQubGVmdCwgWzAsIG9mZnNldC53aWR0aF0sWy00MCwgNDBdKSlcblx0Ly8gcmVmLnN0eWxlLnRyYW5zZm9ybSArPSBgIHJvdGF0ZVkoJHttYXBpbmcoY3VycmVudFBvc2kueSAtIG9mZnNldC50b3AsIFswLCBvZmZzZXQuaGVpZ2h0XSxbLTQwLCA0MF0pfWRlZylgXG5cdC8vIHJldHVybiB7XG5cdC8vIFx0eCA6IGN1cnJlbnRQb3NpLnggLSBvZmZzZXQubGVmdCxcblx0Ly8gXHR5IDogY3VycmVudFBvc2kueSAtIG9mZnNldC50b3AsXG5cdC8vIFx0Ly8gemFiXG5cdC8vIH1cbn1cblxuZnVuY3Rpb24gbWFwaW5nKHZhbHVlLCBpbnRlcnZhbDEsIGludGVydmFsMikge1xuXHRyZXR1cm4gICh2YWx1ZSAqIChpbnRlcnZhbDJbMV0gLSBpbnRlcnZhbDJbMF0pIC8gaW50ZXJ2YWwxWzFdKSArIGludGVydmFsMlswXVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgYWJvdXQsIHJlcG9zLCBkYXRhTG9hZGluZywgZGFya1RoZW1lLCBjaGFuZ2VUaGVtZX0pIHtcblx0Y29uc3QgW29uRGlzcGxheSwgc2V0T25EaXNwbGF5XSA9IHVzZVN0YXRlKHsgZGlzcGxheVN0YXRlOiB0cnVlLCBkaXNwbGF5T2ZmIDogZmFsc2UsIGl0ZW1JZDogLTEsIHR5cGU6IC0xIH0pXG5cdGNvbnN0IFttb3VzZVBvc2l0aW9uLCBzZXRNb3VzZVBvc2l0aW9uXSA9IHVzZVN0YXRlKHt9KTtcblx0Y29uc3QgW3NpemUsIHNldFNpemVdID0gdXNlU3RhdGUoe2hlaWdodCA6IDAsIHdpZHRoIDogMH0pO1xuXHRjb25zdCBpbWFnZVJlZiA9IHVzZVJlZigpXG5cdGNvbnN0IHsgc2Nyb2xsWVByb2dyZXNzIH0gPSB1c2VWaWV3cG9ydFNjcm9sbCgpO1xuXHRjb25zdCBzb2d1bWFTY2FsZSA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAwLjEsIDAuNCwgMV0sIFsxLCAwLjksIDAuOCwgMC4xXSk7XG5cdGNvbnN0IHNvZ3VtYVlvZmZzZXQgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMC4xLCAwLjUsIDFdLCBbMCwgLTEwLCAtMTAwLCAtNTAwXSk7XG5cblxuXG5cdGNvbnN0IHJYID0gbWFwaW5nKG1vdXNlUG9zaXRpb24ueCAsIFswICwgc2l6ZS53aWR0aF0sIFswLCA1MF0pXG5cdGNvbnN0IHJZID0gbWFwaW5nKG1vdXNlUG9zaXRpb24ueSwgWzAgLCBzaXplLmhlaWdodF0sIFswLCA1MF0pXG5cdC8vIGdldExvY2FsUHJvamVjdERhdGEoXCJGcmFjdG9sXCIpO1xuXHQvLyBjb25zdCBbW3NvZ3VtYSwgYm9hcmRdLCBzZXRFbGVtZW50c10gPSB1c2VTdGF0ZShbbnVsbCxudWxsXSlcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHQvLyBzZXRFbGVtZW50cyhbZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NvZ3VtYScpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hcmQnKV0pXG5cdFx0Ly8gaWYgKGltYWdlUmVmICYmIGltYWdlUmVmLmN1cnJlbnQpXG5cdFx0Ly8ge1xuXHRcdC8vIFx0Y29uc29sZS5sb2coXCJ0eXl5cGUgeCBcIiwgaW1hZ2VSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSlcblx0XHQvLyBcdGxldCByZWN0U2l6ZSA9IGltYWdlUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblx0XHQvLyBcdHNldFNpemUoeyBoZWlnaHQgOiByZWN0U2l6ZS5oZWlnaHQsIHdpZHRoIDogcmVjdFNpemUud2lkdGh9KVxuXHRcdC8vIH1cblx0XHRcdGxldCB0aW1lcjtcblx0XHRpZiAoIW9uRGlzcGxheS5kaXNwbGF5U3RhdGUgJiYgb25EaXNwbGF5LmRpc3BsYXlPZmYpXG5cdFx0e1xuXHRcdFx0dGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0c2V0T25EaXNwbGF5KHsgLi4ub25EaXNwbGF5LCBkaXNwbGF5T2ZmIDogZmFsc2UgfSk7XG5cdFx0XHR9LCAzMDApIFxuXHRcdH1cblx0XHRyZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKTtcblx0fSwgW29uRGlzcGxheV0pO1xuXG5cdC8vIHNldCBhIGdpbSBvbiBkaXNwbGF5IG1vZGVcblx0Y29uc3QgZGlzcGxheUdpbSA9IChkaXNwbGF5U3RhdGUsIGl0ZW1JZCwgdHlwZSkgPT4ge1xuXHRcdC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdC8vIFx0bGV0IGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXJkJyk7XG5cdFx0Ly8gXHRpZiAoYm9hcmQgJiYgKG9uRGlzcGxheS5kaXNwbGF5U3RhdGUgJiYgb25EaXNwbGF5LnR5cGUgPT09IDIpKVxuXHRcdC8vIFx0e1xuXHRcdC8vIFx0XHRib2FyZC5zY3JvbGxJbnRvVmlldyhmYWxzZSk7XG5cdFx0Ly8gXHRcdGNvbnNvbGUubG9nKFwiZnVuYyBmaXJlZCBcIilcblx0XHQvLyBcdH1cblx0XHQvLyBcdGVsc2Vcblx0XHRcdFx0Y29uc29sZS5sb2coXCJzY3Jvb29vb29vb29vb29vb29vb29sbGw6IE5VTExMTEwgdHlwZSA6IFwiICsgdHlwZSArIFwiIHN0YXRlIDogXCIrIGRpc3BsYXlTdGF0ZSlcblxuXHRcdC8vIH0sIDEwMClcblx0XHRjb25zb2xlLmxvZyhcIiB8fHwgIERJU1BMQVkgOiBcIiwgZGlzcGxheVN0YXRlID8gXCJ0cnVlXCIgOiBcImZhbHNlXCIgLCBcIiB8fHwgdHlwZSA6IFwiICsgdHlwZSApXG5cdFx0Y29uc3QgbmV3ZGlzcGxheU9mZiA9IG9uRGlzcGxheS5kaXNwbGF5U3RhdGUgJiYgIWRpc3BsYXlTdGF0ZSA/IHRydWUgOiBmYWxzZTtcblx0XHRzZXRPbkRpc3BsYXkoeyAuLi5vbkRpc3BsYXksIGRpc3BsYXlTdGF0ZSwgZGlzcGxheU9mZiA6IG5ld2Rpc3BsYXlPZmYsIGl0ZW1JZCwgdHlwZSB9KTtcblx0fVxuXHRcblx0Y29uc3QgaGFuZGxlTW91c2VNb3ZlID0gZSA9PiB7XG5cdFx0cm90YXRlQnlNb3VzZVBvc2l0aW9uKGUsIGltYWdlUmVmLmN1cnJlbnQpXG5cdCAgfTtcblx0Y29uc3QgIGhhbmRsZU1vdXNlTGVhdmUgPSBlID0+IHtcblx0XHRpbWFnZVJlZi5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZylgXG5cdH1cblx0cmV0dXJuIChcblx0XHQ8bW90aW9uLmRpdiBjbGFzc05hbWU9e2ByZWxhdGl2ZSBmbGV4IGZsZXgtY29sIHctZnVsbCBoLWF1dG8gb3ZlcmZsb3ctaGlkZGVuYH0+XG57Lyoge1x0XHRjb25zb2xlLmxvZyhkYXRhTG9hZGluZyA/IFwibm90IGZldGNoZWQgeWV0XCIgOiBcImFib3V0IDpcIiAsIGFib3V0LCBcInJlcG9zIDogXCIsIHJlcG9zICl9ICovfVxuXHRcdFx0ey8qIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgei01MCB0ZXh0LXdoaXRlIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgdG9wLTEwMCBsZWZ0LTEvNFwiID5cblx0XHRcdFx0PGgxPm9uRGlzcGxheSA6IHtvbkRpc3BsYXkuZGlzcGxheVN0YXRlID8gXCJ0cnVlXCIgOiBcImZhbHNlXCJ9PC9oMT5cblx0XHRcdFx0PGgxPmRpc3BsYXlPZmYgOiB7b25EaXNwbGF5LmRpc3BsYXlPZmYgPyBcInRydWVcIiA6IFwiZmFsc2VcIn08L2gxPlxuXHRcdFx0XHQ8aDE+aXRlbUlkIDoge29uRGlzcGxheS5pdGVtSWR9PC9oMT5cblx0XHRcdFx0PGgxPnR5cGUgOiB7b25EaXNwbGF5LnR5cGV9PC9oMT5cblx0XHRcdFx0PGgxPlggOiB7bW91c2VQb3NpdGlvbi54fTwvaDE+XG5cdFx0XHRcdDxoMT5ZIDoge21vdXNlUG9zaXRpb24ueX08L2gxPlxuXHQ8XHRcdFx0aDE+dG9wIDoge3NpemUudG9wfSB8IGxlZnQgOiB7c2l6ZS5sZWZ0fTwvaDE+XG5cdFx0XHRcdDxMaW5rIGhyZWY9XCIvaG9tZVwiID48YT5ub25lIGV4aXN0aW5nIHVybDwvYT48L0xpbms+XG5cdFx0XHQ8L2Rpdj4gKi99XG5cdFx0XHR7LyogPG5hdiBjbGFzc05hbWU9XCJmaXhlZCB6LTUwIHRvcC0yMCByaWdodC04IGxnOmgtNDAgbGc6dy0yNCBtZDpoLTMyIG1kOnctMjAgaC0yMCB3LTE2XCI+XG5cdFx0XHRcdDxFeWVTd2l0Y2ggZGFya1RoZW1lPXtkYXJrVGhlbWV9IGNoYW5nZVRoZW1lPXtjaGFuZ2VUaGVtZX0gY29sb3IyPVwiYmctZ3JlZW4tNTAwXCIgY29sb3IxPVwiYmctYmx1ZS05MDBcIiAvPlxuXHRcdFx0PC9uYXY+ICovfVxuXHRcdFx0PG1vdGlvbi5kaXYgY2xhc3NOYW1lPXtgcmVsYXRpdmUgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGw6aC1zY3JlZW4gJHtvbkRpc3BsYXkuZGlzcGxheVN0YXRlICYmIG9uRGlzcGxheS50eXBlICE9PSAtMSA/IFwiaC1hdXRvXCIgOiBcImgtc2NyZWVuXCIgfSBtLTAgcC0wICB3LWZ1bGwgJHt0aGVtZS5kYXJrLmJhY2tncm91bmRDb2xvcn1gfVxuXHRcdFx0PlxuXHRcdFx0XHQ8bW90aW9uLmRpdiBpZD1cInNvZ3VtYVwiIGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGw6aC1mdWxsIG1kOmgtc2NyZWVuIGgtODAgdy1mdWxsXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgbGc6aC1mdWxsIG1kOmgtZnVsbCBoLWZ1bGwgdy1mdWxsIFwiPlxuXHRcdFx0XHRcdFx0PERhcmtTa3lPcGVuIGhlaWdodD1cImxnOmgtZnVsbCBoLWZ1bGwgbWQ6aC0xLzIgdy1mdWxsXCIgZGFya1RoZW1lPXtkYXJrVGhlbWV9IC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB3LWZ1bGwgaC1mdWxsIHRvcC0wIGxlZnQtMFwiIFxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cIiBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLWZ1bGwgdy0xLzIgXCJcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHR7LyogPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLWZ1bGwgdy01LzYgYmctcmVkLTYwMFwiPiAqL31cblx0XHRcdFx0XHRcdFx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBpdGVtcy1jZW50ZXIgdy0xLzMgaC1mdWxsIHB0LWZ1bGxcIlxuXHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PG1vdGlvbi5pbWcgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0wIHctZnVsbCBib3JkZXItNCBib3JkZXItYmxhY2sgcm91bmRlZC1mdWxsXCIgc3JjPVwiL21lLzAucG5nXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmVmPXtpbWFnZVJlZn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0b25Nb3VzZU1vdmU9e2hhbmRsZU1vdXNlTW92ZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0b25Nb3VzZUxlYXZlPXtoYW5kbGVNb3VzZUxlYXZlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBcdHJvdGF0ZVkgOiByWCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gXHRyb3RhdGVYIDogcllcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gfX1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aHIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLWZ1bGwgYm9yZGVyLTIgYm9yZGVyLWJsYWNrIGgtaGFsZlwiPjwvaHI+XG5cdFx0XHRcdFx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHRcdFx0XHR7LyogPC9kaXY+ICovfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtc3RhcnQgbWQ6aC0xMDAgbGc6aC0xMDAgbWQ6dG9wLTEvNCB0b3AtMS80IGgtZnVsbCBsZzp0b3AtMS8zIHctZnVsbCB6LTIwIHBvaW50ZXItZXZlbnRzLW5vbmVcIlxuXHRcdFx0XHRcdFx0c3R5bGU9eyBvbkRpc3BsYXkuZGlzcGxheVN0YXRlID8gXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRzY2FsZTogc29ndW1hU2NhbGUsXG5cdFx0XHRcdFx0XHRcdFx0eTogc29ndW1hWW9mZnNldFxuXHRcdFx0XHRcdFx0XHR9IDoge1xuXHRcdFx0XHRcdFx0XHRcdHNjYWxlIDogMSxcblx0XHRcdFx0XHRcdFx0XHR5IDogMFxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PFNvZ3VtYVZ4IHJlcG9zPXtyZXBvc30gZGF0YUxvYWRpbmcgc2V0T25EaXNwbGF5PXtkaXNwbGF5R2ltfSBvbkRpc3BsYXk9e29uRGlzcGxheX0gZGFya1RoZW1lPXtkYXJrVGhlbWV9IC8+XG5cdFx0XHRcdFx0XHQ8U29ndW1hVnhQaG9uZSByZXBvcz17cmVwb3N9IGRhdGFMb2FkaW5nIHNldE9uRGlzcGxheT17ZGlzcGxheUdpbX0gb25EaXNwbGF5PXtvbkRpc3BsYXl9IGRhcmtUaGVtZT17ZGFya1RoZW1lfSAvPlxuXHRcdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0XHQ8TWFpbkJvYXJkIGlkPVwiYm9hcmRcIiBvbkRpc3BsYXk9e29uRGlzcGxheX0gYWJvdXQ9e2Fib3V0fSByZXBvcz17cmVwb3N9IC8+XG5cdFx0XHRcdHsvKiA8Qm9hcmRQaG9uZSBvbkRpc3BsYXk9e29uRGlzcGxheX0gYWJvdXQ9e2Fib3V0fSByZXBvcz17cmVwb3N9IC8+ICovfVxuXHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0IHsvKiB7b25EaXNwbGF5LmRpc3BsYXlTdGF0ZSAmJiA8Q2FyZCBvbkRpc3BsYXk9e29uRGlzcGxheX0gZGFya1RoZW1lPXtkYXJrVGhlbWV9IGRpc3BsYXlHaW09e2Rpc3BsYXlHaW19IC8+fSAqL31cblx0XHQ8L21vdGlvbi5kaXY+XG5cdClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuXG5cdGNvbnN0IHJlczEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9KYWtlZURlc3UnKTtcblx0Y29uc3QgcmVzMiA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL0pha2VlRGVzdS9yZXBvcycpO1xuXHRcblx0Y29uc3QgYWJvdXQgPSBhd2FpdCByZXMxLmpzb24oKTtcblx0Y29uc3QgcmVwb3MgPSBhd2FpdCByZXMyLmpzb24oKTtcblx0Ly8gY29uc29sZS5sb2coIGJydXREYXRhIClcblx0Ly8gY29uc3QgbG9hZGluZyA9IGJydXREYXRhID8gdHJ1ZSA6IGZhbHNlO1xuXHQvLyBpZiAoZmV0Y2hlZERhdGEpXG5cdC8vIHtcblxuXHQvLyB9XG5cdGNvbnN0IGRhdGFMb2FkaW5nID0gKGFib3V0ICYmIHJlcG9zKSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGZhbHNlOyBcblx0XG5cdHJldHVybiB7XG5cdFx0cHJvcHMgOiB7IGFib3V0LCByZXBvcywgZGF0YUxvYWRpbmcgIH1cblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})