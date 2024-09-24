let timer = document.getElementById("timer");

let workingTime = true;

let customizedBreakTime = 5 ;
let customizedWorkingTime = 1 ;

let time = customizedWorkingTime * 60 - 1;
timer.innerText = `${customizedWorkingTime}:00`

let buttonRestart = false;
let interval;

function startAndStop(){
    if(buttonRestart == false){
        time = workingTime ? customizedWorkingTime * 60 - 1: customizedBreakTime * 60 - 1;
        interval = setInterval(decreaseTime, 1000);
        buttonRestart = true;
        document.getElementById("classButton").className = "fa-solid fa-rotate-left";
    }
    else{
        clearInterval(interval);
        timer.innerText = `${customizedWorkingTime}:00`;
        // Remettre le compteur à 0 et on recommence sur la partie travail
        workingTime = true;
        time = customizedWorkingTime * 60 - 1;
        buttonRestart = false;
        document.getElementById("classButton").className = "fa-solid fa-play";
    }
    changeColor();
}

function decreaseTime(){
    changeColor();
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

function changeColor(){
    if(workingTime == true){
        document.getElementsByClassName("travail")[0].style.backgroundColor = 'orange';
        document.getElementsByClassName("pause")[0].style.backgroundColor = 'red';
    }
    else{
        document.getElementsByClassName("pause")[0].style.backgroundColor = 'blue';
        document.getElementsByClassName("travail")[0].style.backgroundColor = 'red';
    }
}

// Get the modal
var modal = document.getElementById("customizeTimeModal");

// Get the button that opens the modal
var btn = document.getElementById("parametre");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function customizeTime(){
    let valeur = document.getElementById("customizeWorkingTime").value;
    console.log()
}