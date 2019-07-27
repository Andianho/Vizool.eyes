import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DragnDrop} from './dragndrop';
import girlData from "./girlDataClothes";
import boyData from "./boyDataClothes";
import symptomsData from "./symptomsData";

@Component({
  templateUrl: 'symptoms.html'
})

export class Symptoms {
  gender;
  hair;
  top;
  pants;
  shoes;
  accessory;
  girlData = girlData();
  boyData = boyData();
  symptomsData = symptomsData();
  symptoms = [];
  selected = {
    hair: {src: ''},
    tops: {src: ''},
    pants: {src: ''},
    shoes: {src: ''},
    accessories: {src: ''}
  };

  constructor(public navCtrl: NavController) {
    this.gender = localStorage.getItem('gender') === "female" ? "girl" : "boy";
    this.hair = localStorage.getItem('hair');
    this.top = localStorage.getItem('top');
    this.pants = localStorage.getItem('pants');
    this.shoes = localStorage.getItem('shoes');
    this.accessory = localStorage.getItem('accessory');
  }

  ngOnInit() {
    if (this.gender === "girl") {
      this.selected.hair = this.girlData.hair.find(el => el.src === this.hair);
      this.selected.tops = this.girlData.tops.find(el => el.src === this.top);
      this.selected.pants = this.girlData.pants.find(el => el.src === this.pants);
      this.selected.shoes = this.girlData.shoes.find(el => el.src === this.shoes);
      this.selected.accessories = this.girlData.accessories.find(el => el.src === this.accessory);
    } else {
      this.selected.hair = this.boyData.hair.find(el => el.src === this.hair);
      this.selected.tops = this.boyData.tops.find(el => el.src === this.top);
      this.selected.pants = this.boyData.pants.find(el => el.src === this.pants);
      this.selected.shoes = this.boyData.shoes.find(el => el.src === this.shoes);
      this.selected.accessories = this.boyData.accessories.find(el => el.src === this.accessory);
    }
  }

  onSelectSymptom(item): void {
    const getIndex = this.symptoms.indexOf(item);
    if (getIndex !== -1) {
      this.symptoms.splice(getIndex,1);
      localStorage.setItem('symptoms', JSON.stringify(this.symptoms));
    } else {
      this.symptoms.push(item);
      localStorage.setItem('symptoms', JSON.stringify(this.symptoms));
    }
  }

  onNext() {
    this.navCtrl.push(DragnDrop);
  }
}

