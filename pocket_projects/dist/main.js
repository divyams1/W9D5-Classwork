/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup.js */ \"./src/warmup.js\");\n\n\nlet clockElement = document.getElementById('clock');\n\n\nclass Clock {\n    constructor() {\n        const currentTime = new Date();\n\n        this.hours = currentTime.getHours();\n        this.minutes = currentTime.getMinutes();\n        this.seconds = currentTime.getSeconds();\n        this.printTime();\n\n        setInterval(this._tick.bind(this), 1000);\n    }\n\n    printTime() {\n        const timeString = [this.hours, this.minutes, this.seconds].join(\":\");\n        (0,_warmup_js__WEBPACK_IMPORTED_MODULE_0__.htmlGenerator)(timeString, clockElement);\n    }\n\n    _tick() {\n        this._incrementSeconds();\n        this.printTime();\n        // htmlGenerator(this.printTime(), clockElement);\n    }\n\n    _incrementSeconds() {\n        this.seconds += 1;\n        if (this.seconds === 60) {\n        this.seconds = 0;\n        this._incrementMinutes();\n        }\n    }\n\n    _incrementMinutes() {\n        this.minutes += 1;\n        if (this.minutes === 60) {\n        this.minutes = 0;\n        this._incrementHours();\n        }\n    }\n\n    _incrementHours() {\n        this.hours = (this.hours + 1) % 24;\n    }\n}\nlet clock = new Clock();\n// module.exports = clock;\n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/drop_down.js":
/*!**************************!*\
  !*** ./src/drop_down.js ***!
  \**************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

eval("let drop_down_nav = document.getElementsByClassName(\"drop-down-dog-nav\");\n\nconst dogs = {\n  \"Corgi\": \"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/\",\n  \"Australian Shepherd\": \"https://www.akc.org/dog-breeds/australian-shepherd/\",\n  \"Affenpinscher\": \"https://www.akc.org/dog-breeds/affenpinscher/\",\n  \"American Staffordshire Terrier\": \"https://www.akc.org/dog-breeds/american-staffordshire-terrier/\",\n  \"Tosa\": \"https://www.akc.org/dog-breeds/tosa/\",\n  \"Labrador Retriever\": \"https://www.akc.org/dog-breeds/labrador-retriever/\",\n  \"French Bulldog\": \"https://www.akc.org/dog-breeds/french-bulldog/\" \n};\n\nfunction dogLinkCreator(object) {\n  let dog_links = [];\n  for (const name in object) {\n    // console.log(`${name}: ${object[name]}`);\n    let ele = document.createElement(\"a\");\n    let a_content = document.createTextNode(name);\n    ele.appendChild(a_content);\n    ele.href = object[name];\n    let li = document.createElement(\"li\");\n    li.classList.add(\"dog-link\");\n    li.appendChild(ele);\n    dog_links.push(li)\n  }\n  return dog_links;\n};\n\nfunction attachDogLinks() {\n  let drop_down = document.getElementsByClassName(\"drop-down-dog-list\");\n  let dog_links = dogLinkCreator(dogs);\n  dog_links.forEach(function(ele) {\n    drop_down[0].appendChild(ele);\n  });\n};\n\nfunction handleEnter() {\n  let li = document.getElementsByClassName(\"dog-link\");\n  Array.from(li).forEach( function(ele) {\n    ele.classList.toggle(\"show\");\n  })\n \n  // console.log(\"dogs\");\n};\n\nattachDogLinks();\n\ndrop_down_nav[0].addEventListener(\"mouseenter\",  function(e) {\n  handleEnter();\n});\n\ndrop_down_nav[0].addEventListener(\"mouseleave\", function (e) {\n  handleLeave();\n});\n\nfunction handleLeave() {\n  let li = document.getElementsByClassName(\"dog-link\");\n  Array.from(li).forEach(function (ele) {\n    ele.classList.toggle(\"show\");\n  })\n\n  // console.log(\"dogs\");\n};\n\n//# sourceURL=webpack:///./src/drop_down.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup.js */ \"./src/warmup.js\");\n/* harmony import */ var _clock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock.js */ \"./src/clock.js\");\n/* harmony import */ var _drop_down_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop_down.js */ \"./src/drop_down.js\");\n/* harmony import */ var _drop_down_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_drop_down_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _todo_list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo_list.js */ \"./src/todo_list.js\");\n/* harmony import */ var _todo_list_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_todo_list_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _slide_scroll_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slide_scroll.js */ \"./src/slide_scroll.js\");\n/* harmony import */ var _slide_scroll_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_slide_scroll_js__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n// import dogs from \"./drop_down.js\"\n// import dogLinkCreator from \"./drop_down.js\"\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/slide_scroll.js":
/*!*****************************!*\
  !*** ./src/slide_scroll.js ***!
  \*****************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

eval("function debounce(func, wait = 20, immediate = true) {\n  let timeout;\n\n  // This is the function that is actually executed when\n  // the DOM event is triggered.\n  return function executedFunction() {\n    const context = this;\n    const args = arguments;\n\n    // The function to be called after debounce time has elapsed\n    const later = function () {\n\n      // null timeout to indicate the debounce ended\n      timeout = null;\n\n      // Call function now if you did not in the beginning\n      if (!immediate) func.apply(context, args);\n    };\n\n    // Determine if you should call the function\n    // on the leading or trail end\n    const callNow = immediate && !timeout;\n\n    // This will reset the waiting every function execution.\n    clearTimeout(timeout);\n\n    // Restart the debounce waiting period - returns true\n    timeout = setTimeout(later, wait);\n\n    // Call immediately if you're doing a leading end execution\n    if (callNow) {\n      func.apply(context, args);\n    }\n  };\n}\nfunction getOffset(el) {\n  var _x = 0;\n  var _y = 0;\n  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {\n    _x += el.offsetLeft - el.scrollLeft;\n    _y += el.offsetTop - el.scrollTop;\n    el = el.offsetParent;\n  }\n  return _y;\n}\n\nlet image = document.getElementById('image1')\nlet scrolling = debounce( function(){ \nimages = document.getElementsByTagName(\"img\")\nArray.from(images).forEach( function(image) {\n  let windowHeight = (window.innerHeight)/2;\n  if (image.y < windowHeight) {\n    image.classList.add(\"active\")\n  }\n  if (image.y < 0) {\n    image.classList.remove(\"active\")\n  }\n}\n)}, 20 );\nwindow.addEventListener('scroll', scrolling);\n\n// console.log(window.pageYOffset)\n\n//# sourceURL=webpack:///./src/slide_scroll.js?");

/***/ }),

/***/ "./src/todo_list.js":
/*!**************************!*\
  !*** ./src/todo_list.js ***!
  \**************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

eval("let todos = JSON.parse(localStorage.getItem(\"todos\")) || [];\n// let todos = [];\nlet ul = document.getElementsByClassName(\"todos\");\nlet form_ele = document.getElementsByClassName(\"add-todo-form\");\n\nconst addTodo = function(event) {\n    let input = document.getElementsByClassName('add-todo-form')[0].elements.namedItem('add-todo').value;\n    let todo = {\n        input, \n        done: false\n    };\n    todos.push(todo);\n    localStorage.setItem(\"todos\", JSON.stringify(todos));\n    event.currentTarget.reset();\n    \n\n}\n\nform_ele[0].addEventListener(\"submit\", function(event) {\n    event.preventDefault();\n    addTodo(event);\n    populateList(todos);\n})\n\nwindow.todos;\n\nconst populateList = function(arr) {\n    while (ul[0].firstChild) {\n        ul[0].removeChild(ul[0].firstChild);\n    }\n    arr.forEach(function(ele) {\n        let label = document.createElement(\"label\");\n        let labelContent = document.createTextNode(ele[\"input\"]);\n        label.appendChild(labelContent);\n        let checkbox = document.createElement(\"input\");\n        checkbox.setAttribute(\"type\", \"checkbox\");\n        label.appendChild(checkbox);\n        ul[0].appendChild(label);\n        let newLine = document.createElement(\"br\");\n        label.appendChild(newLine);\n    });\n}\n\n\n//# sourceURL=webpack:///./src/todo_list.js?");

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/*! namespace exports */
/*! export htmlGenerator [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"htmlGenerator\": () => /* binding */ htmlGenerator\n/* harmony export */ });\n\nconst partyHeader = document.getElementById('party');\n\nconst htmlGenerator = (string, htmlElement) => {\n    // debugger\n    if (htmlElement.children) {\n        Array.from(htmlElement.children).forEach( function(ele) {\n            htmlElement.removeChild(ele);\n        });\n    }\n    let element = document.createElement(\"p\");\n    let content = document.createTextNode(string);\n    element.appendChild(content);\n    htmlElement.appendChild(element);\n};\n\nhtmlGenerator('Party Time.', partyHeader);\n\n// module.exports = warmup;\n\n//# sourceURL=webpack:///./src/warmup.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;