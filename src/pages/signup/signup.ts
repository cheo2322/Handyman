import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class Signup {
  public value: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.value = navParams.get('n');
  }

  ionViewDidLoad() {
  }

  verification() {
    let modal = this.modalCtrl.create('Verification');
    modal.present();
  }

  goBack() {
    this.navCtrl.pop();
  }
}