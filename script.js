//Create function to get computer choice
function getComputerSelection() {
    let computerChoices = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * 3); //random number between 0, 1, 2
    let computerSelection = computerChoices[randomNumber];
    console.log(`The computer has selected ${computerSelection}.`);
    return computerSelection;
}

//Create function to get user choice
function getUserSelection(){
    let userSelection;
    do {
        userSelection = prompt("Pick rock, paper, or scissors: ").toLowerCase();
    }
    while (userSelection != "rock" && userSelection != "paper" && userSelection != "scissors");
    console.log(`You have selected ${userSelection}.`);
    return userSelection;
}

//Create function that plays a single round of RPS and returns a winner

