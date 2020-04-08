module.exports = function(app) {
    

    app.get('/admin', function(req, res) {
        
        var connection = app.config.dbConnection()
        
        res.render('admin/admin')
    })
}

