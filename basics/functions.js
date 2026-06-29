//structure like normal functions
//can return only one value at once (multiple in the form of lists but at last its one value only)

// Structure of a Function
function sum(x,y){ 
    s=x+y;
    return s;
}

console.log(sum(8,9));

// func parameters are like local variables and has block space of function(means function k block ke bahar gayab).

// Arrow function(=>)   - compact way of writing functions
/*
const funcName=(para1,para2)=>{   }
*/

// Arrow function of a sum function
const arrowSum=(a,b)=>{
    console.log(a+b);
}

arrowSum(9,5)

// arrow function for multiplication
const arrowMul=(a,b)=>{   //here cosnt is used just to make the ans a constant we can use let also like let arrowMul
    return(a*b);
}

a=arrowMul(6,5);
console.log(a)

// arrow functions can be without arguments too!

// func to count the no. of vowels in a string
function vowel_count(str){
    let count=0;
    for (const char of str){
        if (char=="a" || char=="e" || char=="i" || char=="o" || char=="u" ){
            count++;
        }
    }
    console.log(count);
}

vowel_count("Manya");

const arrowVC=(str)=>{
    //same code
}

// ~~~~~~~~~~ forEach Loop in Arrays ~~~~~~~~~~
// -It is a method

//**** A func becomes method when we bind a with a particular datatype or structure *****

// ***** funcs can be passed as normal parameters or variables in JS

// callback is a func which is passed as an argument to another function.

let arr = [1,2,3,4,5];

arr.forEach(function printVal(val) { //here val takes each value of arr and sends/applies it to our function
    console.log(val);
}
);

//in arrow func form

arr.forEach((val)=>{
    console.log(val)
});

// forEach has parameters (value, idx, arr)
        //eg
// arr.forEach((val,idx,arr)=>{
//     console.log(val,idx,arr)
// });

//  ***** Higher Order Function/Method HOF *****
// those funcs that has another func as parameter or return func as output. eg. forEach

// Q.for no. array print sqs of each no. using forEach

let arr1=[2,3,4];

arr1.forEach((val)=>{
    console.log("squares are:");
    console.log(val**2);
});

// M-2

let calcSquare=(val)=>{
    console.log("squares are:");
    console.log(val**2);
};

arr1.forEach(calcSquare);

// SOME OTHER IMP ARRAY METHODS

// 1. Map (similar to forEach but it creates a new array)

let nums=[8,9,10];

nums.map((val)=>{
    console.log(val);
});

//or it can be used to create a new array

let newArr=nums.map((val)=>{
    return val;
});

console.log(newArr);

// 2. filter

let arr2=[12,13,14];

let evenArr=arr2.filter((val)=>{
    return val%2===0;
});

console.log(evenArr);

// 3. reduce (performs some operation and reduces the array to a single value which is returned)

let arr3=[7,8,9];

const output=arr3.reduce((result,current)=>{
    return result+current;  //for finding max no. return prev>curr ? prev : curr (here result is prev)
});

console.log(output);

// initially result is first element and curr is 2nd 

m



