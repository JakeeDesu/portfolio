webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/darkSkyOpen.js":
/*!***********************************!*\
  !*** ./components/darkSkyOpen.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DarkSkyOpen; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n\nvar _jsxFileName = \"/goinfre/hmhindat/portfolio/components/darkSkyOpen.js\";\n\nfunction DarkSkyOpen(_ref) {\n  var height = _ref.height;\n  var variants = {\n    hidden1: {\n      x: '50%',\n      scale: 2\n    },\n    visible1: {\n      x: 0,\n      scale: [1, 0.98],\n      transition: {\n        scale: {\n          type: 'spring',\n          yoyo: Infinity,\n          duration: 1\n        },\n        type: \"spring\",\n        duration: 2.5\n      }\n    },\n    hidden2: {\n      x: '-50%',\n      scale: 2\n    },\n    visible2: {\n      x: 0,\n      scale: [1, 0.98],\n      transition: {\n        scale: {\n          type: 'spring',\n          yoyo: Infinity,\n          duration: 1\n        },\n        type: \"spring\",\n        duration: 2.5\n      }\n    }\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"relative flex flex-col \".concat(height, \" w-full bg-gradient-to-b from-gray-900 to-blue-400  overflow-hidden\"),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"relative h-1/3 w-full bg-gradient-to-b from-gray-900 to-blue-400 \",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n        className: \"absolute top-1/4 -left-1/4 h-xfull w-3/4 rounded-fullp4   bg-gray-900\",\n        initial: \"hidden1\",\n        animate: \"visible1\",\n        variants: variants\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 6\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__[\"motion\"].div, {\n        className: \"absolute top-1/4 -right-1/4 h-2xfull w-3/4 rounded-fullp4  bg-gray-900\",\n        initial: \"hidden2\",\n        animate: \"visible2\",\n        variants: variants\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 6\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 5\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"h-2/3 bg-gray-900 w-full\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 5\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 3\n  }, this);\n}\n_c = DarkSkyOpen;\n\nvar _c;\n\n$RefreshReg$(_c, \"DarkSkyOpen\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXJrU2t5T3Blbi5qcz8wYjMzIl0sIm5hbWVzIjpbIkRhcmtTa3lPcGVuIiwiaGVpZ2h0IiwidmFyaWFudHMiLCJoaWRkZW4xIiwieCIsInNjYWxlIiwidmlzaWJsZTEiLCJ0cmFuc2l0aW9uIiwidHlwZSIsInlveW8iLCJJbmZpbml0eSIsImR1cmF0aW9uIiwiaGlkZGVuMiIsInZpc2libGUyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxXQUFULE9BQWlDO0FBQUEsTUFBVkMsTUFBVSxRQUFWQSxNQUFVO0FBRS9DLE1BQU1DLFFBQVEsR0FBRztBQUVoQkMsV0FBTyxFQUFFO0FBQ1JDLE9BQUMsRUFBRSxLQURLO0FBRVJDLFdBQUssRUFBRTtBQUZDLEtBRk87QUFNaEJDLFlBQVEsRUFBRTtBQUNURixPQUFDLEVBQUcsQ0FESztBQUVUQyxXQUFLLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixDQUZFO0FBR1RFLGdCQUFVLEVBQUU7QUFDWEYsYUFBSyxFQUFHO0FBQ1BHLGNBQUksRUFBRSxRQURDO0FBRVBDLGNBQUksRUFBR0MsUUFGQTtBQUdQQyxrQkFBUSxFQUFHO0FBSEosU0FERztBQU1YSCxZQUFJLEVBQUUsUUFOSztBQU9YRyxnQkFBUSxFQUFFO0FBUEM7QUFISCxLQU5NO0FBbUJoQkMsV0FBTyxFQUFFO0FBQ1JSLE9BQUMsRUFBRSxNQURLO0FBRVJDLFdBQUssRUFBRTtBQUZDLEtBbkJPO0FBdUJoQlEsWUFBUSxFQUFFO0FBQ1RULE9BQUMsRUFBRyxDQURLO0FBRVRDLFdBQUssRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLENBRkU7QUFHVEUsZ0JBQVUsRUFBRTtBQUNYRixhQUFLLEVBQUc7QUFDUEcsY0FBSSxFQUFFLFFBREM7QUFFUEMsY0FBSSxFQUFHQyxRQUZBO0FBR1BDLGtCQUFRLEVBQUc7QUFISixTQURHO0FBTVhILFlBQUksRUFBRSxRQU5LO0FBT1hHLGdCQUFRLEVBQUU7QUFQQztBQUhIO0FBdkJNLEdBQWpCO0FBc0NBLHNCQUNDO0FBQUssYUFBUyxtQ0FBNEJWLE1BQTVCLHdFQUFkO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLHFFQUFkO0FBQUEsOEJBQ0MscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0MsaUJBQVMsRUFBQyx1RUFEWDtBQUVDLGVBQU8sRUFBQyxTQUZUO0FBR0MsZUFBTyxFQUFDLFVBSFQ7QUFJQyxnQkFBUSxFQUFFQztBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxlQU9DLHFFQUFDLG9EQUFELENBQVEsR0FBUjtBQUNDLGlCQUFTLEVBQUMsd0VBRFg7QUFFQyxlQUFPLEVBQUMsU0FGVDtBQUdDLGVBQU8sRUFBQyxVQUhUO0FBSUMsZ0JBQVEsRUFBRUE7QUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFlRTtBQUFLLGVBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQXNCQTtLQTlEdUJGLFciLCJmaWxlIjoiLi9jb21wb25lbnRzL2RhcmtTa3lPcGVuLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFya1NreU9wZW4oeyBoZWlnaHQgfSkge1xuXG5cdGNvbnN0IHZhcmlhbnRzID0ge1xuXG5cdFx0aGlkZGVuMToge1xuXHRcdFx0eDogJzUwJScsXG5cdFx0XHRzY2FsZTogMlxuXHRcdH0sXG5cdFx0dmlzaWJsZTE6IHtcblx0XHRcdHggOiAwLFxuXHRcdFx0c2NhbGU6IFsxLCAwLjk4XSxcblx0XHRcdHRyYW5zaXRpb246IHtcblx0XHRcdFx0c2NhbGUgOiB7XG5cdFx0XHRcdFx0dHlwZTogJ3NwcmluZycsXG5cdFx0XHRcdFx0eW95byA6IEluZmluaXR5LFxuXHRcdFx0XHRcdGR1cmF0aW9uIDogMSxcblx0XHRcdFx0fSxcblx0XHRcdFx0dHlwZTogXCJzcHJpbmdcIixcblx0XHRcdFx0ZHVyYXRpb246IDIuNSxcblx0XHRcdH1cblx0XHR9LFxuXHRcdGhpZGRlbjI6IHtcblx0XHRcdHg6ICctNTAlJyxcblx0XHRcdHNjYWxlOiAyXG5cdFx0fSxcblx0XHR2aXNpYmxlMjoge1xuXHRcdFx0eCA6IDAsXG5cdFx0XHRzY2FsZTogWzEsIDAuOThdLFxuXHRcdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0XHRzY2FsZSA6IHtcblx0XHRcdFx0XHR0eXBlOiAnc3ByaW5nJyxcblx0XHRcdFx0XHR5b3lvIDogSW5maW5pdHksXG5cdFx0XHRcdFx0ZHVyYXRpb24gOiAxLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR0eXBlOiBcInNwcmluZ1wiLFxuXHRcdFx0XHRkdXJhdGlvbjogMi41LFxuXHRcdFx0fVxuXHRcdH0sXG5cblx0fVxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtgcmVsYXRpdmUgZmxleCBmbGV4LWNvbCAke2hlaWdodH0gdy1mdWxsIGJnLWdyYWRpZW50LXRvLWIgZnJvbS1ncmF5LTkwMCB0by1ibHVlLTQwMCAgb3ZlcmZsb3ctaGlkZGVuYH0gPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YHJlbGF0aXZlIGgtMS8zIHctZnVsbCBiZy1ncmFkaWVudC10by1iIGZyb20tZ3JheS05MDAgdG8tYmx1ZS00MDAgYH0+XG5cdFx0XHRcdFx0PG1vdGlvbi5kaXZcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0xLzQgLWxlZnQtMS80IGgteGZ1bGwgdy0zLzQgcm91bmRlZC1mdWxscDQgICBiZy1ncmF5LTkwMFwiXG5cdFx0XHRcdFx0XHRpbml0aWFsPVwiaGlkZGVuMVwiXG5cdFx0XHRcdFx0XHRhbmltYXRlPVwidmlzaWJsZTFcIlxuXHRcdFx0XHRcdFx0dmFyaWFudHM9e3ZhcmlhbnRzfVxuXHRcdFx0XHRcdD48L21vdGlvbi5kaXY+XG5cdFx0XHRcdFx0PG1vdGlvbi5kaXZcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0xLzQgLXJpZ2h0LTEvNCBoLTJ4ZnVsbCB3LTMvNCByb3VuZGVkLWZ1bGxwNCAgYmctZ3JheS05MDBcIlxuXHRcdFx0XHRcdFx0aW5pdGlhbD1cImhpZGRlbjJcIlxuXHRcdFx0XHRcdFx0YW5pbWF0ZT1cInZpc2libGUyXCJcblx0XHRcdFx0XHRcdHZhcmlhbnRzPXt2YXJpYW50c31cblx0XHRcdFx0XHQ+PC9tb3Rpb24uZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoLTIvMyBiZy1ncmF5LTkwMCB3LWZ1bGxcIj5cblxuXHRcdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblxuXHQpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/darkSkyOpen.js\n");

/***/ })

})