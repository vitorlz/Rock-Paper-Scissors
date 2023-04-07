let playerScore = 0;
let computerScore = 0;
const result = document.querySelector('.results');
const action = document.querySelector('.action');
const playerImgContainer = document.querySelector('.playerImage');
const computerImgContainer = document.querySelector('.computerImage');
const defaultText1 = document.createElement('div');
const defaultText2 = document.createElement('div');
defaultText1.textContent = "You";
defaultText2.textContent = "Computer";
playerImgContainer.appendChild(defaultText1);
computerImgContainer.appendChild(defaultText2);
const playerScoreDiv = document.querySelector('.playerScore');
const computerScoreDiv = document.querySelector('.computerScore');




function getComputerChoice(){
    let max = 3;
    randomNumber = Math.floor(Math.random() * max);
    if (randomNumber === 0){
        return "Rock";
    }
    else if (randomNumber === 1){
        return "Paper";
    }
    else if (randomNumber === 2){
        return "Scissors";
    }
}


function playRound(computerSelection, playerSelection){
    playerSelectionLower = playerSelection.toLowerCase();
    playerSelectionCap = playerSelection.charAt(0).toUpperCase();
    playerSelection = playerSelectionLower.replace(playerSelectionLower.charAt(0),playerSelectionCap);
    if(playerSelection === computerSelection){
        result.textContent = "You also chose " + playerSelection.toLowerCase() + ". It's a tie!";
        imgLoader(playerSelection, computerSelection);
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors"){
        playerScore++;
        imgLoader(playerSelection, computerSelection);
        result.textContent = "You win! Rock beats scissors.";
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock"){
        playerScore++;
        imgLoader(playerSelection, computerSelection);
        result.textContent = "You win! Paper beats rock.";
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper"){
        playerScore++;
        imgLoader(playerSelection, computerSelection);
        result.textContent = "You win! Scissors beats paper.";
    }
    else if (playerSelection === "Scissors" && computerSelection === "Rock"){
        computerScore++;
        imgLoader(playerSelection, computerSelection);
        result.textContent = "You lose! Rock beats scissors.";
    }
    else if (playerSelection === "Rock" && computerSelection === "Paper"){
        computerScore++;
        imgLoader(playerSelection, computerSelection);
        result.textContent = "You lose! Paper beats rock.";
    }
    else if (playerSelection === "Paper" && computerSelection === "Scissors"){
        computerScore++;
        imgLoader(playerSelection, computerSelection);
        result.textContent = "You lose! Scissors beats paper.";
    }
    playerScoreDiv.textContent = playerScore;
    computerScoreDiv.textContent = computerScore;
}

function imgLoader(playerSelection, computerSelection){
    
    if(playerImgContainer.firstChild){
        playerImgContainer.removeChild(playerImgContainer.firstChild);
        computerImgContainer.removeChild(computerImgContainer.firstChild);
    }
    
    const playerImage = document.createElement('img');
    playerImage.setAttribute('src', `img/${playerSelection.toLowerCase()}.png`);
    playerImage.classList.add('img1');
    playerImgContainer.appendChild(playerImage);

    const computerImage = document.createElement('img');
    computerImage.setAttribute('src', `img/${computerSelection.toLowerCase()}.png`)
    computerImage.classList.add('img2');
    computerImgContainer.appendChild(computerImage);
}



function game(){
    

    const buttons = document.querySelectorAll("button");

    
        buttons.forEach((button) => {
            button.addEventListener('click', (e) => {
                playRound(getComputerChoice(), button.textContent);
            });
        })

    // Make the game go up to 5. Announce winner once one player reaches 5 points.
    
    
        
    
        
        //let playerSelection = prompt("Choose rock, paper, or scissors: ");
        //let computerSelection = getComputerChoice();
       // console.log(playRound(computerSelection, playerSelection));
       // console.log("Your score is: " + playerScore)
       // console.log("The computer score is: " + computerScore)
    
    /* if(playerScore === computerScore){
        console.log("\nYour final score is " + playerScore 
        + "\nThe computer's final score is " + computerScore
        + "\nNo one wins! It's a tie!")
    }
    else if(playerScore > computerScore){
        console.log("\nYour final score is " + playerScore 
        + "\nThe computer's final score is " + computerScore
        + "\nCongratulations! You win the game!")
    }
    else if(playerScore < computerScore){
        console.log("\nYour final score is " + playerScore 
        + "\nThe computer's final score is " + computerScore
        + "\nYou lose!")
    }
    */ 
}

game();
