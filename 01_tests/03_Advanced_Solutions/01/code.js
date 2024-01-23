// Task: Create a program that generates a random list of 10 integers within a specific range (e.g., 1 to 100) and stores them in an array. 
// Find and display the sum, average, and product of the elements. 
// Additionally, implement a way to identify and display the largest and smallest numbers in the array.


const randomInts = []

for(let i = 0; i < 10; i++) {
  randomInts.push(Math.floor(Math.random() * 100 + 1) -1)
}

console.log(randomInts)

let sum = 0
let average = 0
let product = 0
let largest = 0
let smallest = randomInts[0]

randomInts.forEach(int => {
  sum += int
  product != 0 ? product = product * int : product += int
  int > largest ? largest = int : largest = largest
  int < smallest ? smallest = int : smallest = smallest
})

average = sum / randomInts.length

console.log(`
Numbers: ${randomInts.map(n => ' ' + n )}
Sum: ${sum}
Product: ${product}
Average: ${average}
Smallest: ${smallest}
Largest: ${largest}
`)