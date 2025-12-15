/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/main.js":
/*!************************!*\
  !*** ./assets/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ \"./assets/scss/style.scss\");\n/* harmony import */ var _js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js */ \"./assets/js/index.js\");\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", _js__WEBPACK_IMPORTED_MODULE_1__.runAfterDomLoad);\r\n\n\n//# sourceURL=webpack://newTemplate/./assets/main.js?");

/***/ }),

/***/ "./assets/js/components/header.js":
/*!****************************************!*\
  !*** ./assets/js/components/header.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initMenu: () => (/* binding */ initMenu)\n/* harmony export */ });\nfunction initMenu() {\n  var header = document.querySelector(\".header\");\n  var nav = document.querySelector(\".header__menu\"); // твоя навігація\n  var menuToggles = document.querySelectorAll(\".js-menu-toggle\");\n  var menuCloseBtns = document.querySelectorAll(\".js-menu-close\");\n  var menuTriggers = document.querySelectorAll(\".menu__icon\"); // для підменю\n\n  if (!header || !nav) return;\n\n  // --- Ініціалізація при завантаженні ---\n  window.addEventListener(\"load\", function () {\n    document.body.classList.remove(\"preload\");\n    if (typeof AOS !== \"undefined\") {\n      AOS.init({\n        duration: 1000,\n        offset: 0,\n        once: true\n      });\n    }\n  });\n\n  // --- Header скрол ---\n  var headerMinClassName = \"header--min\";\n  window.addEventListener(\"scroll\", function () {\n    if (document.documentElement.scrollTop > 1) {\n      header.classList.add(\"header--fixed\");\n    } else {\n      header.classList.remove(\"header--fixed\");\n    }\n    if (window.scrollY > 30) {\n      header.classList.add(headerMinClassName);\n    } else {\n      header.classList.remove(headerMinClassName);\n    }\n  });\n\n  // --- Бургер меню ---\n  document.addEventListener(\"click\", function (e) {\n    var toggle = e.target.closest(\".js-menu-toggle\");\n    var closeBtn = e.target.closest(\".js-menu-close\");\n    if (toggle) {\n      nav.classList.toggle(\"nav--opened\");\n      header.classList.toggle(\"header--open-menu\");\n      togglePageScroll();\n    } else if (closeBtn) {\n      nav.classList.remove(\"nav--opened\");\n      header.classList.remove(\"header--open-menu\");\n      togglePageScroll();\n    }\n  });\n\n  // --- Закриття меню при кліку на будь-який <a> ---\n  document.querySelectorAll(\"a\").forEach(function (link) {\n    link.addEventListener(\"click\", function () {\n      nav.classList.remove(\"nav--opened\");\n      header.classList.remove(\"header--open-menu\");\n      document.documentElement.style.overflowY = \"unset\";\n    });\n  });\n  function togglePageScroll() {\n    if (header.classList.contains(\"header--open-menu\")) {\n      document.documentElement.style.overflowY = \"hidden\";\n    } else {\n      document.documentElement.style.overflowY = \"unset\";\n    }\n  }\n\n  // --- Вкладені підменю на мобільних ---\n  menuTriggers.forEach(function (item) {\n    item.addEventListener(\"click\", function (e) {\n      e.stopPropagation();\n      e.preventDefault();\n      if (window.innerWidth < 1025) {\n        menuTriggers.forEach(function (btn) {\n          var parentItem = btn.closest(\".menu__item\");\n          if (btn === item) {\n            parentItem.classList.toggle(\"menu-opened\");\n          } else {\n            parentItem.classList.remove(\"menu-opened\");\n          }\n        });\n      }\n    });\n  });\n}\n\n//# sourceURL=webpack://newTemplate/./assets/js/components/header.js?");

/***/ }),

/***/ "./assets/js/index.js":
/*!****************************!*\
  !*** ./assets/js/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   runAfterDomLoad: () => (/* binding */ runAfterDomLoad)\n/* harmony export */ });\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header */ \"./assets/js/components/header.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./assets/js/utils.js\");\n\n\nfunction runAfterDomLoad() {\n  (0,_components_header__WEBPACK_IMPORTED_MODULE_0__.initMenu)();\n  (0,_utils__WEBPACK_IMPORTED_MODULE_1__.utils)();\n}\n\n//# sourceURL=webpack://newTemplate/./assets/js/index.js?");

/***/ }),

/***/ "./assets/js/utils.js":
/*!****************************!*\
  !*** ./assets/js/utils.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   utils: () => (/* binding */ utils)\n/* harmony export */ });\nfunction utils() {\n  function initCarousel() {\n    var carousel = document.querySelector(\".hero-carousel\");\n    if (!carousel) return;\n    var track = carousel.querySelector(\".hero-carousel__track\");\n    var slides = carousel.querySelectorAll(\".hero-carousel__slide\");\n    var dots = carousel.querySelectorAll(\".hero-carousel__dot\");\n    var index = 0;\n    var startX = 0;\n    var currentX = 0;\n    var isDragging = false;\n    function update() {\n      var animate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;\n      track.style.transition = animate ? \"transform 0.4s ease\" : \"none\";\n      track.style.transform = \"translateX(-\".concat(index * 100, \"%)\");\n      dots.forEach(function (dot, i) {\n        return dot.classList.toggle(\"is-active\", i === index);\n      });\n    }\n    dots.forEach(function (dot, i) {\n      dot.addEventListener(\"click\", function (e) {\n        if (isDragging) return;\n        index = i;\n        update();\n      });\n    });\n    carousel.addEventListener(\"mousedown\", function (e) {\n      isDragging = true;\n      startX = e.clientX;\n      currentX = 0;\n      update(false);\n    });\n    window.addEventListener(\"mousemove\", function (e) {\n      if (!isDragging) return;\n      currentX = e.clientX - startX;\n      track.style.transform = \"translateX(calc(-\".concat(index * 100, \"% + \").concat(currentX, \"px))\");\n    });\n    window.addEventListener(\"mouseup\", function () {\n      if (!isDragging) return;\n      isDragging = false;\n      if (currentX < -50 && index < slides.length - 1) index++;\n      if (currentX > 50 && index > 0) index--;\n      currentX = 0;\n      update();\n    });\n    update();\n  }\n  function initScrollAnimations() {\n    function animateElements() {\n      var animatedElements = document.querySelectorAll(\"[data-animation]\");\n      animatedElements.forEach(function (el) {\n        var rect = el.getBoundingClientRect();\n        if (rect.top < window.innerHeight && rect.bottom > 0 && !el.classList.contains(\"animated\")) {\n          el.classList.add(\"animated\");\n        } else if ((rect.top >= window.innerHeight || rect.bottom <= 0) && el.classList.contains(\"animated\")) {\n          el.classList.remove(\"animated\");\n        }\n      });\n    }\n    window.addEventListener(\"load\", animateElements);\n    window.addEventListener(\"scroll\", animateElements);\n  }\n  initCarousel();\n  initScrollAnimations();\n}\n\n//# sourceURL=webpack://newTemplate/./assets/js/utils.js?");

/***/ }),

/***/ "./assets/scss/style.scss":
/*!********************************!*\
  !*** ./assets/scss/style.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://newTemplate/./assets/scss/style.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/main.js");
/******/ 	
/******/ })()
;