import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CameraPage } from '../camera/camera';
import { PesquisaPage } from './../pesquisar/pesquisar';

@Component({
  selector: 'page-produto',
  templateUrl: 'produto.html'
})
export class ProdutoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  itemTapped(event) {
    this.navCtrl.push(CameraPage);
  }

  itemSelect(event){
    this.navCtrl.push(PesquisaPage);
  }
}
