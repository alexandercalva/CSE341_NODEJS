const path = require('path');
const express = require('express');
const router = express.Router();
const books = [];

router.get('/add-book', (req, res, next) => {
  res.render('add-book', {
    pageTitle: 'Add Book',
    path: 'NewBook'
  });
});

router.post('/add-book', (req, res, next) => {
  books.push({
      Title: req.body.Title,
      Author: req.body.Author,
      Book_ISBN: req.body.Book_ISBN,
      PublishYear: req.body.PublishYear
    });
  res.redirect('/');
});

router.post('/remove-book', (req, res, next) => {
    const DeleteBook = req.body.BookToDelete;
        for(var i = 0, len = books.length; i < len; i++) {
        if (books[i].Book_ISBN === DeleteBook) {
            books.splice(i, 1);
            break;
        }
    }
    res.redirect('/');
  });

exports.routes = router;
exports.books = books;