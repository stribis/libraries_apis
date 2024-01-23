// Task: Build a webpage with a button. 
// When the button is clicked, change the background color of the webpage to a random color. 
// Add a text element that displays the new background color.

document.querySelector('.change').addEventListener('click', e => {
  const r = randomNumber()
  const g = randomNumber()
  const b = randomNumber()

  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
  document.querySelector('.color').innerText = `rgb(${r}, ${g}, ${b})`
})

function randomNumber () {
  return Math.floor(Math.random() * 256)
}