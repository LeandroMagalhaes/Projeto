/*import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DatabaseProvider {

  constructor(private sqlite: SQLite) { }

  public getDB(){
    return this.sqlite.create({
      name: 'db_xlx.db',
      location: 'default'
    });
  }

  public createDB(){
    return this.getDB()
      .then((db: SQLiteObject) => {
        this.createTables(db);
        this.insertDefaultItens(db);
      })
      .catch(e => console.error(e));
  }

  private createTables(db: SQLiteObject) {
    db.sqlBatch([
      ['CREATE TABLE IS NOT EXISTS categoria (idCategoria integer primary key AUTOINCREMENT NOT NULL, nomeCategoria TEXT NOT NULL)'],
      ['CREATE TABLE IS NOT EXISTS produto (idProduto integer primary key AUTOINCREMENT NOT NULL, nomeProduto TEXT, idUsuario interger, valorProduto REAL, ativo integer, idCategoria integer, FOREIGN KEY(idCategoria) REFERENCES categoria(idCategoria), FOREIGN KEY(idUsuario) REFERENCES usuario(idUsuario))'],
      ['CREATE TABLE IS NOT EXISTS usuario (idUsuario integer primary key AUTOINCREMENT NOT NULL, nomeUsuario TEXT NOT NULL, senhaUsuario TEXT NOT NULL, dNascimento DATE, sexoUsuario TEXT, emailUsuario TEXT)'],
    ])
      .then(() => console.log('Tabelas Criadas com Sucesso!'))
      .catch(e => console.log('Erro ao Criar as Tabelas!', e));
  }

  private insertDefaultItens(db: SQLiteObject) {
    db.executeSql('SELECT COUNT(idCategoria) AS qtd FROM CATEGORIA', {})
      .then((data: any) => {

        if (data.rows.item(0).qtd == 0) {

          db.sqlBatch([
            ['INSERT INTO categoria (nomeCategoria) VALUES (?)', ['Veículo']],
            ['INSERT INTO categoria (nomeCategoria) VALUES (?)', ['Emprego']],
            ['INSERT INTO categoria (nomeCategoria) VALUES (?)', ['Música']],
            ['INSERT INTO categoria (nomeCategoria) VALUES (?)', ['Eletrônico']],
            ['INSERT INTO categoria (nomeCategoria) VALUES (?)', ['Imóvel']],
            ['INSERT INTO categoria (nomeCategoria) VALUES (?)', ['Animal']],
            ['INSERT INTO categoria (nomeCategoria) VALUES (?)', ['Esporte']],
          ])
            .then(() => console.log('Dados Base Inseridos!'))
            .catch(e => console.error('Erro ao inserir a Base', e));
        }
      })
      .catch(e => console.error('Erro ao consultar a quantidade de Categorias', e));
  }
}
*/
