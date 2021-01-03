var x = 0;
while(x < 5){
    console.log(x);
    x ++;
}


var balance = prompt("How much would you like to spend in our shop?");
var itemNumber = 0;
while(balance > 0){
    //pick a random item
    var itemPrice = Math.floor(1 + 100*Math.random());
    //can we afford the item?
    if(itemPrice <= balance){
        //buy the item
        itemNumber += 1;
        //update balance
        balance -= itemPrice;
        //print the new balance and the purchase amount
        console.log(itemNumber + ". Item Price: $" + itemPrice + ".");
        console.log("Balance: $" + balance + ".");
    }
}