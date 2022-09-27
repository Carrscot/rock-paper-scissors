// Game scripting

const choiceArray = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let compScore = 0;
const result = playRound();


function getComputerChoice(){
    const randomSelection = choiceArray[Math.floor(Math.random()*choiceArray.length)]; 
    return randomSelection;
}

function playRound(){
    const computerSelection = getComputerChoice();
    const playerInput = prompt('Rock, Paper, Scissors?');
    const playerSelection = playerInput.toLowerCase();


    switch (true) { 
        case playerSelection === computerSelection:
            playerScore++;
            compScore++;
            return 'You both chose the same, you draw!';
            break;
        
        case playerSelection === 'rock' && computerSelection === 'scissors':
            playerScore++;
            return 'Rock beats Scissors. You win!';
            break;

        case playerSelection === 'rock' && computerSelection === 'paper':
            compScore++;
            return 'Paper beats Rock! Unlucky, try again.';
            break;
        
        case playerSelection === 'scissors' && computerSelection === 'paper':
            playerScore++;    
            return 'Scissors beats Paper. You win!';
            break;
            
        case playerSelection === 'scissors' && computerSelection === 'rock':
            compScore++;
            return 'Rock beats Scissors. Unlucky, try again.';
            break;

        case playerSelection === 'paper' && computerSelection === 'rock':
            playerScore++;
            return 'Paper beats Rock. You win!';
            break;
            
        case playerSelection === 'paper' && computerSelection === 'scissors':
            compScore++;
            return 'Scissors beats Paper. Unlucky try again';
            break;  

        default: return 'You did not make a selection'
    }   

}

function game(){
    for (let i = 0; i < 5; i++){
    console.log(playRound()); 
    console.log('Player Score = ', playerScore, '/5');
    console.log('Computer Score = ', compScore, '/5');
    
    }

    if (playerScore > compScore) {
        console.log('Congratulations! You win!')
        }

    else if (playerScore < compScore) {
        console.log('You lose. Try again?')
        }

    else if (playerScore === compScore) {
        console.log('It\'s a draw. Try again?')
        }

    else {
        console.log('Something went wrong.')
        }

}

// Element Scripting
const container = document.querySelector('#container')


const buttons = document.createElement('div');
buttons.classList.add('buttons');

container.appendChild(buttons);

const rock = document.createElement('button');
rock.classList.add('buttonClick');
rock.textContent = 'Rock';

buttons.appendChild(rock);

const paper = document.createElement('button');
paper.classList.add('buttonClick');
paper.textContent = 'Paper';

buttons.appendChild(paper);

const scissors = document.createElement('button');
scissors.classList.add('buttonClick');
scissors.textContent = 'Scissors';

buttons.appendChild(scissors);