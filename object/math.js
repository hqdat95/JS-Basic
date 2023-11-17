/**
 * Math object
 *
 * - Math.PI
 * - Math.round()
 * - Math.abs()
 * - Math.floor()
 * - Math.random()
 * - Math.min()
 * - Math.max()
 *
 */

// Display the value of PI (π)
console.log('Value of PI:', Math.PI); // Output: Value of PI: 3.141592653589793

// Rounding numbers - using Math.round()
console.log('Round 1.2:', Math.round(1.2)); // Output: Round 1.2: 1
console.log('Round 1.5:', Math.round(1.5)); // Output: Round 1.5: 2
console.log('Round 1.8:', Math.round(1.8)); // Output: Round 1.8: 2

// Absolute value - using Math.abs()
console.log('Absolute value of 4:', Math.abs(4)); // Output: Absolute value of 4: 4
console.log('Absolute value of -4:', Math.abs(-4)); // Output: Absolute value of -4: 4

// Ceiling - using Math.ceil()
console.log('Ceiling 4.0:', Math.ceil(4.0)); // Output: Ceiling 4.0: 4
console.log('Ceiling 4.00000002:', Math.ceil(4.00000002)); // Output: Ceiling 4.00000002: 5
console.log('Ceiling 4.3:', Math.ceil(4.3)); // Output: Ceiling 4.3: 5

// Flooring - using Math.floor()
console.log('Floor 4.999:', Math.floor(4.999)); // Output: Floor 4.999: 4
console.log('Floor 5.1:', Math.floor(5.1)); // Output: Floor 5.1: 5

// Random integer from 0 to 98 and check if less than 50
const random = Math.floor(Math.random() * 99);
const result = random < 50 ? 'Unsuccessful' : 'Successful';
console.log(`Random integer and check result: ${random} - ${result}`);
