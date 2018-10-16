import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';

@Injectable()
export class DatabaseProvider {

  constructor(private sqlite: SQLite) { }

  public getDB() {
    return this.sqlite.create({
      name: 'produto.db',
      location: 'default'
    });
  }

  public createDatabase() {
    return this.getDB()
      .then((db: SQLiteObject) => {

      this.createTables(db);

      this.insertDefaultItems(db);
    }) .catch(e => console.log(e));
  }

  private createTables(db: SQLiteObject) {

    db.sqlBatch([
      ['CREATE TABLE IF NOT EXISTS categorias (id integer primary key AUTOINCREMENT NOT NULL, nome TEXT)'],
      ['CREATE TABLE IF NOT EXISTS produtos (id integer primary key AUTOINCREMENT NOT NULL, nome TEXT, valor REAL, descricao TEXT, ativo integer,  categoria_id integer, FOREIGN KEY (categoria_id) REFERENCES categorias(id))']
    ])
      .then(() => console.log('Dados padrões Criados!'))
      .catch(e => console.error('Erro ao criar as Tabelas!', e));
  }

  private insertDefaultItems(db: SQLiteObject) {
    db.executeSql('SELECT COUNT(id) AS qtd FROM categorias', [])
      .then((data: any) => {
        if(data.rows.item(0).qtd == 0) {

          db.sqlBatch([
            ['INSERT INTO categorias (nome) VALUES (?)', ['Imóvel']],
            ['INSERT INTO categorias (nome) VALUES (?)', ['Animal']],
            ['INSERT INTO categorias (nome) VALUES (?)', ['Emprego']],
            ['INSERT INTO categorias (nome) VALUES (?)', ['Veículo']],
            ['INSERT INTO categorias (nome) VALUES (?)', ['Música']],
            ['INSERT INTO categorias (nome) VALUES (?)', ['Esporte']],
            ['INSERT INTO categorias (nome) VALUES (?)', ['Eletrônico']],
          ])
            .then(() => console.log('Dados padrões Inseridos!'))
            .catch(e => console.error('Erro ao incluir dados padrões!', e));
        }
      })
      .catch(e => console.error('Erro ao Consultar a Quantidade de Categorias!', e));
  }
}
