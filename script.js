// Get choice of rock paper scissors from computer
// Generate random number between 0 and 2.

function getRandomNumber() {
    return Math.floor(Math.random() * 3)
}
// If number = 0, computer chooses rock. If 1, paper. If 2, scissors.

function getComputerChoice() {
    let randomNumber = getRandomNumber();
    switch (randomNumber) {
        case 0:
            return "rock"
            break;
        case 1:
            return "paper"
            break;
        case 2:
            return "scissors"
            break;
    }
}

// Prompt user for input of rock paper or scissors and convert input to all lowercase

function getUserInput() {
    let userInput = prompt("Choose rock, paper, or scissors: ").toLowerCase(); 
    while (userInput !== "rock" && userInput !== "paper" && userInput !== "scissors") { // check if input is equal to rock paper or scissors
        userInput = prompt("Choose rock, paper, or scissors: ").toLowerCase(); // If not, repeat prompt until correct input is entered
    }
    return userInput;
}



// Compare user input to computer input
// Output winner

function playRound(userInput, computerChoice) {
    console.log("You chose " + userInput + ".");
    console.log("Computer chose " + computerChoice + ".");
    if (computerChoice === userInput) {
        return "That round was a tie!";
    }
    else if (computerChoice === "rock" && userInput === "scissors") {
        return "Computer wins that round!";
    }
    else if (computerChoice === "rock" && userInput === "paper") {
        return "You won that round!";
    }
    else if (computerChoice === "paper" && userInput === "rock") {
        return "Computer wins that round!";
    }
    else if (computerChoice === "paper" && userInput === "scissors") {
        return "You won that round!";
    }
    else if (computerChoice === "scissors" && userInput === "rock") {
        return "You won that round!";
    }
    else if (computerChoice === "scissors" && userInput === "paper") {
        return "Computer wins that round!";
    }
    else {
        return "ERROR";
    }
}






// Create variable for playerScore and computerScore
let playerScore = 0;
let computerScore = 0;
let results;

// Create game function
function game() {
    for (let i = 0; i < 5; i++) {
        // game function loops 5 times. Each loop tracks the winner and adds a point to their score.
        userInput = getUserInput();
        computerChoice = getComputerChoice();
        results = playRound(userInput, computerChoice);
        console.log(results);
        console.log("");
        if (results === "Computer wins that round!") {
            computerScore++;
        }
        else if (results === "You won that round!") {
            playerScore++;
        }
    }
}

game();


// At the end of loop, whoever has higher score wins, print results

function showFinalScore() {
    console.log("");
    console.log("Your final score was: " + playerScore);
    console.log("Computer's final score was: " + computerScore);
}

function showResults() {

    if (playerScore > computerScore) {
        console.log("You won the game!");
    }
    else if (playerScore < computerScore) {
        console.log("You lose!");
    }
    else {
        console.log("The game ended in a tie!");
    }
}

showFinalScore();
showResults();



