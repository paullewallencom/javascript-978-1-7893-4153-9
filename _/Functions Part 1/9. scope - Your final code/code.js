//This is an introduction to scope. More details can be found in the advanced sections.

//a is a global variable, it is defined outside all functions
var a = 1;

//a can be accessed from inside a function
function f(x){
    return x + a;
}
console.log(f(2));

//if you defined a again inside a function, then the function will use that one if needed.
function f2(x){
    var a = 2;
    return x + a;
}
console.log(f2(3));

//if a is not found in the scope of the function but found in the parameters then the parameter value is going to be used
function g(a){
    return a + 3;
}
console.log(g(5));

function h(x){
    return x + c;
}
console.log(h(2));//c is undefined
var c = 3;
console.log(h(2)); //2 + 3