function getHumanChoice (){
    let name = prompt("Please type in your choice");

    if (name === "Rock"){return ("Rock")}
    else if (name === "Paper"){return ("Paper")}
    else {return ("Scissors")}
}
console.log(getHumanChoice());

let humanScore = 0;



function getComputerChoice() {
    let x = Math.random()*3; 
    if (x < 1){
        return ("Rock")}
    else if (x < 2) {
        return ("Paper")}
    else {return ("Scissors")}
}
console.log(getComputerChoice());

let computerScore = 0;


/*
function playRound (humanChoice, computerChoice){

}
console.log(getHumanChoice, getComputerChoice);*/