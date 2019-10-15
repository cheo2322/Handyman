webpackJsonp([36],{

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_components_module__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home__ = __webpack_require__(429);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__home__["a" /* Home */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__home__["a" /* Home */]),
                __WEBPACK_IMPORTED_MODULE_0__components_components_module__["a" /* ComponentsModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__home__["a" /* Home */]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 291:
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], Tabcomponent);
    return Tabcomponent;
}());

//# sourceMappingURL=tabcomponent.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tabcomponent_tabcomponent__ = __webpack_require__(291);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__tabcomponent_tabcomponent__["a" /* Tabcomponent */],
            ],
            imports: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__tabcomponent_tabcomponent__["a" /* Tabcomponent */]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home; });
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


var Home = (function () {
    function Home(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.scrollPosition = 0;
    }
    Home.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Home');
    };
    Home.prototype.location = function () {
        var modal = this.modalCtrl.create('Location');
        modal.present();
    };
    Home.prototype.service = function (id) {
        this.navCtrl.push('Service', { id: id });
    };
    Home.prototype.fitness = function () {
        this.navCtrl.push('Fitness');
    };
    Home.prototype.recommended = function () {
        this.navCtrl.push('Recommended');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], Home.prototype, "content", void 0);
    Home = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/cheo/Desktop/handyman/src/pages/home/home.html"*/'\n<ion-header class="hm_bg_color hm_header">\n  <div class="hm_header_location_bay">\n    Banarsi Das Estate, Delhi\n    <span><img src="assets/img/hm_dwn_arw.png"></span>\n  </div>\n  <button ion-button class="hm_header_btn hm_float_right hm_search_icon" (click)="location()" ></button>\n  <div class="hm_clear"></div>\n</ion-header>\n<ion-content class="hm_sign_bg">\n  <div class="hm_wrapper">\n  <div class="hm_search_bay">\n    <input class="hm_search_input" placeholder="Search for a service">\n  </div>\n  <div class="hm_menu_bay">\n    <ul>\n      <li class="hm_border_top_none hm_border_left_none" (click)="service(0)"><img src="assets/img/hm_item1.png"><p>Beauty</p></li>\n      <li class="hm_border_top_none hm_border_left_none" (click)="service(1)"><img src="assets/img/hm_item2.png"><p>Health</p></li>\n      <li class="hm_border_top_none hm_border_left_none" (click)="service(2)"><img src="assets/img/hm_item3.png"><p>Lessons</p></li>\n      <li class="hm_border_top_none hm_border_left_none hm_border_right_none" (click)="service(3)"><img src="assets/img/hm_item4.png"><p>Home Service</p></li>\n      <li class="hm_border_bottom_none hm_border_left_none" (click)="service(4)"><img src="assets/img/hm_item5.png"><p>Business</p></li>\n      <li class="hm_border_bottom_none hm_border_left_none" (click)="service(5)"><img src="assets/img/hm_item6.png"><p>Events</p></li>\n      <li class="hm_border_bottom_none hm_border_left_none" (click)="service(6)"><img src="assets/img/hm_item7.png"><p>Hobbies</p></li>\n      <li class="hm_border_bottom_none hm_border_left_none hm_border_right_none" (click)="service(7)"><img src="assets/img/hm_item8.png"><p>Repairs</p></li>\n      <div class="hm_clear"></div>\n    </ul>\n  </div>\n  <div class="hm_ad_wrap">\n  <ion-slides pager="false" #mySlider>\n        <ion-slide (click)="recommended()">\n			<img src="assets/img/hm_shop_banner.png">\n		</ion-slide>\n		<ion-slide (click)="recommended()">\n			<img src="assets/img/hm_shop_banner.png">\n		</ion-slide>\n	</ion-slides>\n  </div>\n  <div class="hm_catagory_scroll_div">\n    <h5 (click)="fitness()">For the Fitness</h5>\n    <ion-scroll scrollX="true" style="height:130px;">\n      <ul>\n        <li>\n          <div class="hm_catagory_item">\n            <img src="assets/img/hm_a1.png">\n          </div>\n          <p>Diet Plan</p>\n        </li>\n        <li>\n          <div class="hm_catagory_item">\n            <img src="assets/img/hm_a2.png">\n          </div>\n          <p>Streching</p>\n        </li>\n        <li>\n          <div class="hm_catagory_item">\n            <img src="assets/img/hm_a3.png">\n          </div>\n          <p>Muscle Gain</p>\n        </li>\n        <li>\n          <div class="hm_catagory_item">\n            <img src="assets/img/hm_a4.png">\n          </div>\n          <p>Lean stress</p>\n        </li>\n        <li>\n          <div class="hm_catagory_item">\n            <img src="assets/img/hm_a1.png">\n          </div>\n          <p>Diet Plan</p>\n        </li>\n        <li>\n          <div class="hm_catagory_item">\n            <img src="assets/img/hm_a2.png">\n          </div>\n          <p>Diet Plan</p>\n        </li>\n        <li>\n          <div class="hm_catagory_item">\n            <img src="assets/img/hm_a3.png">\n          </div>\n          <p>Diet Plan</p>\n        </li>\n        <li>\n          <div class="hm_catagory_item">\n            <img src="assets/img/hm_a4.png">\n          </div>\n          <p>Diet Plan</p>\n        </li>\n      </ul>\n    </ion-scroll>\n  </div>\n</div>\n</ion-content>\n<ion-footer>\n<tabcomponent></tabcomponent>\n</ion-footer>\n'/*ion-inline-end:"/home/cheo/Desktop/handyman/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], Home);
    return Home;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=36.js.map