const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/store'
    });
}

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.Title);
    product.save();

    
    res.redirect('/');
}
exports.getProducts = (req, res, next) => { // Home
    Product.fetchAll(products => {
        res.render('store', {
        productList: products,
        pageTitle: 'Shop',
        path: 'Home'
        });
    });
    
}
/*exports.deleteProduct = (req, res, next) => {
    const DeleteProduct = req.body.ProductToDelete;
    for(var i = 0, len = products.length; i < len; i++) {
        if (products[i].ISBN === DeleteProduct) {
            products.splice(i, 1);
            break;
        }
   }
}*/