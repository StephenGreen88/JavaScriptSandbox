// // Single element selectors
// //======================================
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('.container'));

// // Multiple element selectors
// //======================================
// console.log(document.querySelectorAll('.item')); // <-- querySelectorAll selects all the items

// // Looping through using document.querySelectorAll
// const items = document.querySelectorAll('.item');
// // Loop through all the list items
// items.forEach((item) => console.log(item));

// //Manipulating the DOM
// //======================================
// const ul = document.querySelector('.items');
// Call different methods
// ul.remove(); // <-- remove all the list items
// ul.lastElementChild.remove(); // <-- removes the last list item
// ul.firstElementChild.textContent = 'Hello Steve'; // <-- Places the text 'Hello Steve' in the first list item
// ul.children[1].innerHTML = 'Hello Kelly'; // <-- Places the text 'Hello Kelly' in the second list item.
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>'; // <-- Adding html dynamically using .innerHTML

// // Changing the class of a button
// //========================================
// const btn = document.querySelector('.btn'); // <-- Select the button class in CSS
// btn.style.background = 'red'; // <-- Changes the color of the submit button to red

// Events
//========================================
// const btn = document.querySelector('.btn');
// btn.addEventListener('click', (e) => { // <-- be sure to pass in the parameter for an event
//     e.preventDefault(); // <-- Prevents the page from reloading
//     //console.log('The submit button has been clicked');
//     //console.log(e); // <-- This will help you get the event attributes of the button that is clicked.
// }); 

// Events -- Changing things on click -- This will change the color of the form background and the background of the body
//========================================
// const btn = document.querySelector('.btn');
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form')
//         .style.background = '#ccc';
//     document.querySelector('body')
//         .classList.add('bg-dark');
//     document.querySelector('.items')
//         .lastElementChild.innerHTML = '<h1>Hello</h1>';
// });