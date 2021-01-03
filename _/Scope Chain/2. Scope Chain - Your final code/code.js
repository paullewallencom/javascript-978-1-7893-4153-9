//global scope
var x = 0;
f1();
console.log(this);

function f1(){
    var x = 1;
    var y1 = 'f1 scope';
    console.log(x);
    console.log(this);
    f2();
    function f2(){
        var currentScope = 2;
        var y2 = 'f2 scope';
        console.log(x);
        console.log(this);
        f3();
        function f3(){
            var currentScope = 3;
            var y3 = 'f3 scope';
            console.log(x);
            console.log(this);
            //climb up the scope chain to get y1, y2, y3
            console.log(y1);
            console.log(y2);
            console.log(y3);
            
        }
    }
}