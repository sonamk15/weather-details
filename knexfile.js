var knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : 'navgurukul',
      database : 'myapp_test'
    },
    useNullAsDefault: true
  });
  module.exports = knex;

  knex.raw('CREATE DATABASE IF NOT EXISTS myapp_test')
  .then((data) => {
    console.log('Databse created congo.....');
  })
  .catch((err) => {
    console.log("there is some error while creating the database",err);
  })

  knex.schema.hasTable('weather_details').then((exists) => {
    if (!exists) {
      return knex.schema.createTable('weather_details', (table) => {
          table.increments('id').primary();
          table.string('city_name', 100).notNullable();
          table.integer('city_id',55).unique().notNullable();
          table.integer('weather_id',100).notNullable();
          table.string('weather_status',100).notNullable();
          table.string('description',100).notNullable();
        })

        .catch((err) => {
          console.log(err,"There is some err while writing the quety")
        })
    }
    return console.log('table is created!')
  })


  
  
  

