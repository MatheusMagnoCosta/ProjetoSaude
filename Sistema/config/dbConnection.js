var mysql = require('mysql')

module.exports = function () {
    return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'rootpassword',
            database: 'projeto_saude'
        })
}