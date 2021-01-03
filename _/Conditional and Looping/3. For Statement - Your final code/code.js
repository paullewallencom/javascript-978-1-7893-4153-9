for(var i = 0; i < 5; i++){
    console.log(i);
}

for(var j = 7; j > -1; j--){
    console.log(Math.pow(j, 2));
}

//loop through an array
var shoppingList = ["bread", "milk", "eggs"];

//item item number: name
for(i = 0; i < shoppingList.length; i++){
    console.log("item " + i + ": " + shoppingList[i] + ".");
}

//loop through an array and change it
var numberList = [1, 2, 3];
for(i = 0; i < numberList.length; i++){
    numberList[i] += 10;
}
console.log(numberList);
