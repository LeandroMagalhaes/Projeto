var mysql = require('mysql');

var connection = mysql.createPool({
    host: 'localhost',
    database: 'db_xlx',
    user: 'root',
    password: 'L!nk1234',
});

module.exports = connection;