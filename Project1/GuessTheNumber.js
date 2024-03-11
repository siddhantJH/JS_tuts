let random = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('.guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const startOver = document.querySelector('.resultParas');
const p = document.createElement('p');
const lowOrhi = document.querySelector('.lowOrHi');

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault(); //value to kahi mat leke jao mai lunga
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

//this kind of validation method is very important
//
function validateGuess(guess) {
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert('Please enter a valid number');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over ${random} `);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === random) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < random) {
    displayMessage(`Number is too low`);
  } else if (guess > random) {
    displayMessage(`Number is too high`);
  }
}
function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrhi.innerHTML = `<h2>${message}</h2>`;
}
function newGame() {
  const newGame = document.querySelector('#newGame');
  newGame.addEventListener('click', function (e) {
    random = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
