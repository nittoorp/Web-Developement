var express = require("express");
var app =express();

app.get("/",function(request,response){
    
    response.send("Hi There!!");
    
});

app.get("/bye",function(request,response){
     response.send("Function in bye");
});

app.listen(process.env.PORT,process.env.IP, function(){
    
   console.log("The process has started!!") 
});