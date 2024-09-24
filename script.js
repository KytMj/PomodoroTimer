let timer = document.getElementById("timer");
let time = 25 * 60 - 1;
let buttonActivation = false;
let interval;

function decreaseTime(){
    let minutes = parseInt( time / 60, 10 );
    let seconds = parseInt( time % 60, 10 );

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timer.innerText = `${minutes}:${seconds}`;
    time = time <= 0 ? clearInterval(interval) : time - 1
}

let start = document.getElementById("start")
start.addEventListener("click", startAndStop);

function startAndStop(){
    if(buttonActivation == false){
        interval = setInterval(decreaseTime, 1000);
        buttonActivation = true;
        document.getElementById("classButton").className = "fa-solid fa-rotate-left";
    }
    else{
        clearInterval(interval);
        time = 25 * 60 - 1;
        timer.innerText = "25:00";
        buttonActivation = false;
        document.getElementById("classButton").className = "fa-solid fa-play";
    }
}