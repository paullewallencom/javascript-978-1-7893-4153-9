//preventDefault
var a = document.querySelector("a");
a.addEventListener("click", fPreventDefault);
function fPreventDefault(event){
//    console.log(event);
    event.preventDefault();
}