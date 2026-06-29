// Arrays- Used to store same type of information in linear form. Like a linear long box of objects.
// Properties and Method difference :-  Property just gives some values while Method do some function.

// Properties of Array:- 1.length

let marks=[98,99,90,88,79];
console.log(marks.length);

// Arrays can store any type of similar data
//  ~~~~~~~~ Type of Array itself is 'Object' (which has key values pair in form of index:value ~~~~~~~~~

// Operations in Array
console.log(marks[0]);
marks[0]=92;
console.log(marks);

//  ~~~~~~~~~ Arrays are mutables in JS ~~~~~~~~

// for (let i=0;i<=marks.length;i++){ 
//     console.log(marks[i]);
// }

for (let m of marks){ 
   console.log(m);
}

/* Q. array with  price of 5 items .Now all items have an offer of 10% off on them.
Change the array to store final price after offer. */

let initial_price=[250,645,300,900,50];

for (let p=0;p< initial_price.length;p++){ 
   initial_price[p]=initial_price[p]-initial_price[p]*0.1;
}

console.log(`Final prices after offer are=`);

for (let op of initial_price){ 
   console.log(op);
}

/* we can't use for of loop here as for of meh we get values directly and we are trying to 
change that value directly which is wrong or error i.e. we are doing 250=250=250*0.1 which is wrong!
*/

// Methods in Arrays:- 1.Push POP toString(converts array to string and creates a new string without changing the array originally.
// number honge agar array me then it will be converted into a single string containing all number.
// Push Pop return the new updated length

/*
concat():-joins multiple arrays & returns itself
unshift():-add to start   [like push]
shift()():-delete from start & return    [similar to pop]
*/

let fruits=['apple','mango'];
let veggies =['tomato','ladyfinger']
let eatables=fruits.concat(veggies);
console.log(eatables);

fruits.unshift("cherry")
console.log(fruits);

val=veggies.shift();
console.log(val);


/* slice(start ,end) same as studied till now. [It doesn't change the original array].
splice(start,delCount,newEl(1...)):- [change original array like add remove replace]

here start means the index from where u want to apply the changes
delCount means the no. of elements u want to delete from that start (say we write 3 that means aage se 3 elements delete ho jaenge)
newEl means what are the new elements u want to add from that start in the form (6,3,4)
*/

let arr2=[2,3,4,7,9];
arr2.splice(2,2,100,200)  //[2,3,100,200,9]
console.log(arr2);
//the above line means ater 2 index 2 elements will be deleted and 2 new elements will be added.

arr2.splice(2,0,101) //It means I want to just add an element at 2nd index therefore we have specified del 0 element just add.

arr2.splice(3,1)  //just delete  1 element(at 3).

arr2.splice(4); // ~~ It acts as slice so will delete elements from 4 ~~













