// Write your code here!

document.querySelector('#main').remove();

let headee = document.createElement('div');

// let newHeader = document.createElement('h1');

// document.body.appendChild(newHeader);

document.body.appendChild(headee);

headee.innerHTML = "<h1 id='victory'>YOUR-NAME is the champion</h1>";

let newHeader = document.querySelector("h1#victory");

// newHeader.idName = "victory";

// newHeader.innerHTML = "YOUR-NAME is the champion";