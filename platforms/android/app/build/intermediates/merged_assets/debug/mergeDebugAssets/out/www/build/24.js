webpackJsonp([24],{

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat__ = __webpack_require__(296);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChatModule = (function () {
    function ChatModule() {
    }
    ChatModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chat__["a" /* Chat */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chat__["a" /* Chat */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__chat__["a" /* Chat */]
            ]
        })
    ], ChatModule);
    return ChatModule;
}());

//# sourceMappingURL=chat.module.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chat; });
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


var Chat = (function () {
    function Chat(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    Chat.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Chat');
    };
    Chat.prototype.viewprofile = function () {
        var modal = this.modalCtrl.create('Viewprofile');
        modal.present();
    };
    Chat = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"/home/cheo/Desktop/handyman/src/pages/chat/chat.html"*/'<ion-header class="hm_bg_color hm_header">\n  <div class="hm_search_header" (click)="viewprofile()">\nShrayesh Diets\n  </div>\n  <div class="hm_clear"></div>\n</ion-header>\n<ion-content padding class="hm_sign_bg">\n	<div class="hm_chat_wrap">\n		<ul>\n			<li class="hm_received">\n				<div class="hm_message_photo"></div>\n				<div class="hm_message_content">\n					<h6>Shrayesh</h6>\n					<p>Hi,  Ann Alexander</p>\n					<span>Apr 13</span><span>10 : 00 am</span>\n				</div>\n				<div class="hm_clear"></div>\n			</li>\n			<li class="hm_sented">\n				<div class="hm_message_photo"></div>\n				<div class="hm_message_content">\n					<h6>You</h6>\n					<p>Hi, I needed a Nutrition expert</p>\n					<span>Apr 13</span><span>10 : 00 am</span>\n				</div>\n				<div class="hm_clear"></div>\n			</li>\n		</ul>\n	</div>\n</ion-content>\n<ion-footer>\n	<div class="hm_chat_type_wrapper">\n		<button class="hm_attach"><img src="assets/img/hm_attach.png"></button>\n		<button class="hm_camera"><img src="assets/img/hm_camera.png"></button>\n		<button class="hm_send_btn"><img src="assets/img/hm_send.png"></button>\n		<input class="hm_type_text" type="text" placeholder="Type your message here">\n		\n		<div class="hm_clear"></div>\n	</div>\n</ion-footer>\n'/*ion-inline-end:"/home/cheo/Desktop/handyman/src/pages/chat/chat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], Chat);
    return Chat;
}());

//# sourceMappingURL=chat.js.map

/***/ })

});
//# sourceMappingURL=24.js.map