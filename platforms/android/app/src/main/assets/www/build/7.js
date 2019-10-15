webpackJsonp([7],{

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewprofileModule", function() { return ViewprofileModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__viewprofile__ = __webpack_require__(318);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ViewprofileModule = (function () {
    function ViewprofileModule() {
    }
    ViewprofileModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__viewprofile__["a" /* Viewprofile */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__viewprofile__["a" /* Viewprofile */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__viewprofile__["a" /* Viewprofile */]
            ]
        })
    ], ViewprofileModule);
    return ViewprofileModule;
}());

//# sourceMappingURL=viewprofile.module.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Viewprofile; });
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


var Viewprofile = (function () {
    function Viewprofile(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    Viewprofile.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Viewprofile');
        this.tab = "media";
    };
    Viewprofile.prototype.tab_swap = function (type) {
        this.tab = type;
    };
    Viewprofile.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Viewprofile = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-viewprofile',template:/*ion-inline-start:"/home/cheo/Desktop/handyman/src/pages/viewprofile/viewprofile.html"*/'<ion-header class="hm_bg_color hm_header">\n  <button ion-button class="hm_header_btn hm_float_left hm_back_icon" (click)="dismiss()"></button>\n  <div class="hm_search_header">\n   View Profile\n  </div>\n  <div class="hm_clear"></div>\n</ion-header>\n\n\n<ion-content padding class="hm_sign_bg">\n<div class="hm_view_profile_banner">\n	<div class="hm_view_profile_pic">\n	</div>\n	<div class="hm_view_profile_detail">\n		<h4>Anjaly Bhathiya</h4>\n		<span><img src="assets/img/hm_star.png">4.3</span>\n		<p>Banglore City, Station Jn, Railway <br>\nColony, Banglore</p>\n<p><strong>$ 330/</strong>&nbsp;&nbsp;month</p>\n	</div>\n	<div class="hm_clear"></div>\n</div>\n<div class="hm_view_tab_bay">\n	<li [class.active]="tab==\'media\'" (click)="tab_swap(\'media\')"><a>MEDIA</a></li>\n	<li [class.active]="tab==\'review\'" (click)="tab_swap(\'review\')"><a>REVIEW</a></li>\n	<li [class.active]="tab==\'about\'" (click)="tab_swap(\'about\')"><a>ABOUT</a></li>\n	<div class="hm_clear"></div>\n</div>\n<div class="hm_view_tab_content" [hidden]="tab !=\'media\'">\n	<div class="hm_recommended_list">\n		<h4><span><img src="assets/img/hm_video.png"></span><span>Videos & Photos</span></h4>\n		<br>\n		<div class="hm_experience">\n					 <ion-slides pager="false" #mySlider class="hm_test_video_slider">\n						<ion-slide>\n							<div class="hm_test_video_slider_overlay"></div>\n							<img src="assets/img/hm_video1.png">\n						</ion-slide>\n						<ion-slide>\n							<div class="hm_test_video_slider_overlay"></div>\n							<img src="assets/img/hm_video2.png">\n						</ion-slide>\n						<ion-slide>\n							<div class="hm_test_video_slider_overlay"></div>\n							<img src="assets/img/hm_video3.png">\n						</ion-slide>\n					 </ion-slides>\n				</div>\n				<div class="hm_experience_thumbnail">\n					 <ion-slides pager="false" #mySlider class="hm_thumb_video_slider">\n						<ion-slide>\n							<div class="hm_test_video_slider_overlay"></div>\n							<img src="assets/img/hm_video1.png">\n						</ion-slide>\n						<ion-slide>\n							<div class="hm_test_video_slider_overlay"></div>\n							<img src="assets/img/hm_video2.png">\n						</ion-slide>\n						<ion-slide>\n							<div class="hm_test_video_slider_overlay"></div>\n							<img src="assets/img/hm_video3.png">\n						</ion-slide>\n						<ion-slide>\n							<div class="hm_test_video_slider_overlay"></div>\n							<img src="assets/img/hm_video1.png">\n						</ion-slide>\n					 </ion-slides>\n				</div>\n	</div>\n</div>\n<div class="hm_view_tab_content" [hidden]="tab !=\'review\'" >\n<div class="hm_reviews_list">\n	<ul>\n		<li>\n			<div class="hm_testimonial_top">\n				<div class="hm_testimonial_pic">\n				</div>\n				<div class="hm_testimonial_detail">\n					<h5>Roshna Elsa John</h5>\n					<p><span><img src="assets/img/hm_star.png">4.3</span>Wed 26,2017</p>\n				</div>\n				<div class="hm_clear"></div>\n				<div class="hm_testimoanil_p">\n					“ It is a long established fact that a reader will  be distracted by the readable content of a page when looking at its layout. The point of using Lorem ”\n				</div>\n			</div>\n		</li>\n		<hr>\n		<li>\n			<div class="hm_testimonial_top">\n				<div class="hm_testimonial_pic">\n				</div>\n				<div class="hm_testimonial_detail">\n					<h5>Roshna Elsa John</h5>\n					<p><span><img src="assets/img/hm_star.png">4.3</span>Wed 26,2017</p>\n				</div>\n				<div class="hm_clear"></div>\n				<div class="hm_testimoanil_p">\n					“ It is a long established fact that a reader will  be distracted by the readable content of a page when looking at its layout. The point of using Lorem ”\n				</div>\n			</div>\n		</li>\n		<hr>\n		<li>\n			<div class="hm_testimonial_top">\n				<div class="hm_testimonial_pic">\n				</div>\n				<div class="hm_testimonial_detail">\n					<h5>Roshna Elsa John</h5>\n					<p><span><img src="assets/img/hm_star.png">4.3</span>Wed 26,2017</p>\n				</div>\n				<div class="hm_clear"></div>\n				<div class="hm_testimoanil_p">\n					“ It is a long established fact that a reader will  be distracted by the readable content of a page when looking at its layout. The point of using Lorem ”\n				</div>\n			</div>\n		</li>\n	</ul>\n</div>\n\n</div>\n<div class="hm_view_tab_content" [hidden]="tab !=\'about\'" >\n<h5>Business name</h5>\n<h4>Utimate Nutrition</h4>\n<h5>Introduction</h5>\n<p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It </p>\n<h5>No of times Hired</h5>\n<h4>135</h4>\n<h5>Qualification</h5>\n<h4>MFA Sculpting and Design</h4>\n<h5>Organisations Served</h5>\n<h4>Wall Sculpting, Office Interiors</h4>\n</div>\n\n</ion-content>\n<ion-footer>\n<div class="hm_btn_bottom hm_align_center">\n		<button class="hm_chat_btn">\n			<span>Chat<img src="assets/img/hm_comment.png"></span>\n		</button>\n		<button class="hm_call_btn">\n			<span>Call<img src="assets/img/hm_call.png"></span>\n		</button>\n		<div class="hm_clear"></div>\n	</div>\n</ion-footer>\n'/*ion-inline-end:"/home/cheo/Desktop/handyman/src/pages/viewprofile/viewprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], Viewprofile);
    return Viewprofile;
}());

//# sourceMappingURL=viewprofile.js.map

/***/ })

});
//# sourceMappingURL=7.js.map