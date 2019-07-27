import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Emotions } from './emotions';
import homeData from './homeData';

@Component({
  templateUrl: 'buildHome.html'
})

export class BuildHome {
  gender;
  activeTab = "House";
  selectedHouse = false;
  selectedFamily = false;
  selectedFarmAnimals = false;
  errorHouse = false;
  errorFamily = false;
  homeData = homeData();
  selected = {
    houses: {},
    family: {},
    pets: {},
    farmAnimals: {},
    tops: {src: ''},
    hair: {src: ''}
  };
  pets = [];
  farmAnimals = [];

  constructor(params: NavParams, public navCtrl: NavController) {
    this.gender = params.data.gender;
    this.selected = params.data.selected;
    localStorage.removeItem("pets");
    localStorage.removeItem("animals");
  }
  ngOnInit() {
    this.selected.houses = this.homeData.houses[0];
    this.selected.family = this.homeData.family[0];
    this.selected.farmAnimals = this.homeData.farmAnimals[0];
  }
  onSelectHouse(item): void {
    this.selected.houses = item;
    this.selectedHouse = true;
    localStorage.setItem('houseAlias', item.alias);
    localStorage.setItem('house', item.src);
  }
  onSelectFamily(item): void {
    this.selected.family = item;
    this.selectedFamily = true;
    localStorage.setItem('familyAlias', item.alias);
    localStorage.setItem('family', item.src);
  }
  onTogglePets(item): void {
    const getIndex = this.pets.indexOf(item);
    if (getIndex !== -1) {
      this.pets.splice(getIndex,1);
      if (this.pets.length === 0) {
        localStorage.removeItem('pets');
      } else {
        localStorage.setItem('pets',JSON.stringify(this.pets));
      }
    } else {
      this.pets.push(item);
      localStorage.setItem('pets',JSON.stringify(this.pets));
    }
  }
  onToggleFarmAnimals(item): void {
    const getIndex = this.farmAnimals.indexOf(item);
    if (getIndex !== -1) {
      this.farmAnimals.splice(getIndex,1);
      if (this.farmAnimals.length === 0) {
        localStorage.removeItem('animals');
      } else {
        localStorage.setItem('animals',JSON.stringify(this.farmAnimals));
      }
    } else {
      this.farmAnimals.push(item);
      localStorage.setItem('animals',JSON.stringify(this.farmAnimals));
    }
  }
  onSelectTab(item): void {
    this.activeTab = item;
  }
  validateHome(): any {
    if (this.selectedHouse === false) {
      this.errorHouse = true;
      return false;
    } else {
      this.errorHouse = false;
      return true;
    }
  }
  validateFamily(): any {
    if (this.selectedFamily === false) {
      this.errorFamily = true;
      return false;
    } else {
      this.errorFamily = false;
      return true;
    }
  }
  goNext(): void {
    if (this.validateHome() === true && this.validateFamily() === true) {
      this.navCtrl.push(Emotions, {
        gender: this.gender,
        top: this.selected.tops.src,
        hair: this.selected.hair.src
      });
    }
  }
}

