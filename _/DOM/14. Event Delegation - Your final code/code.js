//html elements
var div = document.querySelector("div");
var paragraphs = document.querySelectorAll('p');
console.log(paragraphs);

//functions
function logHello(){
    console.log('Hello!');
}

//attaching events to html elements
//for( var i = 0; i < paragraphs.length; i ++){
//    paragraphs[i].addEventListener("click", logHello);
//}

//adding new paragraph
var paragraph = document.createElement("p");
paragraph.innerHTML = "Paragraph 4.";
div.appendChild(paragraph);

//Get the parent element, add a click lister
div.addEventListener("click", function(event){
    if(event.target && event.target.nodeName == "P"){
        //we found a paragraph
        console.log(event.target.innerHTML + ' clicked!');
    }
});

//adding new paragraph
var paragraph5 = document.createElement("p");
paragraph5.innerHTML = "Paragraph 5.";
div.appendChild(paragraph5);