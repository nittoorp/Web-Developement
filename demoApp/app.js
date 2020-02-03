var faker = require("faker")

console.log("connected to faker")


var arrayOfProducts = []

for(var i=0;i<10;i++){
    var prod = {
                pNamne : faker.commerce.productName(),
                 price : faker.commerce.price()
                 };
    arrayOfProducts.push(prod);
}
function display(array){
    
   
      for(var i=0;i<array.length;i++){  
        console.log(array[i]['pNamne']+"- $"+array[i]['price']);
        
      }
}

display(arrayOfProducts)