
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

    // 

    // write the logic to play a single round
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    console.log(humanChoice);
    console.log(computerChoice);
    if(humanChoice === computerChoice) {
        console.log(`I'ts a tie you both chose "${humanChoice}" and "${computerChoice}"`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
        console.log(`You Won! "${humanChoice}" beats "${computerChoice}"`);
        humanScore += 1;
    } else {
        console.log(`You lose! "${computerChoice}" beats "${humanChoice}"`);
        computerScore += 1;
    }
}


    // write a function to play the entire game
function playGame() {
    for(let i=0; i<5; i++) {
        const userInput = prompt("rock paper scissors");
        const humanSelection = getHumanChoice(userInput);

        if (userInput === null || userInput === "" || !(userInput)) {
            console.log("invalid inputs");
            continue;
        }
            
        const computerSelection = getComputerChoice(computerList);
        playRound(humanSelection, computerSelection);
    }
}


function finalWinner() {
    if (humanScore == computerScore) {
        console.log("I'ts a Tie");
    } else if (humanScore > computerScore) {
        console.log(`You won Your Score : ${humanScore}, and Computer Score : ${computerScore}`);
    } else {
        console.log(`You lost Your Score : ${humanScore}, and Computer Score : ${computerScore}`);
    }
}


playGame();
finalWinner();


