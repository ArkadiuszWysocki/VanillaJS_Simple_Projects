const startBtn = document.querySelector('.start');
const lapBtn = document.querySelector('.lap');
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
let currentLapTime;
let active = false;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let milliseconds2 = 0;
let minutes2 = 0;
let seconds2 = 0;
// let currentLap;


const currentTime = () => {

  let dispSeconds;
  let dispMinutes;
  let dispMilliseconds;
  
  if(milliseconds2 === 99) {
    milliseconds2 = 0;
    seconds2++;
        if(seconds2 === 60) {
        minutes2++;
        seconds2 = 0;
        }
    } else {
      milliseconds2 += 1;
    };
  
  dispMilliseconds = (milliseconds2 < 10) ? "0" + milliseconds2 : milliseconds2;
  dispSeconds = (seconds2 < 10) ? "0" + seconds2 : seconds2;
  dispMinutes = (minutes2 < 10) ? "0" + minutes2 : minutes2;
  currentLap.textContent = `${dispMinutes}:${dispSeconds}:${dispMilliseconds}`;
};

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
  stopwatch.textContent =  `${dispMinutes}:${dispSeconds}:${dispMilliseconds}`;
};

const handleStart = () => {
  if(!active) {
    active = !active;
    countTime = setInterval(displayTime, 10);
    currentLapTime = setInterval(currentTime, 10);
    startBtn.innerHTML = '<i class="fas fa-pause"></i>';
    
  }
  else {
    active = !active;
    clearInterval(countTime);
    clearInterval(currentLapTime);
    startBtn.innerHTML = '<i class="fas fa-play"></i>';
  }
  
};

const handleLap = () => {
  if (active) {
      clearInterval(currentLapTime);
      lastLap.textContent = currentLap.textContent;
      timesArr.push(currentLap.textContent);
      timeList.textContent = '';
      let num = 1;
      timesArr.forEach(time => {
          const newTime = document.createElement('li');
          newTime.innerHTML = `Lap # ${num}: <span>${time}</span>`
    
          timeList.appendChild(newTime);
          num++;
      })
      currentLap.textContent = '00:00:00';
      milliseconds2 = 0;
      minutes2 = 0;
      seconds2 = 0;
      currentLapTime = setInterval(currentTime, 10);
  };
};

const showTimes = () => {
  timeList.classList.toggle('hidden')
};

const handleStop = () => {
  clearInterval(countTime);
  clearInterval(currentLapTime);
  startBtn.innerHTML = '<i class="fas fa-play"></i>';
  active = false;
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  milliseconds2 = 0;
  minutes2 = 0;
  seconds2 = 0;
};



startBtn.addEventListener('click', handleStart);
lapBtn.addEventListener('click', handleLap);
historyBtn.addEventListener('click', showTimes);
stopBtn.addEventListener('click', handleStop)
