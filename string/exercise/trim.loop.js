function trimString(input) {
  let start = 0;
  let end = input.length - 1;

  while (input[start] === ' ') {
    start++;
  }

  while (input[end] === ' ') {
    end--;
  }
  return input.substring(start, end + 1);
}

const input = '  Hello, World!  ';
const result = trimString(input);
console.log(result);
