var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Yelp_Camp",{useUnifiedTopology: true,useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended:true}));
var seedDB = require("./seed");
seedDB();
app.use(express.static(__dirname + "/public"));
var Campground = require("./models/campgrounds");
var Comment = require("./models/comments");

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
            res.render('campground/campground.ejs', {campgrounds:allCampGrounds});
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
    
    
    res.render("campground/new.ejs");
    
})

app.get("/campground/:id",function(req,res){
    console.log("in get of id");
    Campground.findById(req.params.id).populate("comments").exec(function(err, camp){
       if(err){
           console.log(err);
       } 
       else{
           console.log("find by id ");
           //console.log(camp);
           res.render("campground/show.ejs",{camp:camp})
       }
        
    });
});

app.get("/campground/:id/comments/new",function(req,res){
    Campground.findById(req.params.id,function(err,camp){
        if(err){
            console.log(err);
        }
        else{
            res.render("comment/new.ejs",{camp,camp}); 
        }
    });
});
app.post("/campground/:id/comments",function(req,res){
    Campground.findById(req.params.id,function(err,camp){
        if(err){
            console.log(err);
        }
        else{
           Comment.create(req.body.comment,function(err,comment){
              if(err){
                  console.log(err);
              } 
              else{
                  //console.log(comment);
                  camp.comments.push(comment);
                  camp.save();
                  console.log(camp);
                  res.redirect("/campground/"+camp._id);
              }
           });
        }
    });
});
app.listen(process.env.PORT,process.env.IP,function(){
    
    console.log("The Yelp camp server has started!!");
    
})