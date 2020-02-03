var express = require("express")
var router = express.Router({mergeParams:true});
var Campground = require("../models/campgrounds")
var Comment = require("../models/comments")



router.get("/new",isLoggedIn,function(req,res){
    Campground.findById(req.params.id,function(err,camp){
        if(err){
            console.log(err);
        }
        else{
            res.render("comment/new.ejs",{camp,camp}); 
        }
    });
});
router.post("/",isLoggedIn,function(req,res){
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



function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
       return  next();
    }
     res.redirect("/login");
}


module.exports = router;