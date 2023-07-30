// nn bb ss u - Primitives Data types in Js:

let nullVar = null;
let numVar = 22;
let boolVar = true;
let bigIntVar = BigInt("434");
let strVar = "Shubham";
let symbolVar = Symbol("I'm a nice symbol");
let undefinedVar = undefined;
console.log(nullVar, numVar, boolVar, bigIntVar, strVar, symbolVar,undefinedVar)
console.log(typeof true)

// Non Primitive Data Type - Objects in Js:

const bioData = {
	name: "Shubham",
	age: 22,
	likesJS: true,
	secret: undefined,
};
console.log(bioData["name"]); 
console.log(bioData.age); 
console.log(bioData["pet"]);