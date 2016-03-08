"use strict";

var fs        = require("fs");
var path      = require("path");

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
  console.log("fuck!");//woooahahhaha
}).done();


var db = {};

// from sequelize docs: http://docs.sequelizejs.com/en/1.7.0/articles/express/
// strategy for storing models in individual files:
// read current directory
// this is fine if you understand every line--- if you don't.. then don't copy and paste :)
fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function(file) {
    var model = sql.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});


module.exports = db;
