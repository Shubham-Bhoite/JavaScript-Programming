// While Loop:
let input = prompt("Enter a number");
input = Number(input);
let i = 0;

while (i < input) {
    console.log(i);  // print the current value of i
    i++;  // increment i by 1
}


// Do-While Loop:
let n= prompt("Enter the value of n")
n=Number.parseInt(n)

let a=0;
do{
    console.log(a)
    a++;
}while (a<n)