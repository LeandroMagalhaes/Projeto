import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

import { CameraPage } from '../camera/camera';
import { PesquisaPage } from './../pesquisar/pesquisar';

import { CategoriaProvider } from '../../providers/categoria/categoria';
import { ProdutoProvider, Produto } from './../../providers/produto/produto';

@Component({
  selector: 'page-produto',
  templateUrl: 'produto.html'
})
export class ProdutoPage {
  categorias: any[];
  model: Produto;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private ProdutoProvider: ProdutoProvider, private CategoriaProvider: CategoriaProvider) {

    this.model = new Produto ();

    if(this.navParams.data.id) {
      this.ProdutoProvider.get(this.navParams.data.id)
        .then((resultado: any) => {
          this.model = resultado;
        })
    }
  }

  ionViewDidLoad() {
    this.CategoriaProvider.getAll()
      .then((resultado: any[]) => {
        this.categorias = resultado;
      })
      .catch(() => {
        this.toast.create({ message: 'Erro ao carregar as categorias!', duration: 3000, position: 'botton' }).present();
      });
  }

  save() {
    this.saveProduto()
      .then(() => {
        this.toast.create({ message: 'Produto Cadastrado!', duration:
      3000, position: 'botton'}).present();
        this.navCtrl.pop();
      })
      .catch(() => {
        this.toast.create({ message: 'Erro ao Salvar o Produto!', duration: 3000, position: 'botton'}).present();
      })
  }

  private saveProduto() {
    if(this.model.id) {
      return this.ProdutoProvider.update(this.model);
    }
    else {
      return this.ProdutoProvider.insert(this.model);
    }
  }

  itemTapped($event){
    this.navCtrl.push('CameraPage');
  }
}
