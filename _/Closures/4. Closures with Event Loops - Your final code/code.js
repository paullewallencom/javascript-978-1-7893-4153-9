//for(var i = 0; i < 3; i ++){
//    document.getElementById(i).onclick = function(){
//        console.log(i);
//    }
//}

//how the for loop is run:
//Global EC
//i = 0
//document.getElementById(0).onclick = function(){console.log(i);}
//i = 1
//document.getElementById(1).onclick = function(){console.log(i);}
//i = 2
//document.getElementById(0).onclick = function(){console.log(i);}
//i = 3
//New EC for function(){console.log(i);}

for(var i = 0; i < 3; i ++){
    document.getElementById(i).onclick = f(i);
    
}
function f(j){
    return function(){
        console.log(j);
    }
}

//i = 0
//document.getElementById(0).onclick = f(0);