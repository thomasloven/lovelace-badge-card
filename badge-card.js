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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/card-tools/src/lit-element.js":
/*!****************************************************!*\
  !*** ./node_modules/card-tools/src/lit-element.js ***!
  \****************************************************/
/*! exports provided: LitElement, html, css */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LitElement\", function() { return LitElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"html\", function() { return html; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"css\", function() { return css; });\nconst LitElement = customElements.get('home-assistant-main')\n  ? Object.getPrototypeOf(customElements.get('home-assistant-main'))\n  : Object.getPrototypeOf(customElements.get('hui-view'));\n\nconst html = LitElement.prototype.html;\n\nconst css = LitElement.prototype.css;\n\n\n//# sourceURL=webpack:///./node_modules/card-tools/src/lit-element.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var card_tools_src_lit_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! card-tools/src/lit-element.js */ \"./node_modules/card-tools/src/lit-element.js\");\n\n\nclass BadgeCard extends card_tools_src_lit_element_js__WEBPACK_IMPORTED_MODULE_0__[\"LitElement\"] {\n\n  static get properties() {\n    return {\n      hass: {},\n    };\n  }\n\n  setConfig(config) {\n    this._config = config;\n\n    this.badges = [];\n    this._addBadges();\n  }\n\n  updated(changedProperties) {\n    if(changedProperties.has('hass')) {\n      for(const b of this.badges)\n        b.hass = this.hass;\n    }\n  }\n\n  firstUpdated() {\n    this._addBadges();\n  }\n\n  async _addBadges() {\n    const cardHelpers = await window.loadCardHelpers();\n    const root = this.shadowRoot.querySelector(\"#badges\");\n    if(!root) return;\n    while(root.firstChild) {\n      root.removeChild(root.firstChild);\n    }\n\n    if(!this._config.entities && !this._config.badges) return;\n    for(const b of this._config.entities || this._config.badges) {\n      const badge = cardHelpers.createBadgeElement(\n        typeof(b) === \"string\"\n        ? {entity: b}\n        : b\n      );\n\n      if(this.hass)\n        badge.hass = this.hass;\n\n      root.appendChild(badge);\n      this.badges.push(badge);\n    }\n  }\n\n  render() {\n    return card_tools_src_lit_element_js__WEBPACK_IMPORTED_MODULE_0__[\"html\"]`\n    <div id=\"badges\"></div>\n    `;\n  }\n\n  static get styles() {\n    return card_tools_src_lit_element_js__WEBPACK_IMPORTED_MODULE_0__[\"css\"]`\n    #badges {\n      font-size: 85%;\n      text-align: center;\n    }\n    `;\n  }\n\n}\n\n\ncustomElements.define(\"badge-card\", BadgeCard);\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });