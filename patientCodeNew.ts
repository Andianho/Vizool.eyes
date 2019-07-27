import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {StudyGroup} from './studyGroup';

@Component({
  templateUrl: 'patientCodeNew.html'
})

export class PatientCodeNew {

  constructor(public navCtrl: NavController) {}
  ngOnInit() {
    localStorage.removeItem('accessory');
    localStorage.removeItem('gender');
    localStorage.removeItem('hair');
    localStorage.removeItem('pants');
    localStorage.removeItem('ptsCode');
    localStorage.removeItem('shoes');
    localStorage.removeItem('top');
    localStorage.removeItem('studyGroup');
    localStorage.removeItem('animals');
    localStorage.removeItem('pets');
    localStorage.removeItem('family');
    localStorage.removeItem('house');
    localStorage.removeItem('emotion');
    localStorage.removeItem('symptoms');

  }
  isPatientCodeFocussed = false;
  isPatientCodePressed = false;
  isErrorPatientCode = false;

  onFocus() {
    this.isPatientCodeFocussed = true;
  }

  onPress(ptsCode: string) {
    this.isPatientCodePressed = true;
    setTimeout(() => {
      this.isPatientCodePressed = false; }, 180
    );
    if (ptsCode.length === 0) {
      this.isErrorPatientCode = true;
    } else {
      this.isErrorPatientCode = false;
      localStorage.setItem('ptsCode', ptsCode);
      this.navCtrl.push(StudyGroup);
    }
  }

  onBlur(event: any) {
    this.isPatientCodeFocussed = false;
  }

}
