const connection = require('../../config/connection');
const expressLayouts = require('express-ejs-layouts')

module.exports = {
    inicio(request,response){
        expressLayouts('../views/home/index.ejs');
    }
}