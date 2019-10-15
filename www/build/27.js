webpackJsonp([27],{

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressModule", function() { return AddressModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__address__ = __webpack_require__(421);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddressModule = (function () {
    function AddressModule() {
    }
    AddressModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__address__["a" /* Address */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__address__["a" /* Address */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__address__["a" /* Address */]
            ]
        })
    ], AddressModule);
    return AddressModule;
}());

//# sourceMappingURL=address.module.js.map

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Address; });
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


var Address = (function () {
    function Address(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    Address.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Address');
    };
    Address.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    Address.prototype.payment = function () {
        this.navCtrl.push('Payment');
    };
    Address.prototype.selectaddress = function () {
        this.navCtrl.push('Selectaddress');
    };
    Address.prototype.newaddress = function () {
        var modal = this.modalCtrl.create('Newaddress');
        modal.present();
    };
    Address = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-address',template:/*ion-inline-start:"/home/cheo/Desktop/handyman/src/pages/address/address.html"*/'<ion-header class="hm_bg_color hm_header">\n  <button ion-button class="hm_header_btn hm_float_left hm_back_icon" (click)="goBack()"></button>\n  <div class="hm_search_header">\n	Address\n  </div>\n  <div class="hm_clear"></div>\n</ion-header>\n<ion-content padding>\n	<div class="hm_service_listing" style="padding-top:10px;">\n		<h6>My Address</h6>\n		<div class="hm_address_bay">\n			<div class="hm_address_section">\n				Madiwala East,Twins Tower, Near Bustand<br>\n				Bangalore City\n			</div>\n			<div class="hm_address_arrow" (click)="selectaddress()">\n				<span><img src="assets/img/hm_address_arw.png"></span>\n			</div>\n			<div class="hm_clear"></div>\n		</div>\n		<button class="hm_add_address" (click) = "newaddress()">Add Address<span>+</span></button>\n		<h6>Select Date & Time</h6>\n		<div class="hm_date_selector">\n			<ion-scroll scrollX="true" style="height:75px;">\n				<ul>\n					<li>\n						Tuesday<br>\n						<strong>10</strong><br>\n						April	\n					</li>\n					<li>\n						Wednesday<br>\n						<strong>11</strong><br>\n						April	\n					</li>\n					<li>\n						Thursday<br>\n						<strong>12</strong><br>\n						April\n					</li>\n					<li>\n						Friday<br>\n						<strong>13</strong><br>\n						April	\n					</li>\n					<li>\n						Saturday<br>\n						<strong>14</strong><br>\n						April	\n					</li>\n					<li>\n						Sunday<br>\n						<strong>15</strong><br>\n						April	\n					</li>\n					<li>\n						Monday<br>\n						<strong>16</strong><br>\n						April	\n					</li>\n					<li>\n						Tuesday<br>\n						<strong>17</strong><br>\n						April\n					</li>\n					<li>\n						Wednesday<br>\n						<strong>18</strong><br>\n						April\n					</li>\n					<li>\n						Thursday<br>\n						<strong>19</strong><br>\n						April	\n					</li>\n					<li>\n						Friday<br>\n						<strong>20</strong><br>\n						April	\n					</li>\n			\n				</ul>\n			</ion-scroll>\n		</div>\n		<div class="hm_schedule">\n			<ul>\n				<li>08 : 00 am - 08 :30 pm</li>\n				<li>08 : 00 am - 08 :30 pm</li>\n				<li>08 : 00 am - 08 :30 pm</li>\n				<li>08 : 00 am - 08 :30 pm</li>\n				<li>08 : 00 am - 08 :30 pm</li>\n				<li>08 : 00 am - 08 :30 pm</li>\n				<li>08 : 00 am - 08 :30 pm</li>\n				<li>08 : 00 am - 08 :30 pm</li>\n				<li>08 : 00 am - 08 :30 pm</li>\n				<li>08 : 00 am - 08 :30 pm</li>\n				<li>08 : 00 am - 08 :30 pm</li>\n				<li>08 : 00 am - 08 :30 pm</li>\n			</ul>\n		</div>\n	</div>\n\n</ion-content>\n<ion-footer>\n	<div class="hm_btn_bottom" >\n		<div class="hm_allservice_footer">\n			<div class="hm_items">\n			1\n			</div>\n			<span> <img src="assets/img/hm_cart.png"></span>\n			<div class="hm_amount">\n				$ 599\n			</div>\n			<div class="hm_service_continue" (click)="payment()">\n				Continue\n			</div>\n			<div class="hm_clear"></div>\n		</div>\n	</div>\n</ion-footer>\n'/*ion-inline-end:"/home/cheo/Desktop/handyman/src/pages/address/address.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], Address);
    return Address;
}());

//# sourceMappingURL=address.js.map

/***/ })

});
//# sourceMappingURL=27.js.map