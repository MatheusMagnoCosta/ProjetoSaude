const connection = require('../../config/connection');
const crypto = require('crypto');

module.exports = {
    async index(request,response){
        const noticias = await connection('noticias').select('*');
        return response.json(noticias);
    },

    async create(request,response){
        const { titulo, noticia, autor, data } = request.body;
        const id = crypto.randomBytes(4).toString('HEX');

        await connection('noticias').insert({
            id,
            titulo,
            noticia,
            autor,
            data,
        })

        return response.json({ titulo });
    }
}