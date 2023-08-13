// Destructuring ==>
let arr = [3, 5, 8, 9, 12, 14]
let [a, b, c, d, ...rest] = arr
console.log(a, b, c, d, rest)

let [a, , b, ...rest] = arr
console.log(a, b, rest)

let { a, b } = { a: 1, b: 5 }
console.log(a, b)



// Spread Operator
let arr1 = [3, 5, 8]
let obj1 = { ...arr1 }
console.log(obj1)

function sum(v1, v2, v3) {
  return v1 + v2 + v3
}

console.log(sum(...arr1))

let obj2 = {
  name: "shubham",
  company: "Amazon",
  address: "pune"
}

console.log({ ...obj2, name: "Arjun", company: "Flipcart" })
// console.log({ name: "Prashant", company: "Jio", ...obj2 }) // This will print the obj2 object without changing any values
