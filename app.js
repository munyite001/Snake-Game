const playBoard = document.querySelector('.play-board'); 

let foodX, foodY;

let snakeX = 5, snakeY = 10;
let velocityX = 0, velocityY = 0;

const changeDirection = (e) => {
//  Changing velocity value based on keypress
console.log(e.key)
    if (e.key === "ArrowUp")
    {
        velocityY = 0;
        velocityX = -1;
    }
    else if(e.key === "ArrowDown")
    {
        velocityY = 0;
        velocityX = 1;
    }
    else if(e.key === "ArrowRight")
    {
        velocityY = 1;
        velocityX = 0;
    }
    else if(e.key == "ArrowLeft")
    {
        velocityY = -1;
        velocityX = 0;
    }

    initGame();
}

//  Function to initialize the game
//  It creates a food for the snake and displays it
const initGame = () => {
    let htmlMarkup = `<div class="food" style="grid-area: ${foodX}/${foodY}"></div> `;
    htmlMarkup += `<div class="snakeHead" style="grid-area: ${snakeX}/${snakeY}"></div> `;

    // updating the snake head velocity, based on current velocity
    snakeX += velocityX;
    snakeY += velocityY;

    playBoard.innerHTML = htmlMarkup;
}

//  Function to randomize the snake food
const randomFoodPosition = () => {
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
}

randomFoodPosition();
setInterval(initGame, 125);
document.addEventListener('keydown', changeDirection);