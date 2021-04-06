webpackHotUpdate_N_E("pages/index",{

/***/ "./components/sogumaVx.tsx":
/*!*********************************!*\
  !*** ./components/sogumaVx.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SogumaVx; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n/* harmony import */ var _gim__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gim */ \"./components/gim.tsx\");\n/* harmony import */ var _soguma__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./soguma */ \"./components/soguma.tsx\");\n/* harmony import */ var _gimProps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gimProps */ \"./components/gimProps.js\");\n\n\n\nvar _jsxFileName = \"/home/hamza/Desktop/portfolio/components/sogumaVx.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n // gims props\n\nvar variants = {\n  initial: function initial(onDisplay) {\n    if (onDisplay.displayState) return {\n      y: 0,\n      scale: 1\n    };else return {\n      y: -100,\n      //-410,\n      scale: 0.7 //0.1,\n\n    };\n  },\n  standing: function standing(onDisplay) {\n    if (onDisplay.displayState) return {\n      scale: [1, 0.7],\n      y: [0, -100],\n      transition: {\n        scale: {\n          delay: 0.3,\n          duration: 1\n        },\n        y: {\n          delay: 0.3,\n          duration: 1\n        }\n      }\n    };else return {\n      y: 0,\n      // x: 0,\n      scale: 1,\n      transition: {\n        // duration: 0.5,\n        scale: {\n          delay: 0.3,\n          duration: 1\n        },\n        y: {\n          delay: 0.3,\n          duration: 1\n        }\n      }\n    };\n  }\n};\nvar data = [\"art\", \"about me\", \"p1\"];\nfunction SogumaVx(_ref) {\n  _s();\n\n  var _this = this;\n\n  var setOnDisplay = _ref.setOnDisplay,\n      onDisplay = _ref.onDisplay,\n      darkTheme = _ref.darkTheme;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([0, 0]),\n      _useState$ = Object(_home_hamza_Desktop_portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState[0], 2),\n      direction = _useState$[0],\n      steps = _useState$[1],\n      setRotate = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true),\n      clickOff = _useState2[0],\n      setClickOff = _useState2[1];\n\n  var moveGims = function moveGims(newDirection) {\n    setRotate([newDirection, steps + newDirection]);\n  };\n\n  var onSogumaClick = function onSogumaClick() {\n    // if (clickOff)\n    // {\n    // \tsetClickOff(false)\n    // \tsetTimeout(() => { setClickOff(true)}, 1000)\n    switch (onDisplay.type) {\n      case -1:\n        setOnDisplay(true, onDisplay.itemId, 0);\n        break;\n\n      case 0:\n        setOnDisplay(true, onDisplay.itemId, -1);\n        break;\n\n      case 1:\n        if (!onDisplay.displayOff) onDisplay.displayState ? setOnDisplay(false, -1, 1) : moveGims(-1);\n        break;\n\n      case 2:\n        break;\n    } // }\n\n  };\n\n  var onDisplayKey = onDisplay.displayState ? 1 : 0;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n    className: \"relative flex flex-col justify-start items-center h-full w-full \",\n    initial: \"initial\",\n    animate: \"standing\",\n    custom: onDisplay,\n    variants: variants,\n    children: [onDisplay.type === 1 && _gimProps__WEBPACK_IMPORTED_MODULE_6__[\"gimsProps\"].map(function (gim) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_gim__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        gimId: gim.id,\n        data: data,\n        direction: direction,\n        steps: steps,\n        moveGims: moveGims,\n        setOnDisplay: setOnDisplay,\n        onDisplay: onDisplay,\n        darkTheme: darkTheme\n      }, gim.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 5\n      }, _this);\n    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"absolute flex flex-col justify-center items-center h-full w-full\" // key={onDisplay.type}\n      // initial={{\n      // \t// scaleY : 0,\n      // \ty : -100,\n      // }}\n      // animate={{\n      // \ty : 0,\n      // \t// scaleY : 1,\n      // }}\n      // exit={{\n      // \ty : -100,\n      // \t// scaleY : 0\n      // }}\n      // transition={{\n      // \tduration : 0.5\n      // }}\n      ,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n        className: \"absolute text-center text-white font-black  flex flex-col justify-end items-center h-100 w-48 bg-gradient-to-b  from-gray-500 to-gray-400 bg-opacity-5 rounded-b-full top-36 pb-11\",\n        initial: {\n          opacity: 1,\n          y: 0,\n          scaleY: 0,\n          scaleX: 1,\n          originY: 0,\n          originX: \"50%\"\n        },\n        animate: onDisplay.type === 0 ? {\n          // borderRadius : '50%',\n          opacity: 1,\n          y: 0,\n          scaleY: [0.9, 1],\n          scaleX: [1, 1.01],\n          originY: 0,\n          originX: \"50%\",\n          transition: {\n            scaleX: {\n              duration: 0.8,\n              repeat: Infinity,\n              repeatType: 'reverse',\n              type: 'spring',\n              bounce: 0.4\n            },\n            scaleY: {\n              duration: 0.8,\n              repeat: Infinity,\n              repeatType: 'reverse',\n              type: 'spring',\n              bounce: 0.4\n            },\n            duration: 0.4,\n            delay: 0.3\n          }\n        } : {\n          // borderRadius : '50%',\n          opacity: 0,\n          y: 0,\n          scaleY: 0,\n          scaleX: 1,\n          originY: 0,\n          originX: \"50%\",\n          transition: {\n            // scaleX : { duration : 0.3, repeat : Infinity, repeatType: 'reverse', type : 'spring', bounce: 0.4,},\n            // scaleY : { duration : 0.3, repeat : Infinity, repeatType: 'reverse', type : 'spring', bounce: 0.4,},\n            duration: 0.4\n          }\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          className: \" text-center m-5 text-2xl cursor-pointer\",\n          children: \"ABOUT ME\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 164,\n          columnNumber: 6\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          className: \" m-5 text-2xl cursor-pointer\",\n          children: \"MY PROJECTS\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 165,\n          columnNumber: 6\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          className: \" m-5 text-2xl line-through cursor-pointer\",\n          children: \"ART\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 166,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 5\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_3__[\"motion\"].div, {\n        className: \"absolute w-64 top-36 opacity-30\",\n        initial: {\n          y: -10\n        },\n        animate: onDisplay.type === 0 ? {\n          scale: 1,\n          y: 0,\n          transition: {\n            duration: 0.4\n          }\n        } : {\n          scale: 0.9,\n          y: -100,\n          transition: {\n            duration: 0.4,\n            delay: 0.5\n          }\n        } // transition={{\n        // duration : 0.5\n        // }}\n        ,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: \"/teeth.png\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 193,\n          columnNumber: 6\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 170,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_soguma__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      onDisplay: onDisplay,\n      darkTheme: darkTheme,\n      onSogumaClick: onSogumaClick\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 199,\n      columnNumber: 4\n    }, this)]\n  }, onDisplayKey, true, {\n    fileName: _jsxFileName,\n    lineNumber: 83,\n    columnNumber: 3\n  }, this);\n}\n\n_s(SogumaVx, \"lTbNSIOy3UAS4Pf3w/kdgjGEVhw=\");\n\n_c = SogumaVx;\n\nvar _c;\n\n$RefreshReg$(_c, \"SogumaVx\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zb2d1bWFWeC50c3g/NmJhYiJdLCJuYW1lcyI6WyJ2YXJpYW50cyIsImluaXRpYWwiLCJvbkRpc3BsYXkiLCJkaXNwbGF5U3RhdGUiLCJ5Iiwic2NhbGUiLCJzdGFuZGluZyIsInRyYW5zaXRpb24iLCJkZWxheSIsImR1cmF0aW9uIiwiZGF0YSIsIlNvZ3VtYVZ4Iiwic2V0T25EaXNwbGF5IiwiZGFya1RoZW1lIiwidXNlU3RhdGUiLCJkaXJlY3Rpb24iLCJzdGVwcyIsInNldFJvdGF0ZSIsImNsaWNrT2ZmIiwic2V0Q2xpY2tPZmYiLCJtb3ZlR2ltcyIsIm5ld0RpcmVjdGlvbiIsIm9uU29ndW1hQ2xpY2siLCJ0eXBlIiwiaXRlbUlkIiwiZGlzcGxheU9mZiIsIm9uRGlzcGxheUtleSIsImdpbXNQcm9wcyIsIm1hcCIsImdpbSIsImlkIiwib3BhY2l0eSIsInNjYWxlWSIsInNjYWxlWCIsIm9yaWdpblkiLCJvcmlnaW5YIiwicmVwZWF0IiwiSW5maW5pdHkiLCJyZXBlYXRUeXBlIiwiYm91bmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBSXVDOztBQUV2QyxJQUFNQSxRQUFRLEdBQUc7QUFDaEJDLFNBQU8sRUFBRSxpQkFBQ0MsU0FBRCxFQUFvQjtBQUM1QixRQUFJQSxTQUFTLENBQUNDLFlBQWQsRUFDQyxPQUFPO0FBQ05DLE9BQUMsRUFBRSxDQURHO0FBRU5DLFdBQUssRUFBRTtBQUZELEtBQVAsQ0FERCxLQU1DLE9BQU87QUFDTkQsT0FBQyxFQUFFLENBQUMsR0FERTtBQUNFO0FBQ1JDLFdBQUssRUFBRSxHQUZELENBRUs7O0FBRkwsS0FBUDtBQUlELEdBWmU7QUFhaEJDLFVBQVEsRUFBRSxrQkFBQ0osU0FBRCxFQUFvQjtBQUM3QixRQUFJQSxTQUFTLENBQUNDLFlBQWQsRUFDQyxPQUFPO0FBQ05FLFdBQUssRUFBRSxDQUFDLENBQUQsRUFBSSxH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QUNISixlQUFLLEVBQUcsR0FETDtBQUVIRCxXQUFDLEVBQUcsQ0FBQyxHQUZGO0FBR0hHLG9CQUFVLEVBQUc7QUFDWkUsb0JBQVEsRUFBRyxHQURDO0FBRVpELGlCQUFLLEVBQUc7QUFGSTtBQUhWLFNBWEwsQ0FtQkM7QUFDQztBQUNEO0FBckJEO0FBQUEsK0JBdUJDO0FBQUssYUFBRyxFQUFDO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXZCRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRCRCxlQW9IQyxxRUFBQywrQ0FBRDtBQUNDLGVBQVMsRUFBRU4sU0FEWjtBQUVDLGVBQVMsRUFBRVcsU0FGWjtBQUdDLG1CQUFhLEVBQUVTO0FBSGhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFwSEQ7QUFBQSxLQUVNSSxZQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQTRIQTs7R0E1SnVCZixROztLQUFBQSxRIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9zb2d1bWFWeC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtb3Rpb24sIHVzZVRyYW5zZm9ybSwgdXNlVmlld3BvcnRTY3JvbGwsIHVzZU1vdGlvblZhbHVlLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tICdmcmFtZXItbW90aW9uJ1xuaW1wb3J0IEdpbSBmcm9tICcuL2dpbSdcbmltcG9ydCBTb2d1bWEgZnJvbSAnLi9zb2d1bWEnXG5pbXBvcnQgeyB3cmFwIH0gZnJvbSAncG9wbW90aW9uJ1xuaW1wb3J0IFNvZ3VtYUV5ZSBmcm9tICcuL3N1Z3VtYUV5ZSdcbmltcG9ydCB7IHRoZW1lIH0gZnJvbSAnLi90aGVtZSdcbmltcG9ydCB7IGdpbXNQcm9wcyB9IGZyb20gJy4vZ2ltUHJvcHMnIC8vIGdpbXMgcHJvcHNcblxuY29uc3QgdmFyaWFudHMgPSB7XG5cdGluaXRpYWw6IChvbkRpc3BsYXk6IGFueSkgPT4ge1xuXHRcdGlmIChvbkRpc3BsYXkuZGlzcGxheVN0YXRlKVxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0eTogMCxcblx0XHRcdFx0c2NhbGU6IDEsXG5cdFx0XHR9XG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0eTogLTEwMCwvLy00MTAsXG5cdFx0XHRcdHNjYWxlOiAwLjcsLy8wLjEsXG5cdFx0XHR9O1xuXHR9LFxuXHRzdGFuZGluZzogKG9uRGlzcGxheTogYW55KSA9PiB7XG5cdFx0aWYgKG9uRGlzcGxheS5kaXNwbGF5U3RhdGUpXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRzY2FsZTogWzEsIDAuN10sXG5cdFx0XHRcdHk6IFswLCAtMTAwXSxcblx0XHRcdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0XHRcdHNjYWxlOiB7IGRlbGF5OiAwLjMsIGR1cmF0aW9uOiAxIH0sXG5cdFx0XHRcdFx0eTogeyBkZWxheTogMC4zLCBkdXJhdGlvbjogMSB9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRlbHNlXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR5OiAwLFxuXHRcdFx0XHQvLyB4OiAwLFxuXHRcdFx0XHRzY2FsZTogMSxcblx0XHRcdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0XHRcdC8vIGR1cmF0aW9uOiAwLjUsXG5cdFx0XHRcdFx0c2NhbGU6IHsgZGVsYXk6IDAuMywgZHVyYXRpb246IDEgfSxcblx0XHRcdFx0XHR5OiB7IGRlbGF5OiAwLjMsIGR1cmF0aW9uOiAxIH1cblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0fSxcbn1cblxuXG5jb25zdCBkYXRhID0gW1wiYXJ0XCIsIFwiYWJvdXQgbWVcIiwgXCJwMVwiLF1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU29ndW1hVngoeyBzZXRPbkRpc3BsYXksIG9uRGlzcGxheSwgZGFya1RoZW1lIH0pIHtcblxuXHRjb25zdCBbW2RpcmVjdGlvbiwgc3RlcHNdLCBzZXRSb3RhdGVdID0gdXNlU3RhdGUoWzAsIDBdKTtcblx0Y29uc3QgW2NsaWNrT2ZmLCBzZXRDbGlja09mZl0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuXG5cdGNvbnN0IG1vdmVHaW1zID0gKG5ld0RpcmVjdGlvbjogbnVtYmVyKSA9PiB7XG5cdFx0c2V0Um90YXRlKFtuZXdEaXJlY3Rpb24sIHN0ZXBzICsgbmV3RGlyZWN0aW9uXSk7XG5cdH1cblxuXHRjb25zdCBvblNvZ3VtYUNsaWNrID0gKCkgPT4ge1xuXHRcdC8vIGlmIChjbGlja09mZilcblx0XHQvLyB7XG5cdFx0Ly8gXHRzZXRDbGlja09mZihmYWxzZSlcblx0XHQvLyBcdHNldFRpbWVvdXQoKCkgPT4geyBzZXRDbGlja09mZih0cnVlKX0sIDEwMDApXG5cdFx0XHRzd2l0Y2ggKG9uRGlzcGxheS50eXBlKSB7XG5cdFx0XHRcdGNhc2UgIC0xIDpcblx0XHRcdFx0XHRzZXRPbkRpc3BsYXkodHJ1ZSwgb25EaXNwbGF5Lml0ZW1JZCwgMClcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAgMCA6XG5cdFx0XHRcdFx0c2V0T25EaXNwbGF5KHRydWUsIG9uRGlzcGxheS5pdGVtSWQsIC0xKVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICAxIDpcblx0XHRcdFx0XHRcdGlmICghb25EaXNwbGF5LmRpc3BsYXlPZmYpXG5cdFx0XHRcdFx0XHRcdG9uRGlzcGxheS5kaXNwbGF5U3RhdGUgPyBzZXRPbkRpc3BsYXkoZmFsc2UsIC0xLCAxKSA6IG1vdmVHaW1zKC0xKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAgMiA6XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0Ly8gfVxuXHR9XG5cdGNvbnN0IG9uRGlzcGxheUtleSA9IG9uRGlzcGxheS5kaXNwbGF5U3RhdGUgPyAxIDogMDtcblx0cmV0dXJuIChcblx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0Y2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LXN0YXJ0IGl0ZW1zLWNlbnRlciBoLWZ1bGwgdy1mdWxsIFwiXG5cdFx0XHRrZXk9e29uRGlzcGxheUtleX1cblx0XHRcdGluaXRpYWw9XCJpbml0aWFsXCJcblx0XHRcdGFuaW1hdGU9XCJzdGFuZGluZ1wiXG5cdFx0XHRjdXN0b209e29uRGlzcGxheX1cblx0XHRcdHZhcmlhbnRzPXt2YXJpYW50c31cblx0XHQ+XG5cdFx0XHR7b25EaXNwbGF5LnR5cGUgPT09IDEgJiYgZ2ltc1Byb3BzLm1hcCgoZ2ltKSA9PiAoXG5cdFx0XHRcdDxHaW1cblx0XHRcdFx0XHRrZXk9e2dpbS5pZH1cblx0XHRcdFx0XHRnaW1JZD17Z2ltLmlkfVxuXHRcdFx0XHRcdGRhdGE9e2RhdGF9XG5cdFx0XHRcdFx0ZGlyZWN0aW9uPXtkaXJlY3Rpb259XG5cdFx0XHRcdFx0c3RlcHM9e3N0ZXBzfVxuXHRcdFx0XHRcdG1vdmVHaW1zPXttb3ZlR2ltc31cblx0XHRcdFx0XHRzZXRPbkRpc3BsYXk9e3NldE9uRGlzcGxheX1cblx0XHRcdFx0XHRvbkRpc3BsYXk9e29uRGlzcGxheX1cblx0XHRcdFx0XHRkYXJrVGhlbWU9e2RhcmtUaGVtZX1cblx0XHRcdFx0Lz5cblx0XHRcdCkpfVxuXHRcdFx0ey8qIDxBbmltYXRlUHJlc2VuY2UgPiAqL31cblx0XHRcdDxkaXZcblx0XHRcdFx0Y2xhc3NOYW1lPVwiYWJzb2x1dGUgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC1mdWxsIHctZnVsbFwiXG5cdFx0XHRcdC8vIGtleT17b25EaXNwbGF5LnR5cGV9XG5cdFx0XHRcdC8vIGluaXRpYWw9e3tcblx0XHRcdFx0Ly8gXHQvLyBzY2FsZVkgOiAwLFxuXHRcdFx0XHQvLyBcdHkgOiAtMTAwLFxuXHRcdFx0XHQvLyB9fVxuXHRcdFx0XHQvLyBhbmltYXRlPXt7XG5cdFx0XHRcdC8vIFx0eSA6IDAsXG5cdFx0XHRcdC8vIFx0Ly8gc2NhbGVZIDogMSxcblx0XHRcdFx0Ly8gfX1cblx0XHRcdFx0Ly8gZXhpdD17e1xuXHRcdFx0XHQvLyBcdHkgOiAtMTAwLFxuXHRcdFx0XHQvLyBcdC8vIHNjYWxlWSA6IDBcblx0XHRcdFx0Ly8gfX1cblx0XHRcdFx0Ly8gdHJhbnNpdGlvbj17e1xuXHRcdFx0XHQvLyBcdGR1cmF0aW9uIDogMC41XG5cdFx0XHRcdC8vIH19XG5cdFx0XHQ+XG5cdFx0XHRcdDxtb3Rpb24uZGl2IFxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImFic29sdXRlIHRleHQtY2VudGVyIHRleHQtd2hpdGUgZm9udC1ibGFjayAgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWVuZCBpdGVtcy1jZW50ZXIgaC0xMDAgdy00OCBiZy1ncmFkaWVudC10by1iICBmcm9tLWdyYXktNTAwIHRvLWdyYXktNDAwIGJnLW9wYWNpdHktNSByb3VuZGVkLWItZnVsbCB0b3AtMzYgcGItMTFcIlxuXHRcdFx0XHRcdGluaXRpYWw9e3tcblx0XHRcdFx0XHRcdG9wYWNpdHkgOiAxLFxuXHRcdFx0XHRcdFx0eTogMCxcblx0XHRcdFx0XHRcdHNjYWxlWTogMCxcblx0XHRcdFx0XHRcdHNjYWxlWCA6IDEsXG5cdFx0XHRcdFx0XHRvcmlnaW5ZIDogMCxcblx0XHRcdFx0XHRcdG9yaWdpblggOiBcIjUwJVwiLFxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0YW5pbWF0ZT17b25EaXNwbGF5LnR5cGUgPT09IDAgPyB7XG5cdFx0XHRcdFx0XHQvLyBib3JkZXJSYWRpdXMgOiAnNTAlJyxcblx0XHRcdFx0XHRcdG9wYWNpdHkgOiAxLFxuXHRcdFx0XHRcdFx0eTogMCxcblx0XHRcdFx0XHRcdHNjYWxlWTogWzAuOSwxXSxcblx0XHRcdFx0XHRcdHNjYWxlWCA6IFsxLDEuMDFdLFxuXHRcdFx0XHRcdFx0b3JpZ2luWSA6IDAsXG5cdFx0XHRcdFx0XHRvcmlnaW5YIDogXCI1MCVcIixcblx0XHRcdFx0XHRcdHRyYW5zaXRpb24gOntcblx0XHRcdFx0XHRcdFx0c2NhbGVYIDogeyBkdXJhdGlvbiA6IDAuOCwgcmVwZWF0IDogSW5maW5pdHksIHJlcGVhdFR5cGU6ICdyZXZlcnNlJywgdHlwZSA6ICdzcHJpbmcnLCBib3VuY2U6IDAuNCx9LFxuXHRcdFx0XHRcdFx0XHRzY2FsZVkgOiB7IGR1cmF0aW9uIDogMC44LCByZXBlYXQgOiBJbmZpbml0eSwgcmVwZWF0VHlwZTogJ3JldmVyc2UnLCB0eXBlIDogJ3NwcmluZycsIGJvdW5jZTogMC40LH0sXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uIDogMC40LFxuXHRcdFx0XHRcdFx0XHRkZWxheSA6IDAuM1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gOiB7XG5cdFx0XHRcdFx0XHQvLyBib3JkZXJSYWRpdXMgOiAnNTAlJyxcblx0XHRcdFx0XHRcdG9wYWNpdHkgOiAwLFxuXHRcdFx0XHRcdFx0eTogMCxcblx0XHRcdFx0XHRcdHNjYWxlWTogIDAsXG5cdFx0XHRcdFx0XHRzY2FsZVggOiAxLFxuXHRcdFx0XHRcdFx0b3JpZ2luWSA6IDAsXG5cdFx0XHRcdFx0XHRvcmlnaW5YIDogXCI1MCVcIixcblx0XHRcdFx0XHRcdHRyYW5zaXRpb24gOntcblx0XHRcdFx0XHRcdFx0Ly8gc2NhbGVYIDogeyBkdXJhdGlvbiA6IDAuMywgcmVwZWF0IDogSW5maW5pdHksIHJlcGVhdFR5cGU6ICdyZXZlcnNlJywgdHlwZSA6ICdzcHJpbmcnLCBib3VuY2U6IDAuNCx9LFxuXHRcdFx0XHRcdFx0XHQvLyBzY2FsZVkgOiB7IGR1cmF0aW9uIDogMC4zLCByZXBlYXQgOiBJbmZpbml0eSwgcmVwZWF0VHlwZTogJ3JldmVyc2UnLCB0eXBlIDogJ3NwcmluZycsIGJvdW5jZTogMC40LH0sXG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uIDogMC40LFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH19XG5cblx0XHRcdFx0PlxuXHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCIgdGV4dC1jZW50ZXIgbS01IHRleHQtMnhsIGN1cnNvci1wb2ludGVyXCI+QUJPVVQgTUU8L2gxPlxuXHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCIgbS01IHRleHQtMnhsIGN1cnNvci1wb2ludGVyXCI+TVkgUFJPSkVDVFM8L2gxPlxuXHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCIgbS01IHRleHQtMnhsIGxpbmUtdGhyb3VnaCBjdXJzb3ItcG9pbnRlclwiPkFSVDwvaDE+XG5cdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdFx0ey8qIDwvQW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0PEFuaW1hdGVQcmVzZW5jZT4gKi99XG5cdFx0XHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYWJzb2x1dGUgdy02NCB0b3AtMzYgb3BhY2l0eS0zMFwiXG5cdFx0XHRcdFx0aW5pdGlhbD17e1xuXHRcdFx0XHRcdFx0eTogLTEwLFxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0YW5pbWF0ZT17b25EaXNwbGF5LnR5cGUgPT09IDAgPyAge1xuXHRcdFx0XHRcdFx0c2NhbGUgOiAxLFxuXHRcdFx0XHRcdFx0eSA6IDAsXG5cdFx0XHRcdFx0XHR0cmFuc2l0aW9uIDoge1xuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbiA6IDAuNCxcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IDoge1xuXHRcdFx0XHRcdFx0c2NhbGUgOiAwLjksXG5cdFx0XHRcdFx0XHR5IDogLTEwMCxcblx0XHRcdFx0XHRcdHRyYW5zaXRpb24gOiB7XG5cdFx0XHRcdFx0XHRcdGR1cmF0aW9uIDogMC40LFxuXHRcdFx0XHRcdFx0XHRkZWxheSA6IDAuNSxcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0Ly8gdHJhbnNpdGlvbj17e1xuXHRcdFx0XHRcdFx0Ly8gZHVyYXRpb24gOiAwLjVcblx0XHRcdFx0XHQvLyB9fVxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0PGltZyBzcmM9XCIvdGVldGgucG5nXCIgLz5cblx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXG5cdFx0XHQ8L2Rpdj5cblx0XHRcdHsvKiA8L0FuaW1hdGVQcmVzZW5jZT4gKi99XG5cblx0XHRcdDxTb2d1bWFcblx0XHRcdFx0b25EaXNwbGF5PXtvbkRpc3BsYXl9XG5cdFx0XHRcdGRhcmtUaGVtZT17ZGFya1RoZW1lfVxuXHRcdFx0XHRvblNvZ3VtYUNsaWNrPXtvblNvZ3VtYUNsaWNrfVxuXHRcdFx0Lz5cblx0XHQ8L21vdGlvbi5kaXY+XG5cdCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/sogumaVx.tsx\n");

/***/ })

})