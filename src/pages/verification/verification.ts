import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, NavParams, AlertController, Modal } from 'ionic-angular';
import * as moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-verification',
  templateUrl: 'verification.html',
})

export class Verification {

  public timer = '02:00';
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,
    public alertCtrl: AlertController) {
    //this.startTimer();
    var newDateObj = moment().add(3, 's');
    this.countdown(newDateObj);
  }

  getRemainTime(deadline) {
    let now = new Date(),
      deadl = moment(new Date(deadline)),
      remainTime = deadl.diff(now, 'seconds'),
      remainSeconds = ('0' + remainTime % 60).slice(-2),
      remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2);
    return { remainTime, remainSeconds, remainMinutes };
  }

  countdown(deadline) {
    var i = 0;
    const timerUpdate = setInterval(() => {
      let t = this.getRemainTime(deadline);

      this.timer = `${t.remainMinutes}:${t.remainSeconds}`;
      if (t.remainTime < 1) {
        clearInterval(timerUpdate);
        this.timer = '00:00';
        this.showAlert();
      }
    }, 1000);
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: ' Tu tiempo ha expirado ',
      subTitle: ' Es necesario que pidas otro código de verificación. ',
      buttons: [
        {
          text: 'OK',
          handler: data => {
            this.navCtrl.push('Verification');
          }
        },
      ],
    });
    alert.present();
  }

  back() {
    this.navCtrl.push('Signup');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Verification');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  home() {
    this.navCtrl.push('Home');
  }
}