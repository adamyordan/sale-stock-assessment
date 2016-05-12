var express = require('express');
var cors = require('cors');
var router = express.Router();

var cart = require('./handlers/cart');

router.use(cors());

router.post('/carts/:cartId/items', cart.addItem);
router.delete('/carts/:cartId/items/:itemId', cart.deleteItem);
router.post('/carts/:cartId/coupon', cart.addCoupon);
router.get('/carts/:cartId/total', cart.getTotal);

module.exports = router;