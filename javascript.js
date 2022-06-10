// logic for getting user input by clicking on button

const buttons = document.querySelectorAll('button');

buttons.forEach(btn => btn.addEventListener('click', chooseButton));

function chooseButton(e) {
    const playerChoise = this.classList.value;
    const computerChoise = computerPlay();
    const newResult = playRound(playerChoise, computerChoise);
    updateResult(newResult);
    updateGameStatus(newResult);
}

// logic for rendering and updating game status

const textContainer = document.querySelector('.text-container');
const result = textContainer.firstElementChild;
const gameStatus = textContainer.lastElementChild;

let playerScore = 0;
let computerScore = 0;
result.textContent = 'Choose Your Weapon!';
gameStatus.textContent = `Player: ${playerScore} Computer: ${computerScore}`;

function updateResult(newResult) {
    result.textContent = newResult;
}

function updateGameStatus(newResult) {

    if (newResult.includes('won')) {
        playerScore++;
        if (playerScore >= 5) {
            endTheGame('Congratulations! You\'ve beaten the machine!');
        }
    }
    else if (newResult.includes('lost')) {
        computerScore++;
        if (computerScore >= 5) {
            endTheGame('Oh no! You lost! The machines have won!');
        }
    }

    gameStatus.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
}

function endTheGame(message) {
    updateResult(message);
    buttons.forEach(btn => btn.removeEventListener('click', chooseButton));
}




// rock-paper-scissors game logic

function computerPlay() {
    const randomNumber = Math.floor(Math.random() * 3);
    
    switch(randomNumber) {
        case 0: return 'rock';
        case 1: return 'paper';
        case 2: return 'scissors';
        default: return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    const win = `You've won! ${playerSelection} beats ${computerSelection}`;
    const lose = `You've lost! ${computerSelection} beats ${playerSelection}`;
    const tie = `It's a Tie! ${playerSelection} ties ${computerSelection}`;

    if (playerSelection === 'rock') {
        switch(computerSelection) {
            case 'rock': return tie;
            case 'paper': return lose;
            case 'scissors': return win;
        }
    }
    else if (playerSelection === 'paper') {
        switch(computerSelection) {
            case 'rock': return win;
            case 'paper': return tie;
            case 'scissors': return lose;
        }
    }
    else if (playerSelection === 'scissors') {
        switch(computerSelection) {
            case 'rock': return lose;
            case 'paper': return win;
            case 'scissors': return tie;
        }
    }
}
