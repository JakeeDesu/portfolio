webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _components_darkSkyOpen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/darkSkyOpen */ \"./components/darkSkyOpen.js\");\n/* harmony import */ var _components_sogumaVx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/sogumaVx */ \"./components/sogumaVx.tsx\");\n/* harmony import */ var _components_sogumaVxPhone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/sogumaVxPhone */ \"./components/sogumaVxPhone.tsx\");\n/* harmony import */ var _components_darkSky__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/darkSky */ \"./components/darkSky.js\");\n/* harmony import */ var _components_eyeSwitch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/eyeSwitch */ \"./components/eyeSwitch.js\");\n/* harmony import */ var _components_mainboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/mainboard */ \"./components/mainboard.js\");\n/* harmony import */ var _components_boardPhone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/boardPhone */ \"./components/boardPhone.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_utilities_getLocalProjectData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/utilities/getLocalProjectData */ \"./components/utilities/getLocalProjectData.js\");\n/* harmony import */ var _components_scene__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/scene */ \"./components/scene.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _components_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/theme */ \"./components/theme.js\");\n\n\n\nvar _jsxFileName = \"/home/hamza/Desktop/portfolio/pages/index.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction rotateByMousePosition(event, ref) {\n  var currentPosi = {\n    x: event.pageX,\n    y: event.pageY\n  };\n  var offset = {\n    top: 0,\n    left: 0\n  };\n\n  if (ref) {\n    offset = ref.getBoundingClientRect();\n    ref.style.transform = \"rotateY(\".concat(maping(currentPosi.x - offset.left, [0, offset.width], [-20, 20]), \"deg)\");\n    ref.style.transform += \"rotateX(\".concat(maping(currentPosi.y - offset.top, [0, offset.height], [-20, 20]), \"deg)\");\n  } // console.log(maping(currentPosi.x - offset.left, [0, offset.width],[-40, 40]))\n  // ref.style.transform += ` rotateY(${maping(currentPosi.y - offset.top, [0, offset.height],[-40, 40])}deg)`\n  // return {\n  // \tx : currentPosi.x - offset.left,\n  // \ty : currentPosi.y - offset.top,\n  // \t// zab\n  // }\n\n}\n\nfunction maping(value, interval1, interval2) {\n  return value * (interval2[1] - interval2[0]) / interval1[1] + interval2[0];\n}\n\nvar __N_SSG = true;\nfunction Home(_ref) {\n  _s();\n\n  var about = _ref.about,\n      repos = _ref.repos,\n      dataLoading = _ref.dataLoading,\n      darkTheme = _ref.darkTheme,\n      changeTheme = _ref.changeTheme;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_12__[\"useState\"])({\n    displayState: true,\n    displayOff: false,\n    itemId: -1,\n    type: -1\n  }),\n      onDisplay = _useState[0],\n      setOnDisplay = _useState[1]; // const [mousePosition, setMousePosition] = useState({});\n  // const [size, setSize] = useState({height : 0, width : 0});\n\n\n  var imageRef = Object(react__WEBPACK_IMPORTED_MODULE_12__[\"useRef\"])();\n\n  var _useViewportScroll = Object(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useViewportScroll\"])(),\n      scrollYProgress = _useViewportScroll.scrollYProgress;\n\n  var sogumaScale = Object(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useTransform\"])(scrollYProgress, [0, 0.1, 0.4, 1], [1, 0.9, 0.8, 0.1]);\n  var sogumaYoffset = Object(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useTransform\"])(scrollYProgress, [0, 0.1, 0.5, 1], [0, -10, -100, -500]); // const rX = maping(mousePosition.x , [0 , size.width], [0, 50])\n  // const rY = maping(mousePosition.y, [0 , size.height], [0, 50])\n  // getLocalProjectData(\"Fractol\");\n  // const [[soguma, board], setElements] = useState([null,null])\n\n  Object(react__WEBPACK_IMPORTED_MODULE_12__[\"useEffect\"])(function () {\n    // setElements([document.getElementById('soguma'), document.getElementById('board')])\n    // if (imageRef && imageRef.current)\n    // {\n    // \tconsole.log(\"tyyype x \", imageRef.current.getBoundingClientRect())\n    // \tlet rectSize = imageRef.current.getBoundingClientRect()\n    // \tsetSize({ height : rectSize.height, width : rectSize.width})\n    // }\n    var timer;\n\n    if (!onDisplay.displayState && onDisplay.displayOff) {\n      timer = setTimeout(function () {\n        setOnDisplay(_objectSpread(_objectSpread({}, onDisplay), {}, {\n          displayOff: false\n        }));\n      }, 300);\n    }\n\n    return function () {\n      return clearTimeout(timer);\n    };\n  }, [onDisplay]); // set a gim on display mode\n\n  var displayGim = function displayGim(displayState, itemId, type) {\n    // setTimeout(() => {\n    // \tlet board = document.getElementById('board');\n    // \tif (board && (onDisplay.displayState && onDisplay.type === 2))\n    // \t{\n    // \t\tboard.scrollIntoView(false);\n    // \t\tconsole.log(\"func fired \")\n    // \t}\n    // \telse\n    console.log(\"scroooooooooooooooooolll: NULLLLL type : \" + type + \" state : \" + displayState); // }, 100)\n\n    console.log(\" |||  DISPLAY : \", displayState ? \"true\" : \"false\", \" ||| type : \" + type);\n    var newdisplayOff = onDisplay.displayState && !displayState ? true : false;\n    setOnDisplay(_objectSpread(_objectSpread({}, onDisplay), {}, {\n      displayState: displayState,\n      displayOff: newdisplayOff,\n      itemId: itemId,\n      type: type\n    }));\n  };\n\n  var handleMouseMove = function handleMouseMove(e) {\n    rotateByMousePosition(e, imageRef.current);\n  };\n\n  var handleMouseLeave = function handleMouseLeave(e) {\n    imageRef.current.style.transform = \"rotateX(0deg) rotateY(0deg)\";\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].div, {\n    className: \"relative flex flex-col w-full h-auto overflow-hidden\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].div, {\n      className: \"relative flex flex-col justify-start l:h-screen \".concat(onDisplay.displayState && onDisplay.type !== -1 ? \"h-auto\" : \"h-screen\", \" m-0 p-0  w-full \").concat(_components_theme__WEBPACK_IMPORTED_MODULE_14__[\"theme\"].dark.backgroundColor),\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].div, {\n        id: \"soguma\",\n        className: \"relative flex justify-center items-center l:h-full md:h-screen h-80 w-full\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"absolute top-0 left-0 lg:h-full md:h-full h-full w-full \",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_darkSkyOpen__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            height: \"lg:h-full h-full md:h-1/2 w-full\",\n            darkTheme: darkTheme\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 118,\n            columnNumber: 7\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 117,\n          columnNumber: 6\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"absolute w-full h-full top-0 left-0\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].div, {\n            className: \"relative flex flex-row justify-center items-center h-full w-1/2 \",\n            style: {\n              scale: sogumaScale,\n              y: sogumaYoffset\n            },\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].div, {\n              className: \"relative flex items-center justify-center w-1/3 h-full pt-full\",\n              ref: imageRef,\n              onMouseMove: handleMouseMove,\n              onMouseLeave: handleMouseLeave,\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"hr\", {\n                className: \"absolute top-0 border-2 border-black h-1/2\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 137,\n                columnNumber: 11\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"absolute left-0 w-full rounded-full border-black border-4 overflow-hidden bg-black\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].img, {\n                  className: \"w-full object-fill\",\n                  src: \"/me/0.png\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 141,\n                  columnNumber: 12\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 138,\n                columnNumber: 11\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 131,\n              columnNumber: 9\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].div, {\n              className: \"relative flex items-center justify-center w-1/3 h-full\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].div, {\n                className: \"absolute top-2/3 h-1/5  w-full bg-yellow-500\",\n                children: \"hi there u fockers\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 149,\n                columnNumber: 10\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 145,\n              columnNumber: 9\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 123,\n            columnNumber: 7\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 120,\n          columnNumber: 6\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].div, {\n          className: \"absolute flex justify-center items-start md:h-100 lg:h-100 md:top-1/4 top-1/4 h-full lg:top-1/3 w-full z-20 pointer-events-none\",\n          style: onDisplay.displayState ? {\n            scale: sogumaScale,\n            y: sogumaYoffset\n          } : {\n            scale: 1,\n            y: 0\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_sogumaVx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            repos: repos,\n            dataLoading: true,\n            setOnDisplay: displayGim,\n            onDisplay: onDisplay,\n            darkTheme: darkTheme\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 168,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_sogumaVxPhone__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            repos: repos,\n            dataLoading: true,\n            setOnDisplay: displayGim,\n            onDisplay: onDisplay,\n            darkTheme: darkTheme\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 169,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 157,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_mainboard__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        id: \"board\",\n        onDisplay: onDisplay,\n        about: about,\n        repos: repos\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 172,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 114,\n      columnNumber: 4\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 99,\n    columnNumber: 3\n  }, this);\n}\n\n_s(Home, \"e3vQsWB+JxmY/qWxH7vSkOZbMog=\", false, function () {\n  return [framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useViewportScroll\"], framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useTransform\"]];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJyb3RhdGVCeU1vdXNlUG9zaXRpb24iLCJldmVudCIsInJlZiIsImN1cnJlbnRQb3NpIiwieCIsInBhZ2VYIiwieSIsInBhZ2VZIiwib2Zmc2V0IiwidG9wIiwibGVmdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInN0eWxlIiwidHJhbnNmb3JtIiwibWFwaW5nIiwid2lkdGgiLCJoZWlnaHQiLCJ2YWx1ZSIsImludGVydmFsMSIsImludGVydmFsMiIsIkhvbWUiLCJhYm91dCIsInJlcG9zIiwiZGF0YUxvYWRpbmciLCJkYXJrVGhlbWUiLCJjaGFuZ2VUaGVtZSIsInVzZVN0YXRlIiwiZGlzcGxheVN0YXRlIiwiZGlzcGxheU9mZiIsIml0ZW1JZCIsInR5cGUiLCJvbkRpc3BsYXkiLCJzZXRPbkRpc3BsYXkiLCJpbWFnZVJlZiIsInVzZVJlZiIsInVzZVZpZXdwb3J0U2Nyb2xsIiwic2Nyb2xsWVByb2dyZXNzIiwic29ndW1hU2NhbGUiLCJ1c2VUcmFuc2Zvcm0iLCJzb2d1bWFZb2Zmc2V0IiwidXNlRWZmZWN0IiwidGltZXIiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiZGlzcGxheUdpbSIsImNvbnNvbGUiLCJsb2ciLCJuZXdkaXNwbGF5T2ZmIiwiaGFuZGxlTW91c2VNb3ZlIiwiZSIsImN1cnJlbnQiLCJoYW5kbGVNb3VzZUxlYXZlIiwidGhlbWUiLCJkYXJrIiwiYmFja2dyb3VuZENvbG9yIiwic2NhbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxxQkFBVCxDQUErQkMsS0FBL0IsRUFBc0NDLEdBQXRDLEVBQTJDO0FBQzFDLE1BQU1DLFdBQVcsR0FBRztBQUNuQkMsS0FBQyxFQUFHSCxLQUFLLENBQUNJLEtBRFM7QUFFbkJDLEtBQUMsRUFBR0wsS0FBSyxDQUFDTTtBQUZTLEdBQXBCO0FBS0EsTUFBSUMsTUFBTSxHQUFHO0FBQUNDLE9BQUcsRUFBRyxDQUFQO0FBQVVDLFFBQUksRUFBRztBQUFqQixHQUFiOztBQUNBLE1BQUlSLEdBQUosRUFBUztBQUNSTSxVQUFNLEdBQUdOLEdBQUcsQ0FBQ1MscUJBQUosRUFBVDtBQUNBVCxPQUFHLENBQUNVLEtBQUosQ0FBVUMsU0FBVixxQkFBaUNDLE1BQU0sQ0FBQ1gsV0FBVyxDQUFDQyxDQUFaLEdBQWdCSSxNQUFNLENBQUNFLElBQXhCLEVBQThCLENBQUMsQ0FBRCxFQUFJRixNQUFNLENBQUNPLEtBQVgsQ0FBOUIsRUFBZ0QsQ0FBQyxDQUFDLEVBQUYsRUFBTSxFQUFOLENBQWhELENBQXZDO0FBQ0FiLE9BQUcsQ0FBQ1UsS0FBSixDQUFVQyxTQUFWLHNCQUFrQ0MsTUFBTSxDQUFDWCxXQUFXLENBQUNHLENBQVosR0FBZ0JFLE1BQU0sQ0FBQ0MsR0FBeEIsRUFBNkIsQ0FBQyxDQUFELEVBQUlELE1BQU0sQ0FBQ1EsTUFBWCxDQUE3QixFQUFnRCxDQUFDLENBQUMsRUFBRixFQUFNLEVBQU4sQ0FBaEQsQ0FBeEM7QUFDQSxHQVh5QyxDQVkxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTs7QUFFRCxTQUFTRixNQUFULENBQWdCRyxLQUFoQixFQUF1QkMsU0FBdkIsRUFBa0NDLFNBQWxDLEVBQTZDO0FBQzVDLFNBQVNGLEtBQUssSUFBSUUsU0FBUyxDQUFDLENBQUQsQ0FBVCxHQUFlQSxTQUFTLENBQUMsQ0FBRCxDQUE1QixDQUFMLEdBQXdDRCxTQUFTLENBQUMsQ0FBRCxDQUFsRCxHQUF5REMsU0FBUyxDQUFDLENBQUQsQ0FBMUU7QUFDQTs7O0FBRWMsU0FBU0MsSUFBVCxPQUFvRTtBQUFBOztBQUFBLE1BQXBEQyxLQUFvRCxRQUFwREEsS0FBb0Q7QUFBQSxNQUE3Q0MsS0FBNkMsUUFBN0NBLEtBQTZDO0FBQUEsTUFBdENDLFdBQXNDLFFBQXRDQSxXQUFzQztBQUFBLE1BQXpCQyxTQUF5QixRQUF6QkEsU0FBeUI7QUFBQSxNQUFkQyxXQUFjLFFBQWRBLFdBQWM7O0FBQUEsa0JBQ2hEQyx1REFBUSxDQUFDO0FBQUVDLGdCQUFZLEVBQUUsSUFBaEI7QUFBc0JDLGNBQVUsRUFBRyxLQUFuQztBQUEwQ0MsVUFBTSxFQUFFLENBQUMsQ0FBbkQ7QUFBc0RDLFFBQUksRUFBRSxDQUFDO0FBQTdELEdBQUQsQ0FEd0M7QUFBQSxNQUMzRUMsU0FEMkU7QUFBQSxNQUNoRUMsWUFEZ0UsaUJBRWxGO0FBQ0E7OztBQUNBLE1BQU1DLFFBQVEsR0FBR0MscURBQU0sRUFBdkI7O0FBSmtGLDJCQUt0REMsd0VBQWlCLEVBTHFDO0FBQUEsTUFLMUVDLGVBTDBFLHNCQUsxRUEsZUFMMEU7O0FBTWxGLE1BQU1DLFdBQVcsR0FBR0MsbUVBQVksQ0FBQ0YsZUFBRCxFQUFrQixDQUFDLENBQUQsRUFBSSxHQUFKLEVBQVMsR0FBVCxFQUFjLENBQWQsQ0FBbEIsRUFBb0MsQ0FBQyxDQUFELEVBQUksR0FBSixFQUFTLEdBQVQsRUFBYyxHQUFkLENBQXBDLENBQWhDO0FBQ0EsTUFBTUcsYUFBYSxHQUFHRCxtRUFBWSxDQUFDRixlQUFELEVBQWtCLENBQUMsQ0FBRCxFQUFJLEdBQUosRUFBUyxHQUFULEVBQWMsQ0FBZCxDQUFsQixFQUFvQyxDQUFDLENBQUQsRUFBSSxDQUFDLEVBQUwsRUFBUyxDQUFDLEdBQVYsRUFBZSxDQUFDLEdBQWhCLENBQXBDLENBQWxDLENBUGtGLENBV2xGO0FBQ0E7QUFDQTtBQUNBOztBQUNBSSwwREFBUyxDQUFDLFlBQU07QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNDLFFBQUlDLEtBQUo7O0FBQ0QsUUFBSSxDQUFDVixTQUFTLENBQUNKLFlBQVgsSUFBMkJJLFNBQVMsQ0FBQ0gsVUFBekMsRUFDQTtBQUNDYSxXQUFLLEdBQUdDLFVBQVUsQ0FBQyxZQUFNO0FBQ3hCVixvQkFBWSxpQ0FBTUQsU0FBTjtBQUFpQkgsb0JBQVUsRUFBRztBQUE5QixXQUFaO0FBQ0EsT0FGaUIsRUFFZixHQUZlLENBQWxCO0FBR0E7O0FBQ0QsV0FBTztBQUFBLGFBQU1lLFlBQVksQ0FBQ0YsS0FBRCxDQUFsQjtBQUFBLEtBQVA7QUFDQSxHQWhCUSxFQWdCTixDQUFDVixTQUFELENBaEJNLENBQVQsQ0Fma0YsQ0FpQ2xGOztBQUNBLE1BQU1hLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNqQixZQUFELEVBQWVFLE1BQWYsRUFBdUJDLElBQXZCLEVBQWdDO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRWUsV0FBTyxDQUFDQyxHQUFSLENBQVksOENBQThDaEIsSUFBOUMsR0FBcUQsV0FBckQsR0FBa0VILFlBQTlFLEVBVGdELENBV2xEOztBQUNBa0IsV0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVosRUFBZ0NuQixZQUFZLEdBQUcsTUFBSCxHQUFZLE9BQXhELEVBQWtFLGlCQUFpQkcsSUFBbkY7QUFDQSxRQUFNaUIsYUFBYSxHQUFHaEIsU0FBUyxDQUFDSixZQUFWLElBQTBCLENBQUNBLFlBQTNCLEdBQTBDLElBQTFDLEdBQWlELEtBQXZFO0FBQ0FLLGdCQUFZLGlDQUFNRCxTQUFOO0FBQWlCSixrQkFBWSxFQUFaQSxZQUFqQjtBQUErQkMsZ0JBQVUsRUFBR21CLGFBQTVDO0FBQTJEbEIsWUFBTSxFQUFOQSxNQUEzRDtBQUFtRUMsVUFBSSxFQUFKQTtBQUFuRSxPQUFaO0FBQ0EsR0FmRDs7QUFpQkEsTUFBTWtCLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQUMsQ0FBQyxFQUFJO0FBQzVCakQseUJBQXFCLENBQUNpRCxDQUFELEVBQUloQixRQUFRLENBQUNpQixPQUFiLENBQXJCO0FBQ0UsR0FGSDs7QUFHQSxNQUFPQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUFGLENBQUMsRUFBSTtBQUM5QmhCLFlBQVEsQ0FBQ2lCLE9BQVQsQ0FBaUJ0QyxLQUFqQixDQUF1QkMsU0FBdkI7QUFDQSxHQUZEOztBQUdBLHNCQUNDLHFFQUFDLHFEQUFELENBQVEsR0FBUjtBQUFZLGFBQVMsd0RBQXJCO0FBQUEsMkJBZUMscUVBQUMscURBQUQsQ0FBUSxHQUFSO0FBQVksZUFBUyw0REFBcURrQixTQUFTLENBQUNKLFlBQVYsSUFBMEJJLFNBQVMsQ0FBQ0QsSUFBVixLQUFtQixDQUFDLENBQTlDLEdBQWtELFFBQWxELEdBQTZELFVBQWxILDhCQUFpSnNCLHdEQUFLLENBQUNDLElBQU4sQ0FBV0MsZUFBNUosQ0FBckI7QUFBQSw4QkFFQyxxRUFBQyxxREFBRCxDQUFRLEdBQVI7QUFBWSxVQUFFLEVBQUMsUUFBZjtBQUF3QixpQkFBUyxFQUFDLDRFQUFsQztBQUFBLGdDQUNDO0FBQUssbUJBQVMsRUFBQywwREFBZjtBQUFBLGlDQUNDLHFFQUFDLCtEQUFEO0FBQWEsa0JBQU0sRUFBQyxrQ0FBcEI7QUFBdUQscUJBQVMsRUFBRTlCO0FBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURELGVBSUM7QUFBSyxtQkFBUyxFQUFDLHFDQUFmO0FBQUEsaUNBR0MscUVBQUMscURBQUQsQ0FBUSxHQUFSO0FBQVkscUJBQVMsRUFBQyxrRUFBdEI7QUFDQyxpQkFBSyxFQUFFO0FBQ0wrQixtQkFBSyxFQUFFbEIsV0FERjtBQUVML0IsZUFBQyxFQUFFaUM7QUFGRSxhQURSO0FBQUEsb0NBUUUscUVBQUMscURBQUQsQ0FBUSxHQUFSO0FBQ0MsdUJBQVMsRUFBQyxnRUFEWDtBQUVFLGlCQUFHLEVBQUVOLFFBRlA7QUFHRSx5QkFBVyxFQUFFZSxlQUhmO0FBSUUsMEJBQVksRUFBRUcsZ0JBSmhCO0FBQUEsc0NBTUU7QUFBSSx5QkFBUyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFORixlQU9FO0FBQUsseUJBQVMsRUFBQyxvRkFBZjtBQUFBLHVDQUdDLHFFQUFDLHFEQUFELENBQVEsR0FBUjtBQUFZLDJCQUFTLEVBQUMsb0JBQXRCO0FBQTJDLHFCQUFHLEVBQUM7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVJGLGVBc0JFLHFFQUFDLHFEQUFELENBQVEsR0FBUjtBQUNDLHVCQUFTLEVBQUMsd0RBRFg7QUFBQSxxQ0FJQyxxRUFBQyxxREFBRCxDQUFRLEdBQVI7QUFBWSx5QkFBUyxFQUFDLDhDQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkQsZUF5Q0MscUVBQUMscURBQUQsQ0FBUSxHQUFSO0FBQVksbUJBQVMsRUFBQyxpSUFBdEI7QUFDQyxlQUFLLEVBQUdwQixTQUFTLENBQUNKLFlBQVYsR0FDUDtBQUNDNEIsaUJBQUssRUFBRWxCLFdBRFI7QUFFQy9CLGFBQUMsRUFBRWlDO0FBRkosV0FETyxHQUlIO0FBQ0hnQixpQkFBSyxFQUFHLENBREw7QUFFSGpELGFBQUMsRUFBRztBQUZELFdBTE47QUFBQSxrQ0FXQyxxRUFBQyw0REFBRDtBQUFVLGlCQUFLLEVBQUVnQixLQUFqQjtBQUF3Qix1QkFBVyxNQUFuQztBQUFvQyx3QkFBWSxFQUFFc0IsVUFBbEQ7QUFBOEQscUJBQVMsRUFBRWIsU0FBekU7QUFBb0YscUJBQVMsRUFBRVA7QUFBL0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFYRCxlQVlDLHFFQUFDLGlFQUFEO0FBQWUsaUJBQUssRUFBRUYsS0FBdEI7QUFBNkIsdUJBQVcsTUFBeEM7QUFBeUMsd0JBQVksRUFBRXNCLFVBQXZEO0FBQW1FLHFCQUFTLEVBQUViLFNBQTlFO0FBQXlGLHFCQUFTLEVBQUVQO0FBQXBHO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBWkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXpDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRCxlQTBEQyxxRUFBQyw2REFBRDtBQUFXLFVBQUUsRUFBQyxPQUFkO0FBQXNCLGlCQUFTLEVBQUVPLFNBQWpDO0FBQTRDLGFBQUssRUFBRVYsS0FBbkQ7QUFBMEQsYUFBSyxFQUFFQztBQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBMUREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQWdGQTs7R0F6SXVCRixJO1VBS0tlLGdFLEVBQ1JHLDJELEVBQ0VBLDJEOzs7S0FQQ2xCLEkiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEYXJrU2t5T3BlbiBmcm9tICcuLi9jb21wb25lbnRzL2RhcmtTa3lPcGVuJ1xuaW1wb3J0IFNvZ3VtYVZ4IGZyb20gJy4uL2NvbXBvbmVudHMvc29ndW1hVngnXG5pbXBvcnQgU29ndW1hVnhQaG9uZSBmcm9tICcuLi9jb21wb25lbnRzL3NvZ3VtYVZ4UGhvbmUnXG5pbXBvcnQgRGFya1NreSBmcm9tICcuLi9jb21wb25lbnRzL2RhcmtTa3knXG5pbXBvcnQgRXllU3dpdGNoIGZyb20gJy4uL2NvbXBvbmVudHMvZXllU3dpdGNoJ1xuaW1wb3J0IE1haW5Cb2FyZCBmcm9tICcuLi9jb21wb25lbnRzL21haW5ib2FyZCdcbmltcG9ydCBCb2FyZFBob25lIGZyb20gJy4uL2NvbXBvbmVudHMvYm9hcmRQaG9uZSdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBnZXRMb2NhbFByb2plY3REYXRhIGZyb20gJy4uL2NvbXBvbmVudHMvdXRpbGl0aWVzL2dldExvY2FsUHJvamVjdERhdGEnXG5cbmltcG9ydCBTY2VuZSBmcm9tICcuLi9jb21wb25lbnRzL3NjZW5lJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtb3Rpb24sIHVzZVRyYW5zZm9ybSwgdXNlVmlld3BvcnRTY3JvbGwsIHVzZU1vdGlvblZhbHVlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi4vY29tcG9uZW50cy90aGVtZSdcblxuZnVuY3Rpb24gcm90YXRlQnlNb3VzZVBvc2l0aW9uKGV2ZW50LCByZWYpIHtcblx0Y29uc3QgY3VycmVudFBvc2kgPSB7XG5cdFx0eCA6IGV2ZW50LnBhZ2VYICxcblx0XHR5IDogZXZlbnQucGFnZVksXG5cdH1cblxuXHRsZXQgb2Zmc2V0ID0ge3RvcCA6IDAsIGxlZnQgOiAwfVxuXHRpZiAocmVmICl7XG5cdFx0b2Zmc2V0ID0gcmVmLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cdFx0cmVmLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGVZKCR7bWFwaW5nKGN1cnJlbnRQb3NpLnggLSBvZmZzZXQubGVmdCwgWzAsIG9mZnNldC53aWR0aF0sWy0yMCwgMjBdKX1kZWcpYFxuXHRcdHJlZi5zdHlsZS50cmFuc2Zvcm0gKz0gYHJvdGF0ZVgoJHttYXBpbmcoY3VycmVudFBvc2kueSAtIG9mZnNldC50b3AsIFswLCBvZmZzZXQuaGVpZ2h0XSxbLTIwLCAyMF0pfWRlZylgXG5cdH1cblx0Ly8gY29uc29sZS5sb2cobWFwaW5nKGN1cnJlbnRQb3NpLnggLSBvZmZzZXQubGVmdCwgWzAsIG9mZnNldC53aWR0aF0sWy00MCwgNDBdKSlcblx0Ly8gcmVmLnN0eWxlLnRyYW5zZm9ybSArPSBgIHJvdGF0ZVkoJHttYXBpbmcoY3VycmVudFBvc2kueSAtIG9mZnNldC50b3AsIFswLCBvZmZzZXQuaGVpZ2h0XSxbLTQwLCA0MF0pfWRlZylgXG5cdC8vIHJldHVybiB7XG5cdC8vIFx0eCA6IGN1cnJlbnRQb3NpLnggLSBvZmZzZXQubGVmdCxcblx0Ly8gXHR5IDogY3VycmVudFBvc2kueSAtIG9mZnNldC50b3AsXG5cdC8vIFx0Ly8gemFiXG5cdC8vIH1cbn1cblxuZnVuY3Rpb24gbWFwaW5nKHZhbHVlLCBpbnRlcnZhbDEsIGludGVydmFsMikge1xuXHRyZXR1cm4gICh2YWx1ZSAqIChpbnRlcnZhbDJbMV0gLSBpbnRlcnZhbDJbMF0pIC8gaW50ZXJ2YWwxWzFdKSArIGludGVydmFsMlswXVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgYWJvdXQsIHJlcG9zLCBkYXRhTG9hZGluZywgZGFya1RoZW1lLCBjaGFuZ2VUaGVtZX0pIHtcblx0Y29uc3QgW29uRGlzcGxheSwgc2V0T25EaXNwbGF5XSA9IHVzZVN0YXRlKHsgZGlzcGxheVN0YXRlOiB0cnVlLCBkaXNwbGF5T2ZmIDogZmFsc2UsIGl0ZW1JZDogLTEsIHR5cGU6IC0xIH0pXG5cdC8vIGNvbnN0IFttb3VzZVBvc2l0aW9uLCBzZXRNb3VzZVBvc2l0aW9uXSA9IHVzZVN0YXRlKHt9KTtcblx0Ly8gY29uc3QgW3NpemUsIHNldFNpemVdID0gdXNlU3RhdGUoe2hlaWdodCA6IDAsIHdpZHRoIDogMH0pO1xuXHRjb25zdCBpbWFnZVJlZiA9IHVzZVJlZigpXG5cdGNvbnN0IHsgc2Nyb2xsWVByb2dyZXNzIH0gPSB1c2VWaWV3cG9ydFNjcm9sbCgpO1xuXHRjb25zdCBzb2d1bWFTY2FsZSA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAwLjEsIDAuNCwgMV0sIFsxLCAwLjksIDAuOCwgMC4xXSk7XG5cdGNvbnN0IHNvZ3VtYVlvZmZzZXQgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMC4xLCAwLjUsIDFdLCBbMCwgLTEwLCAtMTAwLCAtNTAwXSk7XG5cblxuXG5cdC8vIGNvbnN0IHJYID0gbWFwaW5nKG1vdXNlUG9zaXRpb24ueCAsIFswICwgc2l6ZS53aWR0aF0sIFswLCA1MF0pXG5cdC8vIGNvbnN0IHJZID0gbWFwaW5nKG1vdXNlUG9zaXRpb24ueSwgWzAgLCBzaXplLmhlaWdodF0sIFswLCA1MF0pXG5cdC8vIGdldExvY2FsUHJvamVjdERhdGEoXCJGcmFjdG9sXCIpO1xuXHQvLyBjb25zdCBbW3NvZ3VtYSwgYm9hcmRdLCBzZXRFbGVtZW50c10gPSB1c2VTdGF0ZShbbnVsbCxudWxsXSlcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHQvLyBzZXRFbGVtZW50cyhbZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NvZ3VtYScpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hcmQnKV0pXG5cdFx0Ly8gaWYgKGltYWdlUmVmICYmIGltYWdlUmVmLmN1cnJlbnQpXG5cdFx0Ly8ge1xuXHRcdC8vIFx0Y29uc29sZS5sb2coXCJ0eXl5cGUgeCBcIiwgaW1hZ2VSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSlcblx0XHQvLyBcdGxldCByZWN0U2l6ZSA9IGltYWdlUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClcblx0XHQvLyBcdHNldFNpemUoeyBoZWlnaHQgOiByZWN0U2l6ZS5oZWlnaHQsIHdpZHRoIDogcmVjdFNpemUud2lkdGh9KVxuXHRcdC8vIH1cblx0XHRcdGxldCB0aW1lcjtcblx0XHRpZiAoIW9uRGlzcGxheS5kaXNwbGF5U3RhdGUgJiYgb25EaXNwbGF5LmRpc3BsYXlPZmYpXG5cdFx0e1xuXHRcdFx0dGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0c2V0T25EaXNwbGF5KHsgLi4ub25EaXNwbGF5LCBkaXNwbGF5T2ZmIDogZmFsc2UgfSk7XG5cdFx0XHR9LCAzMDApIFxuXHRcdH1cblx0XHRyZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKTtcblx0fSwgW29uRGlzcGxheV0pO1xuXG5cdC8vIHNldCBhIGdpbSBvbiBkaXNwbGF5IG1vZGVcblx0Y29uc3QgZGlzcGxheUdpbSA9IChkaXNwbGF5U3RhdGUsIGl0ZW1JZCwgdHlwZSkgPT4ge1xuXHRcdC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdC8vIFx0bGV0IGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXJkJyk7XG5cdFx0Ly8gXHRpZiAoYm9hcmQgJiYgKG9uRGlzcGxheS5kaXNwbGF5U3RhdGUgJiYgb25EaXNwbGF5LnR5cGUgPT09IDIpKVxuXHRcdC8vIFx0e1xuXHRcdC8vIFx0XHRib2FyZC5zY3JvbGxJbnRvVmlldyhmYWxzZSk7XG5cdFx0Ly8gXHRcdGNvbnNvbGUubG9nKFwiZnVuYyBmaXJlZCBcIilcblx0XHQvLyBcdH1cblx0XHQvLyBcdGVsc2Vcblx0XHRcdFx0Y29uc29sZS5sb2coXCJzY3Jvb29vb29vb29vb29vb29vb29sbGw6IE5VTExMTEwgdHlwZSA6IFwiICsgdHlwZSArIFwiIHN0YXRlIDogXCIrIGRpc3BsYXlTdGF0ZSlcblxuXHRcdC8vIH0sIDEwMClcblx0XHRjb25zb2xlLmxvZyhcIiB8fHwgIERJU1BMQVkgOiBcIiwgZGlzcGxheVN0YXRlID8gXCJ0cnVlXCIgOiBcImZhbHNlXCIgLCBcIiB8fHwgdHlwZSA6IFwiICsgdHlwZSApXG5cdFx0Y29uc3QgbmV3ZGlzcGxheU9mZiA9IG9uRGlzcGxheS5kaXNwbGF5U3RhdGUgJiYgIWRpc3BsYXlTdGF0ZSA/IHRydWUgOiBmYWxzZTtcblx0XHRzZXRPbkRpc3BsYXkoeyAuLi5vbkRpc3BsYXksIGRpc3BsYXlTdGF0ZSwgZGlzcGxheU9mZiA6IG5ld2Rpc3BsYXlPZmYsIGl0ZW1JZCwgdHlwZSB9KTtcblx0fVxuXHRcblx0Y29uc3QgaGFuZGxlTW91c2VNb3ZlID0gZSA9PiB7XG5cdFx0cm90YXRlQnlNb3VzZVBvc2l0aW9uKGUsIGltYWdlUmVmLmN1cnJlbnQpXG5cdCAgfTtcblx0Y29uc3QgIGhhbmRsZU1vdXNlTGVhdmUgPSBlID0+IHtcblx0XHRpbWFnZVJlZi5jdXJyZW50LnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGVYKDBkZWcpIHJvdGF0ZVkoMGRlZylgXG5cdH1cblx0cmV0dXJuIChcblx0XHQ8bW90aW9uLmRpdiBjbGFzc05hbWU9e2ByZWxhdGl2ZSBmbGV4IGZsZXgtY29sIHctZnVsbCBoLWF1dG8gb3ZlcmZsb3ctaGlkZGVuYH0+XG57Lyoge1x0XHRjb25zb2xlLmxvZyhkYXRhTG9hZGluZyA/IFwibm90IGZldGNoZWQgeWV0XCIgOiBcImFib3V0IDpcIiAsIGFib3V0LCBcInJlcG9zIDogXCIsIHJlcG9zICl9ICovfVxuXHRcdFx0ey8qIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgei01MCB0ZXh0LXdoaXRlIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgdG9wLTEwMCBsZWZ0LTEvNFwiID5cblx0XHRcdFx0PGgxPm9uRGlzcGxheSA6IHtvbkRpc3BsYXkuZGlzcGxheVN0YXRlID8gXCJ0cnVlXCIgOiBcImZhbHNlXCJ9PC9oMT5cblx0XHRcdFx0PGgxPmRpc3BsYXlPZmYgOiB7b25EaXNwbGF5LmRpc3BsYXlPZmYgPyBcInRydWVcIiA6IFwiZmFsc2VcIn08L2gxPlxuXHRcdFx0XHQ8aDE+aXRlbUlkIDoge29uRGlzcGxheS5pdGVtSWR9PC9oMT5cblx0XHRcdFx0PGgxPnR5cGUgOiB7b25EaXNwbGF5LnR5cGV9PC9oMT5cblx0XHRcdFx0PGgxPlggOiB7bW91c2VQb3NpdGlvbi54fTwvaDE+XG5cdFx0XHRcdDxoMT5ZIDoge21vdXNlUG9zaXRpb24ueX08L2gxPlxuXHQ8XHRcdFx0aDE+dG9wIDoge3NpemUudG9wfSB8IGxlZnQgOiB7c2l6ZS5sZWZ0fTwvaDE+XG5cdFx0XHRcdDxMaW5rIGhyZWY9XCIvaG9tZVwiID48YT5ub25lIGV4aXN0aW5nIHVybDwvYT48L0xpbms+XG5cdFx0XHQ8L2Rpdj4gKi99XG5cdFx0XHR7LyogPG5hdiBjbGFzc05hbWU9XCJmaXhlZCB6LTUwIHRvcC0yMCByaWdodC04IGxnOmgtNDAgbGc6dy0yNCBtZDpoLTMyIG1kOnctMjAgaC0yMCB3LTE2XCI+XG5cdFx0XHRcdDxFeWVTd2l0Y2ggZGFya1RoZW1lPXtkYXJrVGhlbWV9IGNoYW5nZVRoZW1lPXtjaGFuZ2VUaGVtZX0gY29sb3IyPVwiYmctZ3JlZW4tNTAwXCIgY29sb3IxPVwiYmctYmx1ZS05MDBcIiAvPlxuXHRcdFx0PC9uYXY+ICovfVxuXHRcdFx0PG1vdGlvbi5kaXYgY2xhc3NOYW1lPXtgcmVsYXRpdmUgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGw6aC1zY3JlZW4gJHtvbkRpc3BsYXkuZGlzcGxheVN0YXRlICYmIG9uRGlzcGxheS50eXBlICE9PSAtMSA/IFwiaC1hdXRvXCIgOiBcImgtc2NyZWVuXCIgfSBtLTAgcC0wICB3LWZ1bGwgJHt0aGVtZS5kYXJrLmJhY2tncm91bmRDb2xvcn1gfVxuXHRcdFx0PlxuXHRcdFx0XHQ8bW90aW9uLmRpdiBpZD1cInNvZ3VtYVwiIGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGw6aC1mdWxsIG1kOmgtc2NyZWVuIGgtODAgdy1mdWxsXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgbGc6aC1mdWxsIG1kOmgtZnVsbCBoLWZ1bGwgdy1mdWxsIFwiPlxuXHRcdFx0XHRcdFx0PERhcmtTa3lPcGVuIGhlaWdodD1cImxnOmgtZnVsbCBoLWZ1bGwgbWQ6aC0xLzIgdy1mdWxsXCIgZGFya1RoZW1lPXtkYXJrVGhlbWV9IC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB3LWZ1bGwgaC1mdWxsIHRvcC0wIGxlZnQtMFwiIFxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggZmxleC1yb3cganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtZnVsbCB3LTEvMiBcIlxuXHRcdFx0XHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdFx0XHRcdFx0c2NhbGU6IHNvZ3VtYVNjYWxlLFxuXHRcdFx0XHRcdFx0XHRcdFx0eTogc29ndW1hWW9mZnNldFxuXHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdHsvKiA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtZnVsbCB3LTUvNiBiZy1yZWQtNjAwXCI+ICovfVxuXHRcdFx0XHRcdFx0XHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LTEvMyBoLWZ1bGwgcHQtZnVsbFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlZj17aW1hZ2VSZWZ9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uTW91c2VNb3ZlPXtoYW5kbGVNb3VzZU1vdmV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uTW91c2VMZWF2ZT17aGFuZGxlTW91c2VMZWF2ZX1cblx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGhyIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGJvcmRlci0yIGJvcmRlci1ibGFjayBoLTEvMlwiPjwvaHI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0wIHctZnVsbCByb3VuZGVkLWZ1bGwgYm9yZGVyLWJsYWNrIGJvcmRlci00IG92ZXJmbG93LWhpZGRlbiBiZy1ibGFja1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdD5cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxtb3Rpb24uaW1nIGNsYXNzTmFtZT1cInctZnVsbCBvYmplY3QtZmlsbFwiIHNyYz1cIi9tZS8wLnBuZ1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LTEvMyBoLWZ1bGxcIlxuXHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7LyogPGhyIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGJvcmRlci0yIGJvcmRlci1ibGFjayBoLTIvM1wiPjwvaHI+ICovfVxuXHRcdFx0XHRcdFx0XHRcdFx0PG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTIvMyBoLTEvNSAgdy1mdWxsIGJnLXllbGxvdy01MDBcIlxuXHRcdFx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRoaSB0aGVyZSB1IGZvY2tlcnNcblx0XHRcdFx0XHRcdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHRcdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdFx0XHRcdHsvKiA8L2Rpdj4gKi99XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1zdGFydCBtZDpoLTEwMCBsZzpoLTEwMCBtZDp0b3AtMS80IHRvcC0xLzQgaC1mdWxsIGxnOnRvcC0xLzMgdy1mdWxsIHotMjAgcG9pbnRlci1ldmVudHMtbm9uZVwiXG5cdFx0XHRcdFx0XHRzdHlsZT17IG9uRGlzcGxheS5kaXNwbGF5U3RhdGUgPyBcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHNjYWxlOiBzb2d1bWFTY2FsZSxcblx0XHRcdFx0XHRcdFx0XHR5OiBzb2d1bWFZb2Zmc2V0XG5cdFx0XHRcdFx0XHRcdH0gOiB7XG5cdFx0XHRcdFx0XHRcdFx0c2NhbGUgOiAxLFxuXHRcdFx0XHRcdFx0XHRcdHkgOiAwXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8U29ndW1hVnggcmVwb3M9e3JlcG9zfSBkYXRhTG9hZGluZyBzZXRPbkRpc3BsYXk9e2Rpc3BsYXlHaW19IG9uRGlzcGxheT17b25EaXNwbGF5fSBkYXJrVGhlbWU9e2RhcmtUaGVtZX0gLz5cblx0XHRcdFx0XHRcdDxTb2d1bWFWeFBob25lIHJlcG9zPXtyZXBvc30gZGF0YUxvYWRpbmcgc2V0T25EaXNwbGF5PXtkaXNwbGF5R2ltfSBvbkRpc3BsYXk9e29uRGlzcGxheX0gZGFya1RoZW1lPXtkYXJrVGhlbWV9IC8+XG5cdFx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHRcdDxNYWluQm9hcmQgaWQ9XCJib2FyZFwiIG9uRGlzcGxheT17b25EaXNwbGF5fSBhYm91dD17YWJvdXR9IHJlcG9zPXtyZXBvc30gLz5cblx0XHRcdFx0ey8qIDxCb2FyZFBob25lIG9uRGlzcGxheT17b25EaXNwbGF5fSBhYm91dD17YWJvdXR9IHJlcG9zPXtyZXBvc30gLz4gKi99XG5cdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHQgey8qIHtvbkRpc3BsYXkuZGlzcGxheVN0YXRlICYmIDxDYXJkIG9uRGlzcGxheT17b25EaXNwbGF5fSBkYXJrVGhlbWU9e2RhcmtUaGVtZX0gZGlzcGxheUdpbT17ZGlzcGxheUdpbX0gLz59ICovfVxuXHRcdDwvbW90aW9uLmRpdj5cblx0KVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG5cblx0Y29uc3QgcmVzMSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL0pha2VlRGVzdScpO1xuXHRjb25zdCByZXMyID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvSmFrZWVEZXN1L3JlcG9zJyk7XG5cdFxuXHRjb25zdCBhYm91dCA9IGF3YWl0IHJlczEuanNvbigpO1xuXHRjb25zdCByZXBvcyA9IGF3YWl0IHJlczIuanNvbigpO1xuXHQvLyBjb25zb2xlLmxvZyggYnJ1dERhdGEgKVxuXHQvLyBjb25zdCBsb2FkaW5nID0gYnJ1dERhdGEgPyB0cnVlIDogZmFsc2U7XG5cdC8vIGlmIChmZXRjaGVkRGF0YSlcblx0Ly8ge1xuXG5cdC8vIH1cblx0Y29uc3QgZGF0YUxvYWRpbmcgPSAoYWJvdXQgJiYgcmVwb3MpID09PSB1bmRlZmluZWQgPyB0cnVlIDogZmFsc2U7IFxuXHRcblx0cmV0dXJuIHtcblx0XHRwcm9wcyA6IHsgYWJvdXQsIHJlcG9zLCBkYXRhTG9hZGluZyAgfVxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})