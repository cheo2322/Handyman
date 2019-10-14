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
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
var Projectlist = /** @class */ (function () {
    function Projectlist(navCtrl, navParams, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
    }
    Projectlist.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Projectlist');
    };
    Projectlist.prototype.presentPopover = function () {
        var popover = this.popoverCtrl.create('Wizardpopover');
        popover.present();
    };
    Projectlist.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    Projectlist.prototype.feedback = function () {
        this.navCtrl.push('Feedback');
    };
    Projectlist = __decorate([
        IonicPage(),
        Component({
            selector: 'page-projectlist',
            templateUrl: 'projectlist.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, PopoverController])
    ], Projectlist);
    return Projectlist;
}());
export { Projectlist };
//# sourceMappingURL=projectlist.js.map