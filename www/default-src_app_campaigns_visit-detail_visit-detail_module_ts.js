(self["webpackChunkcampaign3"] = self["webpackChunkcampaign3"] || []).push([["default-src_app_campaigns_visit-detail_visit-detail_module_ts"],{

/***/ 1711:
/*!***********************************************************************!*\
  !*** ./src/app/campaigns/visit-detail/visit-detail-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisitDetailPageRoutingModule": () => (/* binding */ VisitDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _visit_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visit-detail.page */ 1347);




const routes = [
    {
        path: '',
        component: _visit_detail_page__WEBPACK_IMPORTED_MODULE_0__.VisitDetailPage
    }
];
let VisitDetailPageRoutingModule = class VisitDetailPageRoutingModule {
};
VisitDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VisitDetailPageRoutingModule);



/***/ }),

/***/ 5170:
/*!***************************************************************!*\
  !*** ./src/app/campaigns/visit-detail/visit-detail.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisitDetailPageModule": () => (/* binding */ VisitDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _visit_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visit-detail-routing.module */ 1711);
/* harmony import */ var _visit_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visit-detail.page */ 1347);







let VisitDetailPageModule = class VisitDetailPageModule {
};
VisitDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _visit_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.VisitDetailPageRoutingModule
        ],
        declarations: [_visit_detail_page__WEBPACK_IMPORTED_MODULE_1__.VisitDetailPage]
    })
], VisitDetailPageModule);



/***/ }),

/***/ 1347:
/*!*************************************************************!*\
  !*** ./src/app/campaigns/visit-detail/visit-detail.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisitDetailPage": () => (/* binding */ VisitDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_visit_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./visit-detail.page.html */ 48);
/* harmony import */ var _visit_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visit-detail.page.scss */ 3127);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _campaigns_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../campaigns.service */ 4369);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _photo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../photo.service */ 6377);
/* harmony import */ var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/firebase.service */ 9446);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2182);











let VisitDetailPage = class VisitDetailPage {
    constructor(activatedRoute, campaignsService, photoService, actionSheetController, router, alertCtrl, firebaseService, angularFirestore) {
        this.activatedRoute = activatedRoute;
        this.campaignsService = campaignsService;
        this.photoService = photoService;
        this.actionSheetController = actionSheetController;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.firebaseService = firebaseService;
        this.angularFirestore = angularFirestore;
        this.campaign = {
            id: '',
            title: '',
            code: '',
            resume: '',
            imageURL: '',
            date_start: '',
            date_end: '',
            people_on_charge: '',
            visits: null
        };
        this.visit = {
            id: '',
            title: '',
            code: '',
            date: '',
            people_on_charge: '',
            geoposition: '',
            questionary: null,
            photos: null
        };
    }
    goToPage(page, photo, position) {
        this.router.navigate([page]);
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.activatedRoute.paramMap.subscribe(paramMap => {
                //redirect
                this.campaignId = paramMap.get('campaignId');
                this.visitId = paramMap.get('visitId');
                //this.visit = this.campaignsService.getVisit(this.campaignId, this.visitId)
            });
            const pathC = '/campaigns/' + this.campaignId;
            this.firebaseService.getDocument(pathC).subscribe(value => {
                this.campaign = value;
            });
            const path = '/campaigns/' + this.campaignId + '/visits/' + this.visitId;
            this.firebaseService.getDocument(path).subscribe(value => {
                this.visit = value;
                console.log('read photos', this.campaign.code, this.visit.code);
                this.photoService.loadSaved(this.campaign.code, this.visit.code);
            });
        });
    }
    ionViewWillEnter() {
        this.photoService.loadSaved(this.campaign.code, this.visit.code);
        //this.campaigns = this.campaignService.getCampaigns()
    }
    applyQuestionary() {
        this.router.navigate(['/home/', this.campaignId, this.visitId]);
    }
    updateGPS() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alertElement = yield this.alertCtrl.create({
                header: '¿Actualizar GPS?',
                message: 'Se intentará encontrar la posición del lugar.',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    },
                    {
                        text: 'Actualizar',
                        handler: () => {
                            this.campaignsService.updateGPS();
                            this.visit.geoposition = this.campaignsService.lat + " " + this.campaignsService.lon;
                            //this.campaignsService.saveLabels()
                            const link = '/campaigns/' + this.campaignId + '/visits/' + this.visitId;
                            const doc = this.angularFirestore.doc(link);
                            doc.update(this.visit).then(res => {
                                this.router.navigate(['/campaigns', this.campaignId, this.visitId]);
                            }).catch(err => {
                                console.log('Error de firebase -> ', err);
                                this.router.navigate(['/error-firebase']);
                            });
                        }
                    }
                ]
            });
            yield alertElement.present();
        });
    }
    showPhoto(photo, position) {
        this.router.navigate(['/show-photo', this.campaignId, this.visitId, photo.filepath, position]);
    }
    showActionSheet(photo, position) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Photos',
                buttons: [{
                        text: 'Borrar',
                        role: 'destructive',
                        icon: 'trash',
                        handler: () => {
                            this.photoService.deletePicture(photo, position, this.campaignId, this.visitId);
                        }
                    }, {
                        text: 'Cancelar',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            // Nothing to do, action sheet is automatically closed
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
    takePhoto() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.photoService.addNewToGallery(this.campaign.code, this.visit.code, this.campaignId, this.visitId);
        });
    }
    deleteVisit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const alertElement = yield this.alertCtrl.create({
                header: '¿Eliminar la visita?',
                message: 'La información no podrá ser recuperada.',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    },
                    {
                        text: 'Eliminar',
                        handler: () => {
                            //this.campaignsService.deleteVisit(this.campaignId, this.visitId)
                            const path = '/campaigns/' + this.campaignId + '/visits/' + this.visitId;
                            this.firebaseService.deleteDocument(path).then(res => {
                                this.router.navigate(['/campaigns', this.campaignId]);
                            });
                        }
                    }
                ]
            });
            yield alertElement.present();
        });
    }
};
VisitDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _campaigns_service__WEBPACK_IMPORTED_MODULE_2__.CampaignsService },
    { type: _photo_service__WEBPACK_IMPORTED_MODULE_3__.PhotoService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ActionSheetController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_4__.FirebaseService },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_8__.AngularFirestore }
];
VisitDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-visit-detail',
        template: _raw_loader_visit_detail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_visit_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], VisitDetailPage);



/***/ }),

/***/ 3127:
/*!***************************************************************!*\
  !*** ./src/app/campaigns/visit-detail/visit-detail.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aXNpdC1kZXRhaWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 48:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/campaigns/visit-detail/visit-detail.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/campaigns/{{ campaignId }}\"></ion-back-button>\n    </ion-buttons>\n    <ion-title> {{ visit.title }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"deleteVisit()\" >\n        <ion-icon name=\"trash\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n\n  \n</ion-header>\n\n<ion-content>\n<ion-grid class=\"ion-no-padding\">\n  <ion-row>\n    <ion-col class=\"ion-no-padding\" *ngIf=\"photoService.photos && photoService.photos.length > 0; else noPhoto\">\n     <ion-img [src]=\"photoService.photos[0].webviewPath\"></ion-img> \n    </ion-col>\n    <ng-template #noPhoto>\n      <ion-col class=\"ion-no-padding\">\n      <p class=\"ion-text-center\"> Sin fotos</p>\n    </ion-col>\n    </ng-template>\n  </ion-row>\n  <ion-row>\n    <ion-col>\n      <h1 class=\"ion-text-center\"> {{ visit.title}} [{{visit.code}}] </h1>      \n      <p class=\"ion-text-center\"> {{ visit.geoposition }}</p>\n      <p class=\"ion-text-center\"> {{ visit.date }}</p>\n      <p class=\"ion-text-center\"> {{ visit.people_on_charge}}</p>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n<ion-grid class=\"ion-no-padding\">\n  <ion-row>\n    <ion-col class=\"ion-no-padding, ion-text-center\">\n      <ion-button (click)=\"updateGPS()\">\n        <ion-icon size=\"large\" name=\"earth-outline\"></ion-icon>\n      </ion-button>\n    </ion-col>\n    <ion-col class=\"ion-no-padding, ion-text-center\">\n      <ion-button (click)=\"takePhoto()\">\n        <ion-icon size=\"large\" name=\"camera-outline\"></ion-icon>\n      </ion-button>\n    </ion-col>\n    <ion-col class=\"ion-no-padding, ion-text-center\">\n      <ion-button (click)=\"applyQuestionary()\">\n        <ion-icon size=\"large\" name=\"book-outline\"></ion-icon>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n  \n  <ion-grid>\n    <ion-row>\n    <ion-col size=\"6\" *ngFor=\"let photo of photoService.photos; index as position\">\n      <ion-img [src]=\"photo.webviewPath\" (click)=\"showPhoto(photo, position)\"></ion-img>\n    </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_campaigns_visit-detail_visit-detail_module_ts.js.map