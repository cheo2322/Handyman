webpackJsonp([10],{

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupModule", function() { return SignupModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(314);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupModule = (function () {
    function SignupModule() {
    }
    return SignupModule;
}());
SignupModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* Signup */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* Signup */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* Signup */]
        ]
    })
], SignupModule);

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Signup; });
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


var Signup = (function () {
    function Signup(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    Signup.prototype.ionViewDidLoad = function () {
    };
    Signup.prototype.verification = function () {
        var modal = this.modalCtrl.create('Verification');
        modal.present();
    };
    Signup.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    return Signup;
}());
Signup = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"/home/cheo/Desktop/handyman/src/pages/signup/signup.html"*/'\n<ion-content class="hm_sign_bg">\n  <div class="hm_wrapper">\n    <button ion-button class="hm_back_btn hm_button" (click)="goBack()"></button>\n    <div class="hm_signin_inner_wrapper">\n      <div class="hm_logo">\n        <img src="assets/img/hm_logo.png">\n        <h5>Signup on</h5>\n        <h6>Handyman</h6>\n        <span><img src="assets/img/hm_vector_underline.png"></span>\n      </div>\n      <br>\n      <br>\n      <div class="hm_sign_detail">\n        <div class="hm_mobile_number_div">\n          <select class="hm_mobile_code">\n            <option>+91</option>\n            <option>+96</option>\n          </select>\n          <input class="hm_sign_number_input" placeholder="Mobile Number">\n          <div class="hm_clear"></div>\n        </div>\n        <input class="hm_signup_input" placeholder="Email">\n        <input class="hm_signup_input" placeholder="Full name">\n        <button class="hm_sign_btn" (click)="verification()">Next</button>\n        <br>\n        <br>\n        <p>By signing up, you agree to our <strong>terms of use</strong> and<br>\n<strong>privacy policy</strong></p>\n</div>\n</div>\n</div>\n</ion-content>\n'/*ion-inline-end:"/home/cheo/Desktop/handyman/src/pages/signup/signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
], Signup);

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=10.js.map