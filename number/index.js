/* 1. Function to print even numbers from 1 to n */

function printEvenNumbers(n) {
  for (let i = 2; i <= n; i += 2) {
    console.log(i);
    k;
  }
}

function printEvenNumbers(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

/* 2. Function to calculate sum of first N natural numbers */

// Brute Force Approach and - time complexity is O(n)
function sumOfNaturalNumbers(n) {
  if (n < 1 || !Number.isInteger(n)) {
    throw new Error("Input must be a positive integer");
  }
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// Optimized Approach and - time complexity is O(1)
function sumOfNaturalNumbers(n) {
  if (n < 1 || !Number.isInteger(n)) {
    throw new Error("Input must be a positive integer");
  }
  return (n * (n + 1)) / 2; // Formula-based O(1) approach
}

/* 3. Function to calculate the factorial of a number */

function factorial(n) {
  if (n < 0) return undefined; // Factorial is not defined for negative numbers
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

/* 4. Function to calculate sum of all even numbers up to n */

function sumOfEvenNumbers(n) {
  let sum = 0;
  for (let i = 2; i <= n; i += 2) {
    sum += i;
  }
  return sum;
}

function sumOfEvenNumbers(n) {
  let m = n % 2 === 0 ? n : n - 1;
  return ((m / 2) * (m + 2)) / 2;
}

// Example usage: sumOfEvenNumbers(10) returns 30 (2+4+6+8+10)

/* 5. Function to print cubes of numbers from 1 to n */
function printCubes(n) {
  if (n < 1 || !Number.isInteger(n)) {
    throw new Error("Input must be a positive integer");
  }
  for (let i = 1; i <= n; i++) {
    console.log(i * i * i);
  }
}

/* 6. Print all even numbers between 1 to n which are perfect squares */
function printEvenPerfectSquares(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0 && Number.isInteger(Math.sqrt(i))) {
      console.log(i);
    }
  }
}
