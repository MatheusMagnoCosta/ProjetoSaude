var app = require('./config/server')

var rotaHome = require('./app/routes/home')(app)
var rotaAdmin = require('./app/routes/admin')(app)
var rotaBlog = require('./app/routes/blog')(app)


app.listen(3000, function() {
    console.log('Servidor ativo!')
})
