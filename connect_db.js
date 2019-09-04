// const mysql = require('mysql');
// const connection = mysql.createConnection({
//   host: '127.0.0.1',
//   user: 'root',

//   password: 'navgurukul',
//   database: 'myapp_test'
// });
// connection.connect((err) => {
//   if (err) throw err;
//   console.log('Connected!');
// });



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

  knex.raw('CREATE DATABASE IF NOT EXISTS sapna_benu')
  .then((data) => {
    console.log('Databse created congo.....');
  })
  .catch((err) => {
    console.log("there is some error while crating the database",err);
  })



// update user set authentication_string=PASSWORD("navgurukul") where User='root';
