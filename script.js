//Globals
let playerClick;
let playerInput;
const choiceArray = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let compScore = 0;
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

const feedback = document.createElement('div');
feedback.classList.add('feedback');

container.appendChild(feedback);


const winState = document.createElement('div');
winState.classList.add('winState');

feedback.appendChild(winState);


const score = document.createElement('div');
score.classList.add('score');

feedback.appendChild(score);

const finalResult = document.createElement('div');
finalResult.classList.add('final');

feedback.appendChild(finalResult);

const restart = document.createElement('div');
restart.classList.add('restart');

container.appendChild(restart);

const endButton = document.createElement('button');
endButton.classList.add('endButton');
endButton.textContent = 'Start a new game?'

restart.appendChild(endButton);

//Game scripting

function startGame (){
    playerScore = 0;
    compScore = 0;
    score.textContent = 'Player Score =  0/5  Computer Score =  0/5';
    winState.textContent = 'Make your selection';
    finalResult.textContent = 'The game begins!';
}

const startRound = document.querySelector('.endButton');
    endButton.addEventListener('click', startGame);

const buttonClick = document.querySelectorAll('button');

    buttonClick.forEach((button) => {button.addEventListener('click', ()=>{
    
        playerClick = button.className;
        if (playerClick == 'rock'){
            playerInput = 'rock'
        }
        else if (playerClick == 'paper'){
            playerInput = 'paper'
        }
        else if (playerClick == 'scissors'){
            playerInput = 'scissors'
        }
    }
    )})

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
            winState.textContent ='You both chose the same, you draw!';
            break;
        
        case playerSelection === 'rock' && computerSelection === 'scissors':
            playerScore++;
            winState.textContent = 'Rock beats Scissors. You win!';
            break;

        case playerSelection === 'rock' && computerSelection === 'paper':
            compScore++;
            winState.textContent = 'Paper beats Rock! Unlucky, try again.';
            break;
        
        case playerSelection === 'scissors' && computerSelection === 'paper':
            playerScore++; 
            winState.textContent = 'Scissors beats Paper. You win!';
            break;
            
        case playerSelection === 'scissors' && computerSelection === 'rock':
            compScore++;
            winState.textContent = 'Rock beats Scissors. Unlucky, try again.';
            break;

        case playerSelection === 'paper' && computerSelection === 'rock':
            playerScore++;
            winState.textContent = 'Paper beats Rock. You win!';
            break;
            
        case playerSelection === 'paper' && computerSelection === 'scissors':
            compScore++;
            winState.textContent = 'Scissors beats Paper. Unlucky try again';
            break;  

        default: winState.textContent = 'Make your selection';
    }   

        score.textContent = `Player Score =  ${playerScore} /5  Computer Score =  ${compScore} /5`
        

        switch (true){
            case playerScore === 0 && compScore === 0 :
                finalResult.textContent = '';
                break;
            
            case playerScore === 5 && compScore != 5:
               finalResult.textContent = 'Congratulations! You win!';
                break;
            
            case compScore === 5 && playerScore !=5 :
                finalResult.textContent = 'You lose. Try again?';
                break;
            
            case playerScore === 5 && compScore === 5 :
                finalResult.textContent = 'It\'s a draw. Try again?';
                break;
            
            default: finalResult.textContent = 'The game continues...';
            }


        if (playerScore >= 5 || compScore >= 5) {
        playerScore = 0;
        compScore = 0;
        }
}

const clickRound = document.querySelector('.buttons');
clickRound.addEventListener('click', playRound);



    

