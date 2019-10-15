webpackJsonp([22],{

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FitnessModule", function() { return FitnessModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fitness__ = __webpack_require__(298);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FitnessModule = (function () {
    function FitnessModule() {
    }
    return FitnessModule;
}());
FitnessModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__fitness__["a" /* Fitness */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__fitness__["a" /* Fitness */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__fitness__["a" /* Fitness */]
        ]
    })
], FitnessModule);

//# sourceMappingURL=fitness.module.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Fitness; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Fitness = (function () {
    function Fitness(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Fitness.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FitnessPage');
    };
    Fitness.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    Fitness.prototype.fitnesswizard = function () {
        this.navCtrl.push('Fitnesswizard');
    };
    return Fitness;
}());
Fitness = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-fitness',template:/*ion-inline-start:"/home/cheo/Desktop/handyman/src/pages/fitness/fitness.html"*/'<ion-header class="hm_bg_color hm_header">\n  <button ion-button class="hm_header_btn hm_float_left hm_back_icon" (click)="goBack()"></button>\n  <div class="hm_search_header">\nFitness\n  </div>\n  <div class="hm_clear"></div>\n</ion-header>\n<ion-content class="hm_sign_bg">\n  <div class="hm_wrapper">\n    <div class="hm_signin_inner_wrapper">\n      <div class="hm_sign_detail hm_align_center">\n        <br>\n        <br>\n        <br>\n        <br>\n        <img src="assets/img/hm_ques.png" style="width: 60px;">\n        <br>\n        <br>\n        <p>We will ask you a few questions to <br>match you with the right professionals<br> for fitness</p>\n        <br>\n        <br>\n        <button class="hm_sign_btn" (click)="fitnesswizard()">Get Started</button>\n      </div>\n    </div>\n  </div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/home/cheo/Desktop/handyman/src/pages/fitness/fitness.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], Fitness);

//# sourceMappingURL=fitness.js.map

/***/ })

});
//# sourceMappingURL=22.js.map