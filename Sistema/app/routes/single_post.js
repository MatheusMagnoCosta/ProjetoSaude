module.exports = function(app) {    
    app.get('/single_post', function(req, res) {
        
        var connection = app.config.dbConnection()
        var postModel = app.app.models.postModel
        
        postModel.getNoticia(connection, function(error, result){
            res.render('single_post/single_post', {noticia : result})
        })
    })
}
