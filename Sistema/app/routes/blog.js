module.exports = function(app) {    
    app.get('/blog', function(req, res) {
        
        var connection = app.config.dbConnection()
        var postModel = new app.app.models.NoticiasDao(connection)
        
        postModel.getNoticias(function(erro, result){
            res.render('blog/blog', {noticias : result})
        })
    })
}
