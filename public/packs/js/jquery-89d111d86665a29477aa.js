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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/jquery.facedetection.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/jquery.facedetection.js":
/*!******************************************************!*\
  !*** ./app/javascript/packs/jquery.facedetection.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
FaceDetection jQuery Plugin
Copyright (c) 2016 Jay Salvat
*/

/* global $, ccv, cascade */
$.fn.faceDetection = function (settingsOrCallback) {
  "use strict";

  var time;
  var options = {
    interval: 4,
    minNeighbors: 1,
    grayscale: true,
    confidence: null,
    async: false,
    complete: function complete() {},
    // (faces)
    error: function error() {} // (code, message)

  };

  if ($.isFunction(settingsOrCallback)) {
    options.complete = settingsOrCallback;
  } else {
    $.extend(options, settingsOrCallback);
  }

  return this.each(function () {
    var $$ = $(this),
        offset = $$.offset(),
        position = $$.position(),
        scaleX = $$.width() / (this.naturalWidth || this.videoWidth) || 1,
        scaleY = $$.height() / (this.naturalHeight || this.videoHeight) || 1;

    if (!$$.is('img, video, canvas')) {
      options.error.apply($$, [1, 'Face detection is possible on images, videos and canvas only.']);
      options.complete.apply($$, [[]]);
      return;
    }

    function detect() {
      var source, canvas;
      time = new Date().getTime();

      if ($$.is('img')) {
        source = new Image();
        source.src = $$.attr('src');
        source.crossOrigin = $$.attr('crossorigin');
        canvas = ccv.pre(source);
      } else if ($$.is('video') || $$.is('canvas')) {
        var copy, context;
        source = $$[0];
        copy = document.createElement('canvas');
        copy.setAttribute('width', source.videoWidth || source.width);
        copy.setAttribute('height', source.videoHeight || source.height);
        context = copy.getContext("2d");
        context.drawImage(source, 0, 0);
        canvas = ccv.pre(copy);
      }

      if (options.grayscale) {
        canvas = ccv.grayscale(canvas);
      }

      try {
        if (options.async && window.Worker) {
          ccv.detect_objects({
            "canvas": canvas,
            "cascade": cascade,
            "interval": options.interval,
            "min_neighbors": options.minNeighbors,
            "worker": 1,
            "async": true
          })(done);
        } else {
          done(ccv.detect_objects({
            "canvas": canvas,
            "cascade": cascade,
            "interval": options.interval,
            "min_neighbors": options.minNeighbors
          }));
        }
      } catch (e) {
        options.error.apply($$, [2, e.message]);
        options.complete.apply($$, [false]);
      }
    }

    function done(faces) {
      var n = faces.length,
          data = [];

      for (var i = 0; i < n; ++i) {
        if (options.confidence !== null && faces[i].confidence <= options.confidence) {
          continue;
        }

        faces[i].positionX = position.left + faces[i].x;
        faces[i].positionY = position.top + faces[i].y;
        faces[i].offsetX = offset.left + faces[i].x;
        faces[i].offsetY = offset.top + faces[i].y;
        faces[i].scaleX = scaleX;
        faces[i].scaleY = scaleY;
        data.push(faces[i]);
      }

      data.time = new Date().getTime() - time;
      options.complete.apply($$, [data]);
    }

    return detect();
  });
};

/***/ })

/******/ });
//# sourceMappingURL=jquery-89d111d86665a29477aa.js.map