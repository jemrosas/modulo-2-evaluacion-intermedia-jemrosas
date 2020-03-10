'use strict';
const userNumber = document.querySelector('js-number');
const clue = document.querySelector('.js-clue');
const button = document.querySelector('.js-btn');

function gameNumber(event) {
  event.preventDefault();
  getRandomNumber();
  compareNumbers();
}

function getRandomNumber() {
  let result = Math.ceil(Math.random() * 100);
  console.log(result);
  return result;
}
let randomNumberResult = this.getRandomNumber();
let gNumber = userNumber.value;

function compareNumbers() {
  if (gNumber > randomNumberResult) {
    clue.innerHTML = 'Demasiado alto';
  } else if (gNumber < randomNumberResult) {
    clue.innerHTML = 'Demasiado bajo';
  } else if (gNumber === randomNumberResult) {
    clue.innerHTML = 'Has ganado, campeona!!!';
  } else {
    clue.innerHTML = 'El número debe estar entre 1 y 100';
  }
}

button.addEventListener('click', gameNumber);
