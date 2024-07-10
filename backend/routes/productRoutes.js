const express = require('express');
const { addToCart, getAllProducts, getProductById } = require('../controllers/productController');
const routerP = express.Router();

routerP.post('/addToCart', addToCart)
routerP.get('/getProducts', getAllProducts);
routerP.post('/getProductById', getProductById);
module.exports = routerP;
