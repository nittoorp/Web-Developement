var apirequest = require('request');

apirequest('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1500&type=restaurant&keyword=cruise&key=AIzaSyDbhiX7Yo5hXQMxobqEZ5HGHs0QKYOfffU',function(error, response, body) {
    console.log("Inside request");
    if(!error && response.statusCode==200){
        var parsedData = JSON.parse(body);
        console.log(parsedData["results"][0]["name"]);
    }
    else{
        console.log("Sorry please try again");
    }
});