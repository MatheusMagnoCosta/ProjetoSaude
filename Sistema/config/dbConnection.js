var mysql = require('mysql')

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
