webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _components_darkSkyOpen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/darkSkyOpen */ \"./components/darkSkyOpen.js\");\n/* harmony import */ var _components_sogumaVx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/sogumaVx */ \"./components/sogumaVx.tsx\");\n/* harmony import */ var _components_sogumaVxPhone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/sogumaVxPhone */ \"./components/sogumaVxPhone.tsx\");\n/* harmony import */ var _components_darkSky__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/darkSky */ \"./components/darkSky.js\");\n/* harmony import */ var _components_eyeSwitch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/eyeSwitch */ \"./components/eyeSwitch.js\");\n/* harmony import */ var _components_mainboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/mainboard */ \"./components/mainboard.js\");\n/* harmony import */ var _components_boardPhone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/boardPhone */ \"./components/boardPhone.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_utilities_getLocalProjectData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/utilities/getLocalProjectData */ \"./components/utilities/getLocalProjectData.js\");\n/* harmony import */ var _components_scene__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/scene */ \"./components/scene.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _components_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/theme */ \"./components/theme.js\");\n\n\n\nvar _jsxFileName = \"/home/hamza/Desktop/portfolio/pages/index.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction getMousePosition(event, ref) {\n  var currentPosi = {\n    x: event.pageX,\n    y: event.pageY\n  };\n  var offset = {\n    top: 0,\n    left: 0\n  };\n  if (ref) offset = ref.getBoundingClientRect();\n  return {\n    x: currentPosi.x - offset.left,\n    y: currentPosi.y - offset.top // zab\n\n  };\n}\n\nvar __N_SSG = true;\nfunction Home(_ref) {\n  _s();\n\n  var about = _ref.about,\n      repos = _ref.repos,\n      dataLoading = _ref.dataLoading,\n      darkTheme = _ref.darkTheme,\n      changeTheme = _ref.changeTheme;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_12__[\"useState\"])({\n    displayState: true,\n    displayOff: false,\n    itemId: -1,\n    type: -1\n  }),\n      onDisplay = _useState[0],\n      setOnDisplay = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_12__[\"useState\"])({}),\n      mousePosition = _useState2[0],\n      setMousePosition = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_12__[\"useState\"])({\n    height: 0,\n    width: 0\n  }),\n      size = _useState3[0],\n      setSize = _useState3[1];\n\n  var imageRef = Object(react__WEBPACK_IMPORTED_MODULE_12__[\"useRef\"])();\n\n  var _useViewportScroll = Object(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useViewportScroll\"])(),\n      scrollYProgress = _useViewportScroll.scrollYProgress;\n\n  var sogumaScale = Object(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useTransform\"])(scrollYProgress, [0, 0.1, 0.4, 1], [1, 0.9, 0.8, 0.1]);\n  var sogumaYoffset = Object(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useTransform\"])(scrollYProgress, [0, 0.1, 0.5, 1], [0, -10, -100, -500]);\n  var rX = Object(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useTransform\"])(mousePosition.x, [0, size.width], [0, 30]);\n  var rY = Object(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useTransform\"])(mousePosition.y, [0, size.height], [0, 30]); // getLocalProjectData(\"Fractol\");\n  // const [[soguma, board], setElements] = useState([null,null])\n\n  Object(react__WEBPACK_IMPORTED_MODULE_12__[\"useEffect\"])(function () {\n    // setElements([document.getElementById('soguma'), document.getElementById('board')])\n    if (imageRef && imageRef.current) {\n      console.log(\"tyyype x \", imageRef.current.getBoundingClientRect());\n      var rectSize = imageRef.current.getBoundingClientRect();\n      setSize({\n        height: rectSize.height,\n        width: rectSize.width\n      });\n    }\n\n    var timer;\n\n    if (!onDisplay.displayState && onDisplay.displayOff) {\n      timer = setTimeout(function () {\n        setOnDisplay(_objectSpread(_objectSpread({}, onDisplay), {}, {\n          displayOff: false\n        }));\n      }, 300);\n    }\n\n    return function () {\n      return clearTimeout(timer);\n    };\n  }, [onDisplay]); // set a gim on display mode\n\n  var displayGim = function displayGim(displayState, itemId, type) {\n    // setTimeout(() => {\n    // \tlet board = document.getElementById('board');\n    // \tif (board && (onDisplay.displayState && onDisplay.type === 2))\n    // \t{\n    // \t\tboard.scrollIntoView(false);\n    // \t\tconsole.log(\"func fired \")\n    // \t}\n    // \telse\n    // \t\tconsole.log(\"scroooooooooooooooooolll: NULLLLL type : \" + type + \" state : \"+ displayState)\n    // }, 100)\n    console.log(\" |||  DISPLAY : \", displayState ? \"true\" : \"false\", \" ||| type : \" + type);\n    var newdisplayOff = onDisplay.displayState && !displayState ? true : false;\n    setOnDisplay(_objectSpread(_objectSpread({}, onDisplay), {}, {\n      displayState: displayState,\n      displayOff: newdisplayOff,\n      itemId: itemId,\n      type: type\n    }));\n  };\n\n  var handleMouseMove = function handleMouseMove(e) {\n    setMousePosition(getMousePosition(e, imageRef.current));\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].div, {\n    className: \"relative flex flex-col w-full h-auto overflow-hidden\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"absolute z-50 text-white flex flex-col justify-center top-100 left-1/4\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: [\"onDisplay : \", onDisplay.displayState ? \"true\" : \"false\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: [\"displayOff : \", onDisplay.displayOff ? \"true\" : \"false\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: [\"itemId : \", onDisplay.itemId]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: [\"type : \", onDisplay.type]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: [\"X : \", mousePosition.x]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: [\"Y : \", mousePosition.y]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: [\"top : \", size.top, \" | left : \", size.left]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 2\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {\n        href: \"/home\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          children: \"none existing url\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 25\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].div, {\n      className: \"relative flex flex-col justify-start l:h-screen \".concat(onDisplay.displayState && onDisplay.type !== -1 ? \"h-auto\" : \"h-screen\", \" m-0 p-0  w-full \").concat(_components_theme__WEBPACK_IMPORTED_MODULE_14__[\"theme\"].dark.backgroundColor),\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].div, {\n        id: \"soguma\",\n        className: \"relative flex justify-center items-center l:h-full md:h-screen h-80 w-full\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"absolute top-0 left-0 lg:h-full md:h-full h-full w-full \",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_darkSkyOpen__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            height: \"lg:h-full h-full md:h-1/2 w-full\",\n            darkTheme: darkTheme\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 104,\n            columnNumber: 7\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 103,\n          columnNumber: 6\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"absolute w-full h-full top-0 left-0\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].div, {\n            className: \" flex flex-col justify-center items-center h-full w-1/2 \",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].div, {\n              className: \"relative flex items-center w-2/3 h-full pt-full bg-yellow-500 \",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].img, {\n                className: \"absolute left-0 w-full border-4 border-black rounded-full\",\n                src: \"/me/0.png\",\n                ref: imageRef,\n                onMouseMove: handleMouseMove\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 116,\n                columnNumber: 10\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"hr\", {\n                className: \"absolute -left-full border-2 border-black w-full\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 120,\n                columnNumber: 10\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 113,\n              columnNumber: 9\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 109,\n            columnNumber: 7\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 6\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].div, {\n          className: \"absolute flex justify-center items-start md:h-100 lg:h-100 md:top-1/4 top-1/4 h-full lg:top-1/3 w-full z-20 pointer-events-none\",\n          style: onDisplay.displayState ? {\n            scale: sogumaScale,\n            y: sogumaYoffset\n          } : {\n            scale: 1,\n            y: 0\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_sogumaVx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            repos: repos,\n            dataLoading: true,\n            setOnDisplay: displayGim,\n            onDisplay: onDisplay,\n            darkTheme: darkTheme\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 136,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_sogumaVxPhone__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            repos: repos,\n            dataLoading: true,\n            setOnDisplay: displayGim,\n            onDisplay: onDisplay,\n            darkTheme: darkTheme\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 137,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 125,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_mainboard__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        id: \"board\",\n        onDisplay: onDisplay,\n        about: about,\n        repos: repos\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 140,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 85,\n    columnNumber: 3\n  }, this);\n}\n\n_s(Home, \"FwKygZo/Olm2VbQmiqZSnSiSrdg=\", false, function () {\n  return [framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useViewportScroll\"], framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useTransform\"]];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJnZXRNb3VzZVBvc2l0aW9uIiwiZXZlbnQiLCJyZWYiLCJjdXJyZW50UG9zaSIsIngiLCJwYWdlWCIsInkiLCJwYWdlWSIsIm9mZnNldCIsInRvcCIsImxlZnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJIb21lIiwiYWJvdXQiLCJyZXBvcyIsImRhdGFMb2FkaW5nIiwiZGFya1RoZW1lIiwiY2hhbmdlVGhlbWUiLCJ1c2VTdGF0ZSIsImRpc3BsYXlTdGF0ZSIsImRpc3BsYXlPZmYiLCJpdGVtSWQiLCJ0eXBlIiwib25EaXNwbGF5Iiwic2V0T25EaXNwbGF5IiwibW91c2VQb3NpdGlvbiIsInNldE1vdXNlUG9zaXRpb24iLCJoZWlnaHQiLCJ3aWR0aCIsInNpemUiLCJzZXRTaXplIiwiaW1hZ2VSZWYiLCJ1c2VSZWYiLCJ1c2VWaWV3cG9ydFNjcm9sbCIsInNjcm9sbFlQcm9ncmVzcyIsInNvZ3VtYVNjYWxlIiwidXNlVHJhbnNmb3JtIiwic29ndW1hWW9mZnNldCIsInJYIiwiclkiLCJ1c2VFZmZlY3QiLCJjdXJyZW50IiwiY29uc29sZSIsImxvZyIsInJlY3RTaXplIiwidGltZXIiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiZGlzcGxheUdpbSIsIm5ld2Rpc3BsYXlPZmYiLCJoYW5kbGVNb3VzZU1vdmUiLCJlIiwidGhlbWUiLCJkYXJrIiwiYmFja2dyb3VuZENvbG9yIiwic2NhbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxnQkFBVCxDQUEwQkMsS0FBMUIsRUFBaUNDLEdBQWpDLEVBQXNDO0FBQ3JDLE1BQU1DLFdBQVcsR0FBRztBQUNuQkMsS0FBQyxFQUFHSCxLQUFLLENB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Q0FETDtBQUVIakQsYUFBQyxFQUFHO0FBRkQsV0FMTjtBQUFBLGtDQVdDLHFFQUFDLDREQUFEO0FBQVUsaUJBQUssRUFBRVEsS0FBakI7QUFBd0IsdUJBQVcsTUFBbkM7QUFBb0Msd0JBQVksRUFBRWtDLFVBQWxEO0FBQThELHFCQUFTLEVBQUV6QixTQUF6RTtBQUFvRixxQkFBUyxFQUFFUDtBQUEvRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVhELGVBWUMscUVBQUMsaUVBQUQ7QUFBZSxpQkFBSyxFQUFFRixLQUF0QjtBQUE2Qix1QkFBVyxNQUF4QztBQUF5Qyx3QkFBWSxFQUFFa0MsVUFBdkQ7QUFBbUUscUJBQVMsRUFBRXpCLFNBQTlFO0FBQXlGLHFCQUFTLEVBQUVQO0FBQXBHO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBWkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXZCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRCxlQXdDQyxxRUFBQyw2REFBRDtBQUFXLFVBQUUsRUFBQyxPQUFkO0FBQXNCLGlCQUFTLEVBQUVPLFNBQWpDO0FBQTRDLGFBQUssRUFBRVYsS0FBbkQ7QUFBMEQsYUFBSyxFQUFFQztBQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBeENEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBOERBOztHQWxIdUJGLEk7VUFLS3FCLGdFLEVBQ1JHLDJELEVBQ0VBLDJELEVBRVhBLDJELEVBQ0FBLDJEOzs7S0FWWXhCLEkiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEYXJrU2t5T3BlbiBmcm9tICcuLi9jb21wb25lbnRzL2RhcmtTa3lPcGVuJ1xuaW1wb3J0IFNvZ3VtYVZ4IGZyb20gJy4uL2NvbXBvbmVudHMvc29ndW1hVngnXG5pbXBvcnQgU29ndW1hVnhQaG9uZSBmcm9tICcuLi9jb21wb25lbnRzL3NvZ3VtYVZ4UGhvbmUnXG5pbXBvcnQgRGFya1NreSBmcm9tICcuLi9jb21wb25lbnRzL2RhcmtTa3knXG5pbXBvcnQgRXllU3dpdGNoIGZyb20gJy4uL2NvbXBvbmVudHMvZXllU3dpdGNoJ1xuaW1wb3J0IE1haW5Cb2FyZCBmcm9tICcuLi9jb21wb25lbnRzL21haW5ib2FyZCdcbmltcG9ydCBCb2FyZFBob25lIGZyb20gJy4uL2NvbXBvbmVudHMvYm9hcmRQaG9uZSdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBnZXRMb2NhbFByb2plY3REYXRhIGZyb20gJy4uL2NvbXBvbmVudHMvdXRpbGl0aWVzL2dldExvY2FsUHJvamVjdERhdGEnXG5cbmltcG9ydCBTY2VuZSBmcm9tICcuLi9jb21wb25lbnRzL3NjZW5lJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtb3Rpb24sIHVzZVRyYW5zZm9ybSwgdXNlVmlld3BvcnRTY3JvbGwsIHVzZU1vdGlvblZhbHVlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi4vY29tcG9uZW50cy90aGVtZSdcblxuZnVuY3Rpb24gZ2V0TW91c2VQb3NpdGlvbihldmVudCwgcmVmKSB7XG5cdGNvbnN0IGN1cnJlbnRQb3NpID0ge1xuXHRcdHggOiBldmVudC5wYWdlWCAsXG5cdFx0eSA6IGV2ZW50LnBhZ2VZLFxuXHR9XG5cblx0bGV0IG9mZnNldCA9IHt0b3AgOiAwLCBsZWZ0IDogMH1cblx0aWYgKHJlZiApXG5cdFx0b2Zmc2V0ID0gcmVmLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpXG5cdHJldHVybiB7XG5cdFx0eCA6IGN1cnJlbnRQb3NpLnggLSBvZmZzZXQubGVmdCxcblx0XHR5IDogY3VycmVudFBvc2kueSAtIG9mZnNldC50b3AsXG5cdFx0Ly8gemFiXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGFib3V0LCByZXBvcywgZGF0YUxvYWRpbmcsIGRhcmtUaGVtZSwgY2hhbmdlVGhlbWV9KSB7XG5cdGNvbnN0IFtvbkRpc3BsYXksIHNldE9uRGlzcGxheV0gPSB1c2VTdGF0ZSh7IGRpc3BsYXlTdGF0ZTogdHJ1ZSwgZGlzcGxheU9mZiA6IGZhbHNlLCBpdGVtSWQ6IC0xLCB0eXBlOiAtMSB9KVxuXHRjb25zdCBbbW91c2VQb3NpdGlvbiwgc2V0TW91c2VQb3NpdGlvbl0gPSB1c2VTdGF0ZSh7fSk7XG5cdGNvbnN0IFtzaXplLCBzZXRTaXplXSA9IHVzZVN0YXRlKHtoZWlnaHQgOiAwLCB3aWR0aCA6IDB9KTtcblx0Y29uc3QgaW1hZ2VSZWYgPSB1c2VSZWYoKVxuXHRjb25zdCB7IHNjcm9sbFlQcm9ncmVzcyB9ID0gdXNlVmlld3BvcnRTY3JvbGwoKTtcblx0Y29uc3Qgc29ndW1hU2NhbGUgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMC4xLCAwLjQsIDFdLCBbMSwgMC45LCAwLjgsIDAuMV0pO1xuXHRjb25zdCBzb2d1bWFZb2Zmc2V0ID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDAuMSwgMC41LCAxXSwgWzAsIC0xMCwgLTEwMCwgLTUwMF0pO1xuXG5cdGNvbnN0IHJYID0gdXNlVHJhbnNmb3JtKG1vdXNlUG9zaXRpb24ueCwgWzAgLCBzaXplLndpZHRoXSwgWzAsIDMwXSlcblx0Y29uc3QgclkgPSB1c2VUcmFuc2Zvcm0obW91c2VQb3NpdGlvbi55LCBbMCAsIHNpemUuaGVpZ2h0XSwgWzAsIDMwXSlcblx0Ly8gZ2V0TG9jYWxQcm9qZWN0RGF0YShcIkZyYWN0b2xcIik7XG5cdC8vIGNvbnN0IFtbc29ndW1hLCBib2FyZF0sIHNldEVsZW1lbnRzXSA9IHVzZVN0YXRlKFtudWxsLG51bGxdKVxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdC8vIHNldEVsZW1lbnRzKFtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc29ndW1hJyksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib2FyZCcpXSlcblx0XHRpZiAoaW1hZ2VSZWYgJiYgaW1hZ2VSZWYuY3VycmVudClcblx0XHR7XG5cdFx0XHRjb25zb2xlLmxvZyhcInR5eXlwZSB4IFwiLCBpbWFnZVJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpKVxuXHRcdFx0bGV0IHJlY3RTaXplID0gaW1hZ2VSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuXHRcdFx0c2V0U2l6ZSh7IGhlaWdodCA6IHJlY3RTaXplLmhlaWdodCwgd2lkdGggOiByZWN0U2l6ZS53aWR0aH0pXG5cdFx0fVxuXHRcdFx0bGV0IHRpbWVyO1xuXHRcdGlmICghb25EaXNwbGF5LmRpc3BsYXlTdGF0ZSAmJiBvbkRpc3BsYXkuZGlzcGxheU9mZilcblx0XHR7XG5cdFx0XHR0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRzZXRPbkRpc3BsYXkoeyAuLi5vbkRpc3BsYXksIGRpc3BsYXlPZmYgOiBmYWxzZSB9KTtcblx0XHRcdH0sIDMwMCkgXG5cdFx0fVxuXHRcdHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXIpO1xuXHR9LCBbb25EaXNwbGF5XSk7XG5cblx0Ly8gc2V0IGEgZ2ltIG9uIGRpc3BsYXkgbW9kZVxuXHRjb25zdCBkaXNwbGF5R2ltID0gKGRpc3BsYXlTdGF0ZSwgaXRlbUlkLCB0eXBlKSA9PiB7XG5cdFx0Ly8gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0Ly8gXHRsZXQgYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hcmQnKTtcblx0XHQvLyBcdGlmIChib2FyZCAmJiAob25EaXNwbGF5LmRpc3BsYXlTdGF0ZSAmJiBvbkRpc3BsYXkudHlwZSA9PT0gMikpXG5cdFx0Ly8gXHR7XG5cdFx0Ly8gXHRcdGJvYXJkLnNjcm9sbEludG9WaWV3KGZhbHNlKTtcblx0XHQvLyBcdFx0Y29uc29sZS5sb2coXCJmdW5jIGZpcmVkIFwiKVxuXHRcdC8vIFx0fVxuXHRcdC8vIFx0ZWxzZVxuXHRcdC8vIFx0XHRjb25zb2xlLmxvZyhcInNjcm9vb29vb29vb29vb29vb29vb2xsbDogTlVMTExMTCB0eXBlIDogXCIgKyB0eXBlICsgXCIgc3RhdGUgOiBcIisgZGlzcGxheVN0YXRlKVxuXG5cdFx0Ly8gfSwgMTAwKVxuXHRcdGNvbnNvbGUubG9nKFwiIHx8fCAgRElTUExBWSA6IFwiLCBkaXNwbGF5U3RhdGUgPyBcInRydWVcIiA6IFwiZmFsc2VcIiAsIFwiIHx8fCB0eXBlIDogXCIgKyB0eXBlIClcblx0XHRjb25zdCBuZXdkaXNwbGF5T2ZmID0gb25EaXNwbGF5LmRpc3BsYXlTdGF0ZSAmJiAhZGlzcGxheVN0YXRlID8gdHJ1ZSA6IGZhbHNlO1xuXHRcdHNldE9uRGlzcGxheSh7IC4uLm9uRGlzcGxheSwgZGlzcGxheVN0YXRlLCBkaXNwbGF5T2ZmIDogbmV3ZGlzcGxheU9mZiwgaXRlbUlkLCB0eXBlIH0pO1xuXHR9XG5cdFxuXHRjb25zdCBoYW5kbGVNb3VzZU1vdmUgPSBlID0+IHtcblx0XHRzZXRNb3VzZVBvc2l0aW9uKGdldE1vdXNlUG9zaXRpb24oZSwgaW1hZ2VSZWYuY3VycmVudCkpO1xuXHQgIH07XG5cdHJldHVybiAoXG5cdFx0PG1vdGlvbi5kaXYgY2xhc3NOYW1lPXtgcmVsYXRpdmUgZmxleCBmbGV4LWNvbCB3LWZ1bGwgaC1hdXRvIG92ZXJmbG93LWhpZGRlbmB9Plxuey8qIHtcdFx0Y29uc29sZS5sb2coZGF0YUxvYWRpbmcgPyBcIm5vdCBmZXRjaGVkIHlldFwiIDogXCJhYm91dCA6XCIgLCBhYm91dCwgXCJyZXBvcyA6IFwiLCByZXBvcyApfSAqL31cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgei01MCB0ZXh0LXdoaXRlIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgdG9wLTEwMCBsZWZ0LTEvNFwiID5cblx0XHRcdFx0PGgxPm9uRGlzcGxheSA6IHtvbkRpc3BsYXkuZGlzcGxheVN0YXRlID8gXCJ0cnVlXCIgOiBcImZhbHNlXCJ9PC9oMT5cblx0XHRcdFx0PGgxPmRpc3BsYXlPZmYgOiB7b25EaXNwbGF5LmRpc3BsYXlPZmYgPyBcInRydWVcIiA6IFwiZmFsc2VcIn08L2gxPlxuXHRcdFx0XHQ8aDE+aXRlbUlkIDoge29uRGlzcGxheS5pdGVtSWR9PC9oMT5cblx0XHRcdFx0PGgxPnR5cGUgOiB7b25EaXNwbGF5LnR5cGV9PC9oMT5cblx0XHRcdFx0PGgxPlggOiB7bW91c2VQb3NpdGlvbi54fTwvaDE+XG5cdFx0XHRcdDxoMT5ZIDoge21vdXNlUG9zaXRpb24ueX08L2gxPlxuXHQ8XHRcdFx0aDE+dG9wIDoge3NpemUudG9wfSB8IGxlZnQgOiB7c2l6ZS5sZWZ0fTwvaDE+XG5cdFx0XHRcdDxMaW5rIGhyZWY9XCIvaG9tZVwiID48YT5ub25lIGV4aXN0aW5nIHVybDwvYT48L0xpbms+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdHsvKiA8bmF2IGNsYXNzTmFtZT1cImZpeGVkIHotNTAgdG9wLTIwIHJpZ2h0LTggbGc6aC00MCBsZzp3LTI0IG1kOmgtMzIgbWQ6dy0yMCBoLTIwIHctMTZcIj5cblx0XHRcdFx0PEV5ZVN3aXRjaCBkYXJrVGhlbWU9e2RhcmtUaGVtZX0gY2hhbmdlVGhlbWU9e2NoYW5nZVRoZW1lfSBjb2xvcjI9XCJiZy1ncmVlbi01MDBcIiBjb2xvcjE9XCJiZy1ibHVlLTkwMFwiIC8+XG5cdFx0XHQ8L25hdj4gKi99XG5cdFx0XHQ8bW90aW9uLmRpdiBjbGFzc05hbWU9e2ByZWxhdGl2ZSBmbGV4IGZsZXgtY29sIGp1c3RpZnktc3RhcnQgbDpoLXNjcmVlbiAke29uRGlzcGxheS5kaXNwbGF5U3RhdGUgJiYgb25EaXNwbGF5LnR5cGUgIT09IC0xID8gXCJoLWF1dG9cIiA6IFwiaC1zY3JlZW5cIiB9IG0tMCBwLTAgIHctZnVsbCAke3RoZW1lLmRhcmsuYmFja2dyb3VuZENvbG9yfWB9XG5cdFx0XHQ+XG5cdFx0XHRcdDxtb3Rpb24uZGl2IGlkPVwic29ndW1hXCIgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbDpoLWZ1bGwgbWQ6aC1zY3JlZW4gaC04MCB3LWZ1bGxcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCBsZzpoLWZ1bGwgbWQ6aC1mdWxsIGgtZnVsbCB3LWZ1bGwgXCI+XG5cdFx0XHRcdFx0XHQ8RGFya1NreU9wZW4gaGVpZ2h0PVwibGc6aC1mdWxsIGgtZnVsbCBtZDpoLTEvMiB3LWZ1bGxcIiBkYXJrVGhlbWU9e2RhcmtUaGVtZX0gLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHctZnVsbCBoLWZ1bGwgdG9wLTAgbGVmdC0wXCIgXG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtZnVsbCB3LTEvMiBcIlxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdHsvKiA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtZnVsbCB3LTUvNiBiZy1yZWQtNjAwXCI+ICovfVxuXHRcdFx0XHRcdFx0XHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGl0ZW1zLWNlbnRlciB3LTIvMyBoLWZ1bGwgcHQtZnVsbCBiZy15ZWxsb3ctNTAwIFwiXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bW90aW9uLmltZyBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTAgdy1mdWxsIGJvcmRlci00IGJvcmRlci1ibGFjayByb3VuZGVkLWZ1bGxcIiBzcmM9XCIvbWUvMC5wbmdcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZWY9e2ltYWdlUmVmfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbk1vdXNlTW92ZT17aGFuZGxlTW91c2VNb3ZlfVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdDxociBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtbGVmdC1mdWxsIGJvcmRlci0yIGJvcmRlci1ibGFjayB3LWZ1bGxcIj48L2hyPlxuXHRcdFx0XHRcdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdFx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0XHRcdFx0ey8qIDwvZGl2PiAqL31cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLXN0YXJ0IG1kOmgtMTAwIGxnOmgtMTAwIG1kOnRvcC0xLzQgdG9wLTEvNCBoLWZ1bGwgbGc6dG9wLTEvMyB3LWZ1bGwgei0yMCBwb2ludGVyLWV2ZW50cy1ub25lXCJcblx0XHRcdFx0XHRcdHN0eWxlPXsgb25EaXNwbGF5LmRpc3BsYXlTdGF0ZSA/IFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0c2NhbGU6IHNvZ3VtYVNjYWxlLFxuXHRcdFx0XHRcdFx0XHRcdHk6IHNvZ3VtYVlvZmZzZXRcblx0XHRcdFx0XHRcdFx0fSA6IHtcblx0XHRcdFx0XHRcdFx0XHRzY2FsZSA6IDEsXG5cdFx0XHRcdFx0XHRcdFx0eSA6IDBcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxTb2d1bWFWeCByZXBvcz17cmVwb3N9IGRhdGFMb2FkaW5nIHNldE9uRGlzcGxheT17ZGlzcGxheUdpbX0gb25EaXNwbGF5PXtvbkRpc3BsYXl9IGRhcmtUaGVtZT17ZGFya1RoZW1lfSAvPlxuXHRcdFx0XHRcdFx0PFNvZ3VtYVZ4UGhvbmUgcmVwb3M9e3JlcG9zfSBkYXRhTG9hZGluZyBzZXRPbkRpc3BsYXk9e2Rpc3BsYXlHaW19IG9uRGlzcGxheT17b25EaXNwbGF5fSBkYXJrVGhlbWU9e2RhcmtUaGVtZX0gLz5cblx0XHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdFx0PE1haW5Cb2FyZCBpZD1cImJvYXJkXCIgb25EaXNwbGF5PXtvbkRpc3BsYXl9IGFib3V0PXthYm91dH0gcmVwb3M9e3JlcG9zfSAvPlxuXHRcdFx0XHR7LyogPEJvYXJkUGhvbmUgb25EaXNwbGF5PXtvbkRpc3BsYXl9IGFib3V0PXthYm91dH0gcmVwb3M9e3JlcG9zfSAvPiAqL31cblx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdCB7Lyoge29uRGlzcGxheS5kaXNwbGF5U3RhdGUgJiYgPENhcmQgb25EaXNwbGF5PXtvbkRpc3BsYXl9IGRhcmtUaGVtZT17ZGFya1RoZW1lfSBkaXNwbGF5R2ltPXtkaXNwbGF5R2ltfSAvPn0gKi99XG5cdFx0PC9tb3Rpb24uZGl2PlxuXHQpXG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcblxuXHRjb25zdCByZXMxID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvSmFrZWVEZXN1Jyk7XG5cdGNvbnN0IHJlczIgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9KYWtlZURlc3UvcmVwb3MnKTtcblx0XG5cdGNvbnN0IGFib3V0ID0gYXdhaXQgcmVzMS5qc29uKCk7XG5cdGNvbnN0IHJlcG9zID0gYXdhaXQgcmVzMi5qc29uKCk7XG5cdC8vIGNvbnNvbGUubG9nKCBicnV0RGF0YSApXG5cdC8vIGNvbnN0IGxvYWRpbmcgPSBicnV0RGF0YSA/IHRydWUgOiBmYWxzZTtcblx0Ly8gaWYgKGZldGNoZWREYXRhKVxuXHQvLyB7XG5cblx0Ly8gfVxuXHRjb25zdCBkYXRhTG9hZGluZyA9IChhYm91dCAmJiByZXBvcykgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBmYWxzZTsgXG5cdFxuXHRyZXR1cm4ge1xuXHRcdHByb3BzIDogeyBhYm91dCwgcmVwb3MsIGRhdGFMb2FkaW5nICB9XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})