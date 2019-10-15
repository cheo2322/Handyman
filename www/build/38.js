webpackJsonp([38],{

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardsuccessModule", function() { return WizardsuccessModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wizardsuccess__ = __webpack_require__(450);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WizardsuccessModule = (function () {
    function WizardsuccessModule() {
    }
    WizardsuccessModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__wizardsuccess__["a" /* Wizardsuccess */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__wizardsuccess__["a" /* Wizardsuccess */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__wizardsuccess__["a" /* Wizardsuccess */]
            ]
        })
    ], WizardsuccessModule);
    return WizardsuccessModule;
}());

//# sourceMappingURL=wizardsuccess.module.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wizardsuccess; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(96);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Wizardsuccess = (function () {
    function Wizardsuccess(navCtrl, navParams, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
    }
    Wizardsuccess.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Wizardsuccess');
    };
    Wizardsuccess.prototype.presentPopover = function () {
        var popover = this.popoverCtrl.create('Wizardpopover');
        popover.present();
    };
    Wizardsuccess.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    Wizardsuccess = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-wizardsuccess',template:/*ion-inline-start:"/home/cheo/Desktop/handyman/src/pages/wizardsuccess/wizardsuccess.html"*/'<ion-header class="hm_bg_color hm_header">\n  <button ion-button class="hm_header_btn hm_float_left hm_back_icon" (click)="goBack()"></button>\n  <div class="hm_search_header">\n    Fitness Trainer at Home\n  </div>\n  <button ion-button class="hm_header_btn hm_float_right hm_more_icon" (click)="presentPopover()"></button>\n  <div class="hm_clear"></div>\n</ion-header>\n\n<ion-content  class="hm_sign_bg" padding>\n	<div class="hm_wizard_content">\n		<div class="hm_wizardsuccess">\n			 <span><img src="assets/img/hm_dollar.png"></span>\n			<h5>YOU ARE ALL SET</h5>\n			<p>Within 2 hours, we will send you customised<br>\n			quotations via Notification, SMS and Email</p>\n		</div>\n	</div>\n\n</ion-content>\n'/*ion-inline-end:"/home/cheo/Desktop/handyman/src/pages/wizardsuccess/wizardsuccess.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */]])
    ], Wizardsuccess);
    return Wizardsuccess;
}());

//# sourceMappingURL=wizardsuccess.js.map

/***/ })

});
//# sourceMappingURL=38.js.map