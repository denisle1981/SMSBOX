'use strict';

const knex = require('knex');

const db = knex({
	client: 'mysql',
	useNullAsDefault: true,
	connection: {
		host: '127.0.0.1',
		user: 'root',
		password: '',
		database: 'smsbox'
	}
});

const tableName = 'user';

// Clean up our data. This is optional and is here
// because of our integration tests
db.schema.dropTableIfExists(tableName).then(function () {
	console.log('Dropped user table');

	// Initialize your table
	return db.schema.createTable(tableName, function (table) {
		console.log('Creating user table');

		table.increments('id');
	})
});

module.exports = db;
