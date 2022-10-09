const clock = document.querySelector("h2#clock");


function getClock(){
    const date = new Date();
    
    clock.innerText = `${date}`
}


getClock();
setInterval(getClock, 1000);