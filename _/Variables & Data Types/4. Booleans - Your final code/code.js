//Booleans
var x = 3;
var y = 5;
var z = x < y;
console.log(z);

//Logical Operators
z = (x < y) && (x > 0);
console.log(z);
z = false || true;
console.log(z);
z = !(x < 10);
console.log(z);

//Operator Precedence
z = false && true || true;//&& stronger
console.log(z);

//Unary Operator
z = x > 2 ? 'Pass' : 'Fail';
console.log(z);

//Logical operators with non booleans
console.log('banana' == false);
z = 'banana' && 'apple';
console.log(z);

var fruit;
console.log(fruit);
console.log(fruit == false);
z = fruit || 'apple';
console.log(z);

console.log('' == false);
z = '' || 'apple';
console.log(z);

z = '' && false;
console.log(z);

z = 0 && false;
console.log(z);