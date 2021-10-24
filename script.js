// Set variables for game

// Rounds will be 5, but we starting from 0
let rounds = 0;
// We need to count player and computer points
let playerPoints = 0;
let coputerPoints = 0;
// Player inpute value will be saved in "playerValue" variable
let playerValue = '';
// computer value
let computerValue = '';

// lets create game "symbols", computer gonna play with those randomly
const gameSymbols = ['rock', 'paper', 'scissors'];

// GAME STARTS

// Player must enter 1 value of "gameSymbols" to start a game
function playerSelection() {
    return prompt('Please enter: rock, paper or scissors:');
}


// computer takes 1 random value from gameSymbols array everytime this function is called
function computerSelection () {
    return gameSymbols[Math.floor(Math.random() * gameSymbols.length)];
    // console.log(computerValue);

}
// computerRandomValue();

// need to play 5 rounds and in each round we need to compare player and computer values
function letsPlay() {
    for (rounds; rounds < 6; rounds++) {
        // calls function, where player enters a "game symbol" to start a game
        playerValue =  playerSelection();
        playerValue = playerValue.toLocaleLowerCase();
        console.log(playerValue);

    // calls function to generate random "computer" "game symbol"
        computerValue = computerSelection();
        console.log(computerValue);
    }

    // player = pc (rock = rock || paper = paper || scissors = scissors)
    // if player (rock) & pc (paper) = paper wins
    // if player (rock) & pc (scissors) = Player - rock wins
    // if player (scissor) & pc (paper) = Player - scissors wins
    // if player (scissor) & pc (rock) = rock wins
    // if player (paper) & pc (scissors) = scissors wins
    // if player (paper) & pc (rock) = Player - paper wins
    
}

letsPlay();