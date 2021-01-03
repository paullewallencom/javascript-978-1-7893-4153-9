var myPhone = {
    make: "Apple",
    model: "Iphone 7",
    warranty: 12,
    colour: "gold",
    ring: function(){
        console.log("beep beep beep!")
    }
};

console.log(myPhone.make);

console.log(myPhone["colour"]);

var x = "make";
console.log(myPhone.x);//undefined

console.log(myPhone[x]);

//create a function that returns a random property of myPhone

function getProperty(){
    var properties = ["make", "model", "warranty", "colour"];
    var y = 4 * Math.random(); //btw 0 and 4
    //Math.floor: 3.6->3, 2.4->2
    y = Math.floor(y);
    var property = properties[y];
    return property + ": " + myPhone[property];
}
console.log(getProperty());