// Primitive

// => 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.2

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);  // false

// const bigNumber = 34567890234782903434n


// Reference (Non Primitive)

// Array, objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "Abhi",
    age: "22",
}

const myFunction = function(){
    console.log("Hello world");;
}

console.log(typeof outsideTemp); 
console.log(typeof myFunction); 
console.log(typeof id); 


// https://262.ecma-international.org/5.1/#sec-11.4.3


// ++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myName = "Abhishek"

let anotherName = "Abhi"
anotherName = "Ashu"

console.log(anotherName);
console.log(myName);

let user1 = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let user2 = user1

user2.email = "ab@gmail.com"

console.log(user1.email);
console.log(user2.email);

