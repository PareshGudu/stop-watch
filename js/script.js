
window.onload = function () {
    let minutes = 0;
    let seconds = 0;
    let msec = 0o0;
    let appendMinutes = document.querySelector("#minutes");
    let appendMilisec = document.querySelector("#milisec");
    let appendSeconds = document.querySelector("#seconds");

    let stratBtn = document.querySelector("#start");
    let resetBtn = document.querySelector("#reset");
    let stopBtn = document.querySelector("#stop");
    let interval;

    let startTimer = () => {
        msec++;
        if (msec <= 9) {
            appendMilisec.innerHTML = '0' + msec;
        }
        if (msec > 9) {
            appendMilisec.innerHTML = msec
        }
        if (msec > 99) {
            seconds++;
            appendSeconds.innerHTML = '0' + seconds;
            msec = 0
            appendMilisec.innerHTML = '0' + 0;
        }
         if (seconds > 9) {
             appendSeconds.innerHTML = seconds;
        }
        if (seconds > 59) {
            minutes++;
            appendMinutes.innerHTML = '0' + minutes;
            seconds = 0;
            appendSeconds.innerHTML = '0' + 0;
        }
    }
    stratBtn.onclick = () => {
        clearInterval(interval);
        interval = setInterval(startTimer, 10)
    };
    stopBtn.onclick = () => {
        clearInterval(interval)
    };
    resetBtn.onclick = () => {
        clearInterval(interval);
        minutes = '00';
        seconds = '00';
        msec = '00'
        appendMilisec.innerHTML = msec;
        appendMinutes.innerHTML = minutes;
        appendSeconds.innerHTML = seconds;
    }
}
