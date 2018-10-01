import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CameraPage } from '../camera/camera';

@Component({
  selector: 'page-produto',
  templateUrl: 'produto.html'
})
export class ProdutoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  itemTapped(event, item) {
    this.navCtrl.push(CameraPage);
  }
}
