import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import girlData from "./girlDataClothes";
import boyData from "./boyDataClothes";
import {BuildHome} from "./buildHome";

@Component({
  templateUrl: 'clothes.html'
})

export class Clothes {
  gender;
  girlData = girlData();
  boyData = boyData();
  activeTab = "Hair";

  selected: any = {
    hair: {src: ''},
    tops: {src: ''},
    pants: {src: ''},
    shoes: {src: ''},
    accessories: {src: '',position: [], width: ''}
  };

  constructor(params: NavParams, public navCtrl: NavController) {
    this.gender = params.data.type;
  }

  ngOnInit() {
    if (this.gender === "girl") {
      this.selected.hair = this.girlData.hair[0];
      this.selected.tops = this.girlData.tops[0];
      this.selected.pants = this.girlData.pants[0];
      this.selected.shoes = this.girlData.shoes[0];
      this.selected.accessories = this.girlData.accessories[0];
    } else {
      this.selected.hair = this.boyData.hair[0];
      this.selected.tops = this.boyData.tops[0];
      this.selected.pants = this.boyData.pants[0];
      this.selected.shoes = this.boyData.shoes[0];
      this.selected.accessories = this.boyData.accessories[0];
    }
  }

  onSelectHair(item): void {
    this.selected.hair = item;
  }
  onSelectTops(item): void {
    this.selected.tops = item;
  }
  onSelectPants(item): void {
    this.selected.pants = item;
  }
  onSelectShoes(item): void {
    this.selected.shoes = item;
  }
  onSelectAccessory(item): void {
    this.selected.accessories = item;
  }
  onSelectTab(item): void {
    this.activeTab = item;
  }
  goBuildHome(): void {
    localStorage.setItem('gender', this.gender === 'girl' ? "female" : "male");
    localStorage.setItem('hair', this.selected.hair.src);
    localStorage.setItem('top', this.selected.tops.src);
    localStorage.setItem('pants', this.selected.pants.src);
    localStorage.setItem('shoes', this.selected.shoes.src);
    localStorage.setItem('accessory', this.selected.accessories.src);
    this.navCtrl.push(BuildHome, {
      gender: this.gender,
      selected: this.selected
    });
  }
}

