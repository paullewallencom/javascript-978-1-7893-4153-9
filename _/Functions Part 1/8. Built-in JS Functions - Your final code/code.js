//prompt
//var x = prompt("Please input your age:");
//console.log(x);

//alert
//window.alert("Hello!");

//eval
eval("var a = 1;");
console.log(a);

//time functions
var x = 0;
function count(){
    console.log(x);
    x ++;
    if(x == 10){
        clearInterval(counter);
    }
}
//setInterval
var counter = setInterval(count, 1000);

//setTimeout
setTimeout(function(){
   console.log("I've been waiting for 3 seconds!") 
}, 3000);