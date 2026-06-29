// CONVERSIONS

let score="10"

console.log(typeof score)

const langs=["python","JS","C","C++"]

const values= langs.forEach( (item)=> {
    console.log(item)
    return item
})


// use strict; treat all js code as new version standards

// type of NULL is object whereas undefined ka undefined he hota

// To explicitly convert a datatype in JS you write datatype in 1st caps eg below
// let scoree='45'
// console.log(score)
// let scoreinnum= Number(scoree)
// console.log(scoreinnum);

// These all can be converted in num even when incompatible but explicitly doing type of will give different datatype
/*
'33' =>33
'33abc'=>NaN
 true=>1
*/

// Converting to boolean
/* 
1=true
''=false
'manya'=true
*/

// OPERATIONS

/*
console.log('1'+2)   12
console.log(1+'2')   12
console.log('1'+2+2)   122
console.log(1+2+'2')   32

*/

// COMPARISONS

/*
console.log('02'>1); //automatically converted to no. and compared
console.log(null>0)   //false
console.log(null<0) //false
console.log(null==0) //false
console.log(null>=0) //true
*/

// so we use ===



// 2 types of datatypes
/*
Primitive and Non Primitive (or Reference type)

Primitive: they are stored by value and call by value mtlb jo v changes
hote wo iske copy me hote not in original

Includes: String, Number, Boolean, Null, Defined, Symbol(to make something unique), BigInt

Non Primitive: they are stored by reference via a pointer
Array, Objects, Functions
*/

/*
JavaScript is a dynamically typed language.This means that you do not need to 
explicitly declare the data type of a variable when you create it. Instead, the data type 
is automatically determined by the browser 
*/

// Symbol:-  just to define anything unique
const id=Symbol('123')
const id2=Symbol('123')
console.log(id===id2);  //false
// even though both contain same value still they are unique

/*
TYPE OF 
Null is object
undef is undef
bigint is undef
Date is object
object(native and doesn't implement call ) is object
object(native or host and does implement call ) is function

basicallly sare non primitive ka type mostly object he hota
*/

// =================================================================

// 2 TYPES OF MEMORIES
/*
Stack( for Primitive)     
Heap (for Non Primitive) 


via stack say v1='hi' (yahan copy milta)
v2=v1
v2='hiiiiii'
karne se v1 me automatically change ni ho jaega as usko copy milta 

via heap (reference milta h idhar)
while say 2 obj bnae (since obj non primitive h)
and usme aisehe kuch kiye then dono vars me change hoga as 
wahan copy nhi di jaati
*/

let str="hello"
console.log(typeof str);

// USING MATH LIBRARY
const max=20
const min=10
// to get a random no. b/w our max min range :
console.log(Math.floor(Math.random() * (max-min +1))+min);

// DATE OBJECT CREATION
let mydate= new Date()  //ye ek obj type ka date create kar diya
console.log(mydate);

let myCreatedDate = new Date(2026,0,26)
console.log(myCreatedDate.toDateString()); //ye method laga diye obj me
// It gives 26th Jan 2026

let myCreatedDate2 = new Date(2026,0,26,5,3) //adds 5 baj ke 3 min

// for like getting fastest time or similar we'll need this

let mytimestamp=Date.now()
console.log(mytimestamp);
console.log(myCreatedDate.getTime());

//gpt

// ===== To convert time from ms to sec
console.log(Math.floor(Date.now()/1000));

//one spl method & its property
// toLocaleString in which we pass object

// let newdate= new Date()
// console.log(newdate.getMonth());

// newdate.toLocaleString('default',{
//     weekday: "long",
//     timeZone: ''
// })


// SLICE AND SPLICE
/*
Slice does not includes last range element say arr.slice(1,3) toh 1 se 2 
Splice includes last range element say arr.splice(1,3) toh 1 se 3 
BUT
Slice doesn't modify original array while
Splice modify original array say
arr=[0,1,2,3,4,5,6]
const arr2=arr.splice(1,3)
then
arr=[0,4,5,6]
arr2=[1,2,3]
*/

/*
say u have 2 arrays now if u do
arr1.push(arr2)
this will add arr2 as a next element in arr1 not the contents
like arr1=[1,2,3,[4,5,6]]

so we use CONCAT
let arr3= arr1.concat(arr2)
so arr3=[1,2,3,4,5,6]
*/

// SPREAD method
/**
so we have an easy method as an alternative for concat

const arr4=[...arr1, ...arr2]

sare individually break hoke add ho gye like glass break example
*/

//FLAT Method
/*
arr ke andar arr ke andar arr jaisa kuch rahe toh flat use karne se 
sab de-array hoke ek main array me ban jate
*/

// console.log(Array.from("Manya")) 
// from se kisi v chij ko array bna denge eg above and below

console.log('Array conversion from object');
console.log(Array.from({name:"Manya"})) //Array conversion from object
// It always gives ~~~~~EMPTY ARRAY ~~~~~

// literals ke through singleton nhi banega constructors ke through banega

// by default object keys ko system string he maanta

// ~~~~~~~~~~~~~~~~~~OBJECTS~~~~~~~~~~~~~~~

const mySym = Symbol("key1")

const myobj={
    name:"Manya",
    age:21,
    location:"Gumla",
    [mySym]:"anyValue" // ~~~~~~~IMPORTANT~~~~~~~~
    // here this way I am using a symbol as object key (also I used var name of symbol and not the value key1)
}

// To access object element there are 2 ways
console.log(myobj.name);
// console.log(myobj[name]); wrong
console.log(myobj["name"]);
console.log(myobj[mySym]);  //no "" here

// To change an object value
myobj.age=20

// Adding a function key in obj
myobj.greeting = function(){
    console.log(`Hello User ${this.name}`);
}
// this way u are saying ki mereko yahi object (this) ka name display karo


// In case we don't want any particular 'obj' to change we use freeze
Object.freeze(myobj)

// Two ways to declare obj 1.through conttuctor 2.directly or normally
// 1.
const FB_User = new Object()   //this is Singleton obj (as created throiugh constructor)
// 2.
const FB_User2 ={}   //this is Non-Singleton obj

// we can have obj ke andar obj ke andar obj i.e nested obj
// and we can access it through obj.element. nested_obj.element.    nested_nested_obj.element


// COMBINING OBJECTS
/*
say we have 2 objs obj1 & obj2
so 
obj3=Object.assign({},obj1,obj2)
*/

// or using spread operator
// const obj3={...obj1, ...obj2}

console.log(Object.keys(myobj));
// It returns an array of keys 

console.log(Object.entries(myobj));
// It gives arr of arr of key value pairs

// ~~~~~~ DESTRUCTURING OF OBJECT

const Course={
    Cname="Javascript",
    CourseInstructor="Manya"
}
//to access a key using general method
console.log(Course.CourseInstructor);

// to access a key by destructuring

const{CourseInstructor} = Course
console.log(CourseInstructor)
// OR say short form karna

const{CourseInstructor:Inst} = Course
console.log(Inst)

// json= Java Script Object Notation
// json could be arrays object (mostly objects )








