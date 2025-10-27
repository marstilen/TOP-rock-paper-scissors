const choices = ["rock", "paper", "scissors"];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice(){
    let randomChoice = getRandomInt(3);
    return choices[randomChoice];
}

function getHumanChoice() {
    let userChoice = prompt("Enter your play(rock, paper, scissors)");
    userChoice = userChoice.toLowerCase();
    return userChoice;
}
