// Check if a number is prime or not

//1. Prompt the user to input a whole number

//2. if the user does not provide a whole number, keep prompting the user to input a valid number until they provide one

var number;
do {
    number = prompt('Please input a whole number: ');
    number = parseInt(number);
}while(!Number.isInteger(number));

//3. if the provided number is prime: Print the number is prime

//4. Otherwise print the number is not prime and print its smallest positive divisor other than 1.

isPrime(number);
function isPrime(n){
    if(n <= 1){
        console.log(n + ' is not a prime number!');
    }else if (n == 2){
        console.log(n + ' is a prime number!');
    }else{
        var i = 2;//2,3,4,5,...,n-1
        while(i < n && (n % i != 0)){
            i ++;
        }
        if(i == n){
            console.log(n + ' is a prime number!');
        }else{
            console.log(n + ' is not a prime number! It can be divided by ' + i + '.');
        }
    }
}

