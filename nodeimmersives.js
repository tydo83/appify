// Simple node app using process.argv[] and console.log();
// process.argv[] takes an input from users as an argument 
// console.log prints out statement in the parenthesis on the terminal 

// User have to type first name and last name as arguments after nodeimmersives.js

let firstName = process.argv[2];
let lastName = process.argv[3];
let firstInitial = firstName[0];
let secondInitial = lastName[0];

console.log("Welcome to Code Immersives. " + firstName + " " + lastName);
console.log("This line capitalized your name: " + firstName.toUpperCase() + " " + lastName.toUpperCase());
console.log("This line prints out your initial: " + firstInitial + "." + secondInitial + ".");
console.log("This line gives you Code immersives: " + firstName.toLowerCase() + lastName.toLowerCase() + "@codeimmersives.com")
