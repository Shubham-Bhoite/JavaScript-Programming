// // Syncronous programming ==>
 let a = prompt("What is your name?");
 let b = prompt("What is your age?");
 let c = prompt("What is your favorite color?");
 console.log(a + " is " + b + " years old and has " + c + " favorite color.");

// Asynchronous programming ==>
 console.log("Start")
 setTimeout(function() {
   console.log("Hey, bro how are you!");
 }, 3000)
 console.log("End")


 // Callbacks ==>
function loadScript(src, callback) {
  var script = document.createElement("script");
  script.src = src;
  script.onload = function() {
    console.log("Loaded script with SRC: " + src)
    callback(null, src);
  }
  script.onerror = function() {
    console.log("Error loading script with SRC: " + src);
    callback(new Error("Src got some error"))
  }
  document.body.appendChild(script);
}

function hello(error, src) {
  if (error) {
    console.log(error)
    return
  }
  alert('Hello World!' + src);
}