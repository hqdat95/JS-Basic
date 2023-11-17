// Find the largest element in the array

const array = [5, 10, 3, 8, 2];

const arrLength = array.length;
let max = array[0];

for (let i = 1; i < arrLength; i++) {
  if (array[i] > max) {
    max = array[i];
  }
}

console.log(`The largest element in the array is: ${max}`);
