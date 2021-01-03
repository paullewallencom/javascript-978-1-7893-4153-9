//generic object constructor
var myPhone = new Object();
//same is if wrote
//var myPhone = {};

myPhone.make = "Samsung";
myPhone.model = "Galaxy S6";
myPhone.warranty = 12;
myPhone.colour = "black";
myPhone.warranty = 0;
console.log(myPhone);

//Constructors
function phone(make, model, warranty, colour){
    this.make = make;
    this.model = model;
    this.warranty = warranty;
    this.colour = colour;
}

//let's build a phone
var myNewPhone = new phone("Apple", "Iphone 5", 12, "black");
console.log(myNewPhone);
//add a new property
myNewPhone.condition = "like new";
console.log(myNewPhone);

//let's build another phone
var myOtherPhone = new phone("Apple", "Iphone 4", 12, "black");
console.log(myOtherPhone);

//add a condition property to all phones
phone.prototype.ring = function(){
        console.log("beep beep beep!");
};
phone.prototype.extendWarranty = function(x){
        this.warranty += x;
};
phone.prototype.condition = "new";

//let's create another phone
var myBrothersPhone = new phone("Samsung", "Galaxy S6", 12, "black");
console.log(myBrothersPhone);
console.log(myBrothersPhone.condition);
console.log(phone.prototype);
myBrothersPhone.ring();
