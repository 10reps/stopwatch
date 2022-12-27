const btnBox = document.querySelector('.button-box');
const playBtn = document.querySelector('.play-btn');
const stopBtn = document.querySelector('.stop-btn');
const resetBtn = document.querySelector('.reset-btn');
const time = { elapsedTime: 0 };
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');

playBtn.addEventListener('click', () => {
    if (playBtn.innerText === 'START') {
        playBtn.classList.replace('play-btn', 'stop-btn');
        playBtn.innerHTML = '<i class="ic-handpalm"></i>STOP';
        start();
    } else {
        time.elapsedTime += Date.now() - time.startTime;
        clearInterval(time.interval);
        playBtn.classList.replace('stop-btn', 'play-btn');
        playBtn.innerHTML = '<i class="ic-play"></i>START';
    };
});

resetBtn.addEventListener('click', () => {
    time.elapsedTime = 0;
    time.startTime = Date.now();
    secondTime(0);
    minuteTime(0);
});

function start() {
    time.startTime = Date.now();

    time.interval = setInterval(() => {
        const elapsedTime= Date.now() - time.startTime + time.elapsedTime;
        const minutes = parseInt((elapsedTime/(1000*60))%60);
        const seconds = parseInt((elapsedTime/1000)%60);

        secondTime(seconds);
        minuteTime(minutes);
    }, 100);
};

function secondTime(seconds) {
    const getSeconds = seconds < 10 ? `0${seconds}` : seconds;
    second.innerText = getSeconds;
};

function minuteTime(minutes) {
    const getMinutes = minutes < 10 ? `0${minutes}` : minutes;
    minute.innerText = getMinutes;
};