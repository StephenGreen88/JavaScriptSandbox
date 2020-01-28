// // Create an object with an array inside of it and add an object inside of the main object
// const person = {
//     firstName: 'Stephen',
//     lastName: 'Green',
//     age: 30,
//     hobbies: ['Coding', 'Fishing', 'Hiking', 'Sports'],
//     address: {
//         street: '50 Main Street',
//         city: 'Eagle Mountain',
//         state: 'UT'
//     }
// }
// // This will return the whole object in the console.
// console.log(person);
// // Drill down using dot notation to console the firstName
// console.log(person.firstName);
// // You can log more than one item at a time
// console.log(person.firstName, person.lastName);
// // console.log the fishing hobby
// console.log(person.hobbies[1]);
// // console.log the city 
// console.log(person.address.city);
// // Deconstructing, pulling something out of the object
// const { firstName, lastName } = person;
// // Check to see if it worked
// console.log(firstName);
// // Add an email property to the object
// person.email = 'stephengreen1028@gmail.com';
// // Check to see if it worked
// console.log(person);

// // Create an array of objects of a to do list.
// const todos = [
//     {
//         id: 1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: 'Meeting with boss',
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: 'Dentist appointment',
//         isCompleted: false
//     },
// ];

// // Check to see if it worked
// console.log(todos);
// // console.log 'Meeting with boss'
// console.log(todos[1].text);
// // Convert the object into JSON within the script
// const todoJSON = JSON.stringify(todos);
// // Check to see if it worked
// console.log(todoJSON);