webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _components_darkSkyOpen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/darkSkyOpen */ \"./components/darkSkyOpen.js\");\n/* harmony import */ var _components_sogumaVx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/sogumaVx */ \"./components/sogumaVx.tsx\");\n/* harmony import */ var _components_sogumaVxPhone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/sogumaVxPhone */ \"./components/sogumaVxPhone.tsx\");\n/* harmony import */ var _components_darkSky__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/darkSky */ \"./components/darkSky.js\");\n/* harmony import */ var _components_eyeSwitch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/eyeSwitch */ \"./components/eyeSwitch.js\");\n/* harmony import */ var _components_mainboard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/mainboard */ \"./components/mainboard.js\");\n/* harmony import */ var _components_boardPhone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/boardPhone */ \"./components/boardPhone.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_utilities_getLocalProjectData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/utilities/getLocalProjectData */ \"./components/utilities/getLocalProjectData.js\");\n/* harmony import */ var _components_scene__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/scene */ \"./components/scene.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _components_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/theme */ \"./components/theme.js\");\n\n\n\nvar _jsxFileName = \"/home/hamza/Desktop/portfolio/pages/index.js\",\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Home(_ref) {\n  _s();\n\n  var about = _ref.about,\n      repos = _ref.repos,\n      dataLoading = _ref.dataLoading,\n      darkTheme = _ref.darkTheme,\n      changeTheme = _ref.changeTheme;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_12__[\"useState\"])({\n    displayState: true,\n    displayOff: false,\n    itemId: -1,\n    type: -1\n  }),\n      onDisplay = _useState[0],\n      setOnDisplay = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_12__[\"useState\"])({}),\n      mousePosition = _useState2[0],\n      setMousePosition = _useState2[1];\n\n  var imageRef = Object(react__WEBPACK_IMPORTED_MODULE_12__[\"useRef\"])(null);\n\n  var _useViewportScroll = Object(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useViewportScroll\"])(),\n      scrollYProgress = _useViewportScroll.scrollYProgress;\n\n  var sogumaScale = Object(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useTransform\"])(scrollYProgress, [0, 0.1, 0.4, 1], [1, 0.9, 0.8, 0.1]);\n  var sogumaYoffset = Object(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useTransform\"])(scrollYProgress, [0, 0.1, 0.5, 1], [0, -10, -100, -500]); // getLocalProjectData(\"Fractol\");\n  // const [[soguma, board], setElements] = useState([null,null])\n\n  Object(react__WEBPACK_IMPORTED_MODULE_12__[\"useEffect\"])(function () {\n    // setElements([document.getElementById('soguma'), document.getElementById('board')])\n    var timer;\n\n    if (!onDisplay.displayState && onDisplay.displayOff) {\n      timer = setTimeout(function () {\n        setOnDisplay(_objectSpread(_objectSpread({}, onDisplay), {}, {\n          displayOff: false\n        }));\n      }, 300);\n    }\n\n    return function () {\n      return clearTimeout(timer);\n    };\n  }, [onDisplay]); // set a gim on display mode\n\n  var displayGim = function displayGim(displayState, itemId, type) {\n    // setTimeout(() => {\n    // \tlet board = document.getElementById('board');\n    // \tif (board && (onDisplay.displayState && onDisplay.type === 2))\n    // \t{\n    // \t\tboard.scrollIntoView(false);\n    // \t\tconsole.log(\"func fired \")\n    // \t}\n    // \telse\n    // \t\tconsole.log(\"scroooooooooooooooooolll: NULLLLL type : \" + type + \" state : \"+ displayState)\n    // }, 100)\n    console.log(\" |||  DISPLAY : \", displayState ? \"true\" : \"false\", \" ||| type : \" + type);\n    var newdisplayOff = onDisplay.displayState && !displayState ? true : false;\n    setOnDisplay(_objectSpread(_objectSpread({}, onDisplay), {}, {\n      displayState: displayState,\n      displayOff: newdisplayOff,\n      itemId: itemId,\n      type: type\n    }));\n  };\n\n  function getMousePosition(event, ref) {\n    var currentPosi = {\n      x: event.pageX,\n      y: event.pageY\n    }; // const offset = {\n    // \tleft: ref.offsetLeft,\n    // \ttop: ref.offsetTop,\n    // \twidth: ref.clientWidth,\n    // \theight: ref.clientHeight\n    //   };\n    // let reference = ref.offsetParent;\n    // while (reference) {\n    // \toffset.left += reference.offsetLeft;\n    // \toffset.top += reference.offsetTop;\n    // \treference = reference.offsetParent;\n    //   }\n\n    return {\n      x: currentPosi.x,\n      //- offset.left,\n      y: currentPosi.y // - offset.top\n\n    };\n  } // const handleMouseMove = e => {\n  // setMousePosition(getMousePosition(e, boxRef.current));\n  //   };\n\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].div, {\n    className: \"relative flex flex-col w-full h-auto overflow-hidden\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"absolute z-50 text-white flex flex-col justify-center top-100 left-1/4\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: [\"onDisplay : \", onDisplay.displayState ? \"true\" : \"false\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: [\"displayOff : \", onDisplay.displayOff ? \"true\" : \"false\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: [\"itemId : \", onDisplay.itemId]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: [\"type : \", onDisplay.type]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: [\"X : \", mousePosition.x]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: [\"Y : \", mousePosition.y]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {\n        href: \"/home\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          children: \"none existing url\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 25\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].div, {\n      className: \"relative flex flex-col justify-start l:h-screen \".concat(onDisplay.displayState && onDisplay.type !== -1 ? \"h-auto\" : \"h-screen\", \" m-0 p-0  w-full \").concat(_components_theme__WEBPACK_IMPORTED_MODULE_14__[\"theme\"].dark.backgroundColor),\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].div, {\n        id: \"soguma\",\n        className: \"relative flex justify-center items-center l:h-full md:h-screen h-80 w-full\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"absolute top-0 left-0 lg:h-full md:h-full h-full w-full \",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_darkSkyOpen__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            height: \"lg:h-full h-full md:h-1/2 w-full\",\n            darkTheme: darkTheme\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 103,\n            columnNumber: 7\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 6\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"absolute w-full h-full top-0 left-0\",\n          ref: imageRef,\n          onMouseMove: function onMouseMove(e) {\n            setMousePosition(getMousePosition(e, imageRef.current));\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].div, {\n            className: \" flex flex-col justify-center items-center h-full w-1/2 pointer-events-none\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].div, {\n              className: \"relative flex items-center w-2/3 h-full pt-full bg-yellow-500 \",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].img, {\n                className: \"absolute left-0 object-fill border-4 border-black rounded-full pointer-events-none\",\n                src: \"/me/0.png\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 119,\n                columnNumber: 10\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"hr\", {\n                className: \"absolute -left-full border-2 border-black w-full\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 121,\n                columnNumber: 10\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 116,\n              columnNumber: 9\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 112,\n            columnNumber: 7\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 105,\n          columnNumber: 6\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"motion\"].div, {\n          className: \"absolute flex justify-center items-start md:h-100 lg:h-100 md:top-1/4 top-1/4 h-full lg:top-1/3 w-full z-20\",\n          style: onDisplay.displayState ? {\n            scale: sogumaScale,\n            y: sogumaYoffset\n          } : {\n            scale: 1,\n            y: 0\n          },\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_sogumaVx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            repos: repos,\n            dataLoading: true,\n            setOnDisplay: displayGim,\n            onDisplay: onDisplay,\n            darkTheme: darkTheme\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 137,\n            columnNumber: 7\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_sogumaVxPhone__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            repos: repos,\n            dataLoading: true,\n            setOnDisplay: displayGim,\n            onDisplay: onDisplay,\n            darkTheme: darkTheme\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 138,\n            columnNumber: 7\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 126,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_mainboard__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        id: \"board\",\n        onDisplay: onDisplay,\n        about: about,\n        repos: repos\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 141,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 85,\n    columnNumber: 3\n  }, this);\n}\n\n_s(Home, \"w4x0I3ZNGazgXUxDkCQc90AvpMw=\", false, function () {\n  return [framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useViewportScroll\"], framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_13__[\"useTransform\"]];\n});\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwiYWJvdXQiLCJyZXBvcyIsImRhdGFMb2FkaW5nIiwiZGFya1RoZW1lIiwiY2hhbmdlVGhlbWUiLCJ1c2VTdGF0ZSIsImRpc3BsYXlTdGF0ZSIsImRpc3BsYXlPZmYiLCJpdGVtSWQiLCJ0eXBlIiwib25EaXNwbGF5Iiwic2V0T25EaXNwbGF5IiwibW91c2VQb3NpdGlvbiIsInNldE1vdXNlUG9zaXRpb24iLCJpbWFnZVJlZiIsInVzZVJlZiIsInVzZVZpZXdwb3J0U2Nyb2xsIiwic2Nyb2xsWVByb2dyZXNzIiwic29ndW1hU2NhbGUiLCJ1c2VUcmFuc2Zvcm0iLCJzb2d1bWFZb2Zmc2V0IiwidXNlRWZmZWN0IiwidGltZXIiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiZGlzcGxheUdpbSIsImNvbnNvbGUiLCJsb2ciLCJuZXdkaXNwbGF5T2ZmIiwiZ2V0TW91c2VQb3NpdGlvbiIsImV2ZW50IiwicmVmIiwiY3VycmVudFBvc2kiLCJ4IiwicGFnZVgiLCJ5IiwicGFnZVkiLCJ0aGVtZSIsImRhcmsiLCJiYWNrZ3JvdW5kQ29sb3IiLCJlIiwiY3VycmVudCIsInNjYWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBR2UsU0FBU0EsSUFBVCxPQUFvRTtBQUFBOztBQUFBLE1BQXBEQyxLQUFvRCxRQUFwREEsS0FBb0Q7QUFBQSxNQUE3Q0MsS0FBNkMsUUFBN0NBLEtBQTZDO0FBQUEsTUFBdENDLFdBQXNDLFFBQXRDQSxXQUFzQztBQUFBLE1BQXpCQyxTQUF5QixRQUF6QkEsU0FBeUI7QUFBQSxNQUFkQyxXQUFjLFFBQWRBLFdBQWM7O0FBQUEsa0JBQ2hEQyx1REFBUSxDQUFDO0FBQUVDLGdCQUFZ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QztBQUFvQyx3QkFBWSxFQUFFd0IsVUFBbEQ7QUFBOEQscUJBQVMsRUFBRWYsU0FBekU7QUFBb0YscUJBQVMsRUFBRVA7QUFBL0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFYRCxlQVlDLHFFQUFDLGlFQUFEO0FBQWUsaUJBQUssRUFBRUYsS0FBdEI7QUFBNkIsdUJBQVcsTUFBeEM7QUFBeUMsd0JBQVksRUFBRXdCLFVBQXZEO0FBQW1FLHFCQUFTLEVBQUVmLFNBQTlFO0FBQXlGLHFCQUFTLEVBQUVQO0FBQXBHO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBWkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXpCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRCxlQTBDQyxxRUFBQyw2REFBRDtBQUFXLFVBQUUsRUFBQyxPQUFkO0FBQXNCLGlCQUFTLEVBQUVPLFNBQWpDO0FBQTRDLGFBQUssRUFBRVYsS0FBbkQ7QUFBMEQsYUFBSyxFQUFFQztBQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBMUNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUREO0FBK0RBOztHQWxJdUJGLEk7VUFJS2lCLGdFLEVBQ1JHLDJELEVBQ0VBLDJEOzs7S0FOQ3BCLEkiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEYXJrU2t5T3BlbiBmcm9tICcuLi9jb21wb25lbnRzL2RhcmtTa3lPcGVuJ1xuaW1wb3J0IFNvZ3VtYVZ4IGZyb20gJy4uL2NvbXBvbmVudHMvc29ndW1hVngnXG5pbXBvcnQgU29ndW1hVnhQaG9uZSBmcm9tICcuLi9jb21wb25lbnRzL3NvZ3VtYVZ4UGhvbmUnXG5pbXBvcnQgRGFya1NreSBmcm9tICcuLi9jb21wb25lbnRzL2RhcmtTa3knXG5pbXBvcnQgRXllU3dpdGNoIGZyb20gJy4uL2NvbXBvbmVudHMvZXllU3dpdGNoJ1xuaW1wb3J0IE1haW5Cb2FyZCBmcm9tICcuLi9jb21wb25lbnRzL21haW5ib2FyZCdcbmltcG9ydCBCb2FyZFBob25lIGZyb20gJy4uL2NvbXBvbmVudHMvYm9hcmRQaG9uZSdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBnZXRMb2NhbFByb2plY3REYXRhIGZyb20gJy4uL2NvbXBvbmVudHMvdXRpbGl0aWVzL2dldExvY2FsUHJvamVjdERhdGEnXG5cbmltcG9ydCBTY2VuZSBmcm9tICcuLi9jb21wb25lbnRzL3NjZW5lJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtb3Rpb24sIHVzZVRyYW5zZm9ybSwgdXNlVmlld3BvcnRTY3JvbGwsIHVzZU1vdGlvblZhbHVlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi4vY29tcG9uZW50cy90aGVtZSdcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgYWJvdXQsIHJlcG9zLCBkYXRhTG9hZGluZywgZGFya1RoZW1lLCBjaGFuZ2VUaGVtZX0pIHtcblx0Y29uc3QgW29uRGlzcGxheSwgc2V0T25EaXNwbGF5XSA9IHVzZVN0YXRlKHsgZGlzcGxheVN0YXRlOiB0cnVlLCBkaXNwbGF5T2ZmIDogZmFsc2UsIGl0ZW1JZDogLTEsIHR5cGU6IC0xIH0pXG5cdGNvbnN0IFttb3VzZVBvc2l0aW9uLCBzZXRNb3VzZVBvc2l0aW9uXSA9IHVzZVN0YXRlKHt9KTtcblx0Y29uc3QgaW1hZ2VSZWYgPSB1c2VSZWYobnVsbClcblx0Y29uc3QgeyBzY3JvbGxZUHJvZ3Jlc3MgfSA9IHVzZVZpZXdwb3J0U2Nyb2xsKCk7XG5cdGNvbnN0IHNvZ3VtYVNjYWxlID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDAuMSwgMC40LCAxXSwgWzEsIDAuOSwgMC44LCAwLjFdKTtcblx0Y29uc3Qgc29ndW1hWW9mZnNldCA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAwLjEsIDAuNSwgMV0sIFswLCAtMTAsIC0xMDAsIC01MDBdKTtcblxuXHQvLyBnZXRMb2NhbFByb2plY3REYXRhKFwiRnJhY3RvbFwiKTtcblx0Ly8gY29uc3QgW1tzb2d1bWEsIGJvYXJkXSwgc2V0RWxlbWVudHNdID0gdXNlU3RhdGUoW251bGwsbnVsbF0pXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0Ly8gc2V0RWxlbWVudHMoW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzb2d1bWEnKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXJkJyldKVxuXHRcdGxldCB0aW1lcjtcblx0XHRpZiAoIW9uRGlzcGxheS5kaXNwbGF5U3RhdGUgJiYgb25EaXNwbGF5LmRpc3BsYXlPZmYpXG5cdFx0e1xuXHRcdFx0dGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0c2V0T25EaXNwbGF5KHsgLi4ub25EaXNwbGF5LCBkaXNwbGF5T2ZmIDogZmFsc2UgfSk7XG5cdFx0XHR9LCAzMDApIFxuXHRcdH1cblx0XHRyZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KHRpbWVyKTtcblx0fSwgW29uRGlzcGxheV0pO1xuXG5cdC8vIHNldCBhIGdpbSBvbiBkaXNwbGF5IG1vZGVcblx0Y29uc3QgZGlzcGxheUdpbSA9IChkaXNwbGF5U3RhdGUsIGl0ZW1JZCwgdHlwZSkgPT4ge1xuXHRcdC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdC8vIFx0bGV0IGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JvYXJkJyk7XG5cdFx0Ly8gXHRpZiAoYm9hcmQgJiYgKG9uRGlzcGxheS5kaXNwbGF5U3RhdGUgJiYgb25EaXNwbGF5LnR5cGUgPT09IDIpKVxuXHRcdC8vIFx0e1xuXHRcdC8vIFx0XHRib2FyZC5zY3JvbGxJbnRvVmlldyhmYWxzZSk7XG5cdFx0Ly8gXHRcdGNvbnNvbGUubG9nKFwiZnVuYyBmaXJlZCBcIilcblx0XHQvLyBcdH1cblx0XHQvLyBcdGVsc2Vcblx0XHQvLyBcdFx0Y29uc29sZS5sb2coXCJzY3Jvb29vb29vb29vb29vb29vb29sbGw6IE5VTExMTEwgdHlwZSA6IFwiICsgdHlwZSArIFwiIHN0YXRlIDogXCIrIGRpc3BsYXlTdGF0ZSlcblxuXHRcdC8vIH0sIDEwMClcblx0XHRjb25zb2xlLmxvZyhcIiB8fHwgIERJU1BMQVkgOiBcIiwgZGlzcGxheVN0YXRlID8gXCJ0cnVlXCIgOiBcImZhbHNlXCIgLCBcIiB8fHwgdHlwZSA6IFwiICsgdHlwZSApXG5cdFx0Y29uc3QgbmV3ZGlzcGxheU9mZiA9IG9uRGlzcGxheS5kaXNwbGF5U3RhdGUgJiYgIWRpc3BsYXlTdGF0ZSA/IHRydWUgOiBmYWxzZTtcblx0XHRzZXRPbkRpc3BsYXkoeyAuLi5vbkRpc3BsYXksIGRpc3BsYXlTdGF0ZSwgZGlzcGxheU9mZiA6IG5ld2Rpc3BsYXlPZmYsIGl0ZW1JZCwgdHlwZSB9KTtcblx0fVxuXHRmdW5jdGlvbiBnZXRNb3VzZVBvc2l0aW9uKGV2ZW50LCByZWYpIHtcblx0XHRjb25zdCBjdXJyZW50UG9zaSA9IHtcblx0XHRcdHggOiBldmVudC5wYWdlWCAsXG5cdFx0XHR5IDogZXZlbnQucGFnZVksXG5cdFx0fVxuXHRcdC8vIGNvbnN0IG9mZnNldCA9IHtcblx0XHQvLyBcdGxlZnQ6IHJlZi5vZmZzZXRMZWZ0LFxuXHRcdC8vIFx0dG9wOiByZWYub2Zmc2V0VG9wLFxuXHRcdC8vIFx0d2lkdGg6IHJlZi5jbGllbnRXaWR0aCxcblx0XHQvLyBcdGhlaWdodDogcmVmLmNsaWVudEhlaWdodFxuXHRcdC8vICAgfTtcblx0XHRcblx0XHQvLyBsZXQgcmVmZXJlbmNlID0gcmVmLm9mZnNldFBhcmVudDtcblx0XHQvLyB3aGlsZSAocmVmZXJlbmNlKSB7XG5cdFx0Ly8gXHRvZmZzZXQubGVmdCArPSByZWZlcmVuY2Uub2Zmc2V0TGVmdDtcblx0XHQvLyBcdG9mZnNldC50b3AgKz0gcmVmZXJlbmNlLm9mZnNldFRvcDtcblx0XHQvLyBcdHJlZmVyZW5jZSA9IHJlZmVyZW5jZS5vZmZzZXRQYXJlbnQ7XG5cdFx0Ly8gICB9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0eCA6IGN1cnJlbnRQb3NpLnggLC8vLSBvZmZzZXQubGVmdCxcblx0XHRcdHkgOiBjdXJyZW50UG9zaS55Ly8gLSBvZmZzZXQudG9wXG5cdFx0fVxuXHR9XG5cdFxuXHQvLyBjb25zdCBoYW5kbGVNb3VzZU1vdmUgPSBlID0+IHtcblx0XHQvLyBzZXRNb3VzZVBvc2l0aW9uKGdldE1vdXNlUG9zaXRpb24oZSwgYm94UmVmLmN1cnJlbnQpKTtcblx0Ly8gICB9O1xuXHRyZXR1cm4gKFxuXHRcdDxtb3Rpb24uZGl2IGNsYXNzTmFtZT17YHJlbGF0aXZlIGZsZXggZmxleC1jb2wgdy1mdWxsIGgtYXV0byBvdmVyZmxvdy1oaWRkZW5gfT5cbnsvKiB7XHRcdGNvbnNvbGUubG9nKGRhdGFMb2FkaW5nID8gXCJub3QgZmV0Y2hlZCB5ZXRcIiA6IFwiYWJvdXQgOlwiICwgYWJvdXQsIFwicmVwb3MgOiBcIiwgcmVwb3MgKX0gKi99XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHotNTAgdGV4dC13aGl0ZSBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIHRvcC0xMDAgbGVmdC0xLzRcIiA+XG5cdFx0XHRcdDxoMT5vbkRpc3BsYXkgOiB7b25EaXNwbGF5LmRpc3BsYXlTdGF0ZSA/IFwidHJ1ZVwiIDogXCJmYWxzZVwifTwvaDE+XG5cdFx0XHRcdDxoMT5kaXNwbGF5T2ZmIDoge29uRGlzcGxheS5kaXNwbGF5T2ZmID8gXCJ0cnVlXCIgOiBcImZhbHNlXCJ9PC9oMT5cblx0XHRcdFx0PGgxPml0ZW1JZCA6IHtvbkRpc3BsYXkuaXRlbUlkfTwvaDE+XG5cdFx0XHRcdDxoMT50eXBlIDoge29uRGlzcGxheS50eXBlfTwvaDE+XG5cdFx0XHRcdDxoMT5YIDoge21vdXNlUG9zaXRpb24ueH08L2gxPlxuXHRcdFx0XHQ8aDE+WSA6IHttb3VzZVBvc2l0aW9uLnl9PC9oMT5cblx0XHRcdFx0PExpbmsgaHJlZj1cIi9ob21lXCIgPjxhPm5vbmUgZXhpc3RpbmcgdXJsPC9hPjwvTGluaz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0ey8qIDxuYXYgY2xhc3NOYW1lPVwiZml4ZWQgei01MCB0b3AtMjAgcmlnaHQtOCBsZzpoLTQwIGxnOnctMjQgbWQ6aC0zMiBtZDp3LTIwIGgtMjAgdy0xNlwiPlxuXHRcdFx0XHQ8RXllU3dpdGNoIGRhcmtUaGVtZT17ZGFya1RoZW1lfSBjaGFuZ2VUaGVtZT17Y2hhbmdlVGhlbWV9IGNvbG9yMj1cImJnLWdyZWVuLTUwMFwiIGNvbG9yMT1cImJnLWJsdWUtOTAwXCIgLz5cblx0XHRcdDwvbmF2PiAqL31cblx0XHRcdDxtb3Rpb24uZGl2IGNsYXNzTmFtZT17YHJlbGF0aXZlIGZsZXggZmxleC1jb2wganVzdGlmeS1zdGFydCBsOmgtc2NyZWVuICR7b25EaXNwbGF5LmRpc3BsYXlTdGF0ZSAmJiBvbkRpc3BsYXkudHlwZSAhPT0gLTEgPyBcImgtYXV0b1wiIDogXCJoLXNjcmVlblwiIH0gbS0wIHAtMCAgdy1mdWxsICR7dGhlbWUuZGFyay5iYWNrZ3JvdW5kQ29sb3J9YH1cblx0XHRcdD5cblx0XHRcdFx0PG1vdGlvbi5kaXYgaWQ9XCJzb2d1bWFcIiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBsOmgtZnVsbCBtZDpoLXNjcmVlbiBoLTgwIHctZnVsbFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgbGVmdC0wIGxnOmgtZnVsbCBtZDpoLWZ1bGwgaC1mdWxsIHctZnVsbCBcIj5cblx0XHRcdFx0XHRcdDxEYXJrU2t5T3BlbiBoZWlnaHQ9XCJsZzpoLWZ1bGwgaC1mdWxsIG1kOmgtMS8yIHctZnVsbFwiIGRhcmtUaGVtZT17ZGFya1RoZW1lfSAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy1mdWxsIGgtZnVsbCB0b3AtMCBsZWZ0LTBcIiBcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdHJlZj17aW1hZ2VSZWZ9XG5cdFx0XHRcdFx0XHRvbk1vdXNlTW92ZT17ZSA9PiB7XG5cdFx0XHRcdFx0XHRcdHNldE1vdXNlUG9zaXRpb24oZ2V0TW91c2VQb3NpdGlvbihlLCBpbWFnZVJlZi5jdXJyZW50KSlcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtZnVsbCB3LTEvMiBwb2ludGVyLWV2ZW50cy1ub25lXCJcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHR7LyogPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLWZ1bGwgdy01LzYgYmctcmVkLTYwMFwiPiAqL31cblx0XHRcdFx0XHRcdFx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBpdGVtcy1jZW50ZXIgdy0yLzMgaC1mdWxsIHB0LWZ1bGwgYmcteWVsbG93LTUwMCBcIlxuXHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdDxtb3Rpb24uaW1nIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtMCBvYmplY3QtZmlsbCBib3JkZXItNCBib3JkZXItYmxhY2sgcm91bmRlZC1mdWxsIHBvaW50ZXItZXZlbnRzLW5vbmVcIiBzcmM9XCIvbWUvMC5wbmdcIlxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdDxociBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtbGVmdC1mdWxsIGJvcmRlci0yIGJvcmRlci1ibGFjayB3LWZ1bGxcIj48L2hyPlxuXHRcdFx0XHRcdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdFx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0XHRcdFx0ey8qIDwvZGl2PiAqL31cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLXN0YXJ0IG1kOmgtMTAwIGxnOmgtMTAwIG1kOnRvcC0xLzQgdG9wLTEvNCBoLWZ1bGwgbGc6dG9wLTEvMyB3LWZ1bGwgei0yMFwiXG5cdFx0XHRcdFx0XHRzdHlsZT17IG9uRGlzcGxheS5kaXNwbGF5U3RhdGUgPyBcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdHNjYWxlOiBzb2d1bWFTY2FsZSxcblx0XHRcdFx0XHRcdFx0XHR5OiBzb2d1bWFZb2Zmc2V0XG5cdFx0XHRcdFx0XHRcdH0gOiB7XG5cdFx0XHRcdFx0XHRcdFx0c2NhbGUgOiAxLFxuXHRcdFx0XHRcdFx0XHRcdHkgOiAwXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8U29ndW1hVnggcmVwb3M9e3JlcG9zfSBkYXRhTG9hZGluZyBzZXRPbkRpc3BsYXk9e2Rpc3BsYXlHaW19IG9uRGlzcGxheT17b25EaXNwbGF5fSBkYXJrVGhlbWU9e2RhcmtUaGVtZX0gLz5cblx0XHRcdFx0XHRcdDxTb2d1bWFWeFBob25lIHJlcG9zPXtyZXBvc30gZGF0YUxvYWRpbmcgc2V0T25EaXNwbGF5PXtkaXNwbGF5R2ltfSBvbkRpc3BsYXk9e29uRGlzcGxheX0gZGFya1RoZW1lPXtkYXJrVGhlbWV9IC8+XG5cdFx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHRcdDxNYWluQm9hcmQgaWQ9XCJib2FyZFwiIG9uRGlzcGxheT17b25EaXNwbGF5fSBhYm91dD17YWJvdXR9IHJlcG9zPXtyZXBvc30gLz5cblx0XHRcdFx0ey8qIDxCb2FyZFBob25lIG9uRGlzcGxheT17b25EaXNwbGF5fSBhYm91dD17YWJvdXR9IHJlcG9zPXtyZXBvc30gLz4gKi99XG5cdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHQgey8qIHtvbkRpc3BsYXkuZGlzcGxheVN0YXRlICYmIDxDYXJkIG9uRGlzcGxheT17b25EaXNwbGF5fSBkYXJrVGhlbWU9e2RhcmtUaGVtZX0gZGlzcGxheUdpbT17ZGlzcGxheUdpbX0gLz59ICovfVxuXHRcdDwvbW90aW9uLmRpdj5cblx0KVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG5cblx0Y29uc3QgcmVzMSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL0pha2VlRGVzdScpO1xuXHRjb25zdCByZXMyID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvSmFrZWVEZXN1L3JlcG9zJyk7XG5cdFxuXHRjb25zdCBhYm91dCA9IGF3YWl0IHJlczEuanNvbigpO1xuXHRjb25zdCByZXBvcyA9IGF3YWl0IHJlczIuanNvbigpO1xuXHQvLyBjb25zb2xlLmxvZyggYnJ1dERhdGEgKVxuXHQvLyBjb25zdCBsb2FkaW5nID0gYnJ1dERhdGEgPyB0cnVlIDogZmFsc2U7XG5cdC8vIGlmIChmZXRjaGVkRGF0YSlcblx0Ly8ge1xuXG5cdC8vIH1cblx0Y29uc3QgZGF0YUxvYWRpbmcgPSAoYWJvdXQgJiYgcmVwb3MpID09PSB1bmRlZmluZWQgPyB0cnVlIDogZmFsc2U7IFxuXHRcblx0cmV0dXJuIHtcblx0XHRwcm9wcyA6IHsgYWJvdXQsIHJlcG9zLCBkYXRhTG9hZGluZyAgfVxuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})