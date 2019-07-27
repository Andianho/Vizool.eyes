import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import emotionDataGirl from './emotionGirlData';
import emotionDataBoy from './emotionBoyData';
import emotionFacesData from './emotionFacesData';
import { Symptoms } from './symptoms';

@Component({
  templateUrl: 'emotions.html'
})

export class Emotions {
  gender;
  emotionDataGirl = emotionDataGirl();
  emotionDataBoy = emotionDataBoy();
  emotionFacesData = emotionFacesData();
  selected = {
    hair: {position: [], width: '', src: ''},
    top: {position: [], width: 0, src: ''},
  };
  selectedEmo;

  constructor(params: NavParams, public navCtrl: NavController) {
    const hair = params.data.hair;
    const top = params.data.top;
    this.gender = params.data.gender;
    this.selectedEmo = this.emotionFacesData["Happy"];
    if (params.data.gender === 'boy') {
      this.selected.hair = this.emotionDataBoy.hair[hair];
      this.selected.top = this.emotionDataBoy.top[top];
    } else {
      this.selected.hair = this.emotionDataGirl.hair[hair];
      this.selected.top = this.emotionDataGirl.top[top];
    }
  }

  ngOnInit() {
    localStorage.setItem("emotion", "happy");
    localStorage.setItem("emotionAlias", "Happy");
  }

  onSelectEmo(item) {
    this.selectedEmo = item;
    localStorage.setItem("emotion", item.src);
    localStorage.setItem("emotionAlias", item.alias);
  }

  onNext() {
    this.navCtrl.push(Symptoms);
  }
}

