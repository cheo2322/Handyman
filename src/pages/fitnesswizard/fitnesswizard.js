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
import { IonicPage, NavController, ModalController, Content, Slides, NavParams } from 'ionic-angular';
var Fitnesswizard = /** @class */ (function () {
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
        ViewChild(Content),
        __metadata("design:type", Content)
    ], Fitnesswizard.prototype, "content", void 0);
    __decorate([
        ViewChild('mySlider'),
        __metadata("design:type", Slides)
    ], Fitnesswizard.prototype, "slider", void 0);
    Fitnesswizard = __decorate([
        IonicPage(),
        Component({
            selector: 'page-fitnesswizard',
            templateUrl: 'fitnesswizard.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ModalController])
    ], Fitnesswizard);
    return Fitnesswizard;
}());
export { Fitnesswizard };
//# sourceMappingURL=fitnesswizard.js.map