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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/equipment.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/equipment.js":
/*!*******************************************!*\
  !*** ./app/javascript/packs/equipment.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  $('.timer').css('cursor', 'pointer');
  $('.turn').click(function () {
    var id = $(this).data("id");
    var active = $(this).text();

    if (active == "On") {
      dataEquipment = {
        equipment: {
          active: false
        }
      };
    } else {
      dataEquipment = {
        equipment: {
          active: true
        }
      };
    }

    $.ajax({
      type: 'PATCH',
      url: "/equipment/" + id,
      data: dataEquipment,
      success: function success(repsonse) {
        if (active == "On") {
          console.log("Turn off is successfully.");
        } else {
          console.log("Turn on is successfully.");
        }
      },
      error: function error(repsonse) {
        console.log("Turn on is fails.");
      }
    });
  });
  $('.timer').click(function () {
    var id = $(this).data("id");
    var content = '';

    if (id == 1) {
      content = "Đèn 13";
    } else if (id == 2) {
      content = "Đèn 14";
    } else {
      content = "Đèn 15";
    }

    $.confirm({
      title: content,
      columnClass: 'col-md-6 col-md-offset-4',
      content: '' + '<form action="" class="formName">' + '<div class="form-group">' + '<input type="datetime-local" placeholder="Set Timer" class="name form-control" required />' + '</div>' + '</form>',
      buttons: {
        formSubmit: {
          text: 'Submit',
          btnClass: 'btn-blue',
          action: function action() {
            var name = this.$content.find('.name').val();

            if (!name) {
              $.alert('provide a valid name');
              return false;
            }

            $.alert('Your name is ' + name);
          }
        },
        cancel: function cancel() {//close
        }
      },
      onContentReady: function onContentReady() {
        // bind to events
        var jc = this;
        this.$content.find('form').on('submit', function (e) {
          // if the user submits the form by pressing enter in the field.
          e.preventDefault();
          jc.$$formSubmit.trigger('click'); // reference the button and click it
        });
      }
    });
  });
});

/***/ })

/******/ });
//# sourceMappingURL=equipment-36ec02e3628be5b64e17.js.map