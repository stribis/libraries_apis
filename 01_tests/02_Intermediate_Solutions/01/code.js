// Task: Create a JavaScript program that calculates the area and perimeter of a rectangle. 
// Ask the user to enter the length and width as input, and then display both the area and perimeter.
function calculateArea (width, length) {
  return width * length
}

function calculatePerimeter (width, length) {
  return 2 * (width+length)
}

document.querySelector('.calculate').addEventListener('click', e=> {
  e.preventDefault()

  const width = parseInt(document.querySelector('#width').value)
  const length = parseInt(document.querySelector('#length').value)

  document.querySelector('.result').innerText = `Area: ${calculateArea(width, length)}cm | Perimeter: ${calculatePerimeter(width, length)}cm`
})