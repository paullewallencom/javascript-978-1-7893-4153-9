var cars = [];
//for( var i = 0; i < 3; i ++){
//    cars.push(function(){
//        console.log(i);
//    });
//}
//cars[0]();

//let's fix it
function f(j){
    return function(){
        console.log(j);
    }
}

for( var i = 0; i < 3; i ++){
    cars.push(f(i));
}
cars[0]();
cars[1]();

for( var i = 0; i < 3; i ++){
    setTimeout(f(i), 3000);
}