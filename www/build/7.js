webpackJsonp([7],{

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardpopoverModule", function() { return WizardpopoverModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wizardpopover__ = __webpack_require__(449);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WizardpopoverModule = (function () {
    function WizardpopoverModule() {
    }
    WizardpopoverModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__wizardpopover__["a" /* Wizardpopover */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__wizardpopover__["a" /* Wizardpopover */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__wizardpopover__["a" /* Wizardpopover */]
            ]
        })
    ], WizardpopoverModule);
    return WizardpopoverModule;
}());

//# sourceMappingURL=wizardpopover.module.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Wizardpopover; });
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


var Wizardpopover = (function () {
    function Wizardpopover(navCtrl, navParams, modalCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
    }
    Wizardpopover.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Wizardpopover');
    };
    Wizardpopover.prototype.requirement = function () {
        this.navCtrl.push('Requirement');
        this.viewCtrl.dismiss();
    };
    Wizardpopover.prototype.cancel = function () {
        var modal = this.modalCtrl.create('Cancel');
        modal.present();
        this.viewCtrl.dismiss();
    };
    Wizardpopover = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-wizardpopover',template:/*ion-inline-start:"/home/cheo/Desktop/handyman/src/pages/wizardpopover/wizardpopover.html"*/'<ion-content class="hm_wizardpopover">\n	<div class="hm_popover_cover">\n		<div class="hm_popover_main">\n			<ul>\n				<li (click)="requirement()"><span><img src="assets/img/hm_eye.png"></span>View Details</li>\n				<li (click)="cancel()"><span><img src="assets/img/hm_close.png"></span>Cancel Project</li>\n			</ul>\n		</div>\n	</div>\n\n</ion-content>\n'/*ion-inline-end:"/home/cheo/Desktop/handyman/src/pages/wizardpopover/wizardpopover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], Wizardpopover);
    return Wizardpopover;
}());

//# sourceMappingURL=wizardpopover.js.map

/***/ })

});
//# sourceMappingURL=7.js.map