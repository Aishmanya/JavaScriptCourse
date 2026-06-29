// // FOR LOOP// 
// for (let i=1;i<=5;i++){
//     console.log("hello")
// }

// // calculate sum of first n numbers
// let num=prompt("enter number!")
// console.log(num);
// let sum=0;
// for (let i=1;i<=num;i++){
//     sum+=i;
// }
// console.log("sum is:",sum);


// // let var output difference
// for (var j=1;j<=5;j++){
//     console.log("hello")
// }
// // console.log(i); // ERROR if let j

// console.log(j)

//do - while loop->atleast 1 baar toh chalega he

let ki=20;
do {
    console.log("hello manya")
    ki++;

}
while(ki<=10);
// ; is must for while loop

//~~ for-of loop ~~-> It is used for iterating for strings and arrays
//Syntax:- for(let val of string/array)

// yahan initialization updation and stopping sab khud he ho jata ya not needed

let str="Aishmanya";
let size=0; //we can count the chars like this

for (let i of str){
    console.log(i);
    size++;
}

console.log("size is:",size);

// ~~ for-in loop ~~ :- used for objects and arrays
// we get keys of object in this

// syntax is:- for(let key in objvar) { }

let student={
    fullName : "Rahul",
    age: 20,
    cgpa: 9,
    isPass: true,

};

for (let i in student){
    console.log("key is:",i,"& value is:", student[i]);
}
//gives key i.e fullname age cgpa isPass

// ~~~~~~~~~ Guess the no. GAME ~~~~~~~~~

// let main_num=7;
// let number=prompt("enter number");
// do{
//     number=prompt("enter again"); 
    
// }
// while(number!=main_num); //prompt se numberr string k form me aa rheh so won't be able to compare if we use !== as wo strict comparison 
//                           // kar lega so better h if we use != so simple comparison ho like num in form of string se

// console.log("well done!")

//  OR

// let main_num=7;

// let number=prompt("enter number");

// while(number != main_num){
//     number=prompt("enter again");

// };
// console.log("well done!")

// Strings can be in '' or " " and has str.length and str[1] properties.


let strr="Manya";
console.log(strr[1])

// Template Literals : kind of strings using `` backtrecks. It is a way to embed expressions in strings

let obj={
    item: 'pen',
    price: 10,
};

let output= `cost of ${obj.item } is ${obj.price} rupees` //this line is called string interpolation where we create strings by doing substitution of expressions.
console.log(output);

// we use ${ } for writing expressions like ${1+2+3} or ${obj.key}

// String Methods :- str.toUpperCase() .toLowerCase() trim() [removes whitespaces except bich wala]
// The methods create a copy of new string and not modifies the original string

let str1="Ayush";
newstr=str1.toUpperCase();
console.log(str1,newstr);

let str2="        Ayush Kumar";
newstr2=str2.trim();
console.log(str2,newstr2);

// ~~~~~ Strings are IMMUTABLE in JS. ~~~~~~

// Str more methods
/* str.slice(start,end)   [end not included]
str.concat(str2)
str.replace(searchVal,newVal)    [replaces only the first occurence ]
str.replaceAll(searchVal,newVal)      [replaces all occurences]
str.charAt(index)                 [to know what char is at index this]
*/

let str3="Kiran";
let str4="hellolololo"
console.log(str3.slice(1,4));
console.log(str3.concat(" Kumari"));
console.log(str3.concat(8));
console.log(str3.replace("a","o"));
console.log(str3.replace("an","o"));
console.log(str4.replace("lo","p"));
console.log(str4.replaceAll("lo","p"));
console.log(str3.charAt(0)); //K


// Username printing in format @Manya5 {i.e len of name}
let username="@"+ str3 + str3.length;
console.log(username);









