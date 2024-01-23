// Task: Write a JavaScript function that takes a user's name as input and returns a greeting message using the name. 
// For example, if the user inputs "Alice," the function should return "Hello, Alice!".


function greetUser (user) {
  return `Hello, ${user}!`
}

document.querySelector('.send').addEventListener('click', e => {
  e.preventDefault()
  document.querySelector('.result').innerText = greetUser(document.querySelector('#username').value)
})