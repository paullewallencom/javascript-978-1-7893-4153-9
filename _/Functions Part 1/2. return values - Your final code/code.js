//returns undefined
function greeting(){
    console.log('Hello!');
}
console.log(greeting);
greeting();

//returns a value
function sum(a, b){
    return a + b;
}
var x = sum(3, 7);
console.log(x);

//return a function
function greet(x){
    return function(name){
        console.log(x + " " + name + "!");
    }
}

greet('Hello')('Mike');
greet('Hi')('John');

console.log(greet('Hello'));