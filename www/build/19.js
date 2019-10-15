webpackJsonp([19],{

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationModule", function() { return LocationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__location__ = __webpack_require__(431);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LocationModule = (function () {
    function LocationModule() {
    }
    LocationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__location__["a" /* Location */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__location__["a" /* Location */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__location__["a" /* Location */]
            ]
        })
    ], LocationModule);
    return LocationModule;
}());

//# sourceMappingURL=location.module.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Location; });
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


var Location = (function () {
    function Location(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    Location.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Location');
    };
    Location.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Location = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-location',template:/*ion-inline-start:"/home/cheo/Desktop/handyman/src/pages/location/location.html"*/'<ion-header class="hm_bg_color hm_header">\n  <button ion-button class="hm_header_btn hm_float_left hm_back_icon" (click)="dismiss()"></button>\n  <div class="hm_search_header">\n    <input class="hm_search_locality_input" placeholder="Search your locality today itself">\n  </div>\n  <button ion-button class="hm_header_btn hm_float_right hm_search_icon"></button>\n  <div class="hm_clear"></div>\n</ion-header>\n<ion-content class="hm_sign_bg">\n  <div class="hm_wrapper">\n    <div class="hm_inner_content">\n      <div class="hm_get_my_loc">\n      <span><img src="assets/img/hm_get_loc.png"></span>Get my Location\n      </div>\n      <hr>\n      <div class="hm_recent_search">\n        <div class="hm_recent_search_head">\n            <span><img src="assets/img/hm_recent.png"></span>Recent Searches\n        </div>\n        <ul>\n          <li>Los Angeles, California</li>\n          <li>New Delhi, India</li>\n          <li>Cochin, Kerala</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/cheo/Desktop/handyman/src/pages/location/location.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], Location);
    return Location;
}());

//# sourceMappingURL=location.js.map

/***/ })

});
//# sourceMappingURL=19.js.map