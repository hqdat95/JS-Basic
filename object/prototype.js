/**
 * Object prototype = Basic
 */

// Define a constructor function 'User'.
function User(firstName, lastName, avatar) {
  this.firstName = firstName; // Assign the 'firstName' from the first parameter.
  this.lastName = lastName; // Assign the 'lastName' from the second parameter.
  this.avatar = avatar; // Assign the 'avatar' from the third parameter.

  // Define a method within the 'User' object to get the full name.
  this.getName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

// Create 'user1' and 'user2' objects using the 'User' constructor.
let user1 = new User('D', 'H', 'avatar');
let user2 = new User('H', 'T', 'avatar');

// Add properties and methods to the prototype of the 'User' constructor.
User.prototype.className = 'Dev'; // Add a 'className' property to the prototype.
User.prototype.getClassName = function () {
  // Add a 'getClassName' method to the prototype.
  return this.className;
};

// Access the 'className' property directly from 'user1'.
console.log(user1.className);

// Access the 'getClassName' method from 'user2'.
console.log(user2.getClassName());
