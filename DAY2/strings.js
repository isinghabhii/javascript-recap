const fName = "abhishek"
const lName = "singh"

// console.log(fName + lName + " rajput");

console.log(`Hello my first name is ${fName.toUpperCase()} and last name is ${lName} `);

const gameName = new String('i-singh-abhii')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-11, 4);
console.log(anotherString);

const newStringOne = "   Abhishek   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://abc.com/abc%20xyz"
console.log(url.replace('%20', '-'))

console.log(url.includes('abc'))

console.log(gameName.split('-'));
