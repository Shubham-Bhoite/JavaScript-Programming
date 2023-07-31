// For Loop:
for (let i = 1; i <= 15; i++) {
    console.log(i);
  }


// For-In Loop:
  let person = {
    name: "Shubham",
    age: 21,
    gender: "male"
  };
  
  for (let x in person) {
    console.log(x + ": " + person[x]);
  }


// For-Of Loop:
  let numbers = [1, 2, 3, 4, 5];

  for (let number of numbers) {
    console.log(number);
  }