import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';
import { DatabaseProvider } from '../database/database';

@Injectable()
export class ProdutoProvider {

  constructor(private DatabaseProvider: DatabaseProvider) { }

  public insert(produto: Produto) {
    return this.DatabaseProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'INSERT INTO produtos (nome, valor, descricao, ativo, categoria_id) VALUES (?, ?, ?, ?, ?)';
        let data = [produto.nome, produto.valor, produto.descricao, produto.ativo ? 1 : 0, produto.categoria_id];

        return db.executeSql(sql, data)
          .catch((e) => console.error(e));
      })
        .catch((e) => console.error(e));
  }

  public update(produto: Produto) {
    return this.DatabaseProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'UPDATE produtos SET nome = ?, valor = ?, descricao = ?, ativo = ?, categoria_id = ? WHERE id = ?';
        let data = [produto.nome, produto.valor, produto.descricao, produto.ativo ? 1 : 0, produto.categoria_id, produto.id];

        return db.executeSql(sql, data)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  public remove(id: number) {
    return this.DatabaseProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'DELETE FROM produtos WHERE id = ?';
        let data = [id];

        return db.executeSql(sql, data)
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  public get(id: number) {
    return this.DatabaseProvider.getDB()
      .then((db:SQLiteObject) => {
        let sql = 'SELECT * FROM produtos WHERE id = ?';
        let data = [id];

        return db.executeSql(sql, data)
          .then((data: any) => {
            if(data.rows.length > 0) {
              let item = data.rows.item(0);
              let produto = new Produto();
              produto.id = item.id;
              produto.nome = item.nome;
              produto.valor = item.valor;
              produto.descricao = item.descricao;
              produto.ativo = item.ativo;
              produto.categoria_id = item.categoria_id;

              return produto;
            }

          return null;
          })
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }

  public getAll(ativo: boolean, nome: string = null) {
    return this.DatabaseProvider.getDB()
      .then((db: SQLiteObject) => {
        let sql = 'SELECT prod.*, cat.nome AS categoria_nome FROM produtos AS prod INNER JOIN categorias AS cat ON prod.categoria_id = cat.id WHERE prod.ativo = ?';

        var data: any [] = [ativo ? 1 : 0];

        if(nome) {
          sql += 'AND prod.nome LIKE ?'
          data.push('%' + nome + '%');
        }

        return db.executeSql(sql, data)
          .then((data : any) => {
            if(data.rows.length > 0) {
              let produtos: any[] = [];
              for(var i = 0; i < data.rows.length; i++){
                var produto = data.rows.item(i);
                produtos.push(produto);
              }

              return produtos;
            }
            else{
              return[];
            }
          })
          .catch((e) => console.error(e));
      })
      .catch((e) => console.error(e));
  }
}

export class Produto {
  id: number;
  nome: string;
  valor: string;
  descricao: string;
  ativo: boolean;
  categoria_id: number;
}
