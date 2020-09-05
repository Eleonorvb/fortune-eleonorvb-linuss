/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\finaSaker\\\\react\\\\fortune-eleonorvb-linuss\\\\src\\\\index.js: Support for the experimental syntax 'jsx' isn't currently enabled (9:3):\\n\\n\\u001b[0m \\u001b[90m  7 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m  8 | \\u001b[39m\\u001b[33mReactDOM\\u001b[39m\\u001b[33m.\\u001b[39mrender(\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m  9 | \\u001b[39m  \\u001b[33m<\\u001b[39m\\u001b[33mReact\\u001b[39m\\u001b[33m.\\u001b[39m\\u001b[33mStrictMode\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m  \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 10 | \\u001b[39m    \\u001b[33m<\\u001b[39m\\u001b[33mApp\\u001b[39m \\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 11 | \\u001b[39m  \\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mReact\\u001b[39m\\u001b[33m.\\u001b[39m\\u001b[33mStrictMode\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[33m,\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 12 | \\u001b[39m  document\\u001b[33m.\\u001b[39mgetElementById(\\u001b[32m'root'\\u001b[39m)\\u001b[0m\\n\\nAdd @babel/plugin-transform-react-jsx (https://git.io/vb4yd) to the 'plugins' section of your Babel config to enable transformation.\\n    at Parser._raise (C:\\\\finaSaker\\\\react\\\\fortune-eleonorvb-linuss\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:766:17)\\n    at Parser.raiseWithData (C:\\\\finaSaker\\\\react\\\\fortune-eleonorvb-linuss\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:759:17)\\n    at Parser.expectOnePlugin (C:\\\\finaSaker\\\\react\\\\fortune-eleonorvb-linuss\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8981:18)\\n    at Parser.parseExprAtom (C:\\\\finaSaker\\\\react\\\\fortune-eleonorvb-linuss\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10276:22)\\n    at Parser.parseExprSubscripts (C:\\\\finaSaker\\\\react\\\\fortune-eleonorvb-linuss\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9844:23)\\n    at Parser.parseUpdate (C:\\\\finaSaker\\\\react\\\\fortune-eleonorvb-linuss\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9824:21)\\n    at Parser.parseMaybeUnary (C:\\\\finaSaker\\\\react\\\\fortune-eleonorvb-linuss\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9813:17)\\n    at Parser.parseExprOps (C:\\\\finaSaker\\\\react\\\\fortune-eleonorvb-linuss\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9683:23)\\n    at Parser.parseMaybeConditional (C:\\\\finaSaker\\\\react\\\\fortune-eleonorvb-linuss\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9657:23)\\n    at Parser.parseMaybeAssign (C:\\\\finaSaker\\\\react\\\\fortune-eleonorvb-linuss\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9620:21)\\n    at C:\\\\finaSaker\\\\react\\\\fortune-eleonorvb-linuss\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9586:39\\n    at Parser.allowInAnd (C:\\\\finaSaker\\\\react\\\\fortune-eleonorvb-linuss\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11303:12)\\n    at Parser.parseMaybeAssignAllowIn (C:\\\\finaSaker\\\\react\\\\fortune-eleonorvb-linuss\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9586:17)\\n    at Parser.parseExprListItem (C:\\\\finaSaker\\\\react\\\\fortune-eleonorvb-linuss\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11051:18)\\n    at Parser.parseCallExpressionArguments (C:\\\\finaSaker\\\\react\\\\fortune-eleonorvb-linuss\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10053:22)\\n    at Parser.parseCoverCallAndAsyncArrowHead (C:\\\\finaSaker\\\\react\\\\fortune-eleonorvb-linuss\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9960:29)\\n    at Parser.parseSubscript (C:\\\\finaSaker\\\\react\\\\fortune-eleonorvb-linuss\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9896:19)\\n    at Parser.parseSubscripts (C:\\\\finaSaker\\\\react\\\\fortune-eleonorvb-linuss\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9867:19)\\n    at Parser.parseExprSubscripts (C:\\\\finaSaker\\\\react\\\\fortune-eleonorvb-linuss\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9850:17)\\n    at Parser.parseUpdate (C:\\\\finaSaker\\\\react\\\\fortune-eleonorvb-linuss\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9824:21)\\n    at Parser.parseMaybeUnary (C:\\\\finaSaker\\\\react\\\\fortune-eleonorvb-linuss\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9813:17)\\n    at Parser.parseExprOps (C:\\\\finaSaker\\\\react\\\\fortune-eleonorvb-linuss\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9683:23)\\n    at Parser.parseMaybeConditional (C:\\\\finaSaker\\\\react\\\\fortune-eleonorvb-linuss\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9657:23)\\n    at Parser.parseMaybeAssign (C:\\\\finaSaker\\\\react\\\\fortune-eleonorvb-linuss\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9620:21)\\n    at Parser.parseExpressionBase (C:\\\\finaSaker\\\\react\\\\fortune-eleonorvb-linuss\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9564:23)\\n    at C:\\\\finaSaker\\\\react\\\\fortune-eleonorvb-linuss\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9558:39\\n    at Parser.allowInAnd (C:\\\\finaSaker\\\\react\\\\fortune-eleonorvb-linuss\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11297:16)\\n    at Parser.parseExpression (C:\\\\finaSaker\\\\react\\\\fortune-eleonorvb-linuss\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9558:17)\\n    at Parser.parseStatementContent (C:\\\\finaSaker\\\\react\\\\fortune-eleonorvb-linuss\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11562:23)\\n    at Parser.parseStatement (C:\\\\finaSaker\\\\react\\\\fortune-eleonorvb-linuss\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11431:17)\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });