var express = require("express");

var bodyParser = require('body-parser');
//use method override
var swig = require('swig');
var path = require('path');

var app = express();

module.exports = app;


swig.setDefaults({cache: false});

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
//static files
//my css
app.use('/static', express.static(path.join(__dirname, 'public')));
//bootstrap
app.use('/vendor', express.static( path.join(__dirname, 'node_modules')));
//app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser());//any error messages?

//establish router

app.get('/', function(req, res, next) {
  console.log(req.body);
  res.render('index');
});

app.use('/products', require('./routes/products')); // brings in route/index...



