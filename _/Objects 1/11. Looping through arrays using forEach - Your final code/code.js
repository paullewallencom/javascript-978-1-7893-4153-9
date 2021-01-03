var shoppingList = ['orange', 'apple', 'banana'];
console.log(shoppingList);

for(var i = 0; i < shoppingList.length; i ++){
    console.log(shoppingList[i]);
}

shoppingList.forEach(function(element){
    console.log(element);
});

//ES6
//for (element of shoppingList){
//    console.log(element);
//}