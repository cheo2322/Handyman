webpackJsonp([25],{

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelModule", function() { return CancelModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cancel__ = __webpack_require__(295);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CancelModule = (function () {
    function CancelModule() {
    }
    CancelModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cancel__["a" /* Cancel */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cancel__["a" /* Cancel */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__cancel__["a" /* Cancel */]
            ]
        })
    ], CancelModule);
    return CancelModule;
}());

//# sourceMappingURL=cancel.module.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cancel; });
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


var Cancel = (function () {
    function Cancel(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    Cancel.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Cancel');
    };
    Cancel.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Cancel = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cancel',template:/*ion-inline-start:"/home/cheo/Desktop/handyman/src/pages/cancel/cancel.html"*/'\n<ion-content class="hm_theme_trans_bg">\n	<div class="hm_cancel_pop_div">\n		<div class="hm_cancel_pop_main">\n			<div class="hm_cancel_pop_upper">\n				<img src="assets/img/hm_ques_mark.png">\n				<p>Cancellation Reason</p>\n			</div>\n			<div class="hm_cancel_pop_lower">\n				<ul>\n					<li>\n						<div class="hm_cancel_radio">\n							<ion-radio ng-model="choice3" ng-value="\'C\'"></ion-radio>\n						</div>\n						<div class="hm_cancel_reason">\n							 I have hired someone outside\n						</div>\n						<div class="hm_clear"></div>\n					</li>\n					<li>\n						<div class="hm_cancel_radio">\n							<ion-radio ng-model="choice3" ng-value="\'C\'"></ion-radio>\n						</div>\n						<div class="hm_cancel_reason">\n							 I didn’t like the responses\n						</div>\n						<div class="hm_clear"></div>\n					</li>\n					<li>\n						<div class="hm_cancel_radio">\n							<ion-radio ng-model="choice3" ng-value="\'C\'"></ion-radio>\n						</div>\n						<div class="hm_cancel_reason">\n							Professional asked me to cancel\n						</div>\n						<div class="hm_clear"></div>\n					</li>\n					<li>\n						<div class="hm_cancel_radio">\n							<ion-radio ng-model="choice3" ng-value="\'C\'"></ion-radio>\n						</div>\n						<div class="hm_cancel_reason">\n							I have changed the plan\n						</div>\n						<div class="hm_clear"></div>\n					</li>\n					<li>\n						<div class="hm_cancel_radio">\n							<ion-radio ng-model="choice3" ng-value="\'C\'"></ion-radio>\n						</div>\n						<div class="hm_cancel_reason">\n							I submitted the request by mistake\n						</div>\n						<div class="hm_clear"></div>\n					</li>\n				</ul>\n				<div class="hm_cancel_bottom_bay">\n					<li class="hm_cancel_cancel" (click)="dismiss()">Cancel</li>\n					<li class="hm_cancel_submit" (click)="dismiss()">Submit</li>\n				</div>\n			</div>\n		</div>\n	</div>\n</ion-content>\n'/*ion-inline-end:"/home/cheo/Desktop/handyman/src/pages/cancel/cancel.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], Cancel);
    return Cancel;
}());

//# sourceMappingURL=cancel.js.map

/***/ })

});
//# sourceMappingURL=25.js.map