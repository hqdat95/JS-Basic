const numbers = 5;

for (let i = 0; i < numbers; i++) {
  let line = '';

  for (let j = 0; j < numbers - i - 1; j++) {
    line += ' ';
  }

  for (let j = 0; j < 2 * i + 1; j++) {
    line += '*';
  }

  console.log(line);
}
