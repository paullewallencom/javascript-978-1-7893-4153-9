console.log(window);

//access an element by ID
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
console.log(typeof p1);
console.log(p1);
console.log(p1.innerHTML);
console.log(p2);

//access a list of elements by tag name
var paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);
console.log(typeof paragraphs);

//access properties of one of those elements in the HTML collection
console.log(paragraphs[1].innerHTML);

//access the first element with a certain characteristic
var firstParagraph = document.querySelector("p");
console.log(firstParagraph);
var firstGreenElement = document.querySelector(".green");
console.log(firstGreenElement);

//access children of a node
var bodyChildren = document.body.children;
console.log(bodyChildren);

//add a new child to the body
var p = document.createElement("p");
console.log(p);
var textNode = document.createTextNode("A new Paragraph.");
p.appendChild(textNode);
console.log(p);
document.body.appendChild(p);
console.log(window.document);

//access a sibling
var sibling = p1.nextElementSibling.nextElementSibling.nextElementSibling;
console.log(sibling);

//access first child or last child
var list = document.querySelector("ul");
console.log(list.firstChild);
console.log(list.lastChild);

//parent element
var bmw = document.querySelector("li");
console.log(bmw.parentNode);