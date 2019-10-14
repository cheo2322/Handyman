var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
var Selectaddress = /** @class */ (function () {
    function Selectaddress(navCtrl, navParams, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
    }
    Selectaddress.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Selectaddress');
    };
    Selectaddress.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Selectaddress.prototype.newaddress = function () {
        var modal = this.modalCtrl.create('Newaddress');
        modal.present();
    };
    Selectaddress.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    Selectaddress = __decorate([
        IonicPage(),
        Component({
            selector: 'page-selectaddress',
            templateUrl: 'selectaddress.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ViewController, ModalController])
    ], Selectaddress);
    return Selectaddress;
}());
export { Selectaddress };
//# sourceMappingURL=selectaddress.js.map