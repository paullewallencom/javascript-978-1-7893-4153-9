addEventListener("keydown", fkeydown);
function fkeydown(event){
//    console.log(event);
    console.log(event.keyCode);
    console.log(event.ctrlKey);
    console.log(event.key);
    console.log(String.fromCharCode(event.keyCode));
    document.body.style.background = "lightgreen";
}

addEventListener("keyup", fkeyup);
function fkeyup(event){
    document.body.style.background = "";
}