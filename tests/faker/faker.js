var fakery = require('mongoose-fakery');
var mongoose = require('mongoose');

var Item = require('../../app/models/Item');
var Coupon = require('../../app/models/Coupon');
var Cart = require('../../app/models/Cart');

mongoose.connect('mongodb://localhost/sale-stock');

fakery.fake('item', Item, {
	price: fakery.g.rndint(100000, 1000000)
});

fakery.fake('coupon', Coupon, {
	discount: fakery.g.rnd()
});

fakery.fake('cart', Cart, {
});

var faker = {};
faker.fakeItem = function(cb) {
	fakery.makeAndSave('item', cb);
}
faker.fakeCoupon = function(cb) {
	fakery.makeAndSave('coupon', cb);
}
faker.fakeCart = function(cb) {
	fakery.makeAndSave('cart', cb);
}

module.exports = faker;