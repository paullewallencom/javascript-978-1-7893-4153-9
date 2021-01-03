//a design pattern

var factorial = function(n){
    if(n == 1){
        return 1;
    }else{
        return n * factorial(n-1);
    }
};

console.log(factorial(3));//1*2*3
console.log(factorial(4));//1*2*3*4
//factorial(n) = n * factorial (n-1)

//factorial(n) = n * (n-1) * factorial (n-2) * ... * factorial (1)