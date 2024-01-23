// Task: Create a program that asks the user to enter their age. Using conditional statements, check if the age is greater than or equal to 18. 
// If it is, display a message saying "You are an adult," otherwise, display "You are a minor."

const userAge = parseInt(prompt('How old are you?'))
const adult = 18

if (userAge >= adult ) {
  alert('You are an Adult.')
} else if (userAge < adult) {
  alert('You are a minor.')
} else {
  alert('Incorrect input')
}