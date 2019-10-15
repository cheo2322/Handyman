webpackJsonp([1],{

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyprojectPageModule", function() { return MyprojectPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_components_module__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__myproject__ = __webpack_require__(306);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MyprojectPageModule = (function () {
    function MyprojectPageModule() {
    }
    MyprojectPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__myproject__["a" /* Myproject */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__myproject__["a" /* Myproject */]),
                __WEBPACK_IMPORTED_MODULE_0__components_components_module__["a" /* ComponentsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__myproject__["a" /* Myproject */]
            ]
        })
    ], MyprojectPageModule);
    return MyprojectPageModule;
}());

//# sourceMappingURL=myproject.module.js.map

/***/ }),

/***/ 290:
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], Tabcomponent);
    return Tabcomponent;
}());

//# sourceMappingURL=tabcomponent.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tabcomponent_tabcomponent__ = __webpack_require__(290);
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

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Myproject; });
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


var Myproject = (function () {
    function Myproject(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    Myproject.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Myproject');
        this.tab = "active";
    };
    Myproject.prototype.tab_swap = function (type) {
        this.tab = type;
    };
    Myproject.prototype.projectlist = function () {
        this.navCtrl.push('Projectlist');
    };
    Myproject = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-myproject',template:/*ion-inline-start:"/home/cheo/Desktop/handyman/src/pages/myproject/myproject.html"*/'<ion-header class="hm_bg_color hm_header">\n  <div class="hm_search_header">\n	My Projects\n  </div>\n  <div class="hm_clear"></div>\n</ion-header>\n<ion-content class="hm_sign_bg">\n<div class="hm_project">\n  <div class="hm_project_tab">\n	<ul>\n		<li [class.active]="tab==\'active\'" (click)="tab_swap(\'active\')"><span>.</span>Ongoing Projects</li>\n		<li [class.active]="tab==\'inactive\'" (click)="tab_swap(\'inactive\')"><span>.</span>Project History</li>\n	</ul>\n  </div>\n<div class="tabcontent" [hidden]="tab==\'inactive\'">\n	<div class="hm_project_tab_content">\n		<h5>Spa at home<span><img src="assets/img/hm_more1.png"></span></h5>\n		<div class="hm_response">\n			<div class="hm_response_left">Responses<strong>5</strong></div>\n			<div class="hm_response_right">\n				<div class="hm_show_all" (click)="projectlist()">Show all<span><img src="assets/img/hm_show_arw.png"></span></div>\n			</div>\n			<div class="hm_clear"></div>\n		</div>\n		 <ion-scroll scrollX="true" style="height:90px;">\n			<div class="hm_response_list">\n				<ul>\n					<li>\n						<div class="hm_response_photo"></div>\n						<div class="hm_response_details">Lora Spa</div>\n						<div class="hm_clear"></div>\n					</li>\n					<li>\n						<div class="hm_response_photo"></div>\n						<div class="hm_response_details">Hein Beauty Spot</div>\n						<div class="hm_clear"></div>\n					</li>\n					<li>\n						<div class="hm_response_photo"></div>\n						<div class="hm_response_details">Orange Spa</div>\n						<div class="hm_clear"></div>\n					</li>\n					<li>\n						<div class="hm_response_photo"></div>\n						<div class="hm_response_details">Perl Saloon</div>\n						<div class="hm_clear"></div>\n					</li>\n					<li>\n						<div class="hm_response_photo"></div>\n						<div class="hm_response_details">Lora Spa</div>\n						<div class="hm_clear"></div>\n					</li>\n					<li>\n						<div class="hm_response_photo"></div>\n						<div class="hm_response_details">Hein Beauty Spot</div>\n						<div class="hm_clear"></div>\n					</li>\n					<li>\n						<div class="hm_response_photo"></div>\n						<div class="hm_response_details">Orange Spa</div>\n						<div class="hm_clear"></div>\n					</li>\n					<li>\n						<div class="hm_response_photo"></div>\n						<div class="hm_response_details">Perl Saloon</div>\n						<div class="hm_clear"></div>\n					</li>\n					\n				</ul>\n			</div>\n		 </ion-scroll>\n		 <div class="hm_response">\n			<div class="hm_response_left">Messages<strong>5</strong></div>\n			<div class="hm_response_right">\n				<div class="hm_show_all">Read all<span><img src="assets/img/hm_show_arw.png"></span></div>\n			</div>\n			<div class="hm_clear"></div>\n		</div>\n		<hr>\n		<br>\n		<h5>Fitness at home<span><img src="assets/img/hm_more1.png"></span></h5>\n		<div class="hm_response">\n			<div class="hm_response_left">Responses<strong>0</strong></div>\n			<div class="hm_response_right">\n				<div class="hm_show_all hm_show_all_deactive">Show all<span><img src="assets/img/hm_show_arw.png"></span></div>\n			</div>\n			<div class="hm_clear"></div>\n		</div>\n		<div class="hm_response">\n			<div class="hm_response_left">Messages<strong>0</strong></div>\n			<div class="hm_response_right">\n				<div class="hm_show_all hm_show_all_deactive">Read all<span><img src="assets/img/hm_show_arw.png"></span></div>\n			</div>\n			<div class="hm_clear"></div>\n		</div>\n	</div>\n</div>\n<div class="tabcontent" [hidden]="tab==\'active\'" >\nsafqgqeg\n</div>\n</div>\n</ion-content>\n<ion-footer>\n	<tabcomponent></tabcomponent>\n</ion-footer>\n'/*ion-inline-end:"/home/cheo/Desktop/handyman/src/pages/myproject/myproject.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], Myproject);
    return Myproject;
}());

//# sourceMappingURL=myproject.js.map

/***/ })

});
//# sourceMappingURL=1.js.map