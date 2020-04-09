module.exports = function(app) {    
    app.get('/blog', function(req, res) {
        
        var connection = app.config.dbConnection()
        var postModel = app.app.models.postModel
        
        postModel.getNoticias(connection, function(erro, result){
            res.render('blog/blog', {noticias : result})
        })
    })
}
