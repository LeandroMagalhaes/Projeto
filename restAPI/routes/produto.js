var express = require('express');

var router = express.Router();

var produto = require('../models/produto');

router.get('/nome?', function(req, res, next) {
    if(req.params.id) {
        produto.getProdutoNome(req.params.nome, function(err, rows) {
            if(err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
    else {
        produto.getAllProdutos(function(err, rows) {
            if(err) {
                res.json(err);                
            }
            else {
                res.json(rows);
            }
        });
    }
});

module.exports = router;