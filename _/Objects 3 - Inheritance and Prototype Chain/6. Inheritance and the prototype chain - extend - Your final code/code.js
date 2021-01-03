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
};
//subClass
function smartPhone(make, model){
    this.make = make;
    this.model = model;
}

function extend(childClass, parentClass){
    childClass.prototype = new parentClass('Samnsung', 'S6', 12, 'grey');
    childClass.prototype.constructor = childClass;
}

extend(smartPhone, phone);

var myPhone = new phone();
var mySmartPhone = new smartPhone('Apple', 'Iphone 6');
console.log(mySmartPhone);
console.log(mySmartPhone.warranty);
mySmartPhone.extendWarranty(12);
console.log(mySmartPhone.warranty);


