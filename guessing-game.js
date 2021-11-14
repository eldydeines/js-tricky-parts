function guessingGame() {

    let randomNum = Math.floor(Math.random() * 100);
    let counter = 1;
    let hasGuessed = false;

    return function guesses(guess) {
        if (hasGuessed) {
            return "The game is over, you already won!";
        }
        else if (guess < randomNum) {
            counter++;
            return `${guess} is too low!`;
        }
        else if (guess > randomNum) {
            counter++;
            return `${guess} is too high!`;
        }
        else {
            hasGuessed = true;
            return `You win! You found ${randomNum} in ${counter} guesses.`;
        }
    }

}

module.exports = { guessingGame };
