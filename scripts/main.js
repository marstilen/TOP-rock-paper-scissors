const choices = ["rock", "paper", "scissors"];
let computerScore = 0; 
let humanScore = 0; 

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice(){
    return getRandomInt(3);
}

function getHumanChoice() {
    let userChoice = prompt("Enter your play(rock, paper, scissors)");
    userChoice = userChoice.toLowerCase();
    return userChoice;
}

function playRound(computerChoice, humanChoice) {
    humanChoice = choices.indexOf(humanChoice);
    if (computerChoice == humanChoice) {
        console.log("Tie!");
    }
    else if(humanChoice-1 == computerChoice || (humanChoice == 0 && computerChoice == 2)){
        console.log(`You won, ${choices[humanChoice]} beats ${choices[computerChoice]}!`);
    }
    else if(humanChoice < computerChoice || (computerChoice == 0 && humanChoice == 2))
    {
        console.log(`You lost, ${choices[computerChoice]} beats ${choices[humanChoice]}!`);
    }
    else{
        console.log("error")
    }
}
playRound(getComputerChoice(), getHumanChoice());