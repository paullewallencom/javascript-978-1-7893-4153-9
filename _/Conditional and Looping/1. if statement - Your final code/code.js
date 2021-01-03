var balance = 40;
var price = 50;
if(price <= balance){
    console.log('payment successful!');
    balance -= price;
}else{
    console.log('You don\'t have enough funds!');
}

var speed = 30;// ...40...70...

if(speed > 70){
    console.log("You are going too fast!");
}else if(speed < 40){
    console.log("You are going too slow!");
}else{
    console.log("Your speed is fine!");
}

