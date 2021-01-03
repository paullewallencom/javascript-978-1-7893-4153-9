//superClass
function phone(make, model, warranty, colour){
    this.make = make;
    this.model = model;
    this.warranty = warranty;
    this.colour = colour;
}
phone.prototype = {
    extendWarranty: function(x){
        this.warranty += x;
    }
}
//subClass
function smartPhone(make, model){
    this.make = make;
    this.model = model;
}

//subClass instance
var myPhone = new smartPhone('Apple', 'Iphone 7');
console.log(myPhone);
console.log(smartPhone.prototype);
console.log(myPhone instanceof smartPhone);
console.log(myPhone instanceof Object);

//add one method to the prototype and thus to all objects of the class smartPhone
smartPhone.prototype.endWarranty = function(){
    this.warranty = 0;
};
myPhone.endWarranty();
console.log(myPhone);

//inherit everything from the superClass phone: constructor content only
//smartPhone.prototype.helper = phone;
//smartPhone.prototype.helper('Sumsung', 'S6', 12, 'grey');

//inherit everything from the superClass phone
smartPhone.prototype = new phone('Samsung', 'S6', 12, 'grey');
smartPhone.prototype.constructor = smartPhone;

//new instance of smartPhone
var myPhone2 = new smartPhone('Apple', 'Iphone 7');
console.log(myPhone2.colour);
console.log(myPhone2.warranty);
myPhone2.extendWarranty(12);
console.log(myPhone2.warranty);

//is the constructor still there
console.log(smartPhone.prototype);

