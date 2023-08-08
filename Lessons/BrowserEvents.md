# Introduction to Browser Events: 
-  An event is a signal that something has happened in a web page, such as a user clicking a button or submitting a form.

## Some important DOM events include:

1) Mouse events: click (when a mouse button is clicked), contextmenu (when the right mouse button is clicked), mouseover/mouseout (when the mouse enters or leaves an element), mousedown/mouseup (when a mouse button is pressed or released), mousemove (when the mouse moves).

2) Keyboard events: keydown and keyup.

3) Form element events: submit, focus, blur.

4) Document event: DOMContentLoaded.


# Handling Browser Events:
1) addEventListener(): in script.js we can add event listeners to the button using the addEventListener() method. 

2) removeEventListener(): If we want to remove an event listener, we can use the removeEventListener() method.


## event object:
When an event occurs, the browser creates an event object and passes it as an argument to the event handler.

    const x = function(e){
	console.log(e);
	alert("Hello World!");
    };