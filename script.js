function getComputerSelection() {
    let computerChoices = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * 3); //random number between 0, 1, 2
    let computerSelection = computerChoices[randomNumber];
    return computerSelection;
}

//Returns winner as string 'computer', 'tie', or 'user'
function playRound(userSelection, computerSelection) {
    switch (true) {

        case (userSelection == computerSelection):
            return "tie";

        case (userSelection == "rock" && computerSelection == "scissors"):
        case (userSelection == "paper" && computerSelection == "rock"):
        case (userSelection == "scissors" && computerSelection == "paper"):
            return "user";

        default:
            return "computer";
    }
}

function displayImagesSelected(userSelection, computerSelection){
    const images = document.querySelectorAll(".cards__image")
    images.forEach(image => {
        image.style.display = 'none';
    })
    const userImageId = `user-${userSelection}`
    const computerImageId = `computer-${computerSelection}`
    const userImage = document.getElementById(userImageId)
    const computerImage = document.getElementById(computerImageId)
    userImage.style.display = 'block'
    computerImage.style.display = 'block'
}

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
let log = document.querySelector("#log")

const buttons = document.querySelectorAll("#user-buttons button")
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const userSelection = this.innerText.toLowerCase();
        const computerSelection = getComputerSelection();
        displayImagesSelected(userSelection, computerSelection);
        const roundWinner = playRound(userSelection, computerSelection);

        switch (roundWinner) {
            case ('user'):
                userScore += 1
                log.innerText = `You win the round! ${userSelection} beats ${computerSelection}`;
                break
            case ('computer'):
                comptuerScore += 1;
                log.innerText = `You lose the round. ${computerSelection} beats ${userSelection}`;
                break  
            default:
                log.innerText = "It's a tie."
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





