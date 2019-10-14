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
import { IonicPage, NavController, Content, Slides, NavParams } from 'ionic-angular';
var Service = /** @class */ (function () {
    function Service(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        var id = this.navParams.get("id");
        this.slidertab = id;
        console.log("id", id);
        setTimeout(function () {
            _this.goToSlide(id);
        }, 500);
    }
    Service.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Service');
    };
    Service.prototype.goToSlide = function (id) {
        this.slider.slideTo(id, 500);
    };
    Service.prototype.slideChanged = function () {
        var currentIndex = this.slider.getActiveIndex();
        this.slidertab = currentIndex;
        console.log("Current index is", currentIndex);
    };
    Service.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    __decorate([
        ViewChild(Content),
        __metadata("design:type", Content)
    ], Service.prototype, "content", void 0);
    __decorate([
        ViewChild('mySlider'),
        __metadata("design:type", Slides)
    ], Service.prototype, "slider", void 0);
    Service = __decorate([
        IonicPage(),
        Component({
            selector: 'page-service',
            templateUrl: 'service.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], Service);
    return Service;
}());
export { Service };
//# sourceMappingURL=service.js.map