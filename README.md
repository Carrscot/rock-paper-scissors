# rock-paper-scissors
First Javascript project

First Step - 

Create html biolerplate. Plan with pseudocode step by step:

1 (Done). Create getComputerChoice function = returns 'Rock', 'Paper' or 'Scissors' randomly.
	-Use Array
	-Random () function

2. (Done) Create a single round Function = 2 parameters: playerSelection and computerSelection.
	-Player selection =input (case insensitive - https://stackoverflow.com/questions/24856960/user-input-case-insensitive)
	-computer slection = const from getComputerChoice function
	-if...else if statements to compare options. boolean comparisons. 
	-RETURN (not console.log) string based on result i.e 'You lose! x beats Y'

3. (Done) Create function called game() - calls playRound function mutiple times in a loop.
	-keeps score = assign value to win lose states xxx
	-assign incrimental increase in scores to switch statement in playRound function
	-reports winner or loser at the end

**assign delay to promt so it only gets called when either playRound or game functions are called.

rock = rock
scissors = scissors
paper = paper
rock > scissors
rock < paper
scissors > paper

UI construction:

1. (Done) Create separate CSS and javascript files, move all script in HTML into script.js and link scrip.js and style.css into html file.

2. Create a button for each selection that calls playRound function when clicked.

3. Create an element that displays the result of each round.

4. Make function to calculate winner and display win or loss messages.
