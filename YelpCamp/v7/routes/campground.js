var express = require("express")
var router = express.Router();
var Campground = require("../models/campgrounds")


router.get("/",function(req,res){
    
    Campground.find({},function(err,allCampGrounds){
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

router.post("/",function(req,res){
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



router.get("/new",isLoggedIn,function(req,res){
    
    
    res.render("campground/new.ejs");
    
})

router.get("/:id",function(req,res){
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

function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
       return  next();
    }
     res.redirect("/login");
}


module.exports = router;