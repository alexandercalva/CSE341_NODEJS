const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', 'views');

//It's importing form other  js folders
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
//const storeRoutes = require('./routes/admin');
const errorController = require('./controllers/error');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(adminRoutes);
app.use(shopRoutes);
app.use(errorController.get404);

app.listen(5000);