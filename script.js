console.log("Hello World")

const choices = ["rock","paper","scissors"];
let humanScore=0;
let computerScore=0;


function getComputerChoice(){
    const randomNum = Math.random();
    const index = Math.floor(randomNum * choices.length);
    return choices[index];

}

function getHumanChoice(){
    let userInput;
    let lowerCaseChoice
    while (true) { // Loop indefinitely until a valid option or cancellation
    userInput = prompt("Please choose an option (rock, paper, or scissors):");

    if (userInput === null) {
        // User clicked Cancel
        console.log("User canceled the selection.");
        lowerCaseChoice=null;
        break; // Exit the loop
    }

    // Convert input to lowercase for case-insensitive comparison
    lowerCaseChoice = userInput.toLowerCase();
    if (choices.includes(lowerCaseChoice)) {
        console.log("You chose: " + lowerCaseChoice);
        break; // Exit the loop because a valid option was entered
    } else {
        alert("Invalid choice. Please enter rock, paper, or scissors.");
    }
    }
    return lowerCaseChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice=="rock"){
        if (computerChoice=="rock"){
            console.log("Draw!")

        }
        else if (computerChoice=="paper"){
            console.log("You lose! Paper beats Rock")
            computerScore++;

        }
        else if (computerChoice=="scissors"){
            console.log("You win! Rock beats Scissors")
            humanScore++;
        
        }
    }
    else if (humanChoice=="paper"){
        if (computerChoice=="rock"){
            console.log("You win! Paper beats Rock")
            humanScore++;

        }
        else if (computerChoice=="paper"){
            console.log("Draw")

        }
        else if (computerChoice=="scissors"){
            console.log("You lose! Scissors beats Paper")
            computerScore++;
        
        }

    }
    else if (humanChoice=="scissors"){
        if (computerChoice=="rock"){
            console.log("You lose! Rock beats Scissors")
            computerScore++;

        }
        else if (computerChoice=="paper"){
            console.log("You win! Scissors beats Paper")
            humanScore++;

        }
        else if (computerChoice=="scissors"){
            console.log("Draw!")
        
        }
        
    }
}

function playGame(rounds){
    
    for(let i=0;i<rounds;i++){
        
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);


    }
     console.log(`After ${rounds} rounds, the score is human ${humanScore} and computer ${computerScore}\n`)
     if(humanScore>computerScore){
        console.log("You win!")}
        else if (humanScore<computerScore){
            console.log("Computer wins!")
        }
        else if(humanScore==computerScore){
            console.log("You draw!")
        }
    
}

const rounds=5;


playGame(rounds);

