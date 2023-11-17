let n = 10;
let m = 10.52;

function isPrimeNumber(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

const checkPrimeNumber = (num) =>
  isPrimeNumber(num) ? `${num} is a prime number` : `${num} is not a prime number`;

console.log(checkPrimeNumber(n));
console.log(checkPrimeNumber(m));
