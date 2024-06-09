const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const errorController = require('./controllers/error')

// const expressHbs = require('express-handlebars')

const app = express()


// app.engine(
//   "hbs",
//   expressHbs({
//     layoutsDir: "views/layouts/",
//     defaultLayout: "main-layout",
//     extname: "hbs",
//   })
// );
// app.set('view engine','hbs');
app.set('view engine','ejs');
// app.set('view engine','pug');
app.set('views','views');

const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

// app.use(bodyParser.urlencoded({ extended: true })); old method
app.use(express.urlencoded({ extended: true })); 

app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminData);
app.use(shopRoutes)

app.use(errorController.get404)

app.listen(3000, () => console.log('Server running...'));