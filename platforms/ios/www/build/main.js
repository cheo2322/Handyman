webpackJsonp([30],{

/***/ 107:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 107;

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../components/tabcomponent/tabcomponent.module": [
		259,
		29
	],
	"../pages/addpopup/addpopup.module": [
		260,
		28
	],
	"../pages/address/address.module": [
		261,
		27
	],
	"../pages/allservice/allservice.module": [
		262,
		26
	],
	"../pages/cancel/cancel.module": [
		263,
		25
	],
	"../pages/chat/chat.module": [
		264,
		24
	],
	"../pages/editprofile/editprofile.module": [
		265,
		4
	],
	"../pages/feedback/feedback.module": [
		266,
		23
	],
	"../pages/fitness/fitness.module": [
		267,
		22
	],
	"../pages/fitnesswizard/fitnesswizard.module": [
		268,
		21
	],
	"../pages/home/home.module": [
		269,
		3
	],
	"../pages/intro/intro.module": [
		270,
		20
	],
	"../pages/location/location.module": [
		271,
		19
	],
	"../pages/message/message.module": [
		272,
		2
	],
	"../pages/myproject/myproject.module": [
		273,
		1
	],
	"../pages/newaddress/newaddress.module": [
		274,
		18
	],
	"../pages/payment/payment.module": [
		275,
		17
	],
	"../pages/profile/profile.module": [
		276,
		0
	],
	"../pages/projectlist/projectlist.module": [
		277,
		16
	],
	"../pages/recommended/recommended.module": [
		278,
		15
	],
	"../pages/requirement/requirement.module": [
		279,
		14
	],
	"../pages/selectaddresss/selectaddress.module": [
		280,
		13
	],
	"../pages/service/service.module": [
		281,
		12
	],
	"../pages/signin/signin.module": [
		282,
		11
	],
	"../pages/signup/signup.module": [
		283,
		10
	],
	"../pages/summary/summary.module": [
		284,
		9
	],
	"../pages/verification/verification.module": [
		285,
		8
	],
	"../pages/viewprofile/viewprofile.module": [
		286,
		7
	],
	"../pages/wizardpopover/wizardpopover.module": [
		287,
		6
	],
	"../pages/wizardsuccess/wizardsuccess.module": [
		288,
		5
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 147;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(210);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(258);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../components/tabcomponent/tabcomponent.module#TabcomponentModule', name: 'Tabcomponent', segment: 'tabcomponent', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/addpopup/addpopup.module#AddpopupModule', name: 'Addpopup', segment: 'addpopup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/address/address.module#AddressModule', name: 'Address', segment: 'address', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/allservice/allservice.module#AllserviceModule', name: 'Allservice', segment: 'allservice', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cancel/cancel.module#CancelModule', name: 'Cancel', segment: 'cancel', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/chat/chat.module#ChatModule', name: 'Chat', segment: 'chat', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/editprofile/editprofile.module#EditprofileModule', name: 'Editprofile', segment: 'editprofile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/feedback/feedback.module#FeedbackModule', name: 'Feedback', segment: 'feedback', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/fitness/fitness.module#FitnessModule', name: 'Fitness', segment: 'fitness', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/fitnesswizard/fitnesswizard.module#FitnesswizardModule', name: 'Fitnesswizard', segment: 'fitnesswizard', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomeModule', name: 'Home', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/intro/intro.module#IntroModule', name: 'Intro', segment: 'intro', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/location/location.module#LocationModule', name: 'Location', segment: 'location', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/message/message.module#MessageModule', name: 'Message', segment: 'message', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/myproject/myproject.module#MyprojectPageModule', name: 'Myproject', segment: 'myproject', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/newaddress/newaddress.module#NewaddressModule', name: 'Newaddress', segment: 'newaddress', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/payment/payment.module#PaymentModule', name: 'Payment', segment: 'payment', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'Profile', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/projectlist/projectlist.module#ProjectlistModule', name: 'Projectlist', segment: 'projectlist', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/recommended/recommended.module#RecommendedModule', name: 'Recommended', segment: 'recommended', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/requirement/requirement.module#RequirementModule', name: 'Requirement', segment: 'requirement', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/selectaddresss/selectaddress.module#SelectaddressModule', name: 'Selectaddress', segment: 'selectaddress', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/service/service.module#ServiceModule', name: 'Service', segment: 'service', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signin/signin.module#SigninModule', name: 'Signin', segment: 'signin', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupModule', name: 'Signup', segment: 'signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/summary/summary.module#SummaryModule', name: 'Summary', segment: 'summary', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/verification/verification.module#VerificationModule', name: 'Verification', segment: 'verification', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/viewprofile/viewprofile.module#ViewprofileModule', name: 'Viewprofile', segment: 'viewprofile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/wizardpopover/wizardpopover.module#WizardpopoverModule', name: 'Wizardpopover', segment: 'wizardpopover', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/wizardsuccess/wizardsuccess.module#WizardsuccessModule', name: 'Wizardsuccess', segment: 'wizardsuccess', priority: 'low', defaultHistory: [] }
                ]
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = 'Intro';
        this.initializeApp();
        // used for an example of ngFor and navigation
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/cheo/Desktop/handyman/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/home/cheo/Desktop/handyman/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[192]);
//# sourceMappingURL=main.js.map