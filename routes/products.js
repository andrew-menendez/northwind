"use strict";

//pulled in from app.js on line 20...
var express = require('express');
var router = express.Router();
var chalk = require('chalk');
//pulls in models and db connection
var models = require('../models/');

var Product = models.product;


router.get('/products', function(req, res, next) {
  //console.log(req.body);
  models.product.findAll()
    .then(function(products) {
      res.render('products', { products:products });
    }, next);
});


//make it RESTFUL POST '/' for inserting
router.post('/add', function(req, res, next){

  var product = {
      name: req.body.name,
      description:req.body.desc,
      inStock:0//default value
  };
  models.product.create(product)
    .then(function (product) {
          console.log(chalk.green(product.name));
          res.redirect('/products');
    }, next);
});


//use restful routes PUT /:id
router.post('/update', function(req, res, next){
  //if favor findById and then updating
  //give you more control-- you can throw an exception if the product does not exist.
  models.product.update (
    { inStock: req.body.number},
    { where: {id: req.body.id }
  })
  .then(function(rows){
    res.redirect('/products');
  }, next);

});

module.exports = router;
