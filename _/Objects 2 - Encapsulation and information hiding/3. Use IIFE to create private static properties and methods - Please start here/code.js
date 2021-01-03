var phone = function(newMake, newModel, newWarranty){
    //private properties
    var make, model, warranty;
    //private method
    function validWarranty(key){
        return key == 'password';
    }
    
    
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
    this.setMake(newMake);
    this.setModel(newModel);
    this.setWarranty(newWarranty, 'password');
    
};

var myPhone = new phone('Samsung', 'Galaxy S6', 12);
console.log(myPhone.getWarranty());
myPhone.setWarranty(24, 'password');
console.log(myPhone.getWarranty());
//try this
myPhone.warranty = 36;
console.log(myPhone.getWarranty());