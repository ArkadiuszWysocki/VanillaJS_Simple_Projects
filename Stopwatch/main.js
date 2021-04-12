const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const historyBtn = document.querySelector('.history');
const stopwatch = document.querySelector('.stopwatch span');
const currentLap = document.querySelector('.currentLap span');
const lastLap = document.querySelector('.lastLap span');
const timeList = document.querySelector('.time-list');

const infoBtn = document.querySelector('.info');
const modalShadow = document.querySelector('.modal-shadow');
const closeModalBtn = document.querySelector('.close');

let timesArr = [];
let countTime;
let active = false;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;


const displayTime = () => {

    let dispSeconds;
    let dispMinutes;
    let dispMilliseconds;
    
    if(milliseconds === 99) {
    milliseconds = 0;
    seconds++;
        if(seconds === 60) {
        minutes++;
        seconds = 0;
        }
    } else {
      milliseconds += 1;
    };
  
  dispMilliseconds = (milliseconds < 10) ? "0" + milliseconds : milliseconds;
  dispSeconds = (seconds < 10) ? "0" + seconds : seconds;
  dispMinutes = (minutes < 10) ? "0" + minutes : minutes;
  stopwatch.textContent = `${dispMinutes}:${dispSeconds}:${dispMilliseconds}`;
  currentLap.textContent = `${dispMinutes}:${dispSeconds}:${dispMilliseconds}`;
 };

 const handleStart = () => {
   if(!active) {
     active = !active;
     countTime = setInterval(displayTime, 10);
     startBtn.innerHTML = '<i class="fas fa-pause"></i>';

//    btn text content to puase

   }
   else {
     active = !active;
     clearInterval(countTime);
     startBtn.innerHTML = '<i class="fas fa-play"></i>';
   }
   
 };





startBtn.addEventListener('click', handleStart);