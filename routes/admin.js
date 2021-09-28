const path = require('path');
const express = require('express');
const productsController = require('../controllers/products');
const router = express.Router();
router.get('/add-book',productsController.getAddProduct);
router.post('/add-book', productsController.postAddProduct);
router.post('/remove-book', productsController.deleteProduct);

module.exports = router;