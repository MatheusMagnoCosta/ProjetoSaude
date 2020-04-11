var express = require('express')
// a requisição ao express retorna uma função
var consign = require('consign')
var expressValidator = require('express-validator')

var app = express()
// aqui estou executando essa função

app.set('view engine', 'ejs')
// define o ejs como motor de geração de views

app.set('views', './app/views')

app.use(expressValidator())

consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .into(app)

module.exports = app
