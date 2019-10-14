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
import { IonicPage, NavController, ModalController, Content, NavParams } from 'ionic-angular';
var Home = /** @class */ (function () {
    function Home(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.scrollPosition = 0;
    }
    Home.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Home');
    };
    Home.prototype.location = function () {
        var modal = this.modalCtrl.create('Location');
        modal.present();
    };
    Home.prototype.service = function (id) {
        this.navCtrl.push('Service', { id: id });
    };
    Home.prototype.fitness = function () {
        this.navCtrl.push('Fitness');
    };
    Home.prototype.recommended = function () {
        this.navCtrl.push('Recommended');
    };
    __decorate([
        ViewChild(Content),
        __metadata("design:type", Content)
    ], Home.prototype, "content", void 0);
    Home = __decorate([
        IonicPage(),
        Component({
            selector: 'page-home',
            templateUrl: 'home.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ModalController])
    ], Home);
    return Home;
}());
export { Home };
//# sourceMappingURL=home.js.map