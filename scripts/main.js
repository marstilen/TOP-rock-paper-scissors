function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    let randomChoice = getRandomInt(3);
    return choices[randomChoice];
}

console.log(getComputerChoice());