const express = require('express');
const routerO = express.Router();
const { createOrder } = require('../controllers/orderController');

// POST route to create a new order
routerO.post('/newOrder', createOrder);

module.exports = routerO;
