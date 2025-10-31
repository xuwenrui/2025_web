/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ Constants)
/* harmony export */ });
class Constants {
  static STORAGE_KEY = {
    loginFlag: "loginFlag",
    userToken: "userToken",
    userId: "userId"
  };
  static API_ENDPOINTS = {
    baseUrl: "https://api.example.com",
    login: "/auth/login",
    getUser: "/user/profile"
  };
  static getStorageKey(key) {
    return `app_${key}`;
  }
}
const __webpack_exports__Constants = __webpack_exports__.Y;
export { __webpack_exports__Constants as Constants };
