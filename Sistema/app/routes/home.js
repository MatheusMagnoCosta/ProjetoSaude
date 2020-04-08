
module.exports = function(app) {

    
    app.get('/', function(req, res) {

        var connection = app.config.dbConnection()

        connection.query('select * from noticias', function(erro, result) {
            res.render('home/index', {noticias : result})
        })
    })
}
