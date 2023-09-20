function addNumbers(a, b) {
  return a + b;
}

const numIterations = 1000000; // Number of iterations

// Initialize an array of numbers
const numbers = [];
for (let i = 0; i < numIterations; i++) {
  numbers.push(i);
}

// Perform operations on the array
console.time("Operation 1");
let result1 = 0;
for (let i = 0; i < numIterations; i++) {
  result1 = addNumbers(result1, numbers[i]); // Optimization occurs because numbers are all numbers
}
console.timeEnd("Operation 1");

// Change the type of one element in the array
numbers[numIterations / 2] = "Hello";

console.time("Operation 2");
let result2 = 0;
for (let i = 0; i < numIterations; i++) {
  result2 = addNumbers(result2, numbers[i]); // Deoptimization occurs due to type change in the array
}
console.timeEnd("Operation 2");


//Change in type causes the fucntion tobe deoptimized there by slowing the performance