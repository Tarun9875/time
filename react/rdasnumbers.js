// remove duplicates and sort numbers
// Input array

let numbers = [7, 3, 3, 1, 9, 1];

// Remove duplicates using Set
let uniqueNumbers = [...new Set(numbers)];

// Sort in ascending order
uniqueNumbers.sort((a, b) => a - b);

// Display output in console
console.log("Input:", numbers);
console.log("Output:", uniqueNumbers);
