(self["webpackChunkcampaign3"] = self["webpackChunkcampaign3"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);



const routes = [
    {
        path: '',
        redirectTo: 'campaigns',
        pathMatch: 'full'
    },
    {
        path: 'home',
        children: [
            {
                path: ":campaignId",
                children: [
                    {
                        path: ":visitId",
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(m => m.HomePageModule)
                    }
                ],
            }
        ],
    },
    {
        path: 'campaigns',
        children: [
            {
                path: "",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_campaigns_campaigns_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./campaigns/campaigns.module */ 6583)).then(m => m.CampaignsPageModule)
            },
            {
                path: ":campaignId",
                children: [
                    {
                        path: "",
                        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ./campaigns/campaign-detail/campaign-detail.module */ 7105)).then(m => m.CampaignDetailPageModule)
                    },
                    {
                        path: ":visitId",
                        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_campaigns_photo_service_ts"), __webpack_require__.e("default-src_app_campaigns_visit-detail_visit-detail_module_ts"), __webpack_require__.e("common")]).then(__webpack_require__.bind(__webpack_require__, /*! ./campaigns/visit-detail/visit-detail.module */ 5170)).then(m => m.VisitDetailPageModule)
                    },
                ]
            }
        ]
    },
    {
        path: 'new-campaign',
        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ./campaigns/campaign-add/campaign-add.module */ 2923)).then(m => m.CampaignAddPageModule)
    },
    {
        path: 'new-visit',
        children: [
            {
                path: ":campaignId",
                children: [
                    {
                        path: "",
                        loadChildren: () => __webpack_require__.e(/*! import() */ "common").then(__webpack_require__.bind(__webpack_require__, /*! ./campaigns/visit-add/visit-add.module */ 5023)).then(m => m.VisitAddPageModule)
                    },
                ]
            }
        ]
    },
    {
        path: 'show-photo',
        children: [
            {
                path: ":campaignId",
                children: [
                    {
                        path: ":visitId",
                        children: [
                            {
                                path: ":photoId",
                                children: [
                                    {
                                        path: ":position",
                                        children: [
                                            {
                                                path: "",
                                                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_campaigns_photo_service_ts"), __webpack_require__.e("common")]).then(__webpack_require__.bind(__webpack_require__, /*! ./campaigns/show-photo/show-photo.module */ 829)).then(m => m.ShowPhotoPageModule)
                                            },
                                        ]
                                    },
                                ]
                            },
                        ]
                    },
                ]
            },
        ]
    },
    {
        path: 'error-firebase',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_error_firebase_firebase_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./error/firebase/firebase.module */ 4154)).then(m => m.FirebasePageModule)
    },
    {
        path: 'apply-questionary',
        children: [
            {
                path: ":campaignId",
                children: [
                    {
                        path: ":visitId",
                        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_questionary_apply-questionary_apply-questionary_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./questionary/apply-questionary/apply-questionary.module */ 3869)).then(m => m.ApplyQuestionaryPageModule)
                    },
                ]
            }
        ]
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 1106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 3069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




//import { Firebase } from '@ionic-native/firebase/ngx'
//import { FirebaseConfig } from '@ionic-native/firebase-config/ngx'
let AppComponent = class AppComponent {
    constructor() { } //public firebaseConfig:FirebaseConfig) {    
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 7152);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/compat */ 8747);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2182);
/* harmony import */ var _questionary_formfield_control_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./questionary/formfield-control.service */ 9009);
/* harmony import */ var _questionary_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./questionary/dynamic-form/dynamic-form.component */ 2609);
/* harmony import */ var _questionary_dynamic_form_input_dynamic_form_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./questionary/dynamic-form-input/dynamic-form-input.component */ 4023);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/compat/storage */ 3893);









//import { Firebase } from '@ionic-native/firebase';
//import { FirebaseConfig } from '@ionic-native/firebase-config/ngx';







let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, _questionary_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_5__.DynamicFormComponent, _questionary_dynamic_form_input_dynamic_form_input_component__WEBPACK_IMPORTED_MODULE_6__.DynamicFormInputComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_fire_compat__WEBPACK_IMPORTED_MODULE_11__.AngularFireModule.initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.firebaseConfig), _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_12__.AngularFirestoreModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
            _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_14__.AngularFireStorageModule],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicRouteStrategy },
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__.Geolocation, _questionary_formfield_control_service__WEBPACK_IMPORTED_MODULE_4__.FormfieldControlService,],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 9795:
/*!********************************************************!*\
  !*** ./src/app/questionary/apply-questionary.model.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormField": () => (/* binding */ FormField)
/* harmony export */ });
class FormField {
    constructor(options = {}) {
        this.value = options.value;
        this.key = options.key || "";
        this.label = options.label || "";
        this.required = !!options.required;
        this.validator = options.validator || "";
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || "";
        this.type = options.type || "";
        this.options = options.options || [];
    }
}


/***/ }),

/***/ 4023:
/*!********************************************************************************!*\
  !*** ./src/app/questionary/dynamic-form-input/dynamic-form-input.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicFormInputComponent": () => (/* binding */ DynamicFormInputComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_dynamic_form_input_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./dynamic-form-input.component.html */ 7484);
/* harmony import */ var _dynamic_form_input_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-form-input.component.scss */ 2607);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);




let DynamicFormInputComponent = class DynamicFormInputComponent {
    constructor() { }
    get isValid() { return this.form.controls[this.input.key].valid; }
    ngOnInit() { }
};
DynamicFormInputComponent.ctorParameters = () => [];
DynamicFormInputComponent.propDecorators = {
    input: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    form: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
DynamicFormInputComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-dynamic-form-input',
        template: _raw_loader_dynamic_form_input_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_dynamic_form_input_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DynamicFormInputComponent);



/***/ }),

/***/ 2609:
/*!********************************************************************!*\
  !*** ./src/app/questionary/dynamic-form/dynamic-form.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynamicFormComponent": () => (/* binding */ DynamicFormComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_dynamic_form_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./dynamic-form.component.html */ 3305);
/* harmony import */ var _dynamic_form_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dynamic-form.component.scss */ 2551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _formfield_control_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../formfield-control.service */ 9009);





let DynamicFormComponent = class DynamicFormComponent {
    constructor(formfieldService) {
        this.formfieldService = formfieldService;
        this.formFields = [];
        this.payLoad = ' ';
    }
    ngOnInit() {
        this.form = this.formfieldService.toFormGroup(this.formFields);
    }
    onSubmit() {
        this.payLoad = JSON.stringify(this.form.getRawValue());
    }
};
DynamicFormComponent.ctorParameters = () => [
    { type: _formfield_control_service__WEBPACK_IMPORTED_MODULE_2__.FormfieldControlService }
];
DynamicFormComponent.propDecorators = {
    formFields: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
DynamicFormComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-dynamic-form',
        template: _raw_loader_dynamic_form_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_dynamic_form_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DynamicFormComponent);



/***/ }),

/***/ 9009:
/*!**********************************************************!*\
  !*** ./src/app/questionary/formfield-control.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormfieldControlService": () => (/* binding */ FormfieldControlService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5917);
/* harmony import */ var src_app_questionary_apply_questionary_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/questionary/apply-questionary.model */ 9795);





let FormfieldControlService = class FormfieldControlService {
    constructor() { }
    toFormGroup(inputs) {
        const group = {};
        inputs.forEach(input => {
            let validator = input.required ? [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required] : [];
            switch (input.validator) {
                case "email":
                    validator.push(_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email);
                    break;
                default:
                    break;
            }
            group[input.key] = validator.length > 0 ? new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(input.value || '', validator)
                : new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl(input.value || '');
        });
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup(group);
    }
    getFormFields() {
        const inputs = [
            new src_app_questionary_apply_questionary_model__WEBPACK_IMPORTED_MODULE_0__.FormField({
                controlType: "textbox",
                key: 'name',
                label: 'Name',
                required: true,
                order: 1
            }),
            new src_app_questionary_apply_questionary_model__WEBPACK_IMPORTED_MODULE_0__.FormField({
                controlType: "textbox",
                key: 'email',
                label: 'Email',
                type: 'email',
                required: true,
                validator: "email",
                order: 2
            }),
            new src_app_questionary_apply_questionary_model__WEBPACK_IMPORTED_MODULE_0__.FormField({
                controlType: "dropdown",
                key: 'country',
                label: 'Country',
                options: [
                    { key: 'usa', value: 'United States of America' },
                    { key: 'br', value: 'Brazil' },
                    { key: 'other', value: 'Other' }
                ],
                order: 3
            }),
            new src_app_questionary_apply_questionary_model__WEBPACK_IMPORTED_MODULE_0__.FormField({
                controlType: "checkbox",
                key: 'agree',
                label: 'I accept terms and services',
                type: 'checkbox',
                required: true,
                order: 4
            }),
            new src_app_questionary_apply_questionary_model__WEBPACK_IMPORTED_MODULE_0__.FormField({
                controlType: "radio",
                key: 'sex',
                label: 'Sex',
                type: 'radio',
                options: [
                    { key: 'male', value: 'Male' },
                    { key: 'female', value: 'Female' }
                ],
                order: 5
            }),
            new src_app_questionary_apply_questionary_model__WEBPACK_IMPORTED_MODULE_0__.FormField({
                controlType: "textarea",
                key: 'message',
                label: 'Mesage',
                type: 'textarea',
                order: 6
            })
        ];
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(inputs.sort((a, b) => a.order - b.order));
    }
};
FormfieldControlService.ctorParameters = () => [];
FormfieldControlService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], FormfieldControlService);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyBpt2FGCGyQRoQJE6BPGX7LUM_rKZBzR0Y",
        authDomain: "campaigns-web-7e394.firebaseapp.com",
        projectId: "campaigns-web-7e394",
        storageBucket: "campaigns-web-7e394.appspot.com",
        messagingSenderId: "743101838164",
        appId: "1:743101838164:web:1625af3a139973cefa8ec1",
        measurementId: "G-JH87W8560F"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		7321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		6108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		1489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		5830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		7757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		6911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		8695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		6034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		8837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		4195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		1709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		5931,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		4513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		8056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		6272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		1855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		8708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		3527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		4694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		9222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		9921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		3122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		1602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		6164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		7162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		7896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		5043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		7802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		9072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		2191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		7110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 3069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 2607:
/*!**********************************************************************************!*\
  !*** ./src/app/questionary/dynamic-form-input/dynamic-form-input.component.scss ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkeW5hbWljLWZvcm0taW5wdXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 2551:
/*!**********************************************************************!*\
  !*** ./src/app/questionary/dynamic-form/dynamic-form.component.scss ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkeW5hbWljLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 1106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ 7484:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/questionary/dynamic-form-input/dynamic-form-input.component.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<div [formGroup]=\"form\" class=\"form-group\">\n\n  <div [ngSwitch]=\"input.controlType\">\n\n    <div *ngSwitchCase=\"'textbox'\">\n      <label [attr.for]=\"input.key\">{{input.label}}</label>\n      <input class=\"form-control\" [formControlName]=\"input.key\" [id]=\"input.key\" [type]=\"input.type\">\n    </div>\n\n    <div *ngSwitchCase=\"'dropdown'\">\n      <label [attr.for]=\"input.key\">{{input.label}}</label>\n      <select class=\"custom-select\" [id]=\"input.key\" [formControlName]=\"input.key\">\n        <option *ngFor=\"let opt of input.options\" [value]=\"opt.key\">{{opt.value}}</option>\n      </select>\n    </div>\n\n    <div *ngSwitchCase=\"'checkbox'\">\n      <div class=\"form-check\">\n        <input class=\"form-check-input\" type=\"checkbox\" [formControlName]=\"input.key\" [id]=\"input.key\">\n        <label class=\"form-check-label\" [attr.for]=\"input.key\">{{input.label}}</label>\n      </div>\n    </div>\n\n    <div *ngSwitchCase=\"'radio'\">\n      <div class=\"form-check form-check-inline\" *ngFor=\"let opt of input.options\">\n        <input class=\"form-check-input\" type=\"radio\" [formControlName]=\"input.key\" [id]=\"input.key\" [value]=\"opt.value\">\n        <label class=\"form-check-label\" [attr.for]=\"opt.key\"> {{ opt.value }} </label>\n      </div>\n    </div>\n\n    <div *ngSwitchCase=\"'textarea'\">\n      <label [attr.for]=\"input.key\">{{input.label}}</label>\n      <textarea class=\"form-control\" [formControlName]=\"input.key\" [id]=\"input.key\" rows=\"5\"></textarea>\n    </div>\n\n  </div>\n\n</div>");

/***/ }),

/***/ 3305:
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/questionary/dynamic-form/dynamic-form.component.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div>\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\">\n\n    <div *ngFor=\"let formField of formFields\" class=\"form-group\">\n      <app-dynamic-form-input [input]=\"formField\" [form]=\"form\"></app-dynamic-form-input>\n    </div>\n\n    <div class=\"form-group\">\n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"form.invalid\">Save</button>\n    </div>\n  </form>\n\n  <div *ngIf=\"payLoad\" class=\"form-group\">\n    <strong>Here's the payload</strong><br>{{payLoad}}\n  </div>\n</div>\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map