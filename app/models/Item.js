var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
  price: Number,

  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Item', ItemSchema);