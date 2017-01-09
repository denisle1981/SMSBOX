'use strict';

const knex = require('knex');

module.exports = function (app) {
  const dbConfig = app.get('database');

  return knex({
    client: dbConfig.client,
    useNullAsDefault: true,
    connection: {
      host: dbConfig.host,
      user: dbConfig.user,
      password: dbConfig.password,
      database: dbConfig.name
    }
  });
};
