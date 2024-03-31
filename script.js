function getComputerSelection() {
    let computerChoices = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * 3); //random number between 0, 1, 2
    let computerSelection = computerChoices[randomNumber];
    console.log(`The computer has selected ${computerSelection}.`);
    return computerSelection;
}

//Returns computer, tie, or user
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

// function displayImagesSelected(userSelection, computerSelection){
//     const userImage = document.createElement("img");
//     userImage.src = `Images/${userSelection}.png`;
//     userImage.alt = `Image of ${userSelection}`;
//     userImage.classList.add("cards__image");
//     const cardTitle = document.getElementById("user-title");
//     document.getElementById("user-container").insertBefore(userImage, cardTitle);
// }

function displayWinner(winner) {
    document.getElementById('user-buttons').remove()
    document.getElementById('cards').remove()
    const gameOverMessage = document.createElement("p");
    gameOverMessage.classList.add("game-over-message")
    if (winner === 'user'){
        gameOverMessage.textContent = "You win dayo \uD83D\uDE3B"
    }
    else{
        gameOverMessage.textContent = "You lose dayo \uD83D\uDE3E"
    }

    document.getElementById('main').appendChild(gameOverMessage)
}
        
let userScore = 0
let comptuerScore = 0
let scoreDisplay = document.querySelector("#score")
scoreDisplay.innerText = `User: ${userScore} Computer ${comptuerScore}`

const buttons = document.querySelectorAll("#user-buttons button")
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const userSelection = this.innerText.toLowerCase();
        const computerSelection = getComputerSelection();
        // displayImagesSelected();
        const roundWinner = playRound(userSelection, computerSelection);

        switch (roundWinner) {
            case ('user'):
                userScore += 1
                console.log(userScore)
                break
            case ('computer'):
                comptuerScore += 1;
                console.log(comptuerScore)
                break  
        }
        scoreDisplay.innerText = `User: ${userScore} Computer ${comptuerScore}`

        if (userScore === 5) {
            displayWinner('user')
        }
        else if (comptuerScore === 5) {
            displayWinner('computer')
        }
    })
});





