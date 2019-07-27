import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';
import { DatePicker } from '@ionic-native/date-picker';
import moment from 'moment';
import { PatientReview } from './patientReview';

@Component({
  templateUrl: 'patientIndicators.html'
})

export class PatientIndicators {
  isFieldFocussed = false;
  isMedicationsVisible = false;
  isClinicVisitsVisible = false;
  non_medication_days_7Error = false;
  non_medication_days_30Error = false;
  attended_last_appointmentError = false;
  missed_appointments_3_monthsError = false;
  missed_appointments_6_monthsError = false;
  cd4countError = false;
  viralLoadError = false;
  cd4count = "";
  cd4Date = "Select date";
  cd4DateFormatted = "";
  viralLoad = "";
  viralLoadDate = "Select date";
  viralLoadDateFormatted = "";
  tbDiagnosisDate = "Select date";
  tbDiagnosisDateFormatted = "Select date";
  tbDiagnosis = "No";
  modeTransmission = "default";
  coMorbidities = "default";
  arv = "default";
  non_medication_days_7 = "";
  non_medication_days_30 = "";
  attended_last_appointment = "";
  missed_appointments_3_months = "";
  missed_appointments_6_months = "";
  comments = "";
  numberRegExp = /^[0-9]+$/;

  constructor(private datePicker: DatePicker, private keyboard: Keyboard, public navCtrl: NavController) {
    this.keyboard.onKeyboardHide().subscribe(() => {
      this.isFieldFocussed = false;
    });
  }

  onFocus(event: any) {
    this.isFieldFocussed = true;
  }

  selectCDCount() {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
    }).then(
      date => {
        const momentDate = moment(date);
        this.cd4Date = momentDate.format('D/M/YYYY');
        this.cd4DateFormatted = momentDate.format('Y-M-D');
      },
      err => console.log('Error occurred while getting date: ', err)
    );
  }

  selectViralLoad() {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
    }).then(
      date => {
        const momentDate = moment(date);
        this.viralLoadDate = momentDate.format('D/M/YYYY');
        this.viralLoadDateFormatted = momentDate.format('Y-M-D');
      },
      err => console.log('Error occurred while getting date: ', err)
    );
  }

  selectTbDiagnosis() {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
    }).then(
      date => {
        const momentDate = moment(date);
        this.tbDiagnosisDate = momentDate.format('D/M/YYYY');
        this.tbDiagnosisDateFormatted = momentDate.format('Y-M-D');
      },
      err => console.log('Error occurred while getting date: ', err)
    );
  }

  setTb(data) {
    this.tbDiagnosis = data;
  }

  setModeTransmission(event) {
    this.modeTransmission = event.target.value;
  }

  setArv(event) {
    this.arv = event.target.value;
  }

  setCoMorbidities(event) {
    this.coMorbidities = event.target.value;
  }

  toggleMedications() {
    if (this.isMedicationsVisible) {
      this.isMedicationsVisible = false;
    } else {
      this.isMedicationsVisible = true;
    }
  }

  toggleClinic() {
    if (this.isClinicVisitsVisible) {
      this.isClinicVisitsVisible = false;
    } else {
      this.isClinicVisitsVisible = true;
    }
  }

  validateCd4Count() {
    if (this.cd4count !== "" && this.numberRegExp.test(this.cd4count) === false) {
      this.cd4countError = true;
      document.getElementById("cd4count").scrollIntoView();
      return false;
    } else {
      this.cd4countError = false;
      return true;
    }
  }
  validateViralLoad() {
    if (this.viralLoad !== "" && this.numberRegExp.test(this.viralLoad) === false) {
      this.viralLoadError = true;
      document.getElementById("viralLoad").scrollIntoView();
      return false;
    } else {
      this.viralLoadError = false;
      return true;
    }
  }
  validateNon_medication_days_7() {
    if (this.non_medication_days_7 !== "" && this.numberRegExp.test(this.non_medication_days_7) === false) {
      this.non_medication_days_7Error = true;
      document.getElementById("non_medication_days_7").scrollIntoView();
      return false;
    } else {
      this.non_medication_days_7Error = false;
      return true;
    }
  }
  validateNon_medication_days_30() {
    if (this.non_medication_days_30 !== "" && this.numberRegExp.test(this.non_medication_days_30) === false) {
      this.non_medication_days_30Error = true;
      document.getElementById("non_medication_days_30").scrollIntoView();
      return false;
    } else {
      this.non_medication_days_30Error = false;
      return true;
    }
  }
  validateAttended_last_appointment() {
    if (this.attended_last_appointment !== "" && this.numberRegExp.test(this.attended_last_appointment) === false) {
      this.attended_last_appointmentError = true;
      document.getElementById("attended_last_appointment").scrollIntoView();
      return false;
    } else {
      this.attended_last_appointmentError = false;
      return true;
    }
  }
  validateMissed_appointments_3_months() {
    if (this.missed_appointments_3_months !== "" && this.numberRegExp.test(this.missed_appointments_3_months) === false) {
      this.missed_appointments_3_monthsError = true;
      document.getElementById("missed_appointments_3_months").scrollIntoView();
      return false;
    } else {
      this.missed_appointments_3_monthsError = false;
      return true;
    }
  }
  validateMissed_appointments_6_months() {
    if (this.missed_appointments_6_months !== "" && this.numberRegExp.test(this.missed_appointments_6_months) === false) {
      this.missed_appointments_6_monthsError = true;
      document.getElementById("missed_appointments_6_months").scrollIntoView();
      return false;
    } else {
      this.missed_appointments_6_monthsError = false;
      return true;
    }
  }

  save() {
    if (this.validateCd4Count() === true && this.validateViralLoad() === true && this.validateNon_medication_days_7() === true && this.validateNon_medication_days_30() === true && this.validateAttended_last_appointment() === true && this.validateMissed_appointments_3_months() === true && this.validateMissed_appointments_6_months() === true) {
      let apiPayLoad = {
        "patient" : {
          "patient_code" : localStorage.getItem('ptsCode'),
          "study_group" : localStorage.getItem('studyGroup')
        },
        "patient_appearance" : {
          "gender" : localStorage.getItem('gender'),
          "hair_type" : localStorage.getItem('hair'),
          "top_type" : localStorage.getItem('top'),
          "bottom_type" : localStorage.getItem('pants'),
          "shoe_type" : localStorage.getItem('shoes'),
          "accessory_type" : localStorage.getItem('accessory'),
          "home_type" : localStorage.getItem('house'),
          "family_type" : localStorage.getItem('family'),
          "pet_type" : JSON.parse(localStorage.getItem('pets')),
          "animal_type" : JSON.parse(localStorage.getItem('animals')),
        },
        "patient_indicator" : {
          "cd4_count_1" : this.cd4count,
          "cd4_date_1" : this.cd4DateFormatted,
          "cd4_count_2" : this.viralLoad,
          "cd4_date_2" : this.viralLoadDateFormatted,
          "mode_of_transmission" : this.modeTransmission,
          "arv_regime" : this.arv,
          "tb_diagnosis" : this.tbDiagnosis === "Yes" ? true : false,
          "tb_diagnosis_date" : this.tbDiagnosisDateFormatted,
          "co_morbidites" : this.coMorbidities,
          "non_medication_days_7" : this.non_medication_days_7,
          "non_medication_days_30" : this.non_medication_days_30,
          "attended_last_appointment" : this.attended_last_appointment,
          "missed_appointments_3_months" : this.missed_appointments_3_months,
          "missed_appointments_6_months" : this.missed_appointments_6_months,
          "comments" : this.comments
        },
        "patient_log" : {
          "mood_type" : localStorage.getItem('emotion'),
          "symptom_type" : JSON.parse(localStorage.getItem('symptoms')) === null ? [] : JSON.parse(localStorage.getItem('symptoms'))
        },
        "pain_indicator" : [localStorage.getItem('pain1'), localStorage.getItem('pain2'), localStorage.getItem('pain3')]
      };
      this.navCtrl.push(PatientReview, {apiPayLoad, cd4Date: this.cd4Date, viralLoadDate: this.viralLoadDate, tbDiagnosisDate: this.tbDiagnosisDate});
    }

  }
}
