//Step 1: war einfach nur Hello,World Test

// Step 6: Play 5 rounds
function playGame(){

// Step 4: Players Score
let humanScore = 0;
let computerScore = 0;

// Step 3: Human Choice
function getHumanChoice () {
    let name = prompt("Please type in your choice");
    name = name.toLowerCase();
    return name;
}

//Step 2: Computer Choice
function getComputerChoice() {
    let x = Math.random()*3; 
    if (x < 1){
        return "rock";}
    else if (x < 2) {
        return "paper"}
    else {return "scissors"}
}

// Step 5: Play a single round
function playRound (humanChoice, computerChoice){

    if (humanChoice === computerChoice) {
        return "Tie!";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        return "You win! Rock beats Scissors.";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        return "You lose! Paper beats Rock.";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return "You win! Paper beats Rock.";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        return "You lose! Scissors beats Paper.";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        return "You win! Scissors beats Paper.";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        return "You lose! Rock beats Scissors.";
    } else {
        return "Invalid choice! Please choose rock, paper, or scissors.";
    } 
}
  

alert("--- Starting Game ---");

  // --- Runde 1 ---
  alert("--- Round 1 ---");
  let humanSelection1 = getHumanChoice();
  let computerSelection1 = getComputerChoice();
  alert("You chose: " + humanSelection1 + "\nComputer chose: " + computerSelection1 + "\n" + playRound(humanSelection1, computerSelection1) + "\nScore: You " + humanScore + " - " + computerScore + " Computer");

  
  // --- Runde 2 ---
  alert("--- Round 2 ---");
  let humanSelection2 = getHumanChoice();
  let computerSelection2 = getComputerChoice();
  alert("You chose: " + humanSelection2 + "\nComputer chose: " + computerSelection2 + "\n" + playRound(humanSelection2, computerSelection2) + "\nScore: You " + humanScore + " - " + computerScore + " Computer");


  // --- Runde 3 ---
  alert("--- Round 3 ---");
  let humanSelection3 = getHumanChoice();
  let computerSelection3 = getComputerChoice();
  alert("You chose: " + humanSelection3 + "\nComputer chose: " + computerSelection3 + "\n" + playRound(humanSelection3, computerSelection3) + "\nScore: You " + humanScore + " - " + computerScore + " Computer");


  // --- Runde 4 ---
  alert("--- Round 4 ---");
  let humanSelection4 = getHumanChoice();
  let computerSelection4 = getComputerChoice();
  alert("You chose: " + humanSelection4 + "\nComputer chose: " + computerSelection4 + "\n" + playRound(humanSelection4, computerSelection4) + "\nScore: You " + humanScore + " - " + computerScore + " Computer");

  
  // --- Runde 5 ---
  alert("--- Round 5 ---");
  let humanSelection5 = getHumanChoice();
  let computerSelection5 = getComputerChoice();
  alert("You chose: " + humanSelection5 + "\nComputer chose: " + computerSelection5 + "\n" + playRound(humanSelection5, computerSelection5) + "\nScore: You " + humanScore + " - " + computerScore + " Computer");

// --- Endauswertung ---
alert("--- Game Over ---");
if (humanScore > computerScore) {
  alert("Congratulations! You won the game!\nFinal Score: You " + humanScore + " - Computer " + computerScore);
} else if (computerScore > humanScore) {
  alert("Computer wins the game! Better luck next time.\nFinal Score: You " + humanScore + " - Computer " + computerScore);
} else {
  alert("It's a tie game!\nFinal Score: You " + humanScore + " - Computer " + computerScore);
}

}
playGame();



/* Baustein für eine Runde
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

alert ("Results: \nHuman choice: " + humanSelection + "\nComputer choice: " + computerSelection + "\n" + playRound(humanSelection, computerSelection));

alert("Score Board: \nHuman Score: " + humanScore + "\nComputer Score: " + computerScore);
*/