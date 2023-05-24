const {Router} = require('express');
const route = Router();
const {getBrandsController} = require('./brands.controllers');

route.get('/brands', getBrandsController.getBrand)
route.post('/brands',getBrandsController.postBrand)
route.delete('/brands',getBrandsController.deleteBrand)


module.exports = route