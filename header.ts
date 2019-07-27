import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HomePage} from './home';
import request from 'superagent';
import { Network } from '@ionic-native/network';
import { Toast } from '@ionic-native/toast';

@Component({
  selector: "header",
  templateUrl: 'header.html'
})

export class Header {

  isUploadComplete = false;

  constructor(public navCtrl: NavController, private network: Network, private toast: Toast) {

  }

  onSignOut() {
    this.navCtrl.push(HomePage);
  }

  uploadData(payload) {
    request
      .post('http://staging.visooleyes.liquidpreview.net/api/v1/patient')
      .set('Accept', 'application/json')
      .set('apikey','f78c469c-f982-4889-a83a-0eb29a530894')
      .send(payload)
      .end((err, data) => {
        if (err) {
          console.log('error: ', err);
          return;
        } else {
          console.log('all data uploaded');
        }
      });
  }

  onUpload() {
    this.isUploadComplete = false;
    if (this.network.type === "none") {
      this.toast.show("Please check your connection ...", '5000', 'center').subscribe(
        toast => console.log(toast)
      );
    } else {
      if (localStorage.getItem('unsyncData') !== null) {
        this.toast.show("Uploading data ...", '1000', 'center').subscribe(
          toast => console.log(toast)
        );
        let parsed = JSON.parse(localStorage.getItem('unsyncData'));
        parsed.forEach((data, index) => {
          this.uploadData(data);
          if (index === parsed.length -1 ) {
            this.isUploadComplete = true;
            this.toast.show("Upload complete ...", '2000', 'center').subscribe(
              toast => console.log(toast)
            );
            localStorage.removeItem('unsyncData');
          }
        });
      } else {
        this.toast.show("No data to upload ...", '5000', 'center').subscribe(
          toast => console.log(toast)
        );
      }
    }


  }
}
