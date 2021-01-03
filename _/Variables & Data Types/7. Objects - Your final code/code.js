//Objects Quick overview

//object = collection of properties
var myPhone = {
    make: "Apple",
    model: "Iphone 7",
    warranty: 12,
    colour: "gold"
}

console.log(myPhone);
console.log(myPhone.model);

//change property
myPhone.model = "Iphone 6";
console.log(myPhone);

//add new property
myPhone.storage = "64 Go";
console.log(myPhone);

//delete property
delete myPhone.storage;
console.log(myPhone);

//now let's do something interesting
var x = 1;
var y = x; //y stores value 1
x = 2;
console.log(y);

//now let's do that with object
var myOtherPhone = myPhone;
console.log(myOtherPhone);

//change myPhone
myPhone.color = "grey";
console.log(myPhone);
console.log(myOtherPhone);