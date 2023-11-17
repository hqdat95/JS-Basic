// 1. Generating and Working with Numbers

// Way one: Creating numbers using literals
const age = 18;
console.log(typeof age); // Output: 'number' - 'age' is a number type

// Way two (Avoid using this approach): Creating numbers using Number object
const otherNumber = new Number(9); // Output: 'object'

// Performing mathematical operations

// Invalid math operation - results in NaN (Not-a-Number)
const result = 20 / 'ABC';
console.log(typeof result); // Output: 'number' - Despite being NaN, JavaScript still considers it a number
console.log(result); // Output: NaN - Represents an invalid number
console.log(isNaN(result)); // Output: true - Checking if the result is NaN

// Valid math operation
const result1 = 10 / 2;
console.log(result1); // Output: 5
console.log(isNaN(result1)); // Output: false - The result is a valid number

// 2. Working with Numbers

// Converting numbers to strings
console.log(age.toString()); // Output: '18'
console.log(typeof age.toString()); // Output: 'string'

// Rounding numbers using toFixed()

const PI1 = 3.14;
const PI2 = 3.8;

console.log(typeof PI1); // Output: 'number' - Assuming 'PI' is defined elsewhere

console.log(PI1.toFixed()); // Output: '3' - Rounding down because decimal part is less than 0.5
console.log(PI2.toFixed()); // Output: '4' - Rounding up because decimal part is 0.5 or greater
console.log(typeof PI1.toFixed()); // Output: 'string'

// Rounding and formatting numbers with a specified decimal precision

const money = 3000.1238835982394;

console.log(money.toFixed()); // Output: '3000' - Rounding without decimal places
console.log(money.toFixed(2)); // Output: '3000.12' - Rounding to 2 decimal places
console.log(money.toFixed(3)); // Output: '3000.124' - Rounding to 3 decimal places
console.log(money.toFixed(4)); // Output: '3000.1239' - Rounding to 4 decimal places
console.log(money.toFixed(5)); // Output: '3000.12388' - Rounding to 5 decimal places
