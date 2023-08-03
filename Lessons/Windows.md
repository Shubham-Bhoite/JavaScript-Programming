# DOM, BOM, and Window Object 

## 1) Window Object:
- The Window Object is a global object in the browser that represents the browser window.
- You can access the Window object by typing window in the browser console.

      console.log(window); // prints the Window object


## 2) Document Object Model (DOM):
- It creates a tree-like representation of the document, which allows developers to interact with it and modify its content and structure.

      console.log(document); // prints the DOM object


## 3) Browser Object Model (BOM):
- It provides access to browser-specific objects such as the browser history, the location bar, and the browser window.
- The Window object is a part of the BOM and provides access to many of the BOM objects and methods.

      console.log(window.location.href); // prints the current URL of the page