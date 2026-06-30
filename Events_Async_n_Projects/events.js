// Three ways of writng events

/**
1. Inline :- Like html tag jo h usi me likh diye ki say 'onclick=alert("msg")'

2. document.getElementbyId('id').onclick=alert("msg")  //or getElementbyClass anything (queryselector maybe)

3. best way with propagation features

const box = document.getElementbyId('id')
box.addEventListener('click',function(e){})
*/

// ACTUAL SYNTAX:- 
// box.addEventListener('click',function(e){}, false)
// here FALSE is by default but u can set it to TRUE but this false/true parameter is very important

// ~~~~~~~~ Some IMP topic to cover (properties of an event object) ~~~~~~~~~~~~

// type, timestamp, preventDefault
// target, toElement, secElement, currentTarget
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode


// ++++++ EVENT PROPAGATION (Bubbling & Capturing) +++++++

// i.e use of para false or true 
// FALSE is Event Bubbling ,TRUE is Event Capturing

// In Event Bubbling propagation is from inwards to outwards i.e current level to outer level
// and Event Capturing me ulta 

/* Additional feature of event bubblilng is 'e.stopPropagation()' which basically avoids Event Propagation i.e printing both things inside in to out level
just current level ka kaam karta */



// ~~~~~~~~~~~~~~~~~~~~~~ Query for removing the image we click on browsser  ~~~~~~~~~~~~~~~~~~

// here images is the whole box containing all images 
document.querySelector('#images').addEventListener
('click',function(e){
    console.log(e.target.tagName); //to get the tag name of targetted event obj
    if (e.target.tagName === 'IMG'){
        console.log(e.target.id);
        let removeIt = e.target.parentNode
        removeIt.remove()
        
    }
})


// ++++++++++++++++ Interview Questions ++++++++++++++
// 1. JS Code for creating a div inside which whereever I click a circle is created there.

// 2. JS Code for telling time when screen was clicked
