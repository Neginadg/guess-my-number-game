'use strict';

// console.log(document.querySelector('.message').textContent);
// console.log((document.querySelector('.score').textContent = 15));
// console.log((document.querySelector('.guess').value = 24));

// document.querySelector('.number').textContent = 58;
// document.querySelector('.score').textContent = 10;
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = secretNumber;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', ()=> {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) document.querySelector('.message').textContent = 'No Number';
  else if (guess === secretNumber)
    document.querySelector('.message').textContent = 'Correct number';
  else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too High';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else if (guess < secretNumber) {
    if(score>0){
    document.querySelector('.message').textContent = 'Too Low';
    score--;
    document.querySelector('.score').textContent = score;
    }
  }
  document.querySelector('.score').textContent = score;
  else document.querySelector('message').textContent = 'YOU LOSE THE GAME';
});
