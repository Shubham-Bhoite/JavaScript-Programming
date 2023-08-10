let promise = new Promise(function(resolve, reject){
    resolve(44)
});

console.log("Hey, how are you?")
setTimeout(function() {
        console.log("Hello, i'm fine!")
}, 3000)

console.log("My name is " + "Official shubhya")
console.log(promise)
