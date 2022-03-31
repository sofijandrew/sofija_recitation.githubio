let myVariable;
myVariable = 'Sofija';
/* one way to define a variable, define it and give it a value*/

let myVariable2 = 'Peter';
/* (multi line comment) you can do it all in one line too */
//(single line comment) you can also comment like this in JS

//Variables//
let myVariable = 'bob'; //strings

let myVariable = 3; //numbers

let myBoolean = true; //booleans
let myBoolean = false;

let myArray = [1, 'bob', true]; //arrays

let myObject = document.querySelector('p'):
//Objects, but all the above are objects too

//OPERATORS
6 + 9; //addition
'hello' + 'world'; //string addition --> 'helloworld'

//subtraction--> -
//multiplication --> *
//division--> /

//Assignment--> =

//equality
myNumber === 4; // this will result in false

//not, does-not equal
!(myNumber === 3); //!(true) = false
myVariable !==3; //false

// CONDITIONALS

let iceCream = 'chocolate';
if(iceCream ==='chocolate'){
  alert('yay, i love chocolate ice cream!');
} else{
  alert('aww, but chocolate is my favorite...');
}

//EVENT LISTENERS
document.querySelector('html').addEventListener('click', function() {
  alert('Ouch stop poking me!');
}
