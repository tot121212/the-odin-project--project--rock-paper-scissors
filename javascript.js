/*This is a rock paper scissors game in javascript.*/

function getComputerChoice(){
    max = 3;
    computerChoice = Math.floor(Math.random() * max)
    if (computerChoice === undefined){
        console.log("No computerChoice")
        return null;
    }
    console.log("computerChoice = " + computerChoice);
    return computerChoice;
}

function getHumanChoiceToLower(){
    let humanChoice = document.getElementById("rpsInput").value;
    if (typeof(humanChoice) !== "string"){
        return null;
    }
    let humanChoiceToLower = humanChoice.toLowerCase();
    switch(humanChoiceToLower){
        case "rock":
        case "paper":
        case "scissors":
            console.log("humanChoice = " + humanChoice);
            return humanChoiceToLower;
        default:
            console.log("No humanChoice")
            return null;
    }
} 

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice = getHumanChoiceToLower(), computerChoice = getComputerChoice()){
    if (humanChoice === undefined || computerChoice === undefined){
        console.log("No humanChoice or computerChoice");
        return 0;
    }
    switch(humanChoice){
        case "rock":
            switch (computerChoice){
                case 0:
                    alert("Tie.");
                    return 1;
                case 1:
                    alert("You lose. Paper beats Rock.");
                    computerScore += 1;
                    return 1;
                case 2:
                    alert("You win! Rock beats Scissors.");
                    humanScore += 1;
                    return 1;
                default:
                    console.log("Invalid choice.");
                    return 0;
            }
            return 1;
        case "paper":
            switch (computerChoice){
                case 0:
                    alert("You win! Paper beats Rock.");
                    humanScore += 1;
                    return 1;
                case 1:
                    alert("Tie.");
                    return 1;
                case 2:
                    alert("You lose. Scissors beats Paper.");
                    computerScore += 1;
                    return 1;
                default:
                    console.log("Invalid choice.");
                    return 0;
            }
        case "scissors":
            switch (computerChoice){
                case 0:
                    alert("You lose. Rock beats Scissors.");
                    computerScore += 1;
                    return 1;
                case 1:
                    alert("You win! Scissors beats Paper.");
                    humanScore += 1;
                    return 1;
                case 2:
                    alert("Tie.");
                    return 1;
                default:
                    console.log("Invalid choice.");
                    return 0;
            }
    }
}