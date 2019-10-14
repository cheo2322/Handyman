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
var Wizardsuccess = /** @class */ (function () {
    function Wizardsuccess(navCtrl, navParams, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
    }
    Wizardsuccess.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Wizardsuccess');
    };
    Wizardsuccess.prototype.presentPopover = function () {
        var popover = this.popoverCtrl.create('Wizardpopover');
        popover.present();
    };
    Wizardsuccess.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    Wizardsuccess = __decorate([
        IonicPage(),
        Component({
            selector: 'page-wizardsuccess',
            templateUrl: 'wizardsuccess.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, PopoverController])
    ], Wizardsuccess);
    return Wizardsuccess;
}());
export { Wizardsuccess };
//# sourceMappingURL=wizardsuccess.js.map