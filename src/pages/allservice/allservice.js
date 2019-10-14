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
import { IonicPage, NavController, ModalController, ViewController, Content, Slides, NavParams } from 'ionic-angular';
var Allservice = /** @class */ (function () {
    function Allservice(navCtrl, navParams, modalCtrl, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        var id = this.navParams.get("id");
        this.slidertab = id;
        console.log("id", id);
        setTimeout(function () {
            _this.goToSlide(id);
        }, 500);
    }
    Allservice.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Allservice');
    };
    Allservice.prototype.goToSlide = function (id) {
        this.slider.slideTo(id, 500);
    };
    Allservice.prototype.slideChanged = function () {
        var currentIndex = this.slider.getActiveIndex();
        this.slidertab = currentIndex;
        console.log("Current index is", currentIndex);
    };
    Allservice.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    Allservice.prototype.summary = function () {
        this.navCtrl.push('Summary');
    };
    Allservice.prototype.add = function () {
        var modal = this.modalCtrl.create('Addpopup');
        modal.present();
    };
    __decorate([
        ViewChild(Content),
        __metadata("design:type", Content)
    ], Allservice.prototype, "content", void 0);
    __decorate([
        ViewChild('mySlider'),
        __metadata("design:type", Slides)
    ], Allservice.prototype, "slider", void 0);
    Allservice = __decorate([
        IonicPage(),
        Component({
            selector: 'page-allservice',
            templateUrl: 'allservice.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ModalController, ViewController])
    ], Allservice);
    return Allservice;
}());
export { Allservice };
//# sourceMappingURL=allservice.js.map