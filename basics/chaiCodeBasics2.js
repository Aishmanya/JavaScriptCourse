console.log('hi');
// FUNCTIONS

/*
suppose we declare a function and store its result in a variable like
const result= mysum(4,3)
toh
printing console.log(result) will give UNDEFINED
as hamne function me kuch return he nhi kara h
*/

/** 
if my function has a parameter and we don't pass anything but do return and print then in that case
output me undefined print hota (and not null) 
*/

// in ifs empty string and undefined are treated as False

// to define a default value as parameter
function loginInfo(username='Choco'){
    if(!username){ //agar username not provided (tgough yahan jaega nhi kyuki we define a default)
        console.log("error");
        return
    }
    return `${username} just logged in`
}
console.log(loginInfo("manya"))

//when u don't knnow how many no. of para may come like shopping cart we use REST operator

function calcCartPrice(...num){
    return num
    // it returns packet pieces as an whole array
}

console.log(calcCartPrice(200,400,500));

// 2 ways of declaring func and their calling ways

console.log(addone(5))                     //here calling before function declaration will work
function addone(num){
    return num+1
}

// addtwo(5)                     //here calling before function declaration will NOT work
const addtwo=function (num) {
    return num+2
}

console.log(addtwo(8));         //will work

// THIS 
/*
this gives the current context (jab kuch obj func etc not provided then global context)
for node environment(this vsCode) we get global obj this as an {} empty obj
whereas for browser env we get WINDOW as this 
*/

const user={
    username:"manya",
    price:999,
    welcomeMsg: function(){
        console.log(`${this.username} , welcome` );
        
    }
}

user.welcomeMsg() //Manya welcome
user.username="Ayush"
user.welcomeMsg() //Ayush welcome

// u can't use this under only functions as wo o/p undefined dega upar we used this under obj

// arrow func general structure : (paras) => {}

// structure for returning an obj usign arrow func

const add2= (num1,num2) => ({username: "manya"})
// see yahan outside () kyuki one line or inline declaration h [ ishliye () inplace of {}  ] then inside obj {} 

// ++++++++++++ Immediately Invoked Function Expressions (IIFE) +++++++++++++++++

// to like immediately run a function
/*bcoz sometimes global scope ke pollution se problem hoti toh to deal with that problem we use IIFE */
/** 
Syntax:-
whole function ko () me daldo  [as () creates a block] and ek final () to run anything u know
*/

(function hello(){
    // named IIFE ++++++++++++
    console.log("DB Connected");
})(); 
//; is necessary in IIFE

// IIFE as arrow function with a passed para 
( (para)=>{
    // unnamed IIFE
    console.log(`DB Connected successfully ${para}`); 
})("superman");

// FALSE VALUES
// false, 0, -0, BigInt On, "" , null, undefined, NaN

// TRUTH Values
// "0", 'false' , " " (since these are strings), [] , {} , function(){}

// To check if returned array is emty
if (myarr.length === 0){
    console.log("Array is empty");
}

// To check if returned object is empty
// toh we have idea here that hmlog obj ke keys ko access kare as that is ultimately an array then normally empty array ka condn se check karle

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Obj is empty");
}

/**
++++++++++ Some general knowledge
on console

false == 0   //true
false == ''  //true
0 == ''      //true

*/



// ~~~~~~~~ Nullish Coalescing Operator (??) : null undefined  ~~~~~~~~~~~~~~

/* null or undefined problem may cause problems throughout the code so we use this operator.
It The Nullish Coalescing Operator (??) is a logical operator that returns its right-hand side 
operand when its left-hand side operand is null or undefined. Otherwise, it returns its left-hand side operand.

*/
let val;
val = 5 ?? 10 //5
val = null ?? 10 //10
val = undefined ?? 10 //10
val = null ?? 10 ?? 20 //10


// Ternary operator
// condition ? true : false
const Price = 100;
Price <=90 ? console.log(" less than 90") : console.log("greater");

