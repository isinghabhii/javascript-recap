function sayMyName() {
    console.log("A");
    console.log("b");
    console.log("h");
    console.log("i");
}

// sayMyName();

// function addTwoNums(num1 , num2){
//     console.log(num1 + num2); 
// }

function addTwoNums(num1 , num2){
    // let result = num1 + num2
    // return result

    return num1 + num2
}

const result = addTwoNums(3, 4)

// console.log("Result: ", result);

function loginUserMsg(username = "Asr") {
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMsg("Abhishek"))
// console.log(loginUserMsg())

function calculateCartPrice(val1, val2, ...num1){   // ... => rest/spread operator
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "Abhishek",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "Asr",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
