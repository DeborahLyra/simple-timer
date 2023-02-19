let timerDisplay = document.querySelector('.time');
let startButton = document.querySelector('.start');
let stopButton = document.querySelector('.stop');
let pauseButton = document.querySelector('.pause');

let seconds = 0;
let minutes = 0;
let hour = 0;

let timer;

function start() {
    watch()
    timer = setInterval(watch, 1000);
};


function pause() {
    clearInterval(timer);
};


function stop() {
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hour = 0;
    timerDisplay.innerHTML = '00:00:00';
};

function zeroLeft(num) {

    if (num < 10) {
        return '0' + num
    } else return num

}


function watch() {
    seconds++

    if (seconds === 60) {
        minutes++
        seconds = 0
    }

    if (minutes === 60) {
        minutes = 0
        hour++
    }




    timerDisplay.innerHTML = `${zeroLeft(hour)}:${zeroLeft(minutes)}:${zeroLeft(seconds)}`

}