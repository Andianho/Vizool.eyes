import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PatientIndicators} from './patientIndicators'

@Component({
  templateUrl: 'thumbsUp.html'
})

export class Thumb {


  constructor(public navCtrl: NavController) {

  }

  onNext() {
    this.navCtrl.push(PatientIndicators);
  }


}

