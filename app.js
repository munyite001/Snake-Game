const playBoard = document.querySelector('.play-board');

let foodX, foodY;

let snakeX = 15; let snakeY = 15;
let snakeBody = [];
let velocityX = 0; let velocityY = 0;

const changeDirection = (e) => {
//  Changing velocity value based on keypress
  if (e.key === 'ArrowUp') {
    velocityY = 0;
    velocityX = -1;
  } else if (e.key === 'ArrowDown') {
    velocityY = 0;
    velocityX = 1;
  } else if (e.key === 'ArrowRight') {
    velocityY = 1;
    velocityX = 0;
  } else if (e.key === 'ArrowLeft') {
    velocityY = -1;
    velocityX = 0;
  }

  initGame();
};

//  Function to initialize the game
//  It creates a food for the snake and displays it
const initGame = () => {
  let htmlMarkup = `<div class="food" style="grid-area: ${foodX}/${foodY}"></div> `;

  //  Checking if the snake hit the food
  if (snakeX === foodX && snakeY === foodY) {
    randomFoodPosition();
    snakeBody.push([foodX, foodY]); //  Pushing food position to snake body array
    console.log(snakeBody);
  }

  // updating the snake head velocity, based on current velocity
  snakeX += velocityX;
  snakeY += velocityY;

  //  Shifting forward the snake values plus one
  for (let i = snakeBody.length - 1; i > 0; i--) {
    snakeBody[i] = snakeBody[i - 1];
    
  }

  snakeBody[0] = [snakeX, snakeY];  //  Setting first element of snake body to be current snake position

  for (let i = 0; i < snakeBody.length; i++) {
    //  Adding a div for each part of the snake's body
    htmlMarkup += `<div class="snakeHead" style="grid-area: ${snakeBody[i][0]}/${snakeBody[i][1]}"></div> `;
  }

  playBoard.innerHTML = htmlMarkup;
};

//  Function to randomize the snake food
const randomFoodPosition = () => {
  foodX = Math.floor(Math.random() * 30) + 1;
  foodY = Math.floor(Math.random() * 30) + 1;
};

randomFoodPosition();
setInterval(initGame, 125);
document.addEventListener('keydown', changeDirection);
