//create a function which takes an object and returns the list of own and inherited properties/methods and values of the object: climb up the prototype chain. Return format: list of two arrays

function getAllProperties(obj){
    var properties = [];
    var values = [];
    
    do{
        var ownProperties = Object.getOwnPropertyNames(obj);
        ownProperties.forEach(function(prop){
            if(properties.indexOf(prop) == -1){
                properties.push(prop);
                values.push(obj[prop]);
            }
        });
    }while(obj = Object.getPrototypeOf(obj))
    
    
    
    return [properties, values];
}

//Object prototype chain
var myObject = new Object();
console.log(myObject);
var object1 = Object.getPrototypeOf(myObject);
console.log(object1);
var object2 = Object.getPrototypeOf(object1);
console.log(object2);

//Array prototype chain
var myArray = new Array();
console.log(myArray);
var array1 = Object.getPrototypeOf(myArray);
console.log(array1);
var array2 = Object.getPrototypeOf(array1);
console.log(array2);
var array3 = Object.getPrototypeOf(array2);
console.log(array3);

console.log(getAllProperties(new Array()));
console.log(getAllProperties(new Object()));