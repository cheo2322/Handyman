webpackJsonp([8],{

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationModule", function() { return VerificationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verification__ = __webpack_require__(317);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VerificationModule = (function () {
    function VerificationModule() {
    }
    VerificationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__verification__["a" /* Verification */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__verification__["a" /* Verification */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__verification__["a" /* Verification */]
            ]
        })
    ], VerificationModule);
    return VerificationModule;
}());

//# sourceMappingURL=verification.module.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Verification; });
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


var Verification = (function () {
    function Verification(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.startTimer();
    }
    Verification.prototype.startTimer = function () {
        setTimeout(function () {
            alert('yes');
        }, 2000);
    };
    Verification.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Verification');
    };
    Verification.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Verification.prototype.home = function () {
        this.navCtrl.push('Home');
    };
    Verification = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-verification',template:/*ion-inline-start:"/home/cheo/Desktop/handyman/src/pages/verification/verification.html"*/'<script src="moment.js"></script>\n\n<ion-content class="hm_sign_bg">\n  <div class="hm_wrapper">\n    <button ion-button class="hm_back_btn hm_button" (click)="dismiss()"></button>\n    <div class="hm_signin_inner_wrapper">\n      <br>\n      <h3>Código de verificación</h3>\n      <h4>Te hemos enviado el código de verificación<br>al número</h4>\n      <h5>+593 00000000</h5>\n      <br>\n      <br>\n      <div class="hm_verification_code">\n        <ul>\n          <li>\n            <select class="hm_verification_code_select">\n              <option>0</option>\n              <option>1</option>\n              <option>2</option>\n              <option>3</option>\n              <option>4</option>\n              <option>5</option>\n              <option>6</option>\n              <option>7</option>\n              <option>8</option>\n              <option>9</option>\n            </select>\n          </li>\n          <li>\n            <select class="hm_verification_code_select">\n              <option>0</option>\n              <option>1</option>\n              <option>2</option>\n              <option>3</option>\n              <option>4</option>\n              <option>5</option>\n              <option>6</option>\n              <option>7</option>\n              <option>8</option>\n              <option>9</option>\n            </select>\n          </li>\n          <li>\n            <select class="hm_verification_code_select">\n              <option>0</option>\n              <option>1</option>\n              <option>2</option>\n              <option>3</option>\n              <option>4</option>\n              <option>5</option>\n              <option>6</option>\n              <option>7</option>\n              <option>8</option>\n              <option>9</option>\n            </select>\n          </li>\n          <li>\n            <select class="hm_verification_code_select">\n              <option>0</option>\n              <option>1</option>\n              <option>2</option>\n              <option>3</option>\n              <option>4</option>\n              <option>5</option>\n              <option>6</option>\n              <option>7</option>\n              <option>8</option>\n              <option>9</option>\n            </select>\n          </li>\n        </ul>\n        <h4><br><span id="clock">02:00</span></h4>\n        <script src="countdown.js"></script>        \n      </div>\n    </div>\n    <div class="hm_slide_btm_bay" (click)="home()">\n         <button ion-button class="hm_btm_btn">\n           <img src="assets/img/hm_round_arw_blck.png">\n         </button>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/cheo/Desktop/handyman/src/pages/verification/verification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], Verification);
    return Verification;
}());

//# sourceMappingURL=verification.js.map

/***/ })

});
//# sourceMappingURL=8.js.map