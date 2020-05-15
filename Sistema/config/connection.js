const knex = require('knex');
const configuration = require('../knexfile');

const connection = knex(configuration.development);

module.exports = connection; 

/*var mysql = require('mysql')

var connMySql = function () {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'rootpassword',
        database: 'projeto_saude'
    })
}

module.exports = function () {
    return connMySql
}
*/