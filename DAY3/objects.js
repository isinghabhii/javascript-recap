// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Abhishek",
    "full name" : "abhishek singh",
    [mySym]: "myKey1",
    age: 22,
    email: "r@gmail.com",
    location: "Delhi",
    isLoggedIn : false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email =  "rit@gmail.com"
// Object.freeze(JsUser)
JsUser.email =  "xyz@gmail.com"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS user");
} 

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
} 


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



