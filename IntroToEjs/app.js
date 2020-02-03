var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

var posts = [
            {
                "title":"ccricekt",
                "author":"praveen",
                "comment":"boring"
                },{
                    "title":"football",
                "author":"praveen",
                "comment":"boring"
                },{ 
                    "title":"badminton",
                "author":"praveen",
                "comment":"boring"
                    
                }
    ]

app.get("/",function(request,response){
    
    console.log("here in the opening page");
    
    //response.render("start.ejs");
});

app.get("/posts",function(request, response) {
    
    response.render("post.ejs",{posts:posts});
})

app.get("/:name",function(request,response){
    
    var name = request.params.name;
    
    //console.log("here in the opening page");
    //console.log(name);
    response.render("start.ejs",{nameOne:name});
});

app.post("/posted.ejs",function(request,response){
    console.log(request.body);
    var newPost = {
        "author":request.body.author,
        "title":request.body.post,
        "comment":request.body.comment
    }
    posts.push(newPost);
   console.log("In posted");
   response.redirect("/posts");
});

app.listen(process.env.PORT,process.env.IP,function(){
    
   console.log("Connected to the Server!!");
    
});