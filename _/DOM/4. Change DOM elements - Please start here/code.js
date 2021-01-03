//change HTML content
var p1 = document.getElementById("p1");
p1.innerHTML = "Javascript is fun!";
var p2 = document.getElementById("p2");
p2.innerHTML += " This is number 2."
var p3 = document.getElementById("p3");
p3.textContent = "Some new text!";
var link = document.getElementById("link");
link.setAttribute("href", "http://wikipedia.org");

//change HTML styling
p1.style.backgroundColor = "pink";
//p2.style.display = "none";
p3.style.color = "orange";
p3.style.position = "fixed";
p3.style.top = "100px";
p3.style.left = "300px";

//using the forEach method, add a new brand to each list
var ul = document.getElementsByTagName("ul");//careful, this is an HTML collection not an array.
console.log(ul);
console.log(ul.length);

//add forEach to the prototype of HTMLCollection
HTMLCollection.prototype.forEach = Array.prototype.forEach;
ul.forEach(function(element){
    element.innerHTML += "<li>Ford</li>";
});

var green = document.getElementsByClassName("green");
green.forEach(function(element){
    element.style.color = "blue";
});

//remove a child element
var list1 = document.getElementById("list1");
var item1 = document.getElementById("item1");
list1.removeChild(item1);

//build a method remove which removes any element from the DOM
Element.prototype.remove = function(){
    var parent = this.parentElement;
    parent.removeChild(this);
//    this.parentElement.removeChild(this);
}

list1.remove();





