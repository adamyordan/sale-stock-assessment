#Sale Stock Technical Assessment

## Description
This repo contains source code for my Sale Stock Techincal Assessment.  
The API is made using Node.js.  
You can access the API here:
`139.59.232.18`

## API List
`POST /api/v1/carts/:cartId/items?itemId=?`
	add an item to the cart

`DELETE /api/v1/carts/:cartId/items/:itemId`
	delete an item from the cart

`POST /api/v1/carts/:cartId/coupon`
	apply a coupon to the cart

`GET /api/v1/carts/:cartId/total`
	get the total price to be paid for the cart