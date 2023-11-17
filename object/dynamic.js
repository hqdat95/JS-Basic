/**
 * Working with Objects in JavaScript
 */

const pwd = 'password';

const info = {
  name: 'Dat Ho',
  age: 28,
  address: 'Viet Nam',
  [pwd]: '123456789',
};

console.log('info object with dynamically created "password" property:\n', info);
