webpackJsonp([28],{

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddpopupModule", function() { return AddpopupModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addpopup__ = __webpack_require__(291);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddpopupModule = (function () {
    function AddpopupModule() {
    }
    return AddpopupModule;
}());
AddpopupModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__addpopup__["a" /* Addpopup */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__addpopup__["a" /* Addpopup */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__addpopup__["a" /* Addpopup */]
        ]
    })
], AddpopupModule);

//# sourceMappingURL=addpopup.module.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Addpopup; });
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


var Addpopup = (function () {
    function Addpopup(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    Addpopup.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Addpopup');
    };
    Addpopup.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return Addpopup;
}());
Addpopup = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-addpopup',template:/*ion-inline-start:"/home/cheo/Desktop/handyman/src/pages/addpopup/addpopup.html"*/'<ion-content class="hm_theme_trans_bg">\n	<div class="hm_add_pop_div">\n		<div class="hm_add_pop_inner">\n			<div class="hm_add_pop_wrapper">\n				<div class="hm_add_pop_banner">\n					<div class="hm_add_close" (click)= "dismiss()">\n						<img src="assets/img/hm_add_close.png">\n					</div>\n					<img src="assets/img/hm_add_pop_img.png">\n				</div>\n				<div class="hm_add_detail">\n					<div class="hm_add_name_bay">\n						<h6>Monthly Wash and Groom</h6>\n						<span class="price">$50.00</span><span>|</span><span class="time">50 min</span>\n					</div>\n					<div class="hm_add_list">\n						<h6>Package Include</h6>\n						<ul>\n							<li>Full Legs and Arms</li>\n							<li>Threading</li>\n							<li>Rica peel off</li>\n						</ul>\n						<br>\n						<button class="hm_service_btn">ADD +</button>\n						<br>\n					</div>\n				</div>\n			</div>\n		</div>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/home/cheo/Desktop/handyman/src/pages/addpopup/addpopup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
], Addpopup);

//# sourceMappingURL=addpopup.js.map

/***/ })

});
//# sourceMappingURL=28.js.map