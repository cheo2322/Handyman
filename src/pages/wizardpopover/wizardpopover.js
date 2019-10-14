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
import { IonicPage, NavController, ModalController, ViewController, NavParams } from 'ionic-angular';
var Wizardpopover = /** @class */ (function () {
    function Wizardpopover(navCtrl, navParams, modalCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
    }
    Wizardpopover.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Wizardpopover');
    };
    Wizardpopover.prototype.requirement = function () {
        this.navCtrl.push('Requirement');
        this.viewCtrl.dismiss();
    };
    Wizardpopover.prototype.cancel = function () {
        var modal = this.modalCtrl.create('Cancel');
        modal.present();
        this.viewCtrl.dismiss();
    };
    Wizardpopover = __decorate([
        IonicPage(),
        Component({
            selector: 'page-wizardpopover',
            templateUrl: 'wizardpopover.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ModalController, ViewController])
    ], Wizardpopover);
    return Wizardpopover;
}());
export { Wizardpopover };
//# sourceMappingURL=wizardpopover.js.map