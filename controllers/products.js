const books = [];

exports.getAddProduct = (req, res, next) => {
    res.render('add-book', {
      pageTitle: 'Add Book',
      path: '/store'
    });
}

exports.postAddProduct = (req, res, next) => {
    books.push({
        Title: req.body.Title,
        Author: req.body.Author,
        Book_ISBN: req.body.Book_ISBN,
        PublishYear: req.body.PublishYear
    });
    res.redirect('/');
}
exports.getProducts = (req, res, next) => { // Home
    res.render('store', {
    bookList: books,
    pageTitle: 'Shop',
    path: 'Home'
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