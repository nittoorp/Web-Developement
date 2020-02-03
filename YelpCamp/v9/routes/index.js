var express = require("express")
var router = express.Router();
var Campground = require("../models/campgrounds");
var User = require("../models/user");
var passport = require("passport");


router.get("/",function(req,res){
    console.log("here in langasdfasdfsd");
    res.render('startPage.ejs');
    
})


// get form for registration
router.get("/register",function(req,res){
    res.render("register");
})

// to post from the form to  this route
router.post("/register",function(req,res){
    var newUser = new User({username:req.body.username})
    User.register(newUser, req.body.password, function(err,user){
        if(err){
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(req,res,function(){
           return res.redirect("/campground");
        });
    });
});


router.get("/login",function(req, res) {
    res.render("login");
})

router.post("/login",passport.authenticate("local",
    {successRedirect:"/campground",
    failureRedirect:"/login"}
    )
    ,function(req, res) {
    //res.send("in login");
})

router.get("/logout",function(req, res) {
    req.logout();
    res.redirect("/campground")
})


function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
       return  next();
    }
     res.redirect("/login");
}


module.exports = router;