let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let max = 3;
    randomNumber = Math.floor(Math.random() * max);
    if (randomNumber === 0){
        console.log("The computer chooses rock!");
        return "Rock";
    }
    else if (randomNumber === 1){
        console.log("The computer chooses paper!")
        return "Paper";
    }
    else if (randomNumber === 2){
        console.log("The computer chooses scissors!");
        return "Scissors";
    }
}


function playRound(computerSelection, playerSelection){
    playerSelectionLower = playerSelection.toLowerCase();
    playerSelectionCap = playerSelection.charAt(0).toUpperCase();
    playerSelection = playerSelectionLower.replace(playerSelectionLower.charAt(0),playerSelectionCap);
    if(playerSelection === computerSelection){
        return "You also chose " + playerSelection.toLowerCase() + ". It's a tie!";
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors"){
        playerScore++;
        console.log("You chose rock.");
        return "You win! Rock beats scissors.";
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock"){
        playerScore++;
        console.log("You chose paper.");
        return "You win! Paper beats rock.";
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper"){
        playerScore++;
        console.log("You chose scissors.");
        return "You win! Scissors beats paper.";
    }
    else if (playerSelection === "Scissors" && computerSelection === "Rock"){
        computerScore++;
        console.log("You chose scissors.");
        return "You lose! Rock beats scissors.";
    }
    else if (playerSelection === "Rock" && computerSelection === "Paper"){
        computerScore++;
        console.log("You chose rock.");
        return "You lose! Paper beats rock.";
    }
    else if (playerSelection === "Paper" && computerSelection === "Scissors"){
        computerScore++;
        console.log("You chose paper.");
        return "You lose! Scissors beats paper.";
    }
}



function game(){
    for(let i = 1; i <= 5; i++){
        console.log("\nRound " + i + "!");
        let playerSelection = prompt("Choose rock, paper, or scissors: ");
        let computerSelection = getComputerChoice();
        console.log(playRound(computerSelection, playerSelection));
        console.log("Your score is: " + playerScore)
        console.log("The computer score is: " + computerScore)
    }
    if(playerScore === computerScore){
        console.log("\nYour final score is " + playerScore 
        + "\nThe computer's final score is " + computerScore
        + "\nNo one wins! It's a tie!")
    }
    else if(playerScore > computerScore){
        console.log("\nYour final score is " + playerScore 
        + "\n\nThe computer's final score is " + computerScore
        + "\nCongratulations! You win the game!")
    }
    else if(playerScore < computerScore){
        console.log("\nYour final score is " + playerScore 
        + "\nThe computer's final score is " + computerScore
        + "\nYou lose!")
    }
}

game();
