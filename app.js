var express = require('express');

var app = express();

app.get('/about',function(req,res)
{
    res.send('<h1> About US </h1>')  ;
});

app.get('/about/:title',function(req,res)
{
    res.send('<h1>'+req.params.title+'</h1>')  ;
});

app.get('/',function(req,res)
{
    res.render('index.ejs',{title:'Hello World'});
});

app.get('/home',function(req,res)
{
    res.render('layout.ejs',{title:'Home',body:'<h1>Welcome in NodeJS</h1>'});
});


app.get('/*',function(req,res)
{
    res.status(404).render('error.ejs',{title:'error'});
});



/*app.get('/*',function(req,res)
{
    res.send('<h1> Welcome </h1>')  ;
});*/


console.log('ًServer Started at Port 5000')
app.listen(5000);