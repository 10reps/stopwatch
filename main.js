const btnBox = document.querySelector('.button-box');
const playBtn = document.querySelector('.play-btn');
const stopBtn = document.querySelector('.stop-btn');

playBtn.addEventListener('click', () => {
    playBtn.className = 'stop-btn'
    playBtn.innerHTML = '<i class="ic-handpalm"></i>STOP'
});