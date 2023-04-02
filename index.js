
// Initialize variables
let computerOptions = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;
const container = document.querySelector(".container");


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        game(button.id);
        const content = document.createElement('p');
        content.textContent = "**************************************";
        container.appendChild(content);
    })
})


// Main game function
function game(playerChoice) {

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
    const content = document.createElement('p');
    content.classList.add('result');
    content.textContent = result + " The score is Player: " + playerScore + " | Computer: " + computerScore;
    container.appendChild(content);
    if(playerScore == 5 || computerScore == 5) {
        const content = document.createElement('p');
        content.textContent = "GAME OVER!!! The score is Player: " + playerScore + " | Computer: " + computerScore;
        container.appendChild(content);
        for(button of buttons){
            button.style.display='none';
        }

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
    const content = document.createElement('p');
    content.textContent = "Players choice: " + playerChoice + " | Computer choice: " + computerChoice;
    container.appendChild(content);

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