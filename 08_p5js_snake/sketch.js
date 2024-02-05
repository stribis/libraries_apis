const cell = 20
let s
let food


function setup () {
  createCanvas(600, 600);
  frameRate(10)
  s = new Snake()
  pickLocation()
}

function draw () {
  background('#222')
  stroke('#fff')

  if (s.eat(food)) {
    pickLocation()
  }
  

  for (let i = 0; i < height; i = i + cell) {
    line(0, i, width, i)
  }
 
  for (let i = 0; i < width; i = i + cell) {
    line(i, 0, i, height)
  }

  s.update()
  s.show()

  fill(255,0,0)
  rect(food.x, food.y, cell, cell)
}

function keyPressed () {
  console.log(keyCode)
  // Up : UP_ARROW
  // RIGHT: RIGHT_ARROW
  // DOWN: DOWN_ARROW
  // LEFT: LEFT_ARROW
  if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0)
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1)
  } else if ( keyCode === LEFT_ARROW) {
    s.dir(-1, 0)
  } else if ( keyCode === UP_ARROW) {
    s.dir( 0, -1 )
  }
}

function pickLocation () {
  const cols = floor(width/cell) 
  const rows = floor(height/cell)

  food = createVector(floor(random(0, cols)), floor(random(0, rows)))
  food.mult(cell)
}