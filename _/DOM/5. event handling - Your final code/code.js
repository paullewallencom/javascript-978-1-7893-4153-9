var f1 = function(){
    console.log("You clicked on button1.")
};
var f2 = function(){
    console.log("Button1 clicked");
}

var button1 = document.getElementById("button1");
//button1.onclick = f1;
//button1.onclick = f2;

button1.addEventListener("click", f1);
button1.addEventListener("click", f2);

button1.removeEventListener("click", f2);

//button2
var button2 = document.getElementById("button2");
button2.ondblclick = function(){
    var p1 = document.getElementById("p1");
    p1.style.backgroundColor = "lightgreen";
};

//paragraph2
var p2 = document.getElementById("p2");
p2.onclick = function(){
    this.style.backgroundColor = "mediumpurple";
};

//Let's have fun
//setInterval
//0 200: 100 * sin(x): 0 200
var title = document.getElementById("title");
title.onclick = function(){
    this.style.position = "fixed";
    var x = 0;
    var a = setInterval(function(){
        x ++;
        title.style.top = 100 + 100 * Math.sin(x / 10) + "px";
        title.style.left = 100 + 100 * Math.sin(4 * x/ 10) + "px";
    }, 100);
    
};











