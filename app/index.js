var express = require('express');

var app = express();
var routes = require('./routes');


app.use('/api/v1', routes);

module.exports = app;