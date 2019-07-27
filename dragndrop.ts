import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Thumb} from './thumb';
import girlData from "./girlDataClothes";
import boyData from "./boyDataClothes";
import symptomsData from "./symptomsData";

@Component({
  selector: 'page-drag',
  templateUrl: 'dragndrop.html'
})

export class DragnDrop {
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


  widthOne = 210;
  widthTwo = 210;
  widthThree = 210;

  heightOne = 210;
  heightTwo = 210;
  heightThree = 210;

  imgWidthOne = 145;
  imgWidthTwo = 145;
  imgWidthThree = 145;

  imgHeightOne = 101;
  imgHeightTwo = 101;
  imgHeightThree = 101;

  imgMarginOne = 51;
  imgMarginTwo = 51;
  imgMarginThree = 51;

  startAnimationOne = false;
  startAnimationTwo = false;
  startAnimationThree = false;


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

    this.symptoms = JSON.parse(localStorage.getItem('symptoms'));
    localStorage.removeItem('pain1');
    localStorage.removeItem('pain2');
    localStorage.removeItem('pain3');
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

  onStartOne() {
    setTimeout(() => {
      this.widthOne = 54;
      this.heightOne = 54;
      this.imgWidthOne = 34;
      this.imgHeightOne = 23;
      this.imgMarginOne = 12;
      this.startAnimationOne = true;
    }, 500)

  }

  idBlockOne(x, y) {
    x = Math.round(parseInt(x));
    y = Math.round(parseInt(y));
    console.log(x, y);
    // col 1
    if ((x >= -530 && x <= -428) && (y >= 560 && y <= 630)) {
      return 'n1';
    } else if ((x >= -530 && x <= -428) && (y >= 510 && y <= 560)) {
      return 'm1';
    } else if ((x >= -530 && x <= -428) && (y >= 470 && y <= 510)) {
      return 'l1';
    } else if ((x >= -530 && x <= -428) && (y >= 430 && y <= 470)) {
      return 'k1';
    } else if ((x >= -530 && x <= -428) && (y >= 380 && y <= 430)) {
      return 'j1';
    } else if ((x >= -530 && x <= -428) && (y >= 340 && y <= 420)) {
      return 'i1';
    } else if ((x >= -530 && x <= -428) && (y >= 300 && y <= 380)) {
      return 'h1';
    } else if ((x >= -530 && x <= -428) && (y >= 250 && y <= 280)) {
      return 'g1';
    } else if ((x >= -530 && x <= -428) && (y >= 210 && y <= 290)) {
      return 'f1';
    } else if ((x >= -530 && x <= -428) && (y >= 160 && y <= 250)) {
      return 'e1';
    } else if ((x >= -530 && x <= -428) && (y >= 120 && y <= 210)) {
      return 'd1';
    } else if ((x >= -530 && x <= -428) && ( y >= 79 && y <= 166)) {
      return 'c1';
    } else if ((x >= -530 && x <= -428) && (y >= 36 && y <= 122)) {
      return 'b1';
    } else if ((x >= -530 && x <= -428) && (y >= -7 && y <= 77)) {
      return 'a1';
    }

    // col 2
    if ((x >= -428 && x <= -365) && (y >= 560 && y <= 630)) {
      return 'n2';
    } else if ((x >= -428 && x <= -365) && (y >= 510 && y <= 560)) {
      return 'm2';
    } else if ((x >= -428 && x <= -365) && (y >= 470 && y <= 510)) {
      return 'l2';
    } else if ((x >= -428 && x <= -365) && (y >= 430 && y <= 470)) {
      return 'k2';
    } else if ((x >= -428 && x <= -365) && (y >= 380 && y <= 430)) {
      return 'j2';
    } else if ((x >= -428 && x <= -365) && (y >= 340 && y <= 420)) {
      return 'i2';
    } else if ((x >= -428 && x <= -365) && (y >= 300 && y <= 380)) {
      return 'h2';
    } else if ((x >= -428 && x <= -365) && (y >= 250 && y <= 280)) {
      return 'g2';
    } else if ((x >= -428 && x <= -365) && (y >= 210 && y <= 290)) {
      return 'f2';
    } else if ((x >= -428 && x <= -365) && (y >= 160 && y <= 250)) {
      return 'e2';
    } else if ((x >= -428 && x <= -365) && (y >= 120 && y <= 210)) {
      return 'd2';
    } else if ((x >= -428 && x <= -365) && ( y >= 79 && y <= 166)) {
      return 'c2';
    } else if ((x >= -428 && x <= -365) && (y >= 36 && y <= 122)) {
      return 'b2';
    } else if ((x >= -428 && x <= -365) && (y >= -7 && y <= 77)) {
      return 'a2';
    }

    // col 3
    if ((x >= -365 && x <= -307) && (y >= 560 && y <= 630)) {
      return 'n3';
    } else if ((x >= -365 && x <= -307) && (y >= 510 && y <= 560)) {
      return 'm3';
    } else if ((x >= -365 && x <= -307) && (y >= 470 && y <= 510)) {
      return 'l3';
    } else if ((x >= -365 && x <= -307) && (y >= 430 && y <= 470)) {
      return 'k3';
    } else if ((x >= -365 && x <= -307) && (y >= 380 && y <= 430)) {
      return 'j3';
    } else if ((x >= -365 && x <= -307) && (y >= 340 && y <= 420)) {
      return 'i3';
    } else if ((x >= -365 && x <= -307) && (y >= 300 && y <= 380)) {
      return 'h3';
    } else if ((x >= -365 && x <= -307) && (y >= 250 && y <= 280)) {
      return 'g3';
    } else if ((x >= -365 && x <= -307) && (y >= 210 && y <= 290)) {
      return 'f3';
    } else if ((x >= -365 && x <= -307) && (y >= 160 && y <= 250)) {
      return 'e3';
    } else if ((x >= -365 && x <= -307) && (y >= 120 && y <= 210)) {
      return 'd3';
    } else if ((x >= -365 && x <= -307) && ( y >= 79 && y <= 166)) {
      return 'c3';
    } else if ((x >= -365 && x <= -307) && (y >= 36 && y <= 122)) {
      return 'b3';
    } else if ((x >= -365 && x <= -307) && (y >= -7 && y <= 77)) {
      return 'a3';
    }

  }

  idBlockTwo(x, y) {
    x = Math.round(parseInt(x));
    y = Math.round(parseInt(y));
    console.log(x, y);
    // col 1
    if ((x >= -530 && x <= -428) && (y >= 319 && y <= 397)) {
      return 'n1';
    } else if ((x >= -530 && x <= -428) && (y >= 273 && y <= 363)) {
      return 'm1';
    } else if ((x >= -530 && x <= -428) && (y >= 229 && y <= 320)) {
      return 'l1';
    } else if ((x >= -530 && x <= -428) && (y >= 188 && y <= 275)) {
      return 'k1';
    } else if ((x >= -530 && x <= -428) && (y >= 145 && y <= 233)) {
      return 'j1';
    } else if ((x >= -530 && x <= -428) && (y >= 100 && y <= 189)) {
      return 'i1';
    } else if ((x >= -530 && x <= -428) && (y >= 58 && y <= 140)) {
      return 'h1';
    } else if ((x >= -530 && x <= -428) && (y >= 13 && y <= 97)) {
      return 'g1';
    } else if ((x >= -530 && x <= -428) && (y >= -29 && y <= 56)) {
      return 'f1';
    } else if ((x >= -530 && x <= -428) && (y >= -74 && y <= 11)) {
      return 'e1';
    } else if ((x >= -530 && x <= -428) && (y >= -118 && y <= -33)) {
      return 'd1';
    } else if ((x >= -530 && x <= -428) && ( y >= -165 && y <= -78)) {
      return 'c1';
    } else if ((x >= -530 && x <= -428) && (y >= -207 && y <= -119)) {
      return 'b1';
    } else if ((x >= -530 && x <= -428) && (y >= -253 && y <= -161)) {
      return 'a1';
    }

    // col 2
    if ((x >= -428 && x <= -365) && (y >= 319 && y <= 397)) {
      return 'n2';
    } else if ((x >= -428 && x <= -365) && (y >= 273 && y <= 363)) {
      return 'm2';
    } else if ((x >= -428 && x <= -365) && (y >= 229 && y <= 320)) {
      return 'l2';
    } else if ((x >= -428 && x <= -365) && (y >= 188 && y <= 275)) {
      return 'k2';
    } else if ((x >= -428 && x <= -365) && (y >= 145 && y <= 233)) {
      return 'j2';
    } else if ((x >= -428 && x <= -365) && (y >= 100 && y <= 189)) {
      return 'i2';
    } else if ((x >= -428 && x <= -365) && (y >= 58 && y <= 140)) {
      return 'h2';
    } else if ((x >= -428 && x <= -365) && (y >= 13 && y <= 97)) {
      return 'g2';
    } else if ((x >= -428 && x <= -365) && (y >= -29 && y <= 56)) {
      return 'f2';
    } else if ((x >= -428 && x <= -365) && (y >= -74 && y <= 11)) {
      return 'e2';
    } else if ((x >= -428 && x <= -365) && (y >= -118 && y <= -33)) {
      return 'd2';
    } else if ((x >= -428 && x <= -365) && ( y >= -165 && y <= -78)) {
      return 'c2';
    } else if ((x >= -428 && x <= -365) && (y >= -207 && y <= -119)) {
      return 'b2';
    } else if ((x >= -428 && x <= -365) && (y >= -253 && y <= -161)) {
      return 'a2';
    }

    // col 3
    if ((x >= -365 && x <= -307) && (y >= 319 && y <= 397)) {
      return 'n3';
    } else if ((x >= -365 && x <= -307) && (y >= 273 && y <= 363)) {
      return 'm3';
    } else if ((x >= -365 && x <= -307) && (y >= 229 && y <= 320)) {
      return 'l3';
    } else if ((x >= -365 && x <= -307) && (y >= 188 && y <= 275)) {
      return 'k3';
    } else if ((x >= -365 && x <= -307) && (y >= 145 && y <= 233)) {
      return 'j3';
    } else if ((x >= -365 && x <= -307) && (y >= 100 && y <= 189)) {
      return 'i3';
    } else if ((x >= -365 && x <= -307) && (y >= 58 && y <= 140)) {
      return 'h3';
    } else if ((x >= -365 && x <= -307) && (y >= 13 && y <= 97)) {
      return 'g3';
    } else if ((x >= -365 && x <= -307) && (y >= -29 && y <= 56)) {
      return 'f3';
    } else if ((x >= -365 && x <= -307) && (y >= -74 && y <= 11)) {
      return 'e3';
    } else if ((x >= -365 && x <= -307) && (y >= -118 && y <= -33)) {
      return 'd3';
    } else if ((x >= -365 && x <= -307) && ( y >= -165 && y <= -78)) {
      return 'c3';
    } else if ((x >= -365 && x <= -307) && (y >= -207 && y <= -119)) {
      return 'b3';
    } else if ((x >= -365 && x <= -307) && (y >= -253 && y <= -161)) {
      return 'a3';
    }

  }

  idBlockThree(x, y) {
    x = Math.round(parseInt(x));
    y = Math.round(parseInt(y));
    console.log(x, y);
    // col 1
    if ((x >= -530 && x <= -428) && (y >= 75 && y <= 155)) {
      return 'n1';
    } else if ((x >= -530 && x <= -428) && (y >= 30 && y <= 125)) {
      return 'm1';
    } else if ((x >= -530 && x <= -428) && (y >= -9 && y <= 79)) {
      return 'l1';
    } else if ((x >= -530 && x <= -428) && (y >= -55 && y <= 36)) {
      return 'k1';
    } else if ((x >= -530 && x <= -428) && (y >= -100 && y <= -8)) {
      return 'j1';
    } else if ((x >= -530 && x <= -428) && (y >= -145 && y <= -53)) {
      return 'i1';
    } else if ((x >= -530 && x <= -428) && (y >= -188 && y <= -97)) {
      return 'h1';
    } else if ((x >= -530 && x <= -428) && (y >= -232 && y <= -139)) {
      return 'g1';
    } else if ((x >= -530 && x <= -428) && (y >= -277 && y <= -184)) {
      return 'f1';
    } else if ((x >= -530 && x <= -428) && (y >= -321 && y <= -227)) {
      return 'e1';
    } else if ((x >= -530 && x <= -428) && (y >= -367 && y <= -272)) {
      return 'd1';
    } else if ((x >= -530 && x <= -428) && ( y >= -409 && y <= -319)) {
      return 'c1';
    } else if ((x >= -530 && x <= -428) && (y >= -452 && y <= -359)) {
      return 'b1';
    } else if ((x >= -530 && x <= -428) && (y >= -496 && y <= -403)) {
      return 'a1';
    }

    // col 2
    if ((x >= -428 && x <= -365) && (y >= 75 && y <= 155)) {
      return 'n2';
    } else if ((x >= -428 && x <= -365) && (y >= 30 && y <= 125)) {
      return 'm2';
    } else if ((x >= -428 && x <= -365) && (y >= -9 && y <= 79)) {
      return 'l2';
    } else if ((x >= -428 && x <= -365) && (y >= -55 && y <= 36)) {
      return 'k2';
    } else if ((x >= -428 && x <= -365) && (y >= -100 && y <= -8)) {
      return 'j2';
    } else if ((x >= -428 && x <= -365) && (y >= -145 && y <= -53)) {
      return 'i2';
    } else if ((x >= -428 && x <= -365) && (y >= -188 && y <= -97)) {
      return 'h2';
    } else if ((x >= -428 && x <= -365) && (y >= -232 && y <= -139)) {
      return 'g2';
    } else if ((x >= -428 && x <= -365) && (y >= -277 && y <= -184)) {
      return 'f2';
    } else if ((x >= -428 && x <= -365) && (y >= -321 && y <= -227)) {
      return 'e2';
    } else if ((x >= -428 && x <= -365) && (y >= -367 && y <= -272)) {
      return 'd2';
    } else if ((x >= -428 && x <= -365) && ( y >= -409 && y <= -319)) {
      return 'c2';
    } else if ((x >= -428 && x <= -365) && (y >= -452 && y <= -359)) {
      return 'b2';
    } else if ((x >= -428 && x <= -365) && (y >= -496 && y <= -403)) {
      return 'a2';
    }

    // col 3
    if ((x >= -365 && x <= -307) && (y >= 75 && y <= 155)) {
      return 'n3';
    } else if ((x >= -365 && x <= -307) && (y >= 30 && y <= 125)) {
      return 'm3';
    } else if ((x >= -365 && x <= -307) && (y >= -9 && y <= 79)) {
      return 'l3';
    } else if ((x >= -365 && x <= -307) && (y >= -55 && y <= 36)) {
      return 'k3';
    } else if ((x >= -365 && x <= -307) && (y >= -100 && y <= -8)) {
      return 'j3';
    } else if ((x >= -365 && x <= -307) && (y >= -145 && y <= -53)) {
      return 'i3';
    } else if ((x >= -365 && x <= -307) && (y >= -188 && y <= -97)) {
      return 'h3';
    } else if ((x >= -365 && x <= -307) && (y >= -232 && y <= -139)) {
      return 'g3';
    } else if ((x >= -365 && x <= -307) && (y >= -277 && y <= -184)) {
      return 'f3';
    } else if ((x >= -365 && x <= -307) && (y >= -321 && y <= -227)) {
      return 'e3';
    } else if ((x >= -365 && x <= -307) && (y >= -367 && y <= -272)) {
      return 'd3';
    } else if ((x >= -365 && x <= -307) && ( y >= -409 && y <= -319)) {
      return 'c3';
    } else if ((x >= -365 && x <= -307) && (y >= -452 && y <= -359)) {
      return 'b3';
    } else if ((x >= -365 && x <= -307) && (y >= -496 && y <= -403)) {
      return 'a3';
    }

  }

  onStopOne(event) {
    event = event.style.transform.substr(10).split(',');
    const x = event[0].substr(0,4);
    const y = event[1].substr(0,4);
    if (this.idBlockOne(x, y) !== undefined) {
      localStorage.setItem('pain1', this.idBlockOne(x, y));
    } else {
      localStorage.removeItem('pain1');
    }
  }

  onStartTwo() {
    setTimeout(() => {
      this.widthTwo = 54;
      this.heightTwo = 54;
      this.imgWidthTwo = 34;
      this.imgHeightTwo = 23;
      this.imgMarginTwo = 12;
      this.startAnimationTwo = true;
    }, 500)

  }

  onStopTwo(event) {
    event = event.style.transform.substr(10).split(',');
    const x = event[0].substr(0,4);
    const y = event[1].substr(0,5);
    if (this.idBlockTwo(x, y) !== undefined) {
      localStorage.setItem('pain2', this.idBlockTwo(x, y));
    } else {
      localStorage.removeItem('pain2');
    }
  }

  onStartThree() {
    setTimeout(() => {
      this.widthThree = 54;
      this.heightThree = 54;
      this.imgWidthThree = 34;
      this.imgHeightThree = 23;
      this.imgMarginThree = 12;
      this.startAnimationThree = true;
    }, 500)

  }

  onStopThree(event) {
    event = event.style.transform.substr(10).split(',');
    const x = event[0].substr(0,4);
    const y = event[1].substr(0,5);
    if (this.idBlockThree(x, y) !== undefined) {
      localStorage.setItem('pain3', this.idBlockThree(x, y));
    } else {
      localStorage.removeItem('pain3');
    }
  }

  onNext() {
    this.navCtrl.push(Thumb);
  }

}
