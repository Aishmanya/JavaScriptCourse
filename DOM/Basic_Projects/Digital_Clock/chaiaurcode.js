// so basically in this project we want ki digital clock ho mtlb lagatar time dikhaye har second ka
// toh we'll need something like jo continuously output de ya phir say kuch interval pe output de ( say 1 sec interval) so for this we have setInterval


// setInterval(method,interval in ms) :- It takes a method to perform continuously and an interval in ms afte which to repeat that method
// Syntax :- setInterval(function(){} , 1000)


const clock = document.getElementById('clock')
// const date = new Date(); ya likhenge toh cont time ni show karega which is our aim as sirf ek baar wo access kara current time and usi ko baar baar show kar rha through setInterval  

setInterval(function(){
    const date = new Date();        //ab yahan wo har sec me access kar rha and show kar rha output 
    clock.innerHTML = date.toLocaleTimeString();
} , 1000)




