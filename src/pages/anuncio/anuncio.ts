import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { EsportePage } from '../CatEsporte/esporte';
import { EletronicoPage } from '../CatEletronico/eletronico';
import { EmpregoPage } from '../CatEmprego/emprego';
import { ImovelPage } from '../CatImoveis/imovel';
import { MusicaPage } from '../CatMusica/musica';
import { AnimalPage } from '../CatAnimal/animal';
import { VeiculoPage } from '../CatVeiculo/veiculo';

@Component({
  selector: 'page-anuncio',
  templateUrl: 'anuncio.html'
})
export class AnuncioPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.selectedItem = navParams.get('item');

    this.items = [
      {title: 'Esportes', icon: 'md-bicycle'},
      {title: 'Veículos', icon: 'md-car'},
      {title: 'Imóveis', icon: 'ios-home'},
      {title: 'Animais', icon: 'md-paw'},
      {title: 'Música', icon: 'ios-musical-notes'},
      {title: 'Eletrônicos', icon: 'md-game-controller-b'},
      {title: 'Empregos', icon: 'ios-people'}
	  ];
  }

  itemTapped(event, item) {
    this.navCtrl.push(AnuncioPage, {
      item: item
    });
  }
}
