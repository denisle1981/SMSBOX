var defaultData = [
    {
        'email': 'admin@smsc.io',
        'telephoneNumber': '380501385375',
        'password': 'U2FsdGVkX19anFWzM8j90IZLMOrjN3EZ94lfZLbhP44=',
        'permissions': 'ADMIN'
    },
    {
        'email': 'user@smsc.io',
        'telephoneNumber': '380981685475',
        'password': 'U2FsdGVkX19ggNwUuvI0W+uj37T5pxDP0RtYRT6xQM0=',
        'permissions': 'USER'
    },
    {
        'email': 'guest@smsc.io',
        'telephoneNumber': '380731688490',
        'password': 'U2FsdGVkX1/LVLiimkfuS5Fqc6BcMJSR7dLehIYROog=',
        'permissions': 'GUEST'
    }
];

exports.up = function (knex, Promise) {

    return Promise.all([

        knex.schema.createTable('users', function (table) {
            table.increments('id');
            table.string('email');
            table.string('telephoneNumber');
            table.string('permissions');
            table.string('password');
        }),

        knex('users').insert(defaultData)

    ])

};

exports.down = function (knex, Promise) {

    return Promise.all([
        knex.schema.dropTable('users')
    ])

};
