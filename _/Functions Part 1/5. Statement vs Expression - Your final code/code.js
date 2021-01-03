//function statement
console.log(sum(3,5));
function sum(a, b){
    return a + b;
}


//function expression
var greet = function(name){
    console.log("Hello " + name + "!");
};
greet("Mark");

function sum2(myFunction, myArray){
    var result = 0;
    for(var i = 0; i < myArray.length; i ++){
        result += myFunction(myArray[i]);
    }
    return result;
}

var y = sum2(function(x){
    return x * x;
}, [1, 2, 3]);
console.log(y);