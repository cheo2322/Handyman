webpackJsonp([41],{

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryModule", function() { return SummaryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__summary__ = __webpack_require__(444);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SummaryModule = (function () {
    function SummaryModule() {
    }
    SummaryModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__summary__["a" /* Summary */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__summary__["a" /* Summary */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__summary__["a" /* Summary */]
            ]
        })
    ], SummaryModule);
    return SummaryModule;
}());

//# sourceMappingURL=summary.module.js.map

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Summary; });
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


var Summary = (function () {
    function Summary(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Summary.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Summary');
    };
    Summary.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    Summary.prototype.address = function () {
        this.navCtrl.push('Address');
    };
    Summary = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-summary',template:/*ion-inline-start:"/home/cheo/Desktop/handyman/src/pages/summary/summary.html"*/'<ion-header class="hm_bg_color hm_header">\n  <button ion-button class="hm_header_btn hm_float_left hm_back_icon" (click)="goBack()"></button>\n  <div class="hm_search_header">\n	Summary\n  </div>\n  <div class="hm_clear"></div>\n</ion-header>\n<ion-content padding>\n	<div class="hm_service_listing" style="padding-top:10px;">\n		<h6>Item Summary</h6>\n		<ul>\n			<li>\n				<div class="hm_service_details">\n					<h5>Monthly Wax and Groom</h5>\n					<p>Waxing ( Full Legs, Arms, Under Arms )<br>\n+ Threading ( Full Face )</p>\n				</div>\n				<div class="hm_clear"></div>\n				<div class="hm_service_listing_low_bay">\n				<div class="hm_toggle_btn">\n					<span>-</span>\n					1\n					<span>+</span>\n				</div>\n				<div class="hm_toggle_btn1">\n					<span>x</span>\n					<span>$599</span>\n				</div>\n				<div class="hm_toggle_btn2">\n					<span>$599</span>\n				</div>\n				<div class="hm_clear"></div>\n				</div>\n			</li>\n			<li>\n				<div class="hm_service_details">\n					<h5>Monthly Wax and Groom</h5>\n					<p>Waxing ( Full Legs, Arms, Under Arms )<br>\n+ Threading ( Full Face )</p>\n				</div>\n				<div class="hm_clear"></div>\n				<div class="hm_service_listing_low_bay">\n				<div class="hm_toggle_btn">\n					<span>-</span>\n					1\n					<span>+</span>\n				</div>\n				<div class="hm_toggle_btn1">\n					<span>x</span>\n					<span>$599</span>\n				</div>\n				<div class="hm_toggle_btn2">\n					<span>$599</span>\n				</div>\n				<div class="hm_clear"></div>\n				</div>\n			</li>\n		</ul>\n	</div>\n</ion-content>\n<ion-footer>\n	<div class="hm_btn_bottom" >\n		<div class="hm_allservice_footer">\n			<div class="hm_items">\n			1\n			</div>\n			<span> <img src="assets/img/hm_cart.png"></span>\n			<div class="hm_amount">\n				$ 599\n			</div>\n			<div class="hm_service_continue" (click)="address()">\n				Continue\n			</div>\n			<div class="hm_clear"></div>\n		</div>\n	</div>\n</ion-footer>\n'/*ion-inline-end:"/home/cheo/Desktop/handyman/src/pages/summary/summary.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], Summary);
    return Summary;
}());

//# sourceMappingURL=summary.js.map

/***/ })

});
//# sourceMappingURL=41.js.map