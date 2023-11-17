function countCharacter(str, char) {
  return str.split('').reduce((count, currentChar) => {
    if (currentChar === char) {
      return count + 1;
    }

    return count;
  }, 0);
}

const str = 'banana';
console.log(countCharacter(str, 'a'));
