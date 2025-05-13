let userScore = 0;
let computerScore = 0;

function playGame(userChoice) {
  disableChoices(true);

  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById('userChoice').textContent = `You chose: ${capitalize(userChoice)}`;
  document.getElementById('computerChoice').textContent = `Computer chose: ${capitalize(computerChoice)}`;

  const result = getResult(userChoice, computerChoice);
  const winnerText = document.getElementById('winner');

  winnerText.classList.remove('win', 'lose', 'draw');

  if (result === 'You Win!') {
    userScore++;
    winnerText.textContent = `Result: ✅ ${result} 🎉`;
    winnerText.classList.add('win');
    document.getElementById('winSound').play();
  } else if (result === 'You Lose!') {
    computerScore++;
    winnerText.textContent = `Result: ❌ ${result} 😞`;
    winnerText.classList.add('lose');
    document.getElementById('loseSound').play();
  } else {
    winnerText.textContent = `Result: 🤝 ${result} 😐`;
    winnerText.classList.add('draw');
    document.getElementById('drawSound').play();
  }

  document.getElementById('userScore').textContent = userScore;
  document.getElementById('computerScore').textContent = computerScore;

  setTimeout(() => disableChoices(false), 1000); // Re-enable after 1 second
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
  document.getElementById('winner').classList.remove('win', 'lose', 'draw');
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const darkModeBtn = document.getElementById('darkModeBtn');
  if (document.body.classList.contains('dark-mode')) {
    darkModeBtn.textContent = "☀️ Light Mode";
  } else {
    darkModeBtn.textContent = "🌙 Dark Mode";
  }
}

function disableChoices(disabled) {
  document.querySelectorAll('.choice').forEach(btn => {
    btn.disabled = disabled;
  });
}
