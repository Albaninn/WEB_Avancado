let numberOfImages = 0;
let score = 0;
let topScore = parseInt(localStorage.getItem("topScore")) || 0;
let difficulty = 'medium';
let timerId;
let timeLeft;

const bodyElement = document.body;
const leftDiv = document.getElementById("left");
const rightDiv = document.getElementById("right");
const scoreDiv = document.getElementById("score");
const topScoreDiv = document.getElementById("topScore");
topScoreDiv.innerHTML = "Melhor Pontuação: " + topScore;
const timerDiv = document.getElementById("timer");

const imageSource = "smile.png"; // Certifique-se de que esta imagem está disponível no seu servidor

function init() {
    document.getElementById("difficulty").onchange = function() {
        difficulty = this.value;
    };
}

function startGame() {
    clearTimeout(timerId);
    numberOfImages = difficulty === 'hard' ? 1 : 5; // Ajuste inicial baseado na dificuldade
    score = 0;
    updateScore();
    nextLevel();
}

function nextLevel() {
    increaseDifficulty();
    updateScore();
    clearImages();
    generateImagesOnLeft();
    cloneImagesToRight();
    setupTimer();
}

function gameOver(isTimeout) {
    clearTimeout(timerId);
    bodyElement.onclick = null;
    leftDiv.lastChild.onclick = null;
    if (!isTimeout && score > topScore) {
        topScore = score;
        localStorage.setItem("topScore", topScore);
        topScoreDiv.innerHTML = "Melhor Pontuação: " + topScore;
        alert("Nova melhor pontuação: " + topScore);
    }
    if (!isTimeout && confirm("Fim de jogo! \n\nJogar novamente?")) {
        startGame();
    }
}

function increaseDifficulty() {
    switch (difficulty) {
        case 'easy':
            numberOfImages += 1;
            break;
        case 'medium':
        case 'hard':
            numberOfImages += 5;
            break;
    }
    score++;
}

function updateScore() {
    scoreDiv.innerHTML = "Pontuação: " + score;
}

function clearImages() {
    leftDiv.innerHTML = '';
    rightDiv.innerHTML = '';
}

function generateImagesOnLeft() {
    for (let i = 0; i < numberOfImages; i++) {
        const img = document.createElement("img");
        img.src = imageSource;
        img.style.left = Math.random() * (leftDiv.offsetWidth - 50) + "px";
        img.style.top = Math.random() * (leftDiv.offsetHeight - 50) + "px";
        leftDiv.appendChild(img);
    }

    leftDiv.lastChild.onclick = function(event) {
      event.stopPropagation();
      nextLevel();
  };
  bodyElement.onclick = gameOver;
}

function cloneImagesToRight() {
  for (let i = 0; i < leftDiv.childNodes.length - 1; i++) {
      const clone = leftDiv.childNodes[i].cloneNode(true);
      rightDiv.appendChild(clone);
  }
}

function setupTimer() {
  clearTimeout(timerId);
  let timeLimit;
  switch (difficulty) {
      case 'easy':
          timeLimit = 45;
          break;
      case 'medium':
          timeLimit = 30;
          break;
      case 'hard':
          timeLimit = 15;
          break;
  }
  timeLeft = timeLimit;
  timerDiv.innerHTML = "Tempo: " + timeLeft;
  timerId = setInterval(updateTimer, 1000);
}

function updateTimer() {
  timeLeft--;
  timerDiv.innerHTML = "Tempo: " + timeLeft;
  if (timeLeft <= 0) {
      clearInterval(timerId);
      timerDiv.innerHTML = "Tempo esgotado!";
      gameOver(true);
  }
}

function gameOver(isTimeout) {
  clearInterval(timerId);
  bodyElement.onclick = null;
  leftDiv.lastChild.onclick = null;
  clearImages();
  
  if (!isTimeout) {
      let finalScore = score;
      if (difficulty === 'hard') {
          finalScore *= 3;
      } else if (difficulty === 'medium') {
          finalScore *= 2;
      }
      alert("Fim de jogo! Sua pontuação final é: " + finalScore);
      
      if (finalScore > topScore) {
          topScore = finalScore;
          localStorage.setItem("topScore", topScore);
          topScoreDiv.innerHTML = "Melhor Pontuação: " + topScore;
      }
  }
  
  if (!isTimeout && confirm("Fim de jogo! \n\nJogar novamente?")) {
      startGame();
  }
}
