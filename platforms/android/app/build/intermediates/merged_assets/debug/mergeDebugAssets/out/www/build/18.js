webpackJsonp([18],{

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewaddressModule", function() { return NewaddressModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__newaddress__ = __webpack_require__(305);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NewaddressModule = (function () {
    function NewaddressModule() {
    }
    NewaddressModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__newaddress__["a" /* Newaddress */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__newaddress__["a" /* Newaddress */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__newaddress__["a" /* Newaddress */]
            ]
        })
    ], NewaddressModule);
    return NewaddressModule;
}());

//# sourceMappingURL=newaddress.module.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Newaddress; });
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


var Newaddress = (function () {
    function Newaddress(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    Newaddress.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Newaddress');
    };
    Newaddress.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Newaddress = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-newaddress',template:/*ion-inline-start:"/home/cheo/Desktop/handyman/src/pages/newaddress/newaddress.html"*/'<ion-header class="hm_bg_color hm_header">\n  <button ion-button class="hm_header_btn hm_float_left hm_back_icon" (click)="dismiss()"></button>\n  <div class="hm_search_header">\n	Add address\n  </div>\n  <div class="hm_clear"></div>\n</ion-header>\n<ion-content padding>\n<div class="hm_service_listing" style="padding-top:10px;">\n	<h6>Add new Address</h6>\n	<div class="hm_clear"></div>\n	<div class="hm_newaddress_field">\n		<ul>\n			<li>\n				<input class="hm_new_input" placeholder="Building / House / Flat No">\n			</li>\n			<li>\n				<input class="hm_new_input" placeholder="Landmark">\n			</li>\n			<li>\n				<input class="hm_new_input" placeholder="Home or Office etc">\n			</li>\n			<li>\n				<input class="hm_new_input" placeholder="Town">\n			</li>\n			<li>\n				<input class="hm_new_input" placeholder="City">\n			</li>\n		</ul>\n	</div>\n</div>\n</ion-content>\n<ion-footer>\n	<div class="hm_btn_bottom" >\n		<button class="hm_bottom_save">Save<span><img src="assets/img/hm_tick.png"></span></button>\n	</div>\n</ion-footer>\n'/*ion-inline-end:"/home/cheo/Desktop/handyman/src/pages/newaddress/newaddress.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], Newaddress);
    return Newaddress;
}());

//# sourceMappingURL=newaddress.js.map

/***/ })

});
//# sourceMappingURL=18.js.map