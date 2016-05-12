var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CouponSchema = new Schema({
  discount: Number,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Coupon', CouponSchema);