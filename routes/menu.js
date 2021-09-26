const path = require('path');
const express = require('express');
const router = express.Router();
const adminData = require('./admin');

router.get('/', (req, res, next) => { // Home
    const books = adminData.books;
    res.render('store', {
    bookList: books,
    pageTitle: 'Shop',
    path: 'Home'
    });
});

module.exports = router;