// Set variables for game

// Rounds will be 5, but we starting from 0
let rounds = 0;
// We need to count player and computer points
let playerPoints = 0;
let computerPoints = 0;
// Player inpute value will be saved in "playerValue" variable
let playerValue = '';
// computer value
let computerValue = '';

// lets create game "symbols", computer gonna play with those randomly
const gameSymbols = ['rock', 'paper', 'scissors'];

// GAME STARTS

// Player must enter 1 value of "gameSymbols" to start a game
function playerSelection() {
    if 
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

        if (playerValue === computerValue) {
        console.log('DRAW!');
            } else if (playerValue === 'rock' && computerValue === 'paper') {
                console.log('paper beats rock, computer wins');
                computerPoints += 1;
                console.log('player points is: ' + playerPoints);
                console.log('computer points is: ' + computerPoints);

                } else if (playerValue === 'rock' && computerValue === 'scissors') {
                    console.log('rock beats scissors, player wins');
                    playerPoints += 1;
                    console.log('player points is: ' + playerPoints);
                    console.log('computer points is: ' + computerPoints); 

                    } else if (playerValue === 'scissor' && computerValue === 'paper') {
                        console.log('scissors beats paper, player wins');
                        playerPoints += 1;
                        console.log('player points is: ' + playerPoints);
                        console.log('computer points is: ' + computerPoints); 
                        
                        } else if (playerValue === 'scissors' && computerValue === 'paper') {
                            console.log('scissors beats paper, player wins');
                            playerPoints += 1;
                            console.log('player points is: ' + playerPoints);
                            console.log('computer points is: ' + computerPoints); 
                            
                            } else if (playerValue === 'scissors' && computerValue === 'rock') {
                                console.log('rock beats scissor, computer wins');
                                computerPoints += 1;
                                console.log('player points is: ' + playerPoints);
                                console.log('computer points is: ' + computerPoints); 
                            
                                } else if (playerValue === 'paper' && computerValue === 'scissors') {
                                    console.log('scissor beats paper, computer wins');
                                    computerPoints += 1;
                                    console.log('player points is: ' + playerPoints);
                                    console.log('computer points is: ' + computerPoints); 
                            
                                    } else if (playerValue === 'paper' && computerValue === 'rock') {
                                        console.log('paper beats rock, player wins');
                                        playerPoints += 1;
                                        console.log('player points is: ' + playerPoints);
                                        console.log('computer points is: ' + computerPoints); 
                            
                                        }

    }

    // check player and computer points after 5 rounds, and announce a winner
    if (playerPoints < computerPoints) {
        console.log('**Winer is a computer, whith: ' + computerPoints + ' points**');
        }   else if (playerPoints > computerPoints) {
                console.log('**Winer is a player, whith: ' + playerPoints + ' points**')
            }else console.log('**DRAW round**') ;

    // player = pc (rock = rock || paper = paper || scissors = scissors) - 
    // if player (rock) & pc (paper) = computer - paper wins - 
    // if player (rock) & pc (scissors) = Player - rock wins - 
    // if player (scissor) & pc (paper) = Player - scissors wins - 
    // if player (scissor) & pc (rock) = rock wins -
    // if player (paper) & pc (scissors) = scissors wins -
    // if player (paper) & pc (rock) = Player - paper wins - 
    
}

letsPlay();