import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { PatientRecord} from './patientRecord';
import moment from 'moment';
import request from 'superagent';
import { Network } from '@ionic-native/network';
import { Toast } from '@ionic-native/toast';

@Component({
  templateUrl: 'patientReview.html'
})

export class PatientReview {
  payload;
  patient_code;
  date = moment().format('D/M/YYYY');
  context;
  mood = '';
  symptoms = '';
  cd4count = '';
  cd4countDate = '';
  viralLoadDate = '';
  tb_diagnosis_date = '';
  viralLoad = '';
  modeOfTransmission = '';
  arvRegime = '';
  tbDiagnosis = "No";
  coMorbidites = '';
  comments = '';
  non_medication_days_7 = '';
  non_medication_days_30 = '';
  attended_last_appointment = '';
  missed_appointments_3_months = '';
  missed_appointments_6_months = '';

  constructor(params: NavParams, public navCtrl: NavController, private network: Network, private toast: Toast) {
    const data = params.data.apiPayLoad;
    this.payload = params.data.apiPayLoad;
    let contextStr = '';
    this.patient_code = data.patient.patient_code;
    this.mood = localStorage.getItem('emotionAlias');
    this.cd4countDate = params.data.cd4Date;
    this.viralLoadDate = params.data.viralLoadDate;
    this.tb_diagnosis_date = params.data.tbDiagnosisDate;
    if (data.patient_indicator.cd4_count_1 !== "") this.cd4count = `${data.patient_indicator.cd4_count_1}`;
    if (data.patient_indicator.cd4_count_1 !== "" && params.data.cd4Date !== "Select date") this.cd4count = `${data.patient_indicator.cd4_count_1} (${params.data.cd4Date})`;
    if (data.patient_indicator.cd4_count_2 !== "") this.viralLoad = `${data.patient_indicator.cd4_count_2}`;
    if (data.patient_indicator.cd4_count_2 !== "" && params.data.viralLoadDate !== "Select date") this.viralLoad = `${data.patient_indicator.cd4_count_2} (${params.data.viralLoadDate})`;
    if (data.patient_indicator.mode_of_transmission !== "default") this.modeOfTransmission = data.patient_indicator.mode_of_transmission;
    if (data.patient_indicator.arv_regime !== "default") this.arvRegime = data.patient_indicator.arv_regime;
    this.tbDiagnosis = data.patient_indicator.tb_diagnosis === true ? "Yes" : "No";
    if (data.patient_indicator.co_morbidites !== "default") this.coMorbidites = data.patient_indicator.co_morbidites;
    if (data.patient_indicator.non_medication_days_7 !== "") this.non_medication_days_7 = `Last 7 days: ${data.patient_indicator.non_medication_days_7} days missed`;
    if (data.patient_indicator.non_medication_days_30 !== "") this.non_medication_days_30 = `Last 30 days: ${data.patient_indicator.non_medication_days_30} days missed`;
    if (data.patient_indicator.attended_last_appointment !== "") this.attended_last_appointment = `Last appointment: ${data.patient_indicator.attended_last_appointment} visits`;
    if (data.patient_indicator.missed_appointments_3_months !== "") this.missed_appointments_3_months = `Last appointment 3 months: ${data.patient_indicator.missed_appointments_3_months} visits`;
    if (data.patient_indicator.missed_appointments_6_months !== "") this.missed_appointments_6_months = `Last appointment 6 months: ${data.patient_indicator.missed_appointments_6_months} visits`;
    if (data.patient_indicator.comments !== "") this.comments =  data.patient_indicator.comments;
    if (data.patient_appearance.pet_type !== null && data.patient_appearance.animal_type !== null) {
      contextStr = data.patient_appearance.pet_type.toString() + ',' + data.patient_appearance.animal_type.toString();
      contextStr = contextStr.replace(/,/g,', ');
    } else if (data.patient_appearance.pet_type !== null) {
      contextStr = data.patient_appearance.pet_type.toString();
      contextStr = contextStr.replace(/,/g,', ');
    } else if (data.patient_appearance.animal_type !== null) {
      contextStr = data.patient_appearance.animal_type.toString();
    }
    if (contextStr === '') {
      this.context = `${localStorage.getItem('houseAlias')}, ${localStorage.getItem('familyAlias')}`;
    } else {
      this.context = `${localStorage.getItem('houseAlias')}, ${contextStr}, ${localStorage.getItem('familyAlias')}`;
    }
    if (data.patient_log.symptom_type !== null) {
      this.symptoms = data.patient_log.symptom_type.toString().replace(/,/g,', ');
    } else {
      this.symptoms = "None"
    }
  }

  uploadData() {
    return new Promise((resolve,reject) =>{
      if (this.network.type !== "none") {
        resolve(true);
      } else {
        reject(false);
        this.toast.show("Saving data on device. No connection.", '5000', 'center').subscribe(
          toast => console.log(toast)
        );
      }
    })
  }

  done() {
    if (this.payload.patient_indicator.cd4_count_1 === "") {
      delete this.payload.patient_indicator.cd4_count_1;
    }
    if (this.cd4countDate === "Select date") {
      delete this.payload.patient_indicator.cd4_date_1;
    }
    if (this.payload.patient_indicator.cd4_count_2 === "") {
      delete this.payload.patient_indicator.cd4_count_2;
    }
    if (this.viralLoadDate === "Select date") {
      delete this.payload.patient_indicator.cd4_date_2;
    }
    if (this.payload.patient_indicator.mode_of_transmission === "default") {
      delete this.payload.patient_indicator.mode_of_transmission;
    }
    if (this.payload.patient_indicator.arv_regime === "default") {
      delete this.payload.patient_indicator.arv_regime;
    }
    if (this.tb_diagnosis_date === "Select date") {
      delete this.payload.patient_indicator.tb_diagnosis_date;
    }
    if (this.payload.patient_indicator.co_morbidites === "default") {
      delete this.payload.patient_indicator.co_morbidites;
    }
    if (this.payload.patient_indicator.non_medication_days_7 === "") {
      delete this.payload.patient_indicator.non_medication_days_7;
    }
    if (this.payload.patient_indicator.non_medication_days_30 === "") {
      delete this.payload.patient_indicator.non_medication_days_30;
    }
    if (this.payload.patient_indicator.attended_last_appointment === "") {
      delete this.payload.patient_indicator.attended_last_appointment;
    }
    if (this.payload.patient_indicator.missed_appointments_3_months === "") {
      delete this.payload.patient_indicator.missed_appointments_3_months;
    }
    if (this.payload.patient_indicator.missed_appointments_6_months === "") {
      delete this.payload.patient_indicator.missed_appointments_6_months;
    }
    if (this.payload.patient_indicator.comments === "") {
      delete this.payload.patient_indicator.comments;
    }
    if (!this.payload.patient_appearance.patient_appearance) {
      delete this.payload.patient_appearance.patient_appearance;
    }
    if (!this.payload.patient_appearance.pet_type) {
      delete this.payload.patient_appearance.pet_type;
    }
    if (!this.payload.patient_appearance.animal_type) {
      delete this.payload.patient_appearance.animal_type;
    }
    if (this.payload.patient_indicator.attended_last_appointment === "1") {
      this.payload.patient_indicator.attended_last_appointment = 1;
    } else if (this.payload.patient_indicator.attended_last_appointment === "0") {
      this.payload.patient_indicator.attended_last_appointment = 0;
    } else {
      delete this.payload.patient_indicator.attended_last_appointment;
    }
    this.uploadData()
      .then(result => {
        request
          .post('http://staging.visooleyes.liquidpreview.net/api/v1/patient')
          .set('Accept', 'application/json')
          .set('apikey','f78c469c-f982-4889-a83a-0eb29a530894')
          .send(this.payload)
          .end((err, data) => {
            if (err) {
              console.log('error: ', err);
              return;
            } else {
              this.toast.show("Upload complete ...", '2000', 'center').subscribe(
                toast => console.log(toast)
              );
              this.navCtrl.push(PatientRecord);
            }
          });
      })
      .catch(err => {
        if (localStorage.getItem('unsyncData') === null) {
          localStorage.setItem('unsyncData',JSON.stringify([this.payload]));
        } else {
          let parsed = JSON.parse(localStorage.getItem('unsyncData'));
          parsed.push(this.payload);
          localStorage.setItem('unsyncData',JSON.stringify(parsed));
        }

        // redirect
        this.navCtrl.push(PatientRecord);
      });

  }
}
