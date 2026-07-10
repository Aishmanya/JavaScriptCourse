// ~~~~~~~~~~~~~~~~~~~~~~~~ Javascript is a prototype-based language ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// means that objects inherit properties and methods directly from other objects, instead of inheriting from classes (as in Java or C++).

// Classes are basically an object .
// where an obj has some methods and properties


// A Basic Example of Class :
console.log("Step1");

const user = {
    //properties (maybe)
    username: "manya",
    loginCount: 8,
    signedIn: true,

    //method
    getUserDetail: function(){
        console.log("got data from database");

        // Now, the thing is ki username multiple jagah use ho skta toh console ko kaise pta chalega ki konse wale ki baat ho rhi 
        // so we use 'this' to tell ki 'current context' ki baat ho rhi...
        console.log(`Username✅: ${this.username}`);
        console.log(this);
    }

}
console.log("Step2");
console.log(user.username)
console.log("Step3");
// console.log(user.getUserDetail) // ❌
console.log(user.getUserDetail()) // ✅ function h toh func ki tarah with () call hoga na !!





// =================== CONSTRUCTOR =====================
// const promise1= new Promise();
// const date = new Date();

// this 'new' keyword is an operator that creates a new object instance(empty obj) using a constructor or class.
// Here, Date is a constructor.
// new Date() creates a new Date object representing the current date and time.
// (obj literal basically means literally an object/pure obj/just a obj)

function User(username,loginCount,isLoggedIn){
    // username = username; ab isme pta kaise chale ki kon username konsa/kya h toh we use this with var to say ye current variable
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    return this // u can comment then also output aaega
}

const userOne = User("manya",10,true) //prints it + other properties of this like fetch global setTimeout etc.

const userTwo = User("ayush",20,true)
// console.log(userOne)
// console.log(userTwo)

// Ab above method se har baar values overwrite ho jaegi so we use new to take ur own copy of instance and do changes

const userTwo = new User("manya",10,true)
const userTwo = new User("ayush",20,true)

console.log(userOne)
console.log(userTwo)




