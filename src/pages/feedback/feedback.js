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
import { IonicPage, NavController, PopoverController, NavParams } from 'ionic-angular';
var Feedback = /** @class */ (function () {
    function Feedback(navCtrl, navParams, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
    }
    Feedback.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Feedback');
    };
    Feedback.prototype.presentPopover = function () {
        var popover = this.popoverCtrl.create('Wizardpopover');
        popover.present();
    };
    Feedback.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    Feedback = __decorate([
        IonicPage(),
        Component({
            selector: 'page-feedback',
            templateUrl: 'feedback.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, PopoverController])
    ], Feedback);
    return Feedback;
}());
export { Feedback };
//# sourceMappingURL=feedback.js.map