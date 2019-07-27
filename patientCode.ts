import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Symptoms} from './symptoms';
import { Network } from '@ionic-native/network';
import { Toast } from '@ionic-native/toast';

@Component({
  templateUrl: 'patientCode.html'
})

export class PatientCode {

  constructor(public navCtrl: NavController, private http: HttpClient, private network: Network, private toast: Toast) {}

  isPatientCodeFocussed = false;
  isPatientCodePressed = false;
  isErrorPatientCode = false;
  isErrorPatientNotFound = false;

  onFocus(event: any) {
    this.isPatientCodeFocussed = true;
  }

  onPress(ptsCode: string) {
    this.isPatientCodePressed = true;
    setTimeout(() => {
      this.isPatientCodePressed = false;
    }, 180);

    if (this.network.type !== "none") {
      this.http.get(`http://staging.visooleyes.liquidpreview.net/api/v1/patient/${ptsCode}`, {
        headers:  new HttpHeaders().set('apikey', 'f78c469c-f982-4889-a83a-0eb29a530894').set('Content-Type', 'application/json')
      })
        .subscribe(
          ({data}: any) => {
            const ptsLogLast = data.patient_log.length - 1;

            localStorage.setItem('gender', data.patient_appearance.gender);
            localStorage.setItem('emotion', data.patient_log[ptsLogLast]["mood_type"]);
            localStorage.setItem('hair', data.patient_appearance.hair_type);
            localStorage.setItem('top', data.patient_appearance.top_type);
            localStorage.setItem('pants', data.patient_appearance.bottom_type);
            localStorage.setItem('shoes', data.patient_appearance.shoe_type);
            localStorage.setItem('accessory', data.patient_appearance.accessory_type);
            localStorage.setItem('ptsCode', data.patient.patient_code);
            localStorage.setItem('studyGroup', data.patient.study_group);
            localStorage.setItem('house', data.patient_appearance.home_type);
            localStorage.setItem('houseAlias', data.patient_appearance.home_type);
            localStorage.setItem('family', data.patient_appearance.family_type);
            localStorage.setItem('familyAlias', data.patient_appearance.family_type);
            localStorage.setItem('pets', JSON.stringify(data.patient_appearance.pet_type));
            localStorage.setItem('animals', JSON.stringify(data.patient_appearance.animal_type));
            this.navCtrl.push(Symptoms);
          },
          err => {
            this.isErrorPatientNotFound = true;
            console.log(err);
          }
        );
    } else {
      this.toast.show("Please check your connection ...", '5000', 'center').subscribe(
        toast => console.log(toast)
      );
    }


  }

  onBlur(event: any) {
    this.isPatientCodeFocussed = false;
  }

}
