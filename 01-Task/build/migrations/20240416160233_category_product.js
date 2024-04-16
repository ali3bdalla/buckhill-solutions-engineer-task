/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    
    return knex.schema.createTable('category_product', function (table) {
        table.increments('id').primary();
        table.string('category_uuid').notNullable().references('uuid').inTable('categories');
        table.string('product_uuid').notNullable().references('uuid').inTable('products');
        table.timestamps(true, true);
    }).then(function () { 
        return knex.raw(`
            INSERT INTO category_product (category_uuid, product_uuid)
            SELECT category_uuid, uuid
            FROM products
        `);
    }).then(function () { 
        return knex.schema.alterTable('products', function(table) {
            table.dropForeign('category_uuid');
            table.dropColumn('category_uuid');
        });
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('products', function (table) {
        table.string('category_uuid').notNullable().references('uuid').inTable('categories');
    }).then(function () {
        return knex.raw(`
            UPDATE products
            JOIN category_product ON products.uuid = category_product.product_uuid
            SET products.category_uuid = category_product.category_uuid
        `);
    }).then(function () {
        knex.schema.dropTable('category_product');
    });
};
