webpackJsonp([4],{

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditprofileModule", function() { return EditprofileModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_components_module__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editprofile__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EditprofileModule = (function () {
    function EditprofileModule() {
    }
    return EditprofileModule;
}());
EditprofileModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__editprofile__["a" /* Editprofile */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__editprofile__["a" /* Editprofile */]),
            __WEBPACK_IMPORTED_MODULE_0__components_components_module__["a" /* ComponentsModule */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__editprofile__["a" /* Editprofile */]
        ]
    })
], EditprofileModule);

//# sourceMappingURL=editprofile.module.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tabcomponent; });
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
    return Tabcomponent;
}());
Tabcomponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'tabcomponent',template:/*ion-inline-start:"/home/cheo/Desktop/handyman/src/components/tabcomponent/tabcomponent.html"*/'<div class="hm_footer_tab">\n  <ul>\n    <li (click)="home()"><img src="assets/img/hm_tab1.png"></li>\n    <li (click)="myproject()"><div class="hm_red_circle">3</div><img src="assets/img/hm_tab2.png"></li>\n    <li (click)="message()"><div class="hm_red_circle">8</div><img src="assets/img/hm_tab4.png"></li>\n    <li (click)="profile()"><img src="assets/img/hm_tab3.png"></li>\n    <div class="hm_clear"></div>\n  </ul>\n</div>\n'/*ion-inline-end:"/home/cheo/Desktop/handyman/src/components/tabcomponent/tabcomponent.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
], Tabcomponent);

//# sourceMappingURL=tabcomponent.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tabcomponent_tabcomponent__ = __webpack_require__(289);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
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

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Editprofile; });
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


var Editprofile = (function () {
    function Editprofile(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    Editprofile.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Editprofile');
    };
    Editprofile.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return Editprofile;
}());
Editprofile = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-editprofile',template:/*ion-inline-start:"/home/cheo/Desktop/handyman/src/pages/editprofile/editprofile.html"*/'<ion-header class="hm_bg_color hm_header">\n  <button ion-button class="hm_header_btn hm_float_left hm_back_icon" (click)="dismiss()"></button>\n  <div class="hm_search_header">\n    Edit Profile\n  </div>\n  <div class="hm_clear"></div>\n</ion-header>\n<ion-content padding class="hm_sign_bg">\n	<div class="hm_service_listing" style="padding-top:10px;">\n	<div class="hm_myprofile_photo">\n			<img src="assets/img/hm_profile_photo.png">\n			<div class="hm_edit_circle">\n				<img src="assets/img/hm_edit_circle.png">\n			</div>\n	</div>\n	<br>\n	<br>\n	<div class="hm_newaddress_field">\n		<ul>\n			<li>\n				<input class="hm_new_input" placeholder="User name">\n			</li>\n			<li>\n				<input class="hm_new_input" placeholder="user@gmail.com">\n			</li>\n			<li>\n				<input class="hm_new_input" placeholder="+91 9961531199">\n			</li>\n			<li style="padding-top: 10px;">\n				<div class="hm_cancel_reason" style="font-size: 16px;">\n					Gender\n				</div>\n				<div class="hm_cancel_radio" style="padding-left:20px;">\n					<ion-radio ng-model="choice3" ng-value="\'a\'"></ion-radio>\n					<label>Male</label>\n					<ion-radio ng-model="choice3" ng-value="\'b\'"></ion-radio>\n					<label>Female</label>\n				</div>\n				<div class="hm_clear"></div>\n			</li>\n		</ul>\n	</div>\n</div>\n</ion-content>\n<ion-footer>\n	<div class="hm_btn_bottom" style="position: fixed;bottom: 50px">\n		<button class="hm_bottom_save" (click)="dismiss()">Save<span><img src="assets/img/hm_tick.png"></span></button>\n	</div>\n<tabcomponent></tabcomponent>\n</ion-footer>\n\n'/*ion-inline-end:"/home/cheo/Desktop/handyman/src/pages/editprofile/editprofile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
], Editprofile);

//# sourceMappingURL=editprofile.js.map

/***/ })

});
//# sourceMappingURL=4.js.map