var myString1 = "Javascript";
var myString2 = " is awesome!";
var myString3 = "Java";
var myString4 = "I really enjoy learning Javascript. It is so fun!";

//character at position 0 
console.log(myString1.charAt(0));

//concatenate two strings
console.log(myString1.concat(myString2));

//does myString1 include myString3?
console.log(myString1.includes(myString3));

//index of a
console.log(myString1.indexOf('a'));
console.log(myString1.lastIndexOf('a'));

//to uppercase or lowercase
console.log(myString4.toUpperCase());
console.log(myString4.toLowerCase());

//convert a string object to a string primitive
var y = new String('Mark');
console.log(typeof y);
console.log(y);
y = y.toString();
console.log(y);
console.log(typeof y);