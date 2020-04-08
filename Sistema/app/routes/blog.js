module.exports = function(app) {    
    app.get('/blog', function(req, res) {
        
        var connection = app.config.dbConnection()
        
        res.render('blog/blog')
    })
}
