const express = require('express');
const { newProduct, getUsers, adminLogin, adminSignup } = require('../controllers/adminController');
const routerA = express.Router();

routerA.post('/newProduct', newProduct);
routerA.get('/getUsers',getUsers)
routerA.post('/adminLogin', adminLogin)
routerA.post('/adminRegister', adminSignup)
module.exports = routerA;
