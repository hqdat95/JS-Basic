const numbers = 5;

for (let i = 0; i < numbers && numbers % 2 !== 0 && numbers >= 3; i++) {
  let line = '';
  const spaces = Math.abs(Math.floor(numbers / 2) - i);
  const stars = numbers - 2 * spaces;

  for (let j = 0; j < spaces; j++) {
    line += ' ';
  }

  for (let k = 0; k < stars; k++) {
    line += '*';
  }

  console.log(line);
}
