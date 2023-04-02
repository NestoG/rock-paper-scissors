let playerChoice = prompt("What do you want to pick? 'Rock', 'Paper', or 'Scissors'?");
let computerOptions = ["Rock", "Paper", "Scissors"];
let randomNumber = Math.floor(Math.random() * 3);
let computerChoice = computerOptions[randomNumber];
console.log("Players choice is: " + playerChoice);
console.log("Computers choice is: " + computerChoice);

if(playerChoice == "Rock") {
    if (computerChoice == "Rock") {
        console.log("It's a tie!!");
    }
    else if (computerChoice == "Paper") {
        console.log("You LOSE!!");
    }
    else if (computerChoice == "Scissors") {
        console.log("You WIN!!");
    }
}
else if(playerChoice == "Paper") {
    if (computerChoice == "Rock") {
        console.log("You WIN!!");
    }
    else if (computerChoice == "Paper") {
        console.log("It's a tie!!");
    }
    else if (computerChoice == "Scissors") {
        console.log("You LOSE!!");
    }
}
else if(playerChoice == "Scissors") {
    if (computerChoice == "Rock") {
        console.log("You Lose!!");
    }
    else if (computerChoice == "Paper") {
        console.log("You Win!!");
    }
    else if (computerChoice == "Scissors") {
        console.log("It's a tie!!");
    }
} else {
    console.log("Learn to type yo!!!! YOu idiot");
}