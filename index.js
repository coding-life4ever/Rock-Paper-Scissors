


// 
function playGame(){

//Players Score
let humanScore = 0;
let computerScore = 0;

//Computer Choice
function getComputerChoice() {
  let x = Math.random()*3; 
  if (x < 1){
      return "rock";}
  else if (x < 2) {
      return "paper"}
  else {return "scissors"}
}


//Human Choice
const buttonRock = document.querySelector(".rock");
buttonRock.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});
  
const buttonPaper = document.querySelector(".paper");
buttonPaper.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

const buttonScissors = document.querySelector(".scissors");
buttonScissors.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});

//Play a single round
const resultDiv = document.querySelector(".result");
const scoreDiv = document.querySelector(".score");
const endResult = document.querySelector(".endResult");

function playRound (humanChoice, computerChoice){

    if (humanChoice === computerChoice) {
        resultDiv.textContent = "Tie!";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        resultDiv.textContent = "You win! Rock beats Scissors.";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        resultDiv.textContent = "You lose! Paper beats Rock.";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        resultDiv.textContent = "You win! Paper beats Rock.";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        resultDiv.textContent = "You lose! Scissors beats Paper.";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        resultDiv.textContent = "You win! Scissors beats Paper.";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        resultDiv.textContent = "You lose! Rock beats Scissors.";
    } else {
      resultDiv.textContent = "Invalid choice! Please choose rock, paper, or scissors.";
    } 

// Display the choices
const yourChoice = document.querySelector(".userChoice");
yourChoice.textContent = "You chose: " + humanChoice;
    
const computerChoiceDiv = document.querySelector(".cChoice");
computerChoiceDiv.textContent = "Computer chose: " + computerChoice;

// Update the score display
scoreDiv.textContent = "Score: You " + humanScore + " - Computer " + computerScore;


// Check for winner
if (humanScore === 5){
  endResult.textContent = "Congratulations! You won the game!";

  document.querySelector(".rock").disabled = true;
  document.querySelector(".paper").disabled = true;
  document.querySelector(".scissors").disabled = true;

  const resetButton = document.createElement("button");
  resetButton.textContent = "Play Again";
  resetButton.classList.add("reset");
  resetButton.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    resultDiv.textContent = "";
    yourChoice.textContent = "";
    computerChoiceDiv.textContent = "";
    scoreDiv.textContent = "You: 0 - Computer: 0";
    endResult.textContent = "";

    document.querySelector(".rock").disabled = false;
    document.querySelector(".paper").disabled = false;
    document.querySelector(".scissors").disabled = false;

    resetButton.remove();
  });
  document.body.appendChild(resetButton);

} 
  else if (computerScore === 5){
    endResult.textContent = "Computer wins! Better luck next time!";


    document.querySelector(".rock").disabled = true;
    document.querySelector(".paper").disabled = true;
    document.querySelector(".scissors").disabled = true;
  
    const resetButton = document.createElement("button");
    resetButton.textContent = "Play Again";
    resetButton.classList.add("reset");
    resetButton.addEventListener("click", () => {
      humanScore = 0;
      computerScore = 0;
      resultDiv.textContent = "";
      yourChoice.textContent = "";
      computerChoiceDiv.textContent = "";
      scoreDiv.textContent = "You: 0 - Computer: 0";
      endResult.textContent = "";
  
      document.querySelector(".rock").disabled = false;
      document.querySelector(".paper").disabled = false;
      document.querySelector(".scissors").disabled = false;
  
      resetButton.remove();
    });
    document.body.appendChild(resetButton);
}
}

}
playGame();