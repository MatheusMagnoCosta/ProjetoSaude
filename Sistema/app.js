const express = require('express');
const cors = require('cors');
const routes = require('../Sistema/routes');

const app = express();

app.use(express.json());
app.use(routes);
app.use(cors());
app.listen(2000)

/*var app = require('./config/server')

var rotaHome = require('./app/routes/createNews')(app)
// var rotaAdmin = require('./app/routes/admin')(app)
// var rotaBlog = require('./app/routes/blog')(app)


app.listen(3000, function() {
    console.log('Servidor ativo!')
})
*/