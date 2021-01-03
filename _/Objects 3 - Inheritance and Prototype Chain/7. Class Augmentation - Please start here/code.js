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