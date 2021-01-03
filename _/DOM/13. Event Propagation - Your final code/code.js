//html elements
var div = document.querySelector("div");
var p = document.querySelector("p");
var span = document.querySelector("span");

//functions
function logDiv(){
    console.log('Div!');
}
function logP(){
    console.log('Paragraph!');
}
function logSpan(){
    console.log('Span!');
}

//Event handlers
div.addEventListener("click", logDiv, true);
p.addEventListener("click", logP, true);
span.addEventListener("click", logSpan);