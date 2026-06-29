console.log("Helloo!");
alert("Hi User!");

// there is a window obj which represents an open window in a browser . It is a global obj with lots of properties n methods.

// WINDOWS -> DOCUMENT -> HTML ->1. HEAD  2. BODY ....->and so on

// The above is a diagram of a DOM this is helpful in reaching a particular node

console.log(document) //this will give just the html part of doc
console.dir(document); //so we can use this to get the whole info of document
console.log(document.body); //or through log we can use this kind of syntax to get the document body
// we can use this above line to get many info about document like document.url or .links or 2nd link like document.links[2]
// also document.links gives a COLLECTION of links . that is not a array so can't apply array functions
 

// DOM is used for dynamic changes (where dynamic means Runtime, triggered by user actions or async tasks.)

// DOM MANIPULATION
// Selecting with id or class

// document.getElementById/getElementByclass("className")  {by class returns HTMLCollection}

 



// let myHeading= document.("headingg");
// console.dir(myHeading);





// similarly by tagg name

// QUERY SELECTOR
// It is used as a general case for all (just use . and # acc) and also returns Node list 

// document.querySelector(tagname or id or class)        //gives 1st occurence of element
// document.querySelectorAll(tagname or id or class)     //gives all occurences of element

// eg document.queryselector('.classname' or '#idname')

// nodes have first second ... last children
// types of nodes:- text, comment, element


// SOME PROPERTIES OF DOM MANIPULATION
/*
tagName: returns tag for element nodes
innerText: returns text content of the element and all its children
innerHTML: returns the plain text or& HTML contents in the element.
textContent: returns textual content even for hidden elements
*/
/* we can 'dynamically' change content inside body or inside any element or tag using this in console:-
say inside div (after accessing it like through query selector )
div.innerText = "abcd";
div.innerHTML="<div>hello inside div </div>";
*/

let heading=document.querySelector("h1");
console.dir(heading);

// WAP to  append text welcome in our pre made heading"

let heading2=document.querySelector("h1");
console.dir(heading2.innerText);
heading2.innerText= heading2.innerText + "Welcome";


// WAP to acees divs using a common class and add some new text in them
let divs = document.querySelectorAll(".box");    //class h so . se start
console.log("divs");
divs[0].innerText=" new text";
divs[1].innerText=" new text2";
divs[2].innerText=" new text3";

//or

let idx=1;
for( div of divs){
    div.innerText= `new unique value ${idx}`;
    idx++;
}

// GET ATTRIBUTE AND SETATTRIBUTE

/*The JavaScript getAttribute() method returns the string value of a specified attribute 
on an HTML element. If the target attribute does not exist on that element, it returns null */

// eg we know that we have a div created with id box now to get id attribute of that div we write
let mydiv = document.querySelector("mybox");
console.log(mydiv);
let id = mydiv.getAttribute("id");
console.log(id);

let para=document.querySelector("p");
console.log(p.getAttribute("class"));

console.log(p.setAttribute("class","newClass"));  //changing old class name to new class name

//STYLE Property
mybox.style.backgroundColor="green";
mydiv.style.fontSize="55px";
mydiv.innerText="helloooo";

let newBtn= document.createElement("button");
console.log(newBtn);











