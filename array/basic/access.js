const variable = ['Javascript', 'ExpressJS', 'ReactJS'];

// Accessing elements in array
// Starting from 0: Array indices start from 0.
// This means that the first element in the array has an index of 0.
// The second element has an index of 1, and so on.
console.log('Element at index 0: ', variable[0]);
console.log('Element at index 1: ', variable[1]);
console.log('Element at index 2: ', variable[2]);

// Accessing out-of-bounds indices:
// If try to access an index that is outside the array's bounds, will return undefined.
console.log('Element at index 3: ', variable[3]);
console.log('Element at index 4: ', variable[4]);

// Negative indices:
// You cannot directly use negative indices to access elements from the end of the array.
// Instead, you can calculate the index based on the length of the array.
// -1 corresponds to the last element, -2 corresponds to the second-to-last element, and so on.
const lastIndex = variable.length - 1;
console.log('Element at index -1: ', variable[lastIndex]); // Last element
console.log('Element at index -2: ', variable[lastIndex - 1]); // Second-to-last element
