module.exports = function(app) {


    app.get('/', function(req, res) {
        var mysql = require('mysql')

        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'rootpassword',
            database: 'projeto_saude'
        })

        connection.query('select * from noticias', function(erro, result) {
            res.send(result)
        })

        app.get('/', function(req, res) {
            res.render('home/index')
        })
    })
}