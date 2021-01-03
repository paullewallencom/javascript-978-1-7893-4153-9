//string
var job = 'web developer';
var town = "London";

//escape the normal process and treat quotation marks as punctuation marks.
var greeting = 'Hello, I\'m glad to see you';

//special characters
//new line
var quote = "This is \n a new line";
console.log(quote);
//tab
quote = "Here is \t a tab";
console.log(quote);

//Concatenation
var firstname = 'Bill';
var lastname = 'Gates';
var fullname = firstname + " "  + lastname + ".";
console.log(fullname);


var s = 'apple';
//methods work with the primitive type and object type. Will be covered in detail later
console.log(s.length);
console.log(s.charAt(2));
console.log(s.indexOf('l'));
console.log(s.lastIndexOf('p'));