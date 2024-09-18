
// craete a function to get computer choice
function getComputerChoice(computerList) {
    let index = Math.floor(Math.random() * (computerList.length));
    return computerList[index];      
}

const computerList = ["rock", "paper", "scissors"];

// create a function to get human choice

function getHumanChoice(userInput) {
// console.log(userInput);
    return userInput;
}

// player scores
let humanScore = 0;
let computerScore = 0;

// human and computer score elements
const hScore = document.getElementById("human-score");
const cScore = document.getElementById("computer-score");

// result element
const result = document.getElementById("result");

let roundsPlayed = 0;

// write the logic to play a single round
function playRound(humanChoice, computerChoice) {
    if(roundsPlayed >= 5) return;
    roundsPlayed++;

    if(humanChoice === computerChoice) {
        result.textContent = "It's a Tie";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
        result.textContent = "Human won";
        hScore.textContent = humanScore += 1;
    } else {
        result.textContent = "computer won";
        cScore.textContent = computerScore += 1;
    }

    if(roundsPlayed === 5 || humanScore > 1 || computerScore > 1) {
        finalWinner();
        disableButtons();
    }
}

function disableButtons() {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}


// add evetListenrs to the buttons
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

// human and computer choice elements
const humanInput = document.getElementById("human-choice")
const computerInput = document.getElementById("computer-choice")

rockBtn.addEventListener("click", () => {
    humanInput.textContent = "rock";
    computerInput.textContent = getComputerChoice(computerList);
    playRound(humanInput.textContent, computerInput.textContent);
});

paperBtn.addEventListener("click", () => {
    humanInput.textContent = "paper";
    computerInput.textContent = getComputerChoice(computerList);
    playRound(humanInput.textContent, computerInput.textContent);
});

scissorsBtn.addEventListener("click", () => {
    humanInput.textContent = "scissors";
    computerInput.textContent = getComputerChoice(computerList);
    playRound(humanInput.textContent, computerInput.textContent);
});

// player score and final winner
const playerScore = document.getElementById("player-score");
const finalResult = document.getElementById("final-result");


function finalWinner() {
    playerScore.textContent = `Final Score - Human: ${humanScore}, Computer: ${computerScore}`;
    if (humanScore === computerScore) {
        finalResult.textContent = "It's a Tie after 5 rounds!";
    } else if (humanScore > computerScore) {
        finalResult.textContent = "Human Wins the game!";
    } else {
        finalResult.textContent = "Computer Wins the game!";
    }
}



