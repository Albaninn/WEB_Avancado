let colors = ["aqua", "blue", "coral", "gold", "green", "purple", "red", "teal", "tomato", "yellow"];
let targetColor = colors[Math.floor(Math.random() * colors.length)];
let guessCount = 0;
let gameEnded = false;

function makeGuess() {
  let userGuess = document.getElementById('userGuess').value.toLowerCase();
  let message = document.getElementById('message');
  let guessBtn = document.getElementById('guessBtn');

  if (gameEnded) {
    return;
  }

  if (colors.includes(userGuess)) {
    guessCount++;
    if (userGuess === targetColor) {
      message.textContent = "Correct! The color was " + targetColor + ".";
      document.body.style.backgroundColor = targetColor;
      document.getElementById('guessCount').textContent = guessCount;
      document.getElementById('guesses').style.display = 'block';
      guessBtn.disabled = true; // Desativa o botão
      guessBtn.style.display = 'none'; // Esconde o botão
      gameEnded = true;
    } else if (colors.indexOf(userGuess) < colors.indexOf(targetColor)) {
      message.textContent = "Your guess is too low!";
    } else {
      message.textContent = "Your guess is too high!";
    }
  } else {
    message.textContent = "That color is not in the list!";
  }
}
