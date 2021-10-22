// Set variables for game

// Rounds will be 5, but we starting from 0
let rounds = 0;
// We need to count player and computer points
let playerPoints = 0;
let coputerPoints = 0;
// Player inpute value will be saved in "playerValue" variable
let playerValue = '';

// lets create game "symbols", computer gonna play with those randomly
const gameSymbols = ['rock', 'paper', 'scissors'];

// GAME STARTS

// Player must enter 1 value of "gameSymbols" to start a game
playerValue = prompt('Please enter: rock, paper or scissors:');
console.log(playerValue);
