// // // Set a const variable
//  const x = 20;

//  if (x === 10) {
//      console.log('x is 10');
//  } else if (x > 10) {
//      console.log('x is greater than 10');
//  } else {
//      console.log('x is less than 10');
//  };

// // Multiple conditions
// const a = 6
// const b = 11

// if (a > 5 || b > 10) {
//     console.log('a is more than 5 or b is more than 10');
// } 

// // Ternary operator <-- Set the value of a variable based on a condition.
// const c = 10;

// const color = c > 10 ? 'red' : 'blue';
// // Check to see if it works
// console.log(color);

// Switches <-- another way to evaluate conditions
const x = 9;

// const color = x > 10 ? 'red' : 'blue';
const color = 'green';

switch (color) {
    case 'red':
    console.log('color is red');
    break;
    case 'blue':
    console.log('color is blue');
    break;
    default:
        console.log('color is not red or blue');
};