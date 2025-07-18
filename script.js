'use strict';

// console.log(document.querySelector('.message').textContent);
// console.log((document.querySelector('.score').textContent = 15));
// console.log((document.querySelector('.guess').value = 24));

// document.querySelector('.number').textContent = 58;
// document.querySelector('.score').textContent = 10;
// console.log(document.querySe(lector('.message').textContent);
// document.querySelector('.number').textContent = secretNumber;
let score = 20;
let secretNumber = Math.trunc(Math.random() * score) + 1;
const between = [20, 50, 100];
let index = 0;
let highScore = 0;
const displayMassage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMassage('❗ No Number');
  } else if (guess === secretNumber) {
    displayMassage('🎉Correct number');

    document.querySelector('body').style.backgroundColor = '#36D97A';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMassage(guess > secretNumber ? '📈Too High' : '📉Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMassage('YOU LOST THE GAME 💣');
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#F20707';
    }
  }
});
document.querySelector('.again').addEventListener('click', () => {
  score = between[index];
  secretNumber = Math.trunc(Math.random() * score) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  displayMassage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#0374A1';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});

document.querySelector('.between').addEventListener('click', () => {
  index = (index + 1) % 3;
  score = between[index];
  secretNumber = Math.trunc(Math.random() * score) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.between').textContent = 'Between 1 and ' + score;
});
