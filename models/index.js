"use strict";

var Sequelize = require('sequelize');
var database = 'northwind';
// connect to DB & initialize sequelize
var sql = new Sequelize(database, 'root', null, {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

});

//Checking connection status
sql.authenticate().then(function() {
  console.log('connected to ', database);
}).catch(function() {
  console.log("fuck!");
}).done();