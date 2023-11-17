/**
 * Object Constructor
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

// Create object using the 'User' constructor and provide information.
const author = new User('Dat', 'Ho', 'Avatar');
const user = new User('Hang', 'Ton', 'Avatar');

// Add a property to the object.
author.title = 'Share';
user.comment = 'Comment';

// Define a function to print user information.
function printUserInfo(userInfo) {
  userInfo.getName = userInfo.getName(); // Update 'getName' to store the result of the method.

  console.log(userInfo); // Print the user information.
}

printUserInfo(author);
printUserInfo(user);
