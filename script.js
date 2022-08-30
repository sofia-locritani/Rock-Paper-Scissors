let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const pick = ['rock', 'paper', 'scissors'];
    return pick[Math.floor(Math.random() * pick.length)];
}

function playRound (playerSelection) {
    computerSelection = getComputerChoice()
    let picks = ['rock', 'paper', 'scissors'];

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')) {
        playerScore++;
        alert ('You win!')
        console.log(`You win the round! Your score: ${playerScore} - Computer score: ${computerScore}`)
        }
    else if (playerSelection == computerSelection) {
        alert ("It's a draw!")
        console.log (`The round is a draw! Your score: ${playerScore} - Computer score: ${computerScore}`)
    }
    else {
       computerScore++;
       alert ("You lose!")
       console.log(`Computer wins the round! Your score: ${playerScore} - Computer score: ${computerScore}`)
    }
}

function game() {
    for (let gameRound = 0; gameRound < 5; gameRound++) {
        playRound(prompt("Pick your choice: "))
    }
    if (playerScore > computerScore) {
        console.log ("You won the game!")
    } else if (computerScore > playerScore) {
        console.log ("Computer won the game!")
    } else {
        console.log ("The game ended in a draw.")
    }
}