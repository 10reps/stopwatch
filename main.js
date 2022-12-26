const btnBox = document.querySelector('.button-box');
const playBtn = document.querySelector('.play-btn');
const stopBtn = document.querySelector('.stop-btn');
const time = { elapsedTime: 0 };
const numOne = document.querySelector('.one');
const numTwo = document.querySelector('.two');
const numThree = document.querySelector('.three');
const numFour = document.querySelector('.four');

playBtn.addEventListener('click', () => {
    if (playBtn.innerText === 'START') {
        playBtn.classList.replace('play-btn', 'stop-btn');
        playBtn.innerHTML = '<i class="ic-handpalm"></i>STOP';
        start();
    } else {
        playBtn.classList.replace('stop-btn', 'play-btn');
        playBtn.innerHTML = '<i class="ic-play"></i>START';
    };
});

function start() {
    time.startTime = Date.now();

    time.intervalId = setInterval(() => {
        const elapsedTime= Date.now() - time.startTime + time.elapsedTime;
        const minutes = parseInt((elapsedTime/(1000*60))%60);
        const seconds = parseInt((elapsedTime/1000)%60);

        displayTime(minutes, seconds);
    }, 1000);
};

function displayTime(minutes, seconds) {
    let i = 1;

    if (seconds < 10) {
        numFour.innerHTML = `${seconds}`;
    } else if (seconds === 10) {
        numFour.innerHTML = 0;
        numThree.innerHTML = i;
    } else if (seconds > 11) {
        numFour.innerHTML = 1;
    }
};