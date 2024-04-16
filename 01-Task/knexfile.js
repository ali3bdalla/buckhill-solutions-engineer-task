// Update with your config settings.
require('dotenv').config()
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: process.env.DB_DRIVER,
    connection: {
      database: process.env.DB_NAME || '',
      user:     process.env.DB_USER || '',
      password: process.env.DB_PASSWORD || '',
      host: process.env.DB_HOST || '',
      port: process.env.DB_PORT || 3306,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: process.env.DB_DRIVER,
    connection: {
      database: process.env.DB_NAME || '',
      user:     process.env.DB_USER || '',
      password: process.env.DB_PASSWORD || '',
      host: process.env.DB_HOST || '',
      port: process.env.DB_PORT || 3306,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: process.env.DB_DRIVER,
    connection: {
      database: process.env.DB_NAME || '',
      user:     process.env.DB_USER || '',
      password: process.env.DB_PASSWORD || '',
      host: process.env.DB_HOST || '',
      port: process.env.DB_PORT || 3306,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
