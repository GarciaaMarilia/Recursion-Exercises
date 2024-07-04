# Recursion-Exercises

This repository contains exercises to practice recursion in JavaScript. The exercises included are:

1. **Factorial**
2. **Fibonacci Sequence**
3. **Reverse String**

## Factorial

The factorial of a number \( n \) is the product of all positive integers less than or equal to \( n \). It is denoted by \( n! \).

### Example:

```javascript
function factorial(n) {
  if (n <= 1) {
    return 1;-
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5)); // Output: 120
```

## Fibonacci Sequence

The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1.

### Example:

```javascript
function fibonacci(n) {
 if (n === 0) {
  return 0;
 } else if (n === 1) {
  return 1;
 } else {
  return fibonacci(n - 1) + fibonacci(n - 2);
 }
}

console.log(fibonacci(10)); // Output: 55
```

## Reverse String

A function to reverse a string using recursion.

### Example:

```javascript
function reverseString(string) {
 if (string.length <= 1) {
  return string;
 } else {
  return reverseString(string.slice(1)) + string[0];
 }
}

console.log(reverseString("Mari")); // Output: iraM
```

## How to Use

1. Clone the repository:

```sh
   git clone https://github.com/your-username/Recursion-Exercises.git
```

2. Navigate to the project directory:

```sh
   cd Recursion-Exercises
```

3. Run the JavaScript files with Node.js:

```sh
   node filename.js
```

Replace filename.js with the name of the file you want to run (e.g., factorial.js, fibonacci.js, reverseString.js).
