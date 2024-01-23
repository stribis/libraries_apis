function playNumberGuessingGame() {
  const minNumber = 1;
  const maxNumber = 100;
  const targetNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
  let attempts = 0;

  console.log("Welcome to the Number Guessing Game!");
  console.log(`I'm thinking of a number between ${minNumber} and ${maxNumber}.`);

  const promptUserForGuess = () => {
    attempts++;
    const userGuess = parseInt(prompt("Enter your guess:"));

    if (isNaN(userGuess)) {
      console.log("Please enter a valid number.");
    } else if (userGuess < minNumber || userGuess > maxNumber) {
      console.log(`Please enter a number between ${minNumber} and ${maxNumber}.`);
    } else if (userGuess < targetNumber) {
      console.log("Too low! Try again.");
      promptUserForGuess();
    } else if (userGuess > targetNumber) {
      console.log("Too high! Try again.");
      promptUserForGuess();
    } else {
      console.log(`Congratulations! You've guessed the correct number (${targetNumber}) in ${attempts} attempts.`);
    }
  };

  promptUserForGuess();
}

playNumberGuessingGame();
