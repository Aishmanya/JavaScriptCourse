// ADDING ELEMENTS TO SCREEN THROUGH JS
// Step 1 CREATE      Step 2 ADD


//CREATE PART
let newBtn= document.createElement("button");
newBtn.innerText="click me";
console.log(newBtn);

// ye karne se temporarily screen pe aaega then refresh se gayab

// to get it permanentl on screen we have to add this as a node to that DOM Tree
// ADD PART

/*
We have 4 methods for adding elements
node.append(el) 
node.prepend(el)
node.before(el)
node.after(el)
*/
//or a simple method
document.body.appendChild(newBtn)




