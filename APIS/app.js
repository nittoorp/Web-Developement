var express = require("express");
var app = express();
var apirequest = require('request');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
var searchKey;

app.get("/",function(request,response){
    
    console.log("here in the opening page");
    
    response.render("search.ejs");
});



app.post("/results",function(req,res){
    
    var searchKey = req.body.movie;
    console.log(searchKey);
    var url = `http://www.omdbapi.com/?s=${searchKey}&apikey=thewdb`
    console.log(url);
    apirequest(url,function (error,response,body) {
       var parse = JSON.parse(body);
       res.send(body);
    
    });
    console.log("In results");
    
});



app.listen(process.env.PORT,process.env.IP,function(req,res){
    
    console.log("Movie app has started");
    
})