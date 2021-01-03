/* Iteration - hasOwnProperty */
function phone(make, model, warranty, color){
    this.make = make;
    this.model = model;
    this.warranty = warranty ||12;
    this.color = color;
    this.endWarranty = function(){
        this.warranty = 0;
    };
}
phone.prototype = {
    extendWarranty: function (x) {
        this.warranty += x;
    }
}

var myPhone = new phone('Apple', 'Iphone 7');
console.log(myPhone);

//add a method returnProperties to the phone prototype which returns the list of own properties (including methods) of an instance as a list of two Arrays: one Array for properties and one Array for values.

phone.prototype.returnProperties = function(){
    var properties = [];
    var values = [];
    for(var key in this){
        if(this.hasOwnProperty(key) && typeof this[key] !== 'function'){
            properties.push(key);
            values.push(this[key]);
        }
    }
    return [properties, values];
};
console.log(myPhone.returnProperties());