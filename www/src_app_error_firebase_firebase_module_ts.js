(self["webpackChunkcampaign3"] = self["webpackChunkcampaign3"] || []).push([["src_app_error_firebase_firebase_module_ts"],{

/***/ 9781:
/*!***********************************************************!*\
  !*** ./src/app/error/firebase/firebase-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirebasePageRoutingModule": () => (/* binding */ FirebasePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _firebase_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firebase.page */ 6947);




const routes = [
    {
        path: '',
        component: _firebase_page__WEBPACK_IMPORTED_MODULE_0__.FirebasePage
    }
];
let FirebasePageRoutingModule = class FirebasePageRoutingModule {
};
FirebasePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FirebasePageRoutingModule);



/***/ }),

/***/ 4154:
/*!***************************************************!*\
  !*** ./src/app/error/firebase/firebase.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirebasePageModule": () => (/* binding */ FirebasePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _firebase_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firebase-routing.module */ 9781);
/* harmony import */ var _firebase_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firebase.page */ 6947);







let FirebasePageModule = class FirebasePageModule {
};
FirebasePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _firebase_routing_module__WEBPACK_IMPORTED_MODULE_0__.FirebasePageRoutingModule
        ],
        declarations: [_firebase_page__WEBPACK_IMPORTED_MODULE_1__.FirebasePage]
    })
], FirebasePageModule);



/***/ }),

/***/ 6947:
/*!*************************************************!*\
  !*** ./src/app/error/firebase/firebase.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirebasePage": () => (/* binding */ FirebasePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_firebase_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./firebase.page.html */ 3916);
/* harmony import */ var _firebase_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firebase.page.scss */ 8224);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let FirebasePage = class FirebasePage {
    constructor() { }
    ngOnInit() {
    }
};
FirebasePage.ctorParameters = () => [];
FirebasePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-firebase',
        template: _raw_loader_firebase_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_firebase_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FirebasePage);



/***/ }),

/***/ 8224:
/*!***************************************************!*\
  !*** ./src/app/error/firebase/firebase.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaXJlYmFzZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 3916:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/error/firebase/firebase.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>firebase</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_error_firebase_firebase_module_ts.js.map