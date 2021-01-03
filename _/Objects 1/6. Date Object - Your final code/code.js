//current date and time
var x = new Date();
console.log(x);

//choosing a specific date and time
//year, month, date, hours, minutes, seconds, milliseconds; if 2 arguments are provided, the rest is considered 0 or 1 (day)
x = new Date(2017, 11, 15, 10);
console.log(x);

//use an integer value representing the number of milliseconds since 01/01/1970 00:00:00 UTC.
x = new Date(2049494944595);
console.log(x);

//opposite gor from date to numeric value
console.log(x.getTime());

//numeric value corresponding to the current time
var y = Date.now();
console.log(y);

//return the day of the week for a specific date
var z = new Date();
console.log(z);
console.log(z.getDay());
//[0,1,2,3,4,5,6]
//[Sun,Mon,...,Sat]

//var year = prompt("Please say which year you were born:");
//var month = prompt("Please say which month you were born:");
//var day = prompt("Please say which day you were born:");
//z = new Date(year, month, day);
//var day = z.getDay();
//var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//console.log("You were born on a " + days[day]);

//create a new date object
var now = new Date(2017, 5);
console.log(now);
console.log(now.getHours());
now.setMonth(9);
now.setDate(15);
console.log(now);


//using built-in methods
var startTime = new Date();
for(var i = 0; i < 1000; i ++){
    console.log(i);
}
var endTime = new Date();
var elapsedTime = endTime.getTime() - startTime.getTime();//elapsed time in milliseconds
console.log(elapsedTime);
