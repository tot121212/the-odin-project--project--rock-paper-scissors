/*This is a rock paper scissors game in javascript.*/

function getComputerChoice(){
    max = 3;
    console.log(Math.floor(Math.random() * max));
}

function getHumanChoiceToLower(){
    let humanChoice = document.getElementById("rpsInput").value;
    if (!typeof(humanChoice) === "string"){
        return null;
    }
    let humanChoiceToLower = humanChoice.toLowerCase();
    switch(humanChoiceToLower){
        case "rock", "paper", "scissors":
            return humanChoiceToLower;
        case _:
            return null;
    }
} 

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice = getHumanChoiceToLower(), computerChoice = getComputerChoice()){
    switch(humanChoice){
        case "rock":
            if (computerChoice == 2){
                alert("You win! Rock beats Scissors");
                playerScore += 1;
            }
            else{
                alert("You lose. Paper beats Rock");
                computerScore += 1;
            }
            return 1;
        case "paper":
            if (computerChoice == 0){
                alert("You win! Paper beats Rock");
                playerScore += 1;
            }
            else{
                alert("You lose. Scissors beats Paper");
                computerScore += 1;
            }
            return 1;
        case "scissors" || "scissor":
            if (computerChoice == 1){
                alert("You win! Scissors beats Paper");
                playerScore += 1;
            }
            else{
                alert("You lose. Rock beats Scissors");
                computerScore += 1;
            }
            return 1;
        case _:
            alert("Invalid choice.");
            return 0;
    }
}