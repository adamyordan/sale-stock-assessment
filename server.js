var http = require('http');
var mongoose = require('mongoose');

var app = require('./app');

function start() {
  app.set('port', 3000);

  var server = http.createServer(app);
  server.listen(3000);

  console.log('API is running on port', 3000);
}

mongoose.connect('mongodb://localhost/sale-stock');
mongoose.connection.on('connected', start);