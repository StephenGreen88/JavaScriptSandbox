// Declare necessary variables -- Grabbing the below from the DOM
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Create a listen event on the form
myForm.addEventListener('submit', onSubmit); // <-- add the function as one of the parameters
// Create onSubmit function
function onSubmit(e) { // <-- Takes in an event parameter
    e.preventDefault(); // <-- prevents the page from auto-reloading
    // console.log(nameInput.value); // <-- add the .value to capture the users input
    // Adding some form validation with an if statement
    if (nameInput.value === '' || emailInput === '') {
        msg.classList.add('error'); // <-- adding ther error class from style.css
        msg.innerHTML = 'Please enter info in appropriate fields'; // <-- adding a message to the HTML in lieu of an alert
        setTimeout(() => msg.remove(), 3000); // <-- Using setTimeout to remove the message after three seconds
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(
            `${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);
        // Clear the fields
        nameInput.value = '';
        emailInput.value = '';
    }
}