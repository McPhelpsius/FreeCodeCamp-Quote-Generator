webpackJsonp([0],[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fonts_main_css__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fonts_main_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__fonts_main_css__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scss_main_scss__ = __webpack_require__(2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scss_main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__scss_main_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_main__ = __webpack_require__(3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_main___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__js_main__);\n/* Vendor */\n\n/* Fonts */\n\n\n/* Styles */\n\n\n/* Scripts */\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC5qcz9kOGVlIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIFZlbmRvciAqL1xuXG4vKiBGb250cyAqL1xuaW1wb3J0ICcuL2ZvbnRzL21haW4uY3NzJztcblxuLyogU3R5bGVzICovXG5pbXBvcnQgJy4vc2Nzcy9tYWluLnNjc3MnO1xuXG4vKiBTY3JpcHRzICovXG5pbXBvcnQgJy4vanMvbWFpbic7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2ZvbnRzL21haW4uY3NzP2VmMjUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2ZvbnRzL21haW4uY3NzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Njc3MvbWFpbi5zY3NzPzk0MzMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Njc3MvbWFpbi5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("document.querySelector('#load-quote').addEventListener('click', function () {\n  var quoteHeader = new Headers({\n    method: 'GET',\n    'Content-Type': 'application/json' });\n\n  var quote = fetch('http://quotes.rest/qod.json');\n  // ?filter[orderby]=rand&filter[posts_per_page]=1\n  quote.\n  then(function (response) {\n    var contentType = response.headers.get('content-type');\n    if (contentType && contentType.includes('application/json')) {\n      return response.json();\n    } else {\n      throw new TypeError(\"That's no JSON!\");\n    }\n  }).\n  then(function (data) {\n    var quoteData = data.contents.quotes[0];\n    document.getElementById('quote-display').innerHTML = '' + quoteData.quote;\n    document.getElementById('author-title').innerHTML = '- ' +\n    quoteData.author + ',<br> &nbsp; &nbsp;' +\n    quoteData.title;\n  }).\n  catch(function (error) {\n    alert(error);\n    console.log(error);\n  });\n});\n\n// http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvanMvbWFpbi5qcz82OTFmIl0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2FkLXF1b3RlJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNvbnN0IHF1b3RlSGVhZGVyID0gbmV3IEhlYWRlcnMoe1xuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICB9KTtcbiAgY29uc3QgcXVvdGUgPSBmZXRjaCgnaHR0cDovL3F1b3Rlcy5yZXN0L3FvZC5qc29uJyk7XG4gIC8vID9maWx0ZXJbb3JkZXJieV09cmFuZCZmaWx0ZXJbcG9zdHNfcGVyX3BhZ2VdPTFcbiAgcXVvdGVcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICB2YXIgY29udGVudFR5cGUgPSByZXNwb25zZS5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJyk7XG4gICAgICBpZiAoY29udGVudFR5cGUgJiYgY29udGVudFR5cGUuaW5jbHVkZXMoJ2FwcGxpY2F0aW9uL2pzb24nKSkge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlRoYXQncyBubyBKU09OIVwiKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgY29uc3QgcXVvdGVEYXRhID0gZGF0YS5jb250ZW50cy5xdW90ZXNbMF07XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVvdGUtZGlzcGxheScpLmlubmVySFRNTCA9IGAke3F1b3RlRGF0YS5xdW90ZX1gO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1dGhvci10aXRsZScpLmlubmVySFRNTCA9IGAtICR7XG4gICAgICAgIHF1b3RlRGF0YS5hdXRob3JcbiAgICAgIH0sPGJyPiAmbmJzcDsgJm5ic3A7JHtxdW90ZURhdGEudGl0bGV9YDtcbiAgICB9KVxuICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICBhbGVydChlcnJvcik7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSk7XG59KTtcblxuLy8gaHR0cDovL2FwaS5mb3Jpc21hdGljLmNvbS9hcGkvMS4wLz9tZXRob2Q9Z2V0UXVvdGUmZm9ybWF0PWpzb24mbGFuZz1lblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9tYWluLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ })
],[0]);