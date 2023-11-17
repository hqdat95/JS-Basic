const numbers = 5;

for (let i = 0; i < numbers; i++) {
  let line = '';

  for (let j = 0; j < numbers; j++) {
    line += '*';
  }

  console.log(line);
}
