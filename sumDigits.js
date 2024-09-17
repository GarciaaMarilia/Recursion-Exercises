
// Problem: Sum of the Digits of a Number
// Write a recursive function that takes a positive integer as input and returns the sum of its digits. If the sum of the digits is a number greater than 9, keep summing the digits of the result until the sum is a single-digit number.

// Example:
// js
// Copy code
// sumDigits(9875) -> 9 + 8 + 7 + 5 = 29 -> 2 + 9 = 11 -> 1 + 1 = 2
// sumDigits(123) -> 1 + 2 + 3 = 6
// sumDigits(9999) -> 9 + 9 + 9 + 9 = 36 -> 3 + 6 = 9

function sumDigits(num) {
 const separatedNum = num.toString().split("").map(Number);

 let sum = 0;

 for (let i = 0; i < separatedNum.length; i++) {
  sum += separatedNum[i];
 }
 if (sum <= 9) {
  return sum;
 }

 return sumDigits(sum);
}

const result = sumDigits(9875);

console.log(result);
