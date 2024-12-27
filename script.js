let click = 0;

const target = document.querySelector('#target');
const score = document.querySelector('#score');
const timer = document.querySelector('#timer');
const result = document.querySelector('#scoreDisplay');
const startButton = document.querySelector('#start');

function getRandomPosition() {
    let x = Math.floor(Math.random() * 90); 
    let y = Math.floor(Math.random() * 80); 
    return { x, y };
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function start() {
    startButton.style.display = "none"; 
    target.style.display = "block"; 
    result.style.display = "none"; 
    click = 0;
    score.innerText = "Clicks: " + click; 

    let timeRemaining = 30; 
    const countdown = setInterval(() => {
        timeRemaining--;

        timer.innerText = "Time: " + (timeRemaining < 10 ? '0' : '') + timeRemaining + "s";

        if (timeRemaining <= 0) {
            clearInterval(countdown); 
            startButton.style.display = "block"; 
            result.style.display = "block"; 
            target.style.display = "none"; 
            result.innerText = "Your score: " + click; 
        }
    }, 1000);

    let newPos = getRandomPosition();
    target.style.top = newPos.y + "vh";
    target.style.left = newPos.x + "vw";
    target.style.backgroundColor = getRandomColor();
}

target.addEventListener('click', function () {
    click++; 
    score.innerText = "Clicks: " + click; 

    let newPos = getRandomPosition();
    target.style.top = newPos.y + "vh";
    target.style.left = newPos.x + "vw";

    target.style.backgroundColor = getRandomColor();
});
