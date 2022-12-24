const express=require('express');
const app=express();
const bodyParser = require('body-parser');
const handlebars=require('express-handlebars');
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
const PORT=8147;
const router=require('./routes/routes');

// static path
app.use(express.static(__dirname+'/public'));

// Setting rendering engine
app.set('view engine','hbs');
app.set('views',__dirname+'/views');

app.engine('hbs',handlebars.engine({
    layoutsDir:__dirname+'/views/layouts',
    partialsDir:__dirname+'/views/partials',
    extname:'hbs',
    defaultLayout:'main'
}));

// session
let session=require('express-session');
app.use(session({
    secret:'secret',
    cookie:{maxAge:60000},
    resave:false,
    saveUninitialized:false
}));

// configure flash
let flash=require('connect-flash');
app.use(flash());

app.use(function(req, res, next) {
    res.locals.success_msg = req.flash('success_msg'); // needed for flash to work
    res.locals.error_msg = req.flash('error_msg');     // needed for flash to work
    res.locals.error = req.flash('error');             // needed for flash to work
    next();
  })

// get Db Connection
let db0=require('./db/conn');
db0.connectToServer(function (err) {
    if (err) throw err;
});

// use Route
app.use('/',router);

// printing the request
app.use((req,res,next)=>{
    console.log(req.hostname,req.path);
});

// App Listening
app.listen(PORT,()=>{
    console.log('Listening on Port '+PORT);
});