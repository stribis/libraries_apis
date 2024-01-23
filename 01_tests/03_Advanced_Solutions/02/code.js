// Task: Given an array of objects with properties like name, age, and country, write a JavaScript program that sorts the array based on age in descending order. 
// Then, filter the array to extract and display the names of people aged 30 or older.

const objects = [
  {
    name: 'Random',
    age: 44,
    country: 'Germany'
  },
  {
    name: 'Lea',
    age: 33,
    country: 'Switzerland'
  },
  {
    name: 'Tony',
    age: 55,
    country: 'Austria'
  },
  {
    name: 'Sandra',
    age: 12,
    country: 'Greece'
  }
]


// Sort the array based on age in descending order
objects.sort((a, b) => b.age - a.age);

// Filter the array to extract names of people aged 30 or older
const filteredNames = objects.filter(person => person.age >= 30).map(person => person.name);

// Display the filtered names
console.log(filteredNames);