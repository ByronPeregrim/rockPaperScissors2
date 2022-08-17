const rockButton = document.querySelector('#rockButton');
const paperButton = document.querySelector('#paperButton');
const scissorsButton = document.querySelector('#scissorsButton');
const playerSelectionDiv = document.querySelector('#playerSelection');
const computerSelectionDiv = document.querySelector('#computerSelection');
const roundResultsDiv = document.querySelector('#roundResults');
const playerScoreDiv = document.querySelector('#playerScore');
const computerScoreDiv = document.querySelector('#computerScore');
const gameResultsDiv = document.querySelector('#gameResults');

let results;
let playerScore = 0;
let computerScore = 0;

rockButton.addEventListener('click', function(){
    results = playRound("rock", getComputerChoice());
    playerSelectionDiv.textContent = "You chose rock.";
    updateResults();
    checkForWinner();
});

paperButton.addEventListener('click', function(){
    results = playRound("paper", getComputerChoice());
    playerSelectionDiv.textContent = "You chose paper.";
    updateResults();
    checkForWinner();
});

scissorsButton.addEventListener('click', function(){
    results = playRound("scissors", getComputerChoice());
    playerSelectionDiv.textContent = "You chose scissors.";
    updateResults();
    checkForWinner();
});

function checkForWinner() {
    if (playerScore == 5) {
        gameResultsDiv.textContent = "YOU WON THE GAME!";
        disableButtons();
    }
    else if (computerScore == 5) {
        gameResultsDiv.textContent = "Sorry, you lost the game!";
        disableButtons();
    }
}

function disableButtons() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}

function updateResults() {
    roundResultsDiv.textContent = results;
    playerScoreDiv.textContent = "Player Score: " + playerScore;
    computerScoreDiv.textContent = "Computer Score: " + computerScore;
}

function getRandomNumber() {
    return Math.floor(Math.random() * 3)
}

// Computer choice is determined by which random number getRandomNumber generates.

function getComputerChoice() {
    let randomNumber = getRandomNumber();
    switch (randomNumber) {
        case 0:
            computerSelectionDiv.textContent = "Computer chose rock."
            return "rock"
            break;
        case 1:
            computerSelectionDiv.textContent = "Computer chose paper."
            return "paper"
            break;
        case 2:
            computerSelectionDiv.textContent = "Computer chose scissors."
            return "scissors"
            break;
    }
}

// Compare user input to computer input
// Output winner

function playRound(userInput, computerChoice) {
    if (computerChoice === userInput) {
        return "That round was a tie!";
    }
    else if (computerChoice === "rock" && userInput === "scissors") {
        computerScore++;
        return "Computer wins that round!";
    }
    else if (computerChoice === "rock" && userInput === "paper") {
        playerScore++;
        return "You won that round!";
    }
    else if (computerChoice === "paper" && userInput === "rock") {
        computerScore++;
        return "Computer wins that round!";
    }
    else if (computerChoice === "paper" && userInput === "scissors") {
        playerScore++;
        return "You won that round!";
    }
    else if (computerChoice === "scissors" && userInput === "rock") {
        playerScore++;
        return "You won that round!";
    }
    else if (computerChoice === "scissors" && userInput === "paper") {
        computerScore++;
        return "Computer wins that round!";
    }
    else {
        return "ERROR";
    }
}