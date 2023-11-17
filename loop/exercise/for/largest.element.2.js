const array = [5, 10, 3, 8, 2];

let firstMax = -Infinity;
let secondMax = -Infinity;

for (let i = 0; i < array.length; i++) {
  if (array[i] > firstMax) {
    secondMax = firstMax;
    firstMax = array[i];
  } else if (array[i] > secondMax && array[i] !== firstMax) {
    secondMax = array[i];
  }
}

console.log(`The second largest element in the array is: ${secondMax}`);
