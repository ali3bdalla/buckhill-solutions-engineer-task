/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('category_subcategory', function(table) {
        table.increments('id').primary();
        table.string('category_uuid').notNullable().references('uuid').inTable('categories');
        table.string('subcategory_uuid').notNullable().references('uuid').inTable('categories');
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('category_subcategory');
};
