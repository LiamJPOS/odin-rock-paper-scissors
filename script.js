//Create function to get user choice
function getUserSelection() {
    let userSelection;
    do {
        userSelection = prompt("Pick rock, paper, or scissors: ").toLowerCase();
    }
    while (userSelection != "rock" && userSelection != "paper" && userSelection != "scissors");
    console.log(`You have selected ${userSelection}.`);
    return userSelection;
}

//Create function to get computer choice
function getComputerSelection() {
    let computerChoices = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * 3); //random number between 0, 1, 2
    let computerSelection = computerChoices[randomNumber];
    console.log(`The computer has selected ${computerSelection}.`);
    return computerSelection;
}

//Create function that plays a single round and returns winner as a string (or tie)
function playRound(userSelection, computerSelection) {
    switch (true) {

        case (userSelection == computerSelection):
            console.log("It's a tie.");
            return "tie";

        case (userSelection == "rock" && computerSelection == "scissors"):
        case (userSelection == "paper" && computerSelection == "rock"):
        case (userSelection == "scissors" && computerSelection == "paper"):
            console.log(`You win! ${userSelection} beats ${computerSelection}`);
            return "user";

        default:
            console.log(`You lose, ${userSelection} loses to ${computerSelection}`);
            return "computer";
    }
}

let userSelection = getUserSelection()
let computerSelection = getComputerSelection()
let winner = playRound(computerSelection, userSelection)
console.log(winner)



