function car(){
    var make;
    return {
        setMake: function(x){ make = x},
        getMake: function(){return make; }
    }
}

var myCar = car();
console.log(myCar);
console.log(myCar.getMake());
myCar.setMake('Audi');
console.log(myCar.getMake());