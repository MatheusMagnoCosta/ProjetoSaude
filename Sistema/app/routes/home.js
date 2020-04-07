var dbConnection = require('../../config/dbConnection')


module.exports = function(app) {

    var connection = dbConnection()

    app.get('/', function(req, res) {

        connection.query('select * from noticias', function(erro, result) {
            res.render('home/index', {noticias : result})
        })
    })
}