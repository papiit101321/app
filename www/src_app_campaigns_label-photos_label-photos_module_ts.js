(self["webpackChunkcampaign3"] = self["webpackChunkcampaign3"] || []).push([["src_app_campaigns_label-photos_label-photos_module_ts"],{

/***/ 6973:
/*!***********************************************************************!*\
  !*** ./src/app/campaigns/label-photos/label-photos-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LabelPhotosPageRoutingModule": () => (/* binding */ LabelPhotosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _label_photos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./label-photos.page */ 3266);




const routes = [
    {
        path: '',
        component: _label_photos_page__WEBPACK_IMPORTED_MODULE_0__.LabelPhotosPage
    }
];
let LabelPhotosPageRoutingModule = class LabelPhotosPageRoutingModule {
};
LabelPhotosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LabelPhotosPageRoutingModule);



/***/ }),

/***/ 9934:
/*!***************************************************************!*\
  !*** ./src/app/campaigns/label-photos/label-photos.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LabelPhotosPageModule": () => (/* binding */ LabelPhotosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _label_photos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./label-photos-routing.module */ 6973);
/* harmony import */ var _label_photos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./label-photos.page */ 3266);







let LabelPhotosPageModule = class LabelPhotosPageModule {
};
LabelPhotosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _label_photos_routing_module__WEBPACK_IMPORTED_MODULE_0__.LabelPhotosPageRoutingModule
        ],
        declarations: [_label_photos_page__WEBPACK_IMPORTED_MODULE_1__.LabelPhotosPage]
    })
], LabelPhotosPageModule);



/***/ }),

/***/ 3266:
/*!*************************************************************!*\
  !*** ./src/app/campaigns/label-photos/label-photos.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LabelPhotosPage": () => (/* binding */ LabelPhotosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_label_photos_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./label-photos.page.html */ 58);
/* harmony import */ var _label_photos_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./label-photos.page.scss */ 4773);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let LabelPhotosPage = class LabelPhotosPage {
    //visit: Visit
    //campaignId: string
    //visitId: string
    //constructor( private campaignsService: CampaignsService, private activatedRoute: ActivatedRoute ) { }
    constructor() { }
    ngOnInit() {
        //this.activatedRoute.paramMap.subscribe( paramMap => {
        //  //redirect
        //  this.campaignId = paramMap.get('campaignId')
        //  this.visitId = paramMap.get('visitId')
        //  this.visit = this.campaignsService.getVisit(this.campaignId, this.visitId)
        //})
    }
};
LabelPhotosPage.ctorParameters = () => [];
LabelPhotosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-label-photos',
        template: _raw_loader_label_photos_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_label_photos_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LabelPhotosPage);



/***/ }),

/***/ 4773:
/*!***************************************************************!*\
  !*** ./src/app/campaigns/label-photos/label-photos.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYWJlbC1waG90b3MucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 58:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/campaigns/label-photos/label-photos.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Label </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_campaigns_label-photos_label-photos_module_ts.js.map