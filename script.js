// Element Scripting
const container = document.querySelector('#container')


const buttons = document.createElement('div');
buttons.classList.add('buttons');

container.appendChild(buttons);

const rock = document.createElement('button');
rock.classList.add('rock');
rock.textContent = 'Rock';

buttons.appendChild(rock);

const paper = document.createElement('button');
paper.classList.add('paper');
paper.textContent = 'Paper';

buttons.appendChild(paper);

const scissors = document.createElement('button');
scissors.classList.add('scissors');
scissors.textContent = 'Scissors';

buttons.appendChild(scissors);

let playerClick
let playerInput

const buttonClick = document.querySelectorAll('button');

buttonClick.forEach((button) => {button.addEventListener('click', ()=>{

    playerClick = button.className;
    if (playerClick == 'rock'){
        playerInput = 'rock'
    }
    else if (playerClick == 'paper'){
        playerInput = 'rock'
    }
    else if (playerClick == 'scissors'){
        playerInput = 'scissors'
    }
}
)})

    
// Game scripting

const choiceArray = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let compScore = 0;



function getComputerChoice(){
    const randomSelection = choiceArray[Math.floor(Math.random()*choiceArray.length)]; 
    return randomSelection;
}

function playRound(){
    const computerSelection = getComputerChoice();
    const playerSelection = playerInput;
  


    switch (true) { 
        case playerSelection === computerSelection:
            playerScore++;
            compScore++;
            console.log('You both chose the same, you draw!');
            break;
        
        case playerSelection === 'rock' && computerSelection === 'scissors':
            playerScore++;
            console.log('Rock beats Scissors. You win!');
            break;

        case playerSelection === 'rock' && computerSelection === 'paper':
            compScore++;
            console.log('Paper beats Rock! Unlucky, try again.');
            break;
        
        case playerSelection === 'scissors' && computerSelection === 'paper':
            playerScore++;    
            console.log('Scissors beats Paper. You win!');
            break;
            
        case playerSelection === 'scissors' && computerSelection === 'rock':
            compScore++;
            console.log('Rock beats Scissors. Unlucky, try again.');
            break;

        case playerSelection === 'paper' && computerSelection === 'rock':
            playerScore++;
            console.log('Paper beats Rock. You win!');
            break;
            
        case playerSelection === 'paper' && computerSelection === 'scissors':
            compScore++;
            console.log('Scissors beats Paper. Unlucky try again');
            break;  

        default: console.log('Make your selection')
    }   

}


   

const clickRound = document.querySelectorAll('button');
clickRound.forEach((button) => {
   button.addEventListener('click', playRound
   )})
















//function game(){
//    for (let i = 0; i < 5; i++){
//    console.log(playRound()); 
//    console.log('Player Score = ', playerScore, '/5');
//    console.log('Computer Score = ', compScore, '/5');
    
//    }

//    if (playerScore > compScore) {
//        console.log('Congratulations! You win!')
//        }

//    else if (playerScore < compScore) {
//        console.log('You lose. Try again?')
//        }

//    else if (playerScore === compScore) {
//        console.log('It\'s a draw. Try again?')
//        }

//    else {
//        console.log('Something went wrong.')
//        }

//}