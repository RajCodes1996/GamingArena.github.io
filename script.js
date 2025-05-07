let userScore = 0;
let computerScore = 0;

function playGame(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById('userChoice').textContent = `You chose: ${capitalize(userChoice)}`;
  document.getElementById('computerChoice').textContent = `Computer chose: ${capitalize(computerChoice)}`;

  const result = getResult(userChoice, computerChoice);
  document.getElementById('winner').textContent = `Result: ${result}`;

  if (result === 'You Win!') {
    userScore++;
    document.getElementById('winSound').play();
  } else if (result === 'You Lose!') {
    computerScore++;
    document.getElementById('loseSound').play();
  } else {
    document.getElementById('drawSound').play();
  }

  document.getElementById('userScore').textContent = userScore;
  document.getElementById('computerScore').textContent = computerScore;
}

function getResult(user, computer) {
  if (user === computer) return "It's a Draw!";
  if (
    (user === 'rock' && computer === 'scissors') ||
    (user === 'paper' && computer === 'rock') ||
    (user === 'scissors' && computer === 'paper')
  ) return "You Win!";
  return "You Lose!";
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function resetGame() {
  userScore = 0;
  computerScore = 0;
  document.getElementById('userScore').textContent = 0;
  document.getElementById('computerScore').textContent = 0;
  document.getElementById('userChoice').textContent = "You chose: ";
  document.getElementById('computerChoice').textContent = "Computer chose: ";
  document.getElementById('winner').textContent = "Result: ";
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}
