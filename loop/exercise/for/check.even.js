// Check array contains even number

const array1 = [5, 10, 3, 8, 2];
const array2 = [1, 3, 7, 9, 13];

function checkArrayForEven(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      return true;
    }
  }
  return false;
}

const checkAndLogArray = (arr) =>
  checkArrayForEven(arr) ? 'Array containing at least one even number' : 'Arrays without even numbers';

console.log(checkAndLogArray(array1));
console.log(checkAndLogArray(array2));
