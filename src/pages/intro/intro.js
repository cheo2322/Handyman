var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Slides } from 'ionic-angular';
var Intro = /** @class */ (function () {
    function Intro(navCtrl) {
        this.navCtrl = navCtrl;
        this.currentIndex = 0;
    }
    Intro.prototype.onSlideChanged = function () {
    };
    Intro.prototype.goToNextSlide = function () {
        this.slider.slideNext();
        this.currentIndex = this.slider.getActiveIndex();
    };
    Intro.prototype.signin = function () {
        this.navCtrl.push('Signin');
    };
    __decorate([
        ViewChild('mySlider'),
        __metadata("design:type", Slides)
    ], Intro.prototype, "slider", void 0);
    Intro = __decorate([
        IonicPage(),
        Component({
            selector: 'page-intro',
            templateUrl: 'intro.html'
        }),
        __metadata("design:paramtypes", [NavController])
    ], Intro);
    return Intro;
}());
export { Intro };
//# sourceMappingURL=intro.js.map