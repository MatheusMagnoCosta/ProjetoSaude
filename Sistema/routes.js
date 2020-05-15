const express = require('express');
const routes = express.Router();

const CreateNews = require('./app/controller/createNews');
const Home = require('./app/controller/home.js')

routes.post('/news', CreateNews.create);
routes.get('/news', CreateNews.index);

routes.get('/home', Home.inicio);

module.exports = routes;