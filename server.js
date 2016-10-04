// // var connection = require('../connection.js');
// var express = require('express');
// var bodyParser = require('body-parser');
// var methodOverride = require('method-override')
// var orm = require('./config/orm.js');


// var app = express();
// //Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static(__dirname + '/public'));

// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({
//     extended: false
// }))
// // * `selectAll()` 
// //     * `insertOne()` 
// //     * `updateOne()` 

// // orm.select('*', 'burgers');
// // override with POST having ?_method=DELETE
// // app.use(methodOverride('_method'))
// // var exphbs = require('express-handlebars');
// // app.engine('handlebars', exphbs({
// //     defaultLayout: 'main'
// // }));

// // orm.select('*', 'burgers');

//   orm.selectAll('burgers', 'burger_name', 'id', 
//   function (result) {
//     console.log(result);
//   });

//   orm.insertOne('burgers', 'burger_name', 'date', 
//   function (result) {
//     console.log(result);
//   });

//   orm.updateOne('burgers', 'burger_name', 'devoured', 
//   function (result) {
//     console.log(result);
//   });


/*
Here is where you set up your server file.
express middleware.
*/

var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
  extended: false
}));
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');

app.use('/', routes);

var port = 3000;
app.listen(port);
