var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/sample",{
useUnifiedTopology: true,
useNewUrlParser: true
});
//mongoose.set('useUnifiedTopology', true);

var carSchema = new mongoose.Schema({
        
        name:String,
        age:Number,
        model:String
    
});

var Car = mongoose.model("Car",carSchema);
var maruti = new Car({
    name:"Maruti",
    age:5,
    model:"800"
});

maruti.save(function(err,car){
    if(err){
        console.log(err);
    }
    else{
        console.log(car);
    }
    
});
Car.create({
    name:"ferrari",
    age:5,
    model:"f599"
    
},function(err,cars){
    if(err){
        console.log(err);
    }
    else{
        console.log(cars);
    }
})

Car.find({},function(err,cars){
    if(err){
        console.log(err);
    }
    else{
        console.log("CarS");
        console.log(cars);
    }
    
})
Car.remove({name:"maruti"},function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("delete all maruti");
    }
});