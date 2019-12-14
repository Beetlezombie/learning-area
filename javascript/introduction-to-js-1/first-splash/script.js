let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document. querySelector('.guessField');

let guessCount = 1;
let resetButton;

function checkGuess() {
    let userGuess = Number(guessField.value);
    if (guessCount === 1) {
        guesses.textContent = 'Vorige gokjes: ';
    }
    
    guesses.textContent += userGuess + ' ';

    if (userGuess = randomNumber) {
        lastResult.textContent = 'Proficiat je hebt gewonnen';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = 'Spel gedaan. Je hebt het niet geraden';
        setGameOver();
    } else {
        lastResult.textContent = 'Fout, gok nog eens';
        lastResult.style.backgroundColor = 'red';
        if(userGuess < randomNumber) {
            lowOrHi.textContent = 'Je laatste gokje was te laag';
        } else if(userGuess > randomNumber) {
            lowOrHi.textContent = 'Je laatste gokje was te hoog';
        }
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();

}

guessSubmit.addEventListener('click', checkGuess);