webpackJsonp([15],{

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendedModule", function() { return RecommendedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recommended__ = __webpack_require__(309);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RecommendedModule = (function () {
    function RecommendedModule() {
    }
    return RecommendedModule;
}());
RecommendedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__recommended__["a" /* Recommended */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__recommended__["a" /* Recommended */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__recommended__["a" /* Recommended */]
        ]
    })
], RecommendedModule);

//# sourceMappingURL=recommended.module.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Recommended; });
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


var Recommended = (function () {
    function Recommended(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Recommended.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Recommended');
    };
    Recommended.prototype.allservice = function (id) {
        this.navCtrl.push('Allservice', { id: id });
    };
    Recommended.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    return Recommended;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Content */])
], Recommended.prototype, "content", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('mySlider'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
], Recommended.prototype, "slider", void 0);
Recommended = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-recommended',template:/*ion-inline-start:"/home/cheo/Desktop/handyman/src/pages/recommended/recommended.html"*/'<ion-header class="hm_bg_color hm_header">\n  <button ion-button class="hm_header_btn hm_float_left hm_back_icon" (click)="goBack()"></button>\n  <div class="hm_search_header">\n    Salon at home\n  </div>\n  <div class="hm_clear"></div>\n</ion-header>\n<ion-content>\n	<div class="hm_recommended_wrapper">\n		<div class="hm_recommended_banner">\n			<div class="hm_recommended_banner_overlay">\n				<div class="hm_recommended_banner_text">\n					<h4>SPA AT HOME</h4>\n					<p>FOR WOMEN</p>\n				</div>\n			</div>\n			 <img src="assets/img/hm_spa_banner.png">\n		</div>\n		<div class="hm_recommended_detail">\n				<button class="hm_howitwork"><span><img src="assets/img/hm_ques1.png"></span><span>How it works</span></button>\n				<br><br>\n			<div class="hm_recommended_list">\n				<ul>\n					<li class="hm_border_top_none hm_border_left_none">\n						<div class="hm_rec_list_left">\n							<img src="assets/img/hm_branded.png">\n						</div>\n						<div class="hm_rec_list_right">\n							<h5>Branded Cosmetics</h5>\n							<h6>Lakme, La 0\' Real</h6>\n						</div>\n						<div class="hm_clear"></div>\n					</li>\n					<li class="hm_border_top_none hm_border_right_none hm_border_left_none">\n						<div class="hm_rec_list_left">\n							<img src="assets/img/hm_expert.png">\n						</div>\n						<div class="hm_rec_list_right">\n							<h5>Expert Beautition</h5>\n							<h6>Lakme, La 0\' Real</h6>\n						</div>\n						<div class="hm_clear"></div>\n					</li>\n					<li class="hm_border_top_none hm_border_bottom_none hm_border_left_none ">\n						<div class="hm_rec_list_left">\n							<img src="assets/img/hm_clean_service.png">\n						</div>\n						<div class="hm_rec_list_right">\n							<h5>Clean Service</h5>\n							<h6>Lakme, La 0\' Real</h6>\n						</div>\n						<div class="hm_clear"></div>\n					</li>\n					<li class="hm_border_top_none hm_border_bottom_none hm_border_left_none hm_border_right_none">\n						<div class="hm_rec_list_left">\n							<img src="assets/img/hm_cashless.png">\n						</div>\n						<div class="hm_rec_list_right">\n							<h5>Cashless Payment</h5>\n							<h6>Lakme, La 0\' Real</h6>\n						</div>\n						<div class="hm_clear"></div>\n					</li>\n					<li class="hm_border_bottom_none hm_border_left_none">\n						<div class="hm_rec_list_left">\n							<img src="assets/img/hm_ontime.png">\n						</div>\n						<div class="hm_rec_list_right">\n							<h5>On time</h5>\n							<h6>Lakme, La 0\' Real</h6>\n						</div>\n						<div class="hm_clear"></div>\n					</li>\n					<li class="hm_border_bottom_none hm_border_left_none hm_border_right_none">\n						<div class="hm_rec_list_left">\n							<img src="assets/img/hm_acces.png">\n						</div>\n						<div class="hm_rec_list_right">\n							<h5>Accessories</h5>\n							<h6>Lakme, La 0\' Real</h6>\n						</div>\n						<div class="hm_clear"></div>\n					</li>\n					<div class="hm_clear"></div>\n				</ul>\n				<h4><span><img src="assets/img/hm_smiley.png"></span><span>Customer Experiences</span></h4>\n				<br>\n				<div class="hm_experience">\n					 <ion-slides pager="false" #mySlider class="hm_test_video_slider">\n						<ion-slide>\n							<div class="hm_test_video_slider_overlay"></div>\n							<img src="assets/img/hm_video1.png">\n						</ion-slide>\n						<ion-slide>\n							<div class="hm_test_video_slider_overlay"></div>\n							<img src="assets/img/hm_video2.png">\n						</ion-slide>\n						<ion-slide>\n							<div class="hm_test_video_slider_overlay"></div>\n							<img src="assets/img/hm_video3.png">\n						</ion-slide>\n					 </ion-slides>\n				</div>\n				<div class="hm_experience_thumbnail">\n					 <ion-slides pager="false" #mySlider class="hm_thumb_video_slider">\n						<ion-slide>\n							<div class="hm_test_video_slider_overlay"></div>\n							<img src="assets/img/hm_video1.png">\n						</ion-slide>\n						<ion-slide>\n							<div class="hm_test_video_slider_overlay"></div>\n							<img src="assets/img/hm_video2.png">\n						</ion-slide>\n						<ion-slide>\n							<div class="hm_test_video_slider_overlay"></div>\n							<img src="assets/img/hm_video3.png">\n						</ion-slide>\n						<ion-slide>\n							<div class="hm_test_video_slider_overlay"></div>\n							<img src="assets/img/hm_video1.png">\n						</ion-slide>\n					 </ion-slides>\n				</div>\n				<h4><span><img src="assets/img/hm_comments.png"></span><span>Customer Testimonials</span></h4>\n				<br>\n				<div class="hm_testimonial">\n					<ion-slides pager="false" #mySlider class="hm_testimonial_slider">\n						<ion-slide>\n							<div class="hm_testimonial_top">\n								<div class="hm_testimonial_pic">\n								</div>\n								<div class="hm_testimonial_detail">\n									<h5>Anjali Bhathyar</h5>\n									<p>23-04-2017</p>\n								</div>\n								<div class="hm_clear"></div>\n								<div class="hm_testimoanil_p">\n									“ It is a long established fact that a reader will  be distracted by the readable content of a page when looking at its layout. The point of using Lorem ”\n								</div>\n							</div>\n						</ion-slide>\n						<ion-slide>\n							<div class="hm_testimonial_top">\n								<div class="hm_testimonial_pic">\n								</div>\n								<div class="hm_testimonial_detail">\n									<h5>Roshna Elsa John</h5>\n									<p>06-07-2017</p>\n								</div>\n								<div class="hm_clear"></div>\n								<div class="hm_testimoanil_p">\n									“ It is a long established fact that a reader will  be distracted by the readable content of a page when looking at its layout. The point of using Lorem ”\n								</div>\n							</div>\n						</ion-slide>\n						<ion-slide>\n							<div class="hm_testimonial_top">\n								<div class="hm_testimonial_pic">\n								</div>\n								<div class="hm_testimonial_detail">\n									<h5>Preethi Bhatt</h5>\n									<p>11-11-2017</p>\n								</div>\n								<div class="hm_clear"></div>\n								<div class="hm_testimoanil_p">\n									“ It is a long established fact that a reader will  be distracted by the readable content of a page when looking at its layout. The point of using Lorem ”\n								</div>\n							</div>\n						</ion-slide>\n					</ion-slides>\n				</div>\n			</div>\n			<br>\n			\n		</div>\n		\n	</div>\n\n</ion-content>\n<ion-footer>\n	<div class="hm_btn_bottom" >\n		<button class="hm_sign_btn" (click)="allservice(0)">\n			View all Spa Services\n		</button>\n	</div>\n</ion-footer>\n'/*ion-inline-end:"/home/cheo/Desktop/handyman/src/pages/recommended/recommended.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], Recommended);

//# sourceMappingURL=recommended.js.map

/***/ })

});
//# sourceMappingURL=15.js.map