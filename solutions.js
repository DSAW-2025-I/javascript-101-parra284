// Sum of Two Numbers
function sum(a, b) {
  return a + b;
}

// Factorial of a Number
function factorial(n) {
  let result = 1;

  for (let i = n; i > 1; i--) {
    result = result * i;
  }

  return result;
}

// Find the Largest Number
function findLargest(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }

  return max;
}

// Count Vowels in a String
function countVowels(str) {
  let vowels = ["a", "e", "i", "o", "u"]
  let count = 0;

  for (let letter of str.toLowerCase()) {
    if (vowels.includes(letter)) count++;
  }

  return count;
}

// Check if a Number is Prime
function isPrime(n) {
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
