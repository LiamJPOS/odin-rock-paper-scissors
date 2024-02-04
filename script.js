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

//Create function to play 5 rounds
//Returns array of roundsPlayed, userWins, computerWins, and ties
//TODO add in functionality for user to select how many rounds they want to play - default to 5
function playGame() {
    let roundsPlayed = 0;
    let userWins = 0;
    let computerWins = 0;
    let ties = 0

    //Play rounds until 5 rounds are played
    while (roundsPlayed != 5) {
        let userSelection = getUserSelection();
        let computerSelection = getComputerSelection();
        let roundWinner = playRound(userSelection, computerSelection);
        roundsPlayed += 1;
        if (roundWinner == "user") {userWins += 1}
        else if (roundWinner == "computer") {computerWins += 1}
        else {ties += 1};
    }
    return [roundsPlayed, userWins, computerWins, ties]
}

// Create function to print scores and call winner in console
function callWinner(scores){
    let [roundsPlayed, userWins, computerWins, ties] = scores
    console.log(`The final score out of ${roundsPlayed} rounds is:`)
    console.log(`Your wins: ${userWins}, Computer wins: ${computerWins}, ties: ${ties}`)

    //Log different message depending on who scored more
    if (userWins > computerWins){console.log("Congratulations! You win.")}
    else if (userWins < computerWins){console.log("Better luck next time.")}
    else {console.log("It's a tie.")}
}


// TODO Create function to loop the game
let scores = playGame();
callWinner(scores);