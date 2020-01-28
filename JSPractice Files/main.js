// var, let, const
/* Use let when you want a value to change
and use const when you want the value to remain constant*/

// Data types
// String, Numbers, Boolean, Null, Undefined, Symbol

// const name = 'Steve';
// const age = 31;

// // Concatenation
// console.log('My name is ' + name + ' and I am ' + age);
// // Template String/Literals
// const hello = `My name is ${name} and I am ${age}`;
// // Passing in a variable to the console.log
// console.log(hello);

// Properties
const s = 'Hello world!';
// Get the length
console.log(s.length); // <-- Properties don't need (), those are for methods and functions.
// Change to upper
console.log(s.toUpperCase());
// Change to lower case
console.log(s.toLowerCase());
// Useing substring
console.log(s.substring(0, 5)); // <-- Pass in to conditions
// Add on to each other
console.log(s.substring(5, 0).toUpperCase());
// Use the split method
console.log(s.split(''));
// Add tags example
const t = 'technology, computers, it, code';
// Use the split method to put them into an array
console.log(t.split(', '));