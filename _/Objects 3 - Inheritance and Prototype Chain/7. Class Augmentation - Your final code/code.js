//superClass 1
function phone1(make, model, warranty, colour){
    this.make = make;
    this.model = model;
    this.warranty = warranty  || 24;
    this.colour = colour;
}
phone1.prototype = {
    extendWarranty: function(x){
        this.warranty += x;
    }
};

//superClass 2
function phone2(warranty){
    this.warranty = warranty;
    this.endWarranty = function(){
        this.warranty = 0;
    }
}

//subClass
function smartPhone(make, model){
    this.make = make;
    this.model = model;
//    this.warranty = 12;
}

//augment function
function augment(receivingClass, givingClass){
    var helperObject = new givingClass();
    for(var i in helperObject){
        if(!(i in new receivingClass())){
            receivingClass.prototype[i] = helperObject[i];
        }
    }
}

////property inside object?
//console.log('extendWarranty' in new phone1());
//
////cycle through properties/methods of an object
//for(var i in new phone1()){
//    console.log(i);
//}
//
////hasOwnProperty
//var myPhone = new phone1();
//console.log(myPhone.hasOwnProperty('extendWarranty'));

//create instance of smartPhone
var mySmartPhone = new smartPhone('Apple', 'Iphone 6');
console.log(mySmartPhone);
printProperties(mySmartPhone);
//augment mySmartPhone using phone1
augment(smartPhone, phone1);
printProperties(mySmartPhone);
console.log(mySmartPhone);
console.log(mySmartPhone.warranty);

//augment mySmartPhone using phone2
augment(smartPhone, phone2);
printProperties(mySmartPhone);

function printProperties(o){
    console.log('Properties and methods: ')
    for(var i in o){
        console.log(i);
    }
}









