/*console.log() ==>
The console.log() method is used to print the output to the console. It is usually used for debugging purposes. It can be used to print the output of a variable, an array, an object, a string, a number, etc.*/
console.log("Hello World"); // Prints "Hello World" to the console


/*console.error() ==>
The console.error() method is used to print the error message to the console. */
console.error("This is an error"); // Prints "This is an error" to the console as an error


/*console.warn() ==>
The console.warn() method is used to print the warning message to the console.*/
console.warn("This is a warning"); // Prints "This is a warning" to the console as a warning


/*console.clear() ==>
The console.clear() method is used to clear the console. */
console.clear(); // Clears the console


/*console.assert() ==>
The console.assert() method is used to assert a condition. If the condition is true, nothing happens. If the condition is false, the error message is printed to the console.*/
let x = 5;
console.assert(x == 5, "Error: x is not equal to 5"); // Output: no output
console.assert(x == 6, "Error: x is not equal to 6"); // Output: Assertion failed: Error: x is not equal to 6


/*console.table() ==>
The console.table() method is used to print the output in the form of a table. */
let students = [
    {name: "priti", age: 20, city: "Rahuri"},
    {name: "sakshi", age: 21, city: "Shrigonda"},
    {name: "vaishanvi", age: 22, city: "Jamkhed"}
];
console.table(students);


/*console.time() and console.timeEnd() ==>
The console.time() method is used to start the timer. The console.timeEnd() method is used to end the timer. The time taken by the code between the console.time() and console.timeEnd() methods is printed to the console.*/
console.time("Time taken");
let w = 5;
let y = 6;
let z = x + y;
console.timeEnd("Time taken"); // time taken by the code between console.time() and console.timeEnd() is printed to the console

