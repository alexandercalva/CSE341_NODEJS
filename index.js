const path = require('path');
const GeneralAppName = "My E-commerce App";
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.set('view engine', 'ejs');
app.set('views', 'views');

//It's importing form other  js folders
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/menu');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: 'Page not Found!'});
});

app.listen(5000);