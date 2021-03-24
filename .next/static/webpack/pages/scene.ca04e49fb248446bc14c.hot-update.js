webpackHotUpdate_N_E("pages/scene",{

/***/ "./pages/scene.js":
/*!************************!*\
  !*** ./pages/scene.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Scene; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _goinfre_hmhindat_portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _components_darkSky__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/darkSky */ \"./components/darkSky.js\");\n/* harmony import */ var _components_sogumice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/sogumice */ \"./components/sogumice.js\");\n/* harmony import */ var _components_loloIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/loloIcon */ \"./components/loloIcon.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n\n\n\nvar _jsxFileName = \"/goinfre/hmhindat/portfolio/pages/scene.js\",\n    _s = $RefreshSig$();\n\n\n\n\n // import ImageDisplayer from '../components/imageDisplayer'\n// import DescriptionCard from '../components/descriptionCard'\n// import Image from 'next/Image'\n\nfunction Scene() {\n  _s();\n\n  var _useState = useState(false),\n      _useState2 = Object(_goinfre_hmhindat_portfolio_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useState, 2),\n      openSky = _useState2[0],\n      setOpenSky = _useState2[1];\n\n  var _useViewportScroll = Object(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"useViewportScroll\"])(),\n      scrollYProgress = _useViewportScroll.scrollYProgress;\n\n  var sogumiceScale = Object(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"useTransform\"])(scrollYProgress, [0, 0.3, 1], [0, 1, 0.5]);\n  var sogumiceYoffset = Object(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"useTransform\"])(scrollYProgress, [0, 0.3, 1], [-900, 0, 0]);\n  var skyOpacity = Object(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"useTransform\"])(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);\n  var sogumiceOpacity = Object(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"useTransform\"])(scrollYProgress, [0, 0.3], [0, 1]);\n  useEffect(function () {\n    skyOpacity.onChange(function (v) {\n      return setOpenSky(v >= 1);\n    });\n  }, [skyOpacity]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].div, {\n    className: \"relative flex justify-center items-center h-screen w-full bg-gradient-to-t from-gray-900 to-blue-400 \",\n    style: {\n      opacity: skyOpacity\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].div, {\n      className: \"absolute top-0 left-0 h-full w-full\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_darkSky__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        openSky: openSky,\n        height: \"lg:h-full h-1/2 md:h-2/3\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].div, {\n      className: \"absolute top-1/4\",\n      style: {\n        scale: sogumiceScale,\n        y: sogumiceYoffset,\n        opacity: sogumiceOpacity\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_sogumice__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        height: \"h-36\",\n        width: \"w-36\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"absolute flex justify-center items-center h-32 bottom-1/4 w-full\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        className: \"text-white text-9xl\",\n        children: \"TITLE\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 6\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"absolute flex flex-col justify-center items-center top-3/4 w-full h-1/4 rounded-full\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_loloIcon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        size: 9\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 3\n  }, this);\n}\n\n_s(Scene, \"cPUt1K3ZZOuYj5k1gWH57iePtu0=\", false, function () {\n  return [framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"useViewportScroll\"], framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"useTransform\"], framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"useTransform\"]];\n});\n\n_c = Scene;\n\nvar _c;\n\n$RefreshReg$(_c, \"Scene\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2NlbmUuanM/ZjkxMiJdLCJuYW1lcyI6WyJTY2VuZSIsInVzZVN0YXRlIiwib3BlblNreSIsInNldE9wZW5Ta3kiLCJ1c2VWaWV3cG9ydFNjcm9sbCIsInNjcm9sbFlQcm9ncmVzcyIsInNvZ3VtaWNlU2NhbGUiLCJ1c2VUcmFuc2Zvcm0iLCJzb2d1bWljZVlvZmZzZXQiLCJza3lPcGFjaXR5Iiwic29ndW1pY2VPcGFjaXR5IiwidXNlRWZmZWN0Iiwib25DaGFuZ2UiLCJ2Iiwib3BhY2l0eSIsInNjYWxlIiwieSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBRUE7QUFDQTtBQUNBOztBQUdlLFNBQVNBLEtBQVQsR0FBa0I7QUFBQTs7QUFBQSxrQkFDREMsUUFBUSxDQUFDLEtBQUQsQ0FEUDtBQUFBO0FBQUEsTUFDekJDLE9BRHlCO0FBQUEsTUFDaEJDLFVBRGdCOztBQUFBLDJCQUdKQyx1RUFBaUIsRUFIYjtBQUFBLE1BR3hCQyxlQUh3QixzQkFHeEJBLGVBSHdCOztBQUloQyxNQUFNQyxhQUFhLEdBQUdDLGtFQUFZLENBQUNGLGVBQUQsRUFBa0IsQ0FBQyxDQUFELEVBQUksR0FBSixFQUFTLENBQVQsQ0FBbEIsRUFBK0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLEdBQVAsQ0FBL0IsQ0FBbEM7QUFDQSxNQUFNRyxlQUFlLEdBQUdELGtFQUFZLENBQUNGLGVBQUQsRUFBa0IsQ0FBQyxDQUFELEVBQUksR0FBSixFQUFTLENBQVQsQ0FBbEIsRUFBK0IsQ0FBQyxDQUFDLEdBQUYsRUFBTyxDQUFQLEVBQVUsQ0FBVixDQUEvQixDQUFwQztBQUNBLE1BQU1JLFVBQVUsR0FBR0Ysa0VBQVksQ0FBQ0YsZUFBRCxFQUFrQixDQUFDLENBQUQsRUFBSSxHQUFKLEVBQVMsQ0FBVCxDQUFsQixFQUErQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUEvQixDQUEvQjtBQUNBLE1BQU1LLGVBQWUsR0FBR0gsa0VBQVksQ0FBQ0YsZUFBRCxFQUFrQixDQUFDLENBQUQsRUFBSSxHQUFKLENBQWxCLEVBQTRCLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBNUIsQ0FBcEM7QUFFQU0sV0FBUyxDQUFDLFlBQU07QUFDYkYsY0FBVSxDQUFDRyxRQUFYLENBQW9CLFVBQUFDLENBQUM7QUFBQSxhQUFJVixVQUFVLENBQUVVLENBQUMsSUFBSSxDQUFQLENBQWQ7QUFBQSxLQUFyQjtBQUNGLEdBRlEsRUFFTixDQUFDSixVQUFELENBRk0sQ0FBVDtBQUlBLHNCQUNDLHFFQUFDLG9EQUFELENBQVEsR0FBUjtBQUFZLGFBQVMsRUFBQyx1R0FBdEI7QUFDQSxTQUFLLEVBQ0o7QUFDQ0ssYUFBTyxFQUFHTDtBQURYLEtBRkQ7QUFBQSw0QkFNQyxxRUFBQyxvREFBRCxDQUFRLEdBQVI7QUFBWSxlQUFTLEVBQUMscUNBQXRCO0FBQUEsNkJBRUMscUVBQUMsMkRBQUQ7QUFBUyxlQUFPLEVBQUVQLE9BQWxCO0FBQTJCLGNBQU0sRUFBQztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5ELGVBVUMscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQVksZUFBUyxFQUFDLGtCQUF0QjtBQUNBLFdBQUssRUFDSjtBQUNDYSxhQUFLLEVBQUdULGFBRFQ7QUFFQ1UsU0FBQyxFQUFHUixlQUZMO0FBR0NNLGVBQU8sRUFBR0o7QUFIWCxPQUZEO0FBQUEsNkJBU0MscUVBQUMsNERBQUQ7QUFBVSxjQUFNLEVBQUMsTUFBakI7QUFBeUIsYUFBSyxFQUFDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFURDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkQsZUFxQkM7QUFBSyxlQUFTLEVBQUMsa0VBQWY7QUFBQSw2QkFDRTtBQUFJLGlCQUFTLEVBQUMscUJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBckJELGVBd0JDO0FBQUssZUFBUyxFQUFDLHNGQUFmO0FBQUEsNkJBQ0MscUVBQUMsNERBQUQ7QUFBVSxZQUFJLEVBQUU7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREQ7QUE4QkE7O0dBM0N1QlYsSztVQUdLSSwrRCxFQUNORywwRCxFQUNFQSwwRCxFQUNMQSwwRCxFQUNLQSwwRDs7O0tBUERQLEsiLCJmaWxlIjoiLi9wYWdlcy9zY2VuZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEYXJrU2t5IGZyb20gJy4uL2NvbXBvbmVudHMvZGFya1NreSdcbmltcG9ydCBTb2d1bWljZSBmcm9tICcuLi9jb21wb25lbnRzL3NvZ3VtaWNlJ1xuaW1wb3J0IExvbG9JY29uIGZyb20gJy4uL2NvbXBvbmVudHMvbG9sb0ljb24nXG5pbXBvcnQgeyBtb3Rpb24sIHVzZVRyYW5zZm9ybSwgdXNlVmlld3BvcnRTY3JvbGwsIHVzZU1vdGlvblZhbHVlICB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG4vLyBpbXBvcnQgSW1hZ2VEaXNwbGF5ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9pbWFnZURpc3BsYXllcidcbi8vIGltcG9ydCBEZXNjcmlwdGlvbkNhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9kZXNjcmlwdGlvbkNhcmQnXG4vLyBpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9JbWFnZSdcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTY2VuZSAoKSB7XG5cdGNvbnN0IFtvcGVuU2t5LCBzZXRPcGVuU2t5IF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuXHRjb25zdCB7IHNjcm9sbFlQcm9ncmVzcyB9ID0gdXNlVmlld3BvcnRTY3JvbGwoKTtcblx0Y29uc3Qgc29ndW1pY2VTY2FsZSA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAwLjMsIDFdLCBbMCwgMSwgMC41XSk7XG5cdGNvbnN0IHNvZ3VtaWNlWW9mZnNldCA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAwLjMsIDFdLCBbLTkwMCwgMCwgMF0pO1xuXHRjb25zdCBza3lPcGFjaXR5ID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDAuMywgMV0sIFswLCAxLCAxXSk7XG5cdGNvbnN0IHNvZ3VtaWNlT3BhY2l0eSA9IHVzZVRyYW5zZm9ybShzY3JvbGxZUHJvZ3Jlc3MsIFswLCAwLjNdLCBbMCwgMV0pO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0XHRcdHNreU9wYWNpdHkub25DaGFuZ2UodiA9PiBzZXRPcGVuU2t5KCB2ID49IDEgKSk7XG5cdH0sIFtza3lPcGFjaXR5XSk7XG5cblx0cmV0dXJuIChcblx0XHQ8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLXNjcmVlbiB3LWZ1bGwgYmctZ3JhZGllbnQtdG8tdCBmcm9tLWdyYXktOTAwIHRvLWJsdWUtNDAwIFwiXG5cdFx0c3R5bGU9e1xuXHRcdFx0e1xuXHRcdFx0XHRvcGFjaXR5IDogc2t5T3BhY2l0eVxuXHRcdFx0fVxuXHRcdH0+XG5cdFx0XHQ8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgaC1mdWxsIHctZnVsbFwiXG5cdFx0XHQ+XG5cdFx0XHRcdDxEYXJrU2t5IG9wZW5Ta3k9e29wZW5Ta3l9IGhlaWdodD1cImxnOmgtZnVsbCBoLTEvMiBtZDpoLTIvM1wiLz5cblx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0xLzRcIlxuXHRcdFx0c3R5bGU9e1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c2NhbGUgOiBzb2d1bWljZVNjYWxlLFxuXHRcdFx0XHRcdHkgOiBzb2d1bWljZVlvZmZzZXQsXG5cdFx0XHRcdFx0b3BhY2l0eSA6IHNvZ3VtaWNlT3BhY2l0eVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQ+XG5cdFx0XHRcdDxTb2d1bWljZSBoZWlnaHQ9XCJoLTM2XCIgIHdpZHRoPVwidy0zNlwiLz5cblx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgaC0zMiBib3R0b20tMS80IHctZnVsbFwiPlxuXHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQtOXhsXCIgPlRJVExFPC9oMT5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0b3AtMy80IHctZnVsbCBoLTEvNCByb3VuZGVkLWZ1bGxcIj5cblx0XHRcdFx0PExvbG9JY29uIHNpemU9ezl9Lz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvbW90aW9uLmRpdj5cblx0KVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/scene.js\n");

/***/ })

})