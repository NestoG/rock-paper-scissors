let totalGameChoice = prompt("How many games do you want to play?:");
let computerOptions = ["Rock", "Paper", "Scissors"];

let playerScore = 0;
let computerScore = 0;
let totalGames = 0;

while (totalGames < totalGameChoice) {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = computerOptions[randomNumber];
    let playerChoice = prompt("What do you want to pick? 'Rock', 'Paper', or 'Scissors'?");
    console.log("Players choice is: " + playerChoice);
    console.log("Computers choice is: " + computerChoice);

    if (playerChoice == computerChoice) {
        console.log("It's a tie!!");
    }
    else if (playerChoice == "Rock") {
        if (computerChoice == "Paper") {
            console.log("You LOSE!!");
            computerScore = computerScore + 1;
        }
        else if (computerChoice == "Scissors") {
            console.log("You WIN!!");
            playerScore = playerScore + 1;
        }
    }
    else if (playerChoice == "Paper") {
        if (computerChoice == "Rock") {
            console.log("You WIN!!");
            playerScore = playerScore + 1;
        }
        else if (computerChoice == "Scissors") {
            console.log("You LOSE!!");
            computerScore = computerScore + 1;
        }
    }
    else if (playerChoice == "Scissors") {
        if (computerChoice == "Rock") {
            console.log("You Lose!!");
            computerScore = computerScore + 1;
        }
        else if (computerChoice == "Paper") {
            console.log("You Win!!");
            playerScore = playerScore + 1;
        }
    } else {
        console.log("Learn to type yo!!!! YOu idiot");
    }
    totalGames = totalGames + 1;
}

console.log("Player score: " + playerScore + " | Computer score: " + computerScore);