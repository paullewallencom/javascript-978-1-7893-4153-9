var shoppingList = ['orange', 'apple', 'banana'];
console.log(shoppingList);
console.log(typeof shoppingList);

//array constructor
var shoppingList2 = new Array("bread", " eggs", "milk");
console.log(shoppingList2);

console.log(shoppingList[1]);
//console.log(shoppingList.1);
shoppingList[1] = "pear";
console.log(shoppingList);
delete shoppingList[1];
console.log(shoppingList);
console.log(shoppingList.length);