webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _components_darkSkyOpen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/darkSkyOpen */ \"./components/darkSkyOpen.js\");\n/* harmony import */ var _components_sogumaVx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/sogumaVx */ \"./components/sogumaVx.tsx\");\n/* harmony import */ var _components_sogumaVxPhone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/sogumaVxPhone */ \"./components/sogumaVxPhone.tsx\");\n/* harmony import */ var _components_darkSky__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/darkSky */ \"./components/darkSky.js\");\n/* harmony import */ var _components_eyeSwitch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/eyeSwitch */ \"./components/eyeSwitch.js\");\n/* harmony import */ var _components_mainboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/mainboard */ \"./components/mainboard.js\");\n/* harmony import */ var _components_boardPhone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/boardPhone */ \"./components/boardPhone.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_utilities_getLocalProjectData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/utilities/getLocalProjectData */ \"./components/utilities/getLocalProjectData.js\");\n/* harmony import */ var _components_scene__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/scene */ \"./components/scene.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _components_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/theme */ \"./components/theme.js\");\n\n\n\nvar _jsxFileName = \"/home/hamza/Desktop/portfolio/pages/index.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction rotateByMousePosition(event, ref) {\n  var currentPosi = {\n    x: event.pageX,\n    y: event.pageY\n  };\n  var offset = {\n    top: 0,\n    left: 0\n  };\n\n  if (ref) {\n    offset = ref.getBoundingClientRect();\n    ref.style.transform = \"rotateY(\".concat(maping(currentPosi.x - offset.left, [0, offset.width], [-20, 20]), \"deg)\");\n    ref.style.transform += \"rotateX(\".concat(maping(currentPosi.y - offset.top, [0, offset.height], [-20, 20]), \"deg)\");\n  } // console.log(maping(currentPosi.x - offset.left, [0, offset.width],[-40, 40]))\n  // ref.style.transform += ` rotateY(${maping(currentPosi.y - offset.top, [0, offset.height],[-40, 40])}deg)`\n  // return {\n  // \tx : currentPosi.x - offset.left,\n  // \ty : currentPosi.y - offset.top,\n  // \t// zab\n  // }\n\n}\n\nfunction maping(value, interval1, interval2) {\n  return value * (interval2[1] - interval2[0]) / interval1[1] + interval2[0];\n}\n\nvar __N_SSG = true;\nfunction Home(_ref) {\n  _s();\n\n  var about = _ref.about,\n      repos = _ref.repos,\n      dataLoading = _ref.dataLoading,\n      darkTheme = _ref.darkTheme,\n      changeTheme = _ref.changeTheme;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_12__[\"useState\"])({\n    displayState: true,\n    displayOff: false,\n    itemId: -1,\n    type: -1\n  }),\n      onDisplay = _useState[0],\n      setOnDisplay = _useState[1]; // const [mousePosition, setMousePosition] = useState({});\n  // const [size, setSize] = useState({height : 0, width : 0});\n\n\n  var imageRef = Object(react__WEBPACK_IMPORTED_MODULE_12__[\"useRef\"])();\n\n  var _useViewportScroll = Object(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useViewportScroll\"])(),\n      scrollYProgress = _useViewportScroll.scrollYProgress;\n\n  var sogumaScale = Object(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useTransform\"])(scrollYProgress, [0, 0.1, 0.4, 1], [1, 0.9, 0.8, 0.1]);\n  var sogumaYoffset = Object(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useTransform\"])(scrollYProgress, [0, 0.1, 0.5, 1], [0, -10, -100, -500]); // const rX = maping(mousePosition.x , [0 , size.width], [0, 50])\n  // const rY = maping(mousePosition.y, [0 , size.height], [0, 50])\n  // getLocalProjectData(\"Fractol\");\n  // const [[soguma, board], setElements] = useState([null,null])\n\n  Object(react__WEBPACK_IMPORTED_MODULE_12__[\"useEffect\"])(function () {\n    // setElements([document.getElementById('soguma'), document.getElementById('board')])\n    // if (imageRef && imageRef.current)\n    // {\n    // \tconsole.log(\"tyyype x \", imageRef.current.getBoundingClientRect())\n    // \tlet rectSize = imageRef.current.getBoundingClientRect()\n    // \tsetSize({ height : rectSize.height, width : rectSize.width})\n    // }\n    var timer;\n\n    if (!onDisplay.displayState && onDisplay.displayOff) {\n      timer = setTimeout(function () {\n        setOnDisplay(_objectSpread(_objectSpread({}, onDisplay), {}, {\n          displayOff: false\n        }));\n      }, 300);\n    }\n\n    return function () {\n      return clearTimeout(timer);\n    };\n  }, [onDisplay]); // set a gim on display mode\n\n  var displayGim = function displayGim(displayState, itemId, type) {\n    // setTimeout(() => {\n    // \tlet board = document.getElementById('board');\n    // \tif (board && (onDisplay.displayState && onDisplay.type === 2))\n    // \t{\n    // \t\tboard.scrollIntoView(false);\n    // \t\tconsole.log(\"func fired \")\n    // \t}\n    // \telse\n    console.log(\"scroooooooooooooooooolll: NULLLLL type : \" + type + \" state : \" + displayState); // }, 100)\n\n    console.log(\" |||  DISPLAY : \", displayState ? \"true\" : \"false\", \" ||| type : \" + type);\n    var newdisplayOff = onDisplay.displayState && !displayState ? true : false;\n    setOnDisplay(_objectSpread(_objectSpread({}, onDisplay), {}, {\n      displayState: displayState,\n      displayOff: newdisplayOff,\n      itemId: itemId,\n      type: type\n    }));\n  };\n\n  var handleMouseMove = function handleMouseMove(e) {\n    rotateByMousePosition(e, imageRef.current);\n  };\n\n  var handleMouseLeave = function handleMouseLeave(e) {\n    imageRef.current.style.transform = \"rotateX(0deg) rotateY(0deg)\";\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].div, {\n    className: \"relative flex flex-col w-full h-auto overflow-hidden\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].div, {\n      className: \"relative flex flex-col justify-start l:h-screen \".concat(onDisplay.displayState && onDisplay.type !== -1 ? \"h-auto\" : \"h-screen\", \" m-0 p-0  w-full \").concat(_components_theme__WEBPACK_IMPORTED_MODULE_14__[\"theme\"].dark.backgroundColor),\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].div, {\n        id: \"soguma\",\n        className: \"relative flex justify-center items-center l:h-full md:h-screen h-80 w-full\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"absolute top-0 left-0 lg:h-full md:h-full h-full w-full \",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_darkSkyOpen__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            height: \"lg:h-full h-full md:h-1/2 w-full\",\n            darkTheme: darkTheme\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 118,\n            columnNumber: 7\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 117,\n          columnNumber: 6\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"absolute w-full h-full top-0 left-0\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].div, {\n            className: \"relative flex flex-row justify-center items-center h-full w-1/2 \",\n            style: {\n              scale: sogumaScale,\n              y: sogumaYoffset\n            },\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].div, {\n              className: \"relative flex items-center justify-center w-1/3 h-full pt-full\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"hr\", {\n                className: \"absolute top-0 border-2 border-black h-1/2\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 134,\n                columnNumber: 11\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"absolute left-0 w-full rounded-full border-black border-4 overflow-hidden bg-black\",\n                ref: imageRef,\n                onMouseMove: handleMouseMove,\n                onMouseLeave: handleMouseLeave,\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].img, {\n                  className: \"w-full object-fill\",\n                  src: \"/me/0.png\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 141,\n                  columnNumber: 12\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 135,\n                columnNumber: 11\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 131,\n              columnNumber: 9\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].div, {\n              className: \"relative flex items-center justify-center w-1/3 h-full\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].div, {\n                className: \"absolute top-2/3 h-1/5  w-full bg-yellow-500\",\n                children: \"hi there u fockers\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 149,\n                columnNumber: 10\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 145,\n              columnNumber: 9\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 123,\n            columnNumber: 7\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 120,\n          columnNumber: 6\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].div, {\n          className: \"absolute flex justify-center items-start md:h-100 lg:h-100 md:top-1/4 top-1/4 h-full lg:top-1/3 w-full z-20 pointer-events-none\",\n          style: onDisplay.displayState ? {\n            scale: sogumaScale,\n            y: sogumaYoffset\n          } : {\n            scale: 1,\n            y: 0\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_sogumaVx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            repos: repos,\n            dataLoading: true,\n            setOnDisplay: displayGim,\n            onDisplay: onDisplay,\n            darkTheme: darkTheme\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 168,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_sogumaVxPhone__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            repos: repos,\n            dataLoading: true,\n            setOnDisplay: displayGim,\n            onDisplay: onDisplay,\n            darkTheme: darkTheme\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 169,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 157,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_mainboard__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        id: \"board\",\n        onDisplay: onDisplay,\n        about: about,\n        repos: repos\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 172,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 4\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 99,\n    columnNumber: 3\n  }, this);\n}\n\n_s(Home, \"e3vQsWB+JxmY/qWxH7vSkOZbMog=\", false, function () {\n  return [framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useViewportScroll\"], framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useTransform\"]];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJyb3RhdGVCeU1vdXNlUG9zaXRpb24iLCJldmVudCIsInJlZiIsImN1cnJlbnRQb3NpIiwieCIsInBhZ2VYIiwieSIsInBhZ2VZIiwib2Zmc2V0IiwidG9wIiwibGVmdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInN0eWxlIiwidHJhbnNmb3JtIiwibWFwaW5nIiwid2lkdGgiLCJoZWlnaHQiLCJ2YWx1ZSIsImludGVydmFsMSIsImludGVydmFsMiIsIkhvbWUiLCJhYm91dCIsInJlcG9zIiwiZGF0YUxvYWRpbmciLCJkYXJrVGhlbWUiLCJjaGFuZ2VUaGVtZSIsInVzZVN0YXRlIiwiZGlzcGxheVN0YXRlIiwiZGlzcGxheU9mZiIsIml0ZW1JZCIsInR5cGUiLCJvbkRpc3BsYXkiLCJzZXRPbkRpc3BsYXkiLCJpbWFnZVJlZiIsInVzZVJlZiIsInVzZVZpZXdwb3J0U2Nyb2xsIiwic2Nyb2xsWVByb2dyZXNzIiwic29ndW1hU2NhbGUiLCJ1c2VUcmFuc2Zvcm0iLCJzb2d1bWFZb2Zmc2V0IiwidXNlRWZmZWN0IiwidGltZXIiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiZGlzcGxheUdpbSIsImNvbnNvbGUiLCJsb2ciLCJuZXdkaXNwbGF5T2ZmIiwiaGFuZGxlTW91c2VNb3ZlIiwiZSIsImN1cnJlbnQiLCJoYW5kbGVNb3VzZUxlYXZlIiwidGhlbWUiLCJkYXJrIiwiYmFja2dyb3VuZENvbG9yIiwic2NhbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxxQkFBVCxDQUErQkMsS0FBL0IsRUFBc0NDLEdBQXRDLEVBQTJDO0FBQzFDLE1BQU1DLFdBQVcsR0FBRztBQUNuQkMsS0FBQyxF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QUFDLDZEQUFEO0FBQVcsVUFBRSxFQUFDLE9BQWQ7QUFBc0IsaUJBQVMsRUFBRU8sU0FBakM7QUFBNEMsYUFBSyxFQUFFVixLQUFuRDtBQUEwRCxhQUFLLEVBQUVDO0FBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0ExREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBZ0ZBOztHQXpJdUJGLEk7VUFLS2UsZ0UsRUFDUkcsMkQsRUFDRUEsMkQ7OztLQVBDbEIsSSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERhcmtTa3lPcGVuIGZyb20gJy4uL2NvbXBvbmVudHMvZGFya1NreU9wZW4nXG5pbXBvcnQgU29ndW1hVnggZnJvbSAnLi4vY29tcG9uZW50cy9zb2d1bWFWeCdcbmltcG9ydCBTb2d1bWFWeFBob25lIGZyb20gJy4uL2NvbXBvbmVudHMvc29ndW1hVnhQaG9uZSdcbmltcG9ydCBEYXJrU2t5IGZyb20gJy4uL2NvbXBvbmVudHMvZGFya1NreSdcbmltcG9ydCBFeWVTd2l0Y2ggZnJvbSAnLi4vY29tcG9uZW50cy9leWVTd2l0Y2gnXG5pbXBvcnQgTWFpbkJvYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvbWFpbmJvYXJkJ1xuaW1wb3J0IEJvYXJkUGhvbmUgZnJvbSAnLi4vY29tcG9uZW50cy9ib2FyZFBob25lJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGdldExvY2FsUHJvamVjdERhdGEgZnJvbSAnLi4vY29tcG9uZW50cy91dGlsaXRpZXMvZ2V0TG9jYWxQcm9qZWN0RGF0YSdcblxuaW1wb3J0IFNjZW5lIGZyb20gJy4uL2NvbXBvbmVudHMvc2NlbmUnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1vdGlvbiwgdXNlVHJhbnNmb3JtLCB1c2VWaWV3cG9ydFNjcm9sbCwgdXNlTW90aW9uVmFsdWUgfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuLi9jb21wb25lbnRzL3RoZW1lJ1xuXG5mdW5jdGlvbiByb3RhdGVCeU1vdXNlUG9zaXRpb24oZXZlbnQsIHJlZikge1xuXHRjb25zdCBjdXJyZW50UG9zaSA9IHtcblx0XHR4IDogZXZlbnQucGFnZVggLFxuXHRcdHkgOiBldmVudC5wYWdlWSxcblx0fVxuXG5cdGxldCBvZmZzZXQgPSB7dG9wIDogMCwgbGVmdCA6IDB9XG5cdGlmIChyZWYgKXtcblx0XHRvZmZzZXQgPSByZWYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblx0XHRyZWYuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZVkoJHttYXBpbmcoY3VycmVudFBvc2kueCAtIG9mZnNldC5sZWZ0LCBbMCwgb2Zmc2V0LndpZHRoXSxbLTIwLCAyMF0pfWRlZylgXG5cdFx0cmVmLnN0eWxlLnRyYW5zZm9ybSArPSBgcm90YXRlWCgke21hcGluZyhjdXJyZW50UG9zaS55IC0gb2Zmc2V0LnRvcCwgWzAsIG9mZnNldC5oZWlnaHRdLFstMjAsIDIwXSl9ZGVnKWBcblx0fVxuXHQvLyBjb25zb2xlLmxvZyhtYXBpbmcoY3VycmVudFBvc2kueCAtIG9mZnNldC5sZWZ0LCBbMCwgb2Zmc2V0LndpZHRoXSxbLTQwLCA0MF0pKVxuXHQvLyByZWYuc3R5bGUudHJhbnNmb3JtICs9IGAgcm90YXRlWSgke21hcGluZyhjdXJyZW50UG9zaS55IC0gb2Zmc2V0LnRvcCwgWzAsIG9mZnNldC5oZWlnaHRdLFstNDAsIDQwXSl9ZGVnKWBcblx0Ly8gcmV0dXJuIHtcblx0Ly8gXHR4IDogY3VycmVudFBvc2kueCAtIG9mZnNldC5sZWZ0LFxuXHQvLyBcdHkgOiBjdXJyZW50UG9zaS55IC0gb2Zmc2V0LnRvcCxcblx0Ly8gXHQvLyB6YWJcblx0Ly8gfVxufVxuXG5mdW5jdGlvbiBtYXBpbmcodmFsdWUsIGludGVydmFsMSwgaW50ZXJ2YWwyKSB7XG5cdHJldHVybiAgKHZhbHVlICogKGludGVydmFsMlsxXSAtIGludGVydmFsMlswXSkgLyBpbnRlcnZhbDFbMV0pICsgaW50ZXJ2YWwyWzBdXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBhYm91dCwgcmVwb3MsIGRhdGFMb2FkaW5nLCBkYXJrVGhlbWUsIGNoYW5nZVRoZW1lfSkge1xuXHRjb25zdCBbb25EaXNwbGF5LCBzZXRPbkRpc3BsYXldID0gdXNlU3RhdGUoeyBkaXNwbGF5U3RhdGU6IHRydWUsIGRpc3BsYXlPZmYgOiBmYWxzZSwgaXRlbUlkOiAtMSwgdHlwZTogLTEgfSlcblx0Ly8gY29uc3QgW21vdXNlUG9zaXRpb24sIHNldE1vdXNlUG9zaXRpb25dID0gdXNlU3RhdGUoe30pO1xuXHQvLyBjb25zdCBbc2l6ZSwgc2V0U2l6ZV0gPSB1c2VTdGF0ZSh7aGVpZ2h0IDogMCwgd2lkdGggOiAwfSk7XG5cdGNvbnN0IGltYWdlUmVmID0gdXNlUmVmKClcblx0Y29uc3QgeyBzY3JvbGxZUHJvZ3Jlc3MgfSA9IHVzZVZpZXdwb3J0U2Nyb2xsKCk7XG5cdGNvbnN0IHNvZ3VtYVNjYWxlID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDAuMSwgMC40LCAxXSwgWzEsIDAuOSwgMC44LCAwLjFdKTtcblx0Y29uc3Qgc29ndW1hWW9mZnNldCA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAwLjEsIDAuNSwgMV0sIFswLCAtMTAsIC0xMDAsIC01MDBdKTtcblxuXG5cblx0Ly8gY29uc3QgclggPSBtYXBpbmcobW91c2VQb3NpdGlvbi54ICwgWzAgLCBzaXplLndpZHRoXSwgWzAsIDUwXSlcblx0Ly8gY29uc3QgclkgPSBtYXBpbmcobW91c2VQb3NpdGlvbi55LCBbMCAsIHNpemUuaGVpZ2h0XSwgWzAsIDUwXSlcblx0Ly8gZ2V0TG9jYWxQcm9qZWN0RGF0YShcIkZyYWN0b2xcIik7XG5cdC8vIGNvbnN0IFtbc29ndW1hLCBib2FyZF0sIHNldEVsZW1lbnRzXSA9IHVzZVN0YXRlKFtudWxsLG51bGxdKVxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdC8vIHNldEVsZW1lbnRzKFtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc29ndW1hJyksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2FyZCcpXSlcblx0XHQvLyBpZiAoaW1hZ2VSZWYgJiYgaW1hZ2VSZWYuY3VycmVudClcblx0XHQvLyB7XG5cdFx0Ly8gXHRjb25zb2xlLmxvZyhcInR5eXlwZSB4IFwiLCBpbWFnZVJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKVxuXHRcdC8vIFx0bGV0IHJlY3RTaXplID0gaW1hZ2VSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXHRcdC8vIFx0c2V0U2l6ZSh7IGhlaWdodCA6IHJlY3RTaXplLmhlaWdodCwgd2lkdGggOiByZWN0U2l6ZS53aWR0aH0pXG5cdFx0Ly8gfVxuXHRcdFx0bGV0IHRpbWVyO1xuXHRcdGlmICghb25EaXNwbGF5LmRpc3BsYXlTdGF0ZSAmJiBvbkRpc3BsYXkuZGlzcGxheU9mZilcblx0XHR7XG5cdFx0XHR0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRzZXRPbkRpc3BsYXkoeyAuLi5vbkRpc3BsYXksIGRpc3BsYXlPZmYgOiBmYWxzZSB9KTtcblx0XHRcdH0sIDMwMCkgXG5cdFx0fVxuXHRcdHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXIpO1xuXHR9LCBbb25EaXNwbGF5XSk7XG5cblx0Ly8gc2V0IGEgZ2ltIG9uIGRpc3BsYXkgbW9kZVxuXHRjb25zdCBkaXNwbGF5R2ltID0gKGRpc3BsYXlTdGF0ZSwgaXRlbUlkLCB0eXBlKSA9PiB7XG5cdFx0Ly8gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0Ly8gXHRsZXQgYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hcmQnKTtcblx0XHQvLyBcdGlmIChib2FyZCAmJiAob25EaXNwbGF5LmRpc3BsYXlTdGF0ZSAmJiBvbkRpc3BsYXkudHlwZSA9PT0gMikpXG5cdFx0Ly8gXHR7XG5cdFx0Ly8gXHRcdGJvYXJkLnNjcm9sbEludG9WaWV3KGZhbHNlKTtcblx0XHQvLyBcdFx0Y29uc29sZS5sb2coXCJmdW5jIGZpcmVkIFwiKVxuXHRcdC8vIFx0fVxuXHRcdC8vIFx0ZWxzZVxuXHRcdFx0XHRjb25zb2xlLmxvZyhcInNjcm9vb29vb29vb29vb29vb29vb2xsbDogTlVMTExMTCB0eXBlIDogXCIgKyB0eXBlICsgXCIgc3RhdGUgOiBcIisgZGlzcGxheVN0YXRlKVxuXG5cdFx0Ly8gfSwgMTAwKVxuXHRcdGNvbnNvbGUubG9nKFwiIHx8fCAgRElTUExBWSA6IFwiLCBkaXNwbGF5U3RhdGUgPyBcInRydWVcIiA6IFwiZmFsc2VcIiAsIFwiIHx8fCB0eXBlIDogXCIgKyB0eXBlIClcblx0XHRjb25zdCBuZXdkaXNwbGF5T2ZmID0gb25EaXNwbGF5LmRpc3BsYXlTdGF0ZSAmJiAhZGlzcGxheVN0YXRlID8gdHJ1ZSA6IGZhbHNlO1xuXHRcdHNldE9uRGlzcGxheSh7IC4uLm9uRGlzcGxheSwgZGlzcGxheVN0YXRlLCBkaXNwbGF5T2ZmIDogbmV3ZGlzcGxheU9mZiwgaXRlbUlkLCB0eXBlIH0pO1xuXHR9XG5cdFxuXHRjb25zdCBoYW5kbGVNb3VzZU1vdmUgPSBlID0+IHtcblx0XHRyb3RhdGVCeU1vdXNlUG9zaXRpb24oZSwgaW1hZ2VSZWYuY3VycmVudClcblx0ICB9O1xuXHRjb25zdCAgaGFuZGxlTW91c2VMZWF2ZSA9IGUgPT4ge1xuXHRcdGltYWdlUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKWBcblx0fVxuXHRyZXR1cm4gKFxuXHRcdDxtb3Rpb24uZGl2IGNsYXNzTmFtZT17YHJlbGF0aXZlIGZsZXggZmxleC1jb2wgdy1mdWxsIGgtYXV0byBvdmVyZmxvdy1oaWRkZW5gfT5cbnsvKiB7XHRcdGNvbnNvbGUubG9nKGRhdGFMb2FkaW5nID8gXCJub3QgZmV0Y2hlZCB5ZXRcIiA6IFwiYWJvdXQgOlwiICwgYWJvdXQsIFwicmVwb3MgOiBcIiwgcmVwb3MgKX0gKi99XG5cdFx0XHR7LyogPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB6LTUwIHRleHQtd2hpdGUgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciB0b3AtMTAwIGxlZnQtMS80XCIgPlxuXHRcdFx0XHQ8aDE+b25EaXNwbGF5IDoge29uRGlzcGxheS5kaXNwbGF5U3RhdGUgPyBcInRydWVcIiA6IFwiZmFsc2VcIn08L2gxPlxuXHRcdFx0XHQ8aDE+ZGlzcGxheU9mZiA6IHtvbkRpc3BsYXkuZGlzcGxheU9mZiA/IFwidHJ1ZVwiIDogXCJmYWxzZVwifTwvaDE+XG5cdFx0XHRcdDxoMT5pdGVtSWQgOiB7b25EaXNwbGF5Lml0ZW1JZH08L2gxPlxuXHRcdFx0XHQ8aDE+dHlwZSA6IHtvbkRpc3BsYXkudHlwZX08L2gxPlxuXHRcdFx0XHQ8aDE+WCA6IHttb3VzZVBvc2l0aW9uLnh9PC9oMT5cblx0XHRcdFx0PGgxPlkgOiB7bW91c2VQb3NpdGlvbi55fTwvaDE+XG5cdDxcdFx0XHRoMT50b3AgOiB7c2l6ZS50b3B9IHwgbGVmdCA6IHtzaXplLmxlZnR9PC9oMT5cblx0XHRcdFx0PExpbmsgaHJlZj1cIi9ob21lXCIgPjxhPm5vbmUgZXhpc3RpbmcgdXJsPC9hPjwvTGluaz5cblx0XHRcdDwvZGl2PiAqL31cblx0XHRcdHsvKiA8bmF2IGNsYXNzTmFtZT1cImZpeGVkIHotNTAgdG9wLTIwIHJpZ2h0LTggbGc6aC00MCBsZzp3LTI0IG1kOmgtMzIgbWQ6dy0yMCBoLTIwIHctMTZcIj5cblx0XHRcdFx0PEV5ZVN3aXRjaCBkYXJrVGhlbWU9e2RhcmtUaGVtZX0gY2hhbmdlVGhlbWU9e2NoYW5nZVRoZW1lfSBjb2xvcjI9XCJiZy1ncmVlbi01MDBcIiBjb2xvcjE9XCJiZy1ibHVlLTkwMFwiIC8+XG5cdFx0XHQ8L25hdj4gKi99XG5cdFx0XHQ8bW90aW9uLmRpdiBjbGFzc05hbWU9e2ByZWxhdGl2ZSBmbGV4IGZsZXgtY29sIGp1c3RpZnktc3RhcnQgbDpoLXNjcmVlbiAke29uRGlzcGxheS5kaXNwbGF5U3RhdGUgJiYgb25EaXNwbGF5LnR5cGUgIT09IC0xID8gXCJoLWF1dG9cIiA6IFwiaC1zY3JlZW5cIiB9IG0tMCBwLTAgIHctZnVsbCAke3RoZW1lLmRhcmsuYmFja2dyb3VuZENvbG9yfWB9XG5cdFx0XHQ+XG5cdFx0XHRcdDxtb3Rpb24uZGl2IGlkPVwic29ndW1hXCIgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbDpoLWZ1bGwgbWQ6aC1zY3JlZW4gaC04MCB3LWZ1bGxcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCBsZzpoLWZ1bGwgbWQ6aC1mdWxsIGgtZnVsbCB3LWZ1bGwgXCI+XG5cdFx0XHRcdFx0XHQ8RGFya1NreU9wZW4gaGVpZ2h0PVwibGc6aC1mdWxsIGgtZnVsbCBtZDpoLTEvMiB3LWZ1bGxcIiBkYXJrVGhlbWU9e2RhcmtUaGVtZX0gLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHctZnVsbCBoLWZ1bGwgdG9wLTAgbGVmdC0wXCIgXG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1mdWxsIHctMS8yIFwiXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRzY2FsZTogc29ndW1hU2NhbGUsXG5cdFx0XHRcdFx0XHRcdFx0XHR5OiBzb2d1bWFZb2Zmc2V0XG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0ey8qIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1mdWxsIHctNS82IGJnLXJlZC02MDBcIj4gKi99XG5cdFx0XHRcdFx0XHRcdFx0PG1vdGlvbi5kaXZcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctMS8zIGgtZnVsbCBwdC1mdWxsXCJcblx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGhyIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGJvcmRlci0yIGJvcmRlci1ibGFjayBoLTEvMlwiPjwvaHI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0wIHctZnVsbCByb3VuZGVkLWZ1bGwgYm9yZGVyLWJsYWNrIGJvcmRlci00IG92ZXJmbG93LWhpZGRlbiBiZy1ibGFja1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVmPXtpbWFnZVJlZn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbk1vdXNlTW92ZT17aGFuZGxlTW91c2VNb3ZlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uTW91c2VMZWF2ZT17aGFuZGxlTW91c2VMZWF2ZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PlxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG1vdGlvbi5pbWcgY2xhc3NOYW1lPVwidy1mdWxsIG9iamVjdC1maWxsXCIgc3JjPVwiL21lLzAucG5nXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PG1vdGlvbi5kaXZcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctMS8zIGgtZnVsbFwiXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsvKiA8aHIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgYm9yZGVyLTIgYm9yZGVyLWJsYWNrIGgtMi8zXCI+PC9ocj4gKi99XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMi8zIGgtMS81ICB3LWZ1bGwgYmcteWVsbG93LTUwMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhpIHRoZXJlIHUgZm9ja2Vyc1xuXHRcdFx0XHRcdFx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdFx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0XHRcdFx0ey8qIDwvZGl2PiAqL31cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLXN0YXJ0IG1kOmgtMTAwIGxnOmgtMTAwIG1kOnRvcC0xLzQgdG9wLTEvNCBoLWZ1bGwgbGc6dG9wLTEvMyB3LWZ1bGwgei0yMCBwb2ludGVyLWV2ZW50cy1ub25lXCJcblx0XHRcdFx0XHRcdHN0eWxlPXsgb25EaXNwbGF5LmRpc3BsYXlTdGF0ZSA/IFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0c2NhbGU6IHNvZ3VtYVNjYWxlLFxuXHRcdFx0XHRcdFx0XHRcdHk6IHNvZ3VtYVlvZmZzZXRcblx0XHRcdFx0XHRcdFx0fSA6IHtcblx0XHRcdFx0XHRcdFx0XHRzY2FsZSA6IDEsXG5cdFx0XHRcdFx0XHRcdFx0eSA6IDBcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxTb2d1bWFWeCByZXBvcz17cmVwb3N9IGRhdGFMb2FkaW5nIHNldE9uRGlzcGxheT17ZGlzcGxheUdpbX0gb25EaXNwbGF5PXtvbkRpc3BsYXl9IGRhcmtUaGVtZT17ZGFya1RoZW1lfSAvPlxuXHRcdFx0XHRcdFx0PFNvZ3VtYVZ4UGhvbmUgcmVwb3M9e3JlcG9zfSBkYXRhTG9hZGluZyBzZXRPbkRpc3BsYXk9e2Rpc3BsYXlHaW19IG9uRGlzcGxheT17b25EaXNwbGF5fSBkYXJrVGhlbWU9e2RhcmtUaGVtZX0gLz5cblx0XHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdFx0PE1haW5Cb2FyZCBpZD1cImJvYXJkXCIgb25EaXNwbGF5PXtvbkRpc3BsYXl9IGFib3V0PXthYm91dH0gcmVwb3M9e3JlcG9zfSAvPlxuXHRcdFx0XHR7LyogPEJvYXJkUGhvbmUgb25EaXNwbGF5PXtvbkRpc3BsYXl9IGFib3V0PXthYm91dH0gcmVwb3M9e3JlcG9zfSAvPiAqL31cblx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdCB7Lyoge29uRGlzcGxheS5kaXNwbGF5U3RhdGUgJiYgPENhcmQgb25EaXNwbGF5PXtvbkRpc3BsYXl9IGRhcmtUaGVtZT17ZGFya1RoZW1lfSBkaXNwbGF5R2ltPXtkaXNwbGF5R2ltfSAvPn0gKi99XG5cdFx0PC9tb3Rpb24uZGl2PlxuXHQpXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcblxuXHRjb25zdCByZXMxID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvSmFrZWVEZXN1Jyk7XG5cdGNvbnN0IHJlczIgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9KYWtlZURlc3UvcmVwb3MnKTtcblx0XG5cdGNvbnN0IGFib3V0ID0gYXdhaXQgcmVzMS5qc29uKCk7XG5cdGNvbnN0IHJlcG9zID0gYXdhaXQgcmVzMi5qc29uKCk7XG5cdC8vIGNvbnNvbGUubG9nKCBicnV0RGF0YSApXG5cdC8vIGNvbnN0IGxvYWRpbmcgPSBicnV0RGF0YSA/IHRydWUgOiBmYWxzZTtcblx0Ly8gaWYgKGZldGNoZWREYXRhKVxuXHQvLyB7XG5cblx0Ly8gfVxuXHRjb25zdCBkYXRhTG9hZGluZyA9IChhYm91dCAmJiByZXBvcykgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBmYWxzZTsgXG5cdFxuXHRyZXR1cm4ge1xuXHRcdHByb3BzIDogeyBhYm91dCwgcmVwb3MsIGRhdGFMb2FkaW5nICB9XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})