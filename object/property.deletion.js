/**
 * Working with Objects in JavaScript
 */

const info = {
  name: 'Dat Ho',
  age: 28,
  address: 'Viet Nam',
};

delete info.age;
console.log('info object after deleting "age" property:', info, '\n');

delete info.address && delete info.name;
console.log('info object after deleting "address" and "name" properties:', info);
