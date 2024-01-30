let stars = []

function setup () {
  createCanvas(600, 600);
  // frameRate(10)
  
  for (let i = 0; i < 100; i++) {
    stars.push(new Star())
  }
  // console.log(stars)
}

function draw () {
  background(0)
  fill(222);
  
  // star.update()
  for (let i = 0; i < stars.length; i++) {
    stars[i].update()
    stars[i].display()
  }

}

function Star () {
  this.x = random(0, width)
  this.y = random(0, height)
  this.speed = random(1,5)

  this.display = function () {
    noStroke()
    circle(this.x, this.y, 10)
    text(`x: ${mouseX}`, 10, 10)
    text(`y: ${mouseY}`, 10, 30)
  }

  this.update = function () {

    if (this.y > height) {
      this.y = 0
    }

    this.updatedSpeed = map(mouseX, 0, width, 1, this.speed);

    this.y = this.y + this.updatedSpeed
  }
}