function isPalindrome(str) {
  str = str.toLowerCase().replace(/\s/g, '');

  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

const str = 'RaceCar';
console.log(isPalindrome(str));
