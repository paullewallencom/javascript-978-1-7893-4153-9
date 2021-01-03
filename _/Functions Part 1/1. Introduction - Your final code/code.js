//create a function
function greeting(){
    console.log('Hello!');
}
console.log(greeting);
greeting();

//function with a parameter
function greeting2(firstname){
    console.log('Hello ' + firstname + '!');
}
var y = greeting2('Mike');
console.log(y);

//more than one parametr
function sum(a, b){
    return a + b;
}
var x = sum(3, 7);
console.log(x);