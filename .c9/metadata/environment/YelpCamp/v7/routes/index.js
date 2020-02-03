{"filter":false,"title":"index.js","tooltip":"/YelpCamp/v7/routes/index.js","undoManager":{"mark":30,"position":30,"stack":[[{"start":{"row":0,"column":0},"end":{"row":5,"column":1},"action":"insert","lines":["function isLoggedIn(req,res,next){","    if(req.isAuthenticated()){","       return  next();","    }","     res.redirect(\"/login\");","}"],"id":1}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":2},{"start":{"row":1,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["",""]},{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"action":"insert","lines":["",""]},{"start":{"row":3,"column":0},"end":{"row":4,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":0,"column":0},"end":{"row":2,"column":49},"action":"insert","lines":["var express = require(\"express\")","var router = express.router();","var Campground = require(\"../models/campgrounds\")"],"id":3}],[{"start":{"row":4,"column":0},"end":{"row":5,"column":0},"action":"insert","lines":["",""],"id":4},{"start":{"row":5,"column":0},"end":{"row":6,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":5,"column":0},"end":{"row":40,"column":2},"action":"insert","lines":["// get form for registration","app.get(\"/register\",function(req,res){","    res.render(\"register\");","})","","// to post from the form to  this route","app.post(\"/register\",function(req,res){","    var newUser = new User({username:req.body.username})","    User.register(newUser, req.body.password, function(err,user){","        if(err){","            console.log(err);","            return res.render(\"register\");","        }","        passport.authenticate(\"local\")(req,res,function(){","           return res.redirect(\"/campground\");","        });","    });","});","","","app.get(\"/login\",function(req, res) {","    res.render(\"login\");","})","","app.post(\"/login\",passport.authenticate(\"local\",","    {successRedirect:\"/campground\",","    failureRedirect:\"/login\"}","    )","    ,function(req, res) {","    //res.send(\"in login\");","})","","app.get(\"/logout\",function(req, res) {","    req.logout();","    res.redirect(\"/campground\")","})"],"id":5}],[{"start":{"row":6,"column":0},"end":{"row":6,"column":3},"action":"remove","lines":["app"],"id":6},{"start":{"row":6,"column":0},"end":{"row":6,"column":6},"action":"insert","lines":["router"]}],[{"start":{"row":11,"column":0},"end":{"row":11,"column":3},"action":"remove","lines":["app"],"id":7},{"start":{"row":11,"column":0},"end":{"row":11,"column":6},"action":"insert","lines":["router"]}],[{"start":{"row":25,"column":0},"end":{"row":25,"column":3},"action":"remove","lines":["app"],"id":8},{"start":{"row":25,"column":0},"end":{"row":25,"column":6},"action":"insert","lines":["router"]}],[{"start":{"row":29,"column":0},"end":{"row":29,"column":3},"action":"remove","lines":["app"],"id":9},{"start":{"row":29,"column":0},"end":{"row":29,"column":6},"action":"insert","lines":["router"]}],[{"start":{"row":37,"column":0},"end":{"row":37,"column":3},"action":"remove","lines":["app"],"id":10},{"start":{"row":37,"column":0},"end":{"row":37,"column":6},"action":"insert","lines":["router"]}],[{"start":{"row":3,"column":0},"end":{"row":3,"column":1},"action":"insert","lines":["v"],"id":11},{"start":{"row":3,"column":1},"end":{"row":3,"column":2},"action":"insert","lines":["a"]},{"start":{"row":3,"column":2},"end":{"row":3,"column":3},"action":"insert","lines":["r"]}],[{"start":{"row":3,"column":3},"end":{"row":3,"column":4},"action":"insert","lines":[" "],"id":12},{"start":{"row":3,"column":4},"end":{"row":3,"column":5},"action":"insert","lines":["p"]},{"start":{"row":3,"column":5},"end":{"row":3,"column":6},"action":"insert","lines":["a"]},{"start":{"row":3,"column":6},"end":{"row":3,"column":7},"action":"insert","lines":["s"]},{"start":{"row":3,"column":7},"end":{"row":3,"column":8},"action":"insert","lines":["s"]}],[{"start":{"row":3,"column":4},"end":{"row":3,"column":8},"action":"remove","lines":["pass"],"id":13},{"start":{"row":3,"column":4},"end":{"row":3,"column":12},"action":"insert","lines":["passport"]}],[{"start":{"row":3,"column":12},"end":{"row":3,"column":13},"action":"insert","lines":[" "],"id":14},{"start":{"row":3,"column":13},"end":{"row":3,"column":14},"action":"insert","lines":["="]}],[{"start":{"row":3,"column":14},"end":{"row":3,"column":15},"action":"insert","lines":[" "],"id":15},{"start":{"row":3,"column":15},"end":{"row":3,"column":16},"action":"insert","lines":["r"]},{"start":{"row":3,"column":16},"end":{"row":3,"column":17},"action":"insert","lines":["e"]},{"start":{"row":3,"column":17},"end":{"row":3,"column":18},"action":"insert","lines":["q"]}],[{"start":{"row":3,"column":15},"end":{"row":3,"column":18},"action":"remove","lines":["req"],"id":16},{"start":{"row":3,"column":15},"end":{"row":3,"column":26},"action":"insert","lines":["require(\"\")"]}],[{"start":{"row":3,"column":24},"end":{"row":3,"column":25},"action":"insert","lines":["["],"id":17}],[{"start":{"row":3,"column":24},"end":{"row":3,"column":25},"action":"remove","lines":["["],"id":18}],[{"start":{"row":3,"column":24},"end":{"row":3,"column":25},"action":"insert","lines":["p"],"id":19},{"start":{"row":3,"column":25},"end":{"row":3,"column":26},"action":"insert","lines":["a"]},{"start":{"row":3,"column":26},"end":{"row":3,"column":27},"action":"insert","lines":["s"]},{"start":{"row":3,"column":27},"end":{"row":3,"column":28},"action":"insert","lines":["s"]},{"start":{"row":3,"column":28},"end":{"row":3,"column":29},"action":"insert","lines":["p"]},{"start":{"row":3,"column":29},"end":{"row":3,"column":30},"action":"insert","lines":["o"]},{"start":{"row":3,"column":30},"end":{"row":3,"column":31},"action":"insert","lines":["r"]},{"start":{"row":3,"column":31},"end":{"row":3,"column":32},"action":"insert","lines":["t"]}],[{"start":{"row":3,"column":34},"end":{"row":3,"column":35},"action":"insert","lines":[";"],"id":20}],[{"start":{"row":2,"column":49},"end":{"row":2,"column":50},"action":"insert","lines":[";"],"id":21}],[{"start":{"row":2,"column":50},"end":{"row":3,"column":0},"action":"insert","lines":["",""],"id":22}],[{"start":{"row":3,"column":0},"end":{"row":3,"column":50},"action":"insert","lines":["var Campground = require(\"../models/campgrounds\");"],"id":23}],[{"start":{"row":3,"column":4},"end":{"row":3,"column":14},"action":"remove","lines":["Campground"],"id":24},{"start":{"row":3,"column":4},"end":{"row":3,"column":5},"action":"insert","lines":["U"]},{"start":{"row":3,"column":5},"end":{"row":3,"column":6},"action":"insert","lines":["s"]},{"start":{"row":3,"column":6},"end":{"row":3,"column":7},"action":"insert","lines":["e"]},{"start":{"row":3,"column":7},"end":{"row":3,"column":8},"action":"insert","lines":["r"]}],[{"start":{"row":3,"column":30},"end":{"row":3,"column":41},"action":"remove","lines":["campgrounds"],"id":25},{"start":{"row":3,"column":30},"end":{"row":3,"column":31},"action":"insert","lines":["u"]},{"start":{"row":3,"column":31},"end":{"row":3,"column":32},"action":"insert","lines":["s"]},{"start":{"row":3,"column":32},"end":{"row":3,"column":33},"action":"insert","lines":["e"]},{"start":{"row":3,"column":33},"end":{"row":3,"column":34},"action":"insert","lines":["r"]}],[{"start":{"row":5,"column":0},"end":{"row":6,"column":0},"action":"insert","lines":["",""],"id":26},{"start":{"row":6,"column":0},"end":{"row":7,"column":0},"action":"insert","lines":["",""]},{"start":{"row":7,"column":0},"end":{"row":8,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":7,"column":0},"end":{"row":12,"column":0},"action":"insert","lines":["app.get(\"/\",function(req,res){","    console.log(\"here in langasdfasdfsd\");","    res.render('startPage.ejs');","    ","})",""],"id":27}],[{"start":{"row":7,"column":0},"end":{"row":7,"column":3},"action":"remove","lines":["app"],"id":28},{"start":{"row":7,"column":0},"end":{"row":7,"column":6},"action":"insert","lines":["router"]}],[{"start":{"row":1,"column":21},"end":{"row":1,"column":27},"action":"remove","lines":["router"],"id":29},{"start":{"row":1,"column":21},"end":{"row":1,"column":27},"action":"insert","lines":["Router"]}],[{"start":{"row":57,"column":1},"end":{"row":58,"column":0},"action":"insert","lines":["",""],"id":30},{"start":{"row":58,"column":0},"end":{"row":59,"column":0},"action":"insert","lines":["",""]},{"start":{"row":59,"column":0},"end":{"row":60,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":60,"column":0},"end":{"row":60,"column":24},"action":"insert","lines":["module.exports = router;"],"id":31}]]},"ace":{"folds":[],"scrolltop":626,"scrollleft":0,"selection":{"start":{"row":60,"column":24},"end":{"row":60,"column":24},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":38,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1580703572312,"hash":"ebec30519dab0d791c0b4af6d6e8502b7a4c5152"}