webpackJsonp([57],{

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllserviceModule", function() { return AllserviceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__allservice__ = __webpack_require__(422);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AllserviceModule = (function () {
    function AllserviceModule() {
    }
    AllserviceModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__allservice__["a" /* Allservice */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__allservice__["a" /* Allservice */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__allservice__["a" /* Allservice */]
            ]
        })
    ], AllserviceModule);
    return AllserviceModule;
}());

//# sourceMappingURL=allservice.module.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Allservice; });
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


var Allservice = (function () {
    function Allservice(navCtrl, navParams, modalCtrl, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        var id = this.navParams.get("id");
        this.slidertab = id;
        console.log("id", id);
        setTimeout(function () {
            _this.goToSlide(id);
        }, 500);
    }
    Allservice.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Allservice');
    };
    Allservice.prototype.goToSlide = function (id) {
        this.slider.slideTo(id, 500);
    };
    Allservice.prototype.slideChanged = function () {
        var currentIndex = this.slider.getActiveIndex();
        this.slidertab = currentIndex;
        console.log("Current index is", currentIndex);
    };
    Allservice.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    Allservice.prototype.summary = function () {
        this.navCtrl.push('Summary');
    };
    Allservice.prototype.add = function () {
        var modal = this.modalCtrl.create('Addpopup');
        modal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], Allservice.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('mySlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */])
    ], Allservice.prototype, "slider", void 0);
    Allservice = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-allservice',template:/*ion-inline-start:"/home/cheo/Desktop/handyman/src/pages/allservice/allservice.html"*/'<ion-header class="hm_bg_color hm_header">\n  <button ion-button class="hm_header_btn hm_float_left hm_back_icon" (click)="goBack()"></button>\n  <div class="hm_search_header">\n    Salon at home\n  </div>\n  <div class="hm_clear"></div>\n</ion-header>\n<ion-content>\n  <div class="hm_service_menu_bar">\n    <ion-scroll scrollX="true" style="height:45px;">\n    <ul>\n      <li [ngClass]="{\'active\' : slidertab == 0}" (click)="goToSlide(0)"><a class=""><span class="active" [hidden]="slidertab != 0">.</span>Facial</a></li>\n      <li [ngClass]="{\'active\' : slidertab == 1}" (click)="goToSlide(1)"><a class=""><span class="active" [hidden]="slidertab != 1">.</span>Regular Wax</a></li>\n      <li  [ngClass]="{\'active\' : slidertab == 2}" (click)="goToSlide(2)"><a class=""><span class="active" [hidden]="slidertab != 2">.</span>Rica Wax</a></li>\n      <li  [ngClass]="{\'active\' : slidertab == 3}" (click)="goToSlide(3)"><a class=""><span class="active" [hidden]="slidertab != 3">.</span>Hair</a></li>\n      <li [ngClass]="{\'active\' : slidertab == 4}" (click)="goToSlide(4)"><a class=""><span class="active" [hidden]="slidertab != 4">.</span>Blending</a></li>\n      <li  [ngClass]="{\'active\' : slidertab == 5}" (click)="goToSlide(5)"><a class=""><span class="active" [hidden]="slidertab != 5">.</span>Plucking</a></li>\n      <li  [ngClass]="{\'active\' : slidertab == 6}" (click)="goToSlide(6)"><a class=""><span class="active" [hidden]="slidertab != 6">.</span>Soft Massage</a></li>\n      <li  [ngClass]="{\'active\' : slidertab == 7}" (click)="goToSlide(7)"><a class=""><span class="active" [hidden]="slidertab != 7">.</span>Hair Conditioning</a></li>\n      <div class="hm_clear"></div>\n    </ul>\n  </ion-scroll>\n  </div>\n  <div class="hm_service_content" padding>\n    <ion-slides pager="false" #mySlider class="hm_service_slide"  (ionSlideDidChange)="slideChanged()">\n      <ion-slide>\n		<div class="hm_service_listing">\n			<ul>\n				<li>\n					<div class="hm_service_details">\n						<h5>Monthly Wax and Groom</h5>\n						<p>Waxing ( Full Legs, Arms, Under Arms )<br>\n+ Threading ( Full Face )</p>\n						<h6>$ 59</h6>\n					</div>\n					<div class="hm_service_add">\n						<button class="hm_service_btn" (click)="add()">ADD +</button>\n					</div>\n					<div class="hm_clear"></div>\n				</li>\n				<li>\n					<div class="hm_service_details">\n						<h5>Monthly Wax and Groom</h5>\n						<p>Waxing ( Full Legs, Arms, Under Arms )<br>\n+ Threading ( Full Face )</p>\n						<h6>$ 59</h6>\n					</div>\n					<div class="hm_service_add">\n						<button class="hm_service_btn" (click)="add()">ADD +</button>\n					</div>\n					<div class="hm_clear"></div>\n				</li>\n				<li>\n					<div class="hm_service_details">\n						<h5>Monthly Wax and Groom</h5>\n						<p>Waxing ( Full Legs, Arms, Under Arms )<br>\n+ Threading ( Full Face )</p>\n						<h6>$ 59</h6>\n					</div>\n					<div class="hm_service_add">\n						<button class="hm_service_btn" (click)="add()">ADD +</button>\n					</div>\n					<div class="hm_clear"></div>\n				</li>\n				<li>\n					<div class="hm_service_details">\n						<h5>Monthly Wax and Groom</h5>\n						<p>Waxing ( Full Legs, Arms, Under Arms )<br>\n+ Threading ( Full Face )</p>\n						<h6>$ 59</h6>\n					</div>\n					<div class="hm_service_add">\n						<button class="hm_service_btn" (click)="add()">ADD +</button>\n					</div>\n					<div class="hm_clear"></div>\n				</li>\n			</ul>\n		</div>\n      </ion-slide>\n      <ion-slide>\n2\n\n      </ion-slide>\n      <ion-slide>\n3\n      </ion-slide>\n      <ion-slide>\n4\n      </ion-slide>\n      <ion-slide>\n5\n      </ion-slide>\n      <ion-slide>\n6\n      </ion-slide>\n      <ion-slide>\n7\n      </ion-slide>\n      <ion-slide>\n8    \n      </ion-slide>\n    </ion-slides>\n\n  </div>\n\n</ion-content>\n<ion-footer>\n	<div class="hm_btn_bottom" >\n		<div class="hm_allservice_footer">\n			<div class="hm_items">\n			1\n			</div>\n			<span> <img src="assets/img/hm_cart.png"></span>\n			<div class="hm_amount">\n				$ 599\n			</div>\n			<div class="hm_service_continue" (click)="summary()">\n				Continue\n			</div>\n			<div class="hm_clear"></div>\n		</div>\n	</div>\n</ion-footer>\n'/*ion-inline-end:"/home/cheo/Desktop/handyman/src/pages/allservice/allservice.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], Allservice);
    return Allservice;
}());

//# sourceMappingURL=allservice.js.map

/***/ })

});
//# sourceMappingURL=57.js.map