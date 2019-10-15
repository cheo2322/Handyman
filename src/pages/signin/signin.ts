import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {Validator} from "validator.ts/Validator";
import {Contains, IsInt, IsLength, IsEmail, IsFQDN, IsDate} from "validator.ts/decorator/Validation";

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class Signin {
  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  validatePhone() {
    var number = (document.getElementById('phone') as HTMLInputElement).value,
      regex1 = /^([0-9]+){9}$/,
      regex2 = /\s/;

    if (number == '')
      alert('Es necesario tu numero de celular para poder ingresar/registrarte');
    else if (regex2.test(number))
      alert('Número incorrecto');
    else if (!regex1.test(number))
      alert('Número incompleto');
    else
      this.signup();
  }

  signup() {
    this.navCtrl.push('Signup');
  }
}