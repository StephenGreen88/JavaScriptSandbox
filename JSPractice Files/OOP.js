// Object Oriented Programming

// Constructor function
// function Person(firstName, lastName, dob) { // <-- When using a constructor function it should always be capitalized.
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob); // <-- You can pass it in as a string or use the date constructor.
//     this.getBirthYear = function () { // <-- You can add methods into the constructor 
//         return this.dob.getFullYear();
//     }
//     this.getFullName = function () { // <-- You can add methods into the constructor
//         return `${this.firstName} ${this.lastName}`
//     }

    // // Using prototypes to return the birth year
    // Person.prototype.getBirthYear = function () {
    //     return this.dob.getFullYear();
    // }
    // // Using prototypes to return the full name
    // Person.prototype.getFullName = function () {
    //     return `${this.firstName} ${this.lastName}`;
    // }

    // Using classes which are part of ES6 AKA syntactic sugar
    class Person {
        constructor(firstName, lastName, dob) { // <-- using constructor method to create the constructor. Still passing in parameters
            this.firstName = firstName;
            this.lastName = lastName;
            this.dob = new Date(dob);
        }

        // Return birth year by using the getBirthYear method
        getBirthYear() {
            return this.dob.getFullYear();
        }

        // Return full name by using the getFullName method
        getFullName() {
            return `${this.firstName} ${this.lastName}`;
        }
    }

 // Instantiate the object
 const person1 = new Person('Stephen', 'Green', '10/28/1988'); // <-- Here you're 'creating a new person' by passing in the values you want into the constructor function
 // Create another person
 const person2 = new Person('Kelly', 'Green', '12/20/1991');
 // Create another person
 const person3 = new Person('Humphrey', 'Green', '8/1/2014');
 // Check to see if it works
 console.log(person1);
 // Check to see if it works
 console.log(person2);
 // Check to see if it works
 console.log(person3);
 // If you want to return only one part of the object, in this case Kelly's name. Do the following.
 console.log(person2.dob.getFullYear()); // <-- There are a lot of methods you can add on to the end of the date method, the following returns the full year.
 // Check to see if getBirthYear function inside of constructor works
 console.log(person1.getBirthYear()); // <-- This will return Stephen's birth year.
 // Check to see if getFullName function inside of constructor works
 console.log(person3.getFullName()); // <-- Thi will return Humphrey's full name.