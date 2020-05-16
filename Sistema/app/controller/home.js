const connection = require('../../config/connection');


module.exports = {
    async inicio(request,response){
        response.render('\home/index.ejs');
        const noticias = await connection('noticias').select('*');
    },

    async bd(request,response){
        const noticias = await connection('noticias').select('*');
        return response.json(noticias);
    },
}