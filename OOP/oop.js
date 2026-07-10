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
        // console.log(this);
    }

}
console.log("Step2");
console.log(user.username)
console.log("Step3");
// console.log(user.getUserDetail) // ❌
console.log(user.getUserDetail()) // ✅ function h toh func ki tarah with () call hoga na !!
