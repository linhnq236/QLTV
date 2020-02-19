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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/places.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/places.js":
/*!****************************************!*\
  !*** ./app/javascript/packs/places.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/lihn/rollcall/app/javascript/packs/places.js: Unexpected token, expected \",\" (68:24)\n\n  66 |        offsetTop: 20,\n  67 |        columnClass: \"col-md-6 col-md-offset-3 popup-rollcall\",\n> 68 |        content:  I18n.t 'hello',\n     |                         ^\n  69 |        closeIcon: true,\n  70 |        buttons: {\n  71 |          Cancel:{\n    at Parser.raise (/home/lihn/rollcall/node_modules/@babel/parser/lib/index.js:6387:17)\n    at Parser.unexpected (/home/lihn/rollcall/node_modules/@babel/parser/lib/index.js:7704:16)\n    at Parser.expect (/home/lihn/rollcall/node_modules/@babel/parser/lib/index.js:7690:28)\n    at Parser.parseObj (/home/lihn/rollcall/node_modules/@babel/parser/lib/index.js:9221:14)\n    at Parser.parseExprAtom (/home/lihn/rollcall/node_modules/@babel/parser/lib/index.js:8855:28)\n    at Parser.parseExprSubscripts (/home/lihn/rollcall/node_modules/@babel/parser/lib/index.js:8483:23)\n    at Parser.parseMaybeUnary (/home/lihn/rollcall/node_modules/@babel/parser/lib/index.js:8463:21)\n    at Parser.parseExprOps (/home/lihn/rollcall/node_modules/@babel/parser/lib/index.js:8329:23)\n    at Parser.parseMaybeConditional (/home/lihn/rollcall/node_modules/@babel/parser/lib/index.js:8302:23)\n    at Parser.parseMaybeAssign (/home/lihn/rollcall/node_modules/@babel/parser/lib/index.js:8249:21)\n    at Parser.parseExprListItem (/home/lihn/rollcall/node_modules/@babel/parser/lib/index.js:9562:18)\n    at Parser.parseCallExpressionArguments (/home/lihn/rollcall/node_modules/@babel/parser/lib/index.js:8692:22)\n    at Parser.parseSubscript (/home/lihn/rollcall/node_modules/@babel/parser/lib/index.js:8585:29)\n    at Parser.parseSubscripts (/home/lihn/rollcall/node_modules/@babel/parser/lib/index.js:8504:19)\n    at Parser.parseExprSubscripts (/home/lihn/rollcall/node_modules/@babel/parser/lib/index.js:8493:17)\n    at Parser.parseMaybeUnary (/home/lihn/rollcall/node_modules/@babel/parser/lib/index.js:8463:21)\n    at Parser.parseExprOps (/home/lihn/rollcall/node_modules/@babel/parser/lib/index.js:8329:23)\n    at Parser.parseMaybeConditional (/home/lihn/rollcall/node_modules/@babel/parser/lib/index.js:8302:23)\n    at Parser.parseMaybeAssign (/home/lihn/rollcall/node_modules/@babel/parser/lib/index.js:8249:21)\n    at Parser.parseExpression (/home/lihn/rollcall/node_modules/@babel/parser/lib/index.js:8197:23)\n    at Parser.parseStatementContent (/home/lihn/rollcall/node_modules/@babel/parser/lib/index.js:10029:23)\n    at Parser.parseStatement (/home/lihn/rollcall/node_modules/@babel/parser/lib/index.js:9900:17)\n    at Parser.parseBlockOrModuleBlockBody (/home/lihn/rollcall/node_modules/@babel/parser/lib/index.js:10476:25)\n    at Parser.parseBlockBody (/home/lihn/rollcall/node_modules/@babel/parser/lib/index.js:10463:10)\n    at Parser.parseBlock (/home/lihn/rollcall/node_modules/@babel/parser/lib/index.js:10447:10)\n    at Parser.parseStatementContent (/home/lihn/rollcall/node_modules/@babel/parser/lib/index.js:9976:21)\n    at Parser.parseStatement (/home/lihn/rollcall/node_modules/@babel/parser/lib/index.js:9900:17)\n    at Parser.parseIfStatement (/home/lihn/rollcall/node_modules/@babel/parser/lib/index.js:10254:28)\n    at Parser.parseStatementContent (/home/lihn/rollcall/node_modules/@babel/parser/lib/index.js:9945:21)\n    at Parser.parseStatement (/home/lihn/rollcall/node_modules/@babel/parser/lib/index.js:9900:17)");

/***/ })

/******/ });
//# sourceMappingURL=places-bcef16080da78a3ae16d.js.map