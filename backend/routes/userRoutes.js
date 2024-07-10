const express = require('express');
const { register, login, deleteProductFromCart, deleteUser } = require('../controllers/userController');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/removeItemFromCart', deleteProductFromCart);
router.post('/deleteAccount', deleteUser);
module.exports = router;
