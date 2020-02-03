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
//routes
var commentRoutes    = require("./routes/comments"),
    campgroundRoutes = require("./routes/campground"),
    indexRoutes      = require("./routes/index")

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


app.use("/", indexRoutes);
app.use("/campground", campgroundRoutes);
app.use("/campground/:id/comments", commentRoutes);





app.listen(process.env.PORT,process.env.IP,function(){
    
    console.log("The Yelp camp server has started!!");
    
})