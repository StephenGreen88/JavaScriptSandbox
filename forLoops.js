const todos1 = [{
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appointment',
        isCompleted: false
    },
];

// For loop 
for (let i = 0; i < 10; i++) {
    console.log(`For loop number ${i}`);
};

// While loop
let i = 0;
while (i < 10) {
    console.log(`While loop number: ${i}`);
    i++;
}

// For loop through an array. This will return each item in the array 
for (let i = 0; i < todos.length; i++) {
    console.log(todos[i].text);
};

// For of loop -- different way of looping though
for (let todo of todos) {
    console.log(todo)
}

// High order array methods -- suggested iteration with arrays. Take in a function, pass in a variable.
// forEach -- look better with arrow functions
todos.forEach(function (todo) {
    console.log(todo);
});

// map -- Returns an array, in this case just the text values.
const todoText = todos.map(function (todo) {
    return todo.text;
});
console.log(todoText);

// // filter -- You can filter what you want the loop to return out
// const todoCompleted = todos.filter(function(todo){
//     return todo.isCompleted === true;
// });
// console.log(todoCompleted);

// console.log only the todos that have been completed by adding the map method onto to loop
const todoCompleted = todos.filter(function (todo) {
    return todo.isCompleted === true;
}).map(function (todo) {
    return todo.text;
});
// Check to see if it worked
console.log(todoCompleted);