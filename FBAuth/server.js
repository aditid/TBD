//Setting up stuff from Node.js
//Module initiations

var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

//require is a method used to include a module. kinda like JS libraries
var cookieParser = require('cookie-parser');
var session = require('express-session');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var flash = require('connect-flash');



//Path for database
var configDB = require('./config/database.js');
mongoose.connect(configDB.url, { useMongoClient: true });
mongoose.Promise = global.Promise;
require('./config/passport')(passport);


//We want morgan as middleware. We use morgan to go to console after a request has been recieved.
//Every transaction would be logged
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(__dirname + '/views'));


//Session requires 3 things
app.use(session({
    secret: 'anystringoftext',
    saveUninitialized: true,
    resave: true}));

app.use(passport.initialize());
//use after first session (takes from previous express session)
app.use(passport.session());
app.use(flash());


//We can use JADE as well. EJS is another template we are using for now
app.set('view engine', 'ejs');


require('./app/routes.js')(app, passport);


app.listen(port);
console.log('Server running on port: ' + port);