function longFunction(){
    var x = 0;
    while(x < 100000){
        console.log(x);
        x++;
    }
    console.log('longFunction Complete!')
}
function clickHandler(){
    console.log('click event');
}

//listen to a click
document.addEventListener("click", clickHandler);
longFunction();