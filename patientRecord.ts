import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PatientCode } from './patientCode';
import { PatientCodeNew } from './patientCodeNew';

@Component({
  templateUrl: 'patientRecord.html'
})

export class PatientRecord {

  constructor(public navCtrl: NavController) {

  }

  isStartNewPress = false;
  isOpenExisting = false;

  onPressStartNew() {
    this.isStartNewPress = true;
    setTimeout(() => {
      this.isStartNewPress = false;
      this.navCtrl.push(PatientCodeNew);
    }, 180);
  }

  onPressOpenExisting() {
    this.isOpenExisting = true;
    setTimeout(() => {
      this.isOpenExisting = false;
      this.navCtrl.push(PatientCode);
    }, 180);
  }
}

