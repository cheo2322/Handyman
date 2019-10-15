webpackJsonp([13],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectaddressModule", function() { return SelectaddressModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selectaddress__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SelectaddressModule = (function () {
    function SelectaddressModule() {
    }
    SelectaddressModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__selectaddress__["a" /* Selectaddress */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__selectaddress__["a" /* Selectaddress */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__selectaddress__["a" /* Selectaddress */]
            ]
        })
    ], SelectaddressModule);
    return SelectaddressModule;
}());

//# sourceMappingURL=selectaddress.module.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Selectaddress; });
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


var Selectaddress = (function () {
    function Selectaddress(navCtrl, navParams, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
    }
    Selectaddress.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Selectaddress');
    };
    Selectaddress.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Selectaddress.prototype.newaddress = function () {
        var modal = this.modalCtrl.create('Newaddress');
        modal.present();
    };
    Selectaddress.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    Selectaddress = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-selectaddress',template:/*ion-inline-start:"/home/cheo/Desktop/handyman/src/pages/selectaddresss/selectaddress.html"*/'<ion-header class="hm_bg_color hm_header">\n  <button ion-button class="hm_header_btn hm_float_left hm_back_icon" (click)="goBack()"></button>\n  <div class="hm_search_header">\n	Select address\n  </div>\n  <div class="hm_clear"></div>\n</ion-header>\n<ion-content padding>\n<div class="hm_service_listing" style="padding-top:10px;">\n	<h6>Choose Address</h6>\n	<button class="hm_add_address" (click) = "newaddress()">Add New Address<span>+</span></button>\n\n	<br>\n	<br>\n	<hr>\n	<h6>Saved Address</h6>\n	<div class="hm_cancel_pop_lower" style="padding:0px;">\n		<ul>\n			<li>\n				<div class="hm_cancel_radio">\n					<ion-radio ng-model="choice3" ng-value="\'C\'"></ion-radio>\n				</div>\n				<div class="hm_cancel_reason">\n					Banglore City, Station Jn, Railway Colony<br>\nBanglore\n				</div>\n				<div class="hm_clear"></div>\n			</li>\n			<li>\n				<div class="hm_cancel_radio">\n					<ion-radio ng-model="choice3" ng-value="\'C\'"></ion-radio>\n				</div>\n				<div class="hm_cancel_reason">\n					Banglore City, Station Jn, Railway Colony<br>\nBanglore\n				</div>\n				<div class="hm_clear"></div>\n			</li>\n		</ul>\n	</div>\n</div>\n\n</ion-content>\n<ion-footer>\n	<div class="hm_btn_bottom" >\n		<button class="hm_bottom_save1">Done<span><img src="assets/img/hm_tick.png"></span></button>\n	</div>\n</ion-footer>\n'/*ion-inline-end:"/home/cheo/Desktop/handyman/src/pages/selectaddresss/selectaddress.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], Selectaddress);
    return Selectaddress;
}());

//# sourceMappingURL=selectaddress.js.map

/***/ })

});
//# sourceMappingURL=13.js.map