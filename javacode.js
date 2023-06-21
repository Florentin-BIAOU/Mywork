const checkButton = document.getElementById("check");
const againButton = document.getElementById("again");
const inputField = document.getElementById("input");
const messageElement = document.querySelector(".message");
const scoreElement = document.querySelector(".score");
const highscoreElement = document.querySelector(".highscore");

// Initialize variables
let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Function to display a message
function displayMessage(message) {
  messageElement.textContent = message;
}

// Function to update the score
function updateScore() {

  if(score==0)
  {
        displayMessage("Sorry! You Lose!");
    document.body.style.backgroundColor = "red";
      
  }
  else if(score>0)
  {
      score--;
  scoreElement.textContent = score;
  }
  
}


// Function to update the highscore
function updateHighscore() {
  if (score > highscore) {
    highscore = score;
    highscoreElement.textContent = highscore;
  }
}

// Function to reset the game
function resetGame() {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  displayMessage("Start guessing...");
  scoreElement.textContent = score;
  inputField.value = "";
  document.body.style.backgroundColor = "#222";
}

// Event listener for the "Check" button
checkButton.addEventListener("click", function  checkButton() {
  const guess = Number(inputField.value);

  // Check if the input is a valid number
  if (!guess || guess < 1 || guess > 20) {
    displayMessage("Invalid input. Please enter a number between 1 and 20.");
    return;
  }

  // Check if the guess is correct
  if (guess === secretNumber) {
    displayMessage("Correct! You win!");
    document.body.style.backgroundColor = "green";
    updateHighscore();
  } else {
    displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
    updateScore();
  }
});

// Event listener for the "Again" button
againButton.addEventListener("click", resetGame);

// Reset the game initially
resetGame();