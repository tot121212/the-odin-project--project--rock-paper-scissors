//This is a rock paper scissors game in javascript.

let humanScore = 0;
let computerScore = 0;

const rpsResult = document.querySelector(".rpsResult");

function updateRpsResult(updatedText){
    if (!(rpsResult instanceof Element)){
        return 0;
    }
    rpsResult.textContent = updatedText;
    return 1;
}

const rpsScores = document.querySelectorAll(".rpsScores div .score");
if (!(rpsScores instanceof NodeList)){
    console.error("rpsScore is not a NodeList");
}

function updateRpsScoreHTML(scoreToUpdate){
    rpsScores.forEach(scoreElement => {
        if (scoreElement.id === scoreToUpdate){
            switch (scoreToUpdate){
                case "humanScore":
                    scoreElement.textContent = String(humanScore);
                    return 1;
                case "computerScore":
                    scoreElement.textContent = String(computerScore);
                    return 1;
                default:
                    console.warn(`${score.id} is not a valid participant in the game.`);
                    return 0;
            }
        }
    });
}

function getComputerChoice(){
    max = 3;
    computerChoice = Math.floor(Math.random() * max);
    if (typeof(computerChoice) !== "number"){
        console.error("No computerChoice was made");
        return null;
    }
    console.log("computerChoice = " + computerChoice);
    return computerChoice;
}

function playRound(humanChoice, computerChoice = getComputerChoice()){ // play round with human choice and computer choice
    if (typeof(humanChoice) !== "string"){
        console.error("humanChoice is not a string");
        return 0;
    }
    if (typeof(computerChoice) !== "number"){
        console.error("computerChoice is not a number");
        return 0;
    }

    switch(humanChoice){ // this is arguably bad but eh
        case "rock":
            switch (computerChoice){
                case 0:
                    updateRpsResult("Tie.");
                    return 1;
                case 1:
                    computerScore += 1;
                    updateRpsScoreHTML("computerScore");
                    updateRpsResult("You lose. Paper beats Rock.");
                    return 1;
                case 2:
                    humanScore += 1;
                    updateRpsScoreHTML("humanScore");
                    updateRpsResult("You win! Rock beats Scissors.");
                    return 1;
                default:
                    console.log("Invalid choice.");
                    return 0;
            }
        case "paper":
            switch (computerChoice){
                case 0:
                    humanScore += 1;
                    updateRpsScoreHTML("humanScore");
                    updateRpsResult("You win! Paper beats Rock.");
                    return 1;
                case 1:
                    updateRpsResult("Tie.");
                    return 1;
                case 2:
                    computerScore += 1;
                    updateRpsScoreHTML("computerScore");
                    updateRpsResult("You lose. Scissors beats Paper.");
                    return 1;
                default:
                    console.log("Invalid choice.");
                    return 0;
            }
        case "scissors":
            switch (computerChoice){
                case 0:
                    computerScore += 1;
                    updateRpsScoreHTML("computerScore");
                    updateRpsResult("You lose. Rock beats Scissors.");
                    return 1;
                case 1:
                    humanScore += 1;
                    updateRpsScoreHTML("humanScore");
                    updateRpsResult("You win! Scissors beats Paper.");
                    return 1;
                case 2:
                    updateRpsResult("Tie.");
                    return 1;
                default:
                    console.log("Invalid choice.");
                    return 0;
            }
        default:
            console.error("Invalid choice.");
            return 0;
    }
}

function startRoundOnClick(event){
    if (!(event instanceof Event)){ // make sure event exists
        console.error("event is not an Element");
        return;
    }
    if (!(event.target instanceof Element)){
        console.error("event.target is not an Element");
        return;
    }
    if (!(typeof(event.target.id) === "string")){
        console.error("event.target.id is not a string")
    }
    
    console.log(`you selected ${event.target.id}`);
    playRound(event.target.id);
}

const humanSelections = document.querySelector(".humanSelections");

if (!(humanSelections instanceof Element)){
    console.error("element with class 'humanSelections' not found.");
}

humanSelections.addEventListener("click",  startRoundOnClick);
