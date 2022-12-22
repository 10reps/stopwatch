const btnBox = document.querySelector('.button-box');
const playBtn = document.querySelector('.play-btn');
const stopBtn = document.querySelector('.stop-btn');
const time = { elapsedTime: 0 };

playBtn.addEventListener('click', () => {
    if (playBtn.innerText === 'START') {
        start();
        playBtn.className = 'stop-btn'
        playBtn.innerHTML = '<i class="ic-handpalm"></i>STOP'
    }
});

stopBtn.addEventListener('click', () => {
    if (playBtn.innerText === 'STOP') {
        stopBtn.className = 'play-btn'
        stopBtn.innerHTML = '<i class="ic-play"></i>START'
    }
});

function start() {
    time.startTime = Date.now();

    time.intervalId = setInterval(() => {
        const elapsedTime= Date.now() - time.startTime + time.elapsedTime;
        const minutes = parseInt((elapsedTime/(1000*60))%60);
        const seconds = parseInt((elapsedTime/1000)%60);

        displayTime(minutes, seconds);
    }, 100);
};

function displayTime(minutes, seconds) {
    
}