let numberOfImages = 0;
let score = 0;
let topScore = parseInt(localStorage.getItem("topScore")) || 0;
let difficulty = 'medium'; // 'easy', 'medium', 'hard'
let timerId;
let timeLeft;

const bodyElement = document.body;
const leftDiv = document.getElementById("left");
const rightDiv = document.getElementById("right");
const scoreDiv = document.getElementById("score");
const topScoreDiv = document.getElementById("topScore");
const timerDiv = document.getElementById("timer");
const difficultySelect = document.getElementById("difficulty");

topScoreDiv.innerHTML = "Melhor Pontuação: " + topScore;

const imageSource = "smile.png"; // Substitua pelo caminho correto para sua imagem

function init() {
    difficultySelect.onchange = function() {
        difficulty = this.value;
        startGame();
    };
    startGame();
}

function startGame() {
    clearTimeout(timerId);
    numberOfImages = difficulty === 'hard' ? 2 : 5; // Começa com 2 para o modo difícil e 5 para os outros
    score = 0;
    updateScore();
    clearImages();
    nextLevel();
}

function nextLevel() {
    if (difficulty === 'hard') {
        numberOfImages *= 2;
    } else if (difficulty === 'medium') {
        numberOfImages += 5;
    } else {
        numberOfImages += 1;
    }

    score++;
    updateScore();
    clearImages();
    generateImages();
    setupTimer();
}

function generateImages() {
    let i;
    for (i = 0; i < numberOfImages; i++) {
        const img = document.createElement("img");
        img.src = imageSource;
        img.style.position = 'absolute';
        img.style.left = Math.random() * (leftDiv.offsetWidth - 50) + 'px';
        img.style.top = Math.random() * (leftDiv.offsetHeight - 50) + 'px';
        leftDiv.appendChild(img);
    }

    const extraImg = document.createElement("img");
    extraImg.src = imageSource;
    extraImg.style.position = 'absolute';
    extraImg.style.left = Math.random() * (leftDiv.offsetWidth - 50) + 'px';
    extraImg.style.top = Math.random() * (leftDiv.offsetHeight - 50) + 'px';
    extraImg.onclick = function(event) {
        event.stopPropagation();
        nextLevel();
    };
    leftDiv.appendChild(extraImg);

    cloneImagesToRight();
    bodyElement.onclick = function() { gameOver(false); };
}

function cloneImagesToRight() {
    while (rightDiv.firstChild) {
        rightDiv.removeChild(rightDiv.firstChild);
    }
    for (let i = 0; i < leftDiv.childNodes.length - 1; i++) {
        const clone = leftDiv.childNodes[i].cloneNode(true);
        rightDiv.appendChild(clone);
    }
}

function clearImages() {
    while (leftDiv.firstChild) {
        leftDiv.removeChild(leftDiv.firstChild);
    }
    while (rightDiv.firstChild) {
        rightDiv.removeChild(rightDiv.firstChild);
    }
}

function updateScore() {
    scoreDiv.innerHTML = "Pontuação: " + score;
    if (score > topScore) {
        topScore = score;
        localStorage.setItem("topScore", topScore);
        topScoreDiv.innerHTML = "Melhor Pontuação: " + topScore;
    }
}

function setupTimer() {
    clearTimeout(timerId);
    timeLeft = difficulty === 'easy' ? 45 : difficulty === 'medium' ? 30 : 15;
    timerDiv.innerHTML = "Tempo: " + timeLeft;
    timerId = setInterval(function() {
        timeLeft--;
        timerDiv.innerHTML = "Tempo: " + timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerId);
            gameOver(true);
        }
    }, 1000);
}

function gameOver(timeOut) {
    clearInterval(timerId);
    bodyElement.onclick = null;
    alert(timeOut ? "O tempo acabou!" : "Fim de jogo!");
    if (confirm("Jogar novamente?")) {
        startGame();
    }
}
