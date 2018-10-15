import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

// Categorias
import { EsportePage } from '../categoria/CatEsporte/esporte';
import { EletronicoPage } from '../categoria/CatEletronico/eletronico';
import { EmpregoPage } from '../categoria/CatEmprego/emprego';
import { ImovelPage } from '../categoria/CatImovel/imovel';
import { MusicaPage } from '../categoria/CatMusica/musica';
import { AnimalPage } from '../categoria/CatAnimal/animal';
import { VeiculoPage } from '../categoria/CatVeiculo/veiculo';
import { AnuncioPage } from '../anuncio/anuncio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
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

    switch(item.title){
      case "Esportes": {
        this.navCtrl.push(EsportePage);
        break;
      }

      case "Veículos": {
        this.navCtrl.push(VeiculoPage);
        break;
      }

      case "Imóveis": {
        this.navCtrl.push(ImovelPage);
        break;
      }

      case "Animais": {
        this.navCtrl.push(AnimalPage);
        break;
      }

      case "Música": {
        this.navCtrl.push(MusicaPage);
        break;
      }

      case "Eletrônicos": {
        this.navCtrl.push(EletronicoPage);
        break;
      }

      case "Empregos": {
        this.navCtrl.push(EmpregoPage);
        break;
      }

      default: {
        this.navCtrl.push(AnuncioPage);
        break;
      }
    }
  }
}
