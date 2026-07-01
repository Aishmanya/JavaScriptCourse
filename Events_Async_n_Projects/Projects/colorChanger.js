// generating random colors
const randomColor = function(){
    const hex='0123456789ABCDEF'
    let color='#'
    for (let i=0; i<6; i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    console.log(color)
    return color
}

const start= document.querySelector('#start')
const stop= document.querySelector('#stop')

const changeColor = function(){
    document.body.style.backgroundColor= randomColor()
}

let colorInterval;

start.addEventListener('click',function(e){
    if (!colorInterval) {
        colorInterval = setInterval(changeColor, 1000);
    }
})

stop.addEventListener('click',function(e){
    clearInterval(colorInterval);
    colorInterval = null;
})

// Optional improvement:-
// If the user clicks Start multiple times, you'll create multiple intervals. So, to avoid that we have used if (!colorInterval) and colorInterval = null;





