// Practicing functions

// Function to add numbers together
function addNums(num1, num2) { // <-- You can add default values 
    console.log(num1 + num2);
};
// Call the function, pass parameters into the function, parameters are what the function acts on.
addNums(5, 4); // <-- since I passed in 5 and 4 the result should be nine.

// This is how you'd normally run a function
function multiplyNums(num1, num2) {
    return num1 * num2;
};
// Check to see if it works
console.log(multiplyNums(5, 5)); // <-- wrap the calling of the function in a console.log

// Arrow functions <-- introduced in ECMA6 or JS 2015
const subNums = (num1, num2) => { // <-- name the function using a variable, pass in parameters, use a fat arrow, return the function
    return num1 - num2;
}
// Check to see if it works
console.log(subNums(10, 5));

// Arrow functions <-- If one expression you can do the following
const plusNum = (num1, num2) => // <-- No need for the {}
    console.log(num1 + num2);
plusNum(5, 2);

// Arrow functions <-- Another way to use them
const diffNums = (num1, num2) => num1 - num2;
    console.log(diffNums(10, 5));

// Arrow functions <-- Another way to use them with only one parameter
const addingNums = (num1) => num1 + 10;
    console.log(addingNums(10));

// Using Arrow functions with forEach
todos.forEach((todos) => console.log(todos));