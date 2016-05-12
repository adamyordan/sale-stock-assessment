var expect = require('chai').expect;
var faker = require('./faker/faker');

var cartHandler = require('../app/handlers/cart');

describe('Cart', function() {
	it('addItem() should add item to the cart', function() {
		faker.fakeCart(function(err, cart) {
			faker.fakeItem(function(err, item) {
				cartHandler.addItem({
					params: {
						cartId: cart._id
					},
					body: {
						itemId: item._id
					}
				}, {
					json: function(data) {
						expect(data.success).to.be.ok;
					}
				});
				// doc.remove();
			});
			// cart.remove();
		});
	});

	it('addCoupon() should add coupon to the cart', function() {
		faker.fakeCart(function(err, cart) {
			faker.fakeCoupon(function(err, coupon) {
				cartHandler.addCoupon({
					params: {
						cartId: cart._id
					},
					body: {
						couponId: coupon._id
					}
				}, {
					json: function(data) {
						expect(data.success).to.be.ok;
					}
				});
				// doc.remove();
			});
			// cart.remove();
		});
	});

	it('deleteItem() should delete item from the cart', function() {
		faker.fakeCart(function(err, cart) {
			faker.fakeItem(function(err, item) {
				cartHandler.addItem({
					params: {
						cartId: cart._id
					},
					body: {
						itemId: item._id
					}
				});
				cartHandler.deleteItem({
					params: {
						cartId: cart._id,
						itemId: item._id
					}
				}, {
					json: function(data) {
						console.log(data);
						expect(data.success).to.not.equal('true');
					}
				})
				// doc.remove();
			});
			// cart.remove();
		});		
	});

	it('Dummy', function() {
	});
});