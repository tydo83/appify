let firstName = process.argv[2];
let lastName = process.argv[3];
let firstInitial = firstName[0];
let secondInitial = lastName[0];

console.log("Hello " + firstName + " " + lastName);
console.log("Welcome to Code Immersives, " + firstName.toUpperCase() + " " + lastName.toUpperCase());
console.log("We are going to learn how to make an app using node!!! " + firstInitial + "." + secondInitial + ".");
console.log("This is your email address: " + firstName.toLowerCase() + lastName.toLowerCase() + "@codeimmersives.com")
