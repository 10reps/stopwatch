const btnBox = document.querySelector('.button-box');
const playBtn = document.querySelector('.play-btn');
const stopBtn = document.querySelector('.stop-btn');
const time = { elapsedTime: 0 };
const number = document.querySelector('.number');

playBtn.addEventListener('click', () => {
    if (playBtn.innerText === 'START') {
        start();
        playBtn.innerHTML = '<i class="ic-handpalm"></i>STOP'
        document.getElementById('main-button').style.backgroundColor = 'red';
    } else {
        document.getElementById('main-button').style.backgroundColor = 'green';
        playBtn.innerHTML = '<i class="ic-play"></i>START'
    }
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
    number.innerHTML = `${seconds}`
}