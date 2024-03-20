(self["webpackChunkcampaign3"] = self["webpackChunkcampaign3"] || []).push([["src_app_campaigns_campaigns_module_ts"],{

/***/ 1618:
/*!*******************************************************!*\
  !*** ./src/app/campaigns/campaigns-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CampaignsPageRoutingModule": () => (/* binding */ CampaignsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _campaigns_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./campaigns.page */ 2591);




const routes = [
    {
        path: '',
        component: _campaigns_page__WEBPACK_IMPORTED_MODULE_0__.CampaignsPage
    },
    {
        path: 'campaign-detail',
        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ./campaign-detail/campaign-detail.module */ 7105)).then(m => m.CampaignDetailPageModule)
    },
    {
        path: 'visit-detail',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_campaigns_photo_service_ts"), __webpack_require__.e("default-src_app_campaigns_visit-detail_visit-detail_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./visit-detail/visit-detail.module */ 5170)).then(m => m.VisitDetailPageModule)
    },
    {
        path: 'label-photos',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_campaigns_label-photos_label-photos_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./label-photos/label-photos.module */ 9934)).then(m => m.LabelPhotosPageModule)
    },
    {
        path: 'campaign-add',
        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ./campaign-add/campaign-add.module */ 2923)).then(m => m.CampaignAddPageModule)
    },
    {
        path: 'visit-add',
        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ./visit-add/visit-add.module */ 5023)).then(m => m.VisitAddPageModule)
    },
    {
        path: 'show-photo',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_campaigns_photo_service_ts"), __webpack_require__.e("common")]).then(__webpack_require__.bind(__webpack_require__, /*! ./show-photo/show-photo.module */ 829)).then(m => m.ShowPhotoPageModule)
    }
];
let CampaignsPageRoutingModule = class CampaignsPageRoutingModule {
};
CampaignsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CampaignsPageRoutingModule);



/***/ }),

/***/ 6583:
/*!***********************************************!*\
  !*** ./src/app/campaigns/campaigns.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CampaignsPageModule": () => (/* binding */ CampaignsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _campaigns_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./campaigns-routing.module */ 1618);
/* harmony import */ var _campaigns_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./campaigns.page */ 2591);







let CampaignsPageModule = class CampaignsPageModule {
};
CampaignsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _campaigns_routing_module__WEBPACK_IMPORTED_MODULE_0__.CampaignsPageRoutingModule
        ],
        declarations: [_campaigns_page__WEBPACK_IMPORTED_MODULE_1__.CampaignsPage]
    })
], CampaignsPageModule);



/***/ }),

/***/ 2591:
/*!*********************************************!*\
  !*** ./src/app/campaigns/campaigns.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CampaignsPage": () => (/* binding */ CampaignsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_campaigns_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./campaigns.page.html */ 5341);
/* harmony import */ var _campaigns_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./campaigns.page.scss */ 4116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firebase.service */ 9446);
/* harmony import */ var _campaigns_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./campaigns.service */ 4369);







let CampaignsPage = class CampaignsPage {
    constructor(campaignService, router, firebaseService) {
        this.campaignService = campaignService;
        this.router = router;
        this.firebaseService = firebaseService;
        this.campaigns = [];
    }
    ngOnInit() {
        //this.campaigns = this.campaignService.getCampaigns()
        const path = 'campaigns/';
        this.firebaseService.getDocuments(path).subscribe(res => {
            this.campaigns = res;
        });
    }
    ionViewWillEnter() {
        //this.campaigns = this.campaignService.getCampaigns()
    }
    addNewCampaign() {
        this.router.navigate(['/new-campaign']);
    }
};
CampaignsPage.ctorParameters = () => [
    { type: _campaigns_service__WEBPACK_IMPORTED_MODULE_3__.CampaignsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__.FirebaseService }
];
CampaignsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-campaigns',
        template: _raw_loader_campaigns_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_campaigns_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CampaignsPage);



/***/ }),

/***/ 4116:
/*!***********************************************!*\
  !*** ./src/app/campaigns/campaigns.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW1wYWlnbnMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 5341:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/campaigns/campaigns.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Campañas</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-list>\n<ion-item *ngFor='let campaign of campaigns' [routerLink]=\"['/campaigns',campaign.id]\">\n<ion-avatar slot=\"start\">\n  <ion-img [src]=\"campaign.imageURL\"></ion-img>\n</ion-avatar>\n<ion-title>[{{ campaign.code }}] {{ campaign.title }} </ion-title>\n</ion-item>\n</ion-list>\n\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n  <ion-fab-button (click)=\"addNewCampaign()\">\n    <ion-icon name=\"add\"></ion-icon>\n  </ion-fab-button>\n</ion-fab>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_campaigns_campaigns_module_ts.js.map