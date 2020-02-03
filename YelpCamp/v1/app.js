var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));


var campgrounds =[
                        {
                            'name' : 'Tosh Valley 1',
                            'image':'https://www.photosforclass.com/download/pixabay-4756774?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F52e7d0454d55a814f6da8c7dda793f7f1636dfe2564c704c7d2f78d3974bc35a_960.jpg&user=worldvashemudomu'
                            
                        },
                        {
                            'name' : 'Tosh Valley 2',
                            'image':'https://www.photosforclass.com/download/pixabay-1851092?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e8d0424a5bae14f6da8c7dda793f7f1636dfe2564c704c7d2f78d3974bc35a_960.jpg&user=Pexels'
                        },
                        {
                            'name' : 'Tosh Valley 3',
                            'image':'https://www.photosforclass.com/download/pixabay-4522970?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F52e5d7414355ac14f6da8c7dda793f7f1636dfe2564c704c7d2f78d3974bc35a_960.jpg&user=Ben_Frieden'
                        },
                        {
                            'name' : 'Tosh Valley 1',
                            'image':'https://www.photosforclass.com/download/pixabay-4756774?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F52e7d0454d55a814f6da8c7dda793f7f1636dfe2564c704c7d2f78d3974bc35a_960.jpg&user=worldvashemudomu'
                            
                        },
                        {
                            'name' : 'Tosh Valley 2',
                            'image':'https://www.photosforclass.com/download/pixabay-1851092?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e8d0424a5bae14f6da8c7dda793f7f1636dfe2564c704c7d2f78d3974bc35a_960.jpg&user=Pexels'
                        },
                        {
                            'name' : 'Tosh Valley 3',
                            'image':'https://www.photosforclass.com/download/pixabay-4522970?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F52e5d7414355ac14f6da8c7dda793f7f1636dfe2564c704c7d2f78d3974bc35a_960.jpg&user=Ben_Frieden'
                        },
                        {
                            'name' : 'Tosh Valley 1',
                            'image':'https://www.photosforclass.com/download/pixabay-4756774?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F52e7d0454d55a814f6da8c7dda793f7f1636dfe2564c704c7d2f78d3974bc35a_960.jpg&user=worldvashemudomu'
                            
                        },
                        {
                            'name' : 'Tosh Valley 2',
                            'image':'https://www.photosforclass.com/download/pixabay-1851092?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F57e8d0424a5bae14f6da8c7dda793f7f1636dfe2564c704c7d2f78d3974bc35a_960.jpg&user=Pexels'
                        },
                        {
                            'name' : 'Tosh Valley 3',
                            'image':'https://www.photosforclass.com/download/pixabay-4522970?webUrl=https%3A%2F%2Fpixabay.com%2Fget%2F52e5d7414355ac14f6da8c7dda793f7f1636dfe2564c704c7d2f78d3974bc35a_960.jpg&user=Ben_Frieden'
                        }
        
        
        ]

app.get("/",function(req,res){
    
    res.render('startPage.ejs');
    
})

app.get("/campground",function(req,res){
    
    
    res.render('campground.ejs', {campgrounds:campgrounds});
    
})

app.post("/campground",function(req,res){
    var newCamp ={
        'name':req.body.name,
        'image':req.body.url
    }
    campgrounds.push(newCamp);
    console.log("In the post methods");
    res.redirect("/campground");
})

app.get("/campground/new",function(req,res){
    
    
    res.render("new.ejs");
    
})

app.listen(process.env.PORT,process.env.IP,function(){
    
    console.log("The Yelp camp server has started!!");
    
})