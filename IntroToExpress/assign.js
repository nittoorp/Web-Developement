var express = require("express");
var app = express();

app.get("/",function(request,response){
    
    response.send("Hi welcome to my assignment!");
    
});

app.get("/speak/:animal",function(request,response){
    var animalSounds ={
        "cow" : "Moo",
        "dog" : "Woof",
        "pig":"oink"
    }
    var animalName =    request.params.animal;
    console.log(animalName);
    response.send("The " + animalName +" says " +"'" + animalSounds[animalName]+"'"); 
    
});

app.get("/repeat/:word/:number",function(request, response) {
    
    var word = request.params.word;
    var number = Number(request.params.number);
    var toReturn ="";
    for(var i=0;i<number;i++){
        toReturn +=" "+word;
    }
    response.send(toReturn);
});

app.get("*",function(request,response){
    
    response.send("Sorry Page not found! What are you doing with your life!!!");
    
});

app.listen(process.env.PORT,process.env.IP,function(){
    
    console.log("THe server has started!!");
    
});