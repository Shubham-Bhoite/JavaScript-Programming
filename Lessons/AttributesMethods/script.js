/*--getAttribute() method --*/
let first = document.getElementById("first");
let a = first.getAttribute("class");
console.log(a); // it will print "hey" 


/*--hasAttribute() method --*/
console.log(first.hasAttribute("class")); // true
console.log(first.hasAttribute("style")); // false


/*setAttribute() method */
first.setAttribute("hidden", "true"); // reload the page to see the changes, it will hide the div


/*removeAttribute() method*/
first.removeAttribute("hidden"); // reload the page to see the changes, it will show the div because we removed the hidden attribute


/*custom attributes*/
<div id="first" class="hey" data-game="mario" data-player="Harry">
    Hey, I am the first div
</div>


/*dataset property*/
console.log(first.dataset);


// We can also access a specific custom attribute using its name.
console.log(first.dataset.game);
