const express=require('express');
const app=express();
const bodyParser = require('body-parser');
const handlebars=require('express-handlebars');
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
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

// Route
app.use('/',router);

// printing the request
app.use((req,res,next)=>{
    console.log(req.hostname,req.path);
});

// App Listening
app.listen(PORT,()=>{
    console.log('Listening on Port '+PORT);
});