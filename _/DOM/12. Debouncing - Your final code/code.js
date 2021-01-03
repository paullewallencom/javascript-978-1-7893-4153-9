//debouncing
var timeout;
document.addEventListener("mousemove", function(event){
    clearTimeout(timeout);
    timeout = setTimeout(function(){
        console.log("Your current position:")
        console.log(event.pageX);
        console.log(event.pageY);
    }, 500);
});

//1: 3000->3500: cancelled
//2: 3200->3700: cancelled
//3: 3400->3900