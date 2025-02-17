// Sum of Two Numbers
function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
  console.log("Los datos de entrada no son adecuados");
  }
  return a + b;
}

// Factorial of a Number
function factorial(n) {
  if (typeof n !== "number" || n < 0 || !Number.isInteger(n)) {
    console.log("Los datos de entrada no son adecuados");
  }

  let result = 1;

  for (let i = n; i > 1; i--) {
    result = result * i;
  }

  return result;
}

// Find the Largest Number
function findLargest(arr) {
  if (!Array.isArray(arr) || arr.length === 0 || arr.some(num => typeof num !== "number")) {
    console.log("Los datos de entrada no son adecuados");
  }

  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }

  return max;
}

// Count Vowels in a String
function countVowels(str) {
  if (typeof str !== "string") {
    console.log("Los datos de entrada no son adecuados");
  }

  let vowels = ["a", "e", "i", "o", "u"]
  let count = 0;

  for (let letter of str.toLowerCase()) {
    if (vowels.includes(letter)) count++;
  }

  return count;
}

// Check if a Number is Prime
function isPrime(n) {
  if (typeof n !== "number" || n < 2 || !Number.isInteger(n)) {
    console.log("Los datos de entrada no son adecuados");
  }

  if (n < 2) return false;
  if (n == 2 || n == 3) return true;
  if (n % 2 == 0 || n % 3 == 0) return false;

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i == 0 || n % (i + 2) == 0) {
      return false;
    }
  }

  return true;
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
