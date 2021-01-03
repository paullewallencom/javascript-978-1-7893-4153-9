//var phone = function(make, model, warranty){
//    this.make = make;
//    this.model = model;
//    this.warranty = warranty || 12;
//};
//phone.prototype = {
//    extendWarranty: function(x){
//        this.warranty += x;
//    }
//};

//var myPhone = new phone('Apple', 'Iphone 6');
//myPhone.make = '';
//create setters and getters
var phone = function(make, model, warranty){
    this.setMake(make);
    this.setModel(model);
    this.setWarranty(warranty);
};
phone.prototype = {
    extendWarranty: function(x){
        this.warranty += x;
    },
    setMake: function(make){
        this.make = make;
    },
    setModel: function(model){
        this.model = model;
    },
    setWarranty: function(warranty){
        this.warranty = warranty || 12;
    },
    getMake: function(){
        return this.make;
    },
    getModel: function(){
        return this.model;
    },
    getWarranty: function(){
        return this.warranty;
    }
};

var myPhone = new phone('Apple', 'Iphone 6');
console.log(myPhone);
myPhone.setWarranty(24);
console.log(myPhone);
console.log(myPhone.getWarranty());
myPhone.warranty = 6;
console.log(myPhone);

