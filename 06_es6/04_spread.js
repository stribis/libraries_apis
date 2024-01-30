
const saCountries = ['Colombia', 'Brazil', 'Bolivia']
const euCountries = ['Germany', 'Austria', 'Switzerland']

// saCountries.forEach(countrie => {
//   euCountries.push(countrie)
// })


let allCountries = [...saCountries, ...euCountries]
console.log(allCountries)

let fruits = ['apple', 'banana', 'pear']

let reversed = [...fruits.reverse()]


let cities = ['new york', 'la', 'miami']
let [first, second, ...rest] = cities

console.log(first)