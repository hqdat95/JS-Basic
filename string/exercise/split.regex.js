function splitString(str) {
  const regex = /\b\w+\b/g;

  return str.match(regex);
}

const str = 'Hello World';
console.log(`Use RegEx: `, splitString(str));
