import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Clothes } from './clothes';

@Component({
  templateUrl: 'chooseBoyGirl.html'
})

export class ChooseBoyGirl {

  clothesPage:any = Clothes;

  constructor(public navCtrl: NavController) {

  }

}

