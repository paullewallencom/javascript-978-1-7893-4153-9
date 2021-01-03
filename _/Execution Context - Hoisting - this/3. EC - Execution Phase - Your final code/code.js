var x = 'Hi';

logHello();
logHi();
logHiHello();
logBye();

function logHello(){
    console.log('Hello');
}

function logHi(){
    console.log(x);
    var y;
}

function logHiHello(){
    logHi();
    logHello();
}

function logBye(){
    var z = 1;
    function fNotGlobal(){
        console.log('Bye');
    }
    fNotGlobal();
}