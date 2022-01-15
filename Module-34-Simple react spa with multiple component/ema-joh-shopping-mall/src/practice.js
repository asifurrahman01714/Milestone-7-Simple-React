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
console.log(person.firstName);
const personKeys = Object.keys(person);
console.log(personKeys);
const personValues = personKeys.map(personKey => person[personKey]);
console.log(personValues);





console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
/* Template literals are enclosed by the backtick (` `) character 
instead of double or single quotes.

Template literals can contain placeholders. 
These are indicated by the dollar sign and curly braces (${expression}). 
The expressions in the placeholders and the text between the 
backticks (` `) get passed to a function. 
Using this template literal we can easily call any property from any object.
*/
let text = `Welcome ${person.firstName} !`;
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

// Array
const friends = [
  {name:'John', id: '17702061', age:'23'},
  {name:'Mary', id: '17702062', age:'23'},
  {name:'John', id: '17702061', age:'23'}
];

for (let i = 0; i < friends.length; i++) {
  console.log(friends[i].name);
}
//function
function add1(a, b) { // function declaration
  return a + b;
}
console.log(add1(5, 6)); // function call

// Arrow function to add two numbers
const add = (a, b) => a + b;
console.log(add(5, 6));

const name1 = 'Mary';
console.log(`Hello ${name1}`);



