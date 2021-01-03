var shoppingList = ['orange', 'apple', 'banana'];
console.log(shoppingList);

//add an element at the end
var x = shoppingList.push("pear");
console.log(shoppingList);

//pop an element from the end
x = shoppingList.pop();//can also shift or unshift
console.log(shoppingList);

//go to the element of index 1
//remove two elmenets starting from index 1
//replace them with grapes and strawberry
shoppingList.splice(1, 2, "grapes", "strawberry");
console.log(shoppingList);

//return two elements strating from position 0, this returns a new array
x = shoppingList.slice(0, 2);
console.log(x);

//sort an array
shoppingList.sort();
console.log(shoppingList);

//reverse an array
shoppingList.reverse();
console.log(shoppingList);

//map
var addDelicious = function(n){
    return "Delicious " + n;
}
x = shoppingList.map(addDelicious);
console.log(x);

//filter
var numbers = [34, 57, 10, 49, 747, 23];
var testFunction = function(n){
    return n % 3 == 0;
};
x = numbers.filter(testFunction);
console.log(x);

//every
x = numbers.every(testFunction);
console.log(x);
