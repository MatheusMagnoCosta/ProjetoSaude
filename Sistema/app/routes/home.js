module.exports = function(app) {

    
    app.get('/', function(req, res) {

        //var connection = app.config.dbConnection()

        res.render('home/index')
    })
}