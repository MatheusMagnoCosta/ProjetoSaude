
exports.up = function(knex) {
    return knex.schema.createTable('noticias', function(table){
        table.string('id').primary();
        table.string('titulo').notNullable();
        table.string('noticia').notNullable();
        table.string('autor').notNullable();
        table.string('data').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable(noticias);
};
