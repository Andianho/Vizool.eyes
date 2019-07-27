import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PatientRecord} from "./patientRecord";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  isPasswordFocussed = false;
  isSignInPressed = false;
  isErrorPassword = false;
  passwordsSet = ["p","password2","password3","password4"];

  onFocus(event: any) {
    this.isPasswordFocussed = true;
  }

  onPress(password: string) {
    this.isSignInPressed = true;
    setTimeout(() => {
      this.isSignInPressed = false;
    }, 180);
    if (this.passwordsSet.indexOf(password) < 0) {
      this.isErrorPassword = true;
    } else {
      this.isErrorPassword = false;
      this.navCtrl.push(PatientRecord);
    }
  }

  onBlur(event: any) {
    this.isPasswordFocussed = false;
  }

}
