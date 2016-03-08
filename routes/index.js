"use strict";

//pulled in from app.js on line 20...
var express = require('express');
var router = express.Router();
var chalk = require('chalk');
//pulls in models and db connection
var models = require('../models/');



router.get('/', function(req, res, next) {
  console.log(req.body);
  res.render('index');
});

router.get('/products', function(req, res, next) {
  //console.log(req.body);
  models.product.findAll()
    .then(function(products) {
      res.render('products', {products:products});
    });
});



router.post('/add', function(req,res,next){

    console.log(req.body);
        var newProduct={
            name: req.body.name,
            description:req.body.desc,
            inStock:0
        };
      console.log(newProduct)
        models.product.create(newProduct).then(function (product) {
            console.log(chalk.green(product.name));
            res.redirect('/products');
        });
});

router.post('/update', function(req,res,next){

    console.log(req.body);


        var targetProduct={
            'id':req.body.product,
            'number': req.body.number

        };

        models.product.update (
          {inStock:targetProduct.number},
          {where:{id:targetProduct.id}
        }).then(function(rows){
              console.log('updated row '+ rows);
              res.redirect('/products');
            })

});

module.exports = router;
