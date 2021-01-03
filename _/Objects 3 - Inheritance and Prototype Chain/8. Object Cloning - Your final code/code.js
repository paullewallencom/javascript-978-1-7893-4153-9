//create a function which return an empty clone of an object without using Object.create()


function clone(object){
    var C = function(){};
    C.prototype = object;
    return new C();
}

var phone1 = {
    make: 'Apple',
    model: 'Iphone 6',
    warranty: 12,
    extendWarranty: function(x){
        this.warranty += x;
    }
};

var phone2 = clone(phone1);
console.log(phone2);
console.log(phone2.make);
console.log(phone2.warranty);
phone2.extendWarranty(12);
console.log(phone2.warranty);

for (var i in phone2){
    console.log(i);
}
