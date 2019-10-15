webpackJsonp([14],{

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequirementModule", function() { return RequirementModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__requirement__ = __webpack_require__(310);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RequirementModule = (function () {
    function RequirementModule() {
    }
    return RequirementModule;
}());
RequirementModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__requirement__["a" /* Requirement */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__requirement__["a" /* Requirement */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__requirement__["a" /* Requirement */]
        ]
    })
], RequirementModule);

//# sourceMappingURL=requirement.module.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Requirement; });
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


var Requirement = (function () {
    function Requirement(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Requirement.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Requirement');
    };
    Requirement.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    return Requirement;
}());
Requirement = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-requirement',template:/*ion-inline-start:"/home/cheo/Desktop/handyman/src/pages/requirement/requirement.html"*/'<ion-header class="hm_bg_color hm_header">\n  <button ion-button class="hm_header_btn hm_float_left hm_back_icon" (click)="goBack()"></button>\n  <div class="hm_search_header">\nYour requirements\n  </div>\n  <div class="hm_clear"></div>\n</ion-header>\n<ion-content class="hm_sign_bg" padding>\n	<div class="hm_requirement">\n		<ul>\n			<li>\n				<p>My fitness goal</p>\n				<h4>Weight gain</h4>\n			</li>\n			<li>\n				<p>Type of lesson</p>\n				<h4>Private session</h4>\n			</li>\n			<li>\n				<p>Age Bracket</p>\n				<h4>20 - 24 years</h4>\n			</li>\n			<li>\n				<p>Number of sessions</p>\n				<h4>Twice a week</h4>\n			</li>\n			<li>\n				<p>Estimated budget</p>\n				<h4>Best in class</h4>\n			</li>\n			<li>\n				<p>Location</p>\n				<h4>Los Angeles</h4>\n			</li>\n		</ul>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/home/cheo/Desktop/handyman/src/pages/requirement/requirement.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], Requirement);

//# sourceMappingURL=requirement.js.map

/***/ })

});
//# sourceMappingURL=14.js.map