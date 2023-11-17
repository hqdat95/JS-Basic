function isPalindrome(str) {
  str = str.toLowerCase().replace(/\s/g, '');
  const reversedStr = str.split('').reverse().join('');

  return str === reversedStr;
}

const str = 'RaceCar';
console.log(isPalindrome(str));
