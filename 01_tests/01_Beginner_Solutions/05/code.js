// Task: Build an HTML page with a button and an empty paragraph element. 
// Using JavaScript, add an event listener to the button so that when it is clicked, the paragraph element displays the text "Hello, World!" 
// Then, add another button that, when clicked, clears the text from the paragraph.

const message = document.querySelector('.message')

document.querySelector('.display').addEventListener('click', () => {
  message.innerText = 'Hello World!'
})
document.querySelector('.clear').addEventListener('click', () => {
  message.innerText = ''
})