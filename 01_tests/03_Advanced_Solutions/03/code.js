// Task: Create a JavaScript function that takes an array of numbers and returns the median value.
// The function should handle both odd and even-length arrays. 
// Test the function with various arrays to ensure it works correctly.

function calculateMedian(numbers) {
  if (numbers.length === 0) {
    return null; // Handle empty array
  }

  // Sort the array in ascending order
  numbers.sort((a, b) => a - b);

  const middle = Math.floor(numbers.length / 2);

  if (numbers.length % 2 === 1) {
    // If the array length is odd, return the middle element
    return numbers[middle];
  } else {
    // If the array length is even, return the average of the two middle elements
    const middle1 = numbers[middle - 1];
    const middle2 = numbers[middle];
    return (middle1 + middle2) / 2;
  }
}

// Test the function with various arrays
const oddLengthArray = [5, 2, 8, 4, 1];
const evenLengthArray = [6, 3, 7, 2];
const emptyArray = [];

console.log("Median of oddLengthArray:", calculateMedian(oddLengthArray)); // Output: 4
console.log("Median of evenLengthArray:", calculateMedian(evenLengthArray)); // Output: 4.5
console.log("Median of emptyArray:", calculateMedian(emptyArray)); // Output: null
