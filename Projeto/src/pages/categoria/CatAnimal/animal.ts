import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

import { ProdutoProvider, Produto } from '../../../providers/produto/produto';

@Component({
  selector: 'page-animal',
  templateUrl: 'animal.html'
})
export class AnimalPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  produtos: any[] = [];
  somenteInativos: boolean = false;
  procurar: string = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toast: ToastController, private ProdutoProvider: ProdutoProvider) { }

  ionViewDidEnter() {
    this.getAllProdutos();
  }

  getAllProdutos() {
    this.ProdutoProvider.getAll(!this.somenteInativos, this.procurar)
      .then((resultado: any[]) => {
        this.produtos = resultado;
      });
  }

  addProduto() {
    this.navCtrl.push('ProdutoPage');
  }

  editProduto(id: number) {
    this.navCtrl.push('ProdutoEditarPage', {id: id});
  }

  removeProduto(produto: Produto) {
    this.ProdutoProvider.remove(produto.id)
      .then(() => {

        var index = this.produtos.indexOf(produto);
        this.produtos.splice(index, 1);
        this.toast.create({ message: 'Produto Excluído!', duration: 3000, position: 'botton'}).present();
      })
  }

  filterProdutos(ev: any) {
    this.getAllProdutos();
  }
}
