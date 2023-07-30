// 1) Var: The var keyword is used to declare variables in JavaScript
var name = "Shubham";
console.log(name); 

//we can also reassign the value of a variable declared using the var keyword==>
var name = "Prashant";
name = "Arjun";
console.log(name); 


// 2) let :  This means that if a variable is declared with let inside a block, it is only accessible within that block.
let a = 21

let b = " Shubham";
{
let b = "Hello";
console.log(b); //output: Hello
}
console.log(b); //output: Shubham


// 3) Const: The value of a variable declared with const cannot be changed.
const name = " Varad";
name = "Rahul";
console.log(name); //output: Uncaught TypeError: Assignment to constant variable.