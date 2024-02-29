var colors = ["aqua", "blue", "coral", "gold", "green", "purple", "red", "teal", "tomato", "yellow"];
var targetColor = colors[Math.floor(Math.random() * colors.length)];
var guessCount = 0;

function makeGuess() {
  var userGuess = document.getElementById('userGuess').value.toLowerCase();
  var message = document.getElementById('message');
  guessCount++;
  document.getElementById('guessCount').textContent = guessCount;

  if (colors.indexOf(userGuess) < colors.indexOf(targetColor)) {
    message.textContent = "Your guess is too low!";
  } else if (colors.indexOf(userGuess) > colors.indexOf(targetColor)) {
    message.textContent = "Your guess is too high!";
  } else if (userGuess === targetColor) {
    message.textContent = "Correct! The color was " + targetColor;
    document.body.style.backgroundColor = targetColor;
  } else {
    message.textContent = "That color is not in the list!";
  }
}
