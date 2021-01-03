//function statement/declaration
function greet(){
    console.log("Hello!");
}
greet();

//function expression
var greet2 = function(){
    console.log("Hi!");
}();
console.log(greet2);

(function(){
    console.log("Hi!");
})();

(function(){
    console.log("Hi!");
}());