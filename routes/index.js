var express = require('express');
var router = express.Router();

var models = require('../models/');



router.get('/', function(req, res, next) {
  console.log(req.body)
  res.send('hello!')
});

module.exports= router;