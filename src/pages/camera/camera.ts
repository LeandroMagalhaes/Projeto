import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html'
})
export class CameraPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
    }
	
  itemTapped(event, item) {
	this.navCtrl.push(CameraPage, {
		
     
    });
  }
}

