var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var seedDB = require("./seed");
var Campground = require("./models/campgrounds");
var Comment = require("./models/comments");
var passport = require("passport"),
localStrategy = require("passport-local"),
User    = require("./models/user"),
passportLocal   =   require("passport-local-mongoose");


seedDB();
app.use(express.static(__dirname + "/public"));

mongoose.connect("mongodb://localhost/Yelp_Camp",{useUnifiedTopology: true,useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended:true}));
//FOR irecptory
app.use(express.static(__dirname+"public/"));

// for express session which carries the session state
app.use(require("express-session")({
    secret:"hello",
    resave:false,
    saveUninitialized:false
}));

// to ser default to ejs
app.set("view engine","ejs");

// init passport and session
app.use(passport.initialize());
app.use(passport.session());

// user authentication from passport
passport.use(new localStrategy(User.authenticate()));

// to serializae and desearialize the user data
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// to check if a user is logged in for every route 
app.use(function(req,res,next){
    res.locals.currentUser=req.user;
    next();
});

app.get("/",function(req,res){
    console.log("here in langasdfasdfsd");
    res.render('startPage.ejs');
    
})

app.get("/campground",function(req,res){
    
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



app.get("/campground/new",isLoggedIn,function(req,res){
    
    
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

app.get("/campground/:id/comments/new",isLoggedIn,function(req,res){
    Campground.findById(req.params.id,function(err,camp){
        if(err){
            console.log(err);
        }
        else{
            res.render("comment/new.ejs",{camp,camp}); 
        }
    });
});
app.post("/campground/:id/comments",isLoggedIn,function(req,res){
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

// get form for registration
app.get("/register",function(req,res){
    res.render("register");
})

// to post from the form to  this route
app.post("/register",function(req,res){
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


app.get("/login",function(req, res) {
    res.render("login");
})

app.post("/login",passport.authenticate("local",
    {successRedirect:"/campground",
    failureRedirect:"/login"}
    )
    ,function(req, res) {
    //res.send("in login");
})

app.get("/logout",function(req, res) {
    req.logout();
    res.redirect("/campground")
})

function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
       return  next();
    }
     res.redirect("/login");
}

app.listen(process.env.PORT,process.env.IP,function(){
    
    console.log("The Yelp camp server has started!!");
    
})