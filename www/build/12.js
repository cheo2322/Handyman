webpackJsonp([12],{

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceModule", function() { return ServiceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service__ = __webpack_require__(441);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ServiceModule = (function () {
    function ServiceModule() {
    }
    ServiceModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__service__["a" /* Service */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__service__["a" /* Service */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__service__["a" /* Service */]
            ]
        })
    ], ServiceModule);
    return ServiceModule;
}());

//# sourceMappingURL=service.module.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service; });
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


var Service = (function () {
    function Service(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        var id = this.navParams.get("id");
        this.slidertab = id;
        console.log("id", id);
        setTimeout(function () {
            _this.goToSlide(id);
        }, 500);
    }
    Service.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Service');
    };
    Service.prototype.goToSlide = function (id) {
        this.slider.slideTo(id, 500);
    };
    Service.prototype.slideChanged = function () {
        var currentIndex = this.slider.getActiveIndex();
        this.slidertab = currentIndex;
        console.log("Current index is", currentIndex);
    };
    Service.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], Service.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('mySlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */])
    ], Service.prototype, "slider", void 0);
    Service = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-service',template:/*ion-inline-start:"/home/cheo/Desktop/handyman/src/pages/service/service.html"*/'<ion-header class="hm_bg_color hm_header">\n  <button ion-button class="hm_header_btn hm_float_left hm_back_icon" (click)="goBack()"></button>\n  <div class="hm_search_header">\n    All Services\n  </div>\n  <button ion-button class="hm_header_btn hm_float_right hm_search_icon"></button>\n  <div class="hm_clear"></div>\n</ion-header>\n<ion-content class="hm_sign_bg">\n  <div class="hm_services">\n  <div class="hm_service_menu_bar">\n    <ion-scroll scrollX="true" style="height:45px;">\n    <ul>\n      <li [ngClass]="{\'active\' : slidertab == 0}" (click)="goToSlide(0)"><a class="beauty"><span class="active" [hidden]="slidertab != 0">.</span>Beauty</a></li>\n      <li [ngClass]="{\'active\' : slidertab == 1}" (click)="goToSlide(1)"><a class="health"><span class="active" [hidden]="slidertab != 1">.</span>Health</a></li>\n      <li  [ngClass]="{\'active\' : slidertab == 2}" (click)="goToSlide(2)"><a class="lesson"><span class="active" [hidden]="slidertab != 2">.</span>Lessons</a></li>\n      <li  [ngClass]="{\'active\' : slidertab == 3}" (click)="goToSlide(3)"><a class="homeservice"><span class="active" [hidden]="slidertab != 3">.</span>Home Services</a></li>\n      <li [ngClass]="{\'active\' : slidertab == 4}" (click)="goToSlide(4)"><a class="business"><span class="active" [hidden]="slidertab != 4">.</span>Business</a></li>\n      <li  [ngClass]="{\'active\' : slidertab == 5}" (click)="goToSlide(5)"><a class="event"><span class="active" [hidden]="slidertab != 5">.</span>Event</a></li>\n      <li  [ngClass]="{\'active\' : slidertab == 6}" (click)="goToSlide(6)"><a class="hobbie"><span class="active" [hidden]="slidertab != 6">.</span>Hobbies</a></li>\n      <li  [ngClass]="{\'active\' : slidertab == 7}" (click)="goToSlide(7)"><a class="repair"><span class="active" [hidden]="slidertab != 7">.</span>Repair</a></li>\n      <div class="hm_clear"></div>\n    </ul>\n  </ion-scroll>\n  </div>\n  <div class="hm_service_content">\n    <ion-slides pager="false" #mySlider class="hm_service_slide"  (ionSlideDidChange)="slideChanged()">\n      <ion-slide class="beauty">\n        <div class="hm_service_list">\n          <ul>\n            <li>\n              <div class="hm_service_div">\n                <img src="assets/img/hm_spa.png">\n              </div>\n              <p>Spa</p>\n            </li>\n            <li>\n              <div class="hm_service_div">\n                <img src="assets/img/hm_fitness.png">\n              </div>\n              <p>Fitness</p>\n            </li>\n            <li>\n              <div class="hm_service_div">\n                <img src="assets/img/hm_makeup.png">\n              </div>\n              <p>Makeup</p>\n            </li>\n            <li>\n              <div class="hm_service_div">\n                <img src="assets/img/hm_salon.png">\n              </div>\n              <p>Salon</p>\n            </li>\n            <li>\n              <div class="hm_service_div">\n                <img src="assets/img/hm_yoga.png">\n              </div>\n              <p>Yoga</p>\n            </li>\n            <li>\n              <div class="hm_service_div">\n                <img src="assets/img/hm_ayurveda.png">\n              </div>\n              <p>Ayurveda</p>\n            </li>\n            <li>\n              <div class="hm_service_more"></div>\n              <p>Show more</p>\n            </li>\n            <div class="hm_clear"></div>\n          </ul>\n        </div>\n      </ion-slide>\n      <ion-slide class="health">\n        <div class="hm_service_list">\n          <ul>\n            <li>\n              <div class="hm_service_div">\n                <img src="assets/img/hm_diet.png">\n              </div>\n              <p>Diet</p>\n            </li>\n            <li>\n              <div class="hm_service_div">\n                <img src="assets/img/hm_fitness.png">\n              </div>\n              <p>Fitness</p>\n            </li>\n            <li>\n              <div class="hm_service_div">\n                <img src="assets/img/hm_strech.png">\n              </div>\n              <p>Streching</p>\n            </li>\n            <li>\n              <div class="hm_service_div">\n                <img src="assets/img/hm_yoga.png">\n              </div>\n              <p>Yoga</p>\n            </li>\n            <li>\n              <div class="hm_service_div">\n                <img src="assets/img/hm_massage.png">\n              </div>\n              <p>Massage</p>\n            </li>\n            <li>\n              <div class="hm_service_div">\n                <img src="assets/img/hm_fatloss.png">\n              </div>\n              <p>Fat loss</p>\n            </li>\n            <li>\n              <div class="hm_service_more"></div>\n              <p>Show more</p>\n            </li>\n            <div class="hm_clear"></div>\n          </ul>\n        </div>\n\n      </ion-slide>\n      <ion-slide class="lesson">\n        <div class="hm_service_list">\n          <ul>\n            <li>\n              <div class="hm_service_div">\n                <img src="assets/img/hm_education.png">\n              </div>\n              <p>Education</p>\n            </li>\n            <li>\n              <div class="hm_service_div">\n                <img src="assets/img/hm_lan.png">\n              </div>\n              <p>Language</p>\n            </li>\n            <li>\n              <div class="hm_service_div">\n                <img src="assets/img/hm_strech.png">\n              </div>\n              <p>Streching</p>\n            </li>\n            <li>\n              <div class="hm_service_div">\n                <img src="assets/img/hm_driving.png">\n              </div>\n              <p>Driving</p>\n            </li>\n            <li>\n              <div class="hm_service_div">\n                <img src="assets/img/hm_dance.png">\n              </div>\n              <p>Dance</p>\n            </li>\n            <li>\n              <div class="hm_service_div">\n                <img src="assets/img/hm_art.png">\n              </div>\n              <p>Art</p>\n            </li>\n            <li>\n              <div class="hm_service_more"></div>\n              <p>Show more</p>\n            </li>\n            <div class="hm_clear"></div>\n          </ul>\n        </div>\n      </ion-slide>\n      <ion-slide class="homeservice">\n        <div class="hm_service_list">\n          <ul>\n            <li>\n              <div class="hm_service_div">\n                <img src="assets/img/hm_furnish.png">\n              </div>\n              <p>Furnishing</p>\n            </li>\n            <li>\n              <div class="hm_service_div">\n                <img src="assets/img/hm_painting.png">\n              </div>\n              <p>Painting</p>\n            </li>\n            <li>\n              <div class="hm_service_div">\n                <img src="assets/img/hm_clean.png">\n              </div>\n              <p>Cleaning</p>\n            </li>\n            <li>\n              <div class="hm_service_div">\n                <img src="assets/img/hm_floor.png">\n              </div>\n              <p>Floor</p>\n            </li>\n            <li>\n              <div class="hm_service_div">\n                <img src="assets/img/hm_electrical.png">\n              </div>\n              <p>Electrical</p>\n            </li>\n            <li>\n              <div class="hm_service_div">\n                <img src="assets/img/hm_plumbing.png">\n              </div>\n              <p>Plumbing</p>\n            </li>\n            <li>\n              <div class="hm_service_more"></div>\n              <p>Show more</p>\n            </li>\n            <div class="hm_clear"></div>\n          </ul>\n        </div>\n      </ion-slide>\n      <ion-slide class="business">\n        <div class="hm_service_list">\n          <ul>\n            <li>\n              <div class="hm_service_div">\n                <img src="assets/img/hm_marketing.png">\n              </div>\n              <p>Marketing</p>\n            </li>\n            <li>\n              <div class="hm_service_div">\n                <img src="assets/img/hm_branding.png">\n              </div>\n              <p>Branding</p>\n            </li>\n            <li>\n              <div class="hm_service_div">\n                <img src="assets/img/hm_office.png">\n              </div>\n              <p>Office</p>\n            </li>\n            <li>\n              <div class="hm_service_div">\n                <img src="assets/img/hm_security.png">\n              </div>\n              <p>Security</p>\n            </li>\n            <li>\n              <div class="hm_service_div">\n                <img src="assets/img/hm_admin.png">\n              </div>\n              <p>Admin</p>\n            </li>\n            <li>\n              <div class="hm_service_div">\n                <img src="assets/img/hm_analytic.png">\n              </div>\n              <p>Analytics</p>\n            </li>\n            <li>\n              <div class="hm_service_more"></div>\n              <p>Show more</p>\n            </li>\n            <div class="hm_clear"></div>\n          </ul>\n        </div>\n      </ion-slide>\n      <ion-slide class="event">\n        <div class="hm_service_list">\n          <ul>\n            <li>\n              <div class="hm_service_div">\n                <img src="assets/img/hm_marriage.png">\n              </div>\n              <p>Marriage</p>\n            </li>\n            <li>\n              <div class="hm_service_div">\n                <img src="assets/img/hm_dj.png">\n              </div>\n              <p>DJ</p>\n            </li>\n            <li>\n              <div class="hm_service_div">\n                <img src="assets/img/hm_inaguaration.png">\n              </div>\n              <p>Inaguration</p>\n            </li>\n            <li>\n              <div class="hm_service_div">\n                <img src="assets/img/hm_lighting.png">\n              </div>\n              <p>Lighting</p>\n            </li>\n            <li>\n              <div class="hm_service_div">\n                <img src="assets/img/hm_decoration.png">\n              </div>\n              <p>Decoration</p>\n            </li>\n            <li>\n              <div class="hm_service_div">\n                <img src="assets/img/hm_catering.png">\n              </div>\n              <p>Catering</p>\n            </li>\n            <li>\n              <div class="hm_service_more"></div>\n              <p>Show more</p>\n            </li>\n            <div class="hm_clear"></div>\n          </ul>\n        </div>\n      </ion-slide>\n      <ion-slide class="hobbie">\n        <div class="hm_service_list">\n          <ul>\n            <li>\n              <div class="hm_service_div">\n                <img src="assets/img/hm_art.png">\n              </div>\n              <p>Art</p>\n            </li>\n            <li>\n              <div class="hm_service_div">\n                <img src="assets/img/hm_music.png">\n              </div>\n              <p>Music</p>\n            </li>\n            <li>\n              <div class="hm_service_div">\n                <img src="assets/img/hm_dance.png">\n              </div>\n              <p>Dance</p>\n            </li>\n            <li>\n              <div class="hm_service_div">\n                <img src="assets/img/hm_sports.png">\n              </div>\n              <p>Sports</p>\n            </li>\n            <li>\n              <div class="hm_service_div">\n                <img src="assets/img/hm_photo.png">\n              </div>\n              <p>Photography</p>\n            </li>\n            <li>\n              <div class="hm_service_div">\n                <img src="assets/img/hm_gaming.png">\n              </div>\n              <p>Gaming</p>\n            </li>\n            <li>\n              <div class="hm_service_more"></div>\n              <p>Show more</p>\n            </li>\n            <div class="hm_clear"></div>\n          </ul>\n        </div>\n      </ion-slide>\n      <ion-slide class="repair">\n        <div class="hm_service_list">\n          <ul>\n            <li>\n              <div class="hm_service_div">\n                <img src="assets/img/hm_pc.png">\n              </div>\n              <p>PC /Laptop</p>\n            </li>\n            <li>\n              <div class="hm_service_div">\n                <img src="assets/img/hm_car.png">\n              </div>\n              <p>Car</p>\n            </li>\n            <li>\n              <div class="hm_service_div">\n                <img src="assets/img/hm_motorcycle.png">\n              </div>\n              <p>Motorcycle</p>\n            </li>\n            <li>\n              <div class="hm_service_div">\n                <img src="assets/img/hm_appliance.png">\n              </div>\n              <p>Appliances</p>\n            </li>\n            <li>\n              <div class="hm_service_div">\n                <img src="assets/img/hm_photo.png">\n              </div>\n              <p>Camera</p>\n            </li>\n            <li>\n              <div class="hm_service_div">\n                <img src="assets/img/hm_gaming.png">\n              </div>\n              <p>Console</p>\n            </li>\n            <li>\n              <div class="hm_service_more"></div>\n              <p>Show more</p>\n            </li>\n            <div class="hm_clear"></div>\n          </ul>\n        </div>\n      </ion-slide>\n    </ion-slides>\n\n  </div>\n</div>\n</ion-content>\n'/*ion-inline-end:"/home/cheo/Desktop/handyman/src/pages/service/service.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], Service);
    return Service;
}());

//# sourceMappingURL=service.js.map

/***/ })

});
//# sourceMappingURL=12.js.map