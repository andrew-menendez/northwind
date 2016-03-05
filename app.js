var express = require("express");

var morgan = require('morgan');
var bodyParser = require('body-parser');
var swig = require('swig');
var path = require('path');
var app = express();


swig.setDefaults({cache: false});

app.engine('html', swig.renderFile);
app.set('view engine', 'html');
//stattic files
//app.use('/static', express.static(path.join(__dirname, 'public')));
//app.use('/vendor', express.static( path.join(__dirname, 'node_modules')));
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', require('./routes')); // brings in route/index...



module.exports = app;