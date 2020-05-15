const express = require('express');
const routes = express.Router();

const CreateNews = require('./app/routes/createNews');

routes.post('/news', CreateNews.create);
routes.get('/news', CreateNews.index);

module.exports = routes;