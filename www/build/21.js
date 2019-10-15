webpackJsonp([21],{

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FitnesswizardModule", function() { return FitnesswizardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fitnesswizard__ = __webpack_require__(428);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FitnesswizardModule = (function () {
    function FitnesswizardModule() {
    }
    FitnesswizardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__fitnesswizard__["a" /* Fitnesswizard */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__fitnesswizard__["a" /* Fitnesswizard */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__fitnesswizard__["a" /* Fitnesswizard */]
            ]
        })
    ], FitnesswizardModule);
    return FitnesswizardModule;
}());

//# sourceMappingURL=fitnesswizard.module.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Fitnesswizard; });
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


var Fitnesswizard = (function () {
    function Fitnesswizard(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.currentIndex = 0;
    }
    Fitnesswizard.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Fitnesswizard');
    };
    Fitnesswizard.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    Fitnesswizard.prototype.goToNextSlide = function () {
        this.slider.slideNext();
        this.content.scrollToTop();
    };
    Fitnesswizard.prototype.goToPrevSlide = function () {
        this.slider.slidePrev();
        this.content.scrollToTop();
    };
    Fitnesswizard.prototype.slideChanged = function () {
        this.currentIndex = this.slider.getActiveIndex();
        this.slidertab = this.currentIndex;
        console.log("Current index is", this.currentIndex);
    };
    Fitnesswizard.prototype.wizardsuccess = function () {
        var modal = this.modalCtrl.create('Wizardsuccess');
        modal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], Fitnesswizard.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('mySlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Slides */])
    ], Fitnesswizard.prototype, "slider", void 0);
    Fitnesswizard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fitnesswizard',template:/*ion-inline-start:"/home/cheo/Desktop/handyman/src/pages/fitnesswizard/fitnesswizard.html"*/'<ion-header class="hm_bg_color hm_header">\n  <button ion-button class="hm_header_btn hm_float_left hm_back_icon" (click)="goBack()"></button>\n  <div class="hm_search_header">\nFitness\n  </div>\n  <div class="hm_clear"></div>\n</ion-header>\n\n\n<ion-content class="hm_sign_bg">\n    <div class="hm_wrapper_inner">\n		<div class="hm_wizard_progress">\n			<ul>\n				<div class="hm_progress0" [hidden] ="currentIndex != 0"></div>\n				<div class="hm_progress1" [hidden] ="currentIndex != 1"></div>\n				<div class="hm_progress2" [hidden] ="currentIndex != 2"></div>\n				<div class="hm_progress3" [hidden] ="currentIndex != 3"></div>\n				<!-- <li>\n					<div class="hm_progress" [hidden] ="currentIndex != 0"></div>\n					<div class="hm_progress_deactive" [hidden] ="currentIndex == 0"></div>\n				</li>\n				<li>\n					<div class="hm_progress" [hidden] ="currentIndex != 1"></div>\n					<div class="hm_progress_deactive" [hidden] ="currentIndex == 1"></div>\n				</li>\n				<li>\n					<div class="hm_progress" [hidden] ="currentIndex != 2"></div>\n					<div class="hm_progress_deactive" [hidden] ="currentIndex == 2"></div>\n				</li>\n				<li>\n					<div class="hm_progress" [hidden] ="currentIndex != 3"></div>\n					<div class="hm_progress_deactive" [hidden] ="currentIndex == 3"></div>\n				</li>\n				<div class="hm_clear"></div> -->\n			</ul>\n		</div>\n        <ion-slides pager="false" #mySlider class="hm_wizard_wrapper" (ionSlideDidChange)="slideChanged()">\n            <ion-slide class="hm_wizard_slide">\n				<div class="hm_wizard_completion">\n					<div class="hm_wizard_progress_info">\n						<strong>0</strong>% Completion\n					</div>\n					<div class="hm_wizard_content">\n						<h5>OUR PROMISE</h5>\n						<ul>\n							<li>Experienced and verified furniture <br>contractors</li>\n							<li>High 	quality delivery</li>\n						</ul>\n						<h5>SERVICES OFFERED</h5>\n						<ul>\n							<li>Free stretching services</li>\n							<li>1 hour Relaxation warmup</li>\n						</ul>\n					</div>\n				</div>\n            </ion-slide>\n            <ion-slide class="hm_wizard_slide">\n				<div class="hm_wizard_completion">\n					<div class="hm_wizard_progress_info">\n						<strong>25</strong>% Completion\n					</div>\n					<div class="hm_wizard_content">\n						<h5>PLEASE SPECIFY YOUR GOAL TO HELP AS FOR FIND THE TRAINER ?</h5>\n						<br>\n						<div class="hm_radio_custom">\n							<div class="hm_radio_div">\n								<ion-radio ng-model="choice" ng-value="\'A\'"></ion-radio>\n							</div>\n							<div class="hm_radio_label">\n								Weight loss\n							</div>\n							<div class="hm_clear"></div>\n						</div>\n						<div class="hm_radio_custom">\n							<div class="hm_radio_div">\n								<ion-radio ng-model="choice1" ng-value="\'A\'"></ion-radio>\n							</div>\n							<div class="hm_radio_label">\n								Weight gain\n							</div>\n							<div class="hm_clear"></div>\n						</div>\n						<div class="hm_radio_custom">\n							<div class="hm_radio_div">\n								<ion-radio ng-model="choice2" ng-value="\'B\'"></ion-radio>\n							</div>\n							<div class="hm_radio_label">\n								Strength\n							</div>\n							<div class="hm_clear"></div>\n						</div>\n						<div class="hm_radio_custom">\n							<div class="hm_radio_div">\n								<ion-radio ng-model="choice3" ng-value="\'C\'"></ion-radio>\n							</div>\n							<div class="hm_radio_label">\n								Overall fitness\n							</div>\n							<div class="hm_clear"></div>\n						</div>\n						<div class="hm_radio_custom">\n							<div class="hm_radio_div">\n								<ion-radio ng-model="choice4" ng-value="\'D\'"></ion-radio>\n							</div>\n							<div class="hm_radio_label">\n								Others\n							</div>\n							<div class="hm_clear"></div>\n						</div>\n					</div>\n				</div>\n            </ion-slide>\n            <ion-slide class="hm_wizard_slide">\n				<div class="hm_wizard_completion">\n					<div class="hm_wizard_progress_info">\n						<strong>50</strong>% Completion\n					</div>\n					<div class="hm_wizard_content">\n						<h5>WHAT TIME ARE YOU AVAILABLE FOR\nTRAINING SESSIONS?</h5>\n						<br>\n						<div class="hm_radio_custom">\n							<div class="hm_radio_div">\n								<ion-radio ng-model="choice" ng-value="\'A\'"></ion-radio>\n							</div>\n							<div class="hm_radio_label">\n								Early morning\n							</div>\n							<div class="hm_clear"></div>\n						</div>\n						<div class="hm_radio_custom">\n							<div class="hm_radio_div">\n								<ion-radio ng-model="choice" ng-value="\'A\'"></ion-radio>\n							</div>\n							<div class="hm_radio_label">\n								Morning\n							</div>\n							<div class="hm_clear"></div>\n						</div>\n						<div class="hm_radio_custom">\n							<div class="hm_radio_div">\n								<ion-radio ng-model="choice" ng-value="\'A\'"></ion-radio>\n							</div>\n							<div class="hm_radio_label">\n								Afternoon\n							</div>\n							<div class="hm_clear"></div>\n						</div>\n						<div class="hm_radio_custom">\n							<div class="hm_radio_div">\n								<ion-radio ng-model="choice" ng-value="\'A\'"></ion-radio>\n							</div>\n							<div class="hm_radio_label">\n								Evening\n							</div>\n							<div class="hm_clear"></div>\n						</div>\n					</div>\n				</div>\n            </ion-slide>\n			<ion-slide class="hm_wizard_slide">\n              <div class="hm_wizard_completion">\n					<div class="hm_wizard_progress_info">\n						<strong>100</strong>% Completion\n					</div>\n					<div class="hm_wizard_content">\n						<h5>WHERE ARE YOU LOCATED?</h5>\n						<p>We’d need your location to find professionals who\nservice in your area</p>\n						<br>\n						\n						<h6>Your Locality</h6>\n						<input class="hm_location_input" placeholder="Banarsi Das Estate, Delhi">\n						<br>\n						<br>\n							<button  class="hm_getlocation_btn">\n							Get Current Location\n							</button>\n					</div>\n				</div>\n            </ion-slide>\n         </ion-slides>\n	</div>\n</ion-content>\n	<ion-footer>\n		<div class="hm_wizard_footer">\n		<p>We will save your requirement preferences for future<br> \nrequests</p>\n	  <div class="" [hidden] ="currentIndex != 0">\n       <button  class="hm_wizard_footer_btn"(click)="goToNextSlide()">\n         Get Started\n       </button>\n	   \n     </div>\n     <div class="" [hidden] = "currentIndex != 1">\n          <button  class="hm_wizard_footer_btn" (click)="goToNextSlide()">\n            Next\n          </button>\n        </div>\n		<div class="" [hidden] ="currentIndex != 2">\n          <button  class="hm_wizard_footer_btn" (click)="goToNextSlide()">\n			Next\n          </button>\n        </div>\n		<div class="" [hidden] ="currentIndex != 3">\n          <button  class="hm_wizard_footer_btn" (click)="wizardsuccess()">\n			Get Quotes\n          </button>\n        </div>\n		</div>\n</ion-footer>\n\n'/*ion-inline-end:"/home/cheo/Desktop/handyman/src/pages/fitnesswizard/fitnesswizard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], Fitnesswizard);
    return Fitnesswizard;
}());

//# sourceMappingURL=fitnesswizard.js.map

/***/ })

});
//# sourceMappingURL=21.js.map