webpackHotUpdate_N_E("pages/_app",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _components_darkSkyOpen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/darkSkyOpen */ \"./components/darkSkyOpen.js\");\n/* harmony import */ var _components_sogumaVx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/sogumaVx */ \"./components/sogumaVx.tsx\");\n/* harmony import */ var _components_sogumaVxPhone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/sogumaVxPhone */ \"./components/sogumaVxPhone.tsx\");\n/* harmony import */ var _components_darkSky__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/darkSky */ \"./components/darkSky.js\");\n/* harmony import */ var _components_eyeSwitch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/eyeSwitch */ \"./components/eyeSwitch.js\");\n/* harmony import */ var _components_mainboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/mainboard */ \"./components/mainboard.js\");\n/* harmony import */ var _components_boardPhone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/boardPhone */ \"./components/boardPhone.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_utilities_getLocalProjectData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/utilities/getLocalProjectData */ \"./components/utilities/getLocalProjectData.js\");\n/* harmony import */ var _components_scene__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/scene */ \"./components/scene.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _components_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/theme */ \"./components/theme.js\");\n\n\n\nvar _jsxFileName = \"/home/hamza/Desktop/portfolio/pages/index.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Home(_ref) {\n  _s();\n\n  var about = _ref.about,\n      repos = _ref.repos,\n      dataLoading = _ref.dataLoading,\n      darkTheme = _ref.darkTheme,\n      changeTheme = _ref.changeTheme;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_12__[\"useState\"])({\n    displayState: true,\n    displayOff: false,\n    itemId: -1,\n    type: -1\n  }),\n      onDisplay = _useState[0],\n      setOnDisplay = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_12__[\"useState\"])({}),\n      mousePosition = _useState2[0],\n      setMousePosition = _useState2[1];\n\n  var imageRef = Object(react__WEBPACK_IMPORTED_MODULE_12__[\"useRef\"])(null);\n\n  var _useViewportScroll = Object(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useViewportScroll\"])(),\n      scrollYProgress = _useViewportScroll.scrollYProgress;\n\n  var sogumaScale = Object(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useTransform\"])(scrollYProgress, [0, 0.1, 0.4, 1], [1, 0.9, 0.8, 0.1]);\n  var sogumaYoffset = Object(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useTransform\"])(scrollYProgress, [0, 0.1, 0.5, 1], [0, -10, -100, -500]); // getLocalProjectData(\"Fractol\");\n  // const [[soguma, board], setElements] = useState([null,null])\n\n  Object(react__WEBPACK_IMPORTED_MODULE_12__[\"useEffect\"])(function () {\n    // setElements([document.getElementById('soguma'), document.getElementById('board')])\n    var timer;\n\n    if (!onDisplay.displayState && onDisplay.displayOff) {\n      timer = setTimeout(function () {\n        setOnDisplay(_objectSpread(_objectSpread({}, onDisplay), {}, {\n          displayOff: false\n        }));\n      }, 300);\n    }\n\n    return function () {\n      return clearTimeout(timer);\n    };\n  }, [onDisplay]); // set a gim on display mode\n\n  var displayGim = function displayGim(displayState, itemId, type) {\n    // setTimeout(() => {\n    // \tlet board = document.getElementById('board');\n    // \tif (board && (onDisplay.displayState && onDisplay.type === 2))\n    // \t{\n    // \t\tboard.scrollIntoView(false);\n    // \t\tconsole.log(\"func fired \")\n    // \t}\n    // \telse\n    // \t\tconsole.log(\"scroooooooooooooooooolll: NULLLLL type : \" + type + \" state : \"+ displayState)\n    // }, 100)\n    console.log(\" |||  DISPLAY : \", displayState ? \"true\" : \"false\", \" ||| type : \" + type);\n    var newdisplayOff = onDisplay.displayState && !displayState ? true : false;\n    setOnDisplay(_objectSpread(_objectSpread({}, onDisplay), {}, {\n      displayState: displayState,\n      displayOff: newdisplayOff,\n      itemId: itemId,\n      type: type\n    }));\n  };\n\n  function getMousePosition(event, ref) {\n    var currentPosi = {\n      x: event.pageX,\n      y: event.pageY\n    }; // const offset = {\n    // \tleft: ref.offsetLeft,\n    // \ttop: ref.offsetTop,\n    // \twidth: ref.clientWidth,\n    // \theight: ref.clientHeight\n    //   };\n    // let reference = ref.offsetParent;\n    // while (reference) {\n    // \toffset.left += reference.offsetLeft;\n    // \toffset.top += reference.offsetTop;\n    // \treference = reference.offsetParent;\n    //   }\n\n    return {\n      x: currentPosi.x,\n      //- offset.left,\n      y: currentPosi.y // - offset.top\n\n    };\n  } // const handleMouseMove = e => {\n  // setMousePosition(getMousePosition(e, boxRef.current));\n  //   };\n\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].div, {\n    className: \"relative flex flex-col w-full h-auto overflow-hidden\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"absolute z-50 text-white flex flex-col justify-center top-100 left-1/4\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: [\"onDisplay : \", onDisplay.displayState ? \"true\" : \"false\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: [\"displayOff : \", onDisplay.displayOff ? \"true\" : \"false\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: [\"itemId : \", onDisplay.itemId]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: [\"type : \", onDisplay.type]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: [\"X : \", mousePosition.x]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: [\"Y : \", mousePosition.y]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {\n        href: \"/home\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          children: \"none existing url\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 25\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].div, {\n      className: \"relative flex flex-col justify-start l:h-screen \".concat(onDisplay.displayState && onDisplay.type !== -1 ? \"h-auto\" : \"h-screen\", \" m-0 p-0  w-full \").concat(_components_theme__WEBPACK_IMPORTED_MODULE_14__[\"theme\"].dark.backgroundColor),\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].div, {\n        id: \"soguma\",\n        className: \"relative flex justify-center items-center l:h-full md:h-screen h-80 w-full\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"absolute top-0 left-0 lg:h-full md:h-full h-full w-full \",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_darkSkyOpen__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            height: \"lg:h-full h-full md:h-1/2 w-full\",\n            darkTheme: darkTheme\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 103,\n            columnNumber: 7\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 6\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"absolute w-full h-full top-0 left-0\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].div, {\n            className: \" flex flex-col justify-center items-center h-full w-1/2\",\n            ref: imageRef,\n            onMouseMove: function onMouseMove(e) {\n              setMousePosition(getMousePosition(e, imageRef === null || imageRef === void 0 ? void 0 : imageRef.current));\n            },\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].div, {\n              className: \"relative flex items-center w-2/3 h-full pt-full bg-yellow-500 pointer-events-none\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].img, {\n                className: \"absolute left-0 object-fill border-4 border-black rounded-full pointer-events-none\",\n                src: \"/me/0.png\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 117,\n                columnNumber: 10\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"hr\", {\n                className: \"absolute -left-full border-2 border-black w-full\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 119,\n                columnNumber: 10\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 114,\n              columnNumber: 9\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 106,\n            columnNumber: 7\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 105,\n          columnNumber: 6\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].div, {\n          className: \"absolute flex justify-center items-start md:h-100 lg:h-100 md:top-1/4 top-1/4 h-full lg:top-1/3 w-full z-20\",\n          style: onDisplay.displayState ? {\n            scale: sogumaScale,\n            y: sogumaYoffset\n          } : {\n            scale: 1,\n            y: 0\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_sogumaVx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            repos: repos,\n            dataLoading: true,\n            setOnDisplay: displayGim,\n            onDisplay: onDisplay,\n            darkTheme: darkTheme\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 135,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_sogumaVxPhone__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            repos: repos,\n            dataLoading: true,\n            setOnDisplay: displayGim,\n            onDisplay: onDisplay,\n            darkTheme: darkTheme\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 136,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 124,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_mainboard__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        id: \"board\",\n        onDisplay: onDisplay,\n        about: about,\n        repos: repos\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 139,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 85,\n    columnNumber: 3\n  }, this);\n}\n\n_s(Home, \"w4x0I3ZNGazgXUxDkCQc90AvpMw=\", false, function () {\n  return [framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useViewportScroll\"], framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useTransform\"]];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwiYWJvdXQiLCJyZXBvcyIsImRhdGFMb2FkaW5nIiwiZGFya1RoZW1lIiwiY2hhbmdlVGhlbWUiLCJ1c2VTdGF0ZSIsImRpc3BsYXlTdGF0ZSIsImRpc3BsYXlPZmYiLCJpdGVtSWQiLCJ0eXBlIiwib25EaXNwbGF5Iiwic2V0T25EaXNwbGF5IiwibW91c2VQb3NpdGlvbiIsInNldE1vdXNlUG9zaXRpb24iLCJpbWFnZVJlZiIsInVzZVJlZiIsInVzZVZpZXdwb3J0U2Nyb2xsIiwic2Nyb2xsWVByb2dyZXNzIiwic29ndW1hU2NhbGUiLCJ1c2VUcmFuc2Zvcm0iLCJzb2d1bWFZb2Zmc2V0IiwidXNlRWZmZWN0IiwidGltZXIiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiZGlzcGxheUdpbSIsImNvbnNvbGUiLCJsb2ciLCJuZXdkaXNwbGF5T2ZmIiwiZ2V0TW91c2VQb3NpdGlvbiIsImV2ZW50IiwicmVmIiwiY3VycmVudFBvc2kiLCJ4IiwicGFnZVgiLCJ5IiwicGFnZVkiLCJ0aGVtZSIsImRhcmsiLCJiYWNrZ3JvdW5kQ29sb3IiLCJlIiwiY3VycmVudCIsInNjYWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBR2UsU0FBU0EsSUFBVCxPQUFvRTtBQUFBOztBQUFBLE1BQXBEQyxLQUFvRCxRQUFwREEsS0FBb0Q7QUFBQSxNQUE3Q0MsS0FBNkMsUUFBN0NBLEtBQTZDO0FBQUEsTUFBdENDLFdBQXNDLFFBQXRDQSxXQUFzQztBQUFBLE1BQXpCQyxTQUF5QixRQUF6QkEsU0FBeUI7QUFBQSxNQUFkQyxXQUFjLFFBQWRBLFdBQWM7O0FBQUEsa0JBQ2hEQyx1REFBUSxDQUFDO0FBQUVDLGdCQUFZ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LEtBQWpCO0FBQXdCLHVCQUFXLE1BQW5DO0FBQW9DLHdCQUFZLEVBQUV3QixVQUFsRDtBQUE4RCxxQkFBUyxFQUFFZixTQUF6RTtBQUFvRixxQkFBUyxFQUFFUDtBQUEvRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVhELGVBWUMscUVBQUMsaUVBQUQ7QUFBZSxpQkFBSyxFQUFFRixLQUF0QjtBQUE2Qix1QkFBVyxNQUF4QztBQUF5Qyx3QkFBWSxFQUFFd0IsVUFBdkQ7QUFBbUUscUJBQVMsRUFBRWYsU0FBOUU7QUFBeUYscUJBQVMsRUFBRVA7QUFBcEc7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFaRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBdkJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZELGVBd0NDLHFFQUFDLDZEQUFEO0FBQVcsVUFBRSxFQUFDLE9BQWQ7QUFBc0IsaUJBQVMsRUFBRU8sU0FBakM7QUFBNEMsYUFBSyxFQUFFVixLQUFuRDtBQUEwRCxhQUFLLEVBQUVDO0FBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F4Q0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBZEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUE2REE7O0dBaEl1QkYsSTtVQUlLaUIsZ0UsRUFDUkcsMkQsRUFDRUEsMkQ7OztLQU5DcEIsSSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERhcmtTa3lPcGVuIGZyb20gJy4uL2NvbXBvbmVudHMvZGFya1NreU9wZW4nXG5pbXBvcnQgU29ndW1hVnggZnJvbSAnLi4vY29tcG9uZW50cy9zb2d1bWFWeCdcbmltcG9ydCBTb2d1bWFWeFBob25lIGZyb20gJy4uL2NvbXBvbmVudHMvc29ndW1hVnhQaG9uZSdcbmltcG9ydCBEYXJrU2t5IGZyb20gJy4uL2NvbXBvbmVudHMvZGFya1NreSdcbmltcG9ydCBFeWVTd2l0Y2ggZnJvbSAnLi4vY29tcG9uZW50cy9leWVTd2l0Y2gnXG5pbXBvcnQgTWFpbkJvYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvbWFpbmJvYXJkJ1xuaW1wb3J0IEJvYXJkUGhvbmUgZnJvbSAnLi4vY29tcG9uZW50cy9ib2FyZFBob25lJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGdldExvY2FsUHJvamVjdERhdGEgZnJvbSAnLi4vY29tcG9uZW50cy91dGlsaXRpZXMvZ2V0TG9jYWxQcm9qZWN0RGF0YSdcblxuaW1wb3J0IFNjZW5lIGZyb20gJy4uL2NvbXBvbmVudHMvc2NlbmUnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1vdGlvbiwgdXNlVHJhbnNmb3JtLCB1c2VWaWV3cG9ydFNjcm9sbCwgdXNlTW90aW9uVmFsdWUgfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuLi9jb21wb25lbnRzL3RoZW1lJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBhYm91dCwgcmVwb3MsIGRhdGFMb2FkaW5nLCBkYXJrVGhlbWUsIGNoYW5nZVRoZW1lfSkge1xuXHRjb25zdCBbb25EaXNwbGF5LCBzZXRPbkRpc3BsYXldID0gdXNlU3RhdGUoeyBkaXNwbGF5U3RhdGU6IHRydWUsIGRpc3BsYXlPZmYgOiBmYWxzZSwgaXRlbUlkOiAtMSwgdHlwZTogLTEgfSlcblx0Y29uc3QgW21vdXNlUG9zaXRpb24sIHNldE1vdXNlUG9zaXRpb25dID0gdXNlU3RhdGUoe30pO1xuXHRjb25zdCBpbWFnZVJlZiA9IHVzZVJlZihudWxsKVxuXHRjb25zdCB7IHNjcm9sbFlQcm9ncmVzcyB9ID0gdXNlVmlld3BvcnRTY3JvbGwoKTtcblx0Y29uc3Qgc29ndW1hU2NhbGUgPSB1c2VUcmFuc2Zvcm0oc2Nyb2xsWVByb2dyZXNzLCBbMCwgMC4xLCAwLjQsIDFdLCBbMSwgMC45LCAwLjgsIDAuMV0pO1xuXHRjb25zdCBzb2d1bWFZb2Zmc2V0ID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDAuMSwgMC41LCAxXSwgWzAsIC0xMCwgLTEwMCwgLTUwMF0pO1xuXG5cdC8vIGdldExvY2FsUHJvamVjdERhdGEoXCJGcmFjdG9sXCIpO1xuXHQvLyBjb25zdCBbW3NvZ3VtYSwgYm9hcmRdLCBzZXRFbGVtZW50c10gPSB1c2VTdGF0ZShbbnVsbCxudWxsXSlcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHQvLyBzZXRFbGVtZW50cyhbZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NvZ3VtYScpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hcmQnKV0pXG5cdFx0bGV0IHRpbWVyO1xuXHRcdGlmICghb25EaXNwbGF5LmRpc3BsYXlTdGF0ZSAmJiBvbkRpc3BsYXkuZGlzcGxheU9mZilcblx0XHR7XG5cdFx0XHR0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRzZXRPbkRpc3BsYXkoeyAuLi5vbkRpc3BsYXksIGRpc3BsYXlPZmYgOiBmYWxzZSB9KTtcblx0XHRcdH0sIDMwMCkgXG5cdFx0fVxuXHRcdHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZXIpO1xuXHR9LCBbb25EaXNwbGF5XSk7XG5cblx0Ly8gc2V0IGEgZ2ltIG9uIGRpc3BsYXkgbW9kZVxuXHRjb25zdCBkaXNwbGF5R2ltID0gKGRpc3BsYXlTdGF0ZSwgaXRlbUlkLCB0eXBlKSA9PiB7XG5cdFx0Ly8gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0Ly8gXHRsZXQgYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9hcmQnKTtcblx0XHQvLyBcdGlmIChib2FyZCAmJiAob25EaXNwbGF5LmRpc3BsYXlTdGF0ZSAmJiBvbkRpc3BsYXkudHlwZSA9PT0gMikpXG5cdFx0Ly8gXHR7XG5cdFx0Ly8gXHRcdGJvYXJkLnNjcm9sbEludG9WaWV3KGZhbHNlKTtcblx0XHQvLyBcdFx0Y29uc29sZS5sb2coXCJmdW5jIGZpcmVkIFwiKVxuXHRcdC8vIFx0fVxuXHRcdC8vIFx0ZWxzZVxuXHRcdC8vIFx0XHRjb25zb2xlLmxvZyhcInNjcm9vb29vb29vb29vb29vb29vb2xsbDogTlVMTExMTCB0eXBlIDogXCIgKyB0eXBlICsgXCIgc3RhdGUgOiBcIisgZGlzcGxheVN0YXRlKVxuXG5cdFx0Ly8gfSwgMTAwKVxuXHRcdGNvbnNvbGUubG9nKFwiIHx8fCAgRElTUExBWSA6IFwiLCBkaXNwbGF5U3RhdGUgPyBcInRydWVcIiA6IFwiZmFsc2VcIiAsIFwiIHx8fCB0eXBlIDogXCIgKyB0eXBlIClcblx0XHRjb25zdCBuZXdkaXNwbGF5T2ZmID0gb25EaXNwbGF5LmRpc3BsYXlTdGF0ZSAmJiAhZGlzcGxheVN0YXRlID8gdHJ1ZSA6IGZhbHNlO1xuXHRcdHNldE9uRGlzcGxheSh7IC4uLm9uRGlzcGxheSwgZGlzcGxheVN0YXRlLCBkaXNwbGF5T2ZmIDogbmV3ZGlzcGxheU9mZiwgaXRlbUlkLCB0eXBlIH0pO1xuXHR9XG5cdGZ1bmN0aW9uIGdldE1vdXNlUG9zaXRpb24oZXZlbnQsIHJlZikge1xuXHRcdGNvbnN0IGN1cnJlbnRQb3NpID0ge1xuXHRcdFx0eCA6IGV2ZW50LnBhZ2VYICxcblx0XHRcdHkgOiBldmVudC5wYWdlWSxcblx0XHR9XG5cdFx0Ly8gY29uc3Qgb2Zmc2V0ID0ge1xuXHRcdC8vIFx0bGVmdDogcmVmLm9mZnNldExlZnQsXG5cdFx0Ly8gXHR0b3A6IHJlZi5vZmZzZXRUb3AsXG5cdFx0Ly8gXHR3aWR0aDogcmVmLmNsaWVudFdpZHRoLFxuXHRcdC8vIFx0aGVpZ2h0OiByZWYuY2xpZW50SGVpZ2h0XG5cdFx0Ly8gICB9O1xuXHRcdFxuXHRcdC8vIGxldCByZWZlcmVuY2UgPSByZWYub2Zmc2V0UGFyZW50O1xuXHRcdC8vIHdoaWxlIChyZWZlcmVuY2UpIHtcblx0XHQvLyBcdG9mZnNldC5sZWZ0ICs9IHJlZmVyZW5jZS5vZmZzZXRMZWZ0O1xuXHRcdC8vIFx0b2Zmc2V0LnRvcCArPSByZWZlcmVuY2Uub2Zmc2V0VG9wO1xuXHRcdC8vIFx0cmVmZXJlbmNlID0gcmVmZXJlbmNlLm9mZnNldFBhcmVudDtcblx0XHQvLyAgIH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHR4IDogY3VycmVudFBvc2kueCAsLy8tIG9mZnNldC5sZWZ0LFxuXHRcdFx0eSA6IGN1cnJlbnRQb3NpLnkvLyAtIG9mZnNldC50b3Bcblx0XHR9XG5cdH1cblx0XG5cdC8vIGNvbnN0IGhhbmRsZU1vdXNlTW92ZSA9IGUgPT4ge1xuXHRcdC8vIHNldE1vdXNlUG9zaXRpb24oZ2V0TW91c2VQb3NpdGlvbihlLCBib3hSZWYuY3VycmVudCkpO1xuXHQvLyAgIH07XG5cdHJldHVybiAoXG5cdFx0PG1vdGlvbi5kaXYgY2xhc3NOYW1lPXtgcmVsYXRpdmUgZmxleCBmbGV4LWNvbCB3LWZ1bGwgaC1hdXRvIG92ZXJmbG93LWhpZGRlbmB9Plxuey8qIHtcdFx0Y29uc29sZS5sb2coZGF0YUxvYWRpbmcgPyBcIm5vdCBmZXRjaGVkIHlldFwiIDogXCJhYm91dCA6XCIgLCBhYm91dCwgXCJyZXBvcyA6IFwiLCByZXBvcyApfSAqL31cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgei01MCB0ZXh0LXdoaXRlIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgdG9wLTEwMCBsZWZ0LTEvNFwiID5cblx0XHRcdFx0PGgxPm9uRGlzcGxheSA6IHtvbkRpc3BsYXkuZGlzcGxheVN0YXRlID8gXCJ0cnVlXCIgOiBcImZhbHNlXCJ9PC9oMT5cblx0XHRcdFx0PGgxPmRpc3BsYXlPZmYgOiB7b25EaXNwbGF5LmRpc3BsYXlPZmYgPyBcInRydWVcIiA6IFwiZmFsc2VcIn08L2gxPlxuXHRcdFx0XHQ8aDE+aXRlbUlkIDoge29uRGlzcGxheS5pdGVtSWR9PC9oMT5cblx0XHRcdFx0PGgxPnR5cGUgOiB7b25EaXNwbGF5LnR5cGV9PC9oMT5cblx0XHRcdFx0PGgxPlggOiB7bW91c2VQb3NpdGlvbi54fTwvaDE+XG5cdFx0XHRcdDxoMT5ZIDoge21vdXNlUG9zaXRpb24ueX08L2gxPlxuXHRcdFx0XHQ8TGluayBocmVmPVwiL2hvbWVcIiA+PGE+bm9uZSBleGlzdGluZyB1cmw8L2E+PC9MaW5rPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHR7LyogPG5hdiBjbGFzc05hbWU9XCJmaXhlZCB6LTUwIHRvcC0yMCByaWdodC04IGxnOmgtNDAgbGc6dy0yNCBtZDpoLTMyIG1kOnctMjAgaC0yMCB3LTE2XCI+XG5cdFx0XHRcdDxFeWVTd2l0Y2ggZGFya1RoZW1lPXtkYXJrVGhlbWV9IGNoYW5nZVRoZW1lPXtjaGFuZ2VUaGVtZX0gY29sb3IyPVwiYmctZ3JlZW4tNTAwXCIgY29sb3IxPVwiYmctYmx1ZS05MDBcIiAvPlxuXHRcdFx0PC9uYXY+ICovfVxuXHRcdFx0PG1vdGlvbi5kaXYgY2xhc3NOYW1lPXtgcmVsYXRpdmUgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGw6aC1zY3JlZW4gJHtvbkRpc3BsYXkuZGlzcGxheVN0YXRlICYmIG9uRGlzcGxheS50eXBlICE9PSAtMSA/IFwiaC1hdXRvXCIgOiBcImgtc2NyZWVuXCIgfSBtLTAgcC0wICB3LWZ1bGwgJHt0aGVtZS5kYXJrLmJhY2tncm91bmRDb2xvcn1gfVxuXHRcdFx0PlxuXHRcdFx0XHQ8bW90aW9uLmRpdiBpZD1cInNvZ3VtYVwiIGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGw6aC1mdWxsIG1kOmgtc2NyZWVuIGgtODAgdy1mdWxsXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgbGc6aC1mdWxsIG1kOmgtZnVsbCBoLWZ1bGwgdy1mdWxsIFwiPlxuXHRcdFx0XHRcdFx0PERhcmtTa3lPcGVuIGhlaWdodD1cImxnOmgtZnVsbCBoLWZ1bGwgbWQ6aC0xLzIgdy1mdWxsXCIgZGFya1RoZW1lPXtkYXJrVGhlbWV9IC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB3LWZ1bGwgaC1mdWxsIHRvcC0wIGxlZnQtMFwiID5cblx0XHRcdFx0XHRcdDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cIiBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLWZ1bGwgdy0xLzJcIlxuXHRcdFx0XHRcdFx0XHRyZWY9e2ltYWdlUmVmfVxuXHRcdFx0XHRcdFx0XHRvbk1vdXNlTW92ZT17ZSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0TW91c2VQb3NpdGlvbihnZXRNb3VzZVBvc2l0aW9uKGUsIGltYWdlUmVmPy5jdXJyZW50KSlcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHR7LyogPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLWZ1bGwgdy01LzYgYmctcmVkLTYwMFwiPiAqL31cblx0XHRcdFx0XHRcdFx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBpdGVtcy1jZW50ZXIgdy0yLzMgaC1mdWxsIHB0LWZ1bGwgYmcteWVsbG93LTUwMCBwb2ludGVyLWV2ZW50cy1ub25lXCJcblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8bW90aW9uLmltZyBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTAgb2JqZWN0LWZpbGwgYm9yZGVyLTQgYm9yZGVyLWJsYWNrIHJvdW5kZWQtZnVsbCBwb2ludGVyLWV2ZW50cy1ub25lXCIgc3JjPVwiL21lLzAucG5nXCJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8aHIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgLWxlZnQtZnVsbCBib3JkZXItMiBib3JkZXItYmxhY2sgdy1mdWxsXCI+PC9ocj5cblx0XHRcdFx0XHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHRcdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdFx0XHRcdHsvKiA8L2Rpdj4gKi99XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1zdGFydCBtZDpoLTEwMCBsZzpoLTEwMCBtZDp0b3AtMS80IHRvcC0xLzQgaC1mdWxsIGxnOnRvcC0xLzMgdy1mdWxsIHotMjBcIlxuXHRcdFx0XHRcdFx0c3R5bGU9eyBvbkRpc3BsYXkuZGlzcGxheVN0YXRlID8gXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRzY2FsZTogc29ndW1hU2NhbGUsXG5cdFx0XHRcdFx0XHRcdFx0eTogc29ndW1hWW9mZnNldFxuXHRcdFx0XHRcdFx0XHR9IDoge1xuXHRcdFx0XHRcdFx0XHRcdHNjYWxlIDogMSxcblx0XHRcdFx0XHRcdFx0XHR5IDogMFxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PFNvZ3VtYVZ4IHJlcG9zPXtyZXBvc30gZGF0YUxvYWRpbmcgc2V0T25EaXNwbGF5PXtkaXNwbGF5R2ltfSBvbkRpc3BsYXk9e29uRGlzcGxheX0gZGFya1RoZW1lPXtkYXJrVGhlbWV9IC8+XG5cdFx0XHRcdFx0XHQ8U29ndW1hVnhQaG9uZSByZXBvcz17cmVwb3N9IGRhdGFMb2FkaW5nIHNldE9uRGlzcGxheT17ZGlzcGxheUdpbX0gb25EaXNwbGF5PXtvbkRpc3BsYXl9IGRhcmtUaGVtZT17ZGFya1RoZW1lfSAvPlxuXHRcdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0XHQ8TWFpbkJvYXJkIGlkPVwiYm9hcmRcIiBvbkRpc3BsYXk9e29uRGlzcGxheX0gYWJvdXQ9e2Fib3V0fSByZXBvcz17cmVwb3N9IC8+XG5cdFx0XHRcdHsvKiA8Qm9hcmRQaG9uZSBvbkRpc3BsYXk9e29uRGlzcGxheX0gYWJvdXQ9e2Fib3V0fSByZXBvcz17cmVwb3N9IC8+ICovfVxuXHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0IHsvKiB7b25EaXNwbGF5LmRpc3BsYXlTdGF0ZSAmJiA8Q2FyZCBvbkRpc3BsYXk9e29uRGlzcGxheX0gZGFya1RoZW1lPXtkYXJrVGhlbWV9IGRpc3BsYXlHaW09e2Rpc3BsYXlHaW19IC8+fSAqL31cblx0XHQ8L21vdGlvbi5kaXY+XG5cdClcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuXG5cdGNvbnN0IHJlczEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9KYWtlZURlc3UnKTtcblx0Y29uc3QgcmVzMiA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL0pha2VlRGVzdS9yZXBvcycpO1xuXHRcblx0Y29uc3QgYWJvdXQgPSBhd2FpdCByZXMxLmpzb24oKTtcblx0Y29uc3QgcmVwb3MgPSBhd2FpdCByZXMyLmpzb24oKTtcblx0Ly8gY29uc29sZS5sb2coIGJydXREYXRhIClcblx0Ly8gY29uc3QgbG9hZGluZyA9IGJydXREYXRhID8gdHJ1ZSA6IGZhbHNlO1xuXHQvLyBpZiAoZmV0Y2hlZERhdGEpXG5cdC8vIHtcblxuXHQvLyB9XG5cdGNvbnN0IGRhdGFMb2FkaW5nID0gKGFib3V0ICYmIHJlcG9zKSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGZhbHNlOyBcblx0XG5cdHJldHVybiB7XG5cdFx0cHJvcHMgOiB7IGFib3V0LCByZXBvcywgZGF0YUxvYWRpbmcgIH1cblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})