// Functions:Functions are a way to group a block of code together and give it a name, which can then be called/invoked at any point in your code. 

/* Syntax: function functionName(parameters) {
  // function code
} */
  
  function onePlusAvg(x, y) {
    return 1 + (x + y) / 2
  }
  let a = 1;
  let b = 2;
  let c = 3;
  console.log("One plus Average of a and b is ", onePlusAvg(a, b))
  console.log("One plus Average of b and c is ", onePlusAvg(b, c))
  console.log("One plus Average of a and c is ", onePlusAvg(a, c))
  


//Arrow Functions: Arrow functions are a shorthand way of writing functions in JavaScript.
let sayHello = () => {
    console.log("Hello, world!");
  }
  
  sayHello(); // calling/invoking the function
