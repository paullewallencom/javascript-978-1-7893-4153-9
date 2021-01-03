//primitives
var x = 1;
var y = 1;
console.log(x == y);

//objects
var myPhone = {
    make: "Apple",
    model: "Iphone 6"
}
var myPhone2 = {
    make: "Apple",
    model: "Iphone 6"
}
console.log(myPhone == myPhone2);

var myPhone3 = myPhone;
console.log(myPhone == myPhone3);

var namePrimitive1 = 'Mark';
var namePrimitive2 = 'Mark';
var nameObject1 = new String('Mark');
var nameObject2 = new String('Mark');

console.log(typeof namePrimitive1);
console.log(typeof nameObject1);

//check equality 
console.log(namePrimitive1 == namePrimitive2);
console.log(nameObject1 == nameObject2);