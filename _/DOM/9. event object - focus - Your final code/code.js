var input = document.querySelector("input");
//focus
input.addEventListener("focus", ffocus);
function ffocus(event){
    console.log(event);
    console.log(event.target.value);
}
