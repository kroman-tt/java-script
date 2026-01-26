// // To create a string in JavaScript, you can use single quotes ('), or double quotes (").

// // Here is an example of creating two variables that hold string values:

// // let singleQuotes = 'This is a string';
// // console.log(singleQuotes);
// // let doubleQuotes = "This is also a string";
// // console.log(doubleQuotes);
// // Even though you can use single or double quotes to create strings, it's important to be consistent. If a string begins with a single quote, it must also end with a single quote.

// // The same applies to double quotes. The following example will throw an error because it starts with a double quote and ends with a single quote:

// // const improperStr = "Do not do this';
// // Another thing to take into account is that strings are immutable. In programming, immutability means that once something is created, it cannot be changed. So, when you create a string, you can't change its characters directly. Instead, you would create a new string if you want to make changes.

// // Here is an example of assigning a new string to a developer variable:

// // let developer = "Jessica";
// // console.log(developer);
// // developer = "Quincy";
// // console.log(developer);
// // Since strings are immutable, we can't update the first string directly. That is why we are assigning a new string to the developer variable.

// // // -------------------x-----------------------------x--------------------------x-------------------x----------------

// // What Is String Concatenation, and How Can You Concatenate Strings with Variables?





// In this lesson, we'll focus on how string concatenation works, specifically using the + operator, the += operator, and the concat() method.

// The + operator is one of the simplest and most frequently used methods to concatenate strings. It allows you to join multiple strings or combine strings with variables that hold text.

// Here's an example:

// let firstName = "John";
// let lastName = "Doe";

// let fullName = firstName + " " + lastName; 
// console.log(fullName); // John Doe
// In this example, we used the + operator to concatenate the firstName and lastName variables along with a space (" ") to create the full name.

// One disadvantage of using the + operator for string concatenation is that it can lead to spacing issues if you don't carefully manage the spacing between the concatenated strings.

// Here is an example where a space is missing:

// let firstName = "John";
// let lastName = "Doe";

// let fullName = firstName + lastName; 
// console.log(fullName); // "JohnDoe"
// Whenever you use the + operator to concatenate strings, it is important to double check for any potential spacing issues.

// If you need to add or append to an existing string, then you can use the += operator. This is helpful when you want to build upon a string by adding more text to it over time.

// Here's an example of appending one string to another using the += operator:

// let greeting = 'Hello';
// greeting += ', John!';

// console.log(greeting); // "Hello, John!"
// It is important to remember that strings are immutable which means once a string is created you can not alter it.

// In this case, the original string of Hello is not modified. Instead, greeting now references the new string of Hello, John!

// Another way you can concatenate strings is to use the concat() method.

// Before we begin learning about the concat() method, it is important to first understand what a method and a function are at a higher level.

// In programming, a function is a reusable block of code that performs a specific task and can be called with various inputs. A method, on the other hand, is a type of function that is associated with an object, meaning it operates on the data contained within that object.

// In future lessons, we will dive much deeper into how functions, objects, and methods work in JavaScript. But for now, it is important to understand that JavaScript has dozens of methods you can use, like the concat() method.

// Here's an example of using the concat() method to join two strings together:

// let str1 = 'Hello';
// let str2 = 'World';

// let result = str1.concat(' ', str2); 
// console.log(result); // Hello World
// In this example, we use the concat() method to join str1, a space (' '), and str2 into a single string.

// To conclude, + operator is best for simple concatenation, especially when you need to combine a few strings or variables.

// The += operator is useful when building up a string step by step or appending new content to an existing string variable.

// Finally, the concat() method is beneficial when you need to concatenate multiple strings together.
// // // -------------------x-----------------------------x--------------------------x-------------------x----------------


// // // -------------------x-----------------------------x--------------------------x-------------------x----------------


// // // -------------------x-----------------------------x--------------------------x-------------------x----------------


// // // -------------------x-----------------------------x--------------------------x-------------------x----------------


// // // -------------------x-----------------------------x--------------------------x-------------------x----------------


// // // -------------------x-----------------------------x--------------------------x-------------------x----------------






