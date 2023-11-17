function splitString(str) {
  const works = str.split(' ');

  for (const work of works) {
    console.log('Use loop: ', work);
  }
}

const str = 'Hello World';
splitString(str);
