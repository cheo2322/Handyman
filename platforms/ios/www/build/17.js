webpackJsonp([17],{

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentModule", function() { return PaymentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment__ = __webpack_require__(306);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PaymentModule = (function () {
    function PaymentModule() {
    }
    return PaymentModule;
}());
PaymentModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__payment__["a" /* Payment */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__payment__["a" /* Payment */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__payment__["a" /* Payment */]
        ]
    })
], PaymentModule);

//# sourceMappingURL=payment.module.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Payment; });
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


var Payment = (function () {
    function Payment(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Payment.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Payment');
        this.tab = "active";
    };
    Payment.prototype.tab_swap = function (type) {
        this.tab = type;
    };
    Payment.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    return Payment;
}());
Payment = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-payment',template:/*ion-inline-start:"/home/cheo/Desktop/handyman/src/pages/payment/payment.html"*/'<ion-header class="hm_bg_color hm_header">\n  <button ion-button class="hm_header_btn hm_float_left hm_back_icon" (click)="goBack()"></button>\n  <div class="hm_search_header">\n	Payment\n  </div>\n  <div class="hm_clear"></div>\n</ion-header>\n<ion-content padding>\n	<div class="hm_service_listing" style="padding-top:10px;">\n		<h6>Payment Amount</h6>\n		<strong>$ 400.00</strong>\n		<div class="hm_payment_div">\n			<div class="hm_payment_tab">\n				<ul>\n					<li [class.active]="tab==\'active\'" (click)="tab_swap(\'active\')"><span>.</span>Pay Now</li>\n					<li [class.active]="tab==\'inactive\'" (click)="tab_swap(\'inactive\')"><span>.</span>Pay Later</li>\n					<div class="hm_clear"></div>\n				</ul>\n			</div>\n			<div class="hm_payment_content" [hidden]="tab==\'inactive\'">\n				<ul>\n					<li>\n						<div class="hm_cancel_radio">\n							<ion-radio ng-model="choice3" ng-value="\'C\'"></ion-radio>\n						</div>\n						<div class="hm_cancel_reason">\n							 Cards\n						</div>\n						<div class="hm_clear"></div>\n					</li>\n					<li>\n						<div class="hm_cancel_radio">\n							<ion-radio ng-model="choice3" ng-value="\'C\'"></ion-radio>\n						</div>\n						<div class="hm_cancel_reason">\n							 Netbanking\n						</div>\n						<div class="hm_clear"></div>\n					</li>\n					<li>\n						<div class="hm_cancel_radio">\n							<ion-radio ng-model="choice3" ng-value="\'C\'"></ion-radio>\n						</div>\n						<div class="hm_cancel_reason">\n							 Wallet\n						</div>\n						<div class="hm_clear"></div>\n					</li>\n				</ul>\n			</div>\n			<div class="hm_payment_content" [hidden]="tab==\'active\'">\n			2\n			</div>\n		</div>\n		<div class="hm_promo">\n			<input class="hm_promo_input" placeholder="Enter Promo Code">\n			<button class="hm_promo_btn">Apply</button>\n			<div class="hm_clear"></div>\n		</div>\n		<h6>Summary</h6>\n		<div class="hm_summary_report">\n			<ul>\n				<li>\n					<div class="child1">Sub Total</div>\n					<div class="child2">$ 246.00</div>\n					<div class="hm_clear"></div>\n				</li>\n				<li>\n					<div class="child1">Coupon Discount</div>\n					<div class="child2">-$ 0.00</div>\n					<div class="hm_clear"></div>\n				</li>\n				<br>\n				<li>\n					<div class="child1"><strong>Total</strong></div>\n					<div class="child2"><strong>$ 246.00</strong></div>\n					<div class="hm_clear"></div>\n				</li>\n			</ul>\n		</div>\n	</div>\n</ion-content>\n<ion-footer>\n	<div class="hm_btn_bottom" >\n		<div class="hm_allservice_footer">\n			<div class="hm_amount" style="border:none;padding-left:15px;">\n				Pay &nbsp;&nbsp;|&nbsp;&nbsp; $ 599\n			</div>\n			<div class="hm_service_continue">\n				Paynow\n			</div>\n			<div class="hm_clear"></div>\n		</div>\n	</div>\n</ion-footer>\n'/*ion-inline-end:"/home/cheo/Desktop/handyman/src/pages/payment/payment.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], Payment);

//# sourceMappingURL=payment.js.map

/***/ })

});
//# sourceMappingURL=17.js.map