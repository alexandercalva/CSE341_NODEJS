const path = require('path');
const express = require('express');
const adminController = require('../controllers/admin');
const router = express.Router();

router.get('/add-product',adminController.getAddProduct);

//admin/products => GET
router.get('/products', adminController.getProducts);

router.post('/add-product', adminController.postAddProduct);
//router.post('/remove-book', productsController.deleteProduct);

module.exports = router;