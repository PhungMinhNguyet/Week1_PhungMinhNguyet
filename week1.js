let guessButton = document.getElementById("guessButton");
guessButton.addEventListener("click", init);
let message = document.getElementById("message");
let count = 0;
let array_guessNumber = [];

function init() {
    getPastGuess();
    handleGuess();
}

function handleGuess() {
    count++;

    if (count < 10) {
        let userInput = document.getElementById("number").value;
        array_guessNumber.push(userInput);
        if (userInput != null) {
            let userGuess = parseInt(userInput);
            let randomNumber = getRandomNumber();
            console.log(randomNumber);
            if (randomNumber > userGuess) {
                message.innerHTML = `Sorry your guess is too low. You have ${10 - count} guesses left`;
                message.style.backgroundColor = 'red'
            } else if (randomNumber < userGuess) {
                message.innerHTML = `Sorry your guess is too high. You have ${10 - count} guesses left`;
                message.style.backgroundColor = 'red'
            } else {
                message.innerHTML = "Congratulations!! You guessed correctly.";
                message.style.backgroundColor = 'green'
            }
        }
    } else {
        message.innerHTML = "Sorry, see you later";
    }
}

function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 10);
    return randomNumber;
}

function getPastGuess() {
    if (array_guessNumber.length != 0 && array_guessNumber.length >= 2) {
        alert(`Your past guess is ${array_guessNumber[array_guessNumber.length - 2]}`);
    }
}