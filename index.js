
// Initialize variables
let computerOptions = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

// Run the game five times
for (let i = 0; i < 5; i++){
    game();
}

// Announce score
console.log("Player score: " + playerScore + " | Computer score: " + computerScore);


// Main game function
function game() {
    let playerChoice = prompt("What do you want to pick? 'Rock', 'Paper', or 'Scissors'?");
    let computerChoice = getComputerChoice(computerOptions);

    console.log("Players choice is: " + playerChoice);
    console.log("Computers choice is: " + computerChoice);
    let result = playRound(playerChoice, computerChoice);
    console.log(result);
    if (result == "You WIN!!") {
        playerScore = playerScore + 1;
    } else if (result == "You LOSE!!" ) {
        computerScore = computerScore + 1;
    } 
}

// Get a random item from a provided array
function getComputerChoice(arrayInput) {
    let randomNumber = Math.floor(Math.random() * arrayInput.length);
    let computerGuess = arrayInput[randomNumber];
    return computerGuess;
}

// Compare player and computer choices, return a string
function playRound(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        return "It's a tie!!";
    }
    else if (playerChoice == "Rock") {
        if (computerChoice == "Paper") {
            return "You LOSE!!";
        }
        else if (computerChoice == "Scissors") {
            return "You WIN!!";
        }
    }
    else if (playerChoice == "Paper") {
        if (computerChoice == "Rock") {
            return "You WIN!!";
        }
        else if (computerChoice == "Scissors") {
            return "You LOSE!!";
        }
    }
    else if (playerChoice == "Scissors") {
        if (computerChoice == "Rock") {
            return "You LOSE!!";
        }
        else if (computerChoice == "Paper") {
            return "You WIN!!";
        }
    } else {
        console.log("Learn to type yo!!!! YOu idiot");
    }
}