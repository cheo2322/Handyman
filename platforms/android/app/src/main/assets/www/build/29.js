webpackJsonp([29],{

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabcomponentModule", function() { return TabcomponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabcomponent__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabcomponentModule = (function () {
    function TabcomponentModule() {
    }
    TabcomponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tabcomponent__["a" /* Tabcomponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabcomponent__["a" /* Tabcomponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__tabcomponent__["a" /* Tabcomponent */]
            ]
        })
    ], TabcomponentModule);
    return TabcomponentModule;
}());

//# sourceMappingURL=tabcomponent.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tabcomponent; });
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


var Tabcomponent = (function () {
    function Tabcomponent(navCtrl, modalCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
    }
    Tabcomponent.prototype.profile = function () {
        this.navCtrl.push('Profile');
    };
    Tabcomponent.prototype.myproject = function () {
        this.navCtrl.push('Myproject');
    };
    Tabcomponent.prototype.message = function () {
        this.navCtrl.push('Message');
    };
    Tabcomponent.prototype.home = function () {
        this.navCtrl.push('Home');
    };
    Tabcomponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'tabcomponent',template:/*ion-inline-start:"/home/cheo/Desktop/handyman/src/components/tabcomponent/tabcomponent.html"*/'<div class="hm_footer_tab">\n  <ul>\n    <li (click)="home()"><img src="assets/img/hm_tab1.png"></li>\n    <li (click)="myproject()"><div class="hm_red_circle">3</div><img src="assets/img/hm_tab2.png"></li>\n    <li (click)="message()"><div class="hm_red_circle">8</div><img src="assets/img/hm_tab4.png"></li>\n    <li (click)="profile()"><img src="assets/img/hm_tab3.png"></li>\n    <div class="hm_clear"></div>\n  </ul>\n</div>\n'/*ion-inline-end:"/home/cheo/Desktop/handyman/src/components/tabcomponent/tabcomponent.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], Tabcomponent);
    return Tabcomponent;
}());

//# sourceMappingURL=tabcomponent.js.map

/***/ })

});
//# sourceMappingURL=29.js.map