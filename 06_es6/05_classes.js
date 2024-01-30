
class Vacation {

  constructor(destination, duration) {
    this.destination = destination
    this.duration = duration 
  }

  print( ) {
    console.log(`${this.destination} will take ${this.duration} days`)
  }
}



class Expedition extends Vacation {
  constructor (destination, duration, gear) {
    super(destination,duration)
    this.gear = gear
  }

  print() {
    super.print()
    console.log(`Bring your ${this.gear} !`)
  }
}

let newTrip = new Expedition('Mt.Everest', '15', 'Jacket')