/**
 * Several Built-in Functions Overview:
 *  | No. | Function       | Description                                                              |
 *  |---- |--------------- |--------------------------------------------------------------------------|
 *  | 1   | Alert          | Display an alert box with the provided message.                          |
 *  | 2   | Console        | Output messages to the console using different log levels.               |
 *  | 3   | Confirm        | Display a confirmation dialog with the provided message.                 |
 *  | 4   | Prompt         | Display a prompt dialog with the provided message and input field.       |
 *  | 5   | Set Timeout    | Execute a function after a specified delay (in milliseconds).            |
 *  | 6   | Set Interval   | Execute a function repeatedly at a specified interval (in milliseconds). |
 */

const message = 'This is a message: ';

// alert
alert(message + 'alert');

// console
console.log(message, 'console.log'); // Log an informational message
console.error(message, 'console.error'); // Log an error message
console.warn(message, 'console.warn'); // Log a warning message

// confirm
confirm('Confirm this action?');

// prompt
prompt('Please enter your name:');

// setTimeout
setTimeout(function () {
  console.log(message, 'setTimeout'); // Log a message after a delay
}, 1000);

// setInterval
setInterval(function () {
  console.log(message, 'setInterval', Math.random()); // Log a message at intervals
}, 5000); // Every 60 seconds (1 minute)
