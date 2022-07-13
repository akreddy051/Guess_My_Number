'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
*/

let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);
let score = 20;
let highScore = 0;

//When user clicks on Click button.
document.querySelector('.check').addEventListener('click', function() {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number Entered!';

    //When user enters correct Number
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
    }
    document.querySelector('.highscore').textContent = highScore;
  }
  //When user enters wrong number.
  else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too high' : 'Too Low';
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
});

//When user clicks on Again! button.
document.querySelector('.again').addEventListener('click', function() {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  console.log(secretNumber);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  score = 20;
  document.querySelector('.score').textContent = score;
});

// function wrongGuess(message) {
//   if (score > 1) {
//     score--;
//     document.querySelector('.score').textContent = score;
//     document.querySelector('.message').textContent = message;
//   } else {
//     document.querySelector('.message').textContent = 'You lost the game';
//     score--;
//     document.querySelector('.score').textContent = score;
//   }
// }
