let getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput==='paper' || userInput ==='scissors') {
        return userInput;
    } else {
        console.log('not a valid choice');
    }
}
  
let getComputerChoice = () => {
	let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
    case 0:
        return "rock";
    case 1:
        return "paper";
    case 2:
        return "scissors";
    }
}
  
let determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return "It's a tie!";
    }
    
    if (userChoice === "rock") {
        if (computerChoice === "paper") {
            return "Computer won!";
        } else {
            return "You won!";
      }
    }
    
    if (userChoice === "paper") {
        if (computerChoice === "scissors") {
            return "Computer won!";
        } else {
            return "You won!";
        }
    }
    
    if (userChoice === "scissors") {
        if (computerChoice === "rock") {
            return "Computer won!";
        } else {
            return "You won!";
        }
    }  
}
  
let playGame = () => {
    let userChoice = getUserChoice("scissors");
    let computerChoice = getComputerChoice()
    console.log(`you threw ${userChoice}`);
    console.log(`computer threw ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
};
  
playGame();