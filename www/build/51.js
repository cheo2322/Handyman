webpackJsonp([51],{

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroModule", function() { return IntroModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__intro__ = __webpack_require__(430);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IntroModule = (function () {
    function IntroModule() {
    }
    IntroModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__intro__["a" /* Intro */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__intro__["a" /* Intro */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__intro__["a" /* Intro */]
            ]
        })
    ], IntroModule);
    return IntroModule;
}());

//# sourceMappingURL=intro.module.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Intro; });
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


var Intro = (function () {
    function Intro(navCtrl) {
        this.navCtrl = navCtrl;
        this.currentIndex = 0;
    }
    Intro.prototype.onSlideChanged = function () {
    };
    Intro.prototype.goToNextSlide = function () {
        this.slider.slideNext();
        this.currentIndex = this.slider.getActiveIndex();
    };
    Intro.prototype.signin = function () {
        this.navCtrl.push('Signin');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('mySlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */])
    ], Intro.prototype, "slider", void 0);
    Intro = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-intro',template:/*ion-inline-start:"/home/cheo/Desktop/handyman/src/pages/intro/intro.html"*/'<ion-content class="hm_intro_bg" >\n  <ion-slides class="hm_slider" pager="true" #mySlider>\n    <ion-slide>\n      <div class="hm_slide">\n        <div class="hm_slide_banner">\n          <img src="assets/img/hm_slide1.png">\n        </div>\n        <h4>Servicios desde la A a la Z</h4>\n        <p> Encuentra cualquier servicio <br>desde esta App. </p>\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <div class="hm_slide">\n        <div class="hm_slide_banner">\n          <img src="assets/img/hm_slide2.png">\n        </div>\n        <h4>Expertos Profesionales</h4>\n        <p>Los mejores profesionales para <br>realizar tus trabajos.</p>\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <div class="hm_slide">\n        <div class="hm_slide_banner">\n          <img src="assets/img/hm_slide3.png">\n        </div>\n        <h4>Califica la experiencia!</h4>\n        <p>Cada profesional tiene su respectiva<br>calificación, dada por lo clientes. </p>\n      </div>\n    </ion-slide>\n  </ion-slides>\n  <div class="hm_slide_btm_bay" [hidden] ="currentIndex == 2">\n      <p>Siguiente</p>\n       <button ion-button class="hm_btm_btn"(click)="goToNextSlide()">\n         <img src="assets/img/hm_round_arw.png">\n       </button>\n     </div>\n     <div class="hm_slide_btm_bay" [hidden] ="currentIndex != 2">\n         <p (click)="signin()">Sign in</p>\n          <button ion-button class="hm_btm_btn" (click)="signin()">\n            <img src="assets/img/hm_round_arw.png">\n          </button>\n        </div>\n</ion-content>\n'/*ion-inline-end:"/home/cheo/Desktop/handyman/src/pages/intro/intro.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], Intro);
    return Intro;
}());

//# sourceMappingURL=intro.js.map

/***/ })

});
//# sourceMappingURL=51.js.map