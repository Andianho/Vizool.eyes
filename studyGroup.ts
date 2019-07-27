import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChooseBoyGirl } from './chooseBoyGirl';

@Component({
  templateUrl: 'studyGroup.html'
})

export class StudyGroup {

  constructor(public navCtrl: NavController) {}

  isBtnAPress = false;
  isBtnBPress = false;
  isBtnCPress = false;

  onPressA() {
    this.isBtnAPress = true;
    setTimeout(() => {
      this.isBtnAPress = false;
      this.navCtrl.push(ChooseBoyGirl);
    }, 180);
    localStorage.setItem('studyGroup', 'A');
  }

  onPressB() {
    this.isBtnBPress = true;
    setTimeout(() => {
      this.isBtnBPress = false;
      this.navCtrl.push(ChooseBoyGirl);
    }, 180);
    localStorage.setItem('studyGroup', 'B');
  }

  onPressC() {
    this.isBtnCPress = true;
    setTimeout(() => {
      this.isBtnCPress = false;
      this.navCtrl.push(ChooseBoyGirl);
    }, 180);
    localStorage.setItem('studyGroup', 'C');
  }

}

