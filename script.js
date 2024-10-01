let timer = document.getElementById("timer");  

let workingTime = true;  //boolean that indicates if it's work time or not

let customizedWorkingTime = 25 ;  //working time, which can be changed in the parameters
let customizedBreakingTime = 5 ;  //breaking time, which can be changed in the parameters

let time = customizedWorkingTime * 60 - 1;  //defines the time in seconds, whether it's work or break time
timer.innerText = customizedWorkingTime < 10 ? "0" + `${customizedWorkingTime}:00` : `${customizedWorkingTime}:00`;

let buttonRestart = false;  //boolean that indicates if it's the start or the restart button
let interval;  //variable for setInterval and clearInterval

//checks the button to see if it needs to start the timer
function startAndStop(){
    if(buttonRestart == false){ //checks whether the button is the start or restart button
        time = workingTime ? customizedWorkingTime * 60 - 1 : customizedBreakingTime * 60 - 1;   // determines whether it's work time or break time
        interval = setInterval(decreaseTime, 1000); //starts the timer
        buttonRestart = true; //define the button to the restart
        document.getElementById("classButton").className = "fa-solid fa-rotate-left";  //changes the style of the button (becomes the restart button)
    }
    else{
        clearInterval(interval);  //stop the timer
        timer.innerText = customizedWorkingTime < 10 ? "0" + `${customizedWorkingTime}:00` : `${customizedWorkingTime}:00`;  //reset the timer

        workingTime = true;
        time = customizedWorkingTime * 60 - 1;
        buttonRestart = false;
        document.getElementById("classButton").className = "fa-solid fa-play";  //changes the style of the button (becomes the start button)
    }
    changeColor();
}

//start the timer
function decreaseTime(){  
    changeColor();
    let minutes = parseInt( time / 60, 10 );
    let seconds = parseInt( time % 60, 10 );

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timer.innerText = `${minutes}:${seconds}`;
    if(time <= 0){
        workingTime ? workingTime = false : workingTime = true;
        time = workingTime ? customizedWorkingTime * 60 : customizedBreakingTime * 60 ;
    }
    else{
        time = time - 1;
    }
}

function changeColor(){
    if(workingTime == true){
        document.getElementsByClassName("work")[0].style.backgroundColor = 'rgb(180, 20, 12)';
        document.getElementsByClassName("break")[0].style.backgroundColor = 'rgb(141, 8, 1)';
        document.getElementsByClassName("container")[0].style.backgroundColor = 'rgb(180, 20, 12)';
    }
    else{
        document.getElementsByClassName("work")[0].style.backgroundColor = 'rgb(141, 8, 1)';
        document.getElementsByClassName("break")[0].style.backgroundColor = '#4f772d';
        document.getElementsByClassName("container")[0].style.backgroundColor = '#4f772d';
    }
}

let btn = document.getElementById("parameters");
var modal = document.getElementById("customizeTimeModal");  // Get the modal
var span = document.getElementsByClassName("close")[0];  // Get the <span> element that closes the modal

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

function valueRecup() {
    customizedWorkingTime = document.getElementById("formulary").elements["workTimeValue"].value;
    customizedBreakingTime = document.getElementById("formulary").elements["breakTimeValue"].value;
    timer.innerText = customizedWorkingTime < 10 ? "0" + `${customizedWorkingTime}:00` : `${customizedWorkingTime}:00`;
    modal.style.display = "none";
}
