
exports.up = function(knex, Promise) {
    return knex.schema.createTable('games', tbl => {
        tbl.increments();

        tbl.string('title').notNullable().unique();
        tbl.string('genre').notNullable();

        tbl.int('releaseYear');
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('games');
};
