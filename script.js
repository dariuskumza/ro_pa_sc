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

    
    // for (rounds; rounds < 6; rounds++) {
    //     if (playerValue === computerValue) {
    //         console.log('DRAW!');
    //     }
    // console.log(rounds);
    // }

}

letsPlay();