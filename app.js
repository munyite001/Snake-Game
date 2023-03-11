const playBoard = document.querySelector('.play-board'); 

let foodX, foodY;

//  Function to initialize the game
//  It creates a food for the snake and displays it
const initGame = () => {
    let snakeFood = `<div class="food" style="grid-area: ${foodX}/${foodY}"></div> `;
    playBoard.innerHTML = snakeFood;
}

//  Function to randomize the snake food
const randomFoodPosition = () => {
    foodX = Math.floor(Math.random() * 30) + 1;
    foodY = Math.floor(Math.random() * 30) + 1;
}

randomFoodPosition();
initGame();