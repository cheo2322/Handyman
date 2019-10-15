webpackJsonp([2],{

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageModule", function() { return MessageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_components_module__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message__ = __webpack_require__(303);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MessageModule = (function () {
    function MessageModule() {
    }
    return MessageModule;
}());
MessageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__message__["a" /* Message */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__message__["a" /* Message */]),
            __WEBPACK_IMPORTED_MODULE_0__components_components_module__["a" /* ComponentsModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__message__["a" /* Message */]
        ]
    })
], MessageModule);

//# sourceMappingURL=message.module.js.map

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

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
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


var Message = (function () {
    function Message(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Message.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Message');
    };
    Message.prototype.chat = function () {
        this.navCtrl.push('Chat');
    };
    return Message;
}());
Message = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-message',template:/*ion-inline-start:"/home/cheo/Desktop/handyman/src/pages/message/message.html"*/'<ion-header class="hm_bg_color hm_header">\n  <div class="hm_search_header">\nMessages\n  </div>\n  <div class="hm_clear"></div>\n</ion-header>\n\n\n<ion-content padding class="hm_sign_bg">\n	<div class="hm_message_div">\n		<ul>\n			<li (click)="chat()">\n				<div class="hm_message_pic">\n				<div class="hm_message_not">3</div>\n				</div>\n				<div class="hm_message_detail">\n					<h4>Shrayesh Diets</h4>\n					<p>Dear Ann,We accepted your request for diet nutrition.We will contact you soon.</p>\n				</div>\n				<div class="hm_message_date">\n					<h6>April</h6>\n					<p>13</p>\n				</div>\n				<div class="hm_clear"></div>\n			</li>\n			<li (click)="chat()">\n				<div class="hm_message_pic">\n				<div class="hm_message_not">3</div>\n				</div>\n				<div class="hm_message_detail">\n					<h4>Shrayesh Diets</h4>\n					<p>Dear Ann,We accepted your request for diet nutrition.We will contact you soon.</p>\n				</div>\n				<div class="hm_message_date">\n					<h6>April</h6>\n					<p>13</p>\n				</div>\n				<div class="hm_clear"></div>\n			</li>\n			<li (click)="chat()">\n				<div class="hm_message_pic">\n				<div class="hm_message_not">3</div>\n				</div>\n				<div class="hm_message_detail">\n					<h4>Shrayesh Diets</h4>\n					<p>Dear Ann,We accepted your request for diet nutrition.We will contact you soon.</p>\n				</div>\n				<div class="hm_message_date">\n					<h6>April</h6>\n					<p>13</p>\n				</div>\n				<div class="hm_clear"></div>\n			</li>\n			<li (click)="chat()">\n				<div class="hm_message_pic">\n				<div class="hm_message_not">3</div>\n				</div>\n				<div class="hm_message_detail">\n					<h4>Shrayesh Diets</h4>\n					<p>Dear Ann,We accepted your request for diet nutrition.We will contact you soon.</p>\n				</div>\n				<div class="hm_message_date">\n					<h6>April</h6>\n					<p>13</p>\n				</div>\n				<div class="hm_clear"></div>\n			</li>\n		</ul>\n	</div>\n</ion-content>\n<ion-footer>\n<tabcomponent></tabcomponent>\n</ion-footer>\n'/*ion-inline-end:"/home/cheo/Desktop/handyman/src/pages/message/message.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], Message);

//# sourceMappingURL=message.js.map

/***/ })

});
//# sourceMappingURL=2.js.map