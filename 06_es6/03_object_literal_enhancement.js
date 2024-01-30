
let name = 'Colombia'
let capital = 'Bogota'


// console.log(country)

// This also works with object methods

let completeName = function () {
  // We can use this as if we were inside an object
  console.log(`${this.capital} is the capital of ${this.name} `)
}

let country = {name, capital, completeName}

console.log(country.completeName())