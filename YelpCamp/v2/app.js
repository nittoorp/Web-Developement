var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Yelp_Camp",{useUnifiedTopology: true,useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended:true}));

var Campground = require("./models/campgrounds"), seedDB= require("./seed");

app.set("view engine", "ejs");
//
console.log("before seeding");
seedDB();
console.log("after seeiding");



app.get("/",function(req,res){
    
    res.render('startPage.ejs');
    
})

app.get("/campground",function(req,res){
    
    Campground.find(function(err,allCampGrounds){
        if(err){
            console.log(err);
        }
        else{
            //console.log(allCampGrounds);
            console.log("alll camps");
            res.render('campground.ejs', {campgrounds:allCampGrounds});
        }
    });
   
    
})

app.post("/campground",function(req,res){
    var newCamp ={
        name:req.body.name,
        image:req.body.url,
        description:req.body.description
    }
    //campgrounds.push(newCamp);
    Campground.create(newCamp,function(err,camp){
        if(err){
            console.log(err);
        }
        else{
            console.log(camp);
            console.log("added new camp");
        }
    })
    console.log("In the post methods");
    res.redirect("/campground");
})



app.get("/campground/new",function(req,res){
    
    
    res.render("new.ejs");
    
})

app.get("/campground/:id",function(req,res){
    console.log("in get of id");
    Campground.findById(req.params.id,function(err,camp){
       if(err){
           console.log(err);
       } 
       else{
           console.log("find by id ");
           console.log(camp);
           res.render("show.ejs",{camp:camp})
       }
        
    });
    
    
    
});

app.listen(process.env.PORT,process.env.IP,function(){
    
    console.log("The Yelp camp server has started!!");
 
})