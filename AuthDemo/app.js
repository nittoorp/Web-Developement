var express         =   require("express"),
    app             =   express(),
    mongoose        =   require("mongoose"),
    passport        =   require("passport"),
    bodyParser      =   require("body-parser"),
    localStrategy   =   require("passport-local"),
   // passportLocal   =   require("passport-local-mongoose"),
    User            =   require("./models/user")
    
mongoose.connect("mongodb://localhost/AuthDemo",{useUnifiedTopology: true,useNewUrlParser: true});
app.use(bodyParser.urlencoded({extended:true}));
app.use(require("express-session")({
    secret:"hello",
    resave:false,
    saveUninitialized:false
}));
passport.use(new localStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.set("view engine","ejs");
app.use(passport.initialize());
app.use(passport.session());
// shwo the landing page
app.get("/",function(req,res){
    console.log("landing page");
    res.render("home");
})
//show the page
app.get("/secret",isLoggedIn,function(req,res){
    res.render("secret");
})
// shwo the registration form 
app.get("/register",function(req,res){
    res.render("register");
})
// to post from the form to  this route
app.post("/register",function(req,res){
    
    User.register(new User({username:req.body.username}), req.body.password, function(err,user){
        
        if(err){
            console.log(err);
            res.render("register");
        }
        passport.authenticate("local")(req,res,function(){
            
            res.render("secret");
        });
    });
});

// for login page
app.get("/login",function(req, res) {
    res.render("login");
})

//middleware before the callback  this will run that swhy middleware
app.post("/login", passport.authenticate("local",{
    successRedirect:"/secret",
    failureRedirect:"/login"
}),function(req,res){
    
});
app.get("/logout",function(req,res){
    req.logout();
    res.redirect("/");
})

function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        next();
    }
    else{
        res.redirect("/login");
    }
}

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Started the auth server");
})