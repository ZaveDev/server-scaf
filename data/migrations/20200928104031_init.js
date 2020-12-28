exports.up = function (knex) {
  return knex.schema.createTable("users", (tbl) => {
    tbl.increments();
    tbl.string("username").notNullable().unique().index();
    tbl.string("password").notNullable();
    tbl.string("location");
  });
};
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
