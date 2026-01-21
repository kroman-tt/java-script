// One way to declare a variable in JavaScript is to use the let keyword. You will learn more about the let keyword as well as other ways to declare variables in future lessons.

// Here's an example of using let to declare a variable called age:

// let age;
// Right now, the age variable does not have a value assigned to it. If you try to use it, it will return undefined, which means it has no value.


// -------------------x-----------------------------x--------------------------x-------------------x----------------

// NOTE: console.log() is a function that outputs information to the console, which is a part of your web browser used for debugging code. You will learn more about console.log() in future lessons. Also, the // symbols are used to add comments in your code. Comments are notes for yourself or other programmers that are ignored when the code runs.

// let age;
// console.log(age); // undefined
// To assign a value to a variable you will need to use the assignment operator like this:

// let age = 25;
// Now when you use the age variable, it will return the value of 25.

// let age = 25;
// console.log(age); // 25


// -------------------x-----------------------------x--------------------------x-------------------x----------------

// One advantage of using the let keyword to declare variables is that you can reassign values to them. In programming, reassignment means giving a new value to a variable that already has one.

// Here is an example of reassigning the value for the age variable.

let age = 25;
console.log(age); // 25
age = 30;
console.log(age); // 30
//Now the age variable holds the value of 30. 
// Notice that the let keyword wasn't needed again because the age variable was already declared, 
// so there's no need to declare it a second time.

// -------------------x-----------------------------x--------------------------x-------------------x----------------


// Naming variables may seem straightforward, but there are some rules and best practices to ensure your code is readable and functional.

// Your variable names should describe what the data represents. For example, instead of using a name like x, a more descriptive name such as age or points makes your code easier to understand.

// // Bad variable names
// let x = 10;
// let y = "John";

// // Good variable names
// let age = 10;


// -------------------x-----------------------------x--------------------------x-------------------x----------------


// Variables in JavaScript must begin with a letter, an underscore (_), or a dollar sign ($). They cannot start with a number.

// // Valid variable names
// let age;
// let _score;
// let $total;

// // Invalid variable names
// let 1stPlace; // starts with a number

// -------------------x-----------------------------x--------------------------x-------------------x----------------

// Variable names are case-sensitive, meaning the word age in all lowercase and the word Age with a capital A are considered different variables.

// let age = 25;
// let Age = 30;
// console.log(age); // 25
// console.log(Age); // 30
// This is why it's important to stick with a consistent naming convention like camelCase. camelCase is where the first word is all lowercase and each subsequent word starts with an uppercase letter.

// Here is an example of using the camelCase naming convention for a variable:

// let thisIsCamelCase;
// let anotherExampleVariable;
// let freeCodeCampStudents;


// -------------------x-----------------------------x--------------------------x-------------------x----------------

// There are certain keywords in JavaScript that you cannot use as variable names,
//  such as let, const, function, or return, as they are reserved for the language itself.

// You should also avoid using special characters like exclamation points (!) or at (@) symbols,
//  in your variable names. It is best to keep variable names readable by using letters, numbers, 
// underscores, or dollar signs.


// -------------------x-----------------------------x--------------------------x-------------------x----------------

