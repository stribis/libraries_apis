let sandwich = { 
  bread: 'Plain Italian',
  meat: 'Pulled Pork',
  cheese: 'Chedar',
  toppings: ['Lettuce', 'Tomato', 'Cucumber']
}


// console.log(sandwich.meat)

// sandwich.meat = 'Chicken'

// console.log(sandwich)

let {bread, meat, cheese} = sandwich

console.log(bread, meat, cheese)

bread = 'NOTHING'


console.log(sandwich)