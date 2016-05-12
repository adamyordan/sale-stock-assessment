var cart = {};

var Cart = require('../models/Cart');
var Coupon = require('../models/Coupon');
var Item = require('../models/Item');

cart.addItem = function (req, res, next) {
	var itemId = req.body.itemId;
	var cartId = req.params.cartId;

	Cart.findById(cartId, function(err, doc) {
		Item.findById(itemId, function(err, item) {
			doc.items.push(item);
			doc.save();	
			
			return res.json({
				success: true,
				cart: doc
			});
		});
	});
}

cart.deleteItem = function (req, res, next) {
	var itemId = req.params.itemId;
	var cartId = req.params.cartId;

	Cart.findById(cartId, function(err, doc) {
		doc.items.pull(itemId);
		doc.save();

		return res.json({
			success: true,
			cart: doc
		});
	});

}

cart.addCoupon = function (req, res, next) {
	var cartId = req.params.cartId;
	var couponId = req.body.couponId;

	Cart.findById(cartId,function(err, doc) {
		Coupon.findById(couponId, function(err, coupon) {
			doc.coupon = coupon;
			doc.save();
			
			return res.json({
				success: true,
				cart: doc
			});
		});
	});
}

cart.getTotal = function (req, res, next) {
	var cartId = req.params.cartId;

	Cart.findById(cartId, function(err, doc) {
		var total = 0;
		doc.items.forEach(function(ele, idx) {
			total+= ele.price;
		});
		total-= Math.ceil(total * doc.coupon.discount / 100.0);

		return res.json({
			success: true,
			total: total,
			cart: doc
		});
	});
}

module.exports = cart;