webpackJsonp([16],{

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectlistModule", function() { return ProjectlistModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__projectlist__ = __webpack_require__(437);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProjectlistModule = (function () {
    function ProjectlistModule() {
    }
    ProjectlistModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__projectlist__["a" /* Projectlist */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__projectlist__["a" /* Projectlist */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__projectlist__["a" /* Projectlist */]
            ]
        })
    ], ProjectlistModule);
    return ProjectlistModule;
}());

//# sourceMappingURL=projectlist.module.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Projectlist; });
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


var Projectlist = (function () {
    function Projectlist(navCtrl, navParams, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
    }
    Projectlist.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Projectlist');
    };
    Projectlist.prototype.presentPopover = function () {
        var popover = this.popoverCtrl.create('Wizardpopover');
        popover.present();
    };
    Projectlist.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    Projectlist.prototype.feedback = function () {
        this.navCtrl.push('Feedback');
    };
    Projectlist = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-projectlist',template:/*ion-inline-start:"/home/cheo/Desktop/handyman/src/pages/projectlist/projectlist.html"*/'<ion-header class="hm_bg_color hm_header">\n  <button ion-button class="hm_header_btn hm_float_left hm_back_icon" (click)="goBack()"></button>\n  <div class="hm_search_header">\n    Fitness Trainer at Home\n  </div>\n  <div class="hm_step">2/5</div>\n  <button ion-button class="hm_header_btn hm_float_right hm_more_icon" (click)="presentPopover()"></button>\n  <div class="hm_clear"></div>\n</ion-header>\n<ion-content padding  class="hm_sign_bg">\n	<div class="hm_message_div">\n		<ul>\n			<li (click) ="feedback()">\n				<div class="hm_message_pic">\n				</div>\n				<div class="hm_message_detail">\n					<h4>Shrayesh Diets</h4>\n					<p><span><img src="assets/img/hm_star.png">4.3</span><span><img src="assets/img/hm_comment.png">10 Comments</span></p>\n				</div>\n				<div class="hm_message_date">\n					<h5>$ 50000</h5>\n				</div>\n				<div class="hm_clear"></div>\n			</li>\n			<li (click) ="feedback()">\n				<div class="hm_message_pic">\n				</div>\n				<div class="hm_message_detail">\n					<h4>Shrayesh Diets</h4>\n					<p><span><img src="assets/img/hm_star.png">4.3</span><span><img src="assets/img/hm_comment.png">10 Comments</span></p>\n				</div>\n				<div class="hm_message_date">\n					<h5>$ 50000</h5>\n				</div>\n				<div class="hm_clear"></div>\n			</li>\n			<li (click) ="feedback()">\n				<div class="hm_message_pic">\n				</div>\n				<div class="hm_message_detail">\n					<h4>Shrayesh Diets</h4>\n					<p><span><img src="assets/img/hm_star.png">4.3</span><span><img src="assets/img/hm_comment.png">10 Comments</span></p>\n				</div>\n				<div class="hm_message_date">\n					<h5>$ 50000</h5>\n				</div>\n				<div class="hm_clear"></div>\n			</li>\n			<li (click) ="feedback()">\n				<div class="hm_message_pic">\n				</div>\n				<div class="hm_message_detail">\n					<h4>Shrayesh Diets</h4>\n					<p><span><img src="assets/img/hm_star.png">4.3</span><span><img src="assets/img/hm_comment.png">10 Comments</span></p>\n				</div>\n				<div class="hm_message_date">\n					<h5>$ 50000</h5>\n				</div>\n				<div class="hm_clear"></div>\n			</li>\n			<li (click) ="feedback()">\n				<div class="hm_message_pic">\n				</div>\n				<div class="hm_message_detail">\n					<h4>Shrayesh Diets</h4>\n					<p><span><img src="assets/img/hm_star.png">4.3</span><span><img src="assets/img/hm_comment.png">10 Comments</span></p>\n				</div>\n				<div class="hm_message_date">\n					<h5>$ 50000</h5>\n				</div>\n				<div class="hm_clear"></div>\n			</li>\n		</ul>\n	</div>\n</ion-content>\n<ion-footer>\n<div class="hm_btn_bottom" >\n<button ion-button class="hm_hired_btn">Whom have you Hired ?</button>\n</div>\n</ion-footer>\n'/*ion-inline-end:"/home/cheo/Desktop/handyman/src/pages/projectlist/projectlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */]])
    ], Projectlist);
    return Projectlist;
}());

//# sourceMappingURL=projectlist.js.map

/***/ })

});
//# sourceMappingURL=16.js.map