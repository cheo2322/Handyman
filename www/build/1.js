webpackJsonp([1],{

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_components_module__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile__ = __webpack_require__(436);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProfilePageModule = (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__profile__["a" /* Profile */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__profile__["a" /* Profile */]),
                __WEBPACK_IMPORTED_MODULE_0__components_components_module__["a" /* ComponentsModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__profile__["a" /* Profile */]
            ]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

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

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Profile; });
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


var Profile = (function () {
    function Profile(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    Profile.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Profile');
    };
    Profile.prototype.editprofile = function () {
        var modal = this.modalCtrl.create('Editprofile');
        modal.present();
    };
    Profile = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/home/cheo/Desktop/handyman/src/pages/profile/profile.html"*/'<ion-header class="hm_bg_color hm_header">\n  <div class="hm_search_header">\nProfile\n  </div>\n  <div class="hm_clear"></div>\n</ion-header>\n<ion-content padding class="hm_sign_bg">\n	<div class="hm_myprofile_wrapper">\n		<div class="hm_myprofile_photo">\n			<img src="assets/img/hm_profile_photo.png">\n			<div class="hm_edit_circle">\n				<img src="assets/img/hm_edit_circle.png">\n			</div>\n		</div>\n		<div class="hm_myprofile_detail">\n			<div class="hm_myprofile_left">\n				<h4>John Doe</h4>\n				<p>dummyemail@gmail.com</p>\n				<h6>+91 95421 23566</h6>\n				\n			</div>\n			<div class="hm_myprofile_right">\n				<div class="hm_edit_circle1" (click)="editprofile()">\n					<img src="assets/img/hm_edit_circle1.png">\n				</div>\n			</div>\n			<div class="hm_clear"></div>\n			<br>\n			<hr>\n			<div class="hm_clear"></div>\n		</div>\n		<div class="hm_myprofile_list">\n			<ul>\n				<li><span><img src="assets/img/hm_help.png"></span>Help Center</li>\n				<li><span><img src="assets/img/hm_about.png"></span>About Handyman</li>\n				<li><span><img src="assets/img/hm_share.png"></span>Share Handyman</li>\n				<li><span><img src="assets/img/hm_logout.png"></span>Logout</li>\n			</ul>\n		</div>\n	</div>\n\n</ion-content>\n<ion-footer>\n<tabcomponent></tabcomponent>\n</ion-footer>\n'/*ion-inline-end:"/home/cheo/Desktop/handyman/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], Profile);
    return Profile;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=1.js.map