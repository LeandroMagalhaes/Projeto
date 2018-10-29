var db = require('../dbconnection');

var produto = {
    getAllProdutos: function(callback) {
        return db.query("SELECT * FROM produto", callback);        
    },

    /*getProdutoCategoria: function(idCategoria, callback) {
        return db.query("SELECT * FROM produto WHERE categoria = ?", [idCategoria], callback);
    },*/

    getProdutoNome:function(nome, callback) {
        return db.query("SELECT * FROM produto WHERE nome = ?", [nome], callback);
    }
};

module.exports = produto;