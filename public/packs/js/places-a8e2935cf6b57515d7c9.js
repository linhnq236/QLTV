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

$(document).ready(function () {
  var lat = '';
  var lon = ''; // get location

  function geoFindMe() {
    function success(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
      lat = "".concat(latitude);
      lon = "".concat(longitude);
    }

    function error() {
      status.textContent = 'Unable to retrieve your location';
    }

    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser');
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  } // ========================================


  function configure() {
    Webcam.set({
      width: 320,
      height: 240,
      image_format: 'jpeg',
      jpeg_quality: 90
    });
    Webcam.attach('#my_camera');
  }

  function capture_webcam() {
    Webcam.snap(function (data_uri) {
      // display results in page
      document.getElementById('results').innerHTML = '<img id="imageprev" src="' + data_uri + '"/>';
    });
  }

  function savePic() {
    var base64image = document.getElementById("imageprev").src;
    return base64image;
  } // ==========================================================


  $("#rollcall").click(function () {
    configure();
    var picture = savePic();
    rollcallData = {
      place: {
        lat: lat,
        lon: lon,
        ip: gon.ip,
        picture: picture,
        user_id: gon.current_user_id
      }
    };

    if (lat == '' && lon == '') {
      $.confirm({
        title: false,
        offsetTop: 20,
        columnClass: "col-md-6 col-md-offset-3 popup-rollcall",
        content: 'You should turn on GPS!',
        closeIcon: true,
        buttons: {
          Cancel: {
            btnClass: "btn-red",
            action: function action() {
              alert('Roll call failed !');
            }
          },
          Confirm: {
            btnClass: "btn-blue",
            action: function action() {
              geoFindMe();
              alert('Turn on GPS success. Please Roll call again !');
            }
          }
        }
      });
    } else {
      return $.ajax({
        type: "POST",
        url: "/places",
        data: rollcallData
      }).done(function (response) {
        console.log(rollcallData);
        alert("Roll call susccess.");
        location.reload();
      }).fail(function (response) {});
    }
  }); // $("#turnon").click(function(){
  //   configure();
  // });

  $("#capture").click(function () {
    capture_webcam();
    $("#capture").hide();
  });
});

/***/ })

/******/ });
//# sourceMappingURL=places-a8e2935cf6b57515d7c9.js.map