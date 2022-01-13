// variable let and const

const price1 = 5;
const price2 = 6;
let total = price1 + price2;
console.log(total);
/*
Here the two variables price1 and price2 are declared with the const keyword. 
These are constant values and cannot be changed. 
The variable total is declared with the let keyword. 
This is a value that can be changed.
*/
// object
let person = {
    firstName:"John", 
    lastName:"Doe", 
    age:50, 
    eyeColor:"blue"
};

/* Template literals are enclosed by the backtick (` `) character 
instead of double or single quotes.

Template literals can contain placeholders. 
These are indicated by the dollar sign and curly braces (${expression}). 
The expressions in the placeholders and the text between the 
backticks (` `) get passed to a function. 
Using this template literal we can easily call any property from any object.
*/
let text = `Welcome ${person.name} !`;
console.log(text);
// conditional
let hour = 12;
let greeting;
if (hour < 18) {
    greeting = "Good day";
  } else {
    greeting = "Good evening";
}
console.log(greeting);

