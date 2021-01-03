var n;
function f(x){
    n = function(){
        return x;
    };
    x ++;
}

f(123);
console.log(n());

//Global EC: 
    //n = undefined
    //f
//f EC:
    //n = function(){return x}
    //x = 124
//n EC:
    //x = 124