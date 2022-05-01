//Chapter 2 Notes

// this is a short comment; one-line comment

/*This is a longer comment 
anything here will be ignored 
This is a useful place to put notes;
multi-line comments*/

const message = 'Hello World!'
alert(message)

// OR

const messageAlt = 'Alternative: Hello World!';alert(messageAlt);

// Best-practice way to write it:

const messageAlt1 = 'Best Pactice: Hello World!';
alert(messageAlt1);

{
    //this is a block containing 2 statements
    const messageAlt2 = 'Inside a Block: Hello!';
    alert(messageAlt2);
}
//a block doesn't need to be terminated with a semicolon

/* 

Reserved Words in JS:
abstract, await, boolean, break, byte, case, catch, char, class, const, continue,
debugger, default, delete, do, double, else, enum, export, extends, false, final,
finally, float, for, function, goto, if, implements, import, in instanceof, int, 
interface, let, long, native, new, null, package, private, protected, public,
return, short, static, super, switch, synchronized, this, throw, throws, transient,
true, try, typeof, var, volatile, void, while, with, yield   

Important, but not reserved words:
undefined, NaN, Infinity

*/

/* Primitive Data Types:
String, Symbol, Number, Boolean, Undefined, Null
*/

//Special Operator: typeof

typeof 'hello'
typeof 10
typeof true
typeof { ninja: 'turtle' }
typeof [ 1, 2, 3 ]

console.log(typeof /*insert data here to test*/);

//Variables

//Declares a variable:

const name = 'Alexa'; //This won't be assigned to another string

let score = 0; //The value may change during the program

//Assigning multiple variables at once

let x = 3, y = 4, z = 5;

/*using let allows you to update values at a later time
using const will result in the following error:
TypeError: Assignment to constant variable.
*ALTHOUGH it is not immutable which means it can change such as:
*/

const name = { value: 'Alexa' }; // an object
name.value = 'Siri'; // change the value

// const has now changed from 'Alexa' to 'Siri'

//this will not work:

const name = { value: 'Alexa' }; //declare object
name = { value: 'Siri' }; //will not work
//result: << TypeError: Assignment to constant variable. 

/*The reason this is useful is because it allows stability in the program
by creating predictability */