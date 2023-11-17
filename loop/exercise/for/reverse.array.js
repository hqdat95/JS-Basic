// Print array in reverse

const array = [1, 2, 3, 4, 5];

const arrLength1 = array.length;
const reversedArray = [];

for (let i = arrLength1 - 1; i >= 0; i--) {
  reversedArray.push(array[i]);
}

console.log('Initial array: ' + array);
console.log('Array after inversion: ' + reversedArray);
