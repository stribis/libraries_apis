// Task: Create a program that prompts the user to enter a number. 
// Check if the number is positive, negative, or zero, and display an appropriate message.

const userNumber = parseInt(prompt('Enter a number to check'))

if (userNumber > 0 ) {
  alert('Your number is positive')
} else if( userNumber === 0) {
  alert('Your number is zero')
} else if( userNumber < 0) {
  alert('Your number is negative')
} else {
  alert('You did not enter a number')
}