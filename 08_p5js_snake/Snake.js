function Snake () {
  this.x = 0
  this.y = 0

  this.xspeed = 1
  this.yspeed = 0


  this.show = function () {
    fill(255)
    rect(this.x, this.y, cell, cell)
  }

  this.dir = function (x, y) {
    this.xspeed = x
    this.yspeed = y
  }

  this.update = function () {
    this.x = this.x + this.xspeed * cell
    this.y = this.y + this.yspeed * cell 

    this.x = constrain(this.x, 0, width - cell)
    this.y = constrain(this.y, 0, height - cell)
  }

  this.eat = function (pos) {
    let d = dist(this.x, this.y, pos.x, pos.y)
    if (d < 1) {
      console.log("NUM NUM NUM 🐍")
      // SCORE ( INCREASE SCORE )
      return true
    } else  {
      return false
    }
  }
}