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
var Recommended = /** @class */ (function () {
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
    __decorate([
        ViewChild(Content),
        __metadata("design:type", Content)
    ], Recommended.prototype, "content", void 0);
    __decorate([
        ViewChild('mySlider'),
        __metadata("design:type", Slides)
    ], Recommended.prototype, "slider", void 0);
    Recommended = __decorate([
        IonicPage(),
        Component({
            selector: 'page-recommended',
            templateUrl: 'recommended.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], Recommended);
    return Recommended;
}());
export { Recommended };
//# sourceMappingURL=recommended.js.map