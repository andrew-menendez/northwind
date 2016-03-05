//pulled in from app.js on line 20...
var express = require('express');
var router = express.Router();

//pulls in models and db connection
var models = require('../models/');



router.get('/', function(req, res, next) {
  console.log(req.body)
  res.render('index')
});

module.exports= router;