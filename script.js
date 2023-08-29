'use strict';

// UI Elements
const messageEl = document.querySelector('.message');
const checkBtnEl = document.querySelector('.check');
const againBtnEl = document.querySelector('.again');
const guessEl = document.querySelector('.guess');
const numberEl = document.querySelector('.number');
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');
const bodyEl = document.querySelector('body');

// Properties
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

checkBtnEl.addEventListener('click', function () {
  const guess = Number(guessEl.value);

  // When there is no input
  if (!guess) {
    messageEl.textContent = '⛔️ No Number!';

    // When player wins
  } else if (guess === secretNumber) {
    messageEl.textContent = '🎉 Correct Number!';
    numberEl.textContent = secretNumber;
    bodyEl.style.backgroundColor = '#60b347';
    numberEl.style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      highscoreEl.textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      messageEl.textContent =
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      score--;
      scoreEl.textContent = score;
    } else {
      messageEl.textContent = '💥 You lost the game!';
      scoreEl.textContent = 0;
    }
  }
});

againBtnEl.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  scoreEl.textContent = score;
  numberEl.textContent = '?';
  messageEl.textContent = 'Start guessing...';
  guessEl.value = '';
  bodyEl.style.backgroundColor = '#222';
  numberEl.style.width = '15rem';
});
