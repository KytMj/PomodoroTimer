let timer = document.getElementById("timer");
let time = 25 * 60;



function decreaseTime(){
    let minutes = parseInt( time / 60, 10 );
    let seconds = parseInt( time % 60, 10 );

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    timer.innerText = `${minutes}:${seconds}`;
    time = time <= 0 ? 0 : time - 1
}

let start = document.getElementById("start")
start.addEventListener("click", () => {setInterval(decreaseTime,1000)});