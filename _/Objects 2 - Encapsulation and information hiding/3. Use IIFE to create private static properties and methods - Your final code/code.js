var C = function(){
    //private static property
    var numOfPhones = 0;
    //private static method
    function validWarranty(key){
        return key == 'password';
    }
    var phone = function(newMake, newModel, newWarranty){
    //private properties
    var make, model, warranty;
    
    //privileged methods have access to private properties and methods
    this.setMake = function(x){
        make = x;
    };
    this.setModel = function(x){
        model = x;
    };
    this.setWarranty = function(x, key){
        if(validWarranty(key)){
            warranty = x;
        }else{
            console.log('Wrong key!')
        }
    };
    this.getMake = function(){
        return make;
    };
    this.getModel = function(){
        return model;
    };
    this.getWarranty = function(){
        return warranty;
    };
    this.extendWarranty = function(x, key){
        if(validWarranty(key)){
            warranty += x;
        }else{
            console.log('Wrong key!')
        }
    }
    
    //Constructor code
    if(numOfPhones > 2){
        throw new Error('Too many phones!');
    }else{
        numOfPhones ++;
    }
    this.setMake(newMake);
    this.setModel(newModel);
    this.setWarranty(newWarranty, 'password');
    
};
    return phone;
}();

var myPhone = new C('Samsung', 'Galaxy S6', 12);
var myPhone2 = new C('Samsung', 'Galaxy S6', 12);
var myPhone3 = new C('Samsung', 'Galaxy S6', 12);
//var myPhone4 = new C('Samsung', 'Galaxy S6', 12);
console.log(myPhone.getWarranty());
myPhone.setWarranty(24, 'password');
console.log(myPhone.getWarranty());
//try this
myPhone.warranty = 36;
console.log(myPhone.getWarranty());