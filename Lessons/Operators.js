// 1) ==> Arithmetic Operators <== //
let a = 5;
let b = 3;

// Addition
let c = a + b; 
console.log(c)
// Subtraction
let d = a - b; 
console.log(d)
// Multiplication
let e = a * b; 
console.log(e)
// Division
let f = a / b; 
console.log(f)
// Modulus
let g = a % b; 
console.log(g)
// Exponentiation
let h = a ** b; 
console.log(h)


let s = 5;
// Post-increment: returns the value of a, then increments it
console.log(s++); 
console.log(s);   

// Pre-increment: increments the value of a, then returns it
console.log(++s); 

// Post-decrement: returns the value of a, then decrements it
console.log(s--); 
console.log(s);   

// Pre-decrement: decrements the value of a, then returns it
console.log(--s); 


// 2) ==> Assignment Operators <== //
let x = 5;

// Addition assignment
x += 3; // equivalent to x = x + 3
console.log(x);  

// Subtraction assignment
x -= 2; // equivalent to x = x - 2
console.log(x);  

// Multiplication assignment
x *= 4; // equivalent to x = x * 4
console.log(x);  

// Division assignment
x /= 3; // equivalent to x = x / 3
console.log(x);  

// Modulus assignment
x %= 5; // equivalent to x = x % 5
console.log(x);  



// 3) ==> Comparison Operators <== //
console.log(5 > 2); 
console.log(5 == "5"); 
console.log(5 === "5"); 
console.log(5 != "6"); 
console.log(5 !== "5"); 



// 4) ==> Logical Operators <== //
//&&:
const m = 10;
const n = 20;
const o = 30;
console.log(m < n && n < o); 
console.log(m < n && n > o); 

// ||:
const p = 5;
const r = 10;
console.log(p > 3 || r < 5); 
console.log(p < 3 || r < 5); 

// !:
const z = 10;
console.log(!(z > 5)); 
console.log(!(z < 5)); 