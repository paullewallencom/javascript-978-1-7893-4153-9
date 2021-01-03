var phone1 = {
    make: 'Apple',
    model: 'Iphone 7',
    warranty: 12,
    colour: 'black',
    extendWarranty: function(x){
        this.warranty += x;
    }
};
console.log(phone1);

var phone2 = Object.create(phone1);
console.log(phone2);
console.log(phone2.make);
console.log(phone2.warranty);
phone2.extendWarranty(12);
console.log(phone2);

console.log(phone2.hasOwnProperty('make'));
console.log(phone1.hasOwnProperty('make'));