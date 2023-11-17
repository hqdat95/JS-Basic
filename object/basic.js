/**
 * Working with Objects in JavaScript
 */

const info = {
  name: 'Dat Ho',
  age: 28,
  address: 'Viet Nam',
};

console.log('Initial info object:', info, '\n');

info.email = 'example@gmail.com';

console.log('info object after adding email property:', info, '\n');

console.log('Name property in info object:', info.name, '\n');

console.log('Non-existent property (password) in info object:', info.password, '\n');

console.log('Age property in info object using [] syntax:', info['age'], '\n');

console.log('Non-existent property (password) in info object using [] syntax:', info['password'], '\n');

const myKey = 'address';
console.log('Accessing address property using a variable:', info[myKey]);
