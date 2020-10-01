// Exercise 5
//
// Part 1 - Write
// ---------------
// Write a function accepts an indeterminate amount of numbers as arguments and returns the sum of the squares of all the numbers.
//
// - If any element is not a number, skip it.
// - If no arguments are passed, return `undefined`

// with forEach(), write a function that get the squares of each number
// Sum all the numbers together, if not number, skip it.

const addNumbers = (...nums) => {
  // Insert missing solution please
  let sum = 0;
  nums.forEach((value) => {
    if (typeof value === "number") {
      sum += value * value;
    }
  });
  return sum;
};

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = addNumbers;
