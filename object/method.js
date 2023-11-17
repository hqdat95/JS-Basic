/**
 * Working with Objects in JavaScript
 */

const myInfo3 = {
  name: 'Dat Ho',
  age: 28,
  address: 'Viet Nam',

  getName() {
    return this.name;
  },
};

console.log('Type of getName property:', typeof myInfo3.getName, '\n');
console.log('Calling getName function to get name property:', myInfo3.getName());
