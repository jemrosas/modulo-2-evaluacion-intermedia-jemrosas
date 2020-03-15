'use strict';

const userNumber = document.querySelector('.js-number');
const button = document.querySelector('.js-btn');
const clue = document.querySelector('.js-info');
const userAttempt = document.querySelector('.js-attempt');

let counter = 0;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

let randomNumberResult = getRandomNumber(100);
console.log(`Nº aleatorio ` + randomNumberResult);

function gameNumber(event) {
  event.preventDefault();
  compareNumbers();
  increaseCounter();
}

function compareNumbers() {
  const userNumberValue = parseInt(userNumber.value);

  if (userNumberValue === randomNumberResult) {
    clue.innerHTML = 'Has ganado, campeona!!!';
  } else if (userNumberValue > 100 || userNumberValue < 1) {
    clue.innerHTML = 'Tienes que poner un número entre 1 y 100';
  } else if (userNumberValue < randomNumberResult) {
    clue.innerHTML = 'Demasiado bajo';
  } else {
    clue.innerHTML = 'Demasiado alto';
  }
}

function increaseCounter() {
  counter += 1;
  userAttempt.innerHTML = counter;
}

button.addEventListener('click', gameNumber);
