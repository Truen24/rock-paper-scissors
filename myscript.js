function computerPlay() {
    let arr = ["rock", "paper", "scissors"];
    return arr[Math.floor(Math.random() * arr.length)];
}


function playRound(playerSelection, computerSelection) {
    if(playerSelection == "rock" && computerSelection == "scissors") {
        return "You beat the computer, nice!";
    }else if(playerSelection == "paper" && computerSelection == "rock") {
        return "You beat the computer, nice!";
    }else if(playerSelection == "scissors" && computerSelection == "paper") {
        return "You beat the computer, nice!";
    }else {
        console.log("The computer wins this time, unlucky got mine.");
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));

