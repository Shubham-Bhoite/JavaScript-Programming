// Accessing the first child node of the body
let firstChild = document.body.firstChild;
console.log(firstChild); // #text

// Accessing the first element child node of the body
let firstElementChild = document.body.firstElementChild;
console.log(firstElementChild); // <nav>

// Accessing the last element child node of the body
let lastElementChild = document.body.lastElementChild;
console.log(lastElementChild); // <script>

const changeBgRed= () => {
    document.body.firstElementChild.style.background = "red";
}