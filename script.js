let timer = document.getElementById("timer");

let workingTime = true;

let customizedBreakTime = 5 ;
let customizedWorkingTime = 0.1 ;

let time = customizedWorkingTime * 60 - 1;
timer.innerText = `${customizedWorkingTime}:00`

let buttonActivation = false;
let interval;

function decreaseTime(){

    let minutes = parseInt( time / 60, 10 );
    let seconds = parseInt( time % 60, 10 );

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timer.innerText = `${minutes}:${seconds}`;
    if(time <= 0){
        workingTime ? workingTime = false : workingTime = true;
        time = workingTime ? customizedWorkingTime * 60 : customizedBreakTime * 60 ;
    }
    else{
        time = time - 1;
    }
}

let start = document.getElementById("start")
start.addEventListener("click", startAndStop);

function startAndStop(){
    if(buttonActivation == false){
        time = workingTime ? customizedWorkingTime * 60 : customizedBreakTime * 60 ;
        interval = setInterval(decreaseTime, 1000);
        buttonActivation = true;
        document.getElementById("classButton").className = "fa-solid fa-rotate-left";
    }
    else{
        clearInterval(interval);
        // Remettre le compteur à 0 et on recommence sur la partie travail
        workingTime = true;
        time = customizedWorkingTime * 60;
        buttonActivation = false;
        document.getElementById("classButton").className = "fa-solid fa-play";
    }
}