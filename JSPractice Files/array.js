// Arrays - variables that hold multiple values

// Create an array using a constructor
const numbers = new Array(1,2,3,4,5); // <-- When  you see the word new, that means it's a constructor.

console.log(numbers);

// Create an array using brackets
const fruits = ['apples', 'oranges', 'pears', 10, true];

console.log(fruits);
// Add grapes to the fruits array
fruits[3] = 'grapes';
// Check to see if it worked
console.log(fruits);
// Add mangos to the array using the push method. This will add mangos to the end of the array.
fruits.push('mangos');
// Check to see if it worked
console.log(fruits); // <-- It worked and it removed 10 from the array.
// Accessing only one of the items in the array
console.log(fruits[1])
// Add strawberries to the array using unshift, this will add strawberries to the beginning of the array
fruits.unshift('strawberries');
// Check to see if it worked
console.log(fruits);
// Use the pop() method to 'pop' the last item off the end of the array.
fruits.pop();
// Check to see if it worked
console.log(fruits); // <-- It worked!
// Check to see if something is in an array
console.log(Array.isArray('hello')); // <-- This will return false because hello is not in the array.
// Get the index of a certain value
console.log(fruits.indexOf('oranges')); // <-- This will return 2 as oranges is in the third position in the array.

