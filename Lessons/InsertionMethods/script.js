// Using innerHTML
let a = document.getElementsByTagName('div')[0];
a.innerHTML = '<h1>Hello World</h1>';

// Using createElement and appendChild
let div = document.createElement('div');
div.innerHTML = '<h1>Hello World (append)</h1>';
a.appendChild(div);

// Using prepend
let div = document.createElement('div');
div.innerHTML = '<h1>Hello World (prepend)</h1>';
a.prepend(div);

// Using before
let div = document.createElement('div');
div.innerHTML = '<h1>Hello World (before)</h1>';
a.before(div);

// Using after
let div = document.createElement('div');
div.innerHTML = '<h1>Hello World (aftwe)</h1>';
a.after(div);

// Using replaceWith
let div = document.createElement('div');
div.innerHTML = '<h1>Hello World (replaced)</h1>';
a.replaceWith(div);