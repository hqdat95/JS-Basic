function printLine(spaces, stars) {
  return ' '.repeat(spaces) + '* '.repeat(stars);
}

function printHexagon(n) {
  if (n < 2) {
    console.log('Size must be greater than or equal to 2.');
    return;
  }

  const totalLines = 2 * n - 1;
  const midPoint = Math.floor(totalLines / 2);

  /**** Print upper part *****/
  for (let i = 0; i < n; i++) {
    const spaces = Math.abs(midPoint - i);
    const stars = n - spaces;
    console.log(printLine(spaces, stars));
  }

  /**** Print middle part *****/
  const middleLine = printLine(0, n);
  for (let m = 0; m < n - 2; m++) {
    console.log(middleLine);
  }

  /**** Print Lower part *****/
  for (let h = n - 2; h >= 0; h--) {
    const spaces = Math.abs(midPoint - h);
    const stars = n - spaces;
    console.log(printLine(spaces, stars));
  }
}

// Driver Code
const n = 5;
printHexagon(n);
