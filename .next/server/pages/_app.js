module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+RKv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Scene; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_darkSky__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/+fQ");
/* harmony import */ var _components_sogumice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFSf");
/* harmony import */ var _components_loloIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("sDNB");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("wmQq");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);






 // import ImageDisplayer from '../components/imageDisplayer'
// import DescriptionCard from '../components/descriptionCard'
// import Image from 'next/Image'

function Scene() {
  const {
    scrollYProgress
  } = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__["useViewportScroll"])(); // const sceneScale = useTransform(scrollYProgress, [0,0.5, 1], [2, 0.5 ,2, 1]);

  const sogumiceScale = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__["useTransform"])(scrollYProgress, [0, 0.2, 0.5, 1], [0.1, 0.5, 2, 1]);
  const sogumiceYoffset = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__["useTransform"])(scrollYProgress, [0, 0.2, 0.5, 1], [-500, 10, 0, -50]);
  const skyOpacity = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__["useTransform"])(scrollYProgress, [0, 0.3, 0.5, 1], [0, 1, 1, 1]);
  const sogumiceOpacity = Object(framer_motion__WEBPACK_IMPORTED_MODULE_4__["useTransform"])(scrollYProgress, [0, 0.2, 0.5, 1], [0, 1, 1, 1]);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(() => {}, []);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
    className: "relative flex justify-center items-center h-screen w-full bg-gradient-to-t from-gray-900 to-blue-400 " // style={
    // 	{
    // 		scale : sceneScale,
    // 	}
    // }			
    ,
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
      className: "absolute top-0 left-0 h-full w-full",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_darkSky__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
        height: "lg:h-full h-1/2 md:h-2/3"
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, {
      className: "absolute top-1/4",
      style: {
        scale: sogumiceScale,
        y: sogumiceYoffset,
        opacity: sogumiceOpacity
      },
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
        className: "text-white text-lg"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_sogumice__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
        height: "h-36",
        width: "w-36"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "absolute flex justify-center items-center h-32 bottom-1/4 w-full",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("h1", {
        className: "text-white text-9xl",
        children: "TITLE"
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "absolute flex flex-col justify-center items-center top-3/4 w-full h-1/4 rounded-full",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(_components_loloIcon__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
        size: 9
      })
    })]
  });
}

/***/ }),

/***/ "/+fQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DarkSky; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wmQq");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);



function DarkSky({
  openSky,
  height
}) {
  // const x1 = useMotionValue(0)
  // const x2 = useMotionValue(0)
  const {
    scrollYProgress
  } = Object(framer_motion__WEBPACK_IMPORTED_MODULE_1__["useViewportScroll"])();
  const skyScale = Object(framer_motion__WEBPACK_IMPORTED_MODULE_1__["useTransform"])(scrollYProgress, [0, 0.5, 1], [2, 1, 1]);
  const sky1offsetX = Object(framer_motion__WEBPACK_IMPORTED_MODULE_1__["useTransform"])(scrollYProgress, [0, 0.5, 1], [900, 0, 0]); // const y1= useTransform(scrollYProgress, [0, 1], [50, 0]);
  // const y2 = useTransform(scrollYProgress, [0, 1], [50, 0]);
  // const x1p = useTransform(sky1offsetX[0], (x) => `${x}%`);
  // const x2p = useTransform(sky2offsetX[0], (x) => `${x}%`);

  const sky2offsetX = Object(framer_motion__WEBPACK_IMPORTED_MODULE_1__["useTransform"])(scrollYProgress, [0, 0.5, 1], [-900, 0, 0]);
  const variants = {
    hidden1: {
      x: '50%',
      scale: 2
    },
    visible1: {
      x: 0,
      scale: 1 // transition: {
      // 	type: "spring",
      // 	duration: 2.5,
      // }

    },
    hidden2: {
      x: '-50%',
      scale: 2
    },
    visible2: {
      x: 0,
      scale: 1 // transition: {
      // 	type: "spring",
      // 	duration: 2.5,
      // }

    }
  };
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
    className: `relative flex flex-col ${height} w-full overflow-hidden`,
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("div", {
      className: "h-1/4 w-full bg-gray-900"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("div", {
      className: `relative h-1/2 w-full`,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
        className: "absolute -top-full -left-1/4 h-2xfull w-3/4 rounded-fullp4   bg-gray-900" // initial="hidden1"
        // animate={ openSky ? "visible1" :"hidden1"}
        // variants={variants}
        ,
        style: {
          x: sky1offsetX,
          // y: y1,
          scale: skyScale
        }
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
        className: "absolute -top-full -right-1/4 h-2xfull w-3/4 rounded-fullp4  bg-gray-900",
        style: {
          x: sky2offsetX,
          // y : y2,
          scale: skyScale
        } // initial="hidden2"
        // animate={ openSky ? "visible2" :"hidden2"}
        // variants={variants}

      })]
    })]
  });
}

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("zPlV");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("wmQq");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("CH2o");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function MyApp({
  Component,
  pageProps
}) {
  console.log("page component ::::::::::: ", Component);
  const variants = {
    start: {
      scale: 2,
      y: 1000
    },
    opened: {
      scale: 1,
      y: 0,
      // top : 0,
      transition: {
        // type: "spring",
        ease: "easeInOut",
        duration: 2,
        delay: 0.2
      }
    },
    exitPage: {
      y: 1000
    }
  };
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
    className: `${'bg-gray-900'} w-full overflowHidden`,
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["AnimatePresence"], {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
        className: "flex flex-coll justify-center items-center  bg-gray-900",
        initial: "start",
        animate: "opened",
        exit: "exitPage",
        variants: variants,
        transition: {
          duration: 2
        },
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(Component, _objectSpread({}, pageProps))
      }, Component)
    })
  });
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "CH2o":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Home; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__("wmQq");

// CONCATENATED MODULE: ./components/darkSkyOpen.js



function DarkSkyOpen({
  height
}) {
  const variants = {
    hidden1: {
      x: '50%',
      scale: 2
    },
    visible1: {
      x: 0,
      scale: [1, 0.98],
      transition: {
        scale: {
          type: 'spring',
          yoyo: Infinity,
          duration: 1
        },
        type: "spring",
        duration: 2.5
      }
    },
    hidden2: {
      x: '-50%',
      scale: 2
    },
    visible2: {
      x: 0,
      scale: [1, 0.98],
      transition: {
        scale: {
          type: 'spring',
          yoyo: Infinity,
          duration: 1
        },
        type: "spring",
        duration: 2.5
      }
    }
  };
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: `relative flex flex-col ${height} w-full bg-gradient-to-b from-gray-900 to-blue-400  overflow-hidden`,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: `relative h-1/3 w-full bg-gradient-to-b from-gray-900 to-blue-400 `,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(external_framer_motion_["motion"].div, {
        className: "absolute top-1/4 -left-1/4 h-xfull w-3/4 rounded-fullp4   bg-gray-900",
        initial: "hidden1",
        animate: "visible1",
        variants: variants
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_framer_motion_["motion"].div, {
        className: "absolute top-1/4 -right-1/4 h-2xfull w-3/4 rounded-fullp4  bg-gray-900",
        initial: "hidden2",
        animate: "visible2",
        variants: variants
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "h-2/3 bg-gray-900 w-full"
    })]
  });
}
// EXTERNAL MODULE: ./components/soguma.tsx + 1 modules
var soguma = __webpack_require__("bJ1P");

// EXTERNAL MODULE: ./components/darkSky.js
var darkSky = __webpack_require__("/+fQ");

// EXTERNAL MODULE: ./components/sogumice.js
var sogumice = __webpack_require__("YFSf");

// EXTERNAL MODULE: ./components/loloIcon.js
var loloIcon = __webpack_require__("sDNB");

// EXTERNAL MODULE: ./pages/scene.js
var scene = __webpack_require__("+RKv");

// EXTERNAL MODULE: ./pages/card.js + 2 modules
var card = __webpack_require__("yteQ");

// CONCATENATED MODULE: ./pages/home.js









 // import Image from 'next/Image'

function Home() {
  // const y = useMotionValue(0);
  const {
    scrollYProgress
  } = Object(external_framer_motion_["useViewportScroll"])();
  const sogumaScale = Object(external_framer_motion_["useTransform"])(scrollYProgress, [0, 1], [1, 1.5]); // const sogumaScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  // const sogumaScale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  // console.log("y range : " , yRange)

  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_framer_motion_["motion"].div, {
    className: "flex flex-col w-full h-auto bg-gray-900",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "h-screen w-full bg-gray-900",
      children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_framer_motion_["motion"].div, {
        className: "relative flex justify-center items-center h-full w-full bg-blue-400 ",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "absolute top-0 left-0 h-full w-full bg-blue-400",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(DarkSkyOpen, {
            height: "lg:h-full h-1/2 md:h-2/3"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_framer_motion_["motion"].div, {
          className: "absolute flex justify-center items-start top-1/3 w-full",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(soguma["a" /* default */], {
            height: "h-100",
            width: "w-2/3"
          })
        })]
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(scene["default"], {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(card["default"], {})]
  });
}

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "L4P6":
/***/ (function(module, exports) {

module.exports = require("popmotion");

/***/ }),

/***/ "YFSf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sogumice; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wmQq");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);


function Sogumice({
  height,
  width
}) {
  const {
    scrollYProgress
  } = Object(framer_motion__WEBPACK_IMPORTED_MODULE_1__["useViewportScroll"])();
  const sogumiceScale = Object(framer_motion__WEBPACK_IMPORTED_MODULE_1__["useTransform"])(scrollYProgress, [0, 0.5, 1], [0, 0.2, 1]);
  const sogumiceYoffset = Object(framer_motion__WEBPACK_IMPORTED_MODULE_1__["useTransform"])(scrollYProgress, [0, 0.5, 1], [-100, 0, 0]);
  const sogumiceVariants = {
    hidden: {
      y: "50vh",
      scale: 0.1
    },
    visible: {
      y: -25,
      scale: 1,
      transition: {
        // staggerChildren: 0.5,
        // when: "beforeChildren",
        type: "spring",
        duration: 2.5 // delay : 0.5,

      }
    }
  };
  const circleVariants = {
    hidden: {
      scale: 1
    },
    visible: {
      scale: 1.3,
      transition: {
        // yoyo : 2,
        // staggerChildren: 2,
        // staggerDirection: -1,
        when: "beforeChildren",
        type: "spring",
        duration: 1.2,
        delay: 0.6
      }
    }
  };
  const gimVariants = {
    hidden: {
      opacity: 0,
      y: "-100vh",
      scale: 20,
      boxShadow: "0 0px 0px 0px rgba(255, 255, 255, 0.2)"
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      boxShadow: "0 0px 20px 8px rgba(255, 255, 255, 0.5)",
      transition: {
        bounce: 0.1,
        type: "spring",
        duration: 2.5,
        delay: 1,
        ease: "circOut"
      }
    }
  };
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
    className: `flex justify-center items-center ${height || "h-1/2"} ${width || "w-1/2"} bg-white border-gray-900 rounded-full shadow-2xl` // initial="hidden"
    // animate="visible"
    // variants={sogumiceVariants}
    // style={
    // 	{
    // 		scale : sogumiceScale,
    // 		top : sogumiceYoffset,
    // 		// opacity : sogumiceOpacity
    // 	}
    // }
    ,
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
      className: "flex justify-center items-center bg-blue-300  border-gray-900 border-4 h-24 w-24 rounded-full ",
      variants: circleVariants
    })
  });
}

/***/ }),

/***/ "bJ1P":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Soguma; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__("wmQq");

// EXTERNAL MODULE: external "popmotion"
var external_popmotion_ = __webpack_require__("L4P6");

// CONCATENATED MODULE: ./components/gim.tsx




const gimsProps = [{
  id: 0,
  // needed to fix " key for map, organize layer order "
  type: "main",
  leftRight: 0,
  next: 1,
  prev: 2,
  properties: {
    title: "main",
    size: 100,
    posi: {
      x: 34,
      y: 55
    },
    scale: 1.8,
    zIndex: 10
  }
}, {
  id: 1,
  type: "next",
  leftRight: 1,
  next: 3,
  prev: 0,
  properties: {
    title: "next",
    size: 60,
    posi: {
      x: 75,
      y: 40
    },
    scale: 1,
    zIndex: 10
  }
}, {
  id: 2,
  type: "previous",
  leftRight: -1,
  next: 0,
  prev: 4,
  properties: {
    title: "previous",
    size: 80,
    posi: {
      x: 15,
      y: 12
    },
    scale: 0.9,
    zIndex: 0
  }
}, {
  id: 3,
  type: "onHold",
  leftRight: 1,
  next: 4,
  prev: 1,
  properties: {
    title: "...",
    size: 50,
    posi: {
      x: 60,
      y: 8
    },
    scale: 0.3,
    zIndex: 0
  }
}, {
  id: 4,
  type: "hidden",
  leftRight: -1,
  next: 2,
  prev: 3,
  properties: {
    title: "hidden",
    size: 40,
    posi: {
      x: 40,
      y: 9
    },
    scale: 0.1,
    zIndex: 0
  }
}];

const getGimPropsById = gimId => {
  return gimsProps.filter(gimProps => gimProps.id == gimId).pop() || gimsProps[0];
};

function Gim({
  data,
  gimId,
  direction,
  steps,
  nextPosition
}) {
  const {
    scrollYProgress
  } = Object(external_framer_motion_["useViewportScroll"])();
  const yRange = Object(external_framer_motion_["useTransform"])(scrollYProgress, [0, 0.9], [0, 1]);
  const btnRef = Object(external_react_["useRef"])(null);
  const {
    0: animationDelay,
    1: setDelay
  } = Object(external_react_["useState"])(Math.random());
  Object(external_react_["useEffect"])(() => {
    btnRef.current.setAttribute("disabled", "disabled"); // const timer = setTimeout(() => btnRef.current.setAttribute("disabled", "disabled") , 1300);
    // return () => clearTimeout(timer);
  }, []); // btnRef.current.setAttribute("disabled", "disabled");

  console.log("render gim : [" + gimId + "] random number : " + animationDelay);
  const currentIndex = Object(external_popmotion_["wrap"])(0, gimsProps.length, steps);
  const currentGim = getGimPropsById(gimId);
  const prevGim = direction < 0 ? getGimPropsById(currentGim.prev) : getGimPropsById(currentGim.next);
  const nextGim = direction < 0 ? getGimPropsById(currentGim.next) : getGimPropsById(currentGim.prev);
  const gimvariants = {
    enter: direction => {
      return {
        y: 0,
        top: `${prevGim.properties.posi.y}%`,
        left: `${prevGim.properties.posi.x}%`,
        // heigth : `${currentGim.properties.size}px`,
        // width : `${currentGim.properties.size}px`,
        scale: prevGim.properties.scale,
        zIndex: prevGim.properties.zIndex // backgroudColor : direction ? "red" : "blue",

      };
    },
    standing: {
      y: [-10, 10],
      top: `${currentGim.properties.posi.y}%`,
      left: `${currentGim.properties.posi.x}%`,
      // h : `${currentGim.properties.size}px`,
      // w : `${currentGim.properties.size}px`,
      scale: currentGim.properties.scale,
      zIndex: direction > 0 && gimId == 2 ? 10 : currentGim.properties.zIndex,
      // backgroudColor : direction ? "red" : "blue",
      transition: {
        y: {
          yoyo: Infinity,
          duration: 1 // delay : animationDelay * 2

        },
        type: "spring",
        duration: 1.3
      }
    },
    exit: direction => {
      return {
        y: 0,
        top: `${nextGim.properties.posi.y}%`,
        left: `${nextGim.properties.posi.x}%`,
        // heigth : `${currentGim.properties.size}px`,
        // width : `${currentGim.properties.size}px`,
        scale: nextGim.properties.scale,
        zIndex: nextGim.properties.zIndex
      };
    }
  };
  const currentData = getGimCurrenData(data, gimId, steps, direction);
  return (
    /*#__PURE__*/
    // <AnimatePresence initial={false} custom={direction * -1}>
    Object(jsx_runtime_["jsx"])(external_framer_motion_["motion"].div, {
      ref: btnRef,
      className: `absolute flex justify-center items-center ${"h-36" || false} ${"w-36" || false} rounded-full bg-red-400`,
      variants: gimvariants,
      initial: "enter",
      animate: "standing",
      custom: direction,
      transition: {// type: "spring",
        // duration : 4,
      },
      whileHover: {
        // scale: currentGim.properties.scale * 1.2,
        boxShadow: '0 0px 20px 8px rgba(255, 255, 255, 0.5)',
        transition: {
          duration: 0.3 // y: {
          // 	yoyo : Infinity,
          // 	duration: 1,
          // 	delay : animationDelay * 2
          // },
          // x: {
          // 	yoyo : Infinity,
          // 	duration: 1,
          // },

        }
      },
      onMouseDown: () => nextPosition(currentGim.leftRight),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
        children: currentData ? currentData.current : ""
      })
    }, steps) // </AnimatePresence>

  );
}

function fixGimsDataIndex(data, steps) {
  let fixedIndex = steps < 0 ? (data.length + steps % data.length) % data.length : steps % data.length;
  return fixedIndex;
}

function getGimCurrenData(data, gimId, moveSteps, moveDirection) {
  switch (gimId) {
    case 0:
      // main gim
      return {
        current: data[fixGimsDataIndex(data, moveSteps + 1)],
        next: data[fixGimsDataIndex(data, moveSteps + 2)],
        prev: data[fixGimsDataIndex(data, moveSteps)]
      };

    case 1:
      // next gim
      return {
        current: data[fixGimsDataIndex(data, moveSteps + 2)],
        next: data[fixGimsDataIndex(data, moveSteps + 3)],
        prev: data[fixGimsDataIndex(data, moveSteps + 1)]
      };

    case 2:
      // prev gim
      return {
        current: data[fixGimsDataIndex(data, moveSteps)],
        next: data[fixGimsDataIndex(data, moveSteps - 1)],
        prev: data[fixGimsDataIndex(data, moveSteps + 1)]
      };

    case 3:
      // onHold gim
      return {
        current: data[fixGimsDataIndex(data, moveSteps + 3)],
        next: data[fixGimsDataIndex(data, moveSteps + 4)],
        prev: data[fixGimsDataIndex(data, moveSteps + 2)]
      };

    case 4:
      // hidden gim
      let updatedIndex = moveDirection < 0 ? moveSteps : moveSteps + 3;
      return {
        current: data[fixGimsDataIndex(data, moveSteps + 4)],
        next: data[fixGimsDataIndex(data, moveSteps + 5)],
        prev: data[fixGimsDataIndex(data, updatedIndex)]
      };
  }

  return 0;
}
// CONCATENATED MODULE: ./components/soguma.tsx






const soguma_gimsProps = [{
  id: 0,
  // needed to fix " key for map, organize layer order "
  type: "main",
  leftRight: 0,
  next: 1,
  prev: 2,
  properties: {
    title: "main",
    size: 100,
    posi: {
      x: 40,
      y: 55
    },
    scale: 2,
    zIndex: 10
  }
}, {
  id: 1,
  type: "next",
  leftRight: 1,
  next: 3,
  prev: 0,
  properties: {
    title: "next",
    size: 60,
    posi: {
      x: 85,
      y: 45
    },
    scale: 1.2,
    zIndex: 10
  }
}, {
  id: 2,
  type: "previous",
  leftRight: -1,
  next: 0,
  prev: 4,
  properties: {
    title: "previous",
    size: 80,
    posi: {
      x: 5,
      y: 12
    },
    scale: 1.1,
    zIndex: 10
  }
}, {
  id: 3,
  type: "onHold",
  leftRight: 1,
  next: 4,
  prev: 1,
  properties: {
    title: "...",
    size: 50,
    posi: {
      x: 60,
      y: 18
    },
    scale: 0.5,
    zIndex: 0
  }
}, {
  id: 4,
  type: "hidden",
  leftRight: -1,
  next: 2,
  prev: 3,
  properties: {
    title: "hidden",
    size: 40,
    posi: {
      x: 40,
      y: 9
    },
    scale: 0.4,
    zIndex: 0
  }
}];
const soguma_data = ["about me", "my projects", "art", "p1", "p2"];
function Soguma({
  height,
  width
}) {
  const {
    scrollYProgress
  } = Object(external_framer_motion_["useViewportScroll"])();
  const sogumaScale = Object(external_framer_motion_["useTransform"])(scrollYProgress, [0, 0.3, 1], [1, 0.2, 0]);
  const sogumaYoffset = Object(external_framer_motion_["useTransform"])(scrollYProgress, [0, 0.3, 1], [0, -200, -500]);
  const {
    0: [direction, steps],
    1: setRotate
  } = Object(external_react_["useState"])([0, 0]);
  const currentIndex = Object(external_popmotion_["wrap"])(0, 4, steps);

  const nextPosition = newDirection => {
    setRotate([newDirection, steps + newDirection]);
  }; // console.log(getGimPropsById(3));


  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_framer_motion_["motion"].div, {
    className: `relative flex justify-center items-start ${height || "h-1/2"} ${width || "w-1/2"}  border-gray-900 shadow-2xl  `,
    initial: "initial",
    animate: "standing",
    variants: {
      initial: {
        y: -410,
        x: 30,
        scale: 0.1
      },
      standing: {
        y: 0,
        x: 0,
        scale: 1,
        transition: {
          duration: 1.5 // x : { yoyo : Infinity, duration : 2},

        }
      }
    },
    style: {
      scale: sogumaScale,
      y: sogumaYoffset
    },
    children: [soguma_gimsProps.map(gim => /*#__PURE__*/Object(jsx_runtime_["jsx"])(Gim, {
      gimId: gim.id,
      data: soguma_data,
      direction: direction,
      steps: steps,
      nextPosition: nextPosition
    }, gim.id)), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_framer_motion_["motion"].div, {
      className: "relative h-60 w-44 bg-white",
      initial: "initial",
      animate: "standing",
      variants: {
        initial: {
          scale: 0.2,
          x: 10,
          // opacity : 0,
          y: -100,
          rotate: 20 // transition : {
          // 	duration : 2,
          // }

        },
        standing: {
          scale: 1.1,
          // opacity : 1,
          y: [-12, -25],
          rotate: 5,
          x: [-5, 0],
          transition: {
            y: {
              yoyo: Infinity,
              duration: 1
            },
            duration: 2,
            // delay : 2.5,
            x: {
              duration: 2
            },
            scale: {
              type: 'spring',
              duration: 1
            }
          }
        }
      },
      onMouseDown: () => nextPosition(-1),
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
        href: "/scene",
        children: "link"
      })
    })]
  });
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "sDNB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoloIcon; });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wmQq");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);


// import Image from 'next/Image'

function LoloIcon({
  size
}) {
  const iconVariants = {
    hidden: {
      opacity: 0
    },
    animation: {
      opacity: [0.5, 0.8],
      y: [-5, 5],
      // scale : [ 0.9, 1.1],
      transition: {
        yoyo: Infinity,
        duration: 1
      }
    }
  };
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
    className: `flex flex-col justify-center items-center `,
    initial: "hidden",
    animate: "animation",
    variants: iconVariants,
    whileHover: {
      scale: 1.1,
      transition: {
        duration: 0.2
      }
    },
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
      className: "h-40 w-32 object-contain",
      src: "/row-tail1.png",
      width: 120 * size / 10,
      height: 200 * size / 10
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("img", {
      className: "h-24 w-24 object-contain",
      src: "/row.png",
      width: 35 * size / 10,
      height: 35 * size / 10
    })]
  });
}

/***/ }),

/***/ "wmQq":
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ }),

/***/ "yteQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ Card; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "popmotion"
var external_popmotion_ = __webpack_require__("L4P6");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__("wmQq");

// CONCATENATED MODULE: ./components/imageDisplayer.tsx

// import Image from 'next/Image'



const imageDisplayer_images = ["/img1.png", "/img2.png", "/img3.png"];
const variants = {
  enter: direction => {
    return {
      y: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    y: 0,
    opacity: 1
  },
  exit: direction => {
    return {
      zIndex: 0,
      y: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};
const swipeConfidenceThreshold = 10000;

const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

function ImageDisplayer({
  dataToDisplay
}) {
  const {
    0: [page, direction],
    1: setPage
  } = Object(external_react_["useState"])([0, 0]);
  const imageIndex = Object(external_popmotion_["wrap"])(0, imageDisplayer_images.length, page);

  const paginate = newDirection => {
    setPage([page + newDirection, newDirection]);
  };

  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_framer_motion_["AnimatePresence"], {
    initial: false,
    custom: direction,
    children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "w-full flex flex-col justify-start items-start  m-10 p-6 overflow-hidden",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_framer_motion_["motion"].div, {
        className: "relative w-full p-2 ",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_framer_motion_["motion"].img, {
          src: imageDisplayer_images[imageIndex],
          custom: direction,
          variants: variants,
          initial: "enter",
          animate: "center",
          exit: "exit",
          transition: {
            y: {
              type: "spring",
              stiffness: 300,
              damping: 30
            },
            opacity: {
              duration: 0.2
            }
          },
          drag: "y",
          dragConstraints: {
            top: 0,
            bottom: 0
          },
          dragElastic: 1,
          onDragEnd: (e, {
            offset,
            velocity
          }) => {
            const swipe = swipePower(offset.y, velocity.y);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }
        }, page)
      })
    })
  });
}
// CONCATENATED MODULE: ./components/descriptionCard.js


function DescriptionCard() {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: "w-full flex flex-col justify-start items-start  m-10 p-24 border-2 border-gray-500 rounded-sm shadow-glow text-white",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: "flex flex-row justify-start items-center m-2 text-8xl",
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
        children: "Title"
      })
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "h-auto w-full  flex flex-col justify-start items-start my-6 ",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "flex flex-row justify-start items-center m-2 text-5xl ",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
          children: "Description"
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "flex justify-center items-center w-full h-auto  rounded-sm m-2 bg-gray-800 bg-opacity-50 my-16 ",
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: "flex justify-start items-start w-full border-gray-500 bg-opacity-5 p-10 my-8 ",
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            children: "bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla"
          })
        })
      })]
    })]
  });
}
// CONCATENATED MODULE: ./pages/card.js


// import DarkSky from '../components/darkSky'
// import Sogumice from '../components/sogumice'
// import LoloIcon from '../components/loloIcon'

 // import Image from 'next/Image'

function Card() {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    className: "flex flex-col w-full h-auto bg-gradient-to-b from-gray-900 to-gray-900",
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: "flex flex-row justify-between h-screen w-full p-5",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(DescriptionCard, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(ImageDisplayer, {})]
    })
  });
}

/***/ }),

/***/ "zPlV":
/***/ (function(module, exports) {



/***/ })

/******/ });