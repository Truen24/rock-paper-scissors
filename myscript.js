// let test = prompt("Enter something");
// test = test.toLowerCase();
// console.log(test);

let playerCounter = 0;

let computerCounter = 0;

game();


function computerPlay() {
    let arr = ["rock", "paper", "scissors"];
    return arr[Math.floor(Math.random() * arr.length)];
}


function playRound(playerSelection, computerSelection) {

    if(playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
        console.log(computerSelection);
        console.log("You beat the computer in this round, nice!")
        return playerCounter++;
    }else if(playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
        console.log(computerSelection);
        console.log("You beat the computer in this round, nice!")
        return playerCounter++;
    }else if(playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
        console.log(computerSelection);
        console.log("You beat the computer in this round, nice!")
        return playerCounter++;
    }else if(playerSelection.toLowerCase() == computerSelection) {
        console.log(computerSelection);
        console.log("It's a tie!")
    }
    else {
        console.log(computerSelection);
        console.log("The computer wins this time, unlucky got mine.");
        return computerCounter++;
    }
}

function game() {

    for(let i = 0; i < 5; i++) {

        let computerSelection = computerPlay();

        let playerSelection = prompt("Rock, Paper, or Scissors? Feeling lucky punk?");

        playRound(playerSelection, computerSelection);
    }

    console.log("Here is the player count: " + playerCounter);
    console.log("Here is the computer count: " + computerCounter);

    if(playerCounter > computerCounter) {
        console.log("You beat the computer in a emergency best of 5! Woot!");
    }else if(playerCounter == computerCounter) {
        console.log("Tied! Run it back!");
    }
    else {
        console.log("The computer won this time... emergency best of 7?!");
    }
}





