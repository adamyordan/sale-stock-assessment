var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Item = require('./Item');
var Coupon = require('./Coupon');

var CartSchema = new Schema({
  items: [{
  	price: Number,

  	timestamp: { type: Date, default: Date.now }
  }],
  coupon: {
  	discount: Number,
	timestamp: { type: Date, default: Date.now }
  },
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Cart', CartSchema);