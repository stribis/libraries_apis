function Snake () {
  this.x = 0
  this.y = 0

  this.xspeed = 1
  this.yspeed = 0

  this.total = 0
  this.tail = []


  this.show = function () {
    fill(255)
    // Draw a square on the updated position
    for(let i = 0; i < this.tail.length; i++ ) {
      rect(this.tail[i].x, this.tail[i].y, cell, cell)
    }

    rect(this.x, this.y, cell, cell)
  }

  this.dir = function (x, y) {
    this.xspeed = x
    this.yspeed = y
  }

  this.update = function () {
    // Update tails position
    for ( let i = 0; i < this.tail.length -1; i++) {
      this.tail[i] = this.tail[i+1]
    }
    // create new vector when eating food
    if (this.total >= 1) {
      this.tail[this.total - 1] = createVector(this.x, this.y)
    }

    this.x = this.x + this.xspeed * cell
    this.y = this.y + this.yspeed * cell 

    this.x = constrain(this.x, 0, width - cell)
    this.y = constrain(this.y, 0, height - cell)
  }

  this.death = function () {
    // Test if head touches tail
    for(let i = 0; i < this.tail.length; i++) {
      const pos = this.tail[i]
      const d = dist( this.x, this.y, pos.x, pos.y)
      if ( d < 1 ) {
        console.log('☠️ death')
        scoreText = 'You Died'
        this.total = 0
        this.tail = []
      }
    }
  }


  this.eat = function (pos) {
    let d = dist(this.x, this.y, pos.x, pos.y)
    if (d < 1) {
      console.log("NUM NUM NUM 🐍")
      this.total++
      // SCORE ( INCREASE SCORE )
      scoreText = `Score: ${this.total}`
      return true
    } else  {
      return false
    }
  }
}