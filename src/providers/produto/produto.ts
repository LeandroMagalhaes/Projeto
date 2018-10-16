import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class ProdutoProvider {

  constructor(private storage: Storage, private produto: Produto) {

  }

  public insert(produto: Produto) {
    return this.save(key, produto);
  }

  private remove(key: string) {
    return this.storage.remove(key);
  }

  private save(key: string, produto: Produto) {
    return this.storage.set(key, produto);
  }

  public update(key: string, produto: Produto) {
    return this.save(key, produto);
  }

  public getAll(){

    let produtos: ProdutoList[] = [];

    return this.storage.forEach((value: Produto, key: string) => {
      let produto = new ProdutoList();
      produto.key = key;
      produto.produto = name;
      produto.push(produto);
    })
      .then(() => {
        return Promise.resolve(produtos);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  }
}

export class Produto {
  nome: string;
  categoria: string;
  valor: string;
  descricao: string;
  camera: string;
  ativo: boolean;
}

export class ProdutoList {
  key: string;
  produto: Produto;
  push: any;
}
