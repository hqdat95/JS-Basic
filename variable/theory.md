# Variable Declaration and Usage Comparison

Below is a comparison of variable declaration and usage using `var`, `let`, and `const` in JavaScript:

| Keyword | Reassignment | Scope              | Hoisting    |
| ------- | ------------ | ------------------ | ----------- |
| var     | Yes          | Global or Function | Hoisted     |
| let     | Yes          | Block              | Not hoisted |
| const   | No           | Block              | Not hoisted |

### Examples and Results

Below are examples of using each type of variable and their corresponding results:

#### Using var:

```javascript
var ageVar = 25; // Declare and initialize using 'var'
ageVar = 26; // Reassign a new value to 'ageVar'
console.log('Age using var:', ageVar); // Output: Age using var: 26
```

#### Using let:

```javascript
let ageLet = 30; // Declare and initialize using 'let'
ageLet = 31; // Reassign a new value to 'ageLet'
console.log('Age using let:', ageLet); // Output: Age using let: 31
```

#### Using const:

```javascript
const ageConst = 35; // Declare and initialize using 'const'

`If you remove the code below, then 'ageConst' is executed`;
ageConst = 36; // Error: Assignment to constant variable.
console.log(ageConst); // Output: 35 ( if you remove the above code )
```

#### Scope and Hoisting:

- If you remove the comments in the code below, you'll see how scope and hoisting affect variable access:

```javascript
`Since 'varInBlock' is declared using 'var' within the block, it has function scope.`;
`It can be accessed outside the block as well.`;
if (true) {
  var varInBlock = 'I am in a block (var)';
  console.log(varInBlock); //  Output: 'I am in a block (var)';
}
console.log(varInBlock); //  Output: 'I am in a block (var)';

`Since 'letInBlock' is declared using 'let' within the block, it has block scope.`;
`It is only accessible within the block where it's declared.`;
if (true) {
  let letInBlock = 'I am in a block (let)';
  console.log(letInBlock); // Output: 'I am in a block (let)';
}
console.log(letInBlock); // Error: letInBlock is not defined

`Similar to 'let', 'const constInBlock' is also declared within the block and has block scope.`;
`However, 'const' variables cannot be reassigned after initialization.`;
if (true) {
  const constInBlock = 'I am in a block (const)';
  console.log(constInBlock); // Output: 'I am in a block (const)';
}
console.log(constInBlock); // Error: constInBlock is not defined

`The code below demonstrates hoisting behavior and variable accessibility.`;

`Since 'hoistedVar' is declared using 'var', it is hoisted and initialized with 'undefined'.`;
console.log(hoistedVar); // Output: undefined
var hoistedVar = 'I am hoisted (var)';

`Attempting to access a variable declared 'let' before initialization will cause an error.`;
console.log(hoistedLet); // Error: Cannot access 'hoistedLet' before initialization
let hoistedLet = 'I am hoisted (let)';

`Variables declared using 'const' are also hoisted, but they are not initialized with 'undefined'.`;
`Uncomment the line below to see the error.`;
console.log(hoistedConst); // Error: Cannot access 'hoistedConst' before initialization
const hoistedConst = 'I am hoisted (const)';
```
