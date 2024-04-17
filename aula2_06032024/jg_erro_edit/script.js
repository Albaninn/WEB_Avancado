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
        // Não reinicia o jogo automaticamente ao mudar a dificuldade
    };
}

function startGame() {
  clearTimeout(timerId); // Garante que o temporizador anterior seja cancelado
  timeLeft = difficulty === 'easy' ? 45 : difficulty === 'medium' ? 30 : 15; // Reinicia o tempo com base na dificuldade

  score = 0; // Reinicia a pontuação
  numberOfImages = difficulty === 'hard' ? 2 : 5; // Configura o número inicial de imagens

  updateScore(); // Atualiza a pontuação na tela
  clearImages();
  setupTimer(); // Configura o temporizador
  nextLevel(true);

  bodyElement.onclick = null; // Prepara para definir um novo handler para o clique no body
  setTimeout(() => {
      bodyElement.onclick = function() { gameOver(false); };
  }, 100); // Evita que cliques durante a configuração inicial do jogo terminem o jogo prematuramente
}

function nextLevel() {
  let pontosAdicionais = 0;
  if (difficulty === 'hard') {
      numberOfImages *= 2;
      pontosAdicionais = timeLeft * 3;
  } else if (difficulty === 'medium') {
      numberOfImages += 5;
      pontosAdicionais = timeLeft * 2;
  } else { // Easy
      numberOfImages += 1;
      pontosAdicionais = timeLeft; // No fácil, apenas adiciona o tempo restante
  }
  

  score += pontosAdicionais;
  console.log("Pontos adicionais:", pontosAdicionais, "Pontuação atual:", score); // Depuração

  updateScore();
  clearImages();
  generateImages();
  setupTimer();
}


function generateImages() {
    for (let i = 0; i <= numberOfImages; i++) { // Inclui a imagem extra
        const img = document.createElement("img");
        img.src = imageSource;
        img.style.position = 'absolute';
        img.style.left = Math.random() * (leftDiv.offsetWidth - 50) + 'px';
        img.style.top = Math.random() * (leftDiv.offsetHeight - 50) + 'px';
        if (i === numberOfImages) { // A última imagem adicionada é a "extra"
            img.onclick = function(event) {
                event.stopPropagation();
                nextLevel();
            };
        }
        leftDiv.appendChild(img);
    }
    cloneImagesToRight();
}

function cloneImagesToRight() {
    while (rightDiv.firstChild) {
        rightDiv.removeChild(rightDiv.firstChild);
    }
    for (let i = 0; i < leftDiv.childNodes.length - 1; i++) { // Exclui a imagem extra
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
  clearInterval(timerId); // Para o temporizador
  bodyElement.onclick = null; // Remove o evento de clique do body para evitar finalizações inesperadas do jogo

  // Limpa as imagens e prepara o jogo para um novo início sem reiniciar automaticamente
  clearImages();

  if (!timeOut) {
      alert("Fim de jogo!"); // Informa ao jogador que o jogo terminou
  }
  
  // Remove a chamada para startGame aqui e simplesmente mostra uma mensagem
  alert("Selecione o nível de dificuldade e clique em 'Iniciar Jogo' para jogar novamente.");
}