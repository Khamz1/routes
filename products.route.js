const {Router} = require('express');
const route = Router()
const {getProductsController} =require('./products.controllers')

route.get('/products',getProductsController.getProduct);
route.get( '/products/:id',getProductsController.getProductById);
route.post('/products',getProductsController.postProduct);
route.delete('/products/:id',getProductsController.deleteProduct);


module.exports=route