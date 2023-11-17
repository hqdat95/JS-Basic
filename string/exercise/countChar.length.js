function countCharacters(str) {
  return str.replace(/\s/g, '').length;
}

const str = 'Hello, World!';

console.log(countCharacters(str));
