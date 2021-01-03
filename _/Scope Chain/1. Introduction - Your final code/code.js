//global scope vs local scope
var x = 'Hello';

logHi();
logHi2();
logHi3('Hi there!');
logHi3(x);

function logHi(){
    var x = 'Hi';
    console.log(x);
}
function logHi2(){
    console.log(x);
}
function logHi3(x){
    console.log(x);
}