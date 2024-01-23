// Task: Given an array of numbers, write a program that finds and displays the sum of all even numbers and the product of all odd numbers in the array.

const numbers = [33, 22, 11, 44, 55, 66]
const evens = []
const odds = []


numbers.forEach(num => {
  if(num % 2 == 0) {
    // The number is even
    evens.push(num)
  } else {
    // The number is odd
    odds.push(num)
  }
})

let sum = 0
let product = 0

evens.forEach(evenNum => {
  sum += evenNum
})

odds.forEach(oddNum => {
  product != 0 ? product = product * oddNum : product += oddNum
})
console.log('Sum of evens: ', sum)
console.log('Product of odds: ', product)