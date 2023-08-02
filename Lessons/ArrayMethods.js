//toString() 
let fruits = ["Apple", "Orange", "Banana",5,6,7,8];
console.log(fruits.toString()); 
console.log(typeof fruits.toString()); 

// join()
let num=[1,2,3,4,5]
console.log(num.join("-"));

// pop()
let marks=[90,95,92,80];
console.log(marks.pop());
console.log(marks);

// push()
let fruit = ["Apple", "Orange", "Banana"];
console.log(fruit.push("Pineapple")); // 4
console.log(fruit); 

//shift()
let id=[232,4545,646,6768,6767];
console.log(id.shift());
console.log(id);

// unshift()
let colors=["red","yellow","white","black"];
console.log(colors.unshift("blue"));
console.log(colors);

// delete()
let names=["shubham","arjun","prashant","vaibhav"];
delete names[1];
console.log(names);

// concat()
let fresh = ["Apple", "Orange", "Banana"];
let vegetables = ["Potato", "Tomato", "Onion"];
let food = fresh.concat(vegetables);
console.log(food); 

//sort()
let numbers=[40,299,78,45,19,2,50,44,76];
numbers.sort();
console.log(numbers);

// reverse()
let marks_10=[20,50,60,90,100];
marks_10.reverse();
console.log(marks_10);

// slice()
let friends = ["bhai", "bhau", "dada"];
let copy = friends.slice(0, 2);
console.log(copy); 

// splice()
let trees = ["neem", "babul", "hibiscus"];
trees.splice(0, 1);
console.log(trees); // ["Orange", "Banana"]