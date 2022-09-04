let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const pick = ['rock', 'paper', 'scissors'];
    return pick[Math.floor(Math.random() * pick.length)];
}

function playRound () {
    computerSelection = getComputerChoice()
    let picks = ['rock', 'paper', 'scissors'];
    const results = document.createElement('div');
    const result = document.querySelector('.result');
    const winner = document.querySelector('p');
    results.classList.add('results');

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'paper' && computerSelection == 'rock') ||
        (playerSelection == 'scissors' && computerSelection == 'paper')) {
        playerScore++;
         results.textContent = `You win the round. Your score: ${playerScore} - Computer score: ${computerScore}`;
         result.appendChild(results);
        }
    else if (playerSelection == computerSelection) {
        results.textContent = `The round is a draw! Your score: ${playerScore} - Computer score: ${computerScore}`;
        result.appendChild(results);
    }
    else {
       computerScore++;
       results.textContent = `Computer wins the round. Your score: ${playerScore} - Computer score: ${computerScore}`;
       result.appendChild(results);
    }
}



const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', () => {
    playerSelection = 'rock';
    playRound();
  });

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
    playerSelection = 'paper';
    playRound();
});

const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
    playerSelection = 'scissors';
    playRound();
});