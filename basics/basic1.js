// console.log("Hello Manya");
// console.log("Welcome");
// age=18  //variable
// console.log(age)
// console.log(98)

// let and const are used to declare variables

// in let once declared value can only be updated
// while in const once defined it can't even be updated

let fname;
console.log(fname) //possible with let

// const value;
// console.log(value)   not possible with const

// { } is a block
// by default every varible is of undefined type until we are giving them a value.

// to get the type: typeof is used

// object is a collection of similar data 
const student={
    fullName : "Rahul",
    age: 20,
    cgpa: 9,
    isPass: true,

};

// to access a individual key:-   student["fullname"] or student.fullName

console.log(student.age)

student["age"]=student["age"]+1
console.log(student.age)

// string addition "abc"+123 ="abc123"

const profile={
    userName: "Shradha",
    posts: 195,
    followers: 500,
    isfollow: true,

}

console.log(typeof profile)
console.log(typeof profile["userName"])

// Basic Operators
// Arithmetic

let a=7;
let b=8;
let c=a+b;
console.log(c,a+b)  // two ways
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
console.log(a**b)
console.log(a)
console.log(a++) //a printed then incremented
console.log(a)
console.log(++a) //a incremented then printed

// In Java
// 5=="5" as pehle string gets converted to a number then compared

// so we use stric equal to i.e. ===   (and strict not equal to i.e !==)
// === compares data type too, while == checks value

let d=5;
let e=8;

let cond1=d<e; //true
let cond2= d===5;; //true

// logical operators && || !
console.log (cond1 && cond2);

// conditional statements

let color;
let mode="dark-mode";
if(mode === "dark-mode"){
    color="black";
}

console.log(color);

// in case sirf single if ka kaam ho then we can omit curly braces

// TERNARY OPERATORS 
// a ? b : c

let age =25;

let result=age >= 18 ? "adult" : "not adult"
console.log(result);
//or
age >= 18 ? console.log("adult") : console.log("not adult");

//PROMPT (like input)
let namee=prompt("hello");
console.log(namee);

// check if a no. divisible by 5
let num=prompt("enter a number:");
if (num%5===0){
    console.log(num,"multiple of 5 ")
}
else{
    console.log("not multiple of 5");
}





