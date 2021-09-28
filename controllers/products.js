const Book = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('add-book', {
      pageTitle: 'Add Book',
      path: '/store'
    });
}

exports.postAddProduct = (req, res, next) => {
    const book = new Book(req.body.Title);
    book.save();

    
    res.redirect('/');
}
exports.getProducts = (req, res, next) => { // Home
    Book.fetchAll(books => {
        res.render('store', {
        bookList: books,
        pageTitle: 'Shop',
        path: 'Home'
        });
    });
    
}
exports.deleteProduct = (req, res, next) => {
    const DeleteBook = req.body.BookToDelete;
    for(var i = 0, len = books.length; i < len; i++) {
        if (books[i].Book_ISBN === DeleteBook) {
            books.splice(i, 1);
            break;
        }
   }
}