// Reverse string

let string = 'ABCD';
let reverseString = '';

for (let i = string.length - 1; i >= 0; i--) {
  reverseString += string[i];
}

console.log(reverseString);
