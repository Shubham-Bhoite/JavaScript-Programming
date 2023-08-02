// classical for loop:
let subjects = ["Marathi", "English", "Science", "Geography"];
for (let i = 0; i < subjects.length; i++) {
    console.log(subjects[i]);
}

//forEach() ==>The above code can be rewritten using the forEach() method.
let subject = ["Marathi", "English", "Science", "Geography"];
subject.forEach((i) => {
    console.log(i);
});

// Array.from() ==>The from() method creates a new array from an array-like object
let str = "SHUBHAM";
let arr = Array.from(str);
console.log(arr); 

// for...of ==>he for...of statement creates a loop iterating over iterable objects.
let fruits = ["Apple", "Orange", "Banana"];
for (let i of fruits) {
    console.log(i);
}

// for...in ==>The for...in statement creates a loop iterating over enumerable properties of an object.
let colors = ["Red", "Black", "Violet","Yellow"];
for (let i in colors) {
    console.log(colors[i]);
}



//map():
let numbers = [1, 2, 3, 4, 5];
let stringNumbers = numbers.map((i) => {
    return i.toString();
});
console.log(stringNumbers); 

// filter():
let num = [1, 2, 3, 4, 5];
let filteredNumbers = num.filter((i) => {
    return i > 3;
});
console.log(filteredNumbers); 

// reduce():
let marks= [1, 2, 3, 4, 5];
let sum = marks.reduce((first, second) => {
    return first + second;
});
console.log(sum); 