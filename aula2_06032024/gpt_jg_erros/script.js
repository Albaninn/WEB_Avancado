const leftSet = document.getElementById('left-set');
const rightSet = document.getElementById('right-set');
const scoreDisplay = document.getElementById('score');
let score = 0;

function generateImages() {
  // Clear previous images
  leftSet.innerHTML = '';
  rightSet.innerHTML = '';

  // Define the number of matching images
  const numberOfImages = 3; // Example for 3 matching images and 1 extra

  // Generate matching images
  for (let i = 0; i < numberOfImages; i++) {
    const img = createImageElement();
    leftSet.appendChild(img);
    rightSet.appendChild(img.cloneNode());
  }

  // Add one extra image to the left set
  const extraImage = createImageElement();
  extraImage.addEventListener('click', imageClicked);
  leftSet.appendChild(extraImage);
}

function createImageElement() {
  const img = document.createElement('img');
  img.src = 'smile.png'; // Set the path to your smiley image
  img.alt = 'smiley';
  return img;
}

function imageClicked() {
  score += 1;
  scoreDisplay.textContent = score;
  generateImages(); // Regenerate images to continue the game
}

// Initial call to set up the game
generateImages();
