//try this first
function add1(){
    var x = 1;
    var f = function(y){
        return x + y;
    };
    return f(3);
}
console.log(add1());

//try this:
//var add = function(){
//    var x = 1;
//    var f = function(y){
//        return x + y;
//    };
//    return f;
//};
//var g = add();
//console.log(g(2));

//try this:
var add = function(x){
    var f = function(y){
        return x + y;
    };
    return f;
};
var addThree = add(3);
console.log(addThree(10));