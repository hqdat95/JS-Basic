const rows = 4;
const columns = 6;

for (let i = 0; i < rows; i++) {
  let line = '';

  for (let j = 0; j < columns; j++) {
    line += '*';
  }

  console.log(line);
}
