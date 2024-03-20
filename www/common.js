(self["webpackChunkcampaign3"] = self["webpackChunkcampaign3"] || []).push([["common"],{

/***/ 8225:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-d4bd4f74.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createButtonActiveGesture)
/* harmony export */ });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ 3150);
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ 2954);
/* harmony import */ var _index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-34cb2743.js */ 9461);




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    (0,_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c)(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return (0,_index_34cb2743_js__WEBPACK_IMPORTED_MODULE_2__.createGesture)({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.a),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.b),
    onEnd: () => {
      clearActiveButton(true);
      (0,_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__.h)();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ 7330:
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ attachComponent),
/* harmony export */   "d": () => (/* binding */ detachComponent)
/* harmony export */ });
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ 2377);


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => (0,_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__.c)(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ 2954:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ hapticSelectionStart),
/* harmony export */   "b": () => (/* binding */ hapticSelectionChanged),
/* harmony export */   "c": () => (/* binding */ hapticSelection),
/* harmony export */   "d": () => (/* binding */ hapticImpact),
/* harmony export */   "h": () => (/* binding */ hapticSelectionEnd)
/* harmony export */ });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ }),

/***/ 408:
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ SPINNERS)
/* harmony export */ });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ 1269:
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ createColorClasses),
/* harmony export */   "g": () => (/* binding */ getClassMap),
/* harmony export */   "h": () => (/* binding */ hostContext),
/* harmony export */   "o": () => (/* binding */ openURL)
/* harmony export */ });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ 8835:
/*!***********************************************************************!*\
  !*** ./src/app/campaigns/campaign-add/campaign-add-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CampaignAddPageRoutingModule": () => (/* binding */ CampaignAddPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _campaign_add_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./campaign-add.page */ 3865);




const routes = [
    {
        path: '',
        component: _campaign_add_page__WEBPACK_IMPORTED_MODULE_0__.CampaignAddPage
    }
];
let CampaignAddPageRoutingModule = class CampaignAddPageRoutingModule {
};
CampaignAddPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CampaignAddPageRoutingModule);



/***/ }),

/***/ 2923:
/*!***************************************************************!*\
  !*** ./src/app/campaigns/campaign-add/campaign-add.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CampaignAddPageModule": () => (/* binding */ CampaignAddPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _campaign_add_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./campaign-add-routing.module */ 8835);
/* harmony import */ var _campaign_add_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./campaign-add.page */ 3865);







let CampaignAddPageModule = class CampaignAddPageModule {
};
CampaignAddPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _campaign_add_routing_module__WEBPACK_IMPORTED_MODULE_0__.CampaignAddPageRoutingModule
        ],
        declarations: [_campaign_add_page__WEBPACK_IMPORTED_MODULE_1__.CampaignAddPage]
    })
], CampaignAddPageModule);



/***/ }),

/***/ 3865:
/*!*************************************************************!*\
  !*** ./src/app/campaigns/campaign-add/campaign-add.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CampaignAddPage": () => (/* binding */ CampaignAddPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_campaign_add_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./campaign-add.page.html */ 2333);
/* harmony import */ var _campaign_add_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./campaign-add.page.scss */ 685);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/firebase.service */ 9446);
/* harmony import */ var _campaigns_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../campaigns.service */ 4369);







let CampaignAddPage = class CampaignAddPage {
    constructor(campaignService, router, firebaseService) {
        this.campaignService = campaignService;
        this.router = router;
        this.firebaseService = firebaseService;
    }
    ngOnInit() {
    }
    saveNewCampaign(title, code, resume, imgURL, date_start, date_end, people_on_charge) {
        const campaign = {
            id: this.firebaseService.createID(),
            title: title.value,
            code: code.value,
            imageURL: imgURL.value,
            resume: resume.value,
            date_start: date_start.value,
            date_end: date_end.value,
            people_on_charge: people_on_charge.value,
            visits: [],
        };
        const link = 'campaigns/';
        this.firebaseService.createDocument(campaign, link, campaign.id).then(res => {
            this.router.navigate(['/campaigns']);
        }).catch(err => {
            console.log('Error de firebase -> ', err);
            this.router.navigate(['/error-firebase']);
        });
    }
};
CampaignAddPage.ctorParameters = () => [
    { type: _campaigns_service__WEBPACK_IMPORTED_MODULE_3__.CampaignsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__.FirebaseService }
];
CampaignAddPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-campaign-add',
        template: _raw_loader_campaign_add_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_campaign_add_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CampaignAddPage);



/***/ }),

/***/ 3999:
/*!*****************************************************************************!*\
  !*** ./src/app/campaigns/campaign-detail/campaign-detail-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CampaignDetailPageRoutingModule": () => (/* binding */ CampaignDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _campaign_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./campaign-detail.page */ 1282);




const routes = [
    {
        path: '',
        component: _campaign_detail_page__WEBPACK_IMPORTED_MODULE_0__.CampaignDetailPage
    }
];
let CampaignDetailPageRoutingModule = class CampaignDetailPageRoutingModule {
};
CampaignDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CampaignDetailPageRoutingModule);



/***/ }),

/***/ 7105:
/*!*********************************************************************!*\
  !*** ./src/app/campaigns/campaign-detail/campaign-detail.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CampaignDetailPageModule": () => (/* binding */ CampaignDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _campaign_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./campaign-detail-routing.module */ 3999);
/* harmony import */ var _campaign_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./campaign-detail.page */ 1282);







let CampaignDetailPageModule = class CampaignDetailPageModule {
};
CampaignDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _campaign_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.CampaignDetailPageRoutingModule
        ],
        declarations: [_campaign_detail_page__WEBPACK_IMPORTED_MODULE_1__.CampaignDetailPage]
    })
], CampaignDetailPageModule);



/***/ }),

/***/ 1282:
/*!*******************************************************************!*\
  !*** ./src/app/campaigns/campaign-detail/campaign-detail.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CampaignDetailPage": () => (/* binding */ CampaignDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_campaign_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./campaign-detail.page.html */ 3778);
/* harmony import */ var _campaign_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./campaign-detail.page.scss */ 7627);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _campaigns_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../campaigns.service */ 4369);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/firebase.service */ 9446);








let CampaignDetailPage = class CampaignDetailPage {
    constructor(activatedRoute, campaignsService, router, alertCtrl, firebaseService) {
        this.activatedRoute = activatedRoute;
        this.campaignsService = campaignsService;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.firebaseService = firebaseService;
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
        this.visits = [{
                id: '',
                title: '',
                code: '',
                date: '',
                people_on_charge: '',
                geoposition: '',
                questionary: null,
                photos: null
            }];
    }
    ngOnInit() {
        let recipeId = "";
        this.activatedRoute.paramMap.subscribe(paramMap => {
            //redirect
            recipeId = paramMap.get('campaignId');
            //this.campaignsService.getCampaign(recipeId)
        });
        const path = '/campaigns/' + recipeId;
        this.firebaseService.getDocument(path).subscribe(value => {
            this.campaign = value;
        });
        const pathVisits = '/campaigns/' + recipeId + '/visits';
        this.firebaseService.getDocuments(pathVisits).subscribe(res => {
            this.visits = res;
            console.log(res);
        });
    }
    deleteCampaign() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alertElement = yield this.alertCtrl.create({
                header: '¿Eliminar la campaña?',
                message: 'La información no podrá ser recuperada.',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    },
                    {
                        text: 'Eliminar',
                        handler: () => {
                            //this.campaignsService.deleteCampaign(this.campaign.id)
                            const path = '/campaigns/' + this.campaign.id;
                            this.firebaseService.deleteDocument(path).then(res => {
                                this.router.navigate(['/campaigns']);
                            });
                        }
                    }
                ]
            });
            yield alertElement.present();
        });
    }
    addNewVisit() {
        this.router.navigate(['/new-visit', this.campaign.id]);
    }
};
CampaignDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: _campaigns_service__WEBPACK_IMPORTED_MODULE_2__.CampaignsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_3__.FirebaseService }
];
CampaignDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-campaign-detail',
        template: _raw_loader_campaign_detail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_campaign_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CampaignDetailPage);



/***/ }),

/***/ 4369:
/*!************************************************!*\
  !*** ./src/app/campaigns/campaigns.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CampaignsService": () => (/* binding */ CampaignsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 7152);
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/firebase.service */ 9446);




let CampaignsService = class CampaignsService {
    constructor(geolocation, firebaseService) {
        this.geolocation = geolocation;
        this.firebaseService = firebaseService;
        /*  private questionary: Questionary[] = [
            {
              id:'1',
              question:'Nombre:',
              answer:'Victor',
            },
            {
              id:'2',
              question:'Nacionalidad:',
              answer:'Mexicano',
            },
          ]
        */
        this.visits = [
            {
                id: '1',
                title: 'Dzibichaltun',
                code: "DZ",
                date: '01-01-2021',
                people_on_charge: 'Ilse',
                geoposition: '38° 53′ 35″ N, 77° 00′ 32″ W',
                questionary: null,
                photos: ['https://confinesturismo.com.mx/image/img-leis-dest/Turismo-Comunitario-Yucatan-4.jpg', 'photo2.jpg'],
            },
            {
                id: '2',
                title: 'Mayapan',
                code: "MY",
                date: '02-01-2021',
                people_on_charge: 'Ilse',
                geoposition: '38° 53′ 35″ N, 77° 00′ 32″ W',
                questionary: null,
                photos: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiRDL8wb6OlD06D52f-9H_QvVDhDMv5dg_cg&usqp=CAU', 'photo2.jpg'],
            },
        ];
        this.campaigns = [
            {
                id: '1',
                title: 'Primera Campaña',
                code: '2021A',
                resume: 'Campaña piloto para realizar pruebas con la app',
                imageURL: 'https://visaalmundo.com/blog/wp-content/uploads/2020/07/que-hacer-en-merida-portada.png',
                date_start: '1-11-2021',
                date_end: '31-12-2021',
                people_on_charge: 'Ilse Ruiz',
                visits: this.visits,
            },
            {
                id: '2',
                title: 'Segunda Campaña',
                code: '2021B',
                resume: 'Campaña piloto para realizar pruebas con la app',
                imageURL: 'https://www.viajefest.com/wp-content/uploads/2020/05/letrero-Me%CC%81rida.jpg',
                date_start: '1-11-2021',
                date_end: '31-12-2021',
                people_on_charge: 'Ilse Ruiz',
                visits: this.visits,
            },
        ];
        this.options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
    }
    getCampaigns() {
        return [...this.campaigns];
    }
    getCampaign(campaignId) {
        return Object.assign({}, this.campaigns.find(campaign => {
            return campaign.id === campaignId;
        }));
    }
    addCampaign(campaign, link, id) {
        this.firebaseService.createDocument(campaign, link, id);
    }
    deleteCampaign(campaignId) {
        //    this.campaigns = this.campaigns.filter(campaign => {
        //      return campaign.id !== campaignId
        //    }) 
    }
    getVisit(campaignId, visitId) {
        const campaing = this.campaigns.find(campaign => {
            return campaign.id === campaignId;
        });
        return Object.assign({}, campaing.visits.find(visit => {
            return visit.id === visitId;
        }));
    }
    updateGPS() {
        this.geolocation.getCurrentPosition().then((resp) => {
            this.lat = resp.coords.latitude + "";
            this.lon = resp.coords.longitude + "";
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }
    addVisit(campaignId) {
    }
    deleteVisit(campaignId, visitId) {
    }
};
CampaignsService.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_0__.Geolocation },
    { type: _services_firebase_service__WEBPACK_IMPORTED_MODULE_1__.FirebaseService }
];
CampaignsService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], CampaignsService);



/***/ }),

/***/ 8808:
/*!*******************************************************************!*\
  !*** ./src/app/campaigns/show-photo/show-photo-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowPhotoPageRoutingModule": () => (/* binding */ ShowPhotoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _show_photo_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-photo.page */ 147);




const routes = [
    {
        path: '',
        component: _show_photo_page__WEBPACK_IMPORTED_MODULE_0__.ShowPhotoPage
    }
];
let ShowPhotoPageRoutingModule = class ShowPhotoPageRoutingModule {
};
ShowPhotoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ShowPhotoPageRoutingModule);



/***/ }),

/***/ 829:
/*!***********************************************************!*\
  !*** ./src/app/campaigns/show-photo/show-photo.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowPhotoPageModule": () => (/* binding */ ShowPhotoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _show_photo_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./show-photo-routing.module */ 8808);
/* harmony import */ var _show_photo_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-photo.page */ 147);







let ShowPhotoPageModule = class ShowPhotoPageModule {
};
ShowPhotoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _show_photo_routing_module__WEBPACK_IMPORTED_MODULE_0__.ShowPhotoPageRoutingModule
        ],
        declarations: [_show_photo_page__WEBPACK_IMPORTED_MODULE_1__.ShowPhotoPage]
    })
], ShowPhotoPageModule);



/***/ }),

/***/ 147:
/*!*********************************************************!*\
  !*** ./src/app/campaigns/show-photo/show-photo.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowPhotoPage": () => (/* binding */ ShowPhotoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_show_photo_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./show-photo.page.html */ 7560);
/* harmony import */ var _show_photo_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-photo.page.scss */ 8722);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2182);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/firebase.service */ 9446);
/* harmony import */ var _photo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../photo.service */ 6377);






//import { Firebase } from '@ionic-native/firebase/ngx';
//import { FirebaseConfig } from '@ionic-native/firebase-config/ngx';



let ShowPhotoPage = class ShowPhotoPage {
    constructor(activatedRoute, firebaseService, photoService, alertCtrl, router, angularFirestore) {
        this.activatedRoute = activatedRoute;
        this.firebaseService = firebaseService;
        this.photoService = photoService;
        this.alertCtrl = alertCtrl;
        this.router = router;
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
        this.photo = {
            // id: '',
            filepath: '',
            webviewPath: '',
            labels: []
        };
        this.form = [
            { val: 'ETIQUETA1', isChecked: true },
            { val: 'ETIQUETA2', isChecked: false },
            { val: 'ETIQUETA3', isChecked: false }
        ];
    } //private firebase: Firebase ) { }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.activatedRoute.paramMap.subscribe(paramMap => {
                //redirect
                this.campaignId = paramMap.get('campaignId');
                this.visitId = paramMap.get('visitId');
                this.position = paramMap.get('position');
                this.photoId = paramMap.get('photoId');
                //this.visit = this.campaignsService.getVisit(this.campaignId, this.visitId)
            });
            const pathC = '/campaigns/' + this.campaignId;
            this.firebaseService.getDocument(pathC).subscribe(value => {
                this.campaign = value;
            });
            const path2 = '/campaigns/' + this.campaignId + '/visits/' + this.visitId;
            this.firebaseService.getDocument(path2).subscribe(value => {
                this.visit = value;
                //console.log('read photos', this.campaign.code, this.visit.code);
                //this.photoService.loadSaved(this.campaign.key,this.visit.code);
            });
            const path3 = '/campaigns/' + this.campaignId + '/visits/' + this.visitId + '/photos/' + this.photoId;
            this.firebaseService.getDocument(pathC).subscribe(value => {
                this.photo = value;
            });
        });
    }
    saveLabels() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const alertElement = yield this.alertCtrl.create({
                header: '¿Guardar Etiquetas?',
                message: 'Las etiquetas quedaran referenciadas a la foto',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    },
                    {
                        text: 'Guardar',
                        handler: () => {
                            var labels = [];
                            for (var check in this.form) {
                                if (this.form[check].isChecked) {
                                    labels.push(this.form[check]);
                                }
                            }
                            this.photo.labels = labels;
                            //this.campaignsService.saveLabels()
                            const link = '/campaigns/' + this.campaignId + '/visits/' + this.visitId + '/photos/' + this.photoId;
                            const doc = this.angularFirestore.doc(link);
                            doc.update(this.photo).then(res => {
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
};
ShowPhotoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__.FirebaseService },
    { type: _photo_service__WEBPACK_IMPORTED_MODULE_3__.PhotoService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_7__.AngularFirestore }
];
ShowPhotoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-show-photo',
        template: _raw_loader_show_photo_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_show_photo_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ShowPhotoPage);



/***/ }),

/***/ 8474:
/*!*****************************************************************!*\
  !*** ./src/app/campaigns/visit-add/visit-add-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisitAddPageRoutingModule": () => (/* binding */ VisitAddPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _visit_add_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visit-add.page */ 8213);




const routes = [
    {
        path: '',
        component: _visit_add_page__WEBPACK_IMPORTED_MODULE_0__.VisitAddPage
    }
];
let VisitAddPageRoutingModule = class VisitAddPageRoutingModule {
};
VisitAddPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VisitAddPageRoutingModule);



/***/ }),

/***/ 5023:
/*!*********************************************************!*\
  !*** ./src/app/campaigns/visit-add/visit-add.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisitAddPageModule": () => (/* binding */ VisitAddPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _visit_add_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visit-add-routing.module */ 8474);
/* harmony import */ var _visit_add_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visit-add.page */ 8213);







let VisitAddPageModule = class VisitAddPageModule {
};
VisitAddPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _visit_add_routing_module__WEBPACK_IMPORTED_MODULE_0__.VisitAddPageRoutingModule
        ],
        declarations: [_visit_add_page__WEBPACK_IMPORTED_MODULE_1__.VisitAddPage]
    })
], VisitAddPageModule);



/***/ }),

/***/ 8213:
/*!*******************************************************!*\
  !*** ./src/app/campaigns/visit-add/visit-add.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisitAddPage": () => (/* binding */ VisitAddPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_visit_add_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./visit-add.page.html */ 7466);
/* harmony import */ var _visit_add_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visit-add.page.scss */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/firebase.service */ 9446);
/* harmony import */ var _campaigns_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../campaigns.service */ 4369);







let VisitAddPage = class VisitAddPage {
    constructor(campaignsService, activatedRoute, router, firebaseService) {
        this.campaignsService = campaignsService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.firebaseService = firebaseService;
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
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(paramMap => {
            //redirect
            this.recipeId = paramMap.get('campaignId');
            this.campaign = this.campaignsService.getCampaign(this.recipeId);
        });
        //get the information of the campaign
        const path = '/campaigns/' + this.recipeId;
        console.log(path);
        this.firebaseService.getDocument(path).subscribe(value => {
            this.campaign = value;
        });
    }
    saveNewVisit(title, code, date, people_on_charge) {
        const visit = {
            id: this.firebaseService.createID(),
            title: title.value,
            code: code.value,
            date: date.value,
            people_on_charge: people_on_charge.value,
            geoposition: "",
            questionary: null,
            photos: null
        };
        const link = 'campaigns/' + this.recipeId + '/visits';
        this.firebaseService.createDocument(visit, link, visit.id).then(res => {
            this.router.navigate(['/campaigns', this.campaign.id]);
        }).catch(err => {
            console.log('Error de firebase -> ', err);
            this.router.navigate(['/error-firebase']);
        });
        //this.campaignsService.addVisit(this.campaign.id)
    }
};
VisitAddPage.ctorParameters = () => [
    { type: _campaigns_service__WEBPACK_IMPORTED_MODULE_3__.CampaignsService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__.FirebaseService }
];
VisitAddPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-visit-add',
        template: _raw_loader_visit_add_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_visit_add_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], VisitAddPage);



/***/ }),

/***/ 9446:
/*!**********************************************!*\
  !*** ./src/app/services/firebase.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirebaseService": () => (/* binding */ FirebaseService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2182);



let FirebaseService = class FirebaseService {
    constructor(angularFirestore) {
        this.angularFirestore = angularFirestore;
    }
    getDocuments(path) {
        const itemsCollection = this.angularFirestore.collection(path);
        return itemsCollection.valueChanges();
    }
    getDocument(path) {
        const doc = this.angularFirestore.doc(path);
        return doc.valueChanges();
    }
    updateDocument() {
    }
    deleteDocument(path) {
        const doc = this.angularFirestore.doc(path);
        return doc.delete();
    }
    createDocument(data, link, id) {
        const itemsCollection = this.angularFirestore.collection(link);
        return itemsCollection.doc(id).set(data);
        //itemsCollection.add(data)
    }
    createID() {
        return this.angularFirestore.createId();
    }
};
FirebaseService.ctorParameters = () => [
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_0__.AngularFirestore }
];
FirebaseService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], FirebaseService);



/***/ }),

/***/ 685:
/*!***************************************************************!*\
  !*** ./src/app/campaigns/campaign-add/campaign-add.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW1wYWlnbi1hZGQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 7627:
/*!*********************************************************************!*\
  !*** ./src/app/campaigns/campaign-detail/campaign-detail.page.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYW1wYWlnbi1kZXRhaWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 8722:
/*!***********************************************************!*\
  !*** ./src/app/campaigns/show-photo/show-photo.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG93LXBob3RvLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 1670:
/*!*********************************************************!*\
  !*** ./src/app/campaigns/visit-add/visit-add.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aXNpdC1hZGQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 2333:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/campaigns/campaign-add/campaign-add.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/campaigns\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Nueva Campaña</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-row>\n  <ion-col>\n    <ion-card>\n      <ion-card-content>\n        <ion-input type=\"text\" placeholder=\"Título\" #title>\n        </ion-input>\n        <ion-input type=\"text\" placeholder=\"Clave\" #code>\n        </ion-input>\n\n        <ion-input type=\"text\" placeholder=\"Resumen\" #resume>\n        </ion-input>\n        <ion-input type=\"text\" placeholder=\"URL de imagen\" #imgURL>\n        </ion-input>\n        <ion-input type=\"text\" placeholder=\"Fecha de inicio\" #date_start>\n        </ion-input>\n        <ion-input type=\"text\" placeholder=\"Fecha final\" #date_end>\n        </ion-input>\n        <ion-input type=\"text\" placeholder=\"Persona encargada\" #people_on_charge>\n        </ion-input>\n\n\n        <ion-button (click)=\"saveNewCampaign(title,code,resume,imgURL,date_start,date_end,people_on_charge)\">Guardar</ion-button>\n      </ion-card-content>\n    </ion-card>\n  </ion-col>\n</ion-row>\n\n</ion-content>\n");

/***/ }),

/***/ 3778:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/campaigns/campaign-detail/campaign-detail.page.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/campaigns\"></ion-back-button>\n    </ion-buttons>\n    <ion-title> {{ campaign.title }}  </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"deleteCampaign()\" >\n        <ion-icon name=\"trash\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row>\n      <ion-col class=\"ion-no-padding\">\n        <ion-img [src]=\"campaign.imageURL\"></ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <h1 class=\"ion-text-center\"> {{ campaign.title }} </h1>\n        <p class=\"ion-text-center\"> {{campaign.date_start}} - {{ campaign.date_end }}</p>\n        <p class=\"ion-text-center\"> {{campaign.people_on_charge}}</p>\n        <p class=\"ion-text-center\"> {{campaign.resume}}</p>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-list>\n          <ion-item *ngFor='let visit of visits' [routerLink]=\"['/campaigns',campaign.id,visit.id]\">\n          <ion-avatar slot=\"start\" *ngIf=\"visit.photos && visit.photos.length > 0; else noPhoto\">\n          <ion-img [src]=\"visit.photos[0]\"></ion-img>\n          </ion-avatar>\n          <ng-template #noPhoto>\n            <ion-icon name=\"home\"></ion-icon>\n          </ng-template>\n          <ion-title>{{ visit.title }}</ion-title>\n          </ion-item>\n          </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"addNewVisit()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>\n");

/***/ }),

/***/ 7560:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/campaigns/show-photo/show-photo.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/campaigns/{{ campaignId }}/{{ visitId }}\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Etiquetar Foto</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- Checkboxes in a List -->\n<ion-list>\n  <ion-item *ngFor=\"let entry of form\">\n    <ion-label>{{entry.val}}</ion-label>\n    <ion-checkbox slot=\"end\" [(ngModel)]=\"entry.isChecked\"></ion-checkbox>\n  </ion-item>\n</ion-list>\n\n<ion-button (click)=\"saveLabels()\" >\nGuardar\n</ion-button>\n\n</ion-content>\n");

/***/ }),

/***/ 7466:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/campaigns/visit-add/visit-add.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/campaigns/{{ campaignId }}\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>[{{campaign.key}}] {{campaign.title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col>\n      <ion-card>\n        <ion-card-content>\n          <h1>Nueva Visita</h1>\n          \n          <ion-input type=\"text\" placeholder=\"Título\" #title></ion-input>\n          <ion-input type=\"text\" placeholder=\"Clave\" #code></ion-input>          \n          <ion-input type=\"text\" placeholder=\"Fecha de visita\" #date></ion-input>\n          <ion-input type=\"text\" placeholder=\"Persona encargada\" #people_on_charge></ion-input>\n          <ion-button (click)=\"saveNewVisit(title,code,date,people_on_charge)\">Guardar</ion-button>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n  </ion-row>\n  \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=common.js.map